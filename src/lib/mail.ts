import nodemailer from "nodemailer";

/**
 * Zwei Wege, Anfragen zu versenden:
 *
 *   1. "smtp"   – über das eigene Postfach (empfohlen, keine zusätzlichen
 *                 Dienstleister, Daten bleiben beim eigenen Mailanbieter).
 *                 Host und Port kommen aus der Preset-Liste unten, damit man
 *                 nur noch Anbieter, Adresse und Passwort eintragen muss.
 *   2. "resend" – über resend.com, dann genügt ein API-Key.
 */

export type MailMode = "smtp" | "resend" | "none";

/** Gängige Anbieter. Abweichungen jederzeit über MAIL_HOST / MAIL_PORT möglich. */
export const presets: Record<string, { host: string; port: number; label: string }> = {
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

export type MailConfig =
  | { mode: "none"; reason: string }
  | { mode: "resend"; apiKey: string; from: string; to: string }
  | {
      mode: "smtp";
      host: string;
      port: number;
      user: string;
      pass: string;
      from: string;
      to: string;
    };

function env(...names: string[]) {
  for (const name of names) {
    const value = process.env[name];
    if (value && value.trim()) return value.trim();
  }
  return "";
}

export function getMailConfig(): MailConfig {
  const to = env("MAIL_TO", "CONTACT_TO");
  const resendKey = env("RESEND_API_KEY");

  if (resendKey) {
    const from = env("MAIL_FROM", "SMTP_FROM");
    if (!from) {
      return {
        mode: "none",
        reason: "RESEND_API_KEY ist gesetzt, aber MAIL_FROM fehlt.",
      };
    }
    if (!to) return { mode: "none", reason: "MAIL_TO fehlt." };
    return { mode: "resend", apiKey: resendKey, from, to };
  }

  const preset = env("MAIL_PRESET").toLowerCase();
  const presetConfig = preset ? presets[preset] : undefined;

  if (preset && !presetConfig && !env("MAIL_HOST", "SMTP_HOST")) {
    return {
      mode: "none",
      reason: `Unbekanntes MAIL_PRESET "${preset}". Bekannt: ${Object.keys(presets).join(", ")} – oder MAIL_HOST/MAIL_PORT direkt setzen.`,
    };
  }

  const host = env("MAIL_HOST", "SMTP_HOST") || presetConfig?.host || "";
  const user = env("MAIL_USER", "SMTP_USER");
  const pass = env("MAIL_PASS", "SMTP_PASS");

  if (!host || !user || !pass) {
    return {
      mode: "none",
      reason:
        "Es fehlen Zugangsdaten. Benötigt werden MAIL_PRESET (oder MAIL_HOST), MAIL_USER und MAIL_PASS.",
    };
  }

  const port = Number(env("MAIL_PORT", "SMTP_PORT")) || presetConfig?.port || 587;

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

export type MailPayload = {
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
};

export async function sendMail(payload: MailPayload, config = getMailConfig()) {
  if (config.mode === "none") {
    throw new Error(`Mailversand ist nicht konfiguriert: ${config.reason}`);
  }

  if (config.mode === "resend") {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: config.from,
        to: [config.to],
        reply_to: payload.replyTo,
        subject: payload.subject,
        text: payload.text,
        html: payload.html,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      throw new Error(`Resend antwortete mit ${response.status}: ${detail}`);
    }
    return;
  }

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: { user: config.user, pass: config.pass },
  });

  await transporter.sendMail({
    from: config.from,
    to: config.to,
    replyTo: payload.replyTo,
    subject: payload.subject,
    text: payload.text,
    html: payload.html,
  });
}

/** Übersetzt typische Fehler in eine Klartext-Diagnose für das Setup-Skript. */
export function explainMailError(error: unknown) {
  const raw = error instanceof Error ? error.message : String(error);
  const code = (error as { code?: string } | null)?.code ?? "";

  if (code === "EAUTH" || /invalid login|authentication failed|535/i.test(raw)) {
    return "Benutzername oder Passwort wurden nicht akzeptiert. Bei Gmail und Microsoft 365 wird ein App-Passwort benötigt, nicht das normale Passwort.";
  }
  if (code === "ENOTFOUND" || /getaddrinfo/i.test(raw)) {
    return "Der Server wurde nicht gefunden. Vermutlich stimmt MAIL_PRESET bzw. MAIL_HOST nicht.";
  }
  if (code === "ETIMEDOUT" || code === "ECONNECTION" || /timed? out/i.test(raw)) {
    return "Keine Verbindung zum Mailserver. Meist ist der Port falsch (587 für STARTTLS, 465 für SSL) oder eine Firewall blockiert ihn.";
  }
  if (/self.signed|certificate/i.test(raw)) {
    return "Das Zertifikat des Mailservers wurde abgelehnt. Bitte den vom Anbieter genannten Hostnamen exakt übernehmen.";
  }
  if (/domain is not verified|not verified/i.test(raw)) {
    return "Resend hat die Absender-Domain noch nicht verifiziert. Im Resend-Dashboard unter Domains die DNS-Einträge hinterlegen.";
  }
  return raw;
}
