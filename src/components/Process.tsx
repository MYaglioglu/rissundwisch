import SectionHeading from "@/components/SectionHeading";

const steps = [
  {
    no: "01",
    title: "Anfrage",
    text: "Anruf, Mail oder Nachricht – Sie schildern kurz, worum es geht. Wir melden uns am selben Werktag zurück.",
  },
  {
    no: "02",
    title: "Besichtigung",
    text: "Wir schauen uns das Objekt an, klären Zugänge, Statik, Entsorgung und Termine. Kostenlos und unverbindlich.",
  },
  {
    no: "03",
    title: "Festpreis",
    text: "Sie erhalten ein verbindliches Angebot mit klaren Positionen – in der Regel innerhalb von 24 Stunden.",
  },
  {
    no: "04",
    title: "Ausführung",
    text: "Entkernung, Entsorgung und Reinigung nach Plan. Sie werden über jeden Bauabschnitt informiert.",
  },
  {
    no: "05",
    title: "Übergabe",
    text: "Gemeinsame Abnahme, besenrein oder bezugsfertig. Erst wenn Sie zufrieden sind, sind wir fertig.",
  },
];

export default function Process() {
  return (
    <section id="ablauf" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="So arbeiten wir"
          title="In fünf Schritten"
          accent="zum Ergebnis."
          text="Kein Angebots-Pingpong, keine Überraschungen auf der Rechnung. Sie wissen von Anfang an, was passiert – und wann."
          align="center"
        />

        <div className="relative mt-16">
          {/* Verbindungslinie */}
          <div
            aria-hidden
            className="absolute left-[1.4rem] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brand-500/60 via-brand-500/20 to-transparent lg:left-0 lg:top-[1.4rem] lg:h-px lg:w-full lg:bg-gradient-to-r"
          />

          <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {steps.map((step, i) => (
              <li
                key={step.no}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
                className="group relative flex gap-6 lg:block"
              >
                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/12 bg-ink-850 font-display text-sm font-semibold tracking-wide text-brand-300 shadow-[0_0_0_6px_rgba(5,6,10,1)] transition-all duration-500 group-hover:border-brand-500/60 group-hover:text-brand-200">
                  {step.no}
                </div>

                <div className="lg:mt-7 lg:pr-4">
                  <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-steel-100">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-steel-400">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
