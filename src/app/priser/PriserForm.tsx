"use client";

import { useState } from "react";

const priceOptions = [
  { label: "29 kr/mnd", value: "29" },
  { label: "49 kr/mnd", value: "49" },
  { label: "79 kr/mnd", value: "79" },
  { label: "99 kr/mnd", value: "99" },
  { label: "149 kr/mnd", value: "149" },
];

export default function PriserForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [selected, setSelected] = useState<string | null>(null);
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("_subject", "Prisundersøkelse");
    data.append("type", "prisundersøkelse");
    data.append("villig_pris", selected ?? "annet");
    data.append("fakturering", billing);

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
          Takk for tilbakemeldingen.
        </h4>
        <p className="text-sm text-muted">
          Vi bruker dette til å bygge en prismodell som fungerer for alle.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Billing toggle */}
      <div>
        <label className="mb-3 block text-sm font-medium text-deep">
          Hvordan foretrekker du å betale?
        </label>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setBilling("monthly")}
            className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${billing === "monthly" ? "bg-sage text-white" : "bg-sage-light text-sage"}`}
          >
            Månedlig
          </button>
          <button
            type="button"
            onClick={() => setBilling("yearly")}
            className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${billing === "yearly" ? "bg-sage text-white" : "bg-sage-light text-sage"}`}
          >
            Årlig (spar 2 mnd)
          </button>
        </div>
      </div>

      {/* Price selection */}
      <div>
        <label className="mb-3 block text-sm font-medium text-deep">
          Hva hadde du vært villig til å betale{" "}
          {billing === "monthly" ? "per måned" : "per år"}?
        </label>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
          {priceOptions.map((opt) => {
            const displayPrice =
              billing === "yearly"
                ? `${Number(opt.value) * 10} kr/år`
                : opt.label;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => setSelected(opt.value)}
                className={`rounded-lg border px-3 py-3 text-center text-sm font-semibold transition-all ${
                  selected === opt.value
                    ? "border-sage bg-sage-bg text-sage"
                    : "border-border bg-canvas text-deep hover:border-sage/40"
                }`}
              >
                {displayPrice}
              </button>
            );
          })}
        </div>
      </div>

      {/* Custom amount */}
      <div>
        <label
          htmlFor="custom_price"
          className="mb-1.5 block text-sm font-medium text-deep"
        >
          Eller skriv inn et eget beløp ({billing === "monthly" ? "kr/mnd" : "kr/år"})
        </label>
        <input
          type="number"
          id="custom_price"
          name="custom_price"
          placeholder={billing === "monthly" ? "f.eks. 59" : "f.eks. 590"}
          min={0}
          onChange={(e) => {
            if (e.target.value) setSelected(`custom:${e.target.value}`);
          }}
          className="w-full rounded-lg border border-border bg-canvas px-4 py-3 text-sm text-deep placeholder:text-muted/50 focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage/50"
        />
      </div>

      {/* Optional email */}
      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-deep"
        >
          E-post <span className="text-muted">(valgfritt)</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="din@epost.no"
          className="w-full rounded-lg border border-border bg-canvas px-4 py-3 text-sm text-deep placeholder:text-muted/50 focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage/50"
        />
        <p className="mt-1.5 text-xs text-muted/60">
          Legg til e-post hvis du vil bli varslet om priser og lansering.
        </p>
      </div>

      <button
        type="submit"
        disabled={status === "sending" || !selected}
        className="w-full rounded-lg bg-sage py-3.5 font-semibold text-white transition-all hover:bg-sage-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sender..." : "Send tilbakemelding"}
      </button>
      {status === "error" && (
        <p className="text-center text-sm text-terra">
          Noe gikk galt. Prøv igjen, eller send e-post til hei@sparlett.no.
        </p>
      )}
    </form>
  );
}
