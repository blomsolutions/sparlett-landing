import type { Metadata } from "next";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata: Metadata = {
  title: "Vilkår for bruk",
  description: "Les vilkårene for bruk av Sparlett. Informasjon om dine rettigheter, ansvar, beta-vilkår og betingelser for tjenesten.",
  alternates: { canonical: "https://sparlett.no/terms" },
  openGraph: {
    title: "Vilkår for bruk — Sparlett",
    description: "Les vilkårene for bruk av Sparlett. Informasjon om dine rettigheter, ansvar, beta-vilkår og betingelser for tjenesten.",
    url: "https://sparlett.no/terms",
  },
};

export default function TermsPage() {
  return (
    <SubpageLayout>
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="mb-3 text-4xl font-bold tracking-tight">
            Vilkår for bruk<span className="text-sage">.</span>
          </h1>
          <p className="mb-2 text-sm text-muted">Sist oppdatert: Mars 2026</p>
          <p className="mb-12 max-w-lg text-muted">
            Ved å bruke Sparlett godtar du disse vilkårene.
          </p>

          <div className="space-y-8 text-sm text-muted leading-relaxed">
            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">1. Introduksjon</h2>
              <p>Disse vilkårene gjelder for bruk av Sparlett, levert av BLOM SOLUTIONS (org.nr. 834 411 342). Ved å opprette en konto eller bruke tjenesten, godtar du disse vilkårene.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">2. Definisjoner</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong className="text-deep">Tjenesten:</strong> Sparlett-plattformen og tilhørende funksjonalitet</li>
                <li><strong className="text-deep">Bruker:</strong> Enhver person som bruker tjenesten</li>
                <li><strong className="text-deep">Leverandør:</strong> BLOM SOLUTIONS</li>
                <li><strong className="text-deep">Brukerinnhold:</strong> Data, dokumenter og informasjon brukeren legger inn</li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">3. Godkjenning</h2>
              <p>Du må være minst 18 år eller ha foresattes samtykke for å bruke tjenesten. Ved å opprette konto bekrefter du at du oppfyller dette kravet.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">4. Tjenestebeskrivelse</h2>
              <p>Sparlett er en smart spareplattform som tilbyr oversikt over personlig økonomi, budsjettverktøy, sparemål, visuell analyse og innsikt. Tjenesten gir ikke finansiell rådgivning og er ikke en erstatning for profesjonell økonomisk veiledning.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">5. Konto og registrering</h2>
              <p>Du er ansvarlig for å holde kontoinformasjonen din sikker. Du må umiddelbart varsle oss om uautorisert tilgang til kontoen din.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">6. Brukerforpliktelser</h2>
              <p>Du forplikter deg til å bruke tjenesten lovlig, ikke forsøke å skaffe uautorisert tilgang, ikke kopiere eller distribuere innhold fra tjenesten, og ikke bruke tjenesten til ulovlige formål.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">7. Beta-tjeneste</h2>
              <p>Sparlett er for tiden i beta. Tjenesten er gratis under beta-perioden. Funksjoner kan endres, legges til eller fjernes. Tjenesten kan inneholde feil. Vi planlegger en betalingsmodell etter lansering — beta-testere får 1 års gratis abonnement.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">8. Immaterielle rettigheter</h2>
              <p>Alt innhold, design, kode og funksjonalitet i Sparlett tilhører BLOM SOLUTIONS. Du beholder eierskapet til dine egne data og innhold.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">9. Personvern og data</h2>
              <p>Behandling av personopplysninger er beskrevet i vår <a href="/personvern" className="text-sage hover:text-sage-dark font-medium">personvernerklæring</a>. Ved å bruke tjenesten samtykker du til behandling som beskrevet der.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">10. Ansvarsbegrensning</h2>
              <p>Sparlett tilbys «som den er». Vi gir ingen garantier for nøyaktighet, tilgjengelighet eller egnethet. BLOM SOLUTIONS er ikke ansvarlig for indirekte tap, tapte data eller økonomiske beslutninger basert på informasjon fra tjenesten.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">11. Endringer i vilkår</h2>
              <p>Vi kan oppdatere disse vilkårene. Vesentlige endringer varsles via e-post eller i tjenesten med minst 30 dagers varsel.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">12. Oppsigelse</h2>
              <p>Du kan når som helst slette kontoen din. Vi kan suspendere eller avslutte tilgangen ved brudd på vilkårene, med rimelig varsel der det er mulig.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">13. Force majeure</h2>
              <p>Vi er ikke ansvarlige for manglende oppfyllelse som skyldes omstendigheter utenfor vår kontroll.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">14. Lovvalg og verneting</h2>
              <p>Disse vilkårene er underlagt norsk lov. Tvister skal forsøkes løst i minnelighet. Dersom dette ikke lykkes, avgjøres tvisten ved Oslo tingrett.</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-deep">15. Kontakt</h2>
              <p>For spørsmål om vilkårene:</p>
              <p className="mt-2">BLOM SOLUTIONS — Org.nr: 834 411 342</p>
              <p>E-post: <a href="mailto:hei@sparlett.no" className="text-sage hover:text-sage-dark font-medium">hei@sparlett.no</a></p>
              <p>Telefon: +47 907 90 093</p>
            </div>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
