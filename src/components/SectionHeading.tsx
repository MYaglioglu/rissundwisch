export default function SectionHeading({
  eyebrow,
  title,
  accent,
  text,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  text?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div
        data-reveal
        className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}
      >
        <span aria-hidden className="h-px w-8 bg-gradient-to-r from-brand-500 to-transparent" />
        <span className="font-display text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brand-400">
          {eyebrow}
        </span>
      </div>

      <h2
        data-reveal
        style={{ ["--reveal-delay" as string]: "70ms" }}
        className="text-balance mt-5 font-display text-[clamp(2rem,4.2vw,3.25rem)] font-bold uppercase leading-[1.16] tracking-[-0.005em]"
      >
        <span className="text-metal">{title}</span>
        {accent ? <span className="text-brand-metal"> {accent}</span> : null}
      </h2>

      {text ? (
        <p
          data-reveal
          style={{ ["--reveal-delay" as string]: "140ms" }}
          className="text-balance mt-5 text-base leading-relaxed text-steel-400 sm:text-lg"
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}
