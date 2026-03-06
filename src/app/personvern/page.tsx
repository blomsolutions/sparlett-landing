import type { Metadata } from "next";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata: Metadata = {
  title: "Personvernerklæring",
  description: "Sparlett sin personvernerklæring. Slik behandler vi dataene dine.",
};

export default function PersonvernPage() {
  return (
    <SubpageLayout>
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="mb-3 text-4xl font-bold tracking-tight">
            Personvern<span className="text-sage">.</span>
          </h1>
          <p className="mb-2 text-sm text-muted">Sist oppdatert: Mars 2026</p>
          <p className="mb-12 max-w-lg text-muted">
            Denne personvernerklæringen forklarer hvordan Sparlett (drevet av BLOM SOLUTIONS) samler inn, bruker og beskytter personopplysningene dine.
          </p>

          <div className="space-y-8 text-sm text-muted leading-relaxed">
            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">1. Behandlingsansvarlig</h2>
              <p>BLOM SOLUTIONS er behandlingsansvarlig for personopplysninger som samles inn gjennom Sparlett.</p>
              <p className="mt-2">Organisasjonsnummer: 834 411 342</p>
              <p>E-post: hei@sparlett.no</p>
              <p>Telefon: +47 907 90 093</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">2. Opplysninger vi samler inn</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong className="text-deep">Kontaktinformasjon:</strong> Navn, e-postadresse</li>
                <li><strong className="text-deep">Finansiell data:</strong> Budsjetter, sparemål, transaksjoner du registrerer</li>
                <li><strong className="text-deep">Dokumenter:</strong> Filer du laster opp (kvitteringer, dokumenter)</li>
                <li><strong className="text-deep">Bruksdata:</strong> Innloggingshistorikk, enhets- og nettleserinfo</li>
                <li><strong className="text-deep">Analyse-interaksjoner:</strong> Spørringer og svar fra analyseverktøyet</li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">3. Formål med behandlingen</h2>
              <p>Vi behandler personopplysninger for å levere og forbedre tjenesten, gi deg tilpasset innsikt, administrere kontoen din, kommunisere med deg om tjenesten og overholde lovkrav.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">4. Rettslig grunnlag</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong className="text-deep">Avtale:</strong> For å levere tjenesten du har registrert deg for</li>
                <li><strong className="text-deep">Samtykke:</strong> For analyse av data og kommunikasjon</li>
                <li><strong className="text-deep">Berettiget interesse:</strong> For å forbedre tjenesten og sikkerhet</li>
                <li><strong className="text-deep">Lovkrav:</strong> For å oppfylle juridiske forpliktelser</li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">5. Deling med tredjeparter</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong className="text-deep">Google Firebase:</strong> Autentisering og datalagring (EU-datasentre)</li>
                <li><strong className="text-deep">Vercel:</strong> Hosting av nettside (GDPR-kompatibel)</li>
              </ul>
              <p className="mt-2">Vi selger aldri personopplysningene dine. Alle tredjeparter er valgt for GDPR-samsvar.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">6. Overføring utenfor EU/EØS</h2>
              <p>Vi tilstreber å lagre alle data innenfor EU/EØS. Der tredjepartstjenester innebærer overføring utenfor EU/EØS, sikrer vi at det foreligger godkjente overføringsmekanismer (Standard Contractual Clauses eller adequacy decisions).</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">7. Lagring og sletting</h2>
              <p>Ved sletting av konto fjernes alle persondata innen 30 dager. Sikkerhetskopier slettes innen 90 dager. Du kan når som helst be om sletting via hei@sparlett.no.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">8. Dine rettigheter</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Rett til innsyn i egne data</li>
                <li>Rett til retting av uriktige opplysninger</li>
                <li>Rett til sletting</li>
                <li>Rett til begrensning av behandling</li>
                <li>Rett til dataportabilitet</li>
                <li>Rett til å protestere mot behandling</li>
                <li>Rett til å trekke tilbake samtykke</li>
              </ul>
              <p className="mt-2">Kontakt oss på hei@sparlett.no for å utøve rettighetene dine.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">9. Sikkerhet</h2>
              <p>Vi bruker bransjestandarder for sikkerhet, inkludert kryptering, tilgangskontroll og regelmessige sikkerhetsgjennomganger. Se vår <a href="/sikkerhet" className="text-sage hover:text-sage-dark font-medium">sikkerhetsside</a> for detaljer.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">10. Informasjonskapsler</h2>
              <p>Se vår <a href="/cookies" className="text-sage hover:text-sage-dark font-medium">cookie-policy</a> for informasjon om bruk av informasjonskapsler.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">11. Endringer</h2>
              <p>Vi kan oppdatere denne erklæringen. Vesentlige endringer varsles via e-post eller i tjenesten.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">12. Klagerett</h2>
              <p>Du har rett til å klage til Datatilsynet dersom du mener vi behandler personopplysningene dine i strid med personvernregelverket.</p>
              <p className="mt-2">Datatilsynet: <a href="https://www.datatilsynet.no" className="text-sage hover:text-sage-dark font-medium" target="_blank" rel="noopener noreferrer">www.datatilsynet.no</a></p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">13. Kontakt</h2>
              <p>For spørsmål om personvern, kontakt oss:</p>
              <p className="mt-2">E-post: <a href="mailto:hei@sparlett.no" className="text-sage hover:text-sage-dark font-medium">hei@sparlett.no</a></p>
              <p>Telefon: +47 907 90 093</p>
            </div>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
