/**
 * Prüft die gespeicherte Mail-Konfiguration und verschickt eine Testnachricht.
 * Aufruf:  npm run mail:test
 */
import { loadEnvLocal, presets, readConfig, verifyAndSend } from "./mail-shared.mjs";

const line = (text = "") => process.stdout.write(`${text}\n`);

const fail = (message, hint) => {
  line();
  line(`  ✖  ${message}`);
  if (hint) {
    line();
    line(`     ${hint}`);
  }
  line();
  process.exit(1);
};

if (!loadEnvLocal()) {
  fail(
    "Es ist noch keine Mail-Konfiguration vorhanden.",
    'Am einfachsten mit "npm run mail:setup" einrichten – das fragt alles ab und testet direkt.',
  );
}

const config = readConfig();

if (config.mode === "invalid-preset") {
  fail(
    `Der Anbieter "${config.preset}" ist unbekannt.`,
    `Möglich sind: ${Object.keys(presets).join(", ")}. Oder einfach "npm run mail:setup" starten.`,
  );
}

if (config.mode === "resend") {
  if (!config.from) fail("RESEND_API_KEY ist gesetzt, aber MAIL_FROM fehlt.");
  if (!config.to) fail("MAIL_TO fehlt – dorthin sollen die Anfragen gehen.");
  line();
  line(`  →  Versand über Resend`);
  line(`     Von:  ${config.from}`);
  line(`     An:   ${config.to}`);
} else {
  if (!config.host) fail("Es fehlt der Mailserver.", 'Bitte "npm run mail:setup" starten.');
  if (!config.user) fail("Es fehlt die E-Mail-Adresse (MAIL_USER).");
  if (!config.pass) fail("Es fehlt das Passwort (MAIL_PASS).");
  line();
  line(`  →  Versand über das eigene Postfach`);
  line(`     Server: ${config.host}:${config.port}`);
  line(`     Konto:  ${config.user}`);
  line(`     An:     ${config.to}`);
}

line();

const result = await verifyAndSend(config);

if (!result.ok) {
  fail(
    result.step === "login"
      ? "Die Anmeldung am Mailserver ist fehlgeschlagen."
      : "Die Testmail konnte nicht versendet werden.",
    result.message,
  );
}

line("  ✔  Verbindung, Anmeldung und Versand erfolgreich.");
line("     Bitte das Postfach prüfen (auch Spam).");
line();
