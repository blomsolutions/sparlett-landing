import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/Horizontal_logo_white.svg"
                alt="Sparlett.no"
                width={160}
                height={36}
                className="h-8 w-auto"
              />
            </div>
            <p className="mb-4 text-sm leading-relaxed text-muted">
              Spar smartere. Lev friere.
            </p>
            <div className="space-y-1.5 text-sm text-muted/60">
              <a href="mailto:kontakt@sparlett.no" className="block transition-colors hover:text-white">
                kontakt@sparlett.no
              </a>
              <a href="tel:+4790790093" className="block transition-colors hover:text-white">
                +47 907 90 093
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
              Produkt
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Funksjoner", href: "/#funksjoner" },
                { label: "Priser", href: "/#priser" },
                { label: "Lumi AI", href: "/#lumi" },
                { label: "Sikkerhet", href: "/sikkerhet" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
              Selskap
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Om oss", href: "/om-oss" },
                { label: "Blogg", href: "/blogg" },
                { label: "Karriere", href: "/karriere" },
                { label: "Kontakt", href: "/#kontakt" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Tools */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
              Juridisk
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Personvern", href: "/personvern" },
                { label: "Vilkår", href: "/terms" },
                { label: "Cookies", href: "/cookies" },
                { label: "GDPR", href: "/gdpr" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-wider text-muted">
              Verktøy
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/valuta"
                  className="text-sm text-muted transition-colors hover:text-white"
                >
                  Valutakalkulator
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <p className="text-sm text-muted/60">
              &copy; {new Date().getFullYear()} Sparlett.no. Alle rettigheter
              reservert.
            </p>
            <p className="text-xs text-muted/40">
              BLOM SOLUTIONS — Org.nr: 834 411 342
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted/40">
              Mørkt design. Lyst fremtid.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
