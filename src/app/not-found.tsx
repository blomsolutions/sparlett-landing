import SubpageLayout from "@/components/SubpageLayout";
import Ring3 from "@/components/Ring3";

export default function NotFound() {
  return (
    <SubpageLayout>
      <section className="py-20">
        <div className="mx-auto max-w-md px-6 text-center">
          <Ring3 size={64} strokeWidth={5} className="mx-auto mb-6" />
          <h1 className="mb-3 font-mono text-6xl font-bold text-sage">404</h1>
          <p className="mb-2 text-xl font-semibold text-deep">Siden finnes ikke<span className="text-sage">.</span></p>
          <p className="mb-8 text-muted">Vi fant ikke siden du leter etter.</p>
          <a
            href="/"
            className="inline-block rounded-lg bg-sage px-6 py-3 font-semibold text-white transition-all hover:bg-sage-dark"
          >
            Tilbake til forsiden
          </a>
        </div>
      </section>
    </SubpageLayout>
  );
}
