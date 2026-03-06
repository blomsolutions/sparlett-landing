"use client";

import { useEffect, useRef, useState } from "react";
import Ring3 from "./Ring3";
import Curve from "./Curve";

export default function InsightSection() {
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
    <section id="innsikt" className="relative py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Visual */}
          <div
            className={`transition-all duration-1000 ${visible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
          >
            <div className="relative flex flex-col items-center gap-5">
              {/* Main ring */}
              <div className="relative">
                <Ring3 size={200} strokeWidth={16} state={1} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-2xl font-semibold text-deep">47 200 kr</span>
                </div>
              </div>

              {/* Floating insight cards */}
              <div className="flex flex-wrap justify-center gap-3">
                <div className="animate-float rounded-lg border border-sand/20 bg-sand-bg px-3 py-2">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Ring3 size={10} strokeWidth={1} state={1} />
                    <span className="text-[9px] font-semibold text-sand">Innsikt</span>
                  </div>
                  <p className="text-xs text-deep">Matbudsjett -12% denne uka</p>
                </div>

                <div
                  className="animate-float rounded-lg border border-sage/20 bg-sage-bg px-3 py-2"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <Ring3 size={10} strokeWidth={1} state={2} />
                    <span className="text-[9px] font-semibold text-sage">Sparing</span>
                  </div>
                  <p className="text-xs text-deep">Sparemål 68% fullført</p>
                </div>

                <div
                  className="animate-float rounded-lg border border-sage-dark/20 bg-sage-dark-bg px-3 py-2"
                  style={{ animationDelay: "4s" }}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <Ring3 size={10} strokeWidth={1} state={3} />
                    <span className="text-[9px] font-semibold text-sage-dark">Mål</span>
                  </div>
                  <p className="text-xs text-deep">Feriepotten: 10 200 kr</p>
                </div>
              </div>

              <Curve width={280} height={12} strokeWidth={1.8} />
            </div>
          </div>

          {/* Right: Text content */}
          <div
            className={`transition-all duration-1000 ${visible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-sand-bg px-2.5 py-1">
              <Ring3 size={12} strokeWidth={1.2} state={1} />
              <span className="text-[11px] font-semibold text-sand">
                Innsikt
              </span>
            </div>

            <h2 className="mb-6 text-3xl sm:text-4xl font-bold tracking-tight md:text-5xl">
              Se alt. Forstå alt.{" "}
              <span className="text-sage">Spar lett</span>
              <span className="text-sage">.</span>
            </h2>

            <p className="mb-8 text-base sm:text-lg leading-relaxed text-muted">
              Vi finner mønstre du ikke ser selv og gir deg konkrete forslag — tilpasset akkurat deg. Ingen generiske tips, bare data som betyr noe<span className="text-sage">.</span>
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Analyserer automatisk",
                  desc: "Vi ser på transaksjonene dine og finner sparemuligheter i sanntid.",
                  color: "sand",
                },
                {
                  title: "Personlige råd",
                  desc: "Tilpassede forslag basert på dine faktiske vaner og mål.",
                  color: "sage",
                },
                {
                  title: "Lærer over tid",
                  desc: "Jo lenger du bruker Sparlett, jo bedre blir innsikten.",
                  color: "sageDark",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-border bg-white p-4"
                >
                  <div className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                    item.color === "sand" ? "bg-sand-bg" : item.color === "sage" ? "bg-sage-bg" : "bg-sage-dark-bg"
                  }`}>
                    <svg
                      className={`h-3.5 w-3.5 ${
                        item.color === "sand" ? "text-sand" : item.color === "sage" ? "text-sage" : "text-sage-dark"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep">{item.title}</h4>
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
