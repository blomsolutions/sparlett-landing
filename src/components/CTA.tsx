"use client";

import { useEffect, useRef, useState } from "react";

export default function CTA() {
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
    <section id="start" className="relative overflow-hidden py-24" ref={ref}>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-full max-w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <div
          className={`transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            Klar for å ta kontroll over{" "}
            <span className="gradient-text">økonomien din?</span>
          </h2>
          <p className="mb-10 text-lg text-muted">
            Søk om beta-tilgang i dag og få 1 års gratis abonnement
            når vi lanserer. Begrenset antall plasser.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/beta"
              className="group relative overflow-hidden rounded-xl bg-accent px-10 py-4 text-center font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/25"
            >
              Søk beta-tilgang &rarr;
            </a>
          </div>

          <p className="mt-6 text-sm text-muted">
            Begrenset antall plasser. 1 års gratis abonnement for beta-testere.
          </p>
        </div>
      </div>
    </section>
  );
}
