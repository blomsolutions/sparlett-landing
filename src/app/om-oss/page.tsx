import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Om oss — Sparlett.no",
  description:
    "Lær mer om Sparlett.no og teamet bak Norges smarteste økonomiapp.",
};

export default function OmOssPage() {
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
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Om oss</h1>
        <p className="mb-12 text-lg text-muted">
          Historien bak Sparlett.no — og hvorfor vi bygger Norges smarteste økonomiverktøy.
        </p>

        <div className="space-y-10 text-[15px] leading-relaxed text-white/80">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Vår visjon
            </h2>
            <p>
              Vi tror alle fortjener god oversikt over sin egen økonomi — uten at det skal føles
              som en jobb. Sparlett.no ble skapt for å gjøre personlig økonomi enkel, visuell
              og motiverende. Vi kombinerer smart teknologi med brukervennlig design for å
              gi deg verktøyene du trenger for å spare smartere og leve friere.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Hva er Sparlett.no?
            </h2>
            <p>
              Sparlett.no er en AI-drevet økonomiassistent som hjelper deg med å holde
              oversikt over inntekter, utgifter, budsjett og sparing. Med vår AI-assistent
              Lumi får du personlige innsikter og anbefalinger basert på dine faktiske
              økonomiske data — helt automatisk.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Teknologien bak
            </h2>
            <p>
              Vi bruker moderne teknologi for å levere en rask, sikker og pålitelig tjeneste.
              Appen er bygget med React, kjører på Firebase-infrastruktur, og bruker avansert
              AI fra Google Gemini for å gi deg smarte økonomiske innsikter. All data lagres
              sikkert i henhold til GDPR og norsk personvernlovgivning.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Selskapet
            </h2>
            <div className="rounded-xl border border-border bg-surface/50 p-6">
              <p className="mb-1 font-semibold text-white">BLOM SOLUTIONS</p>
              <p>Organisasjonsnummer: 834 411 342</p>
              <p className="mt-3">
                E-post:{" "}
                <a href="mailto:kontakt@sparlett.no" className="text-accent transition-colors hover:text-accent-hover">
                  kontakt@sparlett.no
                </a>
              </p>
              <p>
                Telefon:{" "}
                <a href="tel:+4790790093" className="text-accent transition-colors hover:text-accent-hover">
                  +47 907 90 093
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Våre verdier
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-surface/50 p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <h3 className="mb-1 font-semibold text-white">Sikkerhet først</h3>
                <p className="text-sm text-muted">
                  Dine data er kryptert og beskyttet. Vi selger aldri informasjonen din.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface/50 p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="mb-1 font-semibold text-white">Enkelhet</h3>
                <p className="text-sm text-muted">
                  Kompleks økonomi gjort enkel. Ingen forkunnskaper kreves.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface/50 p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </div>
                <h3 className="mb-1 font-semibold text-white">Brukeren først</h3>
                <p className="text-sm text-muted">
                  Alt vi bygger starter med spørsmålet: hva trenger brukeren?
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Kontakt oss
            </h2>
            <p>
              Har du spørsmål, tilbakemeldinger eller ønsker å samarbeide? Ta gjerne kontakt
              på{" "}
              <a href="mailto:kontakt@sparlett.no" className="text-accent transition-colors hover:text-accent-hover">
                kontakt@sparlett.no
              </a>{" "}
              eller bruk{" "}
              <Link href="/#kontakt" className="text-accent transition-colors hover:text-accent-hover">
                kontaktskjemaet vårt
              </Link>
              .
            </p>
          </section>
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
