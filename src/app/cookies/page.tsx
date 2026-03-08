import type { Metadata } from "next";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata: Metadata = {
  title: "Informasjonskapsler",
  description: "Les om hvordan Sparlett bruker informasjonskapsler (cookies), hvilke typer vi benytter, og hvordan du kan administrere dem.",
  alternates: { canonical: "https://sparlett.no/cookies" },
  openGraph: {
    title: "Informasjonskapsler — Sparlett",
    description: "Les om hvordan Sparlett bruker informasjonskapsler (cookies), hvilke typer vi benytter, og hvordan du kan administrere dem.",
    url: "https://sparlett.no/cookies",
  },
};

export default function CookiesPage() {
  return (
    <SubpageLayout>
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="mb-3 text-4xl font-bold tracking-tight">
            Informasjonskapsler<span className="text-sage">.</span>
          </h1>
          <p className="mb-2 text-sm text-muted">Sist oppdatert: Mars 2026</p>
          <p className="mb-12 max-w-lg text-muted">
            Denne policyen forklarer hvordan Sparlett bruker informasjonskapsler (cookies).
          </p>

          <div className="space-y-8 text-sm text-muted leading-relaxed">
            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">1. Hva er informasjonskapsler?</h2>
              <p>Informasjonskapsler er små tekstfiler som lagres på enheten din når du besøker en nettside. De brukes for å huske innstillinger, holde deg innlogget og forstå hvordan tjenesten brukes.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">2. Behandlingsansvarlig</h2>
              <p>BLOM SOLUTIONS (org.nr. 834 411 342) er ansvarlig for bruken av informasjonskapsler på sparlett.no.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">3. Rettslig grunnlag</h2>
              <p>Vi baserer bruken av informasjonskapsler på ekomloven § 2-7b og GDPR artikkel 6. Nødvendige kapsler krever ikke samtykke. Funksjonelle og analytiske kapsler krever samtykke.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">4. Kategorier</h2>
              <div className="space-y-4 mt-3">
                <div className="rounded-lg bg-sage-light p-4">
                  <h3 className="font-semibold text-deep mb-1">Nødvendige</h3>
                  <p>Kreves for at tjenesten skal fungere. Inkluderer Firebase Auth-sesjon. Kan ikke deaktiveres.</p>
                </div>
                <div className="rounded-lg bg-sand-bg p-4">
                  <h3 className="font-semibold text-deep mb-1">Funksjonelle</h3>
                  <p>Husker dine preferanser og innstillinger. Varighet: opptil 1 år.</p>
                </div>
                <div className="rounded-lg bg-canvas p-4 border border-border">
                  <h3 className="font-semibold text-deep mb-1">Analytiske</h3>
                  <p>Brukes ikke per i dag. Vi vil informere deg dersom dette endres.</p>
                </div>
                <div className="rounded-lg bg-canvas p-4 border border-border">
                  <h3 className="font-semibold text-deep mb-1">Markedsføring</h3>
                  <p>Brukes ikke. Vi har ingen markedsføringskapsler.</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">5. Tredjepartskapsler</h2>
              <p>Google Firebase (autentisering) og Vercel (hosting) kan sette egne kapsler. Disse er nødvendige for at tjenesten skal fungere.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">6. Administrere kapsler</h2>
              <p>Du kan administrere informasjonskapsler i nettleserens innstillinger. Merk at deaktivering av nødvendige kapsler kan påvirke funksjonaliteten.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">7. Kontakt</h2>
              <p>Spørsmål om informasjonskapsler? Kontakt oss på <a href="mailto:hei@sparlett.no" className="text-sage hover:text-sage-dark font-medium">hei@sparlett.no</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
