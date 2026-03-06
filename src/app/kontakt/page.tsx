import type { Metadata } from "next";
import SubpageLayout from "@/components/SubpageLayout";
import KontaktForm from "./KontaktForm";
import Curve from "@/components/Curve";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Ta kontakt med Sparlett. Vi svarer vanligvis innen 24 timer.",
};

export default function KontaktPage() {
  return (
    <SubpageLayout>
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12">
            <h1 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Ta <span className="text-sage">kontakt</span>
              <span className="text-sage">.</span>
            </h1>
            <Curve width={140} height={10} strokeWidth={1.5} className="mb-4" />
            <p className="max-w-lg text-lg text-muted">
              Har du spørsmål, tilbakemeldinger eller bare lyst til å si hei? Vi hører gjerne fra deg.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact info */}
            <div className="space-y-6">
              <div>
                <h2 className="mb-4 text-xl font-semibold text-deep">
                  Kontaktinformasjon
                </h2>
                <p className="text-muted leading-relaxed">
                  Vi svarer vanligvis innen 24 timer på hverdager.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href="mailto:hei@sparlett.no"
                  className="group flex items-center gap-4 rounded-xl border border-border bg-white p-4 transition-all hover:border-sage/30"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-sage-light text-sage">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted">E-post</p>
                    <p className="font-medium text-deep">hei@sparlett.no</p>
                  </div>
                </a>

                <a
                  href="tel:+4790790093"
                  className="group flex items-center gap-4 rounded-xl border border-border bg-white p-4 transition-all hover:border-sage/30"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-sage-light text-sage">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted">Telefon</p>
                    <p className="font-medium text-deep">+47 907 90 093</p>
                  </div>
                </a>
              </div>

              <div className="rounded-xl border border-border bg-white p-5">
                <h3 className="mb-2 text-sm font-semibold text-deep">Selskapet</h3>
                <div className="space-y-1 text-sm text-muted">
                  <p>BLOM SOLUTIONS</p>
                  <p>Org.nr: 834 411 342</p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="rounded-2xl border border-border bg-white p-6 sm:p-8">
              <h3 className="mb-6 text-lg font-semibold text-deep">
                Send oss en melding
              </h3>
              <KontaktForm />
            </div>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
