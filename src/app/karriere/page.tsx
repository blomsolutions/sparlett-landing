import type { Metadata } from "next";
import SubpageLayout from "@/components/SubpageLayout";
import Ring3 from "@/components/Ring3";

export const metadata: Metadata = {
  title: "Karriere",
  description: "Jobb hos Sparlett. Se ledige stillinger.",
};

export default function KarrierePage() {
  return (
    <SubpageLayout>
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Ring3 size={48} strokeWidth={4} className="mx-auto mb-6" />
          <h1 className="mb-3 text-4xl font-bold tracking-tight">
            Karriere<span className="text-sage">.</span>
          </h1>
          <p className="mx-auto mb-12 max-w-lg text-lg text-muted">
            Vi har ingen åpne stillinger akkurat nå.
          </p>

          <div className="rounded-xl border border-border bg-white p-8 max-w-md mx-auto">
            <h2 className="mb-3 text-lg font-semibold text-deep">Åpen søknad</h2>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Har du noe å bidra med? Send en åpen søknad til oss. Vi er alltid interessert i dyktige folk.
            </p>
            <a
              href="mailto:hei@sparlett.no"
              className="inline-block rounded-lg bg-sage px-6 py-3 font-semibold text-white transition-all hover:bg-sage-dark"
            >
              Send e-post
            </a>
          </div>

          <a href="/" className="mt-8 inline-block text-sm text-sage hover:text-sage-dark font-medium">
            Tilbake til forsiden
          </a>
        </div>
      </section>
    </SubpageLayout>
  );
}
