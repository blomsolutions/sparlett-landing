import type { Metadata } from "next";
import SubpageLayout from "@/components/SubpageLayout";
import Ring3 from "@/components/Ring3";
import Curve from "@/components/Curve";
import InteresseForm from "./InteresseForm";

export const metadata: Metadata = {
  title: "Meld interesse",
  description: "Meld interesse for Sparlett og bli blant de første som får tilgang. Hold deg oppdatert om lansering, nye funksjoner og tilbud.",
  alternates: { canonical: "https://sparlett.no/interesse" },
  openGraph: {
    title: "Meld interesse — Sparlett",
    description: "Meld interesse for Sparlett og bli blant de første som får tilgang. Hold deg oppdatert om lansering, nye funksjoner og tilbud.",
    url: "https://sparlett.no/interesse",
  },
};

export default function InteressePage() {
  return (
    <SubpageLayout>
      <section className="py-20">
        <div className="mx-auto max-w-xl px-6">
          <div className="text-center">
            <Ring3 size={40} strokeWidth={3.5} className="mx-auto mb-4" />
            <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Hold deg <span className="text-sage">oppdatert</span>
              <span className="text-sage">.</span>
            </h1>
            <Curve
              width={160}
              height={10}
              strokeWidth={1.5}
              className="mx-auto mb-4"
            />
            <p className="mb-2 text-muted leading-relaxed">
              Legg igjen navn og e-post, så gir vi deg beskjed når Sparlett er
              klar<span className="text-sage">.</span>
            </p>
            <p className="mb-10 text-sm text-muted/70">
              Ingen spam. Ingen nyhetsbrev. Du får én e-post når produktet
              lanseres — det er alt<span className="text-sage">.</span>
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-white p-8">
            <InteresseForm />
          </div>

          <p className="mt-6 text-center text-xs text-muted/60">
            Vi lagrer kun navn og e-post for å kunne gi deg beskjed om
            lansering. Du kan når som helst be om å bli slettet ved å sende
            e-post til hei@sparlett.no.
          </p>
        </div>
      </section>
    </SubpageLayout>
  );
}
