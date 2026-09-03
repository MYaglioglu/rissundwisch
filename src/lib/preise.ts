/**
 * Leistungs- und Preisübersicht.
 *
 * Inhalte stammen unverändert aus dem Katalog "Gesamtangebot &
 * Leistungskatalog" von Riss & Wisch. Alle Beträge sind Nettopreise und
 * ausdrücklich Richtwerte – der verbindliche Festpreis entsteht erst nach
 * Besichtigung. Die Ausschlüsse ("separat") gehören mit auf die Seite: Sie
 * schützen später bei Diskussionen über den Leistungsumfang.
 */

export type KategorieId = "unterhalt" | "sonder" | "rueckbau" | "partner";

export type Bereich = {
  nr: number;
  slug: string;
  titel: string;
  untertitel: string;
  kategorie: KategorieId;
  /** Für die Schnellübersicht ganz oben */
  turnus: string;
  richtwert: string;
  kennzahlen: { wert: string; label: string }[];
  umfang: { bereich: string; leistung: string }[];
  preise?: { leistung: string; richtwert: string }[];
  separat?: string[];
  hinweis?: string;
};

export const kategorien: { id: KategorieId; titel: string; text: string }[] = [
  {
    id: "unterhalt",
    titel: "Unterhaltsreinigung",
    text: "Regelmäßige Reinigung im festen Turnus – abgerechnet pro Quadratmeter und Monat.",
  },
  {
    id: "sonder",
    titel: "Sonder- & Baureinigung",
    text: "Einmalige Einsätze: Bauphasen, Grundreinigung, Glas, Polster und Außenflächen.",
  },
  {
    id: "rueckbau",
    titel: "Entkernung & Rückbau",
    text: "Nichttragender Innenrückbau, Demontage und Räumung mit besenreiner Übergabe.",
  },
  {
    id: "partner",
    titel: "Für Partnerfirmen",
    text: "Rahmenkonditionen für Bauunternehmen, Sanierer und Generalunternehmer.",
  },
];

