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
            <p className="text-sm text-muted/60">
              Din økonomi, forklart av AI.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
              Produkt
            </h4>
            <ul className="space-y-3">
              {["Funksjoner", "Priser", "Lumi AI", "Sikkerhet"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-muted transition-colors hover:text-white"
                  >
                    {item}
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
              {["Om oss", "Blogg", "Karriere", "Kontakt"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-muted transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
              Juridisk
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Personvern", href: "#" },
                { label: "Vilkår", href: "/terms" },
                { label: "Cookies", href: "#" },
                { label: "GDPR", href: "#" },
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
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted/60">
            &copy; {new Date().getFullYear()} Sparlett.no. Alle rettigheter
            reservert.
          </p>
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
