import type { Metadata } from "next";
import Link from "next/link";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata: Metadata = {
  title: "Karriere — Sparlett.no",
  description:
    "Bli med på laget! Se ledige stillinger og muligheter hos Sparlett.no.",
};

export default function KarrierePage() {
  return (
    <SubpageLayout>
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Karriere</h1>
        <p className="mb-12 text-lg text-muted">
          Bli med oss og bygg fremtidens økonomiverktøy for Norge.
        </p>

        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-surface border border-border">
            <svg className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
            </svg>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-white">Ingen ledige stillinger akkurat nå</h2>
          <p className="mx-auto max-w-md text-muted">
            Vi har for øyeblikket ingen åpne stillinger, men vi er alltid interessert i å
            høre fra talentfulle mennesker. Send en åpen søknad til{" "}
            <a href="mailto:kontakt@sparlett.no" className="text-accent transition-colors hover:text-accent-hover">
              kontakt@sparlett.no
            </a>{" "}
            hvis du brenner for fintech og personlig økonomi.
          </p>
          <Link
            href="/"
            className="mt-8 rounded-xl bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Tilbake til forsiden
          </Link>
        </div>
      </main>
    </SubpageLayout>
  );
}
