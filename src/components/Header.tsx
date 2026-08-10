"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LogoMark, Wordmark } from "@/components/Logo";
import { IconArrowRight, IconClose, IconMenu, IconPhone } from "@/components/Icons";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-ink-950/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label={`${site.name} – zur Startseite`}
          >
            <LogoMark className="h-11 w-11 shrink-0 transition-transform duration-500 group-hover:rotate-[-6deg] sm:h-12 sm:w-12" />
            <Wordmark />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Hauptnavigation">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative py-1 text-sm font-medium text-steel-300 transition-colors hover:text-white"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-brand-400 to-brand-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href={site.phoneHref} className="btn btn-ghost h-11 px-5 text-sm">
              <IconPhone className="h-4 w-4 text-brand-400" />
              {site.phonePretty}
            </a>
            <Link href="/#kontakt" className="btn btn-primary h-11 px-6 text-sm">
              Angebot anfordern
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="btn btn-ghost h-11 w-11 md:hidden"
            aria-label="Menü öffnen"
            aria-expanded={open}
          >
            <IconMenu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile-Menü */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
      >
        <div
          className="absolute inset-0 bg-ink-950/95 backdrop-blur-xl"
          onClick={() => setOpen(false)}
        />
        <div
          className={`relative flex h-full flex-col px-6 pb-10 pt-7 transition-transform duration-500 ${
            open ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <LogoMark className="h-11 w-11" />
              <Wordmark />
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="btn btn-ghost h-11 w-11"
              aria-label="Menü schließen"
            >
              <IconClose className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-12 flex flex-col gap-1">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/[0.07] py-5 font-display text-3xl font-medium uppercase tracking-wide text-steel-200 transition-colors hover:text-brand-400"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-3 pt-10">
            <a
              href={site.phoneHref}
              className="btn btn-primary h-14 w-full text-base"
              onClick={() => setOpen(false)}
            >
              <IconPhone className="h-5 w-5" />
              {site.phonePretty}
            </a>
            <Link
              href="/#kontakt"
              className="btn btn-ghost h-14 w-full text-base"
              onClick={() => setOpen(false)}
            >
              Kostenloses Angebot
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
