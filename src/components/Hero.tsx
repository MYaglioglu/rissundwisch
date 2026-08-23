import type { ComponentType } from "react";
import Link from "next/link";
import HeroAnimation from "@/components/HeroAnimation";
import {
  IconArrowRight,
  IconCheck,
  IconClock,
  IconPhone,
  IconPin,
  IconShield,
} from "@/components/Icons";
import { site } from "@/lib/site";

const heroPoints = [
  "Angebot innerhalb von 24 Stunden",
  "Festpreis ohne versteckte Kosten",
  "Voll versichert & zertifiziert entsorgt",
];

const floaters = [
  { icon: IconClock, title: "24/7", text: "Erreichbar" },
  { icon: IconShield, title: "100 %", text: "Versichert" },
  { icon: IconPin, title: "Karlsruhe", text: "& Umgebung" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="noise relative isolate flex min-h-[100svh] items-center overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-36"
    >
      {/* Hintergrund */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-ink-950" />
        <div
          className="grid-lines absolute inset-0 opacity-70"
          style={{
            maskImage:
              "radial-gradient(120% 80% at 50% 0%, black 20%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(120% 80% at 50% 0%, black 20%, transparent 75%)",
          }}
        />
        <div className="absolute -left-40 top-[-10%] h-[38rem] w-[38rem] rounded-full bg-brand-700/25 blur-[140px]" />
        <div className="absolute -right-32 top-1/4 h-[34rem] w-[34rem] rounded-full bg-brand-500/16 blur-[150px]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-ink-950 via-ink-950/80 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Text */}
          <div>
            <div
              data-reveal
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-2 pl-2.5 pr-4 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-ring absolute inline-flex h-2 w-2 rounded-full bg-brand-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
              </span>
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-steel-300">
                Karlsruhe &amp; Umgebung · {site.hours}
              </span>
            </div>

            <h1
              data-reveal
              style={{ ["--reveal-delay" as string]: "80ms" }}
              className="mt-7 font-display text-[clamp(2.7rem,7.2vw,5.2rem)] font-bold uppercase leading-[1.08] tracking-[-0.01em]"
            >
              <span className="text-metal">Abriss</span>
              <span className="text-steel-600"> &amp; </span>
              <br />
              <span className="text-brand-metal">Gebäude&shy;reinigung</span>
            </h1>

            <p
              data-reveal
              style={{ ["--reveal-delay" as string]: "160ms" }}
              className="mt-4 font-display text-[clamp(1rem,1.6vw,1.25rem)] font-medium uppercase tracking-[0.3em] text-steel-500"
            >
              aus einer Hand
            </p>

            <p
              data-reveal
              style={{ ["--reveal-delay" as string]: "220ms" }}
              className="text-balance mt-8 max-w-xl text-base leading-relaxed text-steel-400 sm:text-lg"
            >
              Von der Entkernung bis zur besenreinen Übergabe: Wir übernehmen
              Abbruch, Entsorgung und Reinigung – termintreu, staubarm und mit
              einem festen Ansprechpartner für Ihr gesamtes Projekt.
            </p>

            <div
              data-reveal
              style={{ ["--reveal-delay" as string]: "300ms" }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link href="/#kontakt" className="btn btn-primary h-14 px-8 text-base">
                Kostenloses Angebot
                <IconArrowRight className="h-4.5 w-4.5" />
              </Link>
              <a href={site.phoneHref} className="btn btn-ghost h-14 px-7 text-base">
                <IconPhone className="h-5 w-5 text-brand-400" />
                {site.phonePretty}
              </a>
            </div>

            <ul
              data-reveal
              style={{ ["--reveal-delay" as string]: "380ms" }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-7 sm:gap-y-3"
            >
              {heroPoints.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm text-steel-400">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand-500/40 bg-brand-500/10">
                    <IconCheck className="h-3 w-3 text-brand-300" strokeWidth={2.4} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div
            data-reveal
            style={{ ["--reveal-delay" as string]: "260ms" }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="panel relative aspect-square overflow-hidden rounded-[2rem] p-10">
              <div
                aria-hidden
                className="grid-lines absolute inset-0 opacity-50"
                style={{
                  maskImage: "radial-gradient(70% 70% at 50% 50%, black, transparent)",
                  WebkitMaskImage:
                    "radial-gradient(70% 70% at 50% 50%, black, transparent)",
                }}
              />
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/25 blur-[90px]"
              />

              {/* Ringe */}
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]"
              />
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.09]"
              />

              <HeroAnimation />

              {/* Sheen */}
              <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="animate-sheen absolute -inset-y-10 left-0 w-24 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
              </div>
            </div>

            {/* Schwebende Badges */}
            <div className="pointer-events-none absolute -left-3 top-10 hidden sm:block">
              <FloatBadge {...floaters[0]} />
            </div>
            <div className="pointer-events-none absolute -right-3 top-1/3 hidden sm:block">
              <FloatBadge {...floaters[1]} />
            </div>
            <div className="pointer-events-none absolute -left-2 bottom-16 hidden sm:block">
              <FloatBadge {...floaters[2]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatBadge({
  icon: Icon,
  title,
  text,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="panel flex items-center gap-3 rounded-2xl px-4 py-3 backdrop-blur-md">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand-500/30 bg-brand-500/10 text-brand-300">
        <Icon className="h-4.5 w-4.5" />
      </span>
      <span className="leading-tight">
        <span className="block font-display text-sm font-semibold uppercase tracking-wide text-steel-100">
          {title}
        </span>
        <span className="block text-[0.7rem] uppercase tracking-[0.14em] text-steel-500">
          {text}
        </span>
      </span>
    </div>
  );
}
