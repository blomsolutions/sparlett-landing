"use client";

import { useEffect, useState, useMemo } from "react";
import Spinner from "@/components/Spinner";

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

function RateChart({ data, color }: { data: HistoricalPoint[]; color: string }) {
  if (data.length < 2) return null;

  const rates = data.map((d) => d.rate);
  const min = Math.min(...rates);
  const max = Math.max(...rates);
  const range = max - min || 1;
  const w = 600;
  const h = 160;
  const pad = 20;

  const points = data.map((d, i) => {
    const x = pad + (i / (data.length - 1)) * (w - pad * 2);
    const y = h - pad - ((d.rate - min) / range) * (h - pad * 2);
    return { x, y, ...d };
  });

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${h - pad} L ${points[0].x} ${h - pad} Z`;

  const gridLines = 4;
  const gridVals = Array.from({ length: gridLines }, (_, i) => min + (range / (gridLines - 1)) * i);

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full" preserveAspectRatio="xMidYMid meet">
      {/* Grid lines */}
      {gridVals.map((val, i) => {
        const y = h - pad - ((val - min) / range) * (h - pad * 2);
        return (
          <g key={i}>
            <line x1={pad} y1={y} x2={w - pad} y2={y} stroke="#D4D0C8" strokeWidth={0.5} strokeDasharray="4 4" />
            <text x={pad - 4} y={y + 3} fontSize={8} fill="#8B9D97" textAnchor="end" fontFamily="JetBrains Mono, monospace">
              {val.toFixed(2)}
            </text>
          </g>
        );
      })}

      {/* Date labels */}
      {[0, Math.floor(data.length / 2), data.length - 1].map((idx) => {
        const p = points[idx];
        if (!p) return null;
        const label = data[idx].date.slice(5);
        return (
          <text key={idx} x={p.x} y={h - 4} fontSize={8} fill="#8B9D97" textAnchor="middle" fontFamily="JetBrains Mono, monospace">
            {label}
          </text>
        );
      })}

      {/* Area fill */}
      <path d={areaPath} fill={color} opacity={0.08} />

      {/* Line */}
      <path d={linePath} fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />

      {/* End dot */}
      <circle cx={points[points.length - 1].x} cy={points[points.length - 1].y} r={3.5} fill={color} />
    </svg>
  );
}

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
        <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr]">
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-xs font-medium text-muted">Beløp</label>
              <input
                type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                className="w-full rounded-lg border border-border bg-canvas px-4 py-3 font-mono text-sm text-deep focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage/50"
              />
            </div>
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
          </div>

          {/* Swap button */}
          <div className="flex items-center justify-center">
            <button
              onClick={swapCurrencies}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-canvas text-muted transition-all hover:border-sage hover:text-sage"
              aria-label="Bytt valutaer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 16V4m0 0L3 8m4-4l4 4" />
                <path d="M17 8v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
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
            <div className="rounded-lg bg-sage-light p-4 text-center">
              <p className="text-xs text-muted">{amount} {fromCur} =</p>
              <p className="font-mono text-xl font-semibold text-deep">
                {result.toLocaleString("nb-NO", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {toCur}
              </p>
            </div>
          </div>
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
            <RateChart data={history} color="#4A7C6F" />
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
