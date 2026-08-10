import { IconCheck, IconWhatsApp } from "@/components/Icons";
import { site } from "@/lib/site";

const points = [
  "Fotos direkt aus der Wohnung oder von der Baustelle schicken",
  "Meist ohne Vor-Ort-Termin – wir kalkulieren nach Bildern vor",
  "Antwort in der Regel innerhalb weniger Stunden",
];

export default function WhatsAppSection() {
  return (
    <section
      aria-labelledby="whatsapp-titel"
      className="relative overflow-hidden py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          data-reveal
          className="panel relative overflow-hidden rounded-[2rem] px-6 py-12 sm:px-12 sm:py-14"
        >
          <div
            aria-hidden
            className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#25D366]/12 blur-[120px]"
          />
          <div
            aria-hidden
            className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-brand-700/18 blur-[110px]"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="h-px w-8 bg-gradient-to-r from-[#25D366] to-transparent"
                />
                <span className="font-display text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#25D366]">
                  Der schnellste Weg
                </span>
              </div>

              <h2
                id="whatsapp-titel"
                className="text-balance mt-5 font-display text-[clamp(1.9rem,3.8vw,2.9rem)] font-bold uppercase leading-[1.16]"
              >
                <span className="text-metal">Fotos schicken,</span>{" "}
                <span className="text-brand-metal">Angebot bekommen.</span>
              </h2>

              <p className="text-balance mt-5 max-w-lg text-base leading-relaxed text-steel-400">
                Kein Formular, kein Termin: Schicken Sie uns per WhatsApp ein paar Bilder
                vom Objekt und ein, zwei Sätze dazu. In den meisten Fällen können wir
                Ihnen daraufhin schon einen Preisrahmen nennen.
              </p>

              <ul className="mt-8 space-y-3">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-steel-300">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#25D366]/40 bg-[#25D366]/10">
                      <IconCheck className="h-3 w-3 text-[#4ade80]" strokeWidth={2.4} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start gap-5 lg:items-center lg:text-center">
              <span
                aria-hidden
                className="flex h-20 w-20 items-center justify-center rounded-3xl border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366]"
              >
                <IconWhatsApp className="h-10 w-10" />
              </span>

              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn h-14 w-full px-8 text-base text-white sm:w-auto"
                style={{
                  backgroundImage: "linear-gradient(180deg, #2ee06f, #12a850)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.35), 0 10px 30px -10px rgba(37,211,102,0.6)",
                }}
              >
                <IconWhatsApp className="h-5 w-5" />
                Per WhatsApp anfragen
              </a>

              <p className="text-xs leading-relaxed text-steel-500 lg:max-w-xs">
                Sie schreiben an {site.phonePretty}. Hinweise zur Datenverarbeitung durch
                WhatsApp finden Sie in unserer Datenschutzerklärung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
