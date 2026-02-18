"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // On subpages, anchor links need to point to /#section
  const prefix = isHome ? "" : "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/Horizontal_logo_white.svg"
            alt="Sparlett.no"
            width={160}
            height={36}
            className="h-8 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href={`${prefix}#funksjoner`}
            className="text-sm text-muted transition-colors hover:text-white"
          >
            Funksjoner
          </a>
          <a
            href={`${prefix}#lumi`}
            className="text-sm text-muted transition-colors hover:text-white"
          >
            Lumi AI
          </a>
          <a
            href={`${prefix}#priser`}
            className="text-sm text-muted transition-colors hover:text-white"
          >
            Priser
          </a>
          <a
            href={`${prefix}#kontakt`}
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
              href={`${prefix}#funksjoner`}
              className="text-muted transition-colors hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Funksjoner
            </a>
            <a
              href={`${prefix}#lumi`}
              className="text-muted transition-colors hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Lumi AI
            </a>
            <a
              href={`${prefix}#priser`}
              className="text-muted transition-colors hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Priser
            </a>
            <a
              href={`${prefix}#kontakt`}
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
