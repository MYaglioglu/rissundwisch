import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconPhone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 3.5h3l1.5 4-2 1.4a12 12 0 0 0 5.1 5.1l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.8 7 7.1 5.2a2 2 0 0 0 2.2 0L20.2 7" />
    </svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function IconClock(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.4V12l3 1.8" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m4.5 12.5 4.6 4.6L19.5 6.8" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 12h15" />
      <path d="m13.5 6 6 6-6 6" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.2 5 6v5.4c0 4.3 2.9 7.7 7 9.4 4.1-1.7 7-5.1 7-9.4V6l-7-2.8Z" />
      <path d="m9.2 12.1 2 2 3.6-3.9" />
    </svg>
  );
}

export function IconUser(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="9" r="3.4" />
      <path d="M5.5 19.4a6.8 6.8 0 0 1 13 0" />
    </svg>
  );
}

/* Abriss – Abrissbirne trifft Mauer */
export function IconDemolition(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 3.4h7.4" />
      <path d="M8.2 3.4v5.2" />
      <circle cx="8.2" cy="12.4" r="3.8" />
      <path d="M14.2 20.6v-7.2h6.4v7.2" />
      <path d="M14.2 17h6.4" />
      <path d="M17.4 13.4V17" />
      <path d="M2.6 20.6h18.8" />
    </svg>
  );
}

/* Reinigung – Fensterfläche mit Glanz */
export function IconSqueegee(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="2.4" />
      <path d="M12 3.4v17.2M3.4 12h17.2" />
      <path
        d="M16.4 13.6 17.4 16.1 19.9 17.1 17.4 18.1 16.4 20.6 15.4 18.1 12.9 17.1 15.4 16.1Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

/* Entsorgung / Container */
export function IconContainer(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.4 8h17.2l-2.1 9.4a2 2 0 0 1-2 1.6H7.5a2 2 0 0 1-2-1.6L3.4 8Z" />
      <path d="M8.4 8 9.6 4.6h4.8L15.6 8" />
      <path d="M9.3 11.6v4.2M14.7 11.6v4.2" />
    </svg>
  );
}

/* Staubfreies Arbeiten / Sparkle */
export function IconSparkle(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.2 13.7 9 19.5 10.7 13.7 12.4 12 18.2 10.3 12.4 4.5 10.7 10.3 9 12 3.2Z" />
      <path d="M18.6 16.4 19.3 18.6 21.4 19.3 19.3 20 18.6 22.1 17.9 20 15.8 19.3 17.9 18.6Z" />
    </svg>
  );
}

/* Angebot – Dokument mit Häkchen */
export function IconQuote(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14 2.8H6.6a1.8 1.8 0 0 0-1.8 1.8v14.8a1.8 1.8 0 0 0 1.8 1.8h10.8a1.8 1.8 0 0 0 1.8-1.8V7.8L14 2.8Z" />
      <path d="M13.8 3v4.6h5" />
      <path d="m8.6 14.6 2.2 2.2 4.4-4.6" />
    </svg>
  );
}

/* WhatsApp – offizielle Glyphe, deshalb als Fläche statt Kontur */
export function IconWhatsApp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.82c2.16 0 4.19.84 5.72 2.37a8.06 8.06 0 0 1 2.37 5.72c0 4.46-3.63 8.09-8.09 8.09a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.11.82.83-3.04-.2-.31a8.03 8.03 0 0 1-1.23-4.29c0-4.46 3.63-8.09 8.09-8.09Zm-3.2 4.1c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.57.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.63-1.19-1.42-1.33-1.66-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.41h-.46Z" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}
