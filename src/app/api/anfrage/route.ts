import { NextResponse } from "next/server";
import { getMailConfig, sendMail } from "@/lib/mail";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* ---------- Rate-Limit (einfach, pro Serverinstanz) ---------- */

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // Speicher nicht unbegrenzt wachsen lassen
  if (hits.size > 500) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }

  return recent.length > MAX_REQUESTS;
}

/* ---------- Validierung ---------- */

type Payload = {
  name: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  size: string;
  date: string;
  message: string;
  consent: boolean;
  website?: string; // Honeypot
  startedAt?: number;
};

const services = ["Entkernung & Innenabbruch", "Gebäudereinigung", "Beides", "Sonstiges"];

function validate(data: Partial<Payload>) {
  const errors: Record<string, string> = {};
  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

  const name = str(data.name);
  const email = str(data.email);
  const phone = str(data.phone);
  const message = str(data.message);
  const service = str(data.service);

  if (name.length < 2 || name.length > 100) errors.name = "Bitte geben Sie Ihren Namen an.";
  if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(email) || email.length > 150) {
    errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
  }
  if (phone.length > 40) errors.phone = "Die Telefonnummer ist zu lang.";
  if (service && !services.includes(service)) errors.service = "Unbekannte Leistung.";
  if (message.length < 10) errors.message = "Bitte beschreiben Sie Ihr Projekt kurz (min. 10 Zeichen).";
  if (message.length > 5000) errors.message = "Die Nachricht ist zu lang (max. 5000 Zeichen).";
  if (data.consent !== true) errors.consent = "Bitte stimmen Sie der Datenschutzerklärung zu.";

  return errors;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ---------- Handler ---------- */

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Zu viele Anfragen. Bitte rufen Sie uns kurz an." },
      { status: 429 },
    );
  }

  let data: Partial<Payload>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Ungültige Anfrage." }, { status: 400 });
  }

  // Honeypot: für Menschen unsichtbar, Bots füllen es aus.
  // Zusätzlich: wer in unter 3 Sekunden absendet, war kein Mensch.
  const tooFast =
    typeof data.startedAt === "number" && Date.now() - data.startedAt < 3000;

  if ((typeof data.website === "string" && data.website.length > 0) || tooFast) {
    // Bots bekommen ein "OK", damit sie nicht nachjustieren.
    return NextResponse.json({ ok: true });
  }

  const errors = validate(data);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const mailConfig = getMailConfig();

  if (mailConfig.mode === "none") {
    console.error(
      `[anfrage] Mailversand nicht konfiguriert: ${mailConfig.reason} Siehe .env.example, danach "npm run mail:test".`,
    );
    return NextResponse.json(
      {
        ok: false,
        error:
          "Das Formular ist gerade nicht erreichbar. Bitte rufen Sie uns an oder schreiben Sie uns direkt eine E-Mail.",
      },
      { status: 503 },
    );
  }

  const field = (label: string, value: string) =>
    value
      ? `<tr><td style="padding:6px 16px 6px 0;color:#78818f;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 0;color:#11151d">${escapeHtml(value)}</td></tr>`
      : "";

  const name = String(data.name).trim();
  const email = String(data.email).trim();
  const phone = String(data.phone ?? "").trim();
  const service = String(data.service ?? "").trim();
  const location = String(data.location ?? "").trim();
  const size = String(data.size ?? "").trim();
  const date = String(data.date ?? "").trim();
  const message = String(data.message).trim();

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#11151d">
      <h2 style="margin:0 0 4px;font-size:18px">Neue Anfrage über ${site.domainPretty}</h2>
      <p style="margin:0 0 18px;color:#78818f">Eingegangen am ${new Date().toLocaleString("de-DE")}</p>
      <table style="border-collapse:collapse">
        ${field("Name", name)}
        ${field("E-Mail", email)}
        ${field("Telefon", phone)}
        ${field("Leistung", service)}
        ${field("Objekt / Ort", location)}
        ${field("Größe / Fläche", size)}
        ${field("Wunschtermin", date)}
      </table>
      <p style="margin:18px 0 6px;color:#78818f">Nachricht</p>
      <div style="white-space:pre-wrap;padding:12px 14px;background:#f4f6f9;border-radius:8px">${escapeHtml(message)}</div>
    </div>
  `;

  const text = [
    `Neue Anfrage über ${site.domainPretty}`,
    "",
    `Name: ${name}`,
    `E-Mail: ${email}`,
    phone && `Telefon: ${phone}`,
    service && `Leistung: ${service}`,
    location && `Objekt / Ort: ${location}`,
    size && `Größe / Fläche: ${size}`,
    date && `Wunschtermin: ${date}`,
    "",
    "Nachricht:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await sendMail(
      {
        subject: `Anfrage${service ? ` (${service})` : ""} von ${name}`,
        replyTo: `${name} <${email}>`,
        text,
        html,
      },
      mailConfig,
    );
  } catch (error) {
    console.error("[anfrage] Versand fehlgeschlagen:", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Die Anfrage konnte nicht versendet werden. Bitte rufen Sie uns an – wir kümmern uns sofort.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