export const bereiche: Bereich[] = [
  {
    nr: 1,
    slug: "buero",
    titel: "Büro-Unterhaltsreinigung",
    untertitel: "Regelmäßige Reinigung für Büro-, Verwaltungs- und Arbeitsbereiche.",
    kategorie: "unterhalt",
    turnus: "3× / Woche",
    richtwert: "3,50 €/m² / Monat",
    kennzahlen: [
      { wert: "100 m²", label: "Berechnungsbasis" },
      { wert: "3× / Woche", label: "Standardturnus" },
      { wert: "3,50 €/m²", label: "monatlicher Richtwert" },
    ],
    umfang: [
      {
        bereich: "Büro- & Arbeitsbereiche",
        leistung:
          "Saugen bzw. Wischen frei zugänglicher Böden; Reinigung frei zugänglicher Oberflächen; Entfernung sichtbarer Griff- und Gebrauchsspuren.",
      },
      {
        bereich: "Sanitärräume",
        leistung:
          "WC, Urinal, Waschbecken, Armaturen, Spiegel, Kontaktflächen und hygienische Bodenreinigung.",
      },
      {
        bereich: "Küche / Teeküche",
        leistung:
          "Arbeitsflächen, Spüle, Armaturen, äußere sichtbare Geräteflächen und Bodenreinigung.",
      },
      {
        bereich: "Abfall",
        leistung:
          "Leeren von Papier- und Restmüllbehältern sowie Einsetzen bereitgestellter Müllbeutel.",
      },
      {
        bereich: "Eingang / Verkehrsflächen",
        leistung: "Eingang, Flure, Laufwege, normale Lauf- und Griffspuren.",
      },
      {
        bereich: "Kontaktflächen",
        leistung: "Türgriffe, Handläufe, Schalter und weitere häufig berührte Flächen.",
      },
    ],
    preise: [
      { leistung: "100 m²", richtwert: "350 € / Monat" },
      { leistung: "200 m²", richtwert: "ca. 700 €" },
      { leistung: "250 m²", richtwert: "ca. 875 €" },
      { leistung: "300 m²", richtwert: "ca. 1.050 €" },
    ],
    separat: [
      "Glas- und Fensterreinigung",
      "Bodengrundreinigung ab 4,50 €/m²",
      "Kühlschrank und Schränke innen nach Aufwand",
      "Veranstaltungs- und Sonderreinigung",
      "Teppich- und Polster-Tiefenreinigung",
      "Außenbereiche, Schädlings- oder Gefahrstoffarbeiten",
    ],
  },
  {
    nr: 2,
    slug: "arztpraxis",
    titel: "Arztpraxis / Ärztehaus",
    untertitel: "Unterhalts- und Hygienereinigung für medizinisch genutzte Flächen.",
    kategorie: "unterhalt",
    turnus: "5× / Woche",
    richtwert: "7,90 €/m² / Monat",
    kennzahlen: [
      { wert: "100 m²", label: "Berechnungsbasis" },
      { wert: "5× / Woche", label: "Standardturnus" },
      { wert: "7,90 €/m²", label: "monatlicher Richtwert" },
    ],
    umfang: [
      {
        bereich: "Empfang / Wartebereich",
        leistung:
          "Böden, frei zugängliche Oberflächen, Sitz- und Wartebereiche und Kontaktflächen.",
      },
      {
        bereich: "Behandlungsräume",
        leistung:
          "Reinigung vereinbarter Standardflächen; medizinische Instrumente und Geräte ausgenommen.",
      },
      {
        bereich: "Sanitärbereiche",
        leistung:
          "Hygienische Reinigung von WC, Waschbecken, Armaturen, Spiegeln und Böden.",
      },
      {
        bereich: "Personal- / Sozialräume",
        leistung: "Boden- und Oberflächenreinigung, Spüle und frei zugängliche Bereiche.",
      },
      {
        bereich: "Flure / Kontaktflächen",
        leistung: "Laufwege sowie häufig berührte Flächen nach vereinbartem Hygieneplan.",
      },
      {
        bereich: "Abfall",
        leistung:
          "Üblicher Rest- und Papierabfall; infektiöse, medizinische oder scharfe Abfälle ausgeschlossen.",
      },
    ],
    preise: [
      { leistung: "100 m²", richtwert: "790 € / Monat" },
      { leistung: "150 m²", richtwert: "1.185 €" },
      { leistung: "200 m²", richtwert: "1.580 €" },
      { leistung: "250 m²", richtwert: "1.975 €" },
      { leistung: "300 m²", richtwert: "2.370 €" },
    ],
    separat: [
      "Keine Sterilisation medizinischer Instrumente",
      "Keine Kanülen oder infektiösen Abfälle",
      "Blut- und Körperflüssigkeits-Sonderfälle nur nach gesonderter Prüfung",
      "Spezial- und Behördendesinfektion separat",
    ],
  },
  {
    nr: 3,
    slug: "autohaus",
    titel: "Autohaus / Showroom",
    untertitel: "Repräsentative Reinigung mit Fokus auf Verkaufsflächen und Kundenbereiche.",
    kategorie: "unterhalt",
    turnus: "3× / Woche",
    richtwert: "4,50 €/m² / Monat",
    kennzahlen: [
      { wert: "100 m²", label: "Berechnungsbasis" },
      { wert: "3× / Woche", label: "Standardturnus" },
      { wert: "4,50 €/m²", label: "monatlicher Richtwert" },
    ],
    umfang: [
      {
        bereich: "Showroom / Verkaufsfläche",
        leistung:
          "Bodenreinigung, übliche Laufspuren, frei zugängliche Präsentationsflächen.",
      },
      {
        bereich: "Eingang / Kundenzone",
        leistung: "Empfang, Wartebereich, Laufwege, Türen und zugängliche Glasflächen.",
      },
      {
        bereich: "Verkaufsbüros",
        leistung: "Böden, frei zugängliche Oberflächen und üblicher Abfall.",
      },
      { bereich: "Sanitär / Sozialräume", leistung: "Hygienische Reinigung und Bodenpflege." },
      {
        bereich: "Kontakt- / Hochglanzflächen",
        leistung: "Türklinken, Empfangstresen, Schalter und zugängliche Hochglanzflächen.",
      },
      { bereich: "Abfall", leistung: "Normale Papier- und Restmüllbehälter." },
    ],
    preise: [
      { leistung: "100 m²", richtwert: "450 € / Monat" },
      { leistung: "200 m²", richtwert: "ca. 900 €" },
      { leistung: "250 m²", richtwert: "ca. 1.125 €" },
      { leistung: "300 m²", richtwert: "ca. 1.350 €" },
      { leistung: "500 m²", richtwert: "ca. 2.250 €" },
    ],
    separat: [
      "Große Showroom-Glasfronten",
      "Werkstattnahe Bodenflächen mit Öl- und Gummibelastung",
      "Fahrzeugaufbereitung",
      "Maschinelle Grundreinigung",
      "Sonderreinigung nach Veranstaltungen",
    ],
  },
  {
    nr: 4,
    slug: "fitness",
    titel: "Fitnessstudio",
    untertitel:
      "Intensive Unterhaltsreinigung für hochfrequentierte Trainings- und Nassbereiche.",
    kategorie: "unterhalt",
    turnus: "5× / Woche",
    richtwert: "7,50 €/m² / Monat",
    kennzahlen: [
      { wert: "100 m²", label: "Berechnungsbasis" },
      { wert: "5× / Woche", label: "Standardturnus" },
      { wert: "7,50 €/m²", label: "monatlicher Richtwert" },
    ],
    umfang: [
      {
        bereich: "Trainingsflächen",
        leistung: "Böden, frei zugängliche Oberflächen und Geräteumfeld.",
      },
      {
        bereich: "Umkleiden",
        leistung: "Böden, Bänke, Kontaktflächen und sichtbare Gebrauchsspuren.",
      },
      {
        bereich: "Duschen / Sanitär",
        leistung:
          "Intensive hygienische Reinigung von Duschen, WC, Waschbecken und Armaturen.",
      },
      {
        bereich: "Empfang / Kursräume",
        leistung: "Boden- und Oberflächenreinigung, Kontaktflächen.",
      },
      { bereich: "Abfall", leistung: "Übliche Behälter und Müllbeutel." },
      {
        bereich: "Kontaktflächen",
        leistung: "Türgriffe, Schalter und häufig berührte Bereiche.",
      },
    ],
    preise: [{ leistung: "100 m²", richtwert: "750 € / Monat" }],
    separat: [
      "6. und 7. Reinigungstag",
      "Sauna und Wellness",
      "Intensive Dusch- und Sanitärgrundreinigung",
      "Glasreinigung",
      "Teppich- und Polsterreinigung",
      "Technische Gerätewartung ist nicht Bestandteil",
    ],
  },
  {
    nr: 5,
    slug: "wohnanlagen",
    titel: "Wohnungsbaugesellschaften & Wohnanlagen",
    untertitel:
      "Treppenhaus- und Gemeinschaftsflächen plus Leerstands- und Übergabereinigung.",
    kategorie: "unterhalt",
    turnus: "1× / Woche",
    richtwert: "149 € / Haus / Monat",
    kennzahlen: [
      { wert: "1 Haus", label: "bis ca. 6 Wohneinheiten" },
      { wert: "1× / Woche", label: "Standardturnus" },
      { wert: "149 €", label: "je Haus und Monat" },
    ],
    umfang: [
      {
        bereich: "Hauseingang",
        leistung: "Kehren und Wischen, übliche Verschmutzung, zugängliche Tür- und Glasflächen.",
      },
      { bereich: "Treppen / Podeste", leistung: "Kehren, Saugen und feuchtes Wischen." },
      { bereich: "Geländer / Handläufe", leistung: "Bedarfsgerechte Reinigung." },
      { bereich: "Briefkastenbereich", leistung: "Staub- und Griffspuren." },
      {
        bereich: "Keller- / Nebenbereiche",
        leistung: "Gemeinschaftlicher Zugang im vereinbarten Umfang.",
      },
      {
        bereich: "Aufzug",
        leistung: "Kabinenboden, sichtbare Innenflächen und Bedienelemente.",
      },
      {
        bereich: "Grobschmutz",
        leistung: "Kleine übliche Verschmutzungen; Sperrmüll nicht enthalten.",
      },
    ],
    preise: [
      { leistung: "1 Haus", richtwert: "149 € / Monat" },
      { leistung: "2 Häuser", richtwert: "ca. 298 €" },
      { leistung: "4 Häuser", richtwert: "ca. 596 €" },
      { leistung: "5 Häuser", richtwert: "ca. 745 €" },
      { leistung: "10 Häuser", richtwert: "ca. 1.490 €" },
      {
        leistung: "Leerstands- / Übergabereinigung",
        richtwert: "4,50 €/m² einmalig, z. B. 60 m² = 270 €",
      },
    ],
    separat: [
      "Fenster und Glas",
      "Starke Grundreinigung",
      "Küche und Schränke innen",
      "Keller und Dachboden",
      "Sperrmüll und Räumung",
    ],
  },
  {
    nr: 6,
    slug: "pflegeheim",
    titel: "Senioren- & Pflegeheim",
    untertitel:
      "Unterhalts- und Hygienereinigung mit Rücksicht auf Bewohner und Pflegeabläufe.",
    kategorie: "unterhalt",
    turnus: "5× / Woche",
    richtwert: "9,50 €/m² / Monat",
    kennzahlen: [
      { wert: "100 m²", label: "Berechnungsbasis" },
      { wert: "5× / Woche", label: "Standardturnus" },
      { wert: "9,50 €/m²", label: "monatlicher Richtwert" },
    ],
    umfang: [
      {
        bereich: "Bewohnerzimmer",
        leistung: "Böden, frei zugängliche Oberflächen, Staub- und Gebrauchsspuren.",
      },
      {
        bereich: "Bewohnerbäder / WC",
        leistung: "Hygienische Reinigung nach vereinbartem Hygieneplan.",
      },
      {
        bereich: "Flure / Verkehrsflächen",
        leistung: "Laufwege, Eingangs- und Aufzugsbereiche, Griffspuren.",
      },
      { bereich: "Gemeinschaftsräume", leistung: "Aufenthalts- und Begegnungsbereiche." },
      {
        bereich: "Speise- / Aufenthaltsbereich",
        leistung: "Frei zugängliche Oberflächen und Böden; Küchenproduktion ausgenommen.",
      },
      {
        bereich: "Personal- / Sozialräume",
        leistung: "Böden, Oberflächen, Spüle und sichtbare Geräteflächen.",
      },
      { bereich: "Kontaktflächen", leistung: "Klinken, Handläufe, Taster und Schalter." },
      {
        bereich: "Abfall",
        leistung:
          "Übliche Behälter; medizinische, infektiöse und scharfe Abfälle ausgeschlossen.",
      },
    ],
    preise: [
      { leistung: "100 m²", richtwert: "950 € / Monat" },
      { leistung: "200 m²", richtwert: "1.900 €" },
      { leistung: "300 m²", richtwert: "2.850 €" },
      { leistung: "500 m²", richtwert: "4.750 €" },
      { leistung: "1.000 m²", richtwert: "9.500 €" },
    ],
    separat: [
      "6. und 7. Reinigungstag",
      "Glas",
      "Grundreinigung",
      "Intensiv- und Sonderdesinfektion",
      "Polsterreinigung",
      "Verbrauchsmaterial",
    ],
  },
  {
    nr: 7,
    slug: "hotel",
    titel: "Hotel / Housekeeping",
    untertitel: "Zimmerreinigung und öffentliche Hotelbereiche in zwei getrennten Preislogiken.",
    kategorie: "unterhalt",
    turnus: "7× / Woche",
    richtwert: "ab 5,50 € / Zimmer",
    kennzahlen: [
      { wert: "8,50 €", label: "Abreisezimmer bis ca. 25 m²" },
      { wert: "5,50 €", label: "Bleibezimmer" },
      { wert: "ab 14,50 €", label: "Suite / großes Zimmer" },
    ],
    umfang: [
      {
        bereich: "Abreisezimmer",
        leistung:
          "Bad und WC, Böden, Oberflächen, Abfall, Bett herrichten und beziehen, Wechsel bereitgestellter Wäsche.",
      },
      {
        bereich: "Bleibezimmer",
        leistung:
          "Zwischenreinigung, Bad und WC, Abfall, Boden, Bett richten, Handtuchwechsel nach Standard.",
      },
      {
        bereich: "Bad / WC",
        leistung: "WC, Waschbecken, Dusche oder Wanne, Armaturen, Spiegel, Ablagen.",
      },
      {
        bereich: "Bett / Wäsche",
        leistung: "Abziehen und Beziehen bzw. Richten; frische Wäsche wird bereitgestellt.",
      },
      {
        bereich: "Gästeartikel",
        leistung: "Auffüllen bereitgestellter Standardartikel nach Checkliste.",
      },
      {
        bereich: "Qualitätskontrolle",
        leistung: "Sichtkontrolle; Auffälligkeiten und Schäden melden.",
      },
      {
        bereich: "Öffentliche Bereiche",
        leistung:
          "Lobby, Rezeption, Flure, öffentliche Sanitärbereiche, Treppen, Aufzüge und Gästebereich außerhalb der Produktion – 11,50 €/m² monatlich bei 7× / Woche.",
      },
    ],
    separat: [
      "Glas und Fenster",
      "Grundreinigung Zimmer und Bad",
      "Teppich und Polster",
      "Sauna, Wellness, Fitness",
      "Veranstaltungsreinigung",
      "Minibar und Inventur",
      "Wäschelogistik",
    ],
  },
  {
    nr: 8,
    slug: "baureinigung",
    titel: "Baureinigung / Bauendreinigung",
    untertitel: "Drei klar getrennte Leistungsstufen je nach Bauphase.",
    kategorie: "sonder",
    turnus: "einmalig",
    richtwert: "3,00 / 2,00 / 7,00 €/m²",
    kennzahlen: [
      { wert: "3,00 €/m²", label: "Baugrobreinigung" },
      { wert: "2,00 €/m²", label: "Bauzwischen je Durchgang" },
      { wert: "7,00 €/m²", label: "Bauende- / Baufeinreinigung" },
    ],
    umfang: [
      {
        bereich: "Baugrobreinigung",
        leistung:
          "Lose Baustellenreste, Verpackungen, Folien, Kartonagen und grobe Staubansammlungen.",
      },
      {
        bereich: "Bauzwischenreinigung",
        leistung: "Baustaub und übliche Arbeitsrückstände zwischen Gewerken und Ausbauphasen.",
      },
      {
        bereich: "Bauendreinigung",
        leistung: "Bezugs- und übergabefertige Schlussreinigung nach Fertigstellung.",
      },
      {
        bereich: "Bodenflächen",
        leistung: "Saugen und Wischen, Baustaub und übliche lose anhaftende Verschmutzung.",
      },
      {
        bereich: "Türen / Zargen / Rahmen",
        leistung: "Staub, Griffspuren und normale Baustellenrückstände.",
      },
      { bereich: "Sanitärbereiche", leistung: "Gründliche Schlussreinigung." },
      { bereich: "Feinstaubabschluss", leistung: "Abschließende Sicht- und Feinreinigung." },
    ],
    preise: [
      { leistung: "100 m² Baugrob", richtwert: "300 €" },
      { leistung: "100 m² Bauzwischen", richtwert: "200 € je Durchgang" },
      { leistung: "100 m² Bauende", richtwert: "700 €" },
    ],
    separat: [
      "Bauschluss-Glasreinigung ca. 4–9 €/m² Glas",
      "Starke Farb-, Lack- oder Kleberreste",
      "Zementschleier und Mörtelreste",
      "Schutzfolien und Etiketten",
      "Stark verschmutzte Bauflächen ca. 10–15 €/m²",
      "Entsorgung und Container",
      "Höhenarbeiten",
    ],
  },
  {
    nr: 9,
    slug: "grundreinigung",
    titel: "Grundreinigung",
    untertitel: "Intensive Einmalreinigung deutlich über normaler Unterhaltsreinigung.",
    kategorie: "sonder",
    turnus: "einmalig",
    richtwert: "4,50 €/m² Standard",
    kennzahlen: [
      { wert: "100 m²", label: "Berechnungsbasis" },
      { wert: "einmalig", label: "Intensivreinigung" },
      { wert: "4,50 €/m²", label: "Standard-Richtwert" },
    ],
    umfang: [
      {
        bereich: "Bodenflächen",
        leistung:
          "Intensives Saugen und Kehren, materialgerechte Nassreinigung, Rand- und Eckbereiche.",
      },
      {
        bereich: "Sockelleisten / Randbereiche",
        leistung: "Gründliche Reinigung frei zugänglicher Kanten und Ecken.",
      },
      {
        bereich: "Türen / Zargen / Griffe",
        leistung: "Staub, Griffspuren und übliche Verschmutzungen.",
      },
      { bereich: "Oberflächen / Ablagen", leistung: "Frei zugängliche, abwischbare Flächen." },
      {
        bereich: "Sanitärbereiche",
        leistung: "Intensive Reinigung inklusive üblicher Kalk- und Seifenrückstände.",
      },
      {
        bereich: "Küche / Teeküche",
        leistung: "Frei zugängliche Flächen; Innenreinigung separat.",
      },
      {
        bereich: "Heizkörper / Kontaktflächen",
        leistung: "Frei zugängliche Außenflächen und Kontaktpunkte.",
      },
    ],
    preise: [
      { leistung: "Standard", richtwert: "ca. 4,50 €/m²" },
      { leistung: "Erhöhte Verschmutzung", richtwert: "ca. 6–8 €/m²" },
      { leistung: "Intensive Sondergrundreinigung", richtwert: "ca. 8–12 €/m²" },
    ],
    separat: [
      "Glas und Fenster",
      "Maschinelle Bodenbearbeitung",
      "Pflegefilm- und Beschichtungsentfernung",
      "Neue Einpflege und Versiegelung",
    ],
  },
  {
    nr: 10,
    slug: "glas",
    titel: "Fenster- & Glasreinigung",
    untertitel: "Streifenfreie Reinigung von Glasflächen innen und außen.",
    kategorie: "sonder",
    turnus: "einmalig",
    richtwert: "3,50 €/m² Glasfläche",
    kennzahlen: [
      { wert: "100 m²", label: "Glasfläche" },
      { wert: "innen + außen", label: "Standardumfang" },
      { wert: "3,50 €/m²", label: "Richtwert" },
    ],
    umfang: [
      {
        bereich: "Glas innen",
        leistung: "Streifenfreie Reinigung zugänglicher Fenster- und Glasflächen.",
      },
      {
        bereich: "Glas außen",
        leistung: "Streifenfreie Außenreinigung bei normaler Erreichbarkeit.",
      },
      { bereich: "Griffe / Kontaktpunkte", leistung: "Reinigung im Fensterbereich." },
      {
        bereich: "Leichte Rahmenreinigung",
        leistung: "Frei zugängliche Rahmenflächen bei üblicher Verschmutzung.",
      },
      { bereich: "Fensterbänke", leistung: "Frei zugängliche innere Fensterbänke." },
      { bereich: "Glastrennwände / Türen", leistung: "Nach Aufmaß und Vereinbarung." },
      {
        bereich: "Abschlusskontrolle",
        leistung: "Kontrolle auf Schlieren, Wasserläufer und Restverschmutzung.",
      },
    ],
    preise: [
      { leistung: "Standard", richtwert: "ca. 3,50 €/m² Glas" },
      { leistung: "Glas + Rahmen intensiv", richtwert: "ca. 4,50–6,00 €/m²" },
      { leistung: "Bauschluss-Glas", richtwert: "ca. 5,00–9,00 €/m²" },
      { leistung: "Starke Sonderverschmutzung", richtwert: "nach Aufwand" },
    ],
    separat: [
      "Jalousien und Lamellen",
      "Wintergarten und Glasdach",
      "Hubsteiger oder Arbeitsbühne",
      "Reinwassersystem",
      "Etiketten, Folien, Kleberreste",
      "Kalk- und Wasserflecken intensiv",
    ],
  },
  {
    nr: 11,
    slug: "entkernung",
    titel: "Entkernung & Innenrückbau",
    untertitel: "Nichttragender Innenrückbau, Demontage, Räumung und Baustellenübergabe.",
    kategorie: "rueckbau",
    turnus: "projektbezogen",
    richtwert: "ca. 25–95 €/m² je Rückbautiefe",
    kennzahlen: [
      { wert: "25–40 €/m²", label: "leichte Teilentkernung" },
      { wert: "45–65 €/m²", label: "Standard-Entkernung" },
      { wert: "65–95 €/m²", label: "intensiv bis Rohbau" },
    ],
    umfang: [
      {
        bereich: "Bodenbeläge",
        leistung: "Teppich, Laminat, PVC und Ähnliches ca. 8–20 €/m².",
      },
      {
        bereich: "Fliesen",
        leistung: "Wand und Boden inklusive üblichem Kleberbett ca. 15–30 €/m².",
      },
      { bereich: "Estrich", leistung: "Je nach Stärke und Aufbau ca. 18–35 €/m²." },
      {
        bereich: "Trockenbauwand",
        leistung: "Nichttragend inklusive Unterkonstruktion ca. 15–25 €/m² Wand.",
      },
      { bereich: "Mauerwerkswand", leistung: "Nichttragend ca. 30–55 €/m² Wand." },
      {
        bereich: "Abgehängte Decke",
        leistung: "Gipskarton- oder Rasterdecke ca. 10–20 €/m².",
      },
      { bereich: "Putz", leistung: "Abschlagen ca. 15–30 €/m²." },
      {
        bereich: "Bad / Sanitär",
        leistung: "Rückbau ca. 500–1.200 € je Bad, Leitungen freigeschaltet.",
      },
      { bereich: "Küche", leistung: "Demontage ca. 350–800 €." },
    ],
    preise: [
      { leistung: "100 m² Standard-Entkernung", richtwert: "ca. 4.500 € Rückbauleistung" },
      { leistung: "Entsorgung und Container", richtwert: "separat" },
    ],
    separat: [
      "Tragende und statisch relevante Bauteile nur mit fachlicher Freigabe",
      "Leitungen müssen freigeschaltet sein",
      "Asbest, KMF, PCB, PAK, Schimmel und andere Gefahrstoffe nicht im Normalpreis",
      "Komplettabbruch, Fundamente und schwerer Außenabbruch separat",
    ],
    hinweis:
      "Rückbau, Räumung, besenreine Übergabe und die spätere Bauendreinigung kommen aus einer Hand – ohne Schnittstelle zwischen zwei Firmen.",
  },
  {
    nr: 12,
    slug: "partnerfirmen",
    titel: "Rahmenangebot für Partnerfirmen",
    untertitel:
      "Für Bauunternehmen, Sanierer, Generalunternehmer und Auftraggeber mit wechselnden Einzelaufträgen.",
    kategorie: "partner",
    turnus: "flexibel",
    richtwert: "m²-, Stück-, Stunden- oder Festpreis",
    kennzahlen: [
      { wert: "ab 38 €", label: "Reinigung je Arbeitsstunde" },
      { wert: "ab 42 €", label: "Räum- und Helferarbeiten je Stunde" },
      { wert: "ab 672 €", label: "2-Personen-Team / 8 Std." },
    ],
    umfang: [
      { bereich: "Entkernung / Rückbau", leistung: "ca. 25–95 €/m² je Rückbautiefe." },
      { bereich: "Räum- und Helferarbeiten", leistung: "ab ca. 42 € je Arbeitsstunde." },
      {
        bereich: "Rückbau / Demontage nach Aufwand",
        leistung: "ab ca. 45 € je Arbeitsstunde.",
      },
      { bereich: "Reinigung nach Aufwand", leistung: "ab ca. 38 € je Arbeitsstunde." },
      { bereich: "3-Personen-Team / 8 Std.", leistung: "ab ca. 1.008 € je Tag." },
      {
        bereich: "Baureinigung",
        leistung:
          "Baugrob ca. 3,00 €/m², Bauzwischen ca. 2,00 €/m² je Durchgang, Bauende ca. 7,00 €/m².",
      },
      {
        bereich: "Grundreinigung / Glas",
        leistung: "Grundreinigung ca. 4,50 €/m², Glas ca. 3,50 €/m² Standard.",
      },
    ],
    preise: [
      {
        leistung: "Abrechnungsmodelle",
        richtwert: "m²-Preis, Stückpreis, Stunden- oder Tagessatz, Festpreis je Objekt",
      },
      { leistung: "Größere Projekte", richtwert: "Abschläge nach Vereinbarung" },
    ],
    separat: [
      "Container und Mulden",
      "Mineralischer Bauschutt",
      "Gemischte Bauabfälle",
      "Transport- und Tragewege",
      "Staub- und Laufwegschutz",
      "Sonderstoffe separat",
    ],
    hinweis:
      "Bewusst kein Festpreis für ein bestimmtes Objekt: Partner rufen je Projekt einzelne Leistungen oder komplette Pakete ab. Vor Ausführung wird jeder Auftrag anhand von Besichtigung, Fotos, Plänen oder Leistungsverzeichnis bestätigt.",
  },
  {
    nr: 13,
    slug: "schule",
    titel: "Schulreinigung",
    untertitel: "Unterhaltsreinigung für Schulen, Schulzentren und Bildungseinrichtungen.",
    kategorie: "unterhalt",
    turnus: "5× / Woche",
    richtwert: "7,00 €/m² / Monat",
    kennzahlen: [
      { wert: "100 m²", label: "Berechnungsbasis" },
      { wert: "5× / Woche", label: "Standardturnus" },
      { wert: "7,00 €/m²", label: "monatlicher Richtwert" },
    ],
    umfang: [
      {
        bereich: "Klassen- / Unterrichtsräume",
        leistung: "Böden, frei zugängliche Oberflächen und Kontaktflächen.",
      },
      {
        bereich: "Flure / Treppen",
        leistung: "Laufwege, Handläufe, Eingangs- und Verkehrsflächen.",
      },
      {
        bereich: "Sanitärbereiche",
        leistung:
          "Hygienische Reinigung von WC, Waschbecken, Armaturen, Spiegeln und Böden.",
      },
      {
        bereich: "Lehrerzimmer / Verwaltung",
        leistung: "Boden- und Oberflächenreinigung, üblicher Abfall.",
      },
      {
        bereich: "Mensa / Aufenthaltsbereiche",
        leistung:
          "Frei zugängliche Oberflächen und Böden außerhalb der Lebensmittelproduktion.",
      },
      {
        bereich: "Sport- / Mehrzweckbereiche",
        leistung: "Böden und vereinbarte Standardflächen.",
      },
      {
        bereich: "Abfall / Kontaktflächen",
        leistung: "Übliche Behälter sowie häufig berührte Flächen.",
      },
    ],
    preise: [{ leistung: "100 m²", richtwert: "700 € / Monat" }],
    separat: [
      "Ferien-Grundreinigung",
      "Glas",
      "Maschinelle Bodenpflege",
      "Veranstaltungsreinigung",
      "Sonderverschmutzung",
    ],
  },
  {
    nr: 14,
    slug: "kita",
    titel: "Kita / Kindergarten",
    untertitel: "Unterhalts- und Hygienereinigung für sensible Kinderbereiche.",
    kategorie: "unterhalt",
    turnus: "5× / Woche",
    richtwert: "8,50 €/m² / Monat",
    kennzahlen: [
      { wert: "100 m²", label: "Berechnungsbasis" },
      { wert: "5× / Woche", label: "Standardturnus" },
      { wert: "8,50 €/m²", label: "monatlicher Richtwert" },
    ],
    umfang: [
      {
        bereich: "Gruppen- / Spielräume",
        leistung: "Böden, frei zugängliche Oberflächen und übliche Kontaktflächen.",
      },
      {
        bereich: "Kinder-WCs",
        leistung: "Intensive hygienische Reinigung kindgerechter Sanitärbereiche.",
      },
      {
        bereich: "Wickelbereiche",
        leistung:
          "Reinigung vereinbarter Standardflächen; hygienische Sonderanforderungen nach Abstimmung.",
      },
      { bereich: "Schlaf- / Ruheräume", leistung: "Böden und frei zugängliche Flächen." },
      {
        bereich: "Garderoben",
        leistung: "Böden, Bänke, Kontaktflächen und übliche Verschmutzungen.",
      },
      {
        bereich: "Ess- / Aufenthaltsbereiche",
        leistung: "Frei zugängliche Oberflächen und Böden außerhalb der Küchenproduktion.",
      },
      {
        bereich: "Personalräume",
        leistung: "Böden, Oberflächen und übliche Sozialraumreinigung.",
      },
      {
        bereich: "Abfall / Kontaktflächen",
        leistung: "Normale Behälter, Türklinken, Schalter und häufig berührte Flächen.",
      },
    ],
    preise: [{ leistung: "100 m²", richtwert: "850 € / Monat" }],
    separat: [
      "6. Reinigungstag",
      "Spielzeug-Intensivreinigung",
      "Grundreinigung",
      "Glas",
      "Teppich und Polster",
      "Sonderdesinfektion",
    ],
  },
  {
    nr: 15,
    slug: "polster",
    titel: "Polsterreinigung",
    untertitel:
      "Fasertiefe Reinigung für Stühle, Bürostühle, Sessel, Sofas und gewerbliche Sitzmöbel.",
    kategorie: "sonder",
    turnus: "einmalig / je Stück",
    richtwert: "ab 18 € / Stuhl",
    kennzahlen: [
      { wert: "ab 18 €", label: "Polsterstuhl" },
      { wert: "ab 35 €", label: "Sessel" },
      { wert: "ab 25 €", label: "je Sitzplatz Sofa" },
    ],
    umfang: [
      {
        bereich: "Vorprüfung",
        leistung: "Stoffart, Verschmutzung, Fleckenbild und Materialverträglichkeit prüfen.",
      },
      {
        bereich: "Vorreinigung",
        leistung: "Lose Verschmutzungen, Staub, Krümel und Haare absaugen.",
      },
      {
        bereich: "Fleckenvorbehandlung",
        leistung: "Übliche wasserlösliche Flecken gezielt vorbehandeln.",
      },
      {
        bereich: "Tiefenreinigung",
        leistung:
          "Sprühextraktion geeigneter Textilpolster mit möglichst geringer Restfeuchte.",
      },
      {
        bereich: "Nachspülen / Extraktion",
        leistung: "Gelösten Schmutz und Reinigungsflotte aufnehmen.",
      },
      {
        bereich: "Abschlusskontrolle",
        leistung: "Sichtkontrolle und Hinweis zur Trocknungszeit.",
      },
    ],
    preise: [
      { leistung: "Polsterstuhl / Esszimmerstuhl", richtwert: "ab 18 € / Stück" },
      { leistung: "Bürostuhl gepolstert", richtwert: "ab 20 € / Stück" },
      { leistung: "Sessel", richtwert: "ab 35 € / Stück" },
      { leistung: "Hocker", richtwert: "ab 20 € / Stück" },
      { leistung: "2-Sitzer-Sofa", richtwert: "ab 55 €" },
      { leistung: "3-Sitzer-Sofa", richtwert: "ab 75 €" },
      { leistung: "Ecksofa / Wohnlandschaft", richtwert: "ab 125 €" },
      { leistung: "Große gewerbliche Stückzahlen", richtwert: "individueller Mengenpreis" },
    ],
    separat: [
      "Intensive Fleckenbehandlung ab 10–30 €",
      "Geruchsneutralisierung ab 15–40 € je Möbelstück",
      "Imprägnierung und Faserschutz ab 7 € je Sitzplatz",
      "Tierhaar- und starke Haarentfernung nach Aufwand",
      "Matratzenreinigung ab 45 € einzeln, ab 70 € in Doppelgröße",
      "Leder und Kunstleder nur mit geeignetem Sonderverfahren",
    ],
    hinweis:
      "Vollständige Fleckenentfernung kann bei alten Verfärbungen oder empfindlichen Stoffen nicht garantiert werden.",
  },
  {
    nr: 16,
    slug: "einzelhandel",
    titel: "Kaufhaus / Einzelhandelsfläche",
    untertitel:
      "Unterhaltsreinigung für Kaufhäuser, Möbelhäuser, große Fachmärkte und stark frequentierte Verkaufsflächen.",
    kategorie: "unterhalt",
    turnus: "5× / Woche",
    richtwert: "6,90 €/m² / Monat",
    kennzahlen: [
      { wert: "100 m²", label: "Berechnungsbasis" },
      { wert: "5× / Woche", label: "Standardturnus" },
      { wert: "6,90 €/m²", label: "monatlicher Richtwert" },
    ],
    umfang: [
      {
        bereich: "Verkaufsflächen",
        leistung:
          "Böden, frei zugängliche Oberflächen und übliche Lauf- und Gebrauchsspuren.",
      },
      {
        bereich: "Eingang / Windfang",
        leistung:
          "Stark frequentierte Eingangsflächen, Mattenumfeld, Türen und Griffbereiche.",
      },
      {
        bereich: "Kassen / Service",
        leistung: "Boden, frei zugängliche Flächen und Kontaktpunkte.",
      },
      {
        bereich: "Umkleiden / Beratung",
        leistung: "Böden, Spiegel im Standardumfang, Sitz- und Ablagebereiche.",
      },
      {
        bereich: "Sanitär",
        leistung: "WC, Waschbecken, Armaturen, Spiegel, Kontaktflächen und Boden.",
      },
      {
        bereich: "Personal / Sozial",
        leistung: "Böden, Oberflächen, Spüle und äußere Geräteflächen.",
      },
      {
        bereich: "Treppen / Aufzüge",
        leistung: "Laufbereiche, Handläufe, Kabinenboden und Bedienelemente.",
      },
      {
        bereich: "Abfall / Kontaktflächen",
        leistung: "Normale Papier- und Restmüllbehälter, Griffe, Schalter und Taster.",
      },
    ],
    preise: [{ leistung: "100 m² bei 5× / Woche", richtwert: "690 € / Monat" }],
    separat: [
      "Grundreinigung ab ca. 4,50 €/m²",
      "Maschinelle Bodenpflege",
      "Rolltreppenreinigung nach technischer Abstimmung",
      "Polster- und Teppichreinigung",
      "Bauendreinigung ca. 7,00 €/m²",
      "Räumung und nichttragende Entkernung nach Besichtigung",
      "6. und 7. Reinigungstag nach Öffnungszeit und Bedarf",
    ],
    hinweis:
      "Lebensmittelproduktion, technische Rolltreppenwartung, Warenverräumung sowie nicht freigegebene Sicherheits- und Technikbereiche sind nicht automatisch Bestandteil.",
  },
  {
    nr: 17,
    slug: "logistik",
    titel: "Lagerhallen / Logistik / Industrie",
    untertitel:
      "Hallen- und Betriebsreinigung für große Lager-, Umschlag- und freigegebene Produktionsflächen.",
    kategorie: "unterhalt",
    turnus: "2× / Woche",
    richtwert: "2,90 €/m² / Monat",
    kennzahlen: [
      { wert: "1.000 m²", label: "Orientierungsbasis" },
      { wert: "2× / Woche", label: "Standardturnus" },
      { wert: "2,90 €/m²", label: "monatlicher Richtwert" },
    ],
    umfang: [
      {
        bereich: "Hallenböden",
        leistung:
          "Maschinelles oder manuelles Kehren und bedarfsgerechte Nassreinigung frei zugänglicher Flächen.",
      },
      {
        bereich: "Verkehrswege",
        leistung: "Lauf-, Fahr-, Eingangs- und Übergangsbereiche.",
      },
      {
        bereich: "Regal- / Lagerumfeld",
        leistung: "Zugängliche Bodenflächen; Warenbewegung ausgeschlossen.",
      },
      {
        bereich: "Sozial / Sanitär",
        leistung: "Pausen-, WC- und Waschbereiche nach vereinbartem Standard.",
      },
      {
        bereich: "Büro / Leitstand",
        leistung: "Unterhaltsreinigung frei zugänglicher Bereiche nach Vereinbarung.",
      },
      {
        bereich: "Abfall",
        leistung:
          "Üblicher Rest- und Papierabfall; Produktions- und Gefahrstoffabfall ausgeschlossen.",
      },
    ],
    preise: [
      { leistung: "1.000 m² bei 2× / Woche", richtwert: "ca. 2.900 € / Monat" },
      { leistung: "Einmalige Hallen-Grundreinigung", richtwert: "ca. 2,50–5,00 €/m²" },
      { leistung: "Intensivreinigung", richtwert: "ca. 4,50–8,00 €/m²" },
      { leistung: "Sonderbereiche nach Aufwand", richtwert: "ab ca. 38 € / Std." },
    ],
    separat: [
      "Maschinelle Scheuersaug-Reinigung",
      "Glas-, Tor- und Fensterreinigung",
      "Bau- und Übergabereinigung",
      "Hochflächen nach Zugangsplanung",
      "Außen- und Hofflächen",
      "Räumung und nichttragender Rückbau",
    ],
    hinweis:
      "Produktionsmaschinen, laufende Fördertechnik, nicht freigegebene Technikzonen sowie Öl-, Chemikalien-, Gefahrstoff- oder unbekannte Kontaminationen sind nicht Bestandteil der Standardreinigung.",
  },
  {
    nr: 18,
    slug: "aussenflaechen",
    titel: "Parkhaus / Tiefgarage / Außenflächen",
    untertitel:
      "Maschinelle Reinigung großer Park-, Verkehrs-, Event- und befestigter Sonderflächen.",
    kategorie: "sonder",
    turnus: "einmalig / periodisch",
    richtwert: "ab 1,80 €/m² Grundreinigung",
    kennzahlen: [
      { wert: "1.000 m²", label: "Orientierungsbasis" },
      { wert: "ab 0,75 €/m²", label: "maschinelle Kehrreinigung" },
      { wert: "ab 1,80 €/m²", label: "Grund- und Nassreinigung" },
    ],
    umfang: [
      {
        bereich: "Fahr- / Parkflächen",
        leistung: "Maschinelles Kehren sowie geeignete Nass- und Scheuersaug-Reinigung.",
      },
      {
        bereich: "Stellplätze",
        leistung: "Reinigung freigegebener und leerer Stellplatzflächen.",
      },
      {
        bereich: "Rampen / Fahrgassen",
        leistung: "Staub, Sand, Splitt und normale Fahrspuren.",
      },
      {
        bereich: "Treppen / Zugänge",
        leistung: "Treppen, Podeste, Handläufe und Zugänge.",
      },
      {
        bereich: "Ablaufumfeld",
        leistung:
          "Oberflächliche Reinigung; technische Kanal- und Abscheiderreinigung ausgeschlossen.",
      },
      {
        bereich: "Event- / Außenflächen",
        leistung: "Grobschmutzaufnahme, Kehren und bedarfsgerechte Maschinenreinigung.",
      },
    ],
    preise: [
      { leistung: "Maschinelle Kehrreinigung", richtwert: "ab ca. 0,75 €/m²" },
      { leistung: "Maschinelle Grund- / Nassreinigung", richtwert: "ab ca. 1,80 €/m²" },
      { leistung: "Intensive Parkhaus- / TG-Reinigung", richtwert: "ca. 2,50–4,50 €/m²" },
      { leistung: "1.000 m² Grundreinigung", richtwert: "ab ca. 1.800 €" },
      { leistung: "Periodische Unterhaltsreinigung", richtwert: "individueller Paketpreis" },
    ],
    separat: [
      "Kaugummi-Intensivbehandlung",
      "Öl- und Gummispuren nach Prüfung",
      "Hochdruck- und Heißwasserverfahren",
      "Treppenhäuser und Aufzüge",
      "Glas und Eingänge",
      "Laub- und Splitt-Sondergänge",
      "Nacht- und Wochenendarbeit",
      "Verkehrssicherung",
    ],
    hinweis:
      "Kraftstoff-, Öl-, Chemikalien- oder umweltgefährdende Kontaminationen, Abscheider, Kanalisation und technische Entwässerung sind keine normale Standardreinigung und müssen gesondert fachlich geprüft werden.",
  },
];

export const vorteile = [
  {
    titel: "Ein Ansprechpartner",
    text: "Reinigung, Bauendreinigung, Räumung und nichttragender Innenrückbau.",
  },
  {
    titel: "Flexible Kalkulation",
    text: "m²-, Stück-, Stunden-, Tages- oder Festpreis je nach Auftrag.",
  },
  {
    titel: "Transparente Grenzen",
    text: "Zusatzleistungen, Entsorgung und Sonderfälle werden vorab benannt.",
  },
  {
    titel: "Objektbezogene Preise",
    text: "Richtwerte zur Orientierung, Festpreis nach kurzer Prüfung.",
  },
  {
    titel: "Partnerfähig",
    text: "Auch für wiederkehrende Einzelaufträge von Bau- und Sanierungsfirmen.",
  },
  {
    titel: "Qualitätskontrolle",
    text: "Beanstandungen im vereinbarten Umfang werden aufgenommen und nachgebessert.",
  },
];
