import type { Metadata } from "next";
import SubpageLayout from "@/components/SubpageLayout";
import BetaForm from "./BetaForm";

export const metadata: Metadata = {
  title: "Test beta",
  description:
    "Bli en av de første til å teste Sparlett.no. Søk om beta-tilgang og få 1 års gratis abonnement ved lansering.",
};

export default function BetaPage() {
  return (
    <SubpageLayout>
      <main className="mx-auto max-w-3xl px-6 py-16">
        {/* Badge */}
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Beta-program — begrenset antall plasser
          </div>
        </div>

        {/* Hero */}
        <h1 className="mb-4 text-center text-4xl font-bold tracking-tight md:text-5xl">
          Bli en av de første til å teste{" "}
          <span className="gradient-text">Sparlett.no</span>
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-muted">
          Vi leter etter engasjerte brukere som vil forme fremtidens
          økonomiverktøy. Test appen, gi tilbakemeldinger — og bli belønnet for
          det.
        </p>

        {/* Value proposition */}
        <div className="mb-12 rounded-2xl border border-accent/30 bg-surface p-8">
          <h2 className="mb-6 text-xl font-bold text-white">
            Hva får du som beta-tester?
          </h2>
          <ul className="space-y-4">
            {[
              "Full tilgang til alle funksjoner i appen",
              "Direkte linje til utviklerteamet",
              "1 års gratis abonnement ved lansering",
              "Påvirk produktet med dine tilbakemeldinger",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <span className="text-white/80">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-xl border border-accent/20 bg-accent/5 p-4 text-center">
            <p className="text-sm font-medium text-accent">
              Verdi: 1 års abonnement helt gratis — kun for beta-testere
            </p>
          </div>
        </div>

        {/* Form */}
        <BetaForm />
      </main>
    </SubpageLayout>
  );
}
