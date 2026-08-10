import type { Metadata } from "next";
import LegalPage, { EditorNote } from "@/components/LegalPage";
import { contactForm, legal, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: `Informationen zur Verarbeitung personenbezogener Daten auf ${site.domainPretty} gemäß Art. 13 DSGVO.`,
  alternates: { canonical: "/datenschutz" },
  robots: { index: true, follow: true },
};

export default function Datenschutz() {
  return (
    <LegalPage
      eyebrow="Rechtliches"
      title={"Datenschutz­erklärung"}
      intro={`Informationen zur Verarbeitung Ihrer personenbezogenen Daten nach Art. 13 und 14 DSGVO. Stand: ${legal.stand}.`}
    >
      <EditorNote>
        Vor dem Livegang zu ergänzen: Name des Geschäftsführers, Hosting-Anbieter und
        E-Mail-Anbieter (jeweils mit Anschrift). Mit beiden Dienstleistern muss zusätzlich
        ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO geschlossen werden.
        {contactForm.provider === "formsubmit"
          ? " Das Formular läuft derzeit über den Dienst FormSubmit (Abschnitt 4.2) – hier ist zu klären, ob der Anbieter einen Auftragsverarbeitungsvertrag anbietet; andernfalls sollte auf den Versand über das eigene Postfach umgestellt werden."
          : ""}{" "}
        Dieser Text ist eine sorgfältig erstellte Vorlage, ersetzt aber keine
        Rechtsberatung – lassen Sie ihn vor Veröffentlichung prüfen.
      </EditorNote>

      <h2>1. Verantwortlicher</h2>
      <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
      <address>
        <strong>{site.legalName}</strong>
        <br />
        {legal.vertretenDurch}
        <br />
        {site.street}
        <br />
        {site.zip} {site.city}
        <br />
        Telefon: <a href={site.phoneHref}>{site.phonePretty}</a>
        <br />
        E-Mail: <a href={site.emailHref}>{site.email}</a>
      </address>
      <p>
        Einen Datenschutzbeauftragten haben wir nicht bestellt, da die gesetzlichen
        Voraussetzungen hierfür nicht vorliegen. Bei Fragen zum Datenschutz wenden Sie sich
        bitte an die oben genannten Kontaktdaten.
      </p>

      <h2>2. Grundsätze</h2>
      <p>
        Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung dieser
        Website und unserer Leistungen erforderlich ist oder Sie eingewilligt haben.
        Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 lit. a DSGVO (Einwilligung),
        lit. b DSGVO (Vertrag oder vorvertragliche Maßnahmen) und lit. f DSGVO
        (berechtigtes Interesse).
      </p>
      <p>
        Die Übertragung erfolgt verschlüsselt über HTTPS/TLS. Eine Verarbeitung Ihrer
        Daten außerhalb der EU findet nur statt, soweit dies nachfolgend ausdrücklich
        beschrieben ist.
      </p>

      <h2>3. Hosting und Server-Logfiles</h2>
      <p>
        Diese Website wird bei einem externen Dienstleister gehostet:{" "}
        {legal.hoster}. Beim Aufruf der Seiten erhebt der Anbieter automatisch
        Informationen, die Ihr Browser übermittelt und die technisch erforderlich sind, um
        die Website auszuliefern:
      </p>
      <ul>
        <li>IP-Adresse des anfragenden Geräts</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>Name und URL der abgerufenen Datei</li>
        <li>übertragene Datenmenge und Meldung über den Abruferfolg</li>
        <li>Browsertyp, Browserversion und Betriebssystem</li>
        <li>gegebenenfalls die zuvor besuchte Seite (Referrer)</li>
      </ul>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt
        im sicheren, stabilen und störungsfreien Betrieb der Website. Die Logfiles werden
        aus Sicherheitsgründen für maximal 30 Tage gespeichert und anschließend gelöscht.
        Eine Zusammenführung dieser Daten mit anderen Datenquellen findet nicht statt.
      </p>

      <h2>4. Kontaktaufnahme</h2>

      <h3>4.1 Kontaktformular</h3>
      <p>
        Wenn Sie uns über das Anfrageformular kontaktieren, verarbeiten wir die von Ihnen
        eingegebenen Daten: Name, E-Mail-Adresse sowie – soweit angegeben – Telefonnummer,
        gewünschte Leistung, Objekt beziehungsweise Ort, Größe oder Fläche, Wunschtermin
        und den Inhalt Ihrer Nachricht.
      </p>
      <p>
        Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage und für
        Anschlussfragen verwendet. Eine Speicherung in einer Datenbank auf dieser Website
        findet nicht statt.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage auf den
        Abschluss eines Vertrags gerichtet ist, im Übrigen Art. 6 Abs. 1 lit. f DSGVO
        (Interesse an der Beantwortung von Anfragen) sowie Ihre Einwilligung nach Art. 6
        Abs. 1 lit. a DSGVO, die Sie beim Absenden erteilen. Ihre Einwilligung können Sie
        jederzeit mit Wirkung für die Zukunft widerrufen.
      </p>
      <p>
        Wir löschen die Daten, sobald sie für den Zweck der Verarbeitung nicht mehr
        erforderlich sind – in der Regel spätestens sechs Monate nach abschließender
        Bearbeitung. Kommt ein Auftrag zustande, gelten die gesetzlichen
        Aufbewahrungsfristen (in der Regel sechs bis zehn Jahre nach HGB und AO).
      </p>

      {contactForm.provider === "formsubmit" ? (
        <>
          <h3>4.2 Formularversand über FormSubmit</h3>
          <p>
            Für die Zustellung der Formularanfragen setzen wir den Dienst FormSubmit
            (formsubmit.co) ein. Beim Absenden werden Ihre Eingaben zusammen mit Ihrer
            IP-Adresse an die Server des Anbieters übertragen, dort verarbeitet und als
            E-Mail an unser Postfach weitergeleitet.
          </p>
          <p>
            Die Verarbeitung kann dabei auf Servern außerhalb der Europäischen Union,
            insbesondere in den USA, erfolgen. Ein dem europäischen Datenschutzniveau
            entsprechender Schutz kann für diese Übermittlung nicht in jedem Fall
            garantiert werden. Rechtsgrundlage für die Nutzung ist Ihre ausdrückliche
            Einwilligung nach Art. 6 Abs. 1 lit. a und Art. 49 Abs. 1 lit. a DSGVO, die Sie
            mit dem Setzen des Häkchens und dem Absenden des Formulars erteilen. Sie können
            diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.
          </p>
          <p>
            Sie sind nicht verpflichtet, das Formular zu nutzen: Sie erreichen uns
            gleichwertig telefonisch unter{" "}
            <a href={site.phoneHref}>{site.phonePretty}</a> oder per E-Mail an{" "}
            <a href={site.emailHref}>{site.email}</a>. In diesen Fällen findet keine
            Übermittlung an FormSubmit statt.
          </p>
        </>
      ) : (
        <>
          <h3>4.2 Zustellung der Formularanfragen</h3>
          <p>
            Die Übermittlung erfolgt per E-Mail an unser Postfach über unseren
            E-Mail-Anbieter {legal.mailProvider}. Weitere Dienstleister sind an der
            Zustellung nicht beteiligt.
          </p>
        </>
      )}

      <h3>4.3 Spam-Schutz</h3>
      <p>
        Zum Schutz vor automatisierten Einsendungen enthält das Formular ein für Menschen
        unsichtbares Zusatzfeld, und wir werten aus, wie viel Zeit zwischen dem Aufruf und
        dem Absenden vergeht.
        {contactForm.provider === "eigener"
          ? " Zusätzlich begrenzen wir die Zahl der Anfragen pro IP-Adresse. Ihre IP-Adresse wird hierfür nur kurzzeitig im Arbeitsspeicher vorgehalten und nicht dauerhaft gespeichert."
          : ""}{" "}
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (Abwehr von Missbrauch). Externe
        Captcha-Dienste setzen wir nicht ein.
      </p>

      <h3>4.4 Kontakt per Telefon oder E-Mail</h3>
      <p>
        Wenn Sie uns anrufen oder direkt eine E-Mail schreiben, verarbeiten wir die dabei
        übermittelten Daten zur Bearbeitung Ihres Anliegens. Rechtsgrundlage ist Art. 6
        Abs. 1 lit. b beziehungsweise lit. f DSGVO.
      </p>

      <h2>5. Kontaktaufnahme über WhatsApp</h2>
      <p>
        Auf unserer Website bieten wir Ihnen die Möglichkeit, uns über WhatsApp zu
        kontaktieren. Der Link öffnet den Messenger auf Ihrem Gerät; eine Verbindung zu
        WhatsApp entsteht erst, wenn Sie den Link aktiv anklicken. Anbieter ist WhatsApp
        Ireland Limited, Merrion Road, Ballsbridge, Dublin 4, Irland.
      </p>
      <p>
        Wenn Sie uns über WhatsApp schreiben, verarbeiten wir Ihre Mobilfunknummer, Ihren
        Profilnamen und den Inhalt Ihrer Nachricht einschließlich übermittelter Fotos, um
        Ihre Anfrage zu bearbeiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
        beziehungsweise lit. f DSGVO.
      </p>
      <p>
        Bitte beachten Sie: WhatsApp verarbeitet Metadaten eigenständig und kann dabei
        Daten an Server außerhalb der Europäischen Union, insbesondere in die USA,
        übermitteln. Auf diese Verarbeitung haben wir keinen Einfluss. Übermitteln Sie uns
        über WhatsApp bitte keine besonders sensiblen Informationen. Sie können uns
        alternativ jederzeit per Telefon, E-Mail oder über das Kontaktformular erreichen.
      </p>

      <h2>6. Cookies und Reichweitenmessung</h2>
      <p>
        Diese Website setzt keine Cookies, die nicht technisch erforderlich sind. Wir
        verwenden weder Tracking- noch Analysedienste und binden keine Werbenetzwerke ein.
        Ein Einwilligungsbanner ist deshalb nicht erforderlich.
      </p>

      <h2>7. Schriftarten</h2>
      <p>
        Die verwendeten Schriftarten werden von unserem eigenen Server ausgeliefert. Beim
        Aufruf der Website wird keine Verbindung zu Servern Dritter – etwa Google Fonts –
        aufgebaut, und es werden keine Daten an Dritte übertragen.
      </p>

      <h2>8. Empfänger und Auftragsverarbeitung</h2>
      <p>
        Eine Weitergabe Ihrer Daten an Dritte erfolgt nur, soweit dies zur
        Vertragserfüllung erforderlich ist, Sie eingewilligt haben oder eine gesetzliche
        Verpflichtung besteht. Mit Dienstleistern, die Daten in unserem Auftrag verarbeiten
        (Hosting, E-Mail
        {contactForm.provider === "formsubmit" ? ", Formularversand" : ""}), haben wir –
        soweit erforderlich – Verträge zur Auftragsverarbeitung nach Art. 28 DSGVO
        geschlossen. Eine Verwendung Ihrer Daten zu Werbezwecken oder ein Verkauf an Dritte
        findet nicht statt.
      </p>

      <h2>9. Ihre Rechte</h2>
      <p>Sie haben uns gegenüber jederzeit folgende Rechte:</p>
      <ul>
        <li>Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO)</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
        <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>
          Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen
          (Art. 21 DSGVO)
        </li>
        <li>Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
      </ul>
      <p>
        Zur Ausübung genügt eine formlose Nachricht an{" "}
        <a href={site.emailHref}>{site.email}</a>.
      </p>

      <h2>10. Beschwerderecht bei der Aufsichtsbehörde</h2>
      <p>
        Unbeschadet anderer Rechtsbehelfe steht Ihnen ein Beschwerderecht bei einer
        Datenschutz-Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat Ihres
        Aufenthaltsorts oder des mutmaßlichen Verstoßes. Für uns zuständig ist:
      </p>
      <address>{legal.aufsichtsbehoerde}</address>

      <h2>11. Pflicht zur Bereitstellung</h2>
      <p>
        Die Bereitstellung Ihrer Daten ist weder gesetzlich noch vertraglich
        vorgeschrieben. Ohne Angabe von Name, E-Mail-Adresse und einer Beschreibung Ihres
        Anliegens können wir Ihre Anfrage jedoch nicht bearbeiten. Eine automatisierte
        Entscheidungsfindung einschließlich Profiling findet nicht statt.
      </p>

      <h2>12. Änderungen dieser Erklärung</h2>
      <p>
        Wir passen diese Datenschutzerklärung an, sobald sich unsere Leistungen, die
        eingesetzte Technik oder die Rechtslage ändern. Es gilt jeweils die auf dieser
        Seite veröffentlichte Fassung. Stand: {legal.stand}.
      </p>
    </LegalPage>
  );
}
