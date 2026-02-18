"use client";

import { useEffect, useRef, useState } from "react";

const betaFeatures = [
  "Full Lumi AI-assistent",
  "Ubegrensede sparemål",
  "Sanntids-analyse av forbruk",
  "Avansert innsikt og trender",
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
    description: "Native iOS- og Android-app er under utvikling og lanseres snart.",
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
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: "Prismodell",
    description: "Vi jobber med en rettferdig prismodell. Inntil da er alt helt gratis.",
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
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2
            className={`mb-4 text-4xl font-bold tracking-tight transition-all duration-700 md:text-5xl ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            Helt gratis.{" "}
            <span className="gradient-text">Så lenge vi er i beta.</span>
          </h2>
          <p
            className={`mx-auto max-w-2xl text-lg text-muted transition-all delay-100 duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            Sparlett.no fungerer fullt ut allerede i dag — uten bankintegrasjon eller app.
            Registrer forbruk, sett mål, og la Lumi hjelpe deg å spare smartere.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Beta card */}
          <div
            className={`relative rounded-2xl border border-accent/50 bg-surface p-8 shadow-xl shadow-accent/10 transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="absolute -top-3 left-6 flex items-center gap-2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              Beta — gratis tilgang
            </div>

            <h3 className="mt-2 text-2xl font-bold text-white">Sparlett.no Beta</h3>
            <p className="mt-2 text-muted">Alt du trenger for å ta kontroll over økonomien. Ingen begrensninger.</p>

            <div className="mt-6 mb-6">
              <span className="text-5xl font-bold text-white">Gratis</span>
              <span className="ml-2 text-sm text-muted">i hele beta-perioden</span>
            </div>

            <ul className="mb-8 space-y-3">
              {betaFeatures.map((feature, j) => (
                <li key={j} className="flex items-center gap-3 text-sm">
                  <svg
                    className="h-4 w-4 shrink-0 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-white/80">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://app.sparlett.no"
              className="block w-full rounded-xl bg-accent py-3.5 text-center font-medium text-white shadow-lg shadow-accent/20 transition-all hover:bg-accent-hover"
            >
              Kom i gang — helt gratis
            </a>

            <p className="mt-4 text-center text-xs text-muted">
              Ingen kredittkort kreves. Ingen bindingstid.
            </p>
          </div>

          {/* Coming soon */}
          <div
            className={`flex flex-col gap-4 transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <h3 className="mb-2 text-lg font-semibold text-white">Kommer snart</h3>

            {upcoming.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-border bg-surface/50 p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <span className="rounded-full border border-accent/20 bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent">
                      Snart
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{item.description}</p>
                </div>
              </div>
            ))}

            <div className="mt-auto rounded-2xl border border-border-light/50 bg-surface/30 p-5">
              <p className="text-sm text-muted">
                Appen fungerer fullt ut allerede i dag. Du kan registrere utgifter manuelt,
                sette sparemål og få AI-drevne innsikter — helt uten bankkobling.
                App Store og bankintegrasjon gjør opplevelsen enda bedre når de lanseres.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
