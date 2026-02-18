import type { Metadata } from "next";
import Link from "next/link";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata: Metadata = {
  title: "Blogg",
  description:
    "Tips, innsikt og nyheter om personlig økonomi og sparing fra Sparlett.no.",
};

export default function BloggPage() {
  return (
    <SubpageLayout>
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Blogg</h1>
        <p className="mb-12 text-lg text-muted">
          Tips, innsikt og nyheter om personlig økonomi og sparing.
        </p>

        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-surface border border-border">
            <svg className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-white">Kommer snart</h2>
          <p className="mx-auto max-w-md text-muted">
            Vi jobber med innhold om personlig økonomi, sparetips og smarte strategier
            for din lommebok. Følg med — de første artiklene publiseres snart!
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
