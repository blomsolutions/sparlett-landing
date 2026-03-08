import type { Metadata } from "next";
import SubpageLayout from "@/components/SubpageLayout";
import Ring3 from "@/components/Ring3";
import Curve from "@/components/Curve";
import InnsiktDemo from "./InnsiktDemo";

export const metadata: Metadata = {
  title: "Funksjoner",
  description: "Utforsk Sparlett sine funksjoner: smart forbruksanalyse, budsjettverktøy, sparemål, AI-rådgivning og automatisk bankkobling via PSD2.",
  alternates: { canonical: "https://sparlett.no/funksjoner" },
  openGraph: {
    title: "Funksjoner — Sparlett",
    description: "Utforsk Sparlett sine funksjoner: smart forbruksanalyse, budsjettverktøy, sparemål, AI-rådgivning og automatisk bankkobling via PSD2.",
    url: "https://sparlett.no/funksjoner",
  },
};

const features = [
  {
    title: "Smart forbruksanalyse",
    desc: "Vi analyserer forbruket ditt og finner muligheter du kanskje ikke ser selv.",
    sector: "sand" as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" /><path d="M10 22h4" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
      </svg>
    ),
  },
  {
    title: "Visuell oversikt",
    desc: "Se økonomien din i klare, intuitive grafer. Forstå pengeflyten uten å måtte tolke regneark.",
    sector: "sage" as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
  {
    title: "Sparemål med veiledning",
    desc: "Sett mål og få hjelp til å nå dem. Rådene tilpasses vanene dine — ikke generiske tips.",
    sector: "sageDark" as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Smarte varsler",
    desc: "Få beskjed før du overskrider budsjettet — ikke etter. Vi lærer når og hvordan du vil bli varslet.",
    sector: "sand" as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>
    ),
  },
  {
    title: "Sikkerhet på banknivå",
    desc: "Dataene dine er kryptert og lagret sikkert. Vi selger aldri informasjonen din.",
    sector: "sage" as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    ),
  },
  {
    title: "Familiedeling",
    desc: "Del økonomisk oversikt med familien. Alle ser det samme bildet — og sparer sammen mot felles mål.",
    sector: "sageDark" as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const steps = [
  {
    num: "01",
    title: "Koble til",
    desc: "Koble banken din til Sparlett. All data er kryptert og lagret sikkert i EU-baserte datasentre.",
    color: "sage" as const,
    state: 2,
  },
  {
    num: "02",
    title: "Vi analyserer",
    desc: "Vi ser på transaksjonene dine, finner mønstre og kategoriserer automatisk. Du trenger ikke gjøre noe.",
    color: "sand" as const,
    state: 1,
  },
  {
    num: "03",
    title: "Du får innsikt",
    desc: "Konkrete forslag basert på dine faktiske vaner. Ikke generiske tips — data som betyr noe for deg.",
    color: "sand" as const,
    state: 1,
  },
  {
    num: "04",
    title: "Spar automatisk",
    desc: "Sett mål og la Sparlett hjelpe deg dit. Vi tilpasser rådene etter hvert som vi lærer vanene dine.",
    color: "sageDark" as const,
    state: 3,
  },
];

const capabilities = [
  {
    title: "Forbruksanalyse",
    desc: "Vi kategoriserer transaksjonene dine automatisk og viser deg hvor pengene går — oppdelt etter uke, måned og kategori.",
    sector: "sand" as const,
  },
  {
    title: "Sparemuligheter",
    desc: "Vi finner konkrete muligheter for å spare — fra abonnementer du ikke bruker til bedre avtaler på strøm og forsikring.",
    sector: "sand" as const,
  },
  {
    title: "Budsjettvarsler",
    desc: "Få beskjed før du overskrider budsjettet — ikke etter. Vi varsler deg på en rolig og tydelig måte.",
    sector: "sage" as const,
  },
  {
    title: "Trendanalyse",
    desc: "Se hvordan forbruket ditt utvikler seg over tid. Vi viser trender per kategori slik at du kan ta gode valg.",
    sector: "sage" as const,
  },
  {
    title: "Sparemål",
    desc: "Sett mål for ferien, ny bil eller nødfond. Vi følger progresjonen din og gir deg veiledning underveis.",
    sector: "sageDark" as const,
  },
  {
    title: "Personlige råd",
    desc: "Jo lenger du bruker Sparlett, jo bedre blir rådene. Vi tilpasser oss dine vaner, ikke omvendt.",
    sector: "sageDark" as const,
  },
];

const sectorColorMap = {
  sand: { bg: "bg-sand-bg", text: "text-sand" },
  sage: { bg: "bg-sage-bg", text: "text-sage" },
  sageDark: { bg: "bg-sage-dark-bg", text: "text-sage-dark" },
};

const stepColorMap = {
  sand: "text-sand",
  sage: "text-sage",
  sageDark: "text-sage-dark",
};

const funksjonerJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Slik kommer du i gang med Sparlett",
      description: "Fire enkle steg for å ta kontroll over økonomien din med Sparlett.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Koble til banken",
          text: "Koble banken din til Sparlett. All data er kryptert og lagret sikkert i EU-baserte datasentre.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Vi analyserer",
          text: "Vi ser på transaksjonene dine, finner mønstre og kategoriserer automatisk. Du trenger ikke gjøre noe.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Du får innsikt",
          text: "Konkrete forslag basert på dine faktiske vaner. Ikke generiske tips — data som betyr noe for deg.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Spar automatisk",
          text: "Sett mål og la Sparlett hjelpe deg dit. Vi tilpasser rådene etter hvert som vi lærer vanene dine.",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hjem", item: "https://sparlett.no" },
        { "@type": "ListItem", position: 2, name: "Funksjoner", item: "https://sparlett.no/funksjoner" },
      ],
    },
  ],
};

