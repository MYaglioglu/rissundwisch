/**
 * Richtet den Mailversand in einem Durchgang ein:
 * fragt nach Anbieter, Adresse und Passwort, schreibt .env.local
 * und verschickt sofort eine Testmail.
 *
 * Aufruf:  npm run mail:setup
 */
import { writeFileSync, existsSync, copyFileSync } from "node:fs";
import readline from "node:readline/promises";
import { stdin, stdout } from "node:process";
import { envPath, presets, readConfig, verifyAndSend } from "./mail-shared.mjs";

const rl = readline.createInterface({ input: stdin, output: stdout });
const entries = Object.entries(presets);

const line = (text = "") => stdout.write(`${text}\n`);

const CTRL_C = "\u0003";
const BACKSPACE = "\u007F";

/** Passworteingabe ohne sichtbare Zeichen (sofern ein echtes Terminal vorliegt). */
async function askSecret(question) {
  if (!stdin.isTTY) return (await rl.question(question)).trim();

  stdout.write(question);
  stdin.setRawMode(true);
  stdin.resume();

  return new Promise((resolve) => {
    let value = "";
    const onData = (chunk) => {
      const char = chunk.toString("utf8");

      if (char === "\r" || char === "\n") {
        stdin.setRawMode(false);
        stdin.removeListener("data", onData);
        stdout.write("\n");
        resolve(value.trim());
        return;
      }
      if (char === CTRL_C) {
        stdin.setRawMode(false);
        stdout.write("\n");
        process.exit(1);
      }
      if (char === BACKSPACE || char === "\b") {
        if (value.length > 0) {
          value = value.slice(0, -1);
          stdout.write("\b \b");
        }
        return;
      }
      value += char;
      stdout.write("*");
    };
    stdin.on("data", onData);
  });
}

line();
line("  Mailversand für das Anfrageformular einrichten");
line("  ----------------------------------------------");
line();

if (existsSync(envPath)) {
  const answer = (
    await rl.question("  Es gibt bereits eine .env.local. Überschreiben? [j/N] ")
  )
    .trim()
    .toLowerCase();

  if (answer !== "j" && answer !== "ja" && answer !== "y") {
    line("\n  Abgebrochen. Die bestehende Konfiguration bleibt unverändert.\n");
    rl.close();
    process.exit(0);
  }
  copyFileSync(envPath, `${envPath}.backup`);
  line("  Sicherungskopie abgelegt unter .env.local.backup");
  line();
}

line("  Wo liegt Ihr E-Mail-Postfach?");
line();
entries.forEach(([, preset], index) => {
  line(`    ${String(index + 1).padStart(2, " ")})  ${preset.label}`);
});
line(`    ${entries.length + 1})  Anderer Anbieter (Server selbst eintragen)`);
line(`    ${entries.length + 2})  Resend (nur API-Key)`);
line();

const choice = Number((await rl.question("  Nummer eingeben: ")).trim());

if (!Number.isInteger(choice) || choice < 1 || choice > entries.length + 2) {
  line("\n  ✖  Ungültige Eingabe. Bitte eine der angezeigten Nummern eingeben.\n");
  rl.close();
  process.exit(1);
}

let lines = [];

if (choice === entries.length + 2) {
  /* ---------- Resend ---------- */
  const apiKey = await askSecret("  Resend API-Key (beginnt mit re_): ");
  const from =
    (await rl.question("  Absenderadresse [info@rissundwisch.de]: ")).trim() ||
    "info@rissundwisch.de";
  const to = (await rl.question(`  Anfragen sollen ankommen bei [${from}]: `)).trim() || from;

  if (!apiKey) {
    line("\n  ✖  Ohne API-Key kann nichts versendet werden.\n");
    rl.close();
    process.exit(1);
  }

  lines = [
    `RESEND_API_KEY=${apiKey}`,
    `MAIL_FROM="Riss & Wisch Website <${from}>"`,
    `MAIL_TO=${to}`,
  ];
} else {
  /* ---------- Eigenes Postfach ---------- */
  let host = "";
  let port = 587;
  let presetKey = "";

  if (choice === entries.length + 1) {
    host = (await rl.question("  Postausgangsserver (SMTP), z. B. smtp.anbieter.de: ")).trim();
    port = Number((await rl.question("  Port [587]: ")).trim()) || 587;

    if (!host) {
      line("\n  ✖  Ohne Server kann nichts versendet werden.\n");
      rl.close();
      process.exit(1);
    }
  } else {
    presetKey = entries[choice - 1][0];
  }

  const user =
    (await rl.question("  E-Mail-Adresse [info@rissundwisch.de]: ")).trim() ||
    "info@rissundwisch.de";
  const pass = await askSecret("  Passwort des Postfachs: ");
  const to = (await rl.question(`  Anfragen sollen ankommen bei [${user}]: `)).trim() || user;

  if (!pass) {
    line("\n  ✖  Ohne Passwort kann sich die Website nicht anmelden.\n");
    rl.close();
    process.exit(1);
  }

  lines = presetKey ? [`MAIL_PRESET=${presetKey}`] : [`MAIL_HOST=${host}`, `MAIL_PORT=${port}`];

  lines.push(
    `MAIL_USER=${user}`,
    `MAIL_PASS=${pass}`,
    `MAIL_FROM="Riss & Wisch Website <${user}>"`,
    `MAIL_TO=${to}`,
  );
}

rl.close();

const content = `# Automatisch erstellt von "npm run mail:setup".\n# Diese Datei enthält Zugangsdaten und gehört nicht ins Repository.\n\n${lines.join("\n")}\n`;
writeFileSync(envPath, content, "utf8");

line();
line("  ✔  .env.local wurde gespeichert.");
line();
line("  →  Testmail wird verschickt …");

/* Frisch geschriebene Werte übernehmen und sofort ausprobieren */
for (const entry of lines) {
  const match = /^([A-Z0-9_]+)=(.*)$/.exec(entry);
  if (!match) continue;
  let value = match[2];
  if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
  process.env[match[1]] = value;
}

const result = await verifyAndSend(readConfig());

if (!result.ok) {
  line();
  line(
    `  ✖  ${
      result.step === "login"
        ? "Die Anmeldung am Mailserver ist fehlgeschlagen."
        : "Die Testmail konnte nicht versendet werden."
    }`,
  );
  line();
  line(`     ${result.message}`);
  line();
  line('     Einfach "npm run mail:setup" erneut starten und die Angaben korrigieren.');
  line();
  process.exit(1);
}

line();
line("  ✔  Fertig. Die Testmail ist unterwegs – bitte das Postfach prüfen (auch Spam).");
line("     Das Anfrageformular ist damit scharf geschaltet.");
line();
