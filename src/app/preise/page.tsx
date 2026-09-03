import type { Metadata } from "next";
import Link from "next/link";
import {
  IconArrowRight,
  IconCheck,
  IconPhone,
  IconQuote,
  IconShield,
} from "@/components/Icons";
import { bereiche, kategorien, vorteile, type KategorieId } from "@/lib/preise";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Preise & Leistungsübersicht",
  description:
    "Transparente Richtpreise für Unterhaltsreinigung, Bauendreinigung, Glas, Entkernung und Rückbau in Karlsruhe. Alle Preise netto, verbindlicher Festpreis nach kostenloser Besichtigung.",
  keywords: [
    "Gebäudereinigung Preise Karlsruhe",
    "Büroreinigung Preis pro m²",
    "Bauendreinigung Kosten",
    "Entkernung Preis pro m²",
    "Unterhaltsreinigung Kosten",
  ],
  alternates: { canonical: "/preise" },
};

const schritte = [
  {
    nr: "01",
    titel: "Kurz beschreiben",
    text: "Objektart, ungefähre Fläche und gewünschter Turnus genügen für eine erste Einordnung.",
  },
  {
    nr: "02",
    titel: "Besichtigung",
    text: "Kostenlos vor Ort oder anhand von Fotos, Plänen und Leistungsverzeichnis.",
  },
  {
    nr: "03",
    titel: "Festpreis",
    text: "Verbindliches Angebot mit klaren Positionen – in der Regel innerhalb von 24 Stunden.",
  },
];

