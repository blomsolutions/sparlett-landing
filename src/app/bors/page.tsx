import type { Metadata } from "next";
import SubpageLayout from "@/components/SubpageLayout";
import Curve from "@/components/Curve";
import Ring3 from "@/components/Ring3";
import { yahooFinance } from "@/lib/yahoo-finance";
import BorsClient from "./BorsClient";

export const metadata: Metadata = {
  title: "Børs",
  description: "Følg aksjer og kurser fra Oslo Børs, Nasdaq og S&P 500 i sanntid. Gratis markedsdata oppdatert hvert 5. minutt med Sparlett.",
  alternates: { canonical: "https://sparlett.no/bors" },
  openGraph: {
    title: "Børs — Sparlett",
    description: "Følg aksjer og kurser fra Oslo Børs, Nasdaq og S&P 500 i sanntid. Gratis markedsdata oppdatert hvert 5. minutt med Sparlett.",
    url: "https://sparlett.no/bors",
  },
};

export const revalidate = 300; // revalidate every 5 minutes

const OSLO_TICKERS = [
  "EQNR.OL",
  "DNB.OL",
  "MOWI.OL",
  "TEL.OL",
  "SALM.OL",
  "ORK.OL",
  "YAR.OL",
  "NHY.OL",
  "AKRBP.OL",
  "STB.OL",
  "AKER.OL",
  "SUBC.OL",
  "KOG.OL",
  "REC.OL",
  "NHYDY",
  "BWLPG.OL",
  "FRO.OL",
  "GOGL.OL",
  "HAFNI.OL",
  "KAHOT.OL",
  "NEL.OL",
  "PGS.OL",
  "SCATC.OL",
  "TGS.OL",
  "VOW.OL",
];

const GLOBAL_TICKERS = [
  "AAPL",
  "MSFT",
  "GOOGL",
  "AMZN",
  "TSLA",
  "NVDA",
  "META",
  "JPM",
  "V",
  "NFLX",
  "BRK-B",
  "UNH",
  "XOM",
  "LLY",
  "JNJ",
  "WMT",
  "MA",
  "PG",
  "AVGO",
  "ORCL",
];

interface QuoteData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  currency: string;
  marketState: string;
}

async function fetchQuotes(tickers: string[]): Promise<QuoteData[]> {
  try {
    const quotes = await yahooFinance.quote(tickers);
    const arr = Array.isArray(quotes) ? quotes : [quotes];
    return arr
      .filter((q) => q.regularMarketPrice != null)
      .map((q) => ({
        symbol: q.symbol ?? "",
        name: (q.shortName ?? q.symbol ?? "").replace(/ ASA$/i, ""),
        price: q.regularMarketPrice ?? 0,
        change: q.regularMarketChange ?? 0,
        changePercent: q.regularMarketChangePercent ?? 0,
        currency: q.currency ?? "NOK",
        marketState: (q.marketState as string) ?? "CLOSED",
      }));
  } catch {
    return [];
  }
}

export default async function BorsPage() {
  const [osloQuotes, globalQuotes] = await Promise.all([
    fetchQuotes(OSLO_TICKERS),
    fetchQuotes(GLOBAL_TICKERS),
  ]);

  return (
    <SubpageLayout>
      {/* Hero */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-sage-bg px-2.5 py-1">
            <Ring3 size={12} strokeWidth={1.2} state={2} />
            <span className="text-[11px] font-semibold text-sage">Børs</span>
          </div>
          <h1 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Aksjer og <span className="text-sage">kurser</span>
            <span className="text-sage">.</span>
          </h1>
          <Curve width={200} height={12} strokeWidth={1.8} className="mb-4" />
          <p className="max-w-xl text-lg text-muted leading-relaxed">
            Følg markedet med oppdaterte kurser fra Oslo Børs og internasjonale
            markeder<span className="text-sage">.</span>
          </p>
        </div>
      </section>

      <BorsClient osloQuotes={osloQuotes} globalQuotes={globalQuotes} />

      {/* CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Ring3 size={40} strokeWidth={3.5} className="mx-auto mb-4" />
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Få innsikt i <span className="text-sage">porteføljen</span> din
            <span className="text-sage">.</span>
          </h2>
          <Curve
            width={160}
            height={10}
            strokeWidth={1.5}
            className="mx-auto mb-4"
          />
          <p className="mx-auto mb-8 max-w-md text-muted">
            Sparlett gir deg oversikt over aksjer, valuta og sparemål — alt
            samlet på ett sted<span className="text-sage">.</span>
          </p>
          <a
            href="/interesse"
            className="inline-block rounded-lg bg-sage px-8 py-4 font-semibold text-white transition-all hover:bg-sage-dark"
          >
            Meld interesse
          </a>
        </div>
      </section>
    </SubpageLayout>
  );
}
