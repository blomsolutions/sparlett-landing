"use client";

import { useEffect, useState } from "react";
import Ring3 from "@/components/Ring3";

const demoMessages = [
  "Du brukte 12 400 kr på mat i februar. Det er 18% mer enn gjennomsnittet ditt.",
  "Takeaway utgjør 4 200 kr av matbudsjettet. Kutt to bestillinger per uke og spar 1 680 kr/mnd.",
  "Sparemålet «Feriepotten» er 68% fullført. Du ligger 3 uker foran planen.",
  "Strømavtalen din er 280 kr over markedspris. Bytt leverandør og spar 3 360 kr i året.",
  "Abonnementet på treningssenter har ikke blitt brukt på 47 dager.",
];

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
          { label: "FORBRUK", value: "28 400 kr", bg: "bg-terra-bg", color: "text-terra" },
          { label: "SPART", value: "4 200 kr", bg: "bg-sage-bg", color: "text-sage" },
          { label: "MÅL", value: "68%", bg: "bg-sage-dark-bg", color: "text-sage-dark" },
        ].map((s) => (
          <div key={s.label} className={`rounded-lg ${s.bg} p-3`}>
            <div className="mb-1 flex items-center gap-1.5">
              <Ring3 size={10} strokeWidth={1} state={1} />
              <span className={`text-[8px] font-semibold tracking-wide ${s.color}`}>{s.label}</span>
            </div>
            <span className="font-mono text-sm font-semibold text-deep">{s.value}</span>
          </div>
        ))}
      </div>

      {/* Message feed */}
      <div className="space-y-3">
        {demoMessages.slice(0, visibleCount).map((msg, i) => (
          <div
            key={i}
            className="rounded-lg bg-sand-bg px-4 py-3"
            style={{ animation: "slide-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}
          >
            <div className="mb-1 flex items-center gap-1.5">
              <Ring3 size={10} strokeWidth={1} state={1} />
              <span className="text-[9px] font-semibold text-sand">
                Innsikt
              </span>
            </div>
            <p className="text-sm text-deep leading-relaxed">
              {msg}<span className="text-sage">.</span>
            </p>
          </div>
        ))}

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
