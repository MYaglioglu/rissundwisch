const parts = [
  { text: "Ein Team.", tone: "metal" },
  { text: "Ein Anspruch.", tone: "steel" },
  { text: "Ihre Lösung.", tone: "brand" },
] as const;

export default function ClaimBand() {
  return (
    <section
      aria-label="Unser Anspruch"
      className="noise relative overflow-hidden border-y border-white/[0.08] py-20 sm:py-24"
    >
      <div aria-hidden className="absolute inset-0 -z-10 bg-ink-950" />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-64 w-[70rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-700/18 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
        <p
          data-reveal
          className="font-display text-[clamp(1.7rem,5vw,3.75rem)] font-bold uppercase leading-[1.18] tracking-[-0.005em]"
        >
          {parts.map((part, i) => (
            <span key={part.text}>
              <span
                className={
                  part.tone === "metal"
                    ? "text-metal"
                    : part.tone === "brand"
                      ? "text-brand-metal"
                      : "text-steel-500"
                }
              >
                {part.text}
              </span>
              {i < parts.length - 1 ? (
                <span aria-hidden className="mx-3 text-brand-600 sm:mx-5">
                  ·
                </span>
              ) : null}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
