import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vilkår for bruk — Sparlett.no",
  description:
    "Vilkår for bruk av Sparlett.no, en AI-drevet personlig økonomiassistent levert av BLOM SOLUTIONS.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-sm text-muted transition-colors hover:text-white"
          >
            &larr; Tilbake til forsiden
          </Link>
          <div className="flex gap-4 text-sm text-muted">
            <Link href="/personvern" className="transition-colors hover:text-white">Personvern</Link>
            <Link href="/cookies" className="transition-colors hover:text-white">Cookies</Link>
            <Link href="/gdpr" className="transition-colors hover:text-white">GDPR</Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-2 text-4xl font-bold tracking-tight">
          Vilkår for bruk
        </h1>
        <p className="mb-12 text-sm text-muted">
          Sist oppdatert: 18. februar 2026
        </p>

        <div className="space-y-10 text-[15px] leading-relaxed text-white/80">
          {/* 1. Innledning */}
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              1. Innledning
            </h2>
            <p>
              Disse vilkårene for bruk (&quot;Vilkårene&quot;) regulerer din
              tilgang til og bruk av nettstedet sparlett.no og tilhørende
              applikasjon (&quot;Tjenesten&quot;). Tjenesten er levert av:
            </p>
            <div className="mt-4 rounded-xl border border-border bg-surface/50 p-4">
              <p className="font-semibold text-white">BLOM SOLUTIONS</p>
              <p>Organisasjonsnummer: 834 411 342</p>
              <p>E-post: kontakt@sparlett.no</p>
              <p>Nettsted: sparlett.no</p>
            </div>
            <p className="mt-4">
              Ved å opprette en konto eller bruke Tjenesten aksepterer du disse
              Vilkårene i sin helhet. Dersom du ikke godtar Vilkårene, ber vi
              deg om ikke å benytte Tjenesten.
            </p>
          </section>

          {/* 2. Definisjoner */}
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              2. Definisjoner
            </h2>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <strong className="text-white">&quot;Tjenesten&quot;</strong> —
                Sparlett.no-plattformen, inkludert nettside, webapp og
                tilhørende funksjoner.
              </li>
              <li>
                <strong className="text-white">&quot;Brukeren&quot;</strong> —
                enhver person som registrerer seg for eller bruker Tjenesten.
              </li>
              <li>
                <strong className="text-white">&quot;Leverandøren&quot;</strong>{" "}
                — BLOM SOLUTIONS, org.nr. 834 411 342.
              </li>
              <li>
                <strong className="text-white">&quot;Lumi&quot;</strong> —
                Tjenestens innebygde AI-assistent som gir innsikt og forslag
                basert på brukerens økonomiske data.
              </li>
              <li>
                <strong className="text-white">
                  &quot;Brukerinnhold&quot;
                </strong>{" "}
                — all informasjon, data og innhold som Brukeren legger inn i
                Tjenesten.
              </li>
            </ul>
          </section>

          {/* 3. Aksept av vilkår */}
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              3. Aksept av vilkårene
            </h2>
            <p>
              Ved å opprette en brukerkonto, logge inn eller på annen måte ta
              Tjenesten i bruk, bekrefter du at du har lest, forstått og
              akseptert disse Vilkårene. Du bekrefter også at du er minst 18 år
              gammel eller har foresattes samtykke til å bruke Tjenesten.
            </p>
          </section>

          {/* 4. Tjenestebeskrivelse */}
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              4. Tjenestebeskrivelse
            </h2>
            <p>
              Sparlett.no er en digital plattform for personlig økonomi.
              Tjenesten tilbyr blant annet:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>Oversikt over inntekter, utgifter og sparemål</li>
              <li>
                AI-drevne analyser og personlige økonomiske forslag via Lumi
              </li>
              <li>Budsjetteringsverktøy og visuell økonomioversikt</li>
              <li>Dokumentarkiv og transaksjonshåndtering</li>
            </ul>
            <p className="mt-3">
              <strong className="text-accent">Viktig:</strong> Tjenesten gir
              ikke finansiell rådgivning i lovens forstand. Innholdet som
              genereres av Lumi er ment som generell informasjon og veiledning,
              og skal ikke erstatte profesjonell økonomisk rådgivning.
              Leverandøren er ikke ansvarlig for økonomiske beslutninger tatt på
              bakgrunn av informasjon fra Tjenesten.
            </p>
          </section>

          {/* 5. Brukerregistrering og konto */}
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              5. Brukerregistrering og konto
            </h2>
            <p>
              For å bruke Tjenesten må du opprette en konto. Registrering skjer
              via tredjeparts autentisering (Google-innlogging). Du er ansvarlig
              for:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>
                At informasjonen knyttet til kontoen din er korrekt og
                oppdatert.
              </li>
              <li>
                Å holde påloggingsinformasjonen din konfidensiell og sikker.
              </li>
              <li>
                All aktivitet som skjer under din konto, uavhengig av om du har
                autorisert den.
              </li>
            </ul>
            <p className="mt-3">
              Du plikter å varsle oss umiddelbart dersom du mistenker uautorisert
              bruk av kontoen din.
            </p>
          </section>

          {/* 6. Brukerens forpliktelser */}
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              6. Brukerens forpliktelser
            </h2>
            <p>Som Bruker forplikter du deg til å:</p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>
                Bruke Tjenesten i samsvar med gjeldende norsk lov og disse
                Vilkårene.
              </li>
              <li>
                Ikke forsøke å få uautorisert tilgang til Tjenesten, andre
                brukeres data eller underliggende systemer.
              </li>
              <li>
                Ikke bruke Tjenesten til ulovlige formål, svindel eller
                villedende aktiviteter.
              </li>
              <li>
                Ikke kopiere, modifisere, distribuere eller skape avledede verk
                basert på Tjenesten uten skriftlig samtykke.
              </li>
              <li>
                Ikke forstyrre eller undergrave Tjenestens funksjonalitet,
                sikkerhet eller integritet.
              </li>
            </ul>
          </section>

          {/* 7. Beta-tjeneste */}
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              7. Beta-tjeneste
            </h2>
            <p>
              Tjenesten er for tiden tilgjengelig som en beta-versjon. Dette
              innebærer at:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>
                Tjenesten tilbys <strong className="text-white">gratis</strong>{" "}
                i beta-perioden. Ingen kredittkort eller betaling kreves.
              </li>
              <li>
                Funksjoner, design og innhold kan endres, legges til eller
                fjernes uten forvarsel.
              </li>
              <li>
                Tjenesten kan inneholde feil, mangler eller begrensninger som vi
                aktivt jobber med å utbedre.
              </li>
              <li>
                Vi forbeholder oss retten til å innføre en betalingsmodell etter
                beta-perioden. Brukere vil bli varslet i god tid før eventuelle
                prisendringer trer i kraft.
              </li>
              <li>
                Planlagte funksjoner som App Store-tilgjengelighet og
                bankintegrasjon er under utvikling og vil lanseres etter hvert.
              </li>
            </ul>
            <p className="mt-3">
              Ved bruk av en beta-tjeneste aksepterer du at opplevelsen kan
              avvike fra en ferdig lansert tjeneste, og at datatap i sjeldne
              tilfeller kan forekomme.
            </p>
          </section>

          {/* 8. Immaterielle rettigheter */}
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              8. Immaterielle rettigheter
            </h2>
            <p>
              Alt innhold i Tjenesten — inkludert, men ikke begrenset til,
              programvare, design, logoer, tekst, grafikk og AI-modeller — er
              beskyttet av åndsverkloven og tilhører Leverandøren eller dennes
              lisensgivere.
            </p>
            <p className="mt-3">
              Du gis en begrenset, ikke-eksklusiv, ikke-overførbar rett til å
              bruke Tjenesten for personlige formål i samsvar med disse
              Vilkårene. Denne lisensen kan tilbakekalles dersom Vilkårene brytes.
            </p>
            <p className="mt-3">
              Brukerinnhold forblir din eiendom. Ved å laste opp eller legge inn
              data i Tjenesten gir du Leverandøren en begrenset rett til å
              behandle dataene for å levere og forbedre Tjenesten, i samsvar med
              gjeldende personvernlovgivning.
            </p>
          </section>

          {/* 9. Personvern og data */}
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              9. Personvern og databehandling
            </h2>
            <p>
              Leverandøren behandler personopplysninger i samsvar med
              personopplysningsloven og EUs personvernforordning (GDPR). Vi
              samler inn og behandler kun data som er nødvendig for å levere
              Tjenesten.
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>
                <strong className="text-white">Autentisering:</strong> Vi bruker
                Google-innlogging via Firebase Authentication. Vi lagrer ikke
                ditt passord.
              </li>
              <li>
                <strong className="text-white">Datalagring:</strong> Dine
                økonomiske data lagres kryptert i Google Cloud Firestore.
              </li>
              <li>
                <strong className="text-white">AI-behandling:</strong> Lumi
                bruker Google Gemini for å analysere data du aktivt legger inn.
                Data sendes til Googles API for behandling i sanntid og lagres
                ikke hos tredjepart utover det som er nødvendig for å levere
                svaret.
              </li>
              <li>
                <strong className="text-white">Deling:</strong> Vi selger aldri
                dine personopplysninger til tredjeparter.
              </li>
            </ul>
            <p className="mt-3">
              Du har til enhver tid rett til innsyn, retting, sletting og
              dataportabilitet i henhold til GDPR artikkel 15–20. For å utøve
              dine rettigheter, kontakt oss på kontakt@sparlett.no.
            </p>
          </section>

          {/* 10. Ansvarsbegrensning */}
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              10. Ansvarsbegrensning
            </h2>
            <p>
              Tjenesten leveres &quot;som den er&quot; og &quot;som
              tilgjengelig&quot;. Leverandøren gir ingen garantier, verken
              uttrykte eller underforståtte, knyttet til:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>
                Nøyaktigheten, fullstendigheten eller påliteligheten av innhold
                generert av AI-assistenten Lumi.
              </li>
              <li>
                Uavbrutt tilgang til Tjenesten eller fravær av tekniske feil.
              </li>
              <li>
                Egnethet for et bestemt formål eller spesifikke økonomiske
                resultater.
              </li>
            </ul>
            <p className="mt-3">
              Leverandøren er ikke ansvarlig for direkte eller indirekte tap,
              inkludert, men ikke begrenset til, tapte inntekter, tapte
              besparelser eller tap av data, som følge av bruk av Tjenesten —
              med mindre tapet skyldes grov uaktsomhet eller forsett fra
              Leverandørens side, i samsvar med norsk lov.
            </p>
            <p className="mt-3">
              Sparlett.no er ikke et finansforetak og tilbyr ikke
              investeringsrådgivning, kreditt eller andre regulerte finansielle
              tjenester. Informasjon gitt gjennom Tjenesten erstatter ikke
              profesjonell rådgivning fra autoriserte rådgivere.
            </p>
          </section>

          {/* 11. Endringer i vilkårene */}
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              11. Endringer i vilkårene
            </h2>
            <p>
              Leverandøren forbeholder seg retten til å endre disse Vilkårene.
              Ved vesentlige endringer vil vi varsle deg via e-post eller gjennom
              Tjenesten minst 30 dager før endringene trer i kraft.
            </p>
            <p className="mt-3">
              Fortsatt bruk av Tjenesten etter at endringene har trådt i kraft,
              anses som aksept av de oppdaterte Vilkårene. Dersom du ikke
              aksepterer endringene, kan du avslutte din konto i henhold til
              punkt 12.
            </p>
          </section>

          {/* 12. Oppsigelse */}
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              12. Oppsigelse
            </h2>
            <p>
              Du kan når som helst avslutte din konto ved å kontakte oss på
              kontakt@sparlett.no. Ved oppsigelse vil vi slette dine
              personopplysninger og brukerdata i samsvar med GDPR, med mindre
              lovpålagt oppbevaring krever noe annet.
            </p>
            <p className="mt-3">
              Leverandøren kan suspendere eller avslutte din tilgang til
              Tjenesten dersom du bryter disse Vilkårene, eller dersom det
              foreligger saklig grunn. Du vil bli varslet om dette med mindre
              umiddelbar handling er nødvendig av sikkerhetshensyn.
            </p>
          </section>

          {/* 13. Force majeure */}
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              13. Force majeure
            </h2>
            <p>
              Leverandøren er ikke ansvarlig for manglende oppfyllelse av sine
              forpliktelser dersom dette skyldes omstendigheter utenfor
              Leverandørens kontroll, inkludert, men ikke begrenset til,
              naturkatastrofer, krig, pandemier, strømbrudd, internettfeil eller
              handlinger fra offentlige myndigheter.
            </p>
          </section>

          {/* 14. Lovvalg og tvisteløsning */}
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              14. Lovvalg og tvisteløsning
            </h2>
            <p>
              Disse Vilkårene er underlagt norsk lov. Eventuelle tvister som
              oppstår i forbindelse med Tjenesten eller disse Vilkårene skal
              først søkes løst gjennom dialog mellom partene.
            </p>
            <p className="mt-3">
              Dersom partene ikke kommer til enighet, kan tvisten bringes inn
              for Forliksrådet eller de alminnelige domstolene med Oslo tingrett
              som verneting.
            </p>
            <p className="mt-3">
              For forbrukere gjelder forbrukerens rettigheter etter
              forbrukerkjøpsloven, angrerettloven og øvrig preseptorisk
              forbrukerlovgivning uavhengig av Vilkårene.
            </p>
          </section>

          {/* 15. Kontakt */}
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              15. Kontaktinformasjon
            </h2>
            <p>
              Dersom du har spørsmål om disse Vilkårene eller Tjenesten, kan du
              kontakte oss:
            </p>
            <div className="mt-4 rounded-xl border border-border bg-surface/50 p-4">
              <p className="font-semibold text-white">BLOM SOLUTIONS</p>
              <p>Organisasjonsnummer: 834 411 342</p>
              <p>E-post: kontakt@sparlett.no</p>
              <p>Nettsted: sparlett.no</p>
            </div>
          </section>
        </div>

        <div className="mt-16 border-t border-border pt-8 flex flex-wrap gap-4">
          <Link href="/" className="text-sm text-accent transition-colors hover:text-accent-hover">
            &larr; Tilbake til forsiden
          </Link>
          <span className="text-sm text-border">|</span>
          <Link href="/personvern" className="text-sm text-muted transition-colors hover:text-white">Personvern</Link>
          <Link href="/cookies" className="text-sm text-muted transition-colors hover:text-white">Cookies</Link>
          <Link href="/gdpr" className="text-sm text-muted transition-colors hover:text-white">GDPR</Link>
        </div>
      </main>
    </div>
  );
}
