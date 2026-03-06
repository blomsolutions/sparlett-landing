"use client";

import { useState } from "react";

export default function BetaForm() {
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

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center rounded-xl border border-sage/30 bg-sage-light">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sage/10">
          <svg className="h-8 w-8 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h4 className="mb-2 text-lg font-semibold text-deep">Søknaden er mottatt.</h4>
        <p className="text-muted">Vi tar kontakt så snart vi har en plass til deg.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-deep">Navn</label>
          <input
            type="text" id="name" name="name" required placeholder="Ditt navn"
            className="w-full rounded-lg border border-border bg-canvas px-4 py-3 text-sm text-deep placeholder:text-muted/50 focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage/50"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-deep">E-post</label>
          <input
            type="email" id="email" name="email" required placeholder="din@epost.no"
            className="w-full rounded-lg border border-border bg-canvas px-4 py-3 text-sm text-deep placeholder:text-muted/50 focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage/50"
          />
        </div>
      </div>
      <div>
        <label htmlFor="motivation" className="mb-1.5 block text-sm font-medium text-deep">
          Hvorfor vil du teste Sparlett?
        </label>
        <textarea
          id="motivation" name="motivation" rows={4} placeholder="Fortell oss litt om deg..."
          className="w-full resize-none rounded-lg border border-border bg-canvas px-4 py-3 text-sm text-deep placeholder:text-muted/50 focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage/50"
        />
      </div>
      <button
        type="submit" disabled={status === "sending"}
        className="w-full rounded-lg bg-sage py-3.5 font-semibold text-white transition-all hover:bg-sage-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sender..." : "Søk beta-tilgang"}
      </button>
      {status === "error" && (
        <p className="text-center text-sm text-terra">
          Vi fikk ikke sendt søknaden. Prøv igjen, eller send e-post til hei@sparlett.no.
        </p>
      )}
    </form>
  );
}
