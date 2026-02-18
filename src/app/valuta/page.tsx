"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

// --- Types ---
interface CurrencyRate {
  code: string;
  name: string;
  rate: number; // how many NOK per 1 unit of this currency
  date: string;
}

interface HistoricalPoint {
  date: string;
  rate: number;
}

// --- Norges Bank API URL ---
const CURRENCIES =
  "USD+AUD+BDT+BYN+BRL+GBP+BGN+DKK+EUR+PHP+HKD+INR+IDR+ISK+JPY+CAD+CNY+HRK+MYR+MXN+MMK+NZD+ILS+RON+TWD+PKR+PLN+RUB+SGD+CHF+SEK+ZAR+KRW+THB+CZK+TRY+HUF+VND";

const API_URL = `https://data.norges-bank.no/api/data/EXR/B.${CURRENCIES}.NOK.SP?format=sdmx-json&lastNObservations=60&locale=no`;

// --- Popular currencies shown first ---
const POPULAR = ["EUR", "USD", "GBP", "SEK", "DKK", "CHF", "PLN", "JPY", "CAD"];

// --- Flag emoji mapping ---
const FLAG_MAP: Record<string, string> = {
  USD: "\u{1F1FA}\u{1F1F8}", AUD: "\u{1F1E6}\u{1F1FA}", BDT: "\u{1F1E7}\u{1F1E9}", BYN: "\u{1F1E7}\u{1F1FE}",
  BRL: "\u{1F1E7}\u{1F1F7}", GBP: "\u{1F1EC}\u{1F1E7}", BGN: "\u{1F1E7}\u{1F1EC}", DKK: "\u{1F1E9}\u{1F1F0}",
  EUR: "\u{1F1EA}\u{1F1FA}", PHP: "\u{1F1F5}\u{1F1ED}", HKD: "\u{1F1ED}\u{1F1F0}", INR: "\u{1F1EE}\u{1F1F3}",
  IDR: "\u{1F1EE}\u{1F1E9}", ISK: "\u{1F1EE}\u{1F1F8}", JPY: "\u{1F1EF}\u{1F1F5}", CAD: "\u{1F1E8}\u{1F1E6}",
  CNY: "\u{1F1E8}\u{1F1F3}", HRK: "\u{1F1ED}\u{1F1F7}", MYR: "\u{1F1F2}\u{1F1FE}", MXN: "\u{1F1F2}\u{1F1FD}",
  MMK: "\u{1F1F2}\u{1F1F2}", NZD: "\u{1F1F3}\u{1F1FF}", ILS: "\u{1F1EE}\u{1F1F1}", RON: "\u{1F1F7}\u{1F1F4}",
  TWD: "\u{1F1F9}\u{1F1FC}", PKR: "\u{1F1F5}\u{1F1F0}", PLN: "\u{1F1F5}\u{1F1F1}", RUB: "\u{1F1F7}\u{1F1FA}",
  SGD: "\u{1F1F8}\u{1F1EC}", CHF: "\u{1F1E8}\u{1F1ED}", SEK: "\u{1F1F8}\u{1F1EA}", ZAR: "\u{1F1FF}\u{1F1E6}",
  KRW: "\u{1F1F0}\u{1F1F7}", THB: "\u{1F1F9}\u{1F1ED}", CZK: "\u{1F1E8}\u{1F1FF}", TRY: "\u{1F1F9}\u{1F1F7}",
  HUF: "\u{1F1ED}\u{1F1FA}", VND: "\u{1F1FB}\u{1F1F3}", NOK: "\u{1F1F3}\u{1F1F4}",
};

