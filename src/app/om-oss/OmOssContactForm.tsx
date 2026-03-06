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

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="mb-3 flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-sage-light">
          <svg className="h-6 w-6 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <p className="font-semibold text-deep">Takk for meldingen.</p>
        <p className="text-sm text-muted">Vi svarer deg snart.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input type="text" name="name" required placeholder="Navn" className="w-full rounded-lg border border-border bg-canvas px-4 py-3 text-sm text-deep placeholder:text-muted/50 focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage/50" />
        <input type="email" name="email" required placeholder="E-post" className="w-full rounded-lg border border-border bg-canvas px-4 py-3 text-sm text-deep placeholder:text-muted/50 focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage/50" />
      </div>
      <select name="subject" required className="w-full rounded-lg border border-border bg-canvas px-4 py-3 text-sm text-deep focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage/50">
        <option value="">Velg emne</option>
        <option value="Generelt">Generelt spørsmål</option>
        <option value="Tilbakemelding">Tilbakemelding</option>
        <option value="Bug">Feil / Bug</option>
        <option value="Samarbeid">Samarbeid</option>
        <option value="Annet">Annet</option>
      </select>
      <textarea name="message" required rows={5} placeholder="Melding" className="w-full resize-none rounded-lg border border-border bg-canvas px-4 py-3 text-sm text-deep placeholder:text-muted/50 focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage/50" />
      <button type="submit" disabled={status === "sending"} className="w-full rounded-lg bg-sage py-3 font-semibold text-white hover:bg-sage-dark disabled:opacity-60">
        {status === "sending" ? "Sender..." : "Send melding"}
      </button>
      {status === "error" && <p className="text-sm text-terra text-center">Noe gikk galt. Prøv igjen.</p>}
    </form>
  );
}
