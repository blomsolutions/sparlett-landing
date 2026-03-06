"use client";

import { useEffect, useState } from "react";
import Ring3 from "@/components/Ring3";

type Sector = "innsikt" | "sparing" | "maal" | "varsel";

const demoMessages: { sector: Sector; text: string }[] = [
  {
    sector: "innsikt",
    text: "Du brukte 12 400 kr på mat i februar. Det er 18% mer enn gjennomsnittet ditt.",
  },
  {
    sector: "sparing",
    text: "Takeaway utgjør 4 200 kr av matbudsjettet. Kutt to bestillinger per uke og spar 1 680 kr/mnd.",
  },
  {
    sector: "maal",
    text: "Sparemålet «Feriepotten» er 68% fullført. Du ligger 3 uker foran planen.",
  },
  {
    sector: "varsel",
    text: "Strømavtalen din er 280 kr over markedspris. Bytt leverandør og spar 3 360 kr i året.",
  },
  {
    sector: "varsel",
    text: "Abonnementet på treningssenter har ikke blitt brukt på 47 dager.",
  },
];

const sectorConfig = {
  innsikt: { label: "Innsikt", color: "text-sand", bg: "bg-sand-bg", state: 1 },
  sparing: { label: "Sparing", color: "text-sage", bg: "bg-sage-bg", state: 2 },
  maal: { label: "Mål", color: "text-sage-dark", bg: "bg-sage-dark-bg", state: 3 },
  varsel: { label: "Varsel", color: "text-terra", bg: "bg-terra-bg", state: 0 },
};

export default function InnsiktDemo() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= demoMessages.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-2xl border border-border bg-white p-5 sm:p-6">
      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <Ring3 size={20} strokeWidth={2} />
        <span className="text-sm font-semibold text-deep">Sparlett Innsikt</span>
        <span className="ml-auto font-mono text-xs text-muted">Februar 2026</span>
      </div>

      {/* Stats row */}
      <div className="mb-5 grid grid-cols-3 gap-3">
        {[
          { label: "FORBRUK", value: "28 400 kr", bg: "bg-terra-bg", color: "text-terra", state: 0 },
          { label: "SPART", value: "4 200 kr", bg: "bg-sage-bg", color: "text-sage", state: 2 },
          { label: "MÅL", value: "68%", bg: "bg-sage-dark-bg", color: "text-sage-dark", state: 3 },
        ].map((s) => (
          <div key={s.label} className={`rounded-lg p-3 ${s.bg}`}>
            <div className="mb-1 flex items-center gap-1.5">
              <Ring3 size={10} strokeWidth={1} state={s.state} />
              <span className={`text-[8px] font-semibold tracking-wide ${s.color}`}>{s.label}</span>
            </div>
            <span className="font-mono text-sm font-semibold text-deep">{s.value}</span>
          </div>
        ))}
      </div>

      {/* Message feed */}
      <div className="space-y-3">
        {demoMessages.slice(0, visibleCount).map((msg, i) => {
          const cfg = sectorConfig[msg.sector];
          return (
            <div
              key={i}
              className={`animate-fade-in-up rounded-lg px-4 py-3 ${cfg.bg}`}
            >
              <div className="mb-1 flex items-center gap-1.5">
                <Ring3 size={10} strokeWidth={1} state={cfg.state} />
                <span className={`text-[9px] font-semibold ${cfg.color}`}>
                  {cfg.label}
                </span>
              </div>
              <p className="text-sm text-deep leading-relaxed">
                {msg.text}<span className="text-sage">.</span>
              </p>
            </div>
          );
        })}

        {visibleCount < demoMessages.length && (
          <div className="flex items-center gap-1.5 px-4 py-3">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-sage/50" />
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-sage/50" style={{ animationDelay: "0.2s" }} />
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-sage/50" style={{ animationDelay: "0.4s" }} />
          </div>
        )}
      </div>
    </div>
  );
}
