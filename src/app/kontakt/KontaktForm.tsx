"use client";

import { useState } from "react";

export default function KontaktForm() {
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
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sage-light">
          <svg className="h-8 w-8 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h4 className="mb-2 text-lg font-semibold text-deep">
          Takk for meldingen.
        </h4>
        <p className="text-muted">Vi svarer deg så snart vi kan.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-sage font-medium transition-colors hover:text-sage-dark"
        >
          Send en ny melding
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-deep">Navn</label>
        <input
          type="text" id="name" name="name" required placeholder="Ditt navn"
          className="w-full rounded-lg border border-border bg-canvas px-4 py-3 text-sm text-deep placeholder:text-muted/50 transition-colors focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage/50"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-deep">E-post</label>
        <input
          type="email" id="email" name="email" required placeholder="din@epost.no"
          className="w-full rounded-lg border border-border bg-canvas px-4 py-3 text-sm text-deep placeholder:text-muted/50 transition-colors focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage/50"
        />
      </div>
      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-deep">Emne</label>
        <select
          id="subject" name="subject" required
          className="w-full rounded-lg border border-border bg-canvas px-4 py-3 text-sm text-deep transition-colors focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage/50"
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
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-deep">Melding</label>
        <textarea
          id="message" name="message" required rows={5} placeholder="Skriv meldingen din her..."
          className="w-full resize-none rounded-lg border border-border bg-canvas px-4 py-3 text-sm text-deep placeholder:text-muted/50 transition-colors focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage/50"
        />
      </div>
      <button
        type="submit" disabled={status === "sending"}
        className="w-full rounded-lg bg-sage py-3.5 text-center font-semibold text-white transition-all hover:bg-sage-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            Sender...
          </span>
        ) : (
          "Send melding"
        )}
      </button>
      {status === "error" && (
        <p className="text-center text-sm text-terra">
          Vi fikk ikke sendt meldingen. Prøv igjen, eller send e-post direkte til hei@sparlett.no.
        </p>
      )}
    </form>
  );
}
