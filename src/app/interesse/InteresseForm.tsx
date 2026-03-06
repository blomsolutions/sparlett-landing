"use client";

import { useState } from "react";

export default function InteresseForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("_subject", "Ny interesse-registrering");
    data.append("type", "interesse");

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
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sage/10">
          <svg
            className="h-7 w-7 text-sage"
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
        <h4 className="mb-2 text-lg font-semibold text-deep">
          Takk for interessen.
        </h4>
        <p className="text-sm text-muted">
          Vi gir deg beskjed når Sparlett er klar.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-sm font-medium text-deep"
        >
          Navn
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Ditt navn"
          className="w-full rounded-lg border border-border bg-canvas px-4 py-3 text-sm text-deep placeholder:text-muted/50 focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage/50"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-deep"
        >
          E-post
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="din@epost.no"
          className="w-full rounded-lg border border-border bg-canvas px-4 py-3 text-sm text-deep placeholder:text-muted/50 focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage/50"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-sage py-3.5 font-semibold text-white transition-all hover:bg-sage-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sender..." : "Gi oss beskjed"}
      </button>
      {status === "error" && (
        <p className="text-center text-sm text-terra">
          Noe gikk galt. Prøv igjen, eller send e-post til hei@sparlett.no.
        </p>
      )}
    </form>
  );
}
