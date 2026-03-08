import type { Metadata } from "next";
import SubpageLayout from "@/components/SubpageLayout";
import BetaForm from "./BetaForm";
import Ring3 from "@/components/Ring3";
import Curve from "@/components/Curve";

export const metadata: Metadata = {
  title: "Kom i gang",
  description: "Søk om beta-tilgang til Sparlett og test appen gratis. Begrenset antall plasser — beta-testere får 1 års gratis abonnement ved lansering.",
  alternates: { canonical: "https://sparlett.no/beta" },
  openGraph: {
    title: "Kom i gang — Sparlett",
    description: "Søk om beta-tilgang til Sparlett og test appen gratis. Begrenset antall plasser — beta-testere får 1 års gratis abonnement ved lansering.",
    url: "https://sparlett.no/beta",
  },
};

const betaJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hjem", item: "https://sparlett.no" },
    { "@type": "ListItem", position: 2, name: "Kom i gang", item: "https://sparlett.no/beta" },
  ],
};

export default function BetaPage() {
  return (
    <SubpageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(betaJsonLd) }}
      />
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <Ring3 size={48} strokeWidth={4} className="mx-auto mb-4" />
            <h1 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Kom i <span className="text-sage">gang</span><span className="text-sage">.</span>
            </h1>
            <Curve width={160} height={10} strokeWidth={1.5} className="mx-auto mb-4" />
            <p className="mx-auto max-w-lg text-lg text-muted">
              Søk om beta-tilgang og test Sparlett gratis. Beta-testere
              får 1 års gratis abonnement ved lansering<span className="text-sage">.</span>
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {/* Benefits */}
            <div className="space-y-5">
              <h2 className="text-xl font-semibold text-deep">
                Hva du får som beta-tester
              </h2>
              {[
                { title: "Full tilgang", desc: "Alle funksjoner, ingen begrensninger.", color: "sage" },
                { title: "Direkte linje til oss", desc: "Gi tilbakemelding direkte til utviklerteamet.", color: "sand" },
                { title: "1 år gratis", desc: "Gratis abonnement i ett helt år etter lansering.", color: "sage-dark" },
                { title: "Form produktet", desc: "Din tilbakemelding former hvordan Sparlett blir.", color: "sage" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-border bg-white p-4">
                  <div className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                    item.color === "sand" ? "bg-sand-bg" : item.color === "sage-dark" ? "bg-sage-dark-bg" : "bg-sage-light"
                  }`}>
                    <svg className={`h-3.5 w-3.5 ${
                      item.color === "sand" ? "text-sand" : item.color === "sage-dark" ? "text-sage-dark" : "text-sage"
                    }`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep">{item.title}</h3>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="rounded-2xl border border-border bg-white p-6 sm:p-8">
              <h3 className="mb-6 text-lg font-semibold text-deep">Søk beta-tilgang</h3>
              <BetaForm />
            </div>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
