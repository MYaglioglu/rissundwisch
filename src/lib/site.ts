export const site = {
  name: "Riss & Wisch",
  legalName: "Yaglioglu UG (haftungsbeschränkt)",
  managing: "Yaglioglu UG",
  claim: "Ein Team. Ein Anspruch. Ihre Lösung.",
  subline: "Abriss & Gebäudereinigung",
  phone: "015207330197",
  phoneHref: "tel:+4915207330197",
  phonePretty: "0152 07330197",
  whatsappHref:
    "https://wa.me/4915207330197?text=" +
    encodeURIComponent(
      "Hallo Riss & Wisch, ich hätte gerne ein Angebot für folgendes Projekt: ",
    ),
  email: "info@rissundwisch.de",
  emailHref: "mailto:info@rissundwisch.de",
  street: "Schultheiß-Kiefer-Str. 21",
  zip: "76229",
  city: "Karlsruhe",
  url: "https://www.rissundwisch.de",
  domainPretty: "www.rissundwisch.de",
  hours: "24/7 erreichbar",
} as const;

/**
 * Wohin schickt das Anfrageformular?
 *
 *   "formsubmit" – über den Dienst formsubmit.co. Kein Server, keine .env.
 *                  Dafür laufen die Anfragen über einen Dritten (siehe
 *                  Datenschutzerklärung, Abschnitt 4.2).
 *   "eigener"    – über die eigene Route /api/anfrage und das eigene Postfach.
 *                  Benötigt einmalig "npm run mail:setup".
 *
 * Beim Wechsel passt sich die Datenschutzerklärung automatisch an.
 */
export const contactForm = {
  provider: "formsubmit" as "formsubmit" | "eigener",

  /**
   * Zunächst die eigene E-Mail-Adresse. Nach der ersten Absendung schickt
   * formsubmit.co eine Bestätigungsmail; danach kann hier der dort erzeugte
   * Token stehen, damit die Adresse nicht mehr im Quelltext der Seite steht.
   */
  formsubmitCode: "info@rissundwisch.de",
} as const;

/**
 * Pflichtangaben für Impressum & Datenschutz.
 * TODO: Von Yaglioglu UG ausfüllen lassen – Platzhalter dürfen nicht online gehen.
 */
export const legal = {
  vertretenDurch: "[Vor- und Nachname des Geschäftsführers]",
  registergericht: "Amtsgericht Mannheim",
  registernummer: "[HRB-Nummer]",
  ustId: "[USt-IdNr. gemäß § 27a UStG]",
  aufsichtsbehoerde:
    "Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg, Lautenschlagerstraße 20, 70173 Stuttgart",
  hoster: "[Name und Anschrift des Hosting-Anbieters]",
  mailProvider: "[Name und Anschrift des E-Mail-Anbieters]",
  stand: "August 2026",
} as const;

export const nav = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Warum wir", href: "/#vorteile" },
  { label: "Ablauf", href: "/#ablauf" },
  { label: "Kontakt", href: "/#kontakt" },
] as const;