// --- Parse SDMX-JSON ---
function parseNorgesBankData(json: any): {
  rates: CurrencyRate[];
  history: Record<string, HistoricalPoint[]>;
} {
  const structure = json.data?.structure || json.structure;
  const dataSets = json.data?.dataSets || json.dataSets;

  const currencyDim = structure.dimensions.series.find(
    (d: any) => d.id === "BASE_CUR"
  );
  const timeDim = structure.dimensions.observation[0];

  const rates: CurrencyRate[] = [];
  const history: Record<string, HistoricalPoint[]> = {};

  currencyDim.values.forEach((curr: any, idx: number) => {
    const seriesKey = `0:${idx}:0:0`;
    const series = dataSets[0].series[seriesKey];
    if (!series) return;

    const observations = series.observations;
    const points: HistoricalPoint[] = [];

    Object.keys(observations).forEach((obsKey) => {
      const val = parseFloat(observations[obsKey][0]);
      const timePeriod = timeDim.values[parseInt(obsKey)];
      if (!isNaN(val) && timePeriod) {
        points.push({ date: timePeriod.id, rate: val });
      }
    });

    points.sort((a, b) => a.date.localeCompare(b.date));

    if (points.length > 0) {
      const latest = points[points.length - 1];
      rates.push({
        code: curr.id,
        name: curr.name,
        rate: latest.rate,
        date: latest.date,
      });
      history[curr.id] = points;
    }
  });

  return { rates, history };
}

