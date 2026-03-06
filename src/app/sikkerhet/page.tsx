import type { Metadata } from "next";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata: Metadata = {
  title: "Sikkerhet",
  description: "Slik beskytter Sparlett dataene dine. Kryptering, autentisering og GDPR-samsvar.",
};

const sections = [
  {
    title: "Datakryptering",
    content: "All kommunikasjon mellom deg og Sparlett er kryptert med TLS/SSL. Dataene dine lagres kryptert i Google Cloud Firestore med innebygd kryptering av data i ro (encryption at rest) og under overføring (encryption in transit).",
  },
  {
    title: "Autentisering",
    content: "Vi bruker Firebase Authentication som gir sikker innlogging med flere metoder, inkludert Google OAuth 2.0. Alle autentiseringsøkter håndteres med industristandarder for token-basert sikkerhet.",
  },
  {
    title: "Datalagring",
    content: "Dataene dine lagres i Google Cloud Firestore med datasentre i EU. Google Cloud er sertifisert under ISO 27001, ISO 27017, ISO 27018 og SOC 1/2/3. Vi velger alltid EU-baserte regioner for datalagring.",
  },
  {
    title: "Tilgangskontroll",
    content: "Vi bruker Firestore Security Rules for å sikre at kun autoriserte brukere kan lese og skrive sine egne data. Ingen bruker kan se andres informasjon. Administratortilgang er strengt begrenset.",
  },
  {
    title: "Analyse og personvern",
    content: "Sparlett analyserer dataene dine for å gi deg innsikt. Ingen data brukes til å trene modeller. Vi deler aldri personlige data med tredjeparter for markedsføring.",
  },
  {
    title: "GDPR-samsvar",
    content: "Sparlett er designet med personvern som grunnprinsipp (Privacy by Design). Vi følger GDPR fullt ut, inkludert retten til innsyn, retting, sletting og dataportabilitet. Du kan når som helst be om eksport eller sletting av alle dine data.",
  },
];

export default function SikkerhetPage() {
  return (
    <SubpageLayout>
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="mb-3 text-4xl font-bold tracking-tight">
            <span className="text-sage">Sikkerhet</span><span className="text-sage">.</span>
          </h1>
          <p className="mb-12 max-w-lg text-lg text-muted">
            Dataene dine er privat. Slik beskytter vi dem<span className="text-sage">.</span>
          </p>

          <div className="space-y-6">
            {sections.map((s) => (
              <div key={s.title} className="rounded-xl border border-border bg-white p-6">
                <h2 className="mb-3 text-lg font-semibold text-deep">{s.title}</h2>
                <p className="text-sm text-muted leading-relaxed">{s.content}</p>
              </div>
            ))}

            {/* Security practices */}
            <div>
              <h2 className="mb-4 text-lg font-semibold text-deep">Sikkerhetspraksis</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Regelmessige oppdateringer", desc: "Vi holder alle avhengigheter og systemer oppdatert." },
                  { title: "Ingen datasalg", desc: "Vi selger aldri dataene dine til tredjeparter." },
                  { title: "Sikker sletting", desc: "Når du sletter kontoen din, fjernes alle data permanent." },
                  { title: "Åpenhet", desc: "Vi er åpne om hvordan vi behandler dataene dine." },
                ].map((p) => (
                  <div key={p.title} className="rounded-xl bg-sage-light p-4">
                    <h3 className="mb-1 text-sm font-semibold text-deep">{p.title}</h3>
                    <p className="text-xs text-muted">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">Rapporter en sårbarhet</h2>
              <p className="text-sm text-muted leading-relaxed">
                Har du funnet en sikkerhetssvakhet? Ta kontakt med oss på{" "}
                <a href="mailto:hei@sparlett.no" className="text-sage hover:text-sage-dark font-medium">
                  hei@sparlett.no
                </a>.
                Vi tar alle henvendelser på alvor og svarer innen 48 timer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
