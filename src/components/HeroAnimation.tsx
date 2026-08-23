import type { CSSProperties } from "react";
import { LogoMark, Wordmark } from "@/components/Logo";
import { site } from "@/lib/site";

/**
 * Drei-Akter im Hero: Abrissbirne trifft die Mauer, ein Abzieher wischt die
 * Szene weg, das Logo bleibt stehen. Bewusst als SVG mit CSS-Keyframes statt
 * als Videodatei – scharf auf jedem Display, wenige Kilobyte, kein Autoplay,
 * das mobile Browser blockieren koennten.
 *
 * Alle Teile haengen an derselben 12-Sekunden-Schleife, damit nichts
 * auseinanderlaeuft. Die Prozentwerte der Keyframes stehen in globals.css.
 */

const vars = (values: Record<string, string>) => values as CSSProperties;

/** Mauer aus 4 Reihen zu 3 Steinen, jeder mit eigener Flugrichtung. */
const WALL = Array.from({ length: 12 }, (_, i) => {
  const col = i % 3;
  const row = Math.floor(i / 3);
  return {
    x: 268 + col * 41,
    y: 176 + row * 34,
    dx: `${20 + col * 24}px`,
    dy: `${-28 + row * 22}px`,
    rot: `${(i % 2 === 0 ? 1 : -1) * (16 + i * 4)}deg`,
  };
});

const DUST = [
  { cx: 276, cy: 304, r: 17, dx: "-30px" },
  { cx: 310, cy: 314, r: 23, dx: "-10px" },
  { cx: 346, cy: 302, r: 19, dx: "18px" },
  { cx: 376, cy: 314, r: 14, dx: "32px" },
  { cx: 250, cy: 316, r: 12, dx: "-40px" },
];

const DROPS = [
  { cx: 120, cy: 150, rx: 3.4, ry: 4.6 },
  { cx: 168, cy: 208, rx: 2.6, ry: 3.6 },
  { cx: 232, cy: 132, rx: 3, ry: 4.2 },
  { cx: 286, cy: 226, rx: 2.2, ry: 3 },
  { cx: 196, cy: 272, rx: 2.8, ry: 3.8 },
];

export default function HeroAnimation() {
  return (
    <div
      className="rw-anim absolute inset-0"
      role="img"
      aria-label={`${site.name} – Abriss und Gebäudereinigung aus einer Hand`}
    >
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <defs>
          {/* userSpaceOnUse: ein Verlauf mit objectBoundingBox wuerde auf
              senkrechten oder waagerechten Linien nicht gezeichnet, weil deren
              Rahmen keine Flaeche hat. */}
          <linearGradient
            id="rw-a-steel"
            gradientUnits="userSpaceOnUse"
            x1="112"
            y1="0"
            x2="196"
            y2="240"
          >
            <stop offset="0%" stopColor="#e8edf4" />
            <stop offset="45%" stopColor="#98a1af" />
            <stop offset="100%" stopColor="#5b6472" />
          </linearGradient>
          <linearGradient id="rw-a-block" x1="0" y1="0" x2="0.3" y2="1">
            <stop offset="0%" stopColor="#39414f" />
            <stop offset="100%" stopColor="#1d2430" />
          </linearGradient>
          <linearGradient id="rw-a-blue" x1="0" y1="0" x2="0.2" y2="1">
            <stop offset="0%" stopColor="#9cccff" />
            <stop offset="45%" stopColor="#1e7ce8" />
            <stop offset="100%" stopColor="#0c4794" />
          </linearGradient>
          <radialGradient id="rw-a-dust">
            <stop offset="0%" stopColor="#aab3c0" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#aab3c0" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ---- Akt 1: Abriss ---- */}
        <g className="rw-scene">
          <g className="rw-dust">
            {DUST.map((d, i) => (
              <circle
                key={i}
                cx={d.cx}
                cy={d.cy}
                r={d.r}
                fill="url(#rw-a-dust)"
                style={vars({ "--dx": d.dx })}
              />
            ))}
          </g>

          {WALL.map((b, i) => (
            <rect
              key={i}
              className="rw-block"
              x={b.x}
              y={b.y}
              width="35"
              height="32"
              rx="2"
              fill="url(#rw-a-block)"
              stroke="rgba(154,163,178,0.22)"
              strokeWidth="1"
              style={vars({ "--dx": b.dx, "--dy": b.dy, "--rot": b.rot })}
            />
          ))}

          <path
            d="M30 322h366"
            stroke="rgba(154,163,178,0.35)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Kette und Birne schwingen um den Aufhaengepunkt am oberen Rand.
              Bewusst ohne Kran: oben links sitzt sonst das schwebende Badge. */}
          <g className="rw-ball">
            <path
              d="M150 0v176"
              stroke="url(#rw-a-steel)"
              strokeWidth="2.8"
              strokeLinecap="round"
              fill="none"
              opacity="0.75"
            />
            <circle cx="150" cy="200" r="26" fill="url(#rw-a-steel)" />
            <path
              d="M139 190c6 4 10 10 8 18M159 187c-4 6-4 12 2 16"
              stroke="rgba(20,24,32,0.4)"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        </g>

        {/* ---- Akt 2: Abzieher wischt die Szene weg ---- */}
        <g className="rw-squeegee">
          <rect x="-8" y="18" width="15" height="364" rx="7" fill="url(#rw-a-blue)" />
          <rect x="-3" y="18" width="4" height="364" rx="2" fill="#cfe6ff" opacity="0.85" />
          <rect x="-2.5" y="150" width="3" height="110" rx="1.5" fill="url(#rw-a-steel)" />
        </g>

        <g className="rw-drops">
          {DROPS.map((d, i) => (
            <ellipse
              key={i}
              cx={d.cx}
              cy={d.cy}
              rx={d.rx}
              ry={d.ry}
              fill="url(#rw-a-blue)"
              style={vars({ "--i": String(i) })}
            />
          ))}
        </g>
      </svg>

      {/* ---- Akt 3: Logo ---- */}
      <div className="rw-logo absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <LogoMark className="h-24 w-24 drop-shadow-[0_18px_45px_rgba(30,124,232,0.4)] sm:h-28 sm:w-28" />
        <Wordmark className="mt-5 items-center" />
        <p className="mt-6 font-display text-[0.6rem] font-medium uppercase tracking-[0.3em] text-steel-500 sm:text-xs">
          {site.claim}
        </p>
      </div>
    </div>
  );
}
