import type { Metadata } from "next";
import Link from "next/link";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata: Metadata = {
  title: "Personvernerklæring — Sparlett.no",
  description:
    "Personvernerklæring for Sparlett.no. Les om hvordan vi samler inn, bruker og beskytter dine personopplysninger.",
};

export default function PrivacyPage() {
  return (
    <SubpageLayout>
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-2 text-4xl font-bold tracking-tight">
          Personvernerklæring
        </h1>
        <p className="mb-12 text-sm text-muted">
          Sist oppdatert: 18. februar 2026
        </p>

        <div className="space-y-10 text-[15px] leading-relaxed text-white/80">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              1. Behandlingsansvarlig
            </h2>
            <p>
              BLOM SOLUTIONS (org.nr. 834 411 342) er behandlingsansvarlig for
              personopplysninger som samles inn gjennom Sparlett.no og tilhørende
              tjenester.
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
              2. Hvilke personopplysninger vi samler inn
            </h2>
            <p>Vi samler inn følgende kategorier av personopplysninger:</p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                <strong className="text-white">Kontoinformasjon:</strong> Navn,
                e-postadresse og profilbilde fra din Google-konto ved
                registrering via Google-innlogging.
              </li>
              <li>
                <strong className="text-white">Økonomiske data:</strong> Inntekter,
                utgifter, transaksjoner, sparemål, budsjetter og andre
                økonomiske opplysninger du selv registrerer i Tjenesten.
              </li>
              <li>
                <strong className="text-white">Dokumenter:</strong> Filer og
                dokumenter du laster opp til dokumentarkivet.
              </li>
              <li>
                <strong className="text-white">Bruksdata:</strong> Informasjon om
                hvordan du bruker Tjenesten, inkludert hvilke funksjoner du
                benytter.
              </li>
              <li>
                <strong className="text-white">AI-interaksjoner:</strong> Samtaler
                og spørsmål du stiller til Lumi, vår AI-assistent.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              3. Formål med behandlingen
            </h2>
            <p>Vi behandler personopplysninger for følgende formål:</p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>Levere og drifte Tjenesten, inkludert kontohåndtering.</li>
              <li>Gi deg personlige økonomiske analyser og innsikt via Lumi.</li>
              <li>Forbedre og videreutvikle Tjenesten.</li>
              <li>Kommunisere med deg om Tjenesten, oppdateringer og endringer.</li>
              <li>Oppfylle rettslige forpliktelser.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              4. Rettslig grunnlag
            </h2>
            <p>
              Behandlingen av personopplysninger skjer med følgende rettslige
              grunnlag i henhold til GDPR:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                <strong className="text-white">Avtale (art. 6(1)(b)):</strong>{" "}
                Behandling som er nødvendig for å oppfylle avtalen med deg
                (levere Tjenesten).
              </li>
              <li>
                <strong className="text-white">Samtykke (art. 6(1)(a)):</strong>{" "}
                For behandling av data via AI-assistenten Lumi og for
                informasjonskapsler som ikke er strengt nødvendige.
              </li>
              <li>
                <strong className="text-white">Berettiget interesse (art. 6(1)(f)):</strong>{" "}
                For forbedring av Tjenesten og feilretting.
              </li>
              <li>
                <strong className="text-white">Rettslig forpliktelse (art. 6(1)(c)):</strong>{" "}
                For å oppfylle krav i lov eller forskrift.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              5. Deling med tredjeparter
            </h2>
            <p>
              Vi selger aldri dine personopplysninger. Vi deler data kun med
              følgende tredjeparter, og kun i den grad det er nødvendig for å
              levere Tjenesten:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                <strong className="text-white">Google Firebase:</strong>{" "}
                Autentisering (Firebase Auth), datalagring (Cloud Firestore) og
                fillagring (Cloud Storage). Data lagres i Googles
                datasentre i EU.
              </li>
              <li>
                <strong className="text-white">Google Gemini API:</strong>{" "}
                AI-behandling for Lumi. Data sendes til Googles API i sanntid
                for å generere svar. Data lagres ikke permanent hos Google utover
                det som er nødvendig for å levere svaret.
              </li>
              <li>
                <strong className="text-white">Vercel:</strong>{" "}
                Hosting av nettside og webapp.
              </li>
            </ul>
            <p className="mt-3">
              Alle tredjeparter er underlagt databehandleravtaler og behandler
              data i samsvar med GDPR.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              6. Overføring til tredjeland
            </h2>
            <p>
              Noen av våre tjenesteleverandører (Google, Vercel) kan behandle
              data i land utenfor EU/EØS. I slike tilfeller sikrer vi at
              overføringen skjer i samsvar med GDPR kapittel V, typisk gjennom
              EUs standardkontraktsklausuler (SCC) eller ved at mottakerlandet
              har en gyldig adequacy decision fra EU-kommisjonen.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              7. Lagring og sletting
            </h2>
            <p>
              Vi lagrer personopplysninger så lenge det er nødvendig for å
              oppfylle formålene beskrevet i denne erklæringen, eller så lenge du
              har en aktiv konto hos oss.
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>
                Ved sletting av konto slettes alle dine personopplysninger og
                brukerdata innen 30 dager.
              </li>
              <li>
                Data som er nødvendig for å oppfylle lovpålagte
                oppbevaringskrav kan lagres lenger i anonymisert form.
              </li>
              <li>
                Sikkerhetskopier som inneholder dine data slettes innen 90 dager
                etter kontosletting.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              8. Dine rettigheter
            </h2>
            <p>
              I henhold til GDPR har du følgende rettigheter knyttet til dine
              personopplysninger:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                <strong className="text-white">Innsyn (art. 15):</strong> Rett til
                å få vite hvilke personopplysninger vi har om deg.
              </li>
              <li>
                <strong className="text-white">Retting (art. 16):</strong> Rett til
                å få korrigert uriktige opplysninger.
              </li>
              <li>
                <strong className="text-white">Sletting (art. 17):</strong> Rett til
                å få slettet dine personopplysninger.
              </li>
              <li>
                <strong className="text-white">Begrensning (art. 18):</strong> Rett
                til å begrense behandlingen av dine opplysninger.
              </li>
              <li>
                <strong className="text-white">Dataportabilitet (art. 20):</strong>{" "}
                Rett til å motta dine data i et strukturert, maskinlesbart
                format.
              </li>
              <li>
                <strong className="text-white">Innsigelse (art. 21):</strong> Rett
                til å protestere mot behandling basert på berettiget interesse.
              </li>
              <li>
                <strong className="text-white">Tilbaketrekking av samtykke:</strong>{" "}
                Du kan når som helst trekke tilbake et samtykke du har gitt, uten
                at det påvirker lovligheten av behandling som allerede har funnet
                sted.
              </li>
            </ul>
            <p className="mt-3">
              For å utøve dine rettigheter, kontakt oss på kontakt@sparlett.no.
              Vi vil besvare henvendelsen din innen 30 dager.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              9. Sikkerhet
            </h2>
            <p>
              Vi tar sikkerheten til dine personopplysninger på alvor og har
              implementert følgende tiltak:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>Kryptering av data under overføring (TLS/SSL) og ved lagring.</li>
              <li>Tilgangsstyring basert på minste privilegiums prinsipp.</li>
              <li>Sikker autentisering via Google (OAuth 2.0).</li>
              <li>Regelmessig gjennomgang av sikkerhetsrutiner.</li>
              <li>Firebase Security Rules som begrenser datatilgang til kun autoriserte brukere.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              10. Informasjonskapsler (cookies)
            </h2>
            <p>
              For detaljert informasjon om vår bruk av informasjonskapsler, se
              vår{" "}
              <Link href="/cookies" className="text-accent hover:text-accent-hover">
                cookie-erklæring
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              11. Endringer i personvernerklæringen
            </h2>
            <p>
              Vi kan oppdatere denne personvernerklæringen fra tid til annen. Ved
              vesentlige endringer vil vi varsle deg via e-post eller gjennom
              Tjenesten. Den til enhver tid gjeldende versjonen er tilgjengelig
              på denne siden.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              12. Klagerett
            </h2>
            <p>
              Dersom du mener at vi behandler personopplysningene dine i strid
              med personvernregelverket, har du rett til å klage til
              Datatilsynet:
            </p>
            <div className="mt-4 rounded-xl border border-border bg-surface/50 p-4">
              <p className="font-semibold text-white">Datatilsynet</p>
              <p>Postboks 458 Sentrum, 0105 Oslo</p>
              <p>Telefon: 22 39 69 00</p>
              <p>Nettsted: datatilsynet.no</p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              13. Kontakt
            </h2>
            <p>
              For spørsmål om personvern eller for å utøve dine rettigheter,
              kontakt oss:
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
