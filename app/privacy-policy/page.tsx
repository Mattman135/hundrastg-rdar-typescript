import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: marc@shipfa.st

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
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
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Senast uppdaterad: 16 april 2026
 
Integritetspolicy för Hundrastgård.se
 
Denna integritetspolicy ("Policy") beskriver hur Hundrastgård.se på https://hundrastgård.se ("Webbplatsen") hanterar din integritet och data. Vi värdesätter din integritet och är engagerade i att skydda dina rättigheter.
 
1. Introduktion
 
Hundrastgård.se är en svensk webbplats utformad för att hjälpa användare att hitta information om hundskogar i Sverige. Denna policy förklarar vår policy angående insamling och användning av data.
 
2. Insamling av användardata
 
Hundrastgård.se samlar inte in någon personlig användardata. Vi kräver ingen personlig information som namn, e-postadress, telefonnummer eller någon annan identifierande information för att du ska kunna använda vår webbplats.
 
3. Insamling av icke-personlig data
 
Vi använder webkakor för att samla in icke-personlig data. Dessa kakor hjälper oss att förbättra webbplatsens funktionalitet och användarupplevelse. Kakorna identifierar dig inte personligt och kan inte användas för att spåra din identitet.
 
4. Syfte med datainsamling
 
Då vi inte samlar in personlig data, har vi ingen data att behandla för något specifikt syfte. Vår webbplats är utformad för att fungera utan att kräva någon personlig information från användarna.
 
5. Datadelning
 
Vi delar inte någon data med tredje parter. Då vi inte samlar in personlig data, finns det ingen data att dela.
 
6. Barns integritet
 
Hundrastgård.se samlar inte in någon data från barn eller andra användare. Vi kräver ingen åldersbekräftelse och vår webbplats är utformad för att vara tillgänglig för alla användare utan att samla in personlig information.
 
7. Dina rättigheter
 
Under svensk dataskyddslagstiftning har du rätt att:
- Få bekräftelse på om vi behandlar data om dig
- Få tillgång till data vi behandlar om dig
- Begära rättelse av felaktig data
- Begära radering av data under vissa omständigheter
- Invända mot behandlingen av din data
 
Då vi inte samlar in personlig data, är dessa rättigheter inte tillämpliga för vår webbplats.
 
8. Säkerhet
 
Vi är engagerade i att skydda din integritet. Vår webbplats använder standardsäkerhetsmåtgärder för att skydda mot obehörig åtkomst.
 
9. Uppdateringar av integritetspolicyn
 
Vi kan uppdatera denna policy från tid till annan. Ändringar träder i kraft omedelbar vid publicering på webbplatsen.
 
10. Kontaktinformation
 
Om du har frågor eller funderingar angående denna integritetspolicy, kontakta oss på hallbergmattis97@gmail.com.
 
Tack för att du besöker Hundrastgård.se!`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
