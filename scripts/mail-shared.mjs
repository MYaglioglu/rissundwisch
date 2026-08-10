/** Gemeinsame Logik für "npm run mail:setup" und "npm run mail:test". */
import { readFileSync, existsSync } from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";

const require = createRequire(import.meta.url);

/* Muss mit den Presets in src/lib/mail.ts übereinstimmen. */
export const presets = {
  ionos: { host: "smtp.ionos.de", port: 587, label: "IONOS / 1&1" },
  strato: { host: "smtp.strato.de", port: 587, label: "Strato" },
  hetzner: { host: "mail.your-server.de", port: 587, label: "Hetzner" },
  mailbox: { host: "smtp.mailbox.org", port: 587, label: "mailbox.org" },
  udag: { host: "smtp.udag.de", port: 587, label: "united-domains" },
  df: { host: "sslmailpool.ispgateway.de", port: 587, label: "domainfactory" },
  office365: { host: "smtp.office365.com", port: 587, label: "Microsoft 365 / Outlook" },
  gmail: { host: "smtp.gmail.com", port: 587, label: "Gmail (App-Passwort nötig)" },
  gmx: { host: "mail.gmx.net", port: 587, label: "GMX" },
  webde: { host: "smtp.web.de", port: 587, label: "WEB.DE" },
};

export const envPath = path.join(process.cwd(), ".env.local");

export function loadEnvLocal() {
  if (!existsSync(envPath)) return false;

  for (const line of readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const match = /^\s*([A-Z0-9_]+)\s*=\s*(.*)$/.exec(line);
    if (!match) continue;
    let value = match[2].trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    process.env[match[1]] = value;
  }
  return true;
}

export const env = (...names) => {
  for (const name of names) {
    const value = process.env[name];
    if (value && value.trim()) return value.trim();
  }
  return "";
};

export function explain(error) {
  const raw = error instanceof Error ? error.message : String(error);
  const code = error?.code ?? "";

  if (code === "EAUTH" || /invalid login|authentication failed|535/i.test(raw)) {
    return "Benutzername oder Passwort wurden nicht akzeptiert. Bei Gmail und Microsoft 365 wird ein App-Passwort benötigt, nicht das normale Passwort.";
  }
  if (code === "ENOTFOUND" || /getaddrinfo/i.test(raw)) {
    return "Der Mailserver wurde nicht gefunden – vermutlich stimmt der Anbieter bzw. MAIL_HOST nicht.";
  }
  if (code === "ETIMEDOUT" || code === "ECONNECTION" || /timed? out/i.test(raw)) {
    return "Keine Verbindung zum Mailserver. Meist ist der Port falsch (587 für STARTTLS, 465 für SSL) oder eine Firewall blockiert ihn.";
  }
  if (/self.signed|certificate/i.test(raw)) {
    return "Das Zertifikat des Mailservers wurde abgelehnt. Bitte den vom Anbieter genannten Hostnamen exakt übernehmen.";
  }
  if (/domain is not verified|not verified/i.test(raw)) {
    return "Resend hat die Absender-Domain noch nicht verifiziert. Im Resend-Dashboard unter „Domains“ die DNS-Einträge hinterlegen.";
  }
  return raw;
}

export const testMail = {
  subject: "Testmail von der Riss & Wisch Website",
  text: "Wenn Sie diese Nachricht lesen, funktioniert der Mailversand des Anfrageformulars.",
  html: '<div style="font-family:Arial,sans-serif"><h2 style="margin:0 0 8px">Testmail</h2><p>Wenn Sie diese Nachricht lesen, funktioniert der Mailversand des Anfrageformulars.</p></div>',
};

/** Liest die aktuelle Konfiguration aus den Umgebungsvariablen. */
export function readConfig() {
  const to = env("MAIL_TO", "CONTACT_TO");
  const resendKey = env("RESEND_API_KEY");

  if (resendKey) {
    return {
      mode: "resend",
      apiKey: resendKey,
      from: env("MAIL_FROM", "SMTP_FROM"),
      to,
    };
  }

  const preset = env("MAIL_PRESET").toLowerCase();
  if (preset && !presets[preset] && !env("MAIL_HOST", "SMTP_HOST")) {
    return { mode: "invalid-preset", preset };
  }

  const host = env("MAIL_HOST", "SMTP_HOST") || presets[preset]?.host || "";
  const user = env("MAIL_USER", "SMTP_USER");
  const pass = env("MAIL_PASS", "SMTP_PASS");
  const port = Number(env("MAIL_PORT", "SMTP_PORT")) || presets[preset]?.port || 587;

  return {
    mode: "smtp",
    host,
    port,
    user,
    pass,
    from: env("MAIL_FROM", "SMTP_FROM") || user,
    to: to || user,
  };
}

/**
 * Verbindet, meldet sich an und verschickt die Testmail.
 * Gibt { ok: true } oder { ok: false, step, message } zurück.
 */
export async function verifyAndSend(config) {
  if (config.mode === "resend") {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${config.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ from: config.from, to: [config.to], ...testMail }),
      });
      if (!response.ok) {
        return {
          ok: false,
          step: "send",
          message: explain(new Error(await response.text())),
        };
      }
      return { ok: true };
    } catch (error) {
      return { ok: false, step: "send", message: explain(error) };
    }
  }

  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: { user: config.user, pass: config.pass },
  });

  try {
    await transporter.verify();
  } catch (error) {
    return { ok: false, step: "login", message: explain(error) };
  }

  try {
    await transporter.sendMail({ from: config.from, to: config.to, ...testMail });
  } catch (error) {
    return { ok: false, step: "send", message: explain(error) };
  }

  return { ok: true };
}
