"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "Smart forbruksanalyse",
    description:
      "Vi analyserer forbruket ditt og finner muligheter du kanskje ikke ser selv.",
    color: "sand" as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" /><path d="M10 22h4" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
      </svg>
    ),
  },
  {
    title: "Visuell oversikt",
    description:
      "Se økonomien din i klare, intuitive grafer. Forstå pengeflyten uten å måtte tolke regneark.",
    color: "sage" as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
  {
    title: "Sparemål med veiledning",
    description:
      "Sett mål og få hjelp til å nå dem. Rådene tilpasses vanene dine — ikke generiske tips.",
    color: "sageDark" as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Smarte varsler",
    description:
      "Få beskjed før du overskrider budsjettet — ikke etter. Vi lærer når og hvordan du vil bli varslet.",
    color: "sand" as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>
    ),
  },
  {
    title: "Sikkerhet på banknivå",
    description:
      "Dataene dine er kryptert og lagret sikkert. Vi selger aldri informasjonen din. Din økonomi er privat.",
    color: "sage" as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    ),
  },
  {
    title: "Familiedeling",
    description:
      "Del økonomisk oversikt med familien. Alle ser det samme bildet — og sparer sammen mot felles mål.",
    color: "sageDark" as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const colorMap = {
  sand: { bg: "bg-sand-bg", text: "text-sand", border: "hover:border-sand/30" },
  sage: { bg: "bg-sage-bg", text: "text-sage", border: "hover:border-sage/30" },
  sageDark: { bg: "bg-sage-dark-bg", text: "text-sage-dark", border: "hover:border-sage-dark/30" },
};

export default function Features() {
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
    <section id="funksjoner" className="relative py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2
            className={`mb-4 text-3xl sm:text-4xl font-bold tracking-tight transition-all duration-700 md:text-5xl ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            Alt du trenger for å spare{" "}
            <span className="text-sage">lett</span>
            <span className="text-sage">.</span>
          </h2>
          <p
            className={`mx-auto max-w-xl text-base sm:text-lg text-muted transition-all delay-100 duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            Innsikt og kontroll over økonomien din — uten kompleksitet.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const c = colorMap[feature.color];
            return (
              <div
                key={i}
                className={`group rounded-xl border border-border bg-white p-6 transition-all duration-700 ${c.border} ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                style={{ transitionDelay: `${150 + i * 80}ms` }}
              >
                <div
                  className={`mb-4 flex h-11 w-11 items-center justify-center rounded-lg ${c.bg} ${c.text}`}
                >
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-base font-semibold text-deep">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
