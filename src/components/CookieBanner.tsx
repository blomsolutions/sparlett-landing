"use client";

import { useState, useEffect } from "react";
import Ring3 from "./Ring3";

const COOKIE_KEY = "sparlett-cookies-accepted";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_KEY);
    if (!accepted) {
      // Small delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{ animation: "slide-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) both" }}
    >
      <div className="mx-auto max-w-3xl px-4 pb-5">
        <div className="rounded-xl border border-border bg-white p-5 shadow-lg sm:flex sm:items-center sm:gap-5">
          <div className="mb-4 flex items-start gap-3 sm:mb-0 sm:flex-1">
            <Ring3 size={18} strokeWidth={1.8} className="mt-0.5 shrink-0" />
            <p className="text-sm leading-relaxed text-deep">
              Vi bruker nødvendige informasjonskapsler for å sikre at nettsiden fungerer.{" "}
              <a href="/cookies" className="font-semibold text-sage underline-offset-2 hover:underline">
                Les mer
              </a>
            </p>
          </div>
          <button
            onClick={accept}
            className="w-full rounded-lg bg-sage px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sage-dark sm:w-auto"
          >
            Greit
          </button>
        </div>
      </div>
    </div>
  );
}
