import type { Metadata } from "next";
import SubpageLayout from "@/components/SubpageLayout";
import Ring3 from "@/components/Ring3";
import Curve from "@/components/Curve";
import PriserForm from "./PriserForm";

export const metadata: Metadata = {
  title: "Priser",
  description:
    "Hjelp oss å finne riktig pris for Sparlett. Fortell oss hva du hadde vært villig til å betale.",
};

const savings = [
  {
    title: "Glemte abonnementer",
    example: "Treningssenter du ikke bruker, strømmetjenester du har glemt",
    amount: "500–2 000 kr/mnd",
    sector: "sand" as const,
  },
  {
    title: "Bedre avtaler",
    example: "Strøm, forsikring og mobilabonnement over markedspris",
    amount: "300–800 kr/mnd",
    sector: "sage" as const,
  },
  {
    title: "Ubevisst forbruk",
    example: "Småkjøp, takeaway og impulshandling du ikke tenker over",
    amount: "1 000–3 000 kr/mnd",
    sector: "sageDark" as const,
  },
];

const sectorColorMap = {
  sand: { bg: "bg-sand-bg", text: "text-sand", accent: "#C8A87C" },
  sage: { bg: "bg-sage-bg", text: "text-sage", accent: "#4A7C6F" },
  sageDark: { bg: "bg-sage-dark-bg", text: "text-sage-dark", accent: "#3D6B5F" },
};

export default function PriserPage() {
  return (
    <SubpageLayout>
      {/* Hero */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Hva er riktig <span className="text-sage">pris</span>
            <span className="text-sage">?</span>
          </h1>
          <Curve width={200} height={12} strokeWidth={1.8} className="mb-4" />
          <p className="max-w-xl text-lg text-muted leading-relaxed">
            Vi bygger Sparlett for deg — og vil gjerne vite hva du mener er en
            rettferdig pris<span className="text-sage">.</span>
          </p>
        </div>
      </section>

      {/* Value proposition */}
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-3 text-2xl font-bold text-deep">
            Tenk over dette<span className="text-sage">.</span>
          </h2>
          <p className="mb-8 max-w-lg text-muted leading-relaxed">
            De fleste nordmenn betaler for ting de ikke bruker, eller betaler
            for mye for ting de bruker. Sparlett finner det for deg.
          </p>

          <div className="space-y-4">
            {savings.map((s) => {
              const c = sectorColorMap[s.sector];
              return (
                <div
                  key={s.title}
                  className="flex items-start gap-4 rounded-xl border border-border bg-white p-5"
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${c.bg} ${c.text}`}
                  >
                    <Ring3 size={16} strokeWidth={1.5} state={s.sector === "sand" ? 1 : s.sector === "sage" ? 2 : 3} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-semibold text-deep">{s.title}</h3>
                      <span
                        className={`shrink-0 rounded-md px-2.5 py-1 text-[11px] font-semibold ${c.bg} ${c.text}`}
                      >
                        {s.amount}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted">{s.example}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-xl border border-sage/20 bg-sage-light/40 p-6">
            <p className="text-sm text-deep leading-relaxed">
              Hvis Sparlett finner abonnementer du har glemt å skru av og sparer
              deg 2 000 kr i måneden bare på det — ville du betalt for
              tjenesten? Vi tror det. Men vi vil at du skal bestemme hva som er
              rettferdig<span className="text-sage">.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Pricing form */}
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-3 text-2xl font-bold text-deep">
            Hva hadde du betalt<span className="text-sage">?</span>
          </h2>
          <p className="mb-8 max-w-lg text-muted">
            Hjelp oss med å sette riktig pris. Vi bruker svarene til å bygge en
            modell som fungerer for alle.
          </p>

          <div className="rounded-2xl border border-border bg-white p-8">
            <PriserForm />
          </div>
        </div>
      </section>

      {/* Beta note */}
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Ring3 size={32} strokeWidth={3} className="mx-auto mb-4" />
          <h3 className="mb-2 text-xl font-bold text-deep">
            Beta er gratis<span className="text-sage">.</span>
          </h3>
          <p className="mx-auto max-w-md text-sm text-muted leading-relaxed">
            Akkurat nå er Sparlett helt gratis. Beta-testere får 1 års gratis
            abonnement etter lansering. Du risikerer ingenting
            <span className="text-sage">.</span>
          </p>
          <a
            href="/beta"
            className="mt-6 inline-block rounded-lg bg-sage px-8 py-4 font-semibold text-white transition-all hover:bg-sage-dark"
          >
            Søk beta-tilgang
          </a>
        </div>
      </section>
    </SubpageLayout>
  );
}
