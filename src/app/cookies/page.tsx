import type { Metadata } from "next";
import Link from "next/link";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata: Metadata = {
  title: "Cookie-erklæring — Sparlett.no",
  description:
    "Cookie-erklæring for Sparlett.no. Les om hvordan vi bruker informasjonskapsler og lignende teknologier.",
};

export default function CookiesPage() {
  return (
    <SubpageLayout>
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-2 text-4xl font-bold tracking-tight">
          Cookie-erklæring
        </h1>
        <p className="mb-12 text-sm text-muted">
          Sist oppdatert: 18. februar 2026
        </p>

        <div className="space-y-10 text-[15px] leading-relaxed text-white/80">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              1. Hva er informasjonskapsler (cookies)?
            </h2>
            <p>
              Informasjonskapsler (cookies) er små tekstfiler som lagres på din
              enhet (datamaskin, mobiltelefon eller nettbrett) når du besøker et
              nettsted. De brukes for å huske dine innstillinger, forbedre
              brukeropplevelsen og samle statistikk om bruk av nettstedet.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              2. Behandlingsansvarlig
            </h2>
            <p>
              BLOM SOLUTIONS (org.nr. 834 411 342) er behandlingsansvarlig for
              informasjonskapsler som brukes på Sparlett.no.
            </p>
            <div className="mt-4 rounded-xl border border-border bg-surface/50 p-4">
              <p className="font-semibold text-white">BLOM SOLUTIONS</p>
              <p>Organisasjonsnummer: 834 411 342</p>
              <p>E-post: kontakt@sparlett.no</p>
              <p>Telefon: +47 907 90 093</p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              3. Rettslig grunnlag
            </h2>
            <p>
              Bruk av informasjonskapsler reguleres av ekomloven § 2-7b og GDPR.
              Strengt nødvendige informasjonskapsler krever ikke samtykke, mens
              alle andre typer krever ditt forhåndssamtykke.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              4. Hvilke informasjonskapsler bruker vi?
            </h2>
            <p>Vi bruker følgende kategorier av informasjonskapsler:</p>

            <div className="mt-6 space-y-6">
              <div className="rounded-xl border border-border bg-surface/50 p-5">
                <h3 className="mb-2 font-semibold text-white">
                  4.1 Strengt nødvendige informasjonskapsler
                </h3>
                <p className="mb-3 text-sm">
                  Disse er nødvendige for at nettstedet og tjenesten skal fungere
                  korrekt. De kan ikke deaktiveres.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border text-left text-muted">
                        <th className="pb-2 pr-4 font-medium">Navn</th>
                        <th className="pb-2 pr-4 font-medium">Leverandør</th>
                        <th className="pb-2 pr-4 font-medium">Formål</th>
                        <th className="pb-2 font-medium">Varighet</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/70">
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4">Firebase Auth</td>
                        <td className="py-2 pr-4">Google</td>
                        <td className="py-2 pr-4">Autentisering og sesjonsadministrasjon</td>
                        <td className="py-2">Sesjon</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4">__session</td>
                        <td className="py-2 pr-4">Vercel</td>
                        <td className="py-2 pr-4">Sesjonshåndtering for hosting</td>
                        <td className="py-2">Sesjon</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-5">
                <h3 className="mb-2 font-semibold text-white">
                  4.2 Funksjonelle informasjonskapsler
                </h3>
                <p className="mb-3 text-sm">
                  Disse gjør det mulig å huske dine valg og preferanser for å gi
                  en bedre brukeropplevelse.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border text-left text-muted">
                        <th className="pb-2 pr-4 font-medium">Navn</th>
                        <th className="pb-2 pr-4 font-medium">Leverandør</th>
                        <th className="pb-2 pr-4 font-medium">Formål</th>
                        <th className="pb-2 font-medium">Varighet</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/70">
                      <tr>
                        <td className="py-2 pr-4">Brukerpreferanser</td>
                        <td className="py-2 pr-4">Sparlett.no</td>
                        <td className="py-2 pr-4">Lagre brukerinnstillinger og preferanser</td>
                        <td className="py-2">1 år</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-5">
                <h3 className="mb-2 font-semibold text-white">
                  4.3 Analytiske informasjonskapsler
                </h3>
                <p className="mb-3 text-sm">
                  Disse hjelper oss å forstå hvordan besøkende bruker nettstedet,
                  slik at vi kan forbedre det. Data samles inn anonymisert.
                </p>
                <p className="text-sm text-muted">
                  Vi bruker for øyeblikket ingen analytiske informasjonskapsler.
                  Denne seksjonen vil oppdateres dersom vi innfører
                  analyseverktøy i fremtiden.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-5">
                <h3 className="mb-2 font-semibold text-white">
                  4.4 Markedsføringsinformasjonskapsler
                </h3>
                <p className="text-sm text-muted">
                  Vi bruker ikke markedsføringsinformasjonskapsler og sporer ikke
                  brukere for reklameformål.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              5. Tredjepartsinformasjonskapsler
            </h2>
            <p>
              Noen av informasjonskapslene som brukes på Sparlett.no er satt av
              tredjeparter. Disse inkluderer:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                <strong className="text-white">Google Firebase:</strong>{" "}
                Informasjonskapsler knyttet til autentisering (innlogging) via
                Firebase Auth.
              </li>
              <li>
                <strong className="text-white">Vercel:</strong>{" "}
                Informasjonskapsler for hosting og ytelsesoptimalisering.
              </li>
            </ul>
            <p className="mt-3">
              For mer informasjon om hvordan tredjeparter håndterer
              informasjonskapsler, se deres respektive personvernerklæringer.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              6. Hvordan administrere informasjonskapsler
            </h2>
            <p>
              Du kan selv administrere og slette informasjonskapsler gjennom
              innstillingene i nettleseren din. Merk at deaktivering av strengt
              nødvendige informasjonskapsler kan påvirke funksjonaliteten til
              Tjenesten.
            </p>
            <p className="mt-3">
              Slik administrerer du informasjonskapsler i de vanligste
              nettleserne:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>
                <strong className="text-white">Chrome:</strong> Innstillinger →
                Personvern og sikkerhet → Informasjonskapsler
              </li>
              <li>
                <strong className="text-white">Firefox:</strong> Innstillinger →
                Personvern og sikkerhet → Informasjonskapsler og nettstedsdata
              </li>
              <li>
                <strong className="text-white">Safari:</strong> Innstillinger →
                Personvern → Administrer nettstedsdata
              </li>
              <li>
                <strong className="text-white">Edge:</strong> Innstillinger →
                Informasjonskapsler og nettstedstillatelser
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              7. Samtykke
            </h2>
            <p>
              Når du besøker Sparlett.no for første gang, blir du bedt om å gi
              samtykke til bruk av informasjonskapsler som ikke er strengt
              nødvendige. Du kan når som helst trekke tilbake eller endre ditt
              samtykke.
            </p>
            <p className="mt-3">
              Strengt nødvendige informasjonskapsler settes uavhengig av
              samtykke, da disse er nødvendige for at Tjenesten skal fungere.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              8. Endringer i cookie-erklæringen
            </h2>
            <p>
              Vi kan oppdatere denne cookie-erklæringen fra tid til annen. Ved
              vesentlige endringer vil vi informere deg gjennom Tjenesten. Den
              til enhver tid gjeldende versjonen er tilgjengelig på denne siden.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              9. Dine rettigheter
            </h2>
            <p>
              Du har rett til informasjon om hvilke informasjonskapsler vi
              bruker, og du kan velge å akseptere eller avslå ikke-nødvendige
              informasjonskapsler. For mer informasjon om dine rettigheter
              knyttet til personopplysninger, se vår{" "}
              <Link href="/personvern" className="text-accent hover:text-accent-hover">
                personvernerklæring
              </Link>{" "}
              og{" "}
              <Link href="/gdpr" className="text-accent hover:text-accent-hover">
                GDPR-side
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              10. Kontakt
            </h2>
            <p>
              For spørsmål om vår bruk av informasjonskapsler, kontakt oss:
            </p>
            <div className="mt-4 rounded-xl border border-border bg-surface/50 p-4">
              <p className="font-semibold text-white">BLOM SOLUTIONS</p>
              <p>Organisasjonsnummer: 834 411 342</p>
              <p>E-post: kontakt@sparlett.no</p>
              <p>Telefon: +47 907 90 093</p>
            </div>
          </section>
        </div>

      </main>
    </SubpageLayout>
  );
}
