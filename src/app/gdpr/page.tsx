import type { Metadata } from "next";
import Link from "next/link";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata: Metadata = {
  title: "GDPR — Dine rettigheter",
  description:
    "Informasjon om dine rettigheter under GDPR (EUs personvernforordning) når du bruker Sparlett.no.",
};

export default function GDPRPage() {
  return (
    <SubpageLayout>
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-2 text-4xl font-bold tracking-tight">
          GDPR — Dine rettigheter
        </h1>
        <p className="mb-12 text-sm text-muted">
          Sist oppdatert: 18. februar 2026
        </p>

        <div className="space-y-10 text-[15px] leading-relaxed text-white/80">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              1. Om GDPR
            </h2>
            <p>
              EUs personvernforordning (GDPR — General Data Protection
              Regulation) er en forordning som gir deg som bruker sterke
              rettigheter knyttet til dine personopplysninger. GDPR gjelder i
              hele EU/EØS, inkludert Norge, gjennom personopplysningsloven.
            </p>
            <p className="mt-3">
              Sparlett.no er forpliktet til å overholde GDPR i all behandling
              av personopplysninger. Denne siden gir deg en oversikt over dine
              rettigheter og hvordan du kan utøve dem.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              2. Behandlingsansvarlig
            </h2>
            <p>
              BLOM SOLUTIONS er behandlingsansvarlig for personopplysninger som
              behandles gjennom Sparlett.no.
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
              3. Dine rettigheter under GDPR
            </h2>
            <p>
              GDPR gir deg følgende rettigheter knyttet til dine
              personopplysninger:
            </p>

            <div className="mt-6 space-y-5">
              <div className="rounded-xl border border-border bg-surface/50 p-5">
                <h3 className="mb-2 font-semibold text-white">
                  Rett til innsyn (artikkel 15)
                </h3>
                <p>
                  Du har rett til å få bekreftet om vi behandler
                  personopplysninger om deg, og i så fall få tilgang til disse
                  opplysningene. Du kan be om en kopi av alle personopplysninger
                  vi har lagret om deg.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-5">
                <h3 className="mb-2 font-semibold text-white">
                  Rett til retting (artikkel 16)
                </h3>
                <p>
                  Du har rett til å få uriktige personopplysninger om deg
                  rettet uten ugrunnet opphold. Du har også rett til å få
                  ufullstendige opplysninger komplettert.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-5">
                <h3 className="mb-2 font-semibold text-white">
                  Rett til sletting (artikkel 17)
                </h3>
                <p>
                  Du har rett til å få dine personopplysninger slettet
                  (&quot;retten til å bli glemt&quot;) dersom:
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1">
                  <li>Opplysningene ikke lenger er nødvendige for formålet de ble samlet inn for.</li>
                  <li>Du trekker tilbake samtykket og det ikke finnes annet rettslig grunnlag.</li>
                  <li>Du protesterer mot behandlingen og det ikke finnes tvingende berettigede grunner.</li>
                  <li>Opplysningene har blitt behandlet ulovlig.</li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-5">
                <h3 className="mb-2 font-semibold text-white">
                  Rett til begrensning av behandling (artikkel 18)
                </h3>
                <p>
                  Du har rett til å kreve at behandlingen av dine
                  personopplysninger begrenses i visse situasjoner, for
                  eksempel mens en klage er under behandling eller mens
                  nøyaktigheten av opplysningene verifiseres.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-5">
                <h3 className="mb-2 font-semibold text-white">
                  Rett til dataportabilitet (artikkel 20)
                </h3>
                <p>
                  Du har rett til å motta dine personopplysninger i et
                  strukturert, alminnelig anvendt og maskinlesbart format. Du
                  har også rett til å overføre disse opplysningene til en annen
                  behandlingsansvarlig uten hindring fra oss.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-5">
                <h3 className="mb-2 font-semibold text-white">
                  Rett til å protestere (artikkel 21)
                </h3>
                <p>
                  Du har rett til å protestere mot behandling av dine
                  personopplysninger som er basert på berettiget interesse
                  (artikkel 6(1)(f)). Vi vil da vurdere om våre berettigede
                  interesser veier tyngre enn dine interesser, rettigheter og
                  friheter.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-5">
                <h3 className="mb-2 font-semibold text-white">
                  Rett til å trekke tilbake samtykke
                </h3>
                <p>
                  Dersom behandlingen er basert på ditt samtykke, kan du når
                  som helst trekke dette tilbake. Tilbaketrekking påvirker ikke
                  lovligheten av behandling som har skjedd før tilbaketrekkingen.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-5">
                <h3 className="mb-2 font-semibold text-white">
                  Rett til ikke å bli utsatt for automatiserte avgjørelser
                  (artikkel 22)
                </h3>
                <p>
                  Du har rett til ikke å bli utsatt for en beslutning som
                  utelukkende er basert på automatisert behandling, inkludert
                  profilering, som har rettsvirkning for deg eller på
                  tilsvarende måte påvirker deg i vesentlig grad.
                </p>
                <p className="mt-2">
                  Lumi, vår AI-assistent, gir forslag og innsikt basert på dine
                  data, men tar ingen automatiserte beslutninger som har
                  rettsvirkning for deg.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              4. Hvordan utøve dine rettigheter
            </h2>
            <p>
              For å utøve noen av rettighetene beskrevet ovenfor, kontakt oss
              på:
            </p>
            <div className="mt-4 rounded-xl border border-border bg-surface/50 p-4">
              <p className="font-semibold text-white">E-post: kontakt@sparlett.no</p>
              <p className="mt-1">Telefon: +47 907 90 093</p>
            </div>
            <p className="mt-4">
              Vi vil besvare din henvendelse innen 30 dager. Dersom det er
              nødvendig å forlenge denne fristen, vil vi informere deg om
              årsaken og den nye fristen innen den opprinnelige
              30-dagersperioden.
            </p>
            <p className="mt-3">
              For å verifisere din identitet kan vi be deg om å oppgi
              informasjon knyttet til din konto. Vi vil aldri be om sensitiv
              informasjon som passord.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              5. Rettslig grunnlag for behandling
            </h2>
            <p>
              All behandling av personopplysninger hos Sparlett.no har et
              rettslig grunnlag i henhold til GDPR artikkel 6:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                <strong className="text-white">Avtale (art. 6(1)(b)):</strong>{" "}
                Nødvendig for å levere Tjenesten til deg (konto, datalagring,
                økonomiverktøy).
              </li>
              <li>
                <strong className="text-white">Samtykke (art. 6(1)(a)):</strong>{" "}
                For AI-behandling via Lumi og for ikke-nødvendige
                informasjonskapsler.
              </li>
              <li>
                <strong className="text-white">Berettiget interesse (art. 6(1)(f)):</strong>{" "}
                For feilretting, forbedring av Tjenesten og sikkerhet.
              </li>
              <li>
                <strong className="text-white">Rettslig forpliktelse (art. 6(1)(c)):</strong>{" "}
                For å oppfylle krav i norsk lov.
              </li>
            </ul>
            <p className="mt-3">
              For mer detaljer om behandlingsgrunnlaget, se vår{" "}
              <Link href="/personvern" className="text-accent hover:text-accent-hover">
                personvernerklæring
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              6. Databehandlere og tredjeparter
            </h2>
            <p>
              Vi bruker følgende tredjeparter som databehandlere:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                <strong className="text-white">Google Firebase</strong> —
                Autentisering, datalagring og fillagring. Data lagres i Googles
                datasentre i EU.
              </li>
              <li>
                <strong className="text-white">Google Gemini API</strong> —
                AI-behandling for Lumi. Data behandles i sanntid og lagres ikke
                permanent.
              </li>
              <li>
                <strong className="text-white">Vercel</strong> — Hosting av
                nettside og webapp.
              </li>
            </ul>
            <p className="mt-3">
              Alle databehandlere er bundet av databehandleravtaler (DPA) som
              sikrer at behandlingen skjer i samsvar med GDPR.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              7. Overføring til land utenfor EU/EØS
            </h2>
            <p>
              Dersom personopplysninger overføres til land utenfor EU/EØS,
              sikrer vi at overføringen har et gyldig overføringsgrunnlag i
              henhold til GDPR kapittel V. Dette kan inkludere:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>EUs standardkontraktsklausuler (SCC)</li>
              <li>Adequacy decision fra EU-kommisjonen</li>
              <li>Binding Corporate Rules (BCR)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              8. Sikkerhetstiltak
            </h2>
            <p>
              Vi har implementert tekniske og organisatoriske tiltak for å
              beskytte dine personopplysninger, i henhold til GDPR artikkel 32:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>Kryptering av data under overføring (TLS/SSL) og ved lagring.</li>
              <li>Tilgangsstyring basert på minste privilegiums prinsipp.</li>
              <li>Sikker autentisering via Google OAuth 2.0.</li>
              <li>Firebase Security Rules for å begrense datatilgang.</li>
              <li>Regelmessig vurdering av sikkerhetsrisiko.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              9. Brudd på personopplysningssikkerheten
            </h2>
            <p>
              Dersom det oppstår et sikkerhetsbrudd som medfører risiko for
              dine rettigheter og friheter, vil vi:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>Varsle Datatilsynet innen 72 timer (GDPR artikkel 33).</li>
              <li>
                Varsle deg direkte dersom bruddet medfører høy risiko for dine
                rettigheter (GDPR artikkel 34).
              </li>
              <li>
                Iverksette tiltak for å begrense konsekvensene av bruddet.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              10. Klagerett
            </h2>
            <p>
              Dersom du mener at vi behandler personopplysningene dine i strid
              med GDPR, har du rett til å klage til tilsynsmyndigheten:
            </p>
            <div className="mt-4 rounded-xl border border-border bg-surface/50 p-4">
              <p className="font-semibold text-white">Datatilsynet</p>
              <p>Postboks 458 Sentrum, 0105 Oslo</p>
              <p>Telefon: 22 39 69 00</p>
              <p>Nettsted: datatilsynet.no</p>
            </div>
            <p className="mt-4">
              Vi oppfordrer deg til å kontakte oss først slik at vi kan forsøke
              å løse eventuelle problemer direkte.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              11. Mer informasjon
            </h2>
            <p>
              For mer detaljert informasjon om hvordan vi behandler dine
              personopplysninger, se:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                <Link href="/personvern" className="text-accent hover:text-accent-hover">
                  Personvernerklæring
                </Link>{" "}
                — Fullstendig informasjon om vår behandling av personopplysninger.
              </li>
              <li>
                <Link href="/cookies" className="text-accent hover:text-accent-hover">
                  Cookie-erklæring
                </Link>{" "}
                — Informasjon om vår bruk av informasjonskapsler.
              </li>
              <li>
                <Link href="/terms" className="text-accent hover:text-accent-hover">
                  Vilkår for bruk
                </Link>{" "}
                — Vilkår og betingelser for bruk av Tjenesten.
              </li>
            </ul>
          </section>
        </div>

      </main>
    </SubpageLayout>
  );
}
