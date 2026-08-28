const keywords = [
  "Entkernung",
  "Innenabbruch",
  "Demontage",
  "Entrümpelung",
  "Containerstellung",
  "Bauendreinigung",
  "Unterhaltsreinigung",
  "Glas- & Fassadenreinigung",
  "Treppenhausreinigung",
  "Grundreinigung",
];

export default function TrustBar() {
  return (
    <section
      aria-label="Leistungsübersicht"
      className="relative border-y border-white/[0.07] bg-ink-900/60 py-5"
    >
      <div
        className="flex overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
          {[...keywords, ...keywords].map((word, i) => (
            <span key={`${word}-${i}`} className="flex shrink-0 items-center gap-10">
              <span className="font-display text-sm font-medium uppercase tracking-[0.22em] text-steel-500">
                {word}
              </span>
              <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-brand-500/70" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
