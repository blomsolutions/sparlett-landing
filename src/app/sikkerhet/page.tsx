import type { Metadata } from "next";
import Link from "next/link";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata: Metadata = {
  title: "Sikkerhet — Sparlett.no",
  description:
    "Les om hvordan Sparlett.no beskytter dine data og ivaretar din sikkerhet.",
};

export default function SikkerhetPage() {
  return (
    <SubpageLayout>
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Sikkerhet</h1>
        <p className="mb-12 text-lg text-muted">
          Din sikkerhet og personvern er vår høyeste prioritet.
        </p>

        <div className="space-y-10 text-[15px] leading-relaxed text-white/80">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Datakryptering
            </h2>
            <p>
              All kommunikasjon mellom din nettleser og våre servere er kryptert med
              TLS/SSL (HTTPS). Dataene dine lagres kryptert i Google Firebase, en av
              verdens mest pålitelige skyplattformer med strenge sikkerhetsstandarder.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Autentisering
            </h2>
            <p>
              Vi bruker Firebase Authentication for sikker innlogging. Du kan logge inn
              med Google-konto, e-post/passord, eller telefonnummer med SMS-verifisering.
              Vi lagrer aldri passordene dine — dette håndteres av Firebase sine
              industriledende sikkerhetssystemer.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Datalagring
            </h2>
            <p>
              Alle data lagres i Google Cloud Firestore med datasentre i Europa (EU).
              Firebase har ISO 27001-, SOC 1/2/3- og HIPAA-sertifiseringer, og følger
              strenge standarder for datasikkerhet og tilgjengelighet.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Tilgangskontroll
            </h2>
            <p>
              Dine økonomiske data er kun tilgjengelig for deg. Vi bruker Firestore
              Security Rules som sikrer at hver bruker kun har tilgang til sine egne
              data. Ingen andre brukere, og heller ikke vi som utviklere, kan se dine
              personlige økonomiske data i produksjonsmiljøet.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              AI og personvern
            </h2>
            <p>
              Vår AI-assistent Lumi bruker Google Gemini API for å gi deg personlige
              innsikter. Dataene som sendes til AI-modellen brukes kun for å generere
              svar til deg, og lagres ikke av Google for trening av modeller. Vi sender
              kun den minimale informasjonen som trengs for å gi deg relevante råd.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              GDPR-samsvar
            </h2>
            <p>
              Sparlett.no er fullt ut i samsvar med EUs personvernforordning (GDPR) og
              norsk personopplysningslov. Du har full kontroll over dine data, inkludert
              retten til innsyn, retting, sletting og dataportabilitet. Les mer i vår{" "}
              <Link href="/personvern" className="text-accent transition-colors hover:text-accent-hover">
                personvernerklæring
              </Link>{" "}
              og{" "}
              <Link href="/gdpr" className="text-accent transition-colors hover:text-accent-hover">
                GDPR-side
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Sikkerhetsrutiner
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Regelmessige oppdateringer",
                  desc: "Vi holder alle avhengigheter og systemer oppdatert for å beskytte mot kjente sårbarheter.",
                },
                {
                  title: "Ingen salg av data",
                  desc: "Vi selger eller deler aldri dine personlige data med tredjeparter for markedsføringsformål.",
                },
                {
                  title: "Sikker sletting",
                  desc: "Når du sletter kontoen din, fjernes alle dine data permanent fra våre systemer.",
                },
                {
                  title: "Åpenhet",
                  desc: "Vi er transparente om hvordan vi behandler data og varsler deg om eventuelle endringer.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-surface/50 p-5"
                >
                  <h3 className="mb-2 font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Rapporter en sårbarhet
            </h2>
            <p>
              Oppdager du en sikkerhetssårbarhet? Vi setter pris på ansvarlig rapportering.
              Ta kontakt med oss på{" "}
              <a href="mailto:kontakt@sparlett.no" className="text-accent transition-colors hover:text-accent-hover">
                kontakt@sparlett.no
              </a>{" "}
              så behandler vi saken så raskt som mulig.
            </p>
          </section>
        </div>
      </main>
    </SubpageLayout>
  );
}
