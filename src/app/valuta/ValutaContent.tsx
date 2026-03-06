"use client";

import { useEffect, useState, useMemo } from "react";
import Spinner from "@/components/Spinner";
import InteractiveChart from "@/components/InteractiveChart";

interface Rate {
  currency: string;
  rate: number;
  name: string;
}

interface HistoricalPoint {
  date: string;
  rate: number;
}

const flags: Record<string, string> = {
  EUR:"🇪🇺",USD:"🇺🇸",GBP:"🇬🇧",SEK:"🇸🇪",DKK:"🇩🇰",CHF:"🇨🇭",PLN:"🇵🇱",JPY:"🇯🇵",
  CAD:"🇨🇦",AUD:"🇦🇺",NZD:"🇳🇿",CZK:"🇨🇿",HUF:"🇭🇺",ISK:"🇮🇸",TRY:"🇹🇷",INR:"🇮🇳",
  THB:"🇹🇭",MXN:"🇲🇽",SGD:"🇸🇬",HKD:"🇭🇰",KRW:"🇰🇷",ZAR:"🇿🇦",BRL:"🇧🇷",CNY:"🇨🇳",
  TWD:"🇹🇼",MYR:"🇲🇾",PHP:"🇵🇭",IDR:"🇮🇩",BGN:"🇧🇬",RON:"🇷🇴",HRK:"🇭🇷",ILS:"🇮🇱",
  NOK:"🇳🇴",
};

const popular = ["EUR","USD","GBP","SEK","DKK","CHF","PLN","JPY","CAD"];

