"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const prefix = isHome ? "" : "/";

  const leftLinks = [
    { label: "Funksjoner", href: "/funksjoner" },
    { label: "Priser", href: "/priser" },
    { label: "Valuta", href: "/valuta" },
    { label: "Børs", href: "/bors" },
  ];

  const rightLinks = [
    { label: "Om oss", href: "/om-oss" },
    { label: "Kontakt", href: "/kontakt" },
    { label: "Beta", href: "/beta" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-canvas/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Left links (desktop) */}
        <div className="hidden w-1/3 items-center gap-6 md:flex">
          {leftLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-deep"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Center logo — nudged left for optical balance (icon+text SVG) */}
        <div className="flex justify-center md:w-1/3">
          <Link href="/" className="-ml-3">
            <Logo size="lg" />
          </Link>
        </div>

        {/* Right links (desktop) */}
        <div className="hidden w-1/3 items-center justify-end gap-6 md:flex">
          {rightLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm transition-colors ${
                link.label === "Beta"
                  ? "rounded-lg bg-sage px-5 py-2 font-semibold text-white hover:bg-sage-dark"
                  : "text-muted hover:text-deep"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Meny"
        >
          <span
            className={`h-0.5 w-6 bg-deep transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-deep transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-deep transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-canvas/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {[...leftLinks, ...rightLinks.filter((l) => l.label !== "Beta")].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted transition-colors hover:text-deep"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/beta"
              className="rounded-lg bg-sage px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-sage-dark"
              onClick={() => setMobileOpen(false)}
            >
              Beta
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