// --- Mini sparkline chart ---
function Sparkline({
  data,
  width = 120,
  height = 40,
}: {
  data: HistoricalPoint[];
  width?: number;
  height?: number;
}) {
  if (data.length < 2) return null;

  const rates = data.map((d) => d.rate);
  const min = Math.min(...rates);
  const max = Math.max(...rates);
  const range = max - min || 1;

  const points = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((d.rate - min) / range) * (height - 4) - 2;
      return `${x},${y}`;
    })
    .join(" ");

  const isUp = rates[rates.length - 1] >= rates[0];

  return (
    <svg width={width} height={height} className="inline-block">
      <polyline
        points={points}
        fill="none"
        stroke={isUp ? "#22c55e" : "#ef4444"}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// --- Main Component ---
export default function ValutaPage() {
  const [rates, setRates] = useState<CurrencyRate[]>([]);
  const [history, setHistory] = useState<Record<string, HistoricalPoint[]>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Calculator state
  const [amount, setAmount] = useState("1000");
  const [fromCurrency, setFromCurrency] = useState("NOK");
  const [toCurrency, setToCurrency] = useState("EUR");

  // Search / filter
  const [search, setSearch] = useState("");

  // Lead form
  const [leadEmail, setLeadEmail] = useState("");
  const [leadStatus, setLeadStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  // Fetch data
  useEffect(() => {
    async function fetchRates() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Kunne ikke hente kurser");
        const json = await res.json();
        const { rates: r, history: h } = parseNorgesBankData(json);
        setRates(r);
        setHistory(h);
      } catch (err: any) {
        setError(err.message || "Kunne ikke hente valutakurser");
      } finally {
        setLoading(false);
      }
    }
    fetchRates();
  }, []);

  // Sort: popular first, then alphabetical
  const sortedRates = useMemo(() => {
    return [...rates].sort((a, b) => {
      const aPopIdx = POPULAR.indexOf(a.code);
      const bPopIdx = POPULAR.indexOf(b.code);
      if (aPopIdx >= 0 && bPopIdx >= 0) return aPopIdx - bPopIdx;
      if (aPopIdx >= 0) return -1;
      if (bPopIdx >= 0) return 1;
      return a.name.localeCompare(b.name, "no");
    });
  }, [rates]);

  const filteredRates = useMemo(() => {
    if (!search.trim()) return sortedRates;
    const q = search.toLowerCase();
    return sortedRates.filter(
      (r) =>
        r.code.toLowerCase().includes(q) ||
        r.name.toLowerCase().includes(q)
    );
  }, [sortedRates, search]);

  // All currencies for the selector (NOK + all fetched)
  const allCurrencies = useMemo(() => {
    const list = [{ code: "NOK", name: "Norske kroner", rate: 1 }];
    sortedRates.forEach((r) => list.push(r));
    return list;
  }, [sortedRates]);

  // Converter calculation
  const convertedAmount = useMemo(() => {
    const num = parseFloat(amount) || 0;
    if (fromCurrency === "NOK" && toCurrency === "NOK") return num;

    const fromRate =
      fromCurrency === "NOK" ? 1 : rates.find((r) => r.code === fromCurrency)?.rate;
    const toRate =
      toCurrency === "NOK" ? 1 : rates.find((r) => r.code === toCurrency)?.rate;

    if (!fromRate || !toRate) return 0;

    // Convert from → NOK → to
    const inNOK = num * fromRate;
    return inNOK / toRate;
  }, [amount, fromCurrency, toCurrency, rates]);

  // Swap currencies
  const handleSwap = useCallback(() => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }, [fromCurrency, toCurrency]);

  // Lead form submit
  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLeadStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mjgeoawr", {
        method: "POST",
        body: JSON.stringify({ email: leadEmail, source: "valuta-kalkulator" }),
        headers: { Accept: "application/json", "Content-Type": "application/json" },
      });
      if (res.ok) {
        setLeadStatus("success");
        setLeadEmail("");
      } else {
        setLeadStatus("error");
      }
    } catch {
      setLeadStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
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

      <main className="mx-auto max-w-6xl px-6 py-12">
        {/* Hero */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Gratis verktøy
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Valutakalkulator
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Regn om mellom NOK og {rates.length || "37"}+ valutaer. Offisielle kurser fra Norges Bank,
            oppdatert daglig.
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="mb-4 h-10 w-10 animate-spin rounded-full border-2 border-accent/20 border-t-accent" />
            <p className="text-muted">Henter kurser fra Norges Bank...</p>
          </div>
        ) : error ? (
          <div className="mx-auto max-w-xl rounded-2xl border border-red-500/30 bg-red-500/10 p-8 text-center">
            <p className="text-red-400">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 rounded-xl bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Prøv igjen
            </button>
          </div>
        ) : (
          <>
            {/* --- CONVERTER CARD --- */}
            <div className="mx-auto mb-16 max-w-2xl rounded-2xl border border-border bg-surface p-6 shadow-xl shadow-black/20 sm:p-8">
              <h2 className="mb-6 text-xl font-semibold text-white">Regn om valuta</h2>

              <div className="space-y-4">
                {/* Amount */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-muted">
                    Beløp
                  </label>
                  <input
                    type="number"
                    inputMode="decimal"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-lg font-semibold text-white placeholder:text-muted/50 transition-colors focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50"
                    placeholder="1000"
                  />
                </div>

                {/* From / To */}
                <div className="grid grid-cols-[1fr,auto,1fr] items-end gap-3">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-muted">
                      Fra
                    </label>
                    <select
                      value={fromCurrency}
                      onChange={(e) => setFromCurrency(e.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-white transition-colors focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50"
                    >
                      {allCurrencies.map((c) => (
                        <option key={c.code} value={c.code}>
                          {FLAG_MAP[c.code] || ""} {c.code} — {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={handleSwap}
                    className="mb-0.5 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all hover:border-accent/50 hover:text-accent"
                    title="Bytt valuta"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>
                  </button>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-muted">
                      Til
                    </label>
                    <select
                      value={toCurrency}
                      onChange={(e) => setToCurrency(e.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-white transition-colors focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50"
                    >
                      {allCurrencies.map((c) => (
                        <option key={c.code} value={c.code}>
                          {FLAG_MAP[c.code] || ""} {c.code} — {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Result */}
                <div className="mt-2 rounded-xl border border-accent/20 bg-accent/5 p-5">
                  <p className="mb-1 text-sm text-muted">Resultat</p>
                  <p className="text-3xl font-bold text-white">
                    {convertedAmount.toLocaleString("nb-NO", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{" "}
                    <span className="text-lg text-accent">{toCurrency}</span>
                  </p>
                  <p className="mt-2 text-xs text-muted">
                    {parseFloat(amount) || 0} {fromCurrency} = {convertedAmount.toLocaleString("nb-NO", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 4,
                    })}{" "}
                    {toCurrency}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs text-muted/60">
                Kurser fra Norges Bank. Sist oppdatert: {rates[0]?.date || "—"}
              </p>
            </div>

            {/* --- RATES TABLE --- */}
            <div className="mb-16">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-2xl font-bold text-white">
                  Alle valutakurser mot NOK
                </h2>
                <div className="relative">
                  <svg
                    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Søk valuta..."
                    className="w-full rounded-xl border border-border bg-surface py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-muted/50 transition-colors focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50 sm:w-64"
                  />
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-surface/80">
                        <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-muted">
                          Valuta
                        </th>
                        <th className="px-5 py-3.5 text-right text-xs font-semibold uppercase tracking-wider text-muted">
                          Kurs (NOK)
                        </th>
                        <th className="hidden px-5 py-3.5 text-right text-xs font-semibold uppercase tracking-wider text-muted sm:table-cell">
                          Siste 60 dager
                        </th>
                        <th className="hidden px-5 py-3.5 text-right text-xs font-semibold uppercase tracking-wider text-muted md:table-cell">
                          Endring
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                      {filteredRates.map((r) => {
                        const hist = history[r.code] || [];
                        const prevRate = hist.length > 1 ? hist[hist.length - 2].rate : r.rate;
                        const change = ((r.rate - prevRate) / prevRate) * 100;
                        const isUp = change >= 0;

                        return (
                          <tr
                            key={r.code}
                            className="transition-colors hover:bg-surface/50"
                          >
                            <td className="px-5 py-4">
                              <div className="flex items-center gap-3">
                                <span className="text-xl">{FLAG_MAP[r.code] || "💱"}</span>
                                <div>
                                  <p className="font-semibold text-white">{r.code}</p>
                                  <p className="text-xs text-muted">{r.name}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-4 text-right">
                              <p className="font-mono text-sm font-semibold text-white">
                                {r.rate.toLocaleString("nb-NO", {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 4,
                                })}
                              </p>
                            </td>
                            <td className="hidden px-5 py-4 text-right sm:table-cell">
                              <Sparkline data={hist} />
                            </td>
                            <td className="hidden px-5 py-4 text-right md:table-cell">
                              <span
                                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
                                  isUp
                                    ? "bg-green-500/10 text-green-400"
                                    : "bg-red-500/10 text-red-400"
                                }`}
                              >
                                {isUp ? "+" : ""}
                                {change.toFixed(2)}%
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="mt-3 text-xs text-muted/60">
                Kilde: Norges Bank. Viser siste tilgjengelige dagskurs. Endring fra forrige virkedag.
              </p>
            </div>

            {/* --- LEAD CAPTURE --- */}
            <div className="mx-auto mb-16 max-w-2xl rounded-2xl border border-accent/20 bg-surface p-8 text-center shadow-xl shadow-accent/5">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                Flere gratis verktøy kommer snart
              </h3>
              <p className="mb-6 text-muted">
                Vi bygger flere nyttige gratisverktøy for personlig økonomi — lånekalkulator,
                sparekalkulator, og mye mer. Legg igjen e-posten din for å bli varslet først.
              </p>

              {leadStatus === "success" ? (
                <div className="flex flex-col items-center gap-2 py-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                    <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="font-semibold text-white">Takk! Vi gir deg beskjed.</p>
                  <p className="text-sm text-muted">Du er nå på listen.</p>
                </div>
              ) : (
                <form onSubmit={handleLeadSubmit} className="mx-auto flex max-w-md gap-3">
                  <input
                    type="email"
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    required
                    placeholder="din@epost.no"
                    className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm text-white placeholder:text-muted/50 transition-colors focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50"
                  />
                  <button
                    type="submit"
                    disabled={leadStatus === "sending"}
                    className="shrink-0 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:bg-accent-hover disabled:opacity-60"
                  >
                    {leadStatus === "sending" ? "Sender..." : "Varsle meg"}
                  </button>
                </form>
              )}

              {leadStatus === "error" && (
                <p className="mt-3 text-sm text-red-400">
                  Noe gikk galt. Prøv igjen.
                </p>
              )}

              <p className="mt-4 text-xs text-muted/60">
                Vi sender aldri spam. Du kan melde deg av når som helst.
              </p>
            </div>
          </>
        )}
      </main>

      {/* Simple footer */}
      <footer className="border-t border-border bg-surface/30">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <p className="text-sm text-muted/60">
            &copy; {new Date().getFullYear()} Sparlett.no — Spar smartere. Lev friere.
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