export default function FunksjonerPage() {
  return (
    <SubpageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(funksjonerJsonLd) }}
      />
      {/* Hero */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Slik fungerer <span className="text-sage">Sparlett</span>
            <span className="text-sage">.</span>
          </h1>
          <Curve width={200} height={12} strokeWidth={1.8} className="mb-4" />
          <p className="max-w-xl text-lg text-muted leading-relaxed">
            Fra smart forbruksanalyse til sparemål med veiledning — alt du
            trenger for å ta kontroll over økonomien din
            <span className="text-sage">.</span>
          </p>
        </div>
      </section>

      {/* Features grid */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-10 text-2xl font-bold text-deep">
            Alt du trenger for å spare lett
            <span className="text-sage">.</span>
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => {
              const c = sectorColorMap[f.sector];
              return (
                <div
                  key={f.title}
                  className="rounded-xl border border-border bg-white p-5"
                >
                  <div
                    className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${c.bg} ${c.text}`}
                  >
                    {f.icon}
                  </div>
                  <h3 className="mb-2 text-sm font-semibold text-deep">
                    {f.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-10 text-2xl font-bold text-deep">
            Slik kommer du i gang<span className="text-sage">.</span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step.num}
                className="rounded-xl border border-border bg-white p-6"
              >
                <div className="mb-3 flex items-center gap-3">
                  <Ring3 size={20} strokeWidth={2} state={step.state} />
                  <span className="font-mono text-xs text-muted">
                    {step.num}
                  </span>
                </div>
                <h3
                  className={`mb-2 text-lg font-semibold ${stepColorMap[step.color]}`}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innsikt section */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-sand-bg px-2.5 py-1">
            <Ring3 size={12} strokeWidth={1.2} state={1} />
            <span className="text-[11px] font-semibold text-sand">
              Innsikt
            </span>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-deep">
            Smart analyse som jobber for deg
            <span className="text-sage">.</span>
          </h2>
          <p className="mb-8 max-w-lg text-muted">
            Sparlett finner mønstre i økonomien din og gir deg konkrete forslag
            — tilpasset akkurat deg.
          </p>
          <InnsiktDemo />
        </div>
      </section>

      {/* Capabilities grid */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-3 text-2xl font-bold text-deep">
            Hva Sparlett gjør for deg<span className="text-sage">.</span>
          </h2>
          <p className="mb-10 max-w-lg text-muted">
            En smart plattform som ser det du ikke ser — og gir deg kontrollen
            tilbake.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => {
              const c = sectorColorMap[cap.sector];
              return (
                <div
                  key={cap.title}
                  className="rounded-xl border border-border bg-white p-5"
                >
                  <div
                    className={`mb-3 h-1 w-8 rounded-full ${c.bg.replace("bg-", "bg-")}`}
                    style={{
                      backgroundColor:
                        cap.sector === "sand"
                          ? "#C8A87C"
                          : cap.sector === "sage"
                            ? "#4A7C6F"
                            : "#2A5449",
                    }}
                  />
                  <h3 className="mb-2 text-sm font-semibold text-deep">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl bg-sage-light p-8 sm:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-sage/10">
                <svg
                  className="h-5 w-5 text-sage"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-deep">
                  Din data, din kontroll<span className="text-sage">.</span>
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  All data er kryptert med AES-256 og lagret i EU-baserte
                  datasentre. Vi selger aldri informasjonen din. Du kan slette
                  all data når som helst.
                </p>
                <a
                  href="/sikkerhet"
                  className="mt-3 inline-block text-sm font-medium text-sage hover:text-sage-dark"
                >
                  Les mer om sikkerhet
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Ring3 size={40} strokeWidth={3.5} className="mx-auto mb-4" />
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Klar for å ta <span className="text-sage">kontroll</span>
            <span className="text-sage">?</span>
          </h2>
          <Curve
            width={160}
            height={10}
            strokeWidth={1.5}
            className="mx-auto mb-4"
          />
          <p className="mx-auto mb-8 max-w-md text-muted">
            Søk om beta-tilgang og opplev hvordan Sparlett kan hjelpe deg med å
            spare<span className="text-sage">.</span>
          </p>
          <a
            href="/beta"
            className="inline-block rounded-lg bg-sage px-8 py-4 font-semibold text-white transition-all hover:bg-sage-dark"
          >
            Kom i gang
          </a>
        </div>
      </section>
    </SubpageLayout>
  );
}
