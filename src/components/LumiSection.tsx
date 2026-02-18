"use client";

import { useEffect, useRef, useState } from "react";

export default function LumiSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="lumi" className="relative py-24" ref={ref}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-ai/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Orb + Visual */}
          <div
            className={`flex items-center justify-center transition-all duration-1000 ${visible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
          >
            <div className="relative">
              {/* Outer glow rings */}
              <div className="absolute inset-0 m-auto h-64 w-64 animate-pulse rounded-full bg-ai/10 blur-xl" />
              <div
                className="absolute inset-0 m-auto h-48 w-48 animate-pulse rounded-full bg-ai/20 blur-lg"
                style={{ animationDelay: "0.5s" }}
              />

              {/* Main orb */}
              <div className="relative flex h-64 w-64 items-center justify-center">
                <div className="animate-orb-pulse h-32 w-32 rounded-full bg-gradient-to-br from-ai via-ai-light to-purple-300 shadow-2xl shadow-ai/50" />

                {/* Floating data points */}
                <div className="absolute -right-4 top-8 animate-float rounded-xl border border-ai/20 bg-surface/90 px-3 py-2 backdrop-blur-sm">
                  <p className="text-xs text-ai-light">Matbudsjett</p>
                  <p className="text-sm font-bold text-white">-12% denne uka</p>
                </div>

                <div
                  className="animate-float absolute -left-4 bottom-12 rounded-xl border border-accent/20 bg-surface/90 px-3 py-2 backdrop-blur-sm"
                  style={{ animationDelay: "2s" }}
                >
                  <p className="text-xs text-accent">Sparemål</p>
                  <p className="text-sm font-bold text-white">68% fullført</p>
                </div>

                <div
                  className="animate-float absolute -top-2 left-8 rounded-xl border border-green-500/20 bg-surface/90 px-3 py-2 backdrop-blur-sm"
                  style={{ animationDelay: "4s" }}
                >
                  <p className="text-xs text-green-400">Trend</p>
                  <p className="text-sm font-bold text-white">+kr 420/mnd</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text content */}
          <div
            className={`transition-all duration-1000 ${visible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-ai/20 bg-ai/10 px-3 py-1">
              <div className="h-2 w-2 animate-pulse rounded-full bg-ai-light" />
              <span className="text-xs font-medium text-ai-light">
                AI-assistent
              </span>
            </div>

            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Møt{" "}
              <span className="gradient-text-ai">Lumi</span>
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-muted">
              Lumi er din personlige økonomi-AI. Hun analyserer forbruket ditt,
              finner mønstre du ikke ser selv, og gir deg konkrete forslag —
              tilpasset akkurat deg.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Analyserer automatisk",
                  desc: "Lumi ser på transaksjonene dine og finner sparemuligheter i sanntid.",
                },
                {
                  title: "Personlige råd",
                  desc: "Ingen generiske tips. Lumi kjenner vanene dine og tilpasser forslagene.",
                },
                {
                  title: "Lærer over tid",
                  desc: "Jo lenger du bruker Sparlett.no, jo smartere blir Lumi.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-border bg-surface/50 p-4"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ai/20">
                    <svg
                      className="h-3.5 w-3.5 text-ai-light"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
