"use client";

import { useState, useEffect, useCallback } from "react";
import Spinner from "@/components/Spinner";
import InteractiveChart from "@/components/InteractiveChart";

interface QuoteData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  currency: string;
  marketState: string;
}

interface ChartPoint {
  date: string;
  close: number;
}

function QuoteRow({
  q,
  onSelect,
  selected,
}: {
  q: QuoteData;
  onSelect: (symbol: string) => void;
  selected: boolean;
}) {
  const positive = q.change >= 0;
  return (
    <button
      onClick={() => onSelect(q.symbol)}
      className={`flex w-full items-center gap-4 border-b border-border/50 px-4 py-3 text-left transition-colors hover:bg-sage-light/30 ${selected ? "bg-sage-light/40" : ""}`}
    >
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-muted">
            {q.symbol.replace(".OL", "")}
          </span>
          {q.marketState === "REGULAR" && (
            <span className="h-1.5 w-1.5 rounded-full bg-sage" />
          )}
        </div>
        <div className="truncate text-sm font-medium text-deep">{q.name}</div>
      </div>
      <div className="text-right">
        <div className="font-mono text-sm font-semibold text-deep">
          {q.price.toLocaleString("nb-NO", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </div>
        <div
          className={`font-mono text-xs ${positive ? "text-sage" : "text-terra"}`}
        >
          {positive ? "+" : ""}
          {q.changePercent.toFixed(2)}%
        </div>
      </div>
    </button>
  );
}

function DetailChartWrapper({ data, symbol }: { data: ChartPoint[]; symbol: string }) {
  if (data.length < 2)
    return (
      <div className="flex h-48 items-center justify-center">
        <Spinner size="sm" />
      </div>
    );

  const positive = data[data.length - 1].close >= data[0].close;
  const color = positive ? "#4A7C6F" : "#B87D6A";

  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <span className="font-mono text-xs font-semibold text-deep">
          {symbol.replace(".OL", "")}
        </span>
        <span className="text-xs text-muted">siste 3 måneder</span>
      </div>
      <InteractiveChart
        data={data.map((d) => ({ date: d.date, value: d.close }))}
        color={color}
        valueDecimals={2}
      />
    </div>
  );
}

const INITIAL_OSLO = 15;
const INITIAL_GLOBAL = 10;

export default function BorsClient({
  osloQuotes,
  globalQuotes,
}: {
  osloQuotes: QuoteData[];
  globalQuotes: QuoteData[];
}) {
  const [tab, setTab] = useState<"oslo" | "global">("oslo");
  const [selected, setSelected] = useState<string>(
    osloQuotes[0]?.symbol ?? ""
  );
  const [chartData, setChartData] = useState<Record<string, ChartPoint[]>>({});
  const [loadingChart, setLoadingChart] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const quotes = tab === "oslo" ? osloQuotes : globalQuotes;
  const initialCount = tab === "oslo" ? INITIAL_OSLO : INITIAL_GLOBAL;
  const visibleQuotes = showAll ? quotes : quotes.slice(0, initialCount);
  const hasMore = quotes.length > initialCount && !showAll;

  const selectedQuote = [...osloQuotes, ...globalQuotes].find(
    (q) => q.symbol === selected
  );

  const fetchChart = useCallback(async (symbol: string) => {
    setLoadingChart(true);
    try {
      const res = await fetch(`/api/chart?symbol=${encodeURIComponent(symbol)}`);
      if (res.ok) {
        const data = await res.json();
        setChartData((prev) => ({ ...prev, [symbol]: data.quotes }));
      }
    } catch {
      // ignore
    } finally {
      setLoadingChart(false);
    }
  }, []);

  // Auto-load chart whenever selected changes
  useEffect(() => {
    if (selected && !chartData[selected]) {
      fetchChart(selected);
    }
  }, [selected, chartData, fetchChart]);

  const handleSelect = (symbol: string) => {
    setSelected(symbol);
  };

  const handleTabChange = (newTab: "oslo" | "global") => {
    setTab(newTab);
    setShowAll(false);
    const firstQuote = newTab === "oslo" ? osloQuotes[0] : globalQuotes[0];
    if (firstQuote) setSelected(firstQuote.symbol);
  };

  return (
    <section className="pb-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Tabs */}
        <div className="mb-6 flex gap-2">
          <button
            onClick={() => handleTabChange("oslo")}
            className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${tab === "oslo" ? "bg-sage text-white" : "bg-sage-light text-sage hover:bg-sage-bg"}`}
          >
            Oslo Børs
          </button>
          <button
            onClick={() => handleTabChange("global")}
            className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${tab === "global" ? "bg-sage text-white" : "bg-sage-light text-sage hover:bg-sage-bg"}`}
          >
            Internasjonalt
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Quote list */}
          <div className="overflow-hidden rounded-xl border border-border bg-white lg:col-span-2">
            <div className="border-b border-border bg-canvas/50 px-4 py-3">
              <h3 className="text-sm font-semibold text-deep">
                {tab === "oslo" ? "Oslo Børs" : "Internasjonalt"}
              </h3>
              <p className="text-xs text-muted">
                {quotes.length} aksjer
              </p>
            </div>
            <div className="max-h-[480px] overflow-y-auto">
              {visibleQuotes.map((q) => (
                <QuoteRow
                  key={q.symbol}
                  q={q}
                  onSelect={handleSelect}
                  selected={q.symbol === selected}
                />
              ))}
              {hasMore && (
                <button
                  onClick={() => setShowAll(true)}
                  className="w-full border-t border-border/50 px-4 py-3 text-center text-sm font-semibold text-sage transition-colors hover:bg-sage-light/30"
                >
                  Vis {quotes.length - initialCount} flere aksjer
                </button>
              )}
              {quotes.length === 0 && (
                <div className="px-4 py-8 text-center text-sm text-muted">
                  Kunne ikke hente kurser akkurat nå.
                </div>
              )}
            </div>
          </div>

          {/* Detail panel */}
          <div className="rounded-xl border border-border bg-white p-6 lg:col-span-3">
            {selectedQuote ? (
              <>
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-deep">
                      {selectedQuote.name}
                    </h3>
                    <span className="font-mono text-xs text-muted">
                      {selectedQuote.symbol}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-2xl font-bold text-deep">
                      {selectedQuote.price.toLocaleString("nb-NO", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <span
                        className={`font-mono text-sm ${selectedQuote.change >= 0 ? "text-sage" : "text-terra"}`}
                      >
                        {selectedQuote.change >= 0 ? "+" : ""}
                        {selectedQuote.change.toFixed(2)}
                      </span>
                      <span
                        className={`rounded-md px-2 py-0.5 text-[11px] font-semibold ${selectedQuote.changePercent >= 0 ? "bg-sage-bg text-sage" : "bg-terra-bg text-terra"}`}
                      >
                        {selectedQuote.changePercent >= 0 ? "+" : ""}
                        {selectedQuote.changePercent.toFixed(2)}%
                      </span>
                    </div>
                    <span className="text-xs text-muted">
                      {selectedQuote.currency}
                    </span>
                  </div>
                </div>

                {/* Chart */}
                <div className="rounded-lg border border-border/50 bg-canvas/30 p-4">
                  {loadingChart && !chartData[selected] ? (
                    <div className="flex h-48 items-center justify-center">
                      <Spinner size="md" />
                    </div>
                  ) : chartData[selected] ? (
                    <DetailChartWrapper
                      data={chartData[selected]}
                      symbol={selected}
                    />
                  ) : (
                    <div className="flex h-48 items-center justify-center text-sm text-muted">
                      Velg en aksje for å se graf
                    </div>
                  )}
                </div>

                {/* Market info */}
                <div className="mt-4 flex items-center gap-3">
                  {selectedQuote.marketState === "REGULAR" ? (
                    <span className="flex items-center gap-1.5 text-xs text-sage">
                      <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                      Markedet er åpent
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-xs text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-muted" />
                      Markedet er stengt
                    </span>
                  )}
                  <span className="text-xs text-muted">
                    Oppdateres hvert 5. minutt
                  </span>
                </div>
              </>
            ) : (
              <div className="flex h-64 items-center justify-center text-sm text-muted">
                Velg en aksje fra listen
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
