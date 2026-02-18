"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center">
          <Image
            src="/Horizontal_logo_white.svg"
            alt="Sparlett.no"
            width={160}
            height={36}
            className="h-8 w-auto"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#funksjoner"
            className="text-sm text-muted transition-colors hover:text-white"
          >
            Funksjoner
          </a>
          <a
            href="#lumi"
            className="text-sm text-muted transition-colors hover:text-white"
          >
            Lumi AI
          </a>
          <a
            href="#priser"
            className="text-sm text-muted transition-colors hover:text-white"
          >
            Priser
          </a>
          <a
            href="#kontakt"
            className="text-sm text-muted transition-colors hover:text-white"
          >
            Kontakt
          </a>
          <a
            href="https://app.sparlett.no"
            className="rounded-xl bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Start gratis
          </a>
        </div>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            <a
              href="#funksjoner"
              className="text-muted transition-colors hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Funksjoner
            </a>
            <a
              href="#lumi"
              className="text-muted transition-colors hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Lumi AI
            </a>
            <a
              href="#priser"
              className="text-muted transition-colors hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Priser
            </a>
            <a
              href="#kontakt"
              className="text-muted transition-colors hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Kontakt
            </a>
            <a
              href="https://app.sparlett.no"
              className="rounded-xl bg-accent px-5 py-3 text-center font-medium text-white transition-colors hover:bg-accent-hover"
              onClick={() => setMobileOpen(false)}
            >
              Start gratis
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
