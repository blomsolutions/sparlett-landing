import type { Metadata } from "next";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata: Metadata = {
  title: "GDPR",
  description: "Slik følger Sparlett personvernforordningen (GDPR). Les om dine rettigheter, databehandling og hvordan vi beskytter personopplysningene dine.",
  alternates: { canonical: "https://sparlett.no/gdpr" },
  openGraph: {
    title: "GDPR — Sparlett",
    description: "Slik følger Sparlett personvernforordningen (GDPR). Les om dine rettigheter, databehandling og hvordan vi beskytter personopplysningene dine.",
    url: "https://sparlett.no/gdpr",
  },
};

const gdprJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Hva er GDPR?",
          acceptedAnswer: { "@type": "Answer", text: "GDPR (General Data Protection Regulation) er EUs personvernforordning som gir deg kontroll over egne personopplysninger. Sparlett er designet med personvern som grunnprinsipp." },
        },
        {
          "@type": "Question",
          name: "Hvem er behandlingsansvarlig for Sparlett?",
          acceptedAnswer: { "@type": "Answer", text: "BLOM SOLUTIONS (org.nr. 834 411 342) er behandlingsansvarlig for personopplysninger i Sparlett." },
        },
        {
          "@type": "Question",
          name: "Hvilke rettigheter har jeg som bruker av Sparlett?",
          acceptedAnswer: { "@type": "Answer", text: "Du har rett til innsyn, retting, sletting, begrensning av behandling, dataportabilitet, å protestere mot behandling, å trekke samtykke, og beskyttelse mot helautomatiserte avgjørelser." },
        },
        {
          "@type": "Question",
          name: "Hvordan utøver jeg mine GDPR-rettigheter?",
          acceptedAnswer: { "@type": "Answer", text: "Send e-post til hei@sparlett.no. Vi svarer innen 30 dager." },
        },
        {
          "@type": "Question",
          name: "Hvem er Sparletts databehandlere?",
          acceptedAnswer: { "@type": "Answer", text: "Vi bruker Google Firebase for autentisering og lagring, og Vercel for hosting. Alle er GDPR-kompatible med databehandleravtaler." },
        },
        {
          "@type": "Question",
          name: "Hvor kan jeg klage på Sparletts behandling av personopplysninger?",
          acceptedAnswer: { "@type": "Answer", text: "Du kan klage til Datatilsynet via www.datatilsynet.no." },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hjem", item: "https://sparlett.no" },
        { "@type": "ListItem", position: 2, name: "GDPR", item: "https://sparlett.no/gdpr" },
      ],
    },
  ],
};

export default function GDPRPage() {
  return (
    <SubpageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gdprJsonLd) }}
      />
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="mb-3 text-4xl font-bold tracking-tight">
            GDPR<span className="text-sage">.</span>
          </h1>
          <p className="mb-12 max-w-lg text-muted">
            Slik følger Sparlett personvernforordningen og beskytter dine rettigheter<span className="text-sage">.</span>
          </p>

          <div className="space-y-8 text-sm text-muted leading-relaxed">
            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">Om GDPR</h2>
              <p>GDPR (General Data Protection Regulation) er EUs personvernforordning som gir deg kontroll over egne personopplysninger. Sparlett er designet med personvern som grunnprinsipp.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">Behandlingsansvarlig</h2>
              <p>BLOM SOLUTIONS (org.nr. 834 411 342) er behandlingsansvarlig.</p>
              <p className="mt-1">Kontakt: <a href="mailto:hei@sparlett.no" className="text-sage hover:text-sage-dark font-medium">hei@sparlett.no</a></p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">Dine rettigheter</h2>
              <div className="space-y-3 mt-3">
                {[
                  { right: "Rett til innsyn (Art. 15)", desc: "Du kan be om kopi av alle personopplysninger vi har om deg." },
                  { right: "Rett til retting (Art. 16)", desc: "Du kan be om retting av uriktige opplysninger." },
                  { right: "Rett til sletting (Art. 17)", desc: "Du kan be om at alle dine data slettes permanent." },
                  { right: "Rett til begrensning (Art. 18)", desc: "Du kan be om at behandlingen begrenses." },
                  { right: "Rett til dataportabilitet (Art. 20)", desc: "Du kan be om å motta dine data i et maskinlesbart format." },
                  { right: "Rett til å protestere (Art. 21)", desc: "Du kan protestere mot behandling basert på berettiget interesse." },
                  { right: "Rett til å trekke samtykke", desc: "Du kan trekke tilbake samtykke når som helst." },
                  { right: "Rett mot automatiserte avgjørelser (Art. 22)", desc: "Du har rett til å ikke bli underlagt helautomatiserte avgjørelser." },
                ].map((r) => (
                  <div key={r.right} className="rounded-lg bg-sage-light p-3">
                    <h3 className="font-semibold text-deep text-xs">{r.right}</h3>
                    <p className="text-xs mt-0.5">{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">Slik utøver du rettighetene</h2>
              <p>Send e-post til <a href="mailto:hei@sparlett.no" className="text-sage hover:text-sage-dark font-medium">hei@sparlett.no</a>. Vi svarer innen 30 dager.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">Rettslig grunnlag</h2>
              <p>Vi behandler personopplysninger basert på avtale, samtykke, berettiget interesse og lovkrav. Se vår <a href="/personvern" className="text-sage hover:text-sage-dark font-medium">personvernerklæring</a> for detaljer.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">Databehandlere</h2>
              <p>Vi bruker Google Firebase (autentisering og lagring) og Vercel (hosting). Alle er GDPR-kompatible med databehandleravtaler.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">Overføring utenfor EU/EØS</h2>
              <p>Vi bruker EU-baserte datasentre. Der overføring er nødvendig, sikres dette med Standard Contractual Clauses.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">Sikkerhetstiltak</h2>
              <p>Kryptering, tilgangskontroll og regelmessige sikkerhetsgjennomganger. Se vår <a href="/sikkerhet" className="text-sage hover:text-sage-dark font-medium">sikkerhetsside</a> for detaljer.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">Klagerett</h2>
              <p>Du kan klage til Datatilsynet: <a href="https://www.datatilsynet.no" className="text-sage hover:text-sage-dark font-medium" target="_blank" rel="noopener noreferrer">www.datatilsynet.no</a></p>
            </div>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
