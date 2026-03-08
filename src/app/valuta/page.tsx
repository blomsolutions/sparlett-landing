import type { Metadata } from "next";
import SubpageLayout from "@/components/SubpageLayout";
import ValutaContent from "./ValutaContent";
import Ring3 from "@/components/Ring3";
import Curve from "@/components/Curve";

export const metadata: Metadata = {
  title: "Valutakalkulator",
  description: "Gratis valutakalkulator med offisielle kurser fra Norges Bank. Konverter mellom NOK og 37+ valutaer — oppdatert daglig.",
  alternates: { canonical: "https://sparlett.no/valuta" },
  openGraph: {
    title: "Valutakalkulator — Sparlett",
    description: "Gratis valutakalkulator med offisielle kurser fra Norges Bank. Konverter mellom NOK og 37+ valutaer — oppdatert daglig.",
    url: "https://sparlett.no/valuta",
  },
};

const valutaJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hjem", item: "https://sparlett.no" },
    { "@type": "ListItem", position: 2, name: "Valutakalkulator", item: "https://sparlett.no/valuta" },
  ],
};

export default function ValutaPage() {
  return (
    <SubpageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(valutaJsonLd) }}
      />
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="mb-3 text-4xl font-bold tracking-tight">
            Valutakalkulator<span className="text-sage">.</span>
          </h1>
          <Curve width={180} height={10} strokeWidth={1.5} className="mb-4" />
          <p className="mb-10 max-w-lg text-muted">
            Konverter mellom NOK og 37+ valutaer med offisielle kurser fra Norges Bank<span className="text-sage">.</span>
          </p>
          <ValutaContent />
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl bg-sage-light p-8 sm:p-10 text-center">
            <Ring3 size={36} strokeWidth={3} className="mx-auto mb-4" />
            <h2 className="mb-2 text-2xl font-bold text-deep">
              Hold kontroll på <span className="text-sage">økonomien</span><span className="text-sage">.</span>
            </h2>
            <p className="mx-auto mb-6 max-w-md text-sm text-muted">
              Sparlett gir deg mer enn valutakurser — full oversikt over forbruk, sparemål og innsikt i økonomien din.
            </p>
            <a
              href="/beta"
              className="inline-block rounded-lg bg-sage px-8 py-3.5 font-semibold text-white transition-all hover:bg-sage-dark"
            >
              Prøv Sparlett gratis
            </a>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
