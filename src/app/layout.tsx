import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import "./globals.css";

// latin-ext wegen der tuerkischen Zeichen im Inhabernamen (Yağlıoğlu).
// Ohne Vorabladen wuerde das "ğ" beim ersten Rendern kurz in einer
// Ersatzschrift stehen. Oswald braucht es nicht: dort steht nur der Schriftzug.
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const siteUrl = "https://www.rissundwisch.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Riss & Wisch | Abriss & Gebäudereinigung in Karlsruhe",
    template: "%s | Riss & Wisch",
  },
  description:
    "Abbruch, Entkernung und professionelle Gebäudereinigung aus Karlsruhe. Sauber. Sicher. Zuverlässig. 24/7 erreichbar – kostenloses Angebot innerhalb von 24 Stunden.",
  keywords: [
    "Abriss Karlsruhe",
    "Abbruchunternehmen Karlsruhe",
    "Entkernung Karlsruhe",
    "Gebäudereinigung Karlsruhe",
    "Bauendreinigung",
    "Unterhaltsreinigung",
    "Riss und Wisch",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "Riss & Wisch",
    title: "Riss & Wisch | Abriss & Gebäudereinigung in Karlsruhe",
    description:
      "Ein Team. Ein Anspruch. Ihre Lösung. Abbruch und Gebäudereinigung aus einer Hand – sauber, sicher, zuverlässig.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${inter.variable} ${oswald.variable}`}>
      <body className="antialiased">
        <Reveal />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