export default function ValutaContent() {
  const [rates, setRates] = useState<Rate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [amount, setAmount] = useState("1000");
  const [fromCur, setFromCur] = useState("NOK");
  const [toCur, setToCur] = useState("EUR");
  const [search, setSearch] = useState("");
  const [history, setHistory] = useState<HistoricalPoint[]>([]);
  const [historyLoading, setHistoryLoading] = useState(false);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch(
          "https://data.norges-bank.no/api/data/EXR/B..NOK.SP?lastNObservations=1&format=sdmx-json"
        );
        if (!res.ok) throw new Error("Kunne ikke hente kurser");
        const json = await res.json();

        const series = json.data.dataSets[0].series;
        const dims = json.data.structure.dimensions.series;
        const curDim = dims.find((d: { id: string }) => d.id === "BASE_CUR");

        const parsed: Rate[] = [];
        Object.entries(series).forEach(([key, val]: [string, unknown]) => {
          const idx = parseInt(key.split(":")[1]);
          const cur = curDim?.values[idx];
          const obs = (val as { observations: Record<string, [number]> }).observations;
          const obsVal = Object.values(obs)[0]?.[0];
          if (cur && obsVal != null) {
            parsed.push({ currency: cur.id, rate: Number(obsVal), name: cur.name });
          }
        });

        parsed.sort((a, b) => {
          const aP = popular.indexOf(a.currency);
          const bP = popular.indexOf(b.currency);
          if (aP !== -1 && bP !== -1) return aP - bP;
          if (aP !== -1) return -1;
          if (bP !== -1) return 1;
          return a.currency.localeCompare(b.currency);
        });

        setRates(parsed);
      } catch {
        setError("Kunne ikke hente valutakurser. Prøv igjen senere.");
      } finally {
        setLoading(false);
      }
    };
    fetchRates();
  }, []);

  // Fetch historical data for the selected chart currency
  const chartCurrency = fromCur === "NOK" ? toCur : fromCur;

  useEffect(() => {
    if (chartCurrency === "NOK" || !chartCurrency) return;

    const fetchHistory = async () => {
      setHistoryLoading(true);
      try {
        const end = new Date();
        const start = new Date();
        start.setMonth(start.getMonth() - 3);
        const fmt = (d: Date) => d.toISOString().split("T")[0];

        const res = await fetch(
          `https://data.norges-bank.no/api/data/EXR/B.${chartCurrency}.NOK.SP?startPeriod=${fmt(start)}&endPeriod=${fmt(end)}&format=sdmx-json`
        );
        if (!res.ok) {
          setHistory([]);
          return;
        }
        const json = await res.json();

        const series = json.data.dataSets[0].series;
        const timeDim = json.data.structure.dimensions.observation[0];
        const seriesData = Object.values(series)[0] as { observations: Record<string, [number]> } | undefined;

        if (!seriesData) { setHistory([]); return; }

        const points: HistoricalPoint[] = [];
        Object.entries(seriesData.observations).forEach(([key, val]) => {
          const idx = parseInt(key);
          const date = timeDim?.values[idx]?.id;
          const rate = val[0];
          if (date && rate != null) {
            points.push({ date, rate: Number(rate) });
          }
        });

        points.sort((a, b) => a.date.localeCompare(b.date));
        setHistory(points);
      } catch {
        setHistory([]);
      } finally {
        setHistoryLoading(false);
      }
    };
    fetchHistory();
  }, [chartCurrency]);

  const swapCurrencies = () => {
    setFromCur(toCur);
    setToCur(fromCur);
  };

  const convert = () => {
    const amt = parseFloat(amount) || 0;
    if (fromCur === "NOK" && toCur === "NOK") return amt;

    const toRate = rates.find((r) => r.currency === toCur)?.rate || 1;
    const fromRate = rates.find((r) => r.currency === fromCur)?.rate || 1;

    if (fromCur === "NOK") return amt / toRate;
    if (toCur === "NOK") return amt * fromRate;
    return (amt * fromRate) / toRate;
  };

  const allCurrencies = useMemo(
    () => [{ currency: "NOK", rate: 1, name: "Norske kroner" }, ...rates],
    [rates]
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <Spinner size="md" className="mx-auto mb-3" />
          <p className="text-sm text-muted">Henter valutakurser...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-terra/30 bg-white p-6 text-center">
        <p className="text-terra">{error}</p>
      </div>
    );
  }

  const result = convert();
  const filtered = rates.filter(
    (r) =>
      r.currency.toLowerCase().includes(search.toLowerCase()) ||
      r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Converter */}
      <div className="rounded-xl border border-border bg-white p-6">
        <h2 className="mb-4 text-lg font-semibold text-deep">Konverter</h2>

        {/* Beløp */}
        <div className="mb-4">
          <label className="mb-1 block text-xs font-medium text-muted">Beløp</label>
          <input
            type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded-lg border border-border bg-canvas px-4 py-3 font-mono text-sm text-deep focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage/50"
          />
        </div>

        {/* Fra / Swap / Til — same row */}
        <div className="mb-4 grid grid-cols-[1fr_auto_1fr] items-end gap-3">
          <div>
            <label className="mb-1 block text-xs font-medium text-muted">Fra</label>
            <select
              value={fromCur} onChange={(e) => setFromCur(e.target.value)}
              className="w-full rounded-lg border border-border bg-canvas px-4 py-3 text-sm text-deep focus:border-sage focus:outline-none"
            >
              {allCurrencies.map((c) => (
                <option key={c.currency} value={c.currency}>
                  {flags[c.currency] || ""} {c.currency}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={swapCurrencies}
            className="mb-0.5 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-canvas text-muted transition-all hover:border-sage hover:text-sage"
            aria-label="Bytt valutaer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 16V4m0 0L3 8m4-4l4 4" />
              <path d="M17 8v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </button>

          <div>
            <label className="mb-1 block text-xs font-medium text-muted">Til</label>
            <select
              value={toCur} onChange={(e) => setToCur(e.target.value)}
              className="w-full rounded-lg border border-border bg-canvas px-4 py-3 text-sm text-deep focus:border-sage focus:outline-none"
            >
              {allCurrencies.map((c) => (
                <option key={c.currency} value={c.currency}>
                  {flags[c.currency] || ""} {c.currency}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Result */}
        <div className="rounded-lg bg-sage-light p-4 text-center">
          <p className="text-xs text-muted">{amount} {fromCur} =</p>
          <p className="font-mono text-xl font-semibold text-deep">
            {result.toLocaleString("nb-NO", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {toCur}
          </p>
        </div>
      </div>

      {/* Historical chart */}
      {chartCurrency !== "NOK" && (
        <div className="rounded-xl border border-border bg-white p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-deep">
              {chartCurrency}/NOK siste 3 måneder
            </h2>
            {history.length > 1 && (
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm font-semibold text-deep">
                  {history[history.length - 1].rate.toFixed(4)}
                </span>
                {(() => {
                  const first = history[0].rate;
                  const last = history[history.length - 1].rate;
                  const change = ((last - first) / first) * 100;
                  const positive = change >= 0;
                  return (
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${positive ? "bg-sage-bg text-sage" : "bg-sand-bg text-terra"}`}>
                      {positive ? "+" : ""}{change.toFixed(2)}%
                    </span>
                  );
                })()}
              </div>
            )}
          </div>
          {historyLoading ? (
            <div className="flex items-center justify-center py-12">
              <Spinner size="sm" />
            </div>
          ) : history.length > 1 ? (
            <InteractiveChart
              data={history.map((h) => ({ date: h.date, value: h.rate }))}
              color="#4A7C6F"
              valueDecimals={4}
              height={160}
            />
          ) : (
            <p className="py-8 text-center text-sm text-muted">Ingen historisk data tilgjengelig.</p>
          )}
        </div>
      )}

      {/* Rate table */}
      <div className="rounded-xl border border-border bg-white p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-deep">Alle kurser</h2>
          <input
            type="text" value={search} onChange={(e) => setSearch(e.target.value)}
            placeholder="Søk..." className="rounded-lg border border-border bg-canvas px-3 py-1.5 text-xs text-deep focus:border-sage focus:outline-none w-40"
          />
        </div>
        <div className="space-y-1">
          <div className="grid grid-cols-3 text-xs font-semibold text-muted py-2 border-b border-border">
            <span>Valuta</span><span>Navn</span><span className="text-right">Kurs (NOK)</span>
          </div>
          {filtered.map((r) => (
            <div key={r.currency} className="grid grid-cols-3 text-sm py-2 border-b border-border/50 last:border-0">
              <span className="font-medium text-deep">{flags[r.currency] || ""} {r.currency}</span>
              <span className="text-muted text-xs truncate">{r.name}</span>
              <span className="font-mono text-right text-deep">{r.rate.toFixed(4)}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted">Kilde: Norges Bank. Kursene oppdateres daglig.</p>
      </div>
    </div>
  );
}
