"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import { IconArrowRight, IconCheck, IconPhone } from "@/components/Icons";
import { contactForm, site } from "@/lib/site";

type Values = {
  name: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  size: string;
  date: string;
  message: string;
  consent: boolean;
  website: string;
};

const empty: Values = {
  name: "",
  email: "",
  phone: "",
  service: "",
  location: "",
  size: "",
  date: "",
  message: "",
  consent: false,
  website: "",
};

const services = ["Entkernung & Innenabbruch", "Gebäudereinigung", "Beides", "Sonstiges"];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-steel-100 outline-none transition placeholder:text-steel-600 focus:border-brand-500/60 focus:bg-white/[0.05] focus:ring-2 focus:ring-brand-500/20";

const labelClass =
  "mb-2 block font-display text-[0.7rem] font-medium uppercase tracking-[0.18em] text-steel-400";

/** Gleiche Regeln wie in der API-Route – damit beide Versandwege identisch prüfen. */
function validate(values: Values) {
  const errors: Record<string, string> = {};

  if (values.name.trim().length < 2) errors.name = "Bitte geben Sie Ihren Namen an.";
  if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(values.email.trim())) {
    errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Bitte beschreiben Sie Ihr Projekt kurz (min. 10 Zeichen).";
  }
  if (values.message.trim().length > 5000) {
    errors.message = "Die Nachricht ist zu lang (max. 5000 Zeichen).";
  }
  if (!values.consent) errors.consent = "Bitte stimmen Sie der Datenschutzerklärung zu.";

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const startedAt = useRef(Date.now());

  const update = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const target = e.target;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;

    setValues((prev) => ({ ...prev, [target.name]: value }));
    setErrors((prev) => {
      if (!prev[target.name]) return prev;
      const next = { ...prev };
      delete next[target.name];
      return next;
    });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const clientErrors = validate(values);
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      setServerError("Bitte prüfen Sie die markierten Felder.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setServerError("");
    setErrors({});

    // Spam-Schutz: ausgefülltes Honigtopf-Feld oder Absenden in unter 3 Sekunden.
    if (values.website || Date.now() - startedAt.current < 3000) {
      setStatus("ok");
      setValues(empty);
      return;
    }

    try {
      if (contactForm.provider === "formsubmit") {
        await sendViaFormsubmit(values);
      } else {
        await sendViaOwnRoute(values, startedAt.current, setErrors);
      }
      setStatus("ok");
      setValues(empty);
    } catch (error) {
      setServerError(
        error instanceof Error
          ? error.message
          : "Die Anfrage konnte nicht gesendet werden. Bitte rufen Sie uns an.",
      );
      setStatus("error");
    }
  };

  if (status === "ok") {
    return (
      <div className="panel flex min-h-[26rem] flex-col items-center justify-center rounded-3xl p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-brand-500/40 bg-brand-500/10">
          <IconCheck className="h-7 w-7 text-brand-300" strokeWidth={2.2} />
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-wide text-steel-100">
          Anfrage ist raus
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-steel-400">
          Vielen Dank! Wir melden uns am selben Werktag bei Ihnen zurück. Wenn es eilt,
          erreichen Sie uns jederzeit telefonisch.
        </p>
        <a href={site.phoneHref} className="btn btn-ghost mt-7 h-12 px-6 text-sm">
          <IconPhone className="h-4 w-4 text-brand-400" />
          {site.phonePretty}
        </a>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-xs uppercase tracking-[0.18em] text-steel-600 transition-colors hover:text-steel-300"
        >
          Weitere Anfrage senden
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="panel relative rounded-3xl p-6 sm:p-8">
      <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-steel-100">
        Projekt beschreiben
      </h3>
      <p className="mt-2 text-sm text-steel-500">
        Je genauer, desto schneller können wir kalkulieren.
      </p>

      {/* Honeypot – für Menschen unsichtbar */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={update}
        />
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Name *
          </label>
          <input
            id="name"
            name="name"
            value={values.name}
            onChange={update}
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Max Mustermann"
            aria-invalid={!!errors.name}
          />
          <FieldError message={errors.name} />
        </div>

        <div>
          <label className={labelClass} htmlFor="email">
            E-Mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={update}
            required
            autoComplete="email"
            className={inputClass}
            placeholder="name@beispiel.de"
            aria-invalid={!!errors.email}
          />
          <FieldError message={errors.email} />
        </div>

        <div>
          <label className={labelClass} htmlFor="phone">
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={update}
            autoComplete="tel"
            className={inputClass}
            placeholder="0170 1234567"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="service">
            Leistung
          </label>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={update}
            className={`${inputClass} appearance-none`}
          >
            <option value="">Bitte wählen</option>
            {services.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="location">
            Objekt / Ort
          </label>
          <input
            id="location"
            name="location"
            value={values.location}
            onChange={update}
            className={inputClass}
            placeholder="z. B. Wohnung, 76229 Karlsruhe"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="size">
            Größe / Fläche
          </label>
          <input
            id="size"
            name="size"
            value={values.size}
            onChange={update}
            className={inputClass}
            placeholder="z. B. 85 m², 3 Zimmer"
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="date">
            Wunschtermin
          </label>
          <input
            id="date"
            name="date"
            value={values.date}
            onChange={update}
            className={inputClass}
            placeholder="z. B. ab KW 42 oder kurzfristig"
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="message">
            Ihr Projekt *
          </label>
          <textarea
            id="message"
            name="message"
            value={values.message}
            onChange={update}
            required
            rows={5}
            className={`${inputClass} resize-y`}
            placeholder="Was soll gemacht werden? Zugang, Etage, Aufzug, besondere Anforderungen …"
            aria-invalid={!!errors.message}
          />
          <FieldError message={errors.message} />
        </div>
      </div>

      <label className="mt-6 flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-steel-400">
        <input
          type="checkbox"
          name="consent"
          checked={values.consent}
          onChange={update}
          required
          className="mt-0.5 h-4 w-4 shrink-0 accent-brand-500"
          aria-invalid={!!errors.consent}
        />
        <span>
          Ich habe die{" "}
          <Link href="/datenschutz" className="text-brand-300 underline underline-offset-2">
            Datenschutzerklärung
          </Link>{" "}
          gelesen und stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage
          verarbeitet werden. *
        </span>
      </label>
      <FieldError message={errors.consent} />

      {serverError ? (
        <p
          role="alert"
          className="mt-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
        >
          {serverError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-primary mt-7 h-14 w-full text-base disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Wird gesendet …" : "Anfrage absenden"}
        {status === "sending" ? null : <IconArrowRight className="h-4 w-4" />}
      </button>

      <p className="mt-4 text-center text-xs text-steel-600">
        * Pflichtfelder · Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage genutzt.
      </p>
    </form>
  );
}

/* ---------- Versandwege ---------- */

const FORMSUBMIT_BASE = "https://formsubmit.co/ajax";

async function sendViaFormsubmit(values: Values) {
  const subject = `Anfrage${values.service ? ` (${values.service})` : ""} von ${values.name}`;

  const response = await fetch(`${FORMSUBMIT_BASE}/${contactForm.formsubmitCode}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      Name: values.name,
      "E-Mail": values.email,
      Telefon: values.phone,
      Leistung: values.service,
      "Objekt / Ort": values.location,
      "Größe / Fläche": values.size,
      Wunschtermin: values.date,
      Nachricht: values.message,
      _subject: subject,
      _replyto: values.email,
      _template: "table",
      _captcha: "false",
      _honey: values.website,
    }),
  });

  let data: { success?: boolean | string; message?: string } = {};
  try {
    data = await response.json();
  } catch {
    /* Antwort ohne JSON – wird unten über den Status behandelt */
  }

  const success = data.success === true || data.success === "true";

  if (!response.ok || !success) {
    throw new Error(
      data.message ||
        "Die Anfrage konnte nicht zugestellt werden. Bitte rufen Sie uns an – wir sind rund um die Uhr erreichbar.",
    );
  }
}

async function sendViaOwnRoute(
  values: Values,
  startedAt: number,
  setErrors: (errors: Record<string, string>) => void,
) {
  const response = await fetch("/api/anfrage", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...values, startedAt }),
  });

  const data = await response.json();

  if (response.ok && data.ok) return;

  if (data.errors) setErrors(data.errors);
  throw new Error(data.error ?? "Bitte prüfen Sie die markierten Felder.");
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-2 text-xs text-red-300">{message}</p>;
}
