import type { Metadata } from "next";
import SubpageLayout from "@/components/SubpageLayout";
import Ring3 from "@/components/Ring3";

export const metadata: Metadata = {
  title: "Blogg",
  description: "Sparlett-bloggen. Tips, guider og innsikt om personlig økonomi, sparing og smarte pengevalg i Norge.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://sparlett.no/blogg" },
  openGraph: {
    title: "Blogg — Sparlett",
    description: "Sparlett-bloggen. Tips, guider og innsikt om personlig økonomi, sparing og smarte pengevalg i Norge.",
    url: "https://sparlett.no/blogg",
  },
};

export default function BloggPage() {
  return (
    <SubpageLayout>
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Ring3 size={48} strokeWidth={4} className="mx-auto mb-6" />
          <h1 className="mb-3 text-4xl font-bold tracking-tight">
            Blogg<span className="text-sage">.</span>
          </h1>
          <p className="mx-auto mb-8 max-w-lg text-lg text-muted">
            Kommer snart. Vi jobber med innhold om personlig økonomi, sparing og smarte valg<span className="text-sage">.</span>
          </p>

          <a href="/" className="inline-block text-sm text-sage hover:text-sage-dark font-medium">
            Tilbake til forsiden
          </a>
        </div>
      </section>
    </SubpageLayout>
  );
}
