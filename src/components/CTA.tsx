"use client";

import { useEffect, useRef, useState } from "react";
import Ring3 from "./Ring3";
import Curve from "./Curve";
import BgFill from "./BgFill";

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
    <section className="relative py-24" ref={ref}>
      <div className="mx-auto max-w-3xl px-6">
        <div
          className={`rounded-2xl bg-deep p-10 sm:p-14 relative overflow-hidden text-center transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <BgFill />
          <div className="relative">
            <Ring3 size={44} strokeWidth={3.5} className="mx-auto mb-5" />
            <h2 className="mb-4 text-3xl sm:text-4xl font-bold tracking-tight text-canvas md:text-5xl">
              Klar for å ta{" "}
              <span className="text-sage">kontroll</span>
              <span className="text-sage">?</span>
            </h2>
            <Curve width={180} height={10} strokeWidth={1.5} className="mx-auto mb-6" />
            <p className="mb-8 text-base sm:text-lg text-muted">
              Søk om beta-tilgang i dag og få 1 års gratis abonnement
              når vi lanserer<span className="text-sage">.</span>
            </p>

            <a
              href="/beta"
              className="inline-block rounded-lg bg-sage px-10 py-4 font-semibold text-white transition-all hover:bg-sage-dark"
            >
              Kom i gang
            </a>

            <p className="mt-5 text-sm text-muted">
              Begrenset antall plasser<span className="text-sage">.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
