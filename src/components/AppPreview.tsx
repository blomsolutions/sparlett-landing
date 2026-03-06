"use client";

import { useEffect, useState } from "react";
import Ring3 from "./Ring3";
import Curve from "./Curve";

const chatMessages = [
  { role: "platform" as const, text: "Feriepotten er 68% full. Du ligger foran planen." },
  { role: "insight" as const, text: "Du bruker 23% mer på mat i helger. Vil du se detaljene?" },
  { role: "user" as const, text: "Ja, vis meg mer." },
  { role: "insight" as const, text: "Takeaway øker på fredager. Spar 1 200 kr/mnd ved å kutte to bestillinger." },
];

export default function AppPreview() {
  const [visibleMessages, setVisibleMessages] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleMessages((prev) => {
        if (prev >= chatMessages.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 1400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-2xl border border-border bg-white p-2 shadow-sm">
      {/* Window chrome */}
      <div className="mb-2 flex items-center gap-2 px-3 py-2">
        <div className="h-2.5 w-2.5 rounded-full bg-terra/40" />
        <div className="h-2.5 w-2.5 rounded-full bg-sand/40" />
        <div className="h-2.5 w-2.5 rounded-full bg-sage/40" />
        <div className="ml-4 flex-1 rounded-md bg-canvas px-4 py-1 text-center text-xs text-muted">
          app.sparlett.no
        </div>
      </div>

      {/* App content */}
      <div className="rounded-xl bg-canvas p-3 sm:p-5">
        <div className="grid gap-5 md:grid-cols-2">
          {/* Left: Stats */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Ring3 size={16} strokeWidth={1.6} />
                <h3 className="text-sm font-semibold text-deep">Oversikt</h3>
              </div>
              <span className="font-mono text-xs text-muted">Mars 2026</span>
            </div>

            <div className="rounded-lg bg-white p-4 border border-border">
              <p className="font-mono text-[9px] uppercase tracking-wide text-muted">Spart denne måneden</p>
              <p className="mt-1 font-mono text-2xl font-semibold text-deep">4 200 kr</p>
              <Curve width={160} height={6} strokeWidth={1.2} className="mt-2" />
              <p className="mt-2 text-xs text-muted">68% av målet</p>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                { n: "INNSIKT", c: "sand", bg: "bg-sand-bg", v: "3 funn", st: 1 },
                { n: "SPARING", c: "sage", bg: "bg-sage-bg", v: "47 200 kr", st: 2 },
                { n: "MÅL", c: "sageDark", bg: "bg-sage-dark-bg", v: "Ferie", st: 3 },
              ].map((s) => (
                <div key={s.n} className={`rounded-md ${s.bg} p-2.5`}>
                  <div className="flex items-center gap-1 mb-1">
                    <Ring3 size={8} strokeWidth={0.8} state={s.st} />
                    <span className={`text-[7px] font-semibold tracking-wide text-${s.c}`}>{s.n}</span>
                  </div>
                  <div className={`text-xs font-semibold text-deep ${s.v.includes("kr") ? "font-mono" : ""}`}>
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Insight Feed */}
          <div className="flex flex-col rounded-lg border border-border bg-white p-4">
            <div className="mb-3 flex items-center gap-2">
              <Ring3 size={14} strokeWidth={1.4} state={1} />
              <span className="text-xs font-semibold text-sand">Innsikt</span>
            </div>

            <div className="flex-1 space-y-2.5 overflow-hidden">
              {chatMessages.slice(0, visibleMessages).map((msg, i) => (
                <div
                  key={i}
                  className={`animate-fade-in-up flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg px-3 py-2 text-xs ${
                      msg.role === "user"
                        ? "bg-sage-light text-deep"
                        : msg.role === "insight"
                          ? "bg-sand-bg text-deep"
                          : "bg-canvas text-deep border border-border"
                    }`}
                  >
                    {msg.role !== "user" && (
                      <div className="flex items-center gap-1 mb-0.5">
                        <Ring3 size={8} strokeWidth={0.8} state={msg.role === "insight" ? 1 : 0} />
                        <span className={`text-[8px] font-semibold ${msg.role === "insight" ? "text-sand" : "text-sage"}`}>
                          {msg.role === "insight" ? "Innsikt" : "Sparlett"}
                        </span>
                      </div>
                    )}
                    {msg.text}<span className="text-sage">.</span>
                  </div>
                </div>
              ))}

              {visibleMessages < chatMessages.length && (
                <div className="flex items-center gap-1 px-3 py-2">
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-sand/50" />
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-sand/50" style={{ animationDelay: "0.2s" }} />
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-sand/50" style={{ animationDelay: "0.4s" }} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
