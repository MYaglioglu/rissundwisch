import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import ClaimBand from "@/components/ClaimBand";
import Process from "@/components/Process";
import WhatsAppSection from "@/components/WhatsAppSection";
import Contact from "@/components/Contact";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  legalName: site.legalName,
  description:
    "Abbruch, Entkernung und professionelle Gebäudereinigung in Karlsruhe und Umgebung.",
  url: site.url,
  telephone: "+4915207330197",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    postalCode: site.zip,
    addressLocality: site.city,
    addressCountry: "DE",
  },
  areaServed: "Karlsruhe und Umgebung",
  slogan: site.claim,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Advantages />
        <ClaimBand />
        <Process />
        <WhatsAppSection />
        <Contact />
      </main>
    </>
  );
}
