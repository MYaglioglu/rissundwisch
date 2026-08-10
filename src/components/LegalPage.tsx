import type { ReactNode } from "react";
import Link from "next/link";
import { IconArrowRight } from "@/components/Icons";

export default function LegalPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <main className="relative overflow-hidden pb-24 pt-36 sm:pb-32 sm:pt-44">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          className="grid-lines absolute inset-0 opacity-60"
          style={{
            maskImage: "radial-gradient(90% 50% at 50% 0%, black, transparent 70%)",
            WebkitMaskImage: "radial-gradient(90% 50% at 50% 0%, black, transparent 70%)",
          }}
        />
        <div className="absolute -top-32 left-1/2 h-96 w-[46rem] max-w-full -translate-x-1/2 rounded-full bg-brand-700/16 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="h-px w-8 bg-gradient-to-r from-brand-500 to-transparent"
          />
          <span className="font-display text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brand-400">
            {eyebrow}
          </span>
        </div>

        <h1 className="text-balance mt-5 font-display text-[clamp(2.2rem,5vw,3.5rem)] font-bold uppercase leading-[1.16]">
          <span className="text-metal">{title}</span>
        </h1>

        {intro ? (
          <p className="text-balance mt-5 text-base leading-relaxed text-steel-400">{intro}</p>
        ) : null}

        <div className="legal mt-12 border-t border-white/[0.08] pt-4">{children}</div>

        <Link href="/" className="btn btn-ghost mt-14 h-12 px-6 text-sm">
          Zurück zur Startseite
          <IconArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}

export function EditorNote({ children }: { children: ReactNode }) {
  return (
    <div className="mt-8 rounded-2xl border border-amber-400/30 bg-amber-400/[0.07] px-5 py-4">
      <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-amber-300">
        Hinweis – vor dem Livegang entfernen
      </p>
      <p className="mt-2 text-sm leading-relaxed text-amber-100/80">{children}</p>
    </div>
  );
}
