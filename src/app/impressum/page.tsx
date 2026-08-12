import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legal, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum und Anbieterkennzeichnung von ${site.name}, ${site.city}.`,
  alternates: { canonical: "/impressum" },
};

const istGesellschaft = legal.rechtsform === "ug";
const zeigtRegister = istGesellschaft && legal.registergericht && legal.registernummer;

export default function Impressum() {
  return (
    <LegalPage
      eyebrow="Rechtliches"
      title="Impressum"
      intro="Anbieterkennzeichnung gemäß § 5 Digitale-Dienste-Gesetz (DDG)."
    >
      <h2>Angaben gemäß § 5 DDG</h2>
      <address>
        <strong>{site.owner}</strong>
        <br />
        {site.name} – {site.subline}
        <br />
        {site.street}
        <br />
        {site.zip} {site.city}
        <br />
        Deutschland
      </address>

      <h3>Kontakt</h3>
      <p>
        Telefon: <a href={site.phoneHref}>{site.phonePretty}</a>
        <br />
        E-Mail: <a href={site.emailHref}>{site.email}</a>
      </p>

      {zeigtRegister ? (
        <>
          <h3>Registereintrag</h3>
          <p>
            Eintragung im Handelsregister
            <br />
            Registergericht: {legal.registergericht}
            <br />
            Registernummer: {legal.registernummer}
          </p>
        </>
      ) : null}

      {legal.ustId ? (
        <>
          <h3>Umsatzsteuer-Identifikationsnummer</h3>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:{" "}
            {legal.ustId}
          </p>
        </>
      ) : null}

      <h2>Verantwortlich für den Inhalt</h2>
      <p>
        Verantwortlich für journalistisch-redaktionelle Inhalte gemäß § 18 Abs. 2 MStV:
      </p>
      <address>
        {site.owner}
        <br />
        {site.street}
        <br />
        {site.zip} {site.city}
      </address>

      <h2>Verbraucherstreitbeilegung</h2>
      <p>
        Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor
        einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen
        Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir
        als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte
        fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
        rechtswidrige Tätigkeit hinweisen.
      </p>
      <p>
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach
        den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung
        ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
        möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werden wir diese
        Inhalte umgehend entfernen.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält gegebenenfalls Links zu externen Websites Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte
        auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
        jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
        wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft;
        rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
      </p>
      <p>
        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete
        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
        Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
        unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
        Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
        bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
        Gebrauch gestattet.
      </p>
    </LegalPage>
  );
}
