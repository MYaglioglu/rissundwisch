export const site = {
  name: "Riss & Wisch",
  /** Rechtlicher Träger. Beim Einzelunternehmen die natürliche Person. */
  legalName: "Murat Yağlioğlu",
  owner: "Murat Yağlioğlu",
  ownerRole: "Inhaber",
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
  provider: "eigener" as "formsubmit" | "eigener",

  /**
   * Zunächst die eigene E-Mail-Adresse. Nach der ersten Absendung schickt
   * formsubmit.co eine Bestätigungsmail; danach kann hier der dort erzeugte
   * Token stehen, damit die Adresse nicht mehr im Quelltext der Seite steht.
   */
  formsubmitCode: "info@rissundwisch.de",
} as const;

type Rechtsform = "einzelunternehmen" | "ug";

type Legal = {
  rechtsform: Rechtsform;
  registergericht: string;
  registernummer: string;
  ustId: string;
  aufsichtsbehoerde: string;
  hoster: string;
  mailProvider: string;
  stand: string;
};

/**
 * Pflichtangaben für Impressum und Datenschutz.
 *
 * Umstellung auf die UG später: rechtsform auf "ug" setzen sowie
 * registergericht und registernummer ausfüllen. Impressum und
 * Datenschutzerklärung übernehmen das automatisch.
 *
 * Felder, die leer bleiben, werden in den Rechtstexten weggelassen –
 * das ist zulässig, denn § 5 DDG verlangt diese Angaben nur, soweit vorhanden.
 */
export const legal: Legal = {
  rechtsform: "einzelunternehmen",

  /** Nur bei eingetragener Gesellschaft. Sonst leer lassen. */
  registergericht: "",
  registernummer: "",

  /** Umsatzsteuer-Identifikationsnummer, falls vergeben. Sonst leer lassen. */
  ustId: "",

  aufsichtsbehoerde:
    "Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg, Lautenschlagerstraße 20, 70173 Stuttgart",

  hoster: "Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA",

  /** Nur nötig, wenn contactForm.provider auf "eigener" steht. */
  mailProvider: "IONOS SE, Elgendorfer Str. 57, 56410 Montabaur",

  stand: "August 2026",
};

export const nav = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Warum wir", href: "/#vorteile" },
  { label: "Ablauf", href: "/#ablauf" },
  { label: "Kontakt", href: "/#kontakt" },
] as const;
