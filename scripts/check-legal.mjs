/**
 * Schutz vor einem unvollständigen Impressum.
 *
 * Prüft, ob in src/lib/site.ts noch Platzhalter in eckigen Klammern stehen.
 * Beim Produktions-Deployment auf Vercel bricht der Build ab – lokal und in
 * Vorschau-Deployments bleibt es bei einer Warnung, damit man weiterarbeiten kann.
 */
import { readFileSync } from "node:fs";
import path from "node:path";

const file = path.join(process.cwd(), "src", "lib", "site.ts");
const source = readFileSync(file, "utf8");

const legalBlock = /export const legal: Legal = \{([\s\S]*?)\n\};/.exec(source);

if (!legalBlock) {
  console.error("check-legal: Der Block 'export const legal' wurde nicht gefunden.");
  process.exit(1);
}

// Ohne eigenen Mailversand taucht der E-Mail-Anbieter in keinem Rechtstext auf.
const nutztFormsubmit = /provider:\s*"formsubmit"/.test(source);
const nichtErforderlich = nutztFormsubmit ? ["mailProvider"] : [];

const missing = [];
const entry = /^\s*(\w+):\s*"([^"]*)"/gm;
let match;

while ((match = entry.exec(legalBlock[1])) !== null) {
  const [, key, value] = match;
  if (nichtErforderlich.includes(key)) continue;
  if (value.includes("[") && value.includes("]")) missing.push({ key, value });
}

if (missing.length === 0) {
  console.log("check-legal: Impressum und Datenschutz sind vollständig ausgefüllt.");
  process.exit(0);
}

const isProduction = process.env.VERCEL_ENV === "production";

const list = missing.map((m) => `    ${m.key.padEnd(18)} ${m.value}`).join("\n");
const headline = isProduction
  ? "Deployment gestoppt: Das Impressum ist unvollständig."
  : "Warnung: Impressum und Datenschutz enthalten noch Platzhalter.";

// Nur der harte Abbruch geht auf stderr – sonst sieht ein erfolgreicher
// Build in manchen Shells wie ein Fehler aus.
const report = `
  ${headline}

  Noch offen in src/lib/site.ts:

${list}

  Ein Impressum ohne diese Angaben ist nach § 5 DDG unvollständig und abmahnfähig.
`;

if (isProduction) {
  console.error(report);
  console.error(
    "  Werte eintragen und erneut deployen. Vorschau-Deployments sind davon nicht betroffen.\n",
  );
  process.exit(1);
}

console.log(report);

process.exit(0);
