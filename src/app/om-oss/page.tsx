import type { Metadata } from "next";
import SubpageLayout from "@/components/SubpageLayout";
import OmOssContactForm from "./OmOssContactForm";

export const metadata: Metadata = {
  title: "Om oss",
  description: "Lær mer om Sparlett og BLOM SOLUTIONS — visjonen, teknologien og teamet bak Norges smarteste spareplattform.",
  alternates: { canonical: "https://sparlett.no/om-oss" },
  openGraph: {
    title: "Om oss — Sparlett",
    description: "Lær mer om Sparlett og BLOM SOLUTIONS — visjonen, teknologien og teamet bak Norges smarteste spareplattform.",
    url: "https://sparlett.no/om-oss",
  },
};

const omOssJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      name: "Om Sparlett",
      description: "Lær mer om Sparlett og BLOM SOLUTIONS — visjonen, teknologien og teamet bak Norges smarteste spareplattform.",
      url: "https://sparlett.no/om-oss",
      mainEntity: {
        "@type": "Organization",
        "@id": "https://sparlett.no/#organization",
        name: "BLOM SOLUTIONS",
        url: "https://sparlett.no",
        logo: "https://sparlett.no/icon.svg",
        email: "hei@sparlett.no",
        telephone: "+47-907-90-093",
        description: "Sparlett er en smart spareplattform som gjør kompleks økonomi enkel og oversiktlig.",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hjem", item: "https://sparlett.no" },
        { "@type": "ListItem", position: 2, name: "Om oss", item: "https://sparlett.no/om-oss" },
      ],
    },
  ],
};

export default function OmOssPage() {
  return (
    <SubpageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(omOssJsonLd) }}
      />
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="mb-3 text-4xl font-bold tracking-tight">
            Om <span className="text-sage">Sparlett</span><span className="text-sage">.</span>
          </h1>
          <p className="mb-12 max-w-lg text-lg text-muted">
            Alle fortjener en god oversikt over økonomien sin. Sparlett gjør det lett<span className="text-sage">.</span>
          </p>

          <div className="space-y-12">
            {/* Vision */}
            <div className="rounded-xl border border-border bg-white p-6 sm:p-8">
              <h2 className="mb-4 text-xl font-semibold text-deep">Visjonen</h2>
              <p className="text-muted leading-relaxed">
                Vi tror at alle fortjener å føle ro rundt økonomien sin. Sparlett gjør det til standarden — ikke et privilegium.
                Vi bygger en plattform som gir deg innsikt og kontroll, og jobber for deg selv når du ikke tenker på det.
              </p>
            </div>

            {/* What is Sparlett */}
            <div className="rounded-xl border border-border bg-white p-6 sm:p-8">
              <h2 className="mb-4 text-xl font-semibold text-deep">Hva er Sparlett?</h2>
              <p className="text-muted leading-relaxed">
                Sparlett er en smart spareplattform som gjør kompleks økonomi enkel og oversiktlig.
                Vi analyserer forbruksmønstrene dine, finner sparemuligheter og hjelper deg å nå målene dine —
                automatisk og tilpasset deg.
              </p>
            </div>

            {/* Technology */}
            <div className="rounded-xl border border-border bg-white p-6 sm:p-8">
              <h2 className="mb-4 text-xl font-semibold text-deep">Teknologi</h2>
              <p className="text-muted leading-relaxed">
                Sparlett er bygget med moderne teknologi: React, Firebase for autentisering og datalagring,
                og avansert analyse for innsikt. All data er kryptert og lagret i EU-baserte datasentre i
                henhold til GDPR.
              </p>
            </div>

            {/* Company */}
            <div className="rounded-xl border border-border bg-white p-6 sm:p-8">
              <h2 className="mb-4 text-xl font-semibold text-deep">Selskapet</h2>
              <p className="text-muted leading-relaxed mb-4">
                Sparlett er utviklet av BLOM SOLUTIONS.
              </p>
              <div className="space-y-1 text-sm text-muted">
                <p><span className="font-medium text-deep">Organisasjonsnummer:</span> 834 411 342</p>
                <p><span className="font-medium text-deep">E-post:</span>{" "}
                  <a href="mailto:hei@sparlett.no" className="text-sage hover:text-sage-dark">hei@sparlett.no</a>
                </p>
                <p><span className="font-medium text-deep">Telefon:</span>{" "}
                  <a href="tel:+4790790093" className="text-sage hover:text-sage-dark">+47 907 90 093</a>
                </p>
              </div>
            </div>

            {/* Values */}
            <div>
              <h2 className="mb-6 text-xl font-semibold text-deep">Verdier</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { title: "Sikkerhet", desc: "Dataene dine er kryptert og lagret sikkert. Vi selger aldri informasjonen din.", bg: "bg-sage-bg" },
                  { title: "Enkelhet", desc: "Kompleksitet er vårt ansvar, ikke ditt. Alt skal være lett å forstå.", bg: "bg-sand-bg" },
                  { title: "Brukeren", desc: "Vi designer for deg — ikke for å maksimere engasjement.", bg: "bg-sage-dark-bg" },
                ].map((v) => (
                  <div key={v.title} className={`rounded-xl p-5 ${v.bg}`}>
                    <h3 className="mb-2 font-semibold text-deep">{v.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div className="rounded-xl border border-border bg-white p-6 sm:p-8">
              <h2 className="mb-6 text-xl font-semibold text-deep">Ta kontakt</h2>
              <OmOssContactForm />
            </div>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
