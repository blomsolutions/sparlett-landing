"use client";

import { useState } from "react";

export default function OmOssContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

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
    <section className="mt-16 rounded-2xl border border-border bg-surface/50 p-6 sm:p-8">
      <h2 className="mb-2 text-2xl font-bold text-white">
        Ta kontakt med oss
      </h2>
      <p className="mb-8 text-muted">
        Har du spørsmål, tilbakemeldinger eller ønsker å samarbeide? Send oss en
        melding.
      </p>

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
          <h3 className="mb-2 text-lg font-semibold text-white">
            Takk for meldingen!
          </h3>
          <p className="text-muted">Vi svarer deg så snart vi kan.</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 text-sm text-accent transition-colors hover:text-accent-hover"
          >
            Send en ny melding
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="om-name"
                className="mb-1.5 block text-sm font-medium text-white"
              >
                Navn
              </label>
              <input
                type="text"
                id="om-name"
                name="name"
                required
                placeholder="Ditt navn"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-white placeholder:text-muted/50 transition-colors focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50"
              />
            </div>

            <div>
              <label
                htmlFor="om-email"
                className="mb-1.5 block text-sm font-medium text-white"
              >
                E-post
              </label>
              <input
                type="email"
                id="om-email"
                name="email"
                required
                placeholder="din@epost.no"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-white placeholder:text-muted/50 transition-colors focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="om-subject"
              className="mb-1.5 block text-sm font-medium text-white"
            >
              Emne
            </label>
            <select
              id="om-subject"
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
              htmlFor="om-message"
              className="mb-1.5 block text-sm font-medium text-white"
            >
              Melding
            </label>
            <textarea
              id="om-message"
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
            className="w-full rounded-xl bg-accent py-3.5 text-center font-medium text-white shadow-lg shadow-accent/20 transition-all hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-8"
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
    </section>
  );
}
