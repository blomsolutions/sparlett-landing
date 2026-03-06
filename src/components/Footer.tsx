import Logo from "./Logo";
import Curve from "./Curve";

export default function Footer() {
  return (
    <footer className="bg-deep">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-3">
              <Logo size="md" />
            </div>
            <Curve width={80} height={6} strokeWidth={1} className="mb-3" />
            <p className="mb-4 text-sm leading-relaxed text-sage-lt">
              Lett å spare<span className="text-sage">.</span> Lett å ha <span className="text-sage">kontroll</span><span className="text-sage">.</span>
            </p>
            <div className="space-y-1.5 text-sm text-muted">
              <a href="mailto:hei@sparlett.no" className="block transition-colors hover:text-canvas">
                hei@sparlett.no
              </a>
              <a href="tel:+4790790093" className="block transition-colors hover:text-canvas">
                +47 907 90 093
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-canvas/70">
              Produkt
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Funksjoner", href: "/funksjoner" },
                { label: "Priser", href: "/priser" },
                { label: "Kom i gang", href: "/beta" },
                { label: "Meld interesse", href: "/interesse" },
                { label: "Sikkerhet", href: "/sikkerhet" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-muted transition-colors hover:text-canvas">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-canvas/70">
              Selskap
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Om oss", href: "/om-oss" },
                { label: "Blogg", href: "/blogg" },
                { label: "Karriere", href: "/karriere" },
                { label: "Kontakt", href: "/kontakt" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-muted transition-colors hover:text-canvas">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Tools */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-canvas/70">
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
                  <a href={item.href} className="text-sm text-muted transition-colors hover:text-canvas">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-wider text-canvas/70">
              Verktøy
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/valuta" className="text-sm text-muted transition-colors hover:text-canvas">
                  Valutakalkulator
                </a>
              </li>
              <li>
                <a href="/bors" className="text-sm text-muted transition-colors hover:text-canvas">
                  Børs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-muted/20 pt-8 sm:flex-row">
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <p className="text-sm text-muted/60">
              &copy; {new Date().getFullYear()} Sparlett. Alle rettigheter reservert.
            </p>
            <p className="text-xs text-muted/40">
              BLOM SOLUTIONS — Org.nr: 834 411 342
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
