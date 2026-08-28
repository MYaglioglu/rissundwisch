import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import {
  IconArrowRight,
  IconCheck,
  IconContainer,
  IconDemolition,
  IconSparkle,
  IconSqueegee,
} from "@/components/Icons";

const mainServices = [
  {
    icon: IconDemolition,
    kicker: "Leistungsbereich 01",
    title: "Abriss",
    claim: "Sauber. Sicher. Zuverlässig.",
    text: "Gezielte Entkernung und Innenabbruch – wir planen jeden Schritt, sichern die Baustelle und übergeben besenrein.",
    items: [
      "Entkernung von Wohnungen und Gewerbe",
      "Demontage von Einbauten, Böden und Sanitär",
      "Innenabbruch, Wand- & Estrichdurchbrüche",
      "Fachgerechte Trennung und Entsorgung",
    ],
  },
  {
    icon: IconSqueegee,
    kicker: "Leistungsbereich 02",
    title: "Gebäudereinigung",
    claim: "Sauber. Zuverlässig. Gründlich.",
    text: "Vom Bauschlussputz bis zur laufenden Unterhaltsreinigung – mit festem Team, klaren Checklisten und dokumentierter Qualität.",
    items: [
      "Bauend- und Bauzwischenreinigung",
      "Unterhalts- & Treppenhausreinigung",
      "Glas-, Rahmen- & Fassadenreinigung",
      "Grundreinigung nach Auszug oder Umbau",
    ],
  },
];

const addOns = [
  {
    icon: IconContainer,
    title: "Entrümpelung & Entsorgung",
    text: "Haushaltsauflösung, Keller, Dachboden oder Gewerbefläche – inklusive Containerstellung und Entsorgungsnachweis.",
  },
  {
    icon: IconSparkle,
    title: "Sonderreinigung",
    text: "Nach Wasserschaden, Renovierung oder Leerstand: Wir bringen auch schwierige Objekte wieder auf Übergabestandard.",
  },
  {
    icon: IconCheck,
    title: "Alles aus einer Hand",
    text: "Entkernung und Reinigung im selben Auftrag – ein Ansprechpartner, ein Termin­plan, ein Festpreis ohne Schnittstellenverluste.",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-brand-700/10 blur-[130px]"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Unsere Leistungen"
          title="Zwei Gewerke."
          accent="Ein Team."
          text="Erst der Rückbau, dann der letzte Schliff. Weil beides bei uns liegt, gibt es keine Wartezeiten zwischen den Gewerken – und keine Diskussion, wer für den Dreck zuständig ist."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {mainServices.map((service, i) => (
            <article
              key={service.title}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}
              className="panel group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1.5 sm:p-10"
            >
              <div
                aria-hidden
                className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-500/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
              />

              <div className="flex items-start justify-between gap-6">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-transparent text-brand-300 transition-colors duration-500 group-hover:border-brand-500/45 group-hover:text-brand-200">
                  <service.icon className="h-8 w-8" />
                </span>
                <span className="font-display text-[0.68rem] font-medium uppercase tracking-[0.24em] text-steel-600">
                  {service.kicker}
                </span>
              </div>

              <h3 className="mt-8 font-display text-3xl font-bold uppercase leading-none tracking-tight sm:text-4xl">
                <span className="text-metal">{service.title}</span>
              </h3>
              <p className="mt-3 font-display text-xs font-medium uppercase tracking-[0.24em] text-brand-400">
                {service.claim}
              </p>

              <p className="mt-5 text-[0.95rem] leading-relaxed text-steel-400">
                {service.text}
              </p>

              <ul className="mt-7 space-y-3 border-t border-white/[0.07] pt-7">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-steel-300">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand-500/35 bg-brand-500/10">
                      <IconCheck className="h-3 w-3 text-brand-300" strokeWidth={2.4} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/#kontakt"
                className="mt-8 inline-flex items-center gap-2 font-display text-sm font-medium uppercase tracking-[0.18em] text-steel-300 transition-colors hover:text-brand-300"
              >
                Anfrage stellen
                <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {addOns.map((item, i) => (
            <article
              key={item.title}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
              className="panel group rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-brand-300 transition-colors duration-500 group-hover:border-brand-500/45">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold uppercase tracking-wide text-steel-100">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-steel-400">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
