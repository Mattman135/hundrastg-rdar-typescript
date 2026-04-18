import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Contact information: marc@shipfa.st
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://shipfa.st/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Senast uppdaterad: 16 april 2026

Välkommen till Hundrastgård.se!

Dessa användarvillkor reglerar din användning av webbplatsen Hundrastgård.se på https://hundrastgård.se och de tjänster som tillhandahålls av Hundrastgård.se. Genom att använda vår webbplats och tjänster accepterar du dessa villkor.

1. Beskrivning av Hundrastgård.se

Hundrastgård.se är en svensk webkatalog utformad för att hjälpa användare att hitta information om hundrastgårdar i Sverige. Webbplatsen tillhandahåller endast information och underlättar inte några kommersiella transaktioner eller köp.

2. Äganderätt och användarrättigheter

Allt innehåll som tillhandahålls på denna webbplats, inklusive men inte begränsat till text, bilder och platsinformation, tillhandahålls endast för informationssyften. Du får inte reproducera, duplicera eller exploatera något material på denna webbplats för kommersiella ändamål utan förfrågan om tillstånd i förväg.

3. Användardata och integritet

Hundrastgård.se samlar inte in, lagrar eller behandlar någon personlig användardata. Din integritet är viktig för oss, och vi har utformat denna webbplats för att fungera utan att kräva personlig information.

4. Insamling av icke-personlig data

Vi använder webkakor för att samla in icke-personlig data i syfte att förbättra våra tjänster och användarupplevelse.

5. Tillämplig lag

Dessa villkor regleras av svenska lagar.

6. Uppdateringar av villkoren

Vi kan uppdatera dessa villkor från tid till annan. Ändringar träder i kraft omedelbar vid publicering på webbplatsen.

Om du har några frågor eller funderingar angående dessa användarvillkor, kontakta oss på hallbergmattis97@gmail.com.

Tack för att du använder Hundrastgård.se!`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
