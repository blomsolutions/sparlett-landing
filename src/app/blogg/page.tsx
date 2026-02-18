import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blogg — Sparlett.no",
  description:
    "Tips, innsikt og nyheter om personlig økonomi og sparing fra Sparlett.no.",
};

export default function BloggPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/Horizontal_logo_white.svg"
              alt="Sparlett.no"
              width={130}
              height={30}
              className="h-7 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="text-sm text-muted transition-colors hover:text-white"
          >
            &larr; Tilbake til forsiden
          </Link>
        </div>
      </header>

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

      <footer className="border-t border-border bg-surface/30">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <p className="text-sm text-muted/60">
            &copy; {new Date().getFullYear()} Sparlett.no
          </p>
          <div className="flex gap-6 text-sm text-muted">
            <Link href="/" className="transition-colors hover:text-white">Hjem</Link>
            <Link href="/personvern" className="transition-colors hover:text-white">Personvern</Link>
            <Link href="/terms" className="transition-colors hover:text-white">Vilkår</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
