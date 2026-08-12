import { IconArrowRight, IconMail, IconPhone, IconPin, IconUser } from "@/components/Icons";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

const hex = {
  clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
};

const tiles = [
  {
    icon: IconUser,
    label: site.owner,
    sub: site.ownerRole,
  },
  {
    icon: IconPhone,
    label: site.phonePretty,
    sub: site.hours,
    href: site.phoneHref,
  },
  {
    icon: IconMail,
    label: site.email,
    sub: "Schnelle Antwort garantiert",
    href: site.emailHref,
  },
  {
    icon: IconPin,
    label: site.street,
    sub: `${site.zip} ${site.city}`,
  },
];

export default function Contact() {
  return (
    <section id="kontakt" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-brand-700/15 blur-[130px]"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div data-reveal>
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="h-px w-8 bg-gradient-to-r from-brand-500 to-transparent"
              />
              <span className="font-display text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brand-400">
                Kontakt
              </span>
            </div>

            <h2 className="text-balance mt-5 font-display text-[clamp(2rem,4.2vw,3.25rem)] font-bold uppercase leading-[1.16]">
              <span className="text-metal">Kostenloses Angebot</span>{" "}
              <span className="text-brand-metal">anfordern.</span>
            </h2>

            <p className="text-balance mt-5 max-w-md text-base leading-relaxed text-steel-400">
              Beschreiben Sie uns kurz Ihr Projekt – Objekt, Fläche, Wunschtermin. Wir
              melden uns am selben Werktag und vereinbaren einen Besichtigungstermin.
            </p>

            <a href={site.phoneHref} className="btn btn-primary mt-8 h-14 px-8 text-base">
              <IconPhone className="h-5 w-5" />
              Jetzt anrufen
            </a>

            <ul className="mt-10 flex flex-col gap-7 border-t border-white/[0.08] pt-10">
              {tiles.map((tile) => {
                const inner = (
                  <>
                    <span
                      aria-hidden
                      style={hex}
                      className="flex h-12 w-12 shrink-0 items-center justify-center bg-gradient-to-b from-brand-400 to-brand-700 text-white"
                    >
                      <tile.icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-lg font-semibold text-steel-100">
                        {tile.label}
                      </span>
                      <span className="block text-sm text-steel-500">{tile.sub}</span>
                    </span>
                  </>
                );

                return (
                  <li key={tile.label}>
                    {tile.href ? (
                      <a
                        href={tile.href}
                        className="group flex items-center gap-5 transition-transform duration-300 hover:translate-x-1"
                      >
                        {inner}
                        <IconArrowRight className="ml-auto h-4 w-4 shrink-0 text-steel-600 transition-colors group-hover:text-brand-400" />
                      </a>
                    ) : (
                      <div className="flex items-center gap-5">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <p className="mt-10 font-display text-xs font-medium uppercase tracking-[0.26em] text-steel-500">
              {site.claim}
            </p>
          </div>

          <div data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
