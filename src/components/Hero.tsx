"use client";

import { useEffect, useState } from "react";
import Ring3 from "./Ring3";
import Curve from "./Curve";
import BgFill from "./BgFill";
import AppPreview from "./AppPreview";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [ringState, setRingState] = useState(0);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setRingState((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pb-20 pt-16 lg:pt-28">
        {/* Hero banner */}
        <div
          className={`mb-10 w-full max-w-3xl rounded-2xl bg-deep p-10 sm:p-14 relative overflow-hidden ${mounted ? "animate-slide-up" : "scale-96 translate-y-8"}`}
        >
          <BgFill />
          <div className="relative flex flex-col items-center text-center">
            <Ring3 size={56} strokeWidth={4.5} state={ringState} className="mb-4" />
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl font-bold text-canvas leading-tight tracking-tight ${mounted ? "animate-clip-left" : ""}`}
              style={{ animationDelay: "0.2s" }}
            >
              Din økonomi,{" "}
              <span className="text-sage">håndtert</span>
              <span className="text-sage">.</span>
            </h1>
            <div className={`mt-2 ${mounted ? "animate-clip-left" : ""}`} style={{ animationDelay: "0.35s" }}>
              <Curve width={240} height={14} strokeWidth={2} />
            </div>
            <p
              className={`mt-6 max-w-lg text-base sm:text-lg text-muted leading-relaxed ${mounted ? "animate-slide-in" : ""}`}
              style={{ animationDelay: "0.4s" }}
            >
              Sparlett gir deg innsikt og kontroll — og jobber for deg selv når du ikke tenker på det<span className="text-sage">.</span>
            </p>
          </div>
        </div>

        {/* Beta CTA module */}
        <div
          className={`mb-14 w-full max-w-2xl rounded-2xl border border-sage/20 bg-white p-8 sm:p-10 text-center ${mounted ? "animate-pop-in" : "scale-85"}`}
          style={{ animationDelay: "0.3s" }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-sage-bg px-2.5 py-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage" />
            </span>
            <span className="text-[11px] font-semibold text-sage">Beta-program</span>
          </div>
          <h3 className="mb-2 text-xl font-bold text-deep sm:text-2xl">
            Vi bygger noe nytt<span className="text-sage">.</span>
          </h3>
          <p className="mb-6 text-sm text-muted leading-relaxed">
            Sparlett er i lukket beta. Søk om tilgang og bli blant de første som får prøve plattformen<span className="text-sage">.</span>
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="/beta"
              className="rounded-lg bg-sage px-8 py-3.5 font-semibold text-white transition-all hover:bg-sage-dark hover:shadow-lg"
            >
              Søk beta-tilgang
            </a>
            <a
              href="/interesse"
              className="rounded-lg border-[1.5px] border-sage/40 px-8 py-3.5 font-semibold text-sage transition-all hover:bg-sage-light hover:border-sage"
            >
              Meld interesse
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
              App Store — kommer snart
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
              </svg>
              Bankintegrasjon — kommer snart
            </span>
          </div>
        </div>

        {/* App Preview */}
        <div
          className={`w-full max-w-4xl ${mounted ? "animate-slide-up" : "translate-y-12 scale-96"}`}
          style={{ animationDelay: "0.5s" }}
        >
          <AppPreview />
        </div>
      </div>
    </section>
  );
}
