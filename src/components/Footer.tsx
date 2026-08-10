import Link from "next/link";
import { LogoMark, Wordmark } from "@/components/Logo";
import { IconMail, IconPhone, IconPin, IconWhatsApp } from "@/components/Icons";
import { nav, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.08] bg-ink-900/60">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark className="h-12 w-12" />
              <Wordmark />
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-steel-500">
              Abbruch, Entkernung und Gebäudereinigung aus Karlsruhe – für Bauträger,
              Hausverwaltungen, Gewerbe und private Auftraggeber.
            </p>
            <p className="mt-5 font-display text-[0.68rem] font-medium uppercase tracking-[0.24em] text-brand-400">
              {site.claim}
            </p>
          </div>

          <nav aria-label="Footer-Navigation">
            <h2 className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-steel-300">
              Navigation
            </h2>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-steel-500 transition-colors hover:text-brand-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-steel-300">
              Kontakt
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-3 text-steel-400 transition-colors hover:text-brand-300"
                >
                  <IconPhone className="h-4 w-4 shrink-0 text-brand-500" />
                  {site.phonePretty}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="flex items-center gap-3 text-steel-400 transition-colors hover:text-brand-300"
                >
                  <IconMail className="h-4 w-4 shrink-0 text-brand-500" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-steel-400 transition-colors hover:text-[#4ade80]"
                >
                  <IconWhatsApp className="h-4 w-4 shrink-0 text-[#25D366]" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3 text-steel-400">
                <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <span>
                  {site.street}
                  <br />
                  {site.zip} {site.city}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/[0.07] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-steel-600">
            © {year} {site.legalName}. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6 text-xs text-steel-600">
            <Link href="/impressum" className="transition-colors hover:text-steel-300">
              Impressum
            </Link>
            <Link href="/datenschutz" className="transition-colors hover:text-steel-300">
              Datenschutz
            </Link>
            <span className="hidden font-display uppercase tracking-[0.2em] text-steel-700 sm:inline">
              {site.domainPretty}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
