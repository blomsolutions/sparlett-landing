"use client";

import { useEffect, useRef, useState } from "react";
import Ring3 from "./Ring3";

const betaFeatures = [
  "Full innsikt og analyse",
  "Ubegrensede sparemål",
  "Sanntids forbruksoversikt",
  "Avansert trendanalyse",
  "Tilpassede smarte varsler",
  "Visuell økonomioversikt",
];

const upcoming = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "App Store",
    description: "iOS- og Android-appen er under utvikling.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    ),
    title: "Bankintegrasjon",
    description: "Koble banken din direkte for automatisk import av transaksjoner.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
    title: "Prismodell",
    description: "Vi jobber med en rettferdig prismodell. Beta-testere får 1 år gratis ved lansering.",
  },
];

export default function Pricing() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="priser" className="relative py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2
            className={`mb-4 text-3xl sm:text-4xl font-bold tracking-tight transition-all duration-700 md:text-5xl ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            Test gratis<span className="text-sage">.</span>{" "}
            <span className="text-sage">Få 1 år på oss</span>
            <span className="text-sage">.</span>
          </h2>
          <p
            className={`mx-auto max-w-xl text-base sm:text-lg text-muted transition-all delay-100 duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            Søk om beta-tilgang og test Sparlett gratis. Beta-testere
            får 1 års gratis abonnement når vi lanserer.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Beta card */}
          <div
            className={`relative rounded-2xl border border-sage/40 bg-white p-8 shadow-sm transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="absolute -top-3 left-6 flex items-center gap-2 rounded-md bg-sage-bg px-2.5 py-1 text-[11px] font-semibold text-sage">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage" />
              </span>
              Beta-program
            </div>

            <div className="mt-2 flex items-center gap-3">
              <Ring3 size={24} strokeWidth={2} />
              <h3 className="text-2xl font-bold text-deep">Sparlett Beta</h3>
            </div>
            <p className="mt-2 text-muted">Alt du trenger for å ta kontroll over økonomien. Ingen begrensninger.</p>

            <div className="mt-6 mb-6">
              <span className="text-4xl font-bold text-deep">Gratis</span>
              <span className="ml-2 text-sm text-muted">under beta + 1 år etter lansering</span>
            </div>

            <ul className="mb-8 space-y-3">
              {betaFeatures.map((feature, j) => (
                <li key={j} className="flex items-center gap-3 text-sm">
                  <svg
                    className="h-4 w-4 shrink-0 text-sage"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-deep/80">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="/beta"
              className="block w-full rounded-lg bg-sage py-3.5 text-center font-semibold text-white transition-all hover:bg-sage-dark"
            >
              Søk beta-tilgang
            </a>

            <p className="mt-4 text-center text-xs text-muted">
              Begrenset antall plasser. Ingen forpliktelser.
            </p>
          </div>

          {/* Coming soon */}
          <div
            className={`flex flex-col gap-4 transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <h3 className="mb-2 text-lg font-semibold text-deep">Kommer snart</h3>

            {upcoming.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-xl border border-border bg-white p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sage-light text-sage">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-deep">{item.title}</h4>
                    <span className="rounded-md bg-sage-bg px-2.5 py-1 text-[11px] font-semibold text-sage">
                      Snart
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{item.description}</p>
                </div>
              </div>
            ))}

            <div className="mt-auto rounded-xl border border-border bg-sage-light/40 p-5">
              <p className="text-sm text-muted">
                Du kan bruke Sparlett fullt ut allerede i dag — registrer utgifter, sett sparemål
                og få innsikt, helt uten bankkobling. App og bankintegrasjon gjør opplevelsen
                enda bedre når de kommer<span className="text-sage">.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
