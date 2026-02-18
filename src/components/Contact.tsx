"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mbdakapa", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="kontakt" className="relative overflow-hidden py-24" ref={ref}>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-ai/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2
            className={`mb-4 text-4xl font-bold tracking-tight transition-all duration-700 md:text-5xl ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            Ta kontakt med{" "}
            <span className="gradient-text">oss</span>
          </h2>
          <p
            className={`mx-auto max-w-2xl text-lg text-muted transition-all delay-100 duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            Har du spørsmål, tilbakemeldinger eller bare vil si hei? Vi hører
            gjerne fra deg.
          </p>
        </div>

        <div
          className={`grid gap-12 lg:grid-cols-2 transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          style={{ transitionDelay: "200ms" }}
        >
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-semibold text-white">
                Kontaktinformasjon
              </h3>
              <p className="text-muted">
                Vi svarer vanligvis innen 24 timer på hverdager.
              </p>
            </div>

            <div className="space-y-5">
              {/* Email */}
              <a
                href="mailto:kontakt@sparlett.no"
                className="group flex items-center gap-4 rounded-xl border border-border bg-surface/50 p-4 transition-all hover:border-accent/30 hover:bg-surface"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted">E-post</p>
                  <p className="font-medium text-white">kontakt@sparlett.no</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+4790790093"
                className="group flex items-center gap-4 rounded-xl border border-border bg-surface/50 p-4 transition-all hover:border-accent/30 hover:bg-surface"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted">Telefon</p>
                  <p className="font-medium text-white">+47 907 90 093</p>
                </div>
              </a>

            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-2xl border border-border bg-surface/50 p-6 sm:p-8">
            <h3 className="mb-6 text-xl font-semibold text-white">
              Send oss en melding
            </h3>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                  <svg
                    className="h-8 w-8 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h4 className="mb-2 text-lg font-semibold text-white">
                  Takk for meldingen!
                </h4>
                <p className="text-muted">
                  Vi svarer deg så snart vi kan.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm text-accent transition-colors hover:text-accent-hover"
                >
                  Send en ny melding
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-white"
                  >
                    Navn
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Ditt navn"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-white placeholder:text-muted/50 transition-colors focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-white"
                  >
                    E-post
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="din@epost.no"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-white placeholder:text-muted/50 transition-colors focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block text-sm font-medium text-white"
                  >
                    Emne
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-white transition-colors focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50"
                  >
                    <option value="">Velg emne</option>
                    <option value="Generelt spørsmål">Generelt spørsmål</option>
                    <option value="Tilbakemelding">Tilbakemelding</option>
                    <option value="Feil / Bug">Feil / Bug</option>
                    <option value="Samarbeid">Samarbeid</option>
                    <option value="Annet">Annet</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-white"
                  >
                    Melding
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Skriv meldingen din her..."
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-white placeholder:text-muted/50 transition-colors focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-xl bg-accent py-3.5 text-center font-medium text-white shadow-lg shadow-accent/20 transition-all hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="h-4 w-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      Sender...
                    </span>
                  ) : (
                    "Send melding"
                  )}
                </button>

                {status === "error" && (
                  <p className="text-center text-sm text-red-400">
                    Noe gikk galt. Prøv igjen, eller send e-post direkte til
                    kontakt@sparlett.no.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