export default function Preise() {
  return (
    <main className="relative overflow-hidden pb-24 pt-36 sm:pb-32 sm:pt-44">
      {/* Hintergrund */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          className="grid-lines absolute inset-0 opacity-60"
          style={{
            maskImage: "radial-gradient(90% 45% at 50% 0%, black, transparent 70%)",
            WebkitMaskImage: "radial-gradient(90% 45% at 50% 0%, black, transparent 70%)",
          }}
        />
        <div className="absolute -top-40 left-1/2 h-96 w-[52rem] max-w-full -translate-x-1/2 rounded-full bg-brand-700/16 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* ---------- Kopf ---------- */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="h-px w-8 bg-gradient-to-r from-brand-500 to-transparent"
            />
            <span className="font-display text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brand-400">
              Preise
            </span>
          </div>

          <h1 className="text-balance mt-5 font-display text-[clamp(2.2rem,5vw,3.5rem)] font-bold uppercase leading-[1.16]">
            <span className="text-metal">Leistungs- &amp;</span>{" "}
            <span className="text-brand-metal">Preisübersicht</span>
          </h1>

          <p className="text-balance mt-6 text-base leading-relaxed text-steel-400 sm:text-lg">
            Alle Richtpreise auf einen Blick – für gewerbliche, öffentliche und private
            Auftraggeber. Von der regelmäßigen Unterhaltsreinigung über Grund-, Glas- und
            Bauendreinigung bis zu Entkernung und Räumung.
          </p>
        </div>

        {/* ---------- Netto-Hinweis ---------- */}
        <div className="panel mt-10 flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-start sm:gap-5 sm:p-7">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-500/35 bg-brand-500/10 text-brand-300">
            <IconQuote className="h-5 w-5" />
          </span>
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-steel-100">
              Alle Preise verstehen sich netto
            </p>
            <p className="mt-2.5 text-sm leading-relaxed text-steel-400">
              Die genannten Beträge sind Nettopreise und transparente <strong>Richtwerte</strong>{" "}
              zur schnellen Orientierung. Die gesetzliche Umsatzsteuer wird nach den jeweils
              geltenden Vorschriften berechnet; bei bestimmten Bauleistungen kann § 13b UStG
              einschlägig sein. Der verbindliche Festpreis wird nach kurzer kostenloser
              Objektbesichtigung oder anhand von Plänen, Fotos bzw. Leistungsverzeichnis
              festgelegt.
            </p>
            <p className="mt-2.5 text-sm leading-relaxed text-steel-500">
              Abweichungen entstehen vor allem durch Fläche, Raumstruktur, Verschmutzungsgrad,
              Zugänglichkeit, Hygieneanforderungen, Entsorgung und gewünschte Reinigungsfrequenz.
            </p>
          </div>
        </div>

        {/* ---------- Schnellübersicht ---------- */}
        <section aria-labelledby="uebersicht" className="mt-16">
          <h2
            id="uebersicht"
            className="font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl"
          >
            <span className="text-metal">Schnellübersicht</span>
          </h2>
          <p className="mt-3 text-sm text-steel-500">
            18 Leistungsbereiche. Ein Klick führt zu den Details.
          </p>

          <div className="panel mt-6 overflow-x-auto rounded-2xl">
            <table className="w-full border-collapse text-left text-sm sm:min-w-[36rem]">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="px-4 py-4 font-display text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-steel-500 sm:px-6">
                    Nr.
                  </th>
                  <th className="px-4 py-4 font-display text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-steel-500 sm:px-6">
                    Leistung
                  </th>
                  <th className="hidden px-4 py-4 font-display text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-steel-500 sm:table-cell sm:px-6">
                    Turnus
                  </th>
                  <th className="px-4 py-4 text-right font-display text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-steel-500 sm:px-6">
                    Richtwert netto
                  </th>
                </tr>
              </thead>
              <tbody>
                {bereiche.map((b) => (
                  <tr
                    key={b.slug}
                    className="border-b border-white/[0.05] transition-colors last:border-0 hover:bg-white/[0.03]"
                  >
                    <td className="px-4 py-4 font-display text-steel-600 sm:px-6">
                      {String(b.nr).padStart(2, "0")}
                    </td>
                    <td className="px-4 py-4 sm:px-6">
                      <a
                        href={`#${b.slug}`}
                        className="font-medium text-steel-100 transition-colors hover:text-brand-300"
                      >
                        {b.titel}
                      </a>
                    </td>
                    <td className="hidden whitespace-nowrap px-4 py-4 text-steel-500 sm:table-cell sm:px-6">
                      {b.turnus}
                    </td>
                    <td className="px-4 py-4 text-right font-medium text-brand-300 sm:whitespace-nowrap sm:px-6">
                      {b.richtwert}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ---------- Details je Kategorie ---------- */}
        {kategorien.map((kat) => {
          const gruppe = bereiche.filter((b) => b.kategorie === kat.id);
          if (gruppe.length === 0) return null;

          return (
            <section key={kat.id} id={kat.id} className="mt-20 scroll-mt-28">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="h-px w-8 bg-gradient-to-r from-brand-500 to-transparent"
                />
                <span className="font-display text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brand-400">
                  {gruppe.length} {gruppe.length === 1 ? "Bereich" : "Bereiche"}
                </span>
              </div>
              <h2 className="mt-4 font-display text-[clamp(1.7rem,3.4vw,2.5rem)] font-bold uppercase leading-[1.16]">
                <span className="text-metal">{kat.titel}</span>
              </h2>
              <p className="text-balance mt-3 max-w-2xl text-sm leading-relaxed text-steel-400 sm:text-base">
                {kat.text}
              </p>

              <div className="mt-8 space-y-6">
                {gruppe.map((b) => (
                  <BereichKarte key={b.slug} bereich={b} />
                ))}
              </div>
            </section>
          );
        })}

        {/* ---------- So entsteht der Festpreis ---------- */}
        <section className="mt-24">
          <h2 className="font-display text-[clamp(1.7rem,3.4vw,2.5rem)] font-bold uppercase leading-[1.16]">
            <span className="text-metal">So entsteht Ihr</span>{" "}
            <span className="text-brand-metal">Festpreis</span>
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {schritte.map((s) => (
              <div key={s.nr} className="panel rounded-2xl p-6">
                <span className="font-display text-sm font-semibold tracking-[0.2em] text-brand-400">
                  {s.nr}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold uppercase tracking-wide text-steel-100">
                  {s.titel}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-steel-400">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {vorteile.map((v) => (
              <div key={v.titel} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand-500/35 bg-brand-500/10">
                  <IconCheck className="h-3 w-3 text-brand-300" strokeWidth={2.4} />
                </span>
                <p className="text-sm leading-relaxed text-steel-400">
                  <strong className="font-semibold text-steel-200">{v.titel}:</strong>{" "}
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Abschluss ---------- */}
        <section className="panel noise relative mt-20 overflow-hidden rounded-[2rem] px-6 py-12 text-center sm:px-12 sm:py-14">
          <div
            aria-hidden
            className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-600/18 blur-[120px]"
          />
          <div className="relative">
            <h2 className="text-balance font-display text-[clamp(1.6rem,3.2vw,2.4rem)] font-bold uppercase leading-[1.16]">
              <span className="text-metal">Ihr Objekt,</span>{" "}
              <span className="text-brand-metal">Ihr Preis.</span>
            </h2>
            <p className="text-balance mx-auto mt-4 max-w-xl text-sm leading-relaxed text-steel-400 sm:text-base">
              Für ein konkretes Angebot genügt eine kurze Objektbeschreibung, ein paar Fotos
              oder eine kostenlose Besichtigung vor Ort.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/#kontakt" className="btn btn-primary h-14 px-8 text-base">
                Angebot anfordern
                <IconArrowRight className="h-4 w-4" />
              </Link>
              <a href={site.phoneHref} className="btn btn-ghost h-14 px-7 text-base">
                <IconPhone className="h-5 w-5 text-brand-400" />
                {site.phonePretty}
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function BereichKarte({ bereich: b }: { bereich: (typeof bereiche)[number] }) {
  return (
    <article
      id={b.slug}
      className="panel scroll-mt-28 rounded-3xl p-6 sm:p-8"
      data-reveal
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h3 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight sm:text-3xl">
          <span className="text-metal">{b.titel}</span>
        </h3>
        <span className="font-display text-[0.68rem] font-medium uppercase tracking-[0.24em] text-steel-600">
          Bereich {String(b.nr).padStart(2, "0")}
        </span>
      </div>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-steel-400">{b.untertitel}</p>

      {/* Kennzahlen */}
      <div className="mt-7 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-3">
        {b.kennzahlen.map((k) => (
          <div key={k.label} className="bg-ink-900 px-5 py-5">
            <p className="font-display text-xl font-bold tracking-tight sm:text-2xl">
              <span className="text-brand-metal">{k.wert}</span>
            </p>
            <p className="mt-1.5 text-[0.7rem] uppercase tracking-[0.14em] text-steel-500">
              {k.label}
            </p>
          </div>
        ))}
      </div>

      {/* Leistungsumfang */}
      <h4 className="mt-8 font-display text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-steel-400">
        Leistungsumfang
      </h4>
      <dl className="mt-4 divide-y divide-white/[0.06] border-y border-white/[0.06]">
        {b.umfang.map((z) => (
          <div key={z.bereich} className="grid gap-1 py-3 sm:grid-cols-[13rem_1fr] sm:gap-6">
            <dt className="text-sm font-medium text-steel-200">{z.bereich}</dt>
            <dd className="text-sm leading-relaxed text-steel-400">{z.leistung}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {b.preise ? (
          <div className="min-w-0">
            <h4 className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-brand-400">
              Richtpreise netto
            </h4>
            <ul className="mt-4 space-y-2.5">
              {b.preise.map((p) => (
                <li
                  key={p.leistung}
                  className="flex items-baseline justify-between gap-4 border-b border-dashed border-white/[0.08] pb-2.5 text-sm last:border-0"
                >
                  <span className="text-steel-300">{p.leistung}</span>
                  <span className="text-right font-medium text-steel-100">
                    {p.richtwert}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {b.separat ? (
          <div className="min-w-0">
            <h4 className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-steel-400">
              Nicht enthalten / separat
            </h4>
            <ul className="mt-4 space-y-2.5">
              {b.separat.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm text-steel-400">
                  <span
                    aria-hidden
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-steel-600"
                  />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      {b.hinweis ? (
        <p className="mt-7 flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-4 text-sm leading-relaxed text-steel-400">
          <IconShield className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
          <span>{b.hinweis}</span>
        </p>
      ) : null}

      <Link
        href="/#kontakt"
        className="mt-7 inline-flex items-center gap-2 font-display text-sm font-medium uppercase tracking-[0.18em] text-steel-300 transition-colors hover:text-brand-300"
      >
        Angebot für {b.titel}
        <IconArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
