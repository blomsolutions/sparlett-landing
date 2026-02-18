"use client";

import { useEffect, useState } from "react";
import AppPreview from "./AppPreview";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-ai/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pb-20 pt-20 lg:pt-32">
        {/* Badge */}
        <div
          className={`mb-8 flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Gratis i beta — prøv nå
        </div>

        {/* Main headline */}
        <h1
          className={`mb-6 max-w-4xl text-center text-5xl font-bold leading-tight tracking-tight transition-all delay-100 duration-700 md:text-6xl lg:text-7xl ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          Sparingen din,{" "}
          <span className="gradient-text">endelig enkel.</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`mb-10 max-w-2xl text-center text-lg text-muted transition-all delay-200 duration-700 md:text-xl ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          Sparlett.no er din personlige AI-assistent som gjør kompleks økonomi
          enkel, visuell og motiverende — uten at du trenger å være ekspert.
        </p>

        {/* CTA Buttons */}
        <div
          className={`mb-8 flex flex-col gap-4 sm:flex-row transition-all delay-300 duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <a
            href="https://app.sparlett.no"
            className="group relative overflow-hidden rounded-xl bg-accent px-8 py-4 text-center font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
          >
            <span className="relative z-10">Start gratis &rarr;</span>
          </a>
          <a
            href="#funksjoner"
            className="rounded-xl border border-border-light px-8 py-4 text-center font-semibold text-white transition-all hover:border-muted hover:bg-surface"
          >
            Se hvordan det fungerer
          </a>
        </div>

        {/* Coming soon badges */}
        <div
          className={`mb-16 flex flex-wrap items-center justify-center gap-3 transition-all delay-400 duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <div className="flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1.5 text-xs text-muted">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
            App Store — kommer snart
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1.5 text-xs text-muted">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
            </svg>
            Bankintegrasjon — kommer snart
          </div>
        </div>

        {/* App Preview */}
        <div
          className={`w-full max-w-4xl transition-all delay-500 duration-1000 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <AppPreview />
        </div>
      </div>
    </section>
  );
}
