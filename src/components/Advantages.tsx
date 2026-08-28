import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import {
  IconArrowRight,
  IconClock,
  IconPin,
  IconQuote,
  IconShield,
  IconSparkle,
  IconUser,
} from "@/components/Icons";

const advantages = [
  {
    no: "01",
    icon: IconUser,
    title: "Ein fester Ansprechpartner",
    text: "Von der Besichtigung über die Entkernung bis zur Endreinigung begleitet Sie dieselbe Person. Keine Weiterleitung, keine Schnittstellen.",
  },
  {
    no: "02",
    icon: IconQuote,
    title: "Festpreis nach Besichtigung",
    text: "Wir schauen uns das Objekt persönlich an und kalkulieren verbindlich. Was im Angebot steht, steht auch auf der Rechnung.",
  },
  {
    no: "03",
    icon: IconClock,
    title: "Termintreu & flexibel",
    text: "Enge Bauzeitenpläne, Wochenendarbeit, kurzfristige Übergabetermine – wir richten uns nach Ihrem Ablauf, nicht umgekehrt.",
  },
  {
    no: "04",
    icon: IconShield,
    title: "Abgesichert & vorschriftsmäßig",
    text: "Baustellensicherung, Schutzausrüstung und dokumentierte Entsorgung nach geltenden Vorgaben gehören bei uns zum Standard.",
  },
  {
    no: "05",
    icon: IconSparkle,
    title: "Staubarm & rücksichtsvoll",
    text: "Staubschutzwände, Absaugung und geschützte Laufwege – damit Nachbarn, Mieter und angrenzende Räume nichts abbekommen.",
  },
  {
    no: "06",
    icon: IconPin,
    title: "Regional verwurzelt",
    text: "Wir sind aus Karlsruhe und arbeiten in der Region. Kurze Wege bedeuten schnelle Termine und ehrliche Kommunikation.",
  },
];

const stats = [
  { value: "24/7", label: "Erreichbarkeit" },
  { value: "24 Std.", label: "bis zum Angebot" },
  { value: "1", label: "Ansprechpartner" },
  { value: "100 %", label: "Entsorgungsnachweis" },
];

export default function Advantages() {
  return (
    <section id="vorteile" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10 bg-ink-900/40" />
      <div
        aria-hidden
        className="grid-lines absolute inset-0 -z-10 opacity-40"
        style={{
          maskImage: "radial-gradient(80% 60% at 20% 40%, black, transparent)",
          WebkitMaskImage: "radial-gradient(80% 60% at 20% 40%, black, transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Warum Riss & Wisch"
              title="Verlässlich."
              accent="Kompetent. Persönlich."
              text="Wir sind kein anonymer Großbetrieb. Sie bekommen ein eingespieltes Team, das nach dem letzten Handgriff noch einmal hinschaut – bevor Sie es tun."
            />

            <div
              data-reveal
              style={{ ["--reveal-delay" as string]: "200ms" }}
              className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06]"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="bg-ink-900 px-5 py-6">
                  <p className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                    <span className="text-brand-metal">{stat.value}</span>
                  </p>
                  <p className="mt-1.5 text-[0.72rem] uppercase tracking-[0.16em] text-steel-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              data-reveal
              style={{ ["--reveal-delay" as string]: "260ms" }}
              href="/#kontakt"
              className="btn btn-ghost mt-8 h-13 px-7 text-sm"
            >
              Projekt besprechen
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {advantages.map((item, i) => (
              <article
                key={item.no}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${(i % 2) * 80 + 60}ms` }}
                className="panel group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 sm:p-7"
              >
                <span
                  aria-hidden
                  className="absolute right-5 top-4 font-display text-4xl font-bold text-white/[0.05] transition-colors duration-500 group-hover:text-brand-500/20"
                >
                  {item.no}
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-brand-300 transition-colors duration-500 group-hover:border-brand-500/45">
                  <item.icon className="h-5 w-5" />
                </span>

                <h3 className="mt-5 font-display text-lg font-semibold uppercase tracking-wide text-steel-100">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-steel-400">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
