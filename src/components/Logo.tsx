import { site } from "@/lib/site";

/**
 * Bildmarke: gebrochener Metallring (Abriss) + Wasserbogen (Reinigung)
 * mit RW-Monogramm – als reines SVG, damit es auf jedem Screen scharf bleibt.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label={`${site.name} Logo`}
    >
      <defs>
        <linearGradient id="rw-steel" x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#c9d1dc" />
          <stop offset="55%" stopColor="#78818f" />
          <stop offset="78%" stopColor="#e3e8ef" />
          <stop offset="100%" stopColor="#6c7583" />
        </linearGradient>
        <linearGradient id="rw-blue" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#8cc3ff" />
          <stop offset="45%" stopColor="#1e7ce8" />
          <stop offset="100%" stopColor="#0c4794" />
        </linearGradient>
      </defs>

      {/* Metallring, oben offen */}
      <path
        d="M32 5.5a26.5 26.5 0 1 0 21 10.4"
        fill="none"
        stroke="url(#rw-steel)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />

      {/* Wasserbogen / Wisch-Schwung */}
      <path
        d="M12 46c8.5 7.5 26 9 40-3.5"
        fill="none"
        stroke="url(#rw-blue)"
        strokeWidth="3.4"
        strokeLinecap="round"
      />

      {/* Schutt links */}
      <g fill="url(#rw-steel)" opacity="0.85">
        <rect x="6.5" y="27" width="4.2" height="4.2" rx="0.8" transform="rotate(-18 8.6 29.1)" />
        <rect x="4.2" y="35.4" width="3.2" height="3.2" rx="0.7" transform="rotate(14 5.8 37)" />
        <rect x="11.5" y="36.8" width="2.6" height="2.6" rx="0.6" transform="rotate(-8 12.8 38.1)" />
      </g>

      {/* Glanzpunkte rechts */}
      <g fill="url(#rw-blue)">
        <path d="M52.5 22.4c.5 1.6 1.1 2.2 2.7 2.7-1.6.5-2.2 1.1-2.7 2.7-.5-1.6-1.1-2.2-2.7-2.7 1.6-.5 2.2-1.1 2.7-2.7Z" />
        <circle cx="57" cy="31.4" r="1.25" />
        <circle cx="50.6" cy="33.6" r="0.9" opacity="0.8" />
      </g>

      {/* Monogramm */}
      <text
        x="32"
        y="41.5"
        textAnchor="middle"
        fontFamily="var(--font-oswald), Impact, Haettenschweiler, sans-serif"
        fontSize="26"
        fontWeight="700"
        letterSpacing="-0.5"
      >
        <tspan fill="url(#rw-steel)">R</tspan>
        <tspan fill="url(#rw-blue)">W</tspan>
      </text>
    </svg>
  );
}

export function Wordmark({
  className = "",
  subline = true,
}: {
  className?: string;
  subline?: boolean;
}) {
  return (
    <span className={`flex flex-col leading-none ${className}`}>
      <span className="font-display text-[1.35rem] font-bold uppercase leading-none tracking-[0.02em] sm:text-2xl">
        <span className="text-metal">Riss </span>
        <span className="text-steel-400">&amp;</span>
        <span className="text-brand-metal"> Wisch</span>
      </span>
      {subline ? (
        <span className="mt-1 font-display text-[0.58rem] font-medium uppercase tracking-[0.28em] text-steel-500 sm:text-[0.62rem]">
          Abriss &amp; Gebäudereinigung
        </span>
      ) : null}
    </span>
  );
}
