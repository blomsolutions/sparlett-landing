import Link from "next/link";
import SubpageLayout from "@/components/SubpageLayout";

export default function NotFound() {
  return (
    <SubpageLayout>
      <main className="flex flex-col items-center justify-center px-6 py-32 text-center">
        <p className="mb-4 text-8xl font-bold text-accent">404</p>
        <h1 className="mb-3 text-2xl font-bold text-white">
          Siden ble ikke funnet
        </h1>
        <p className="mb-10 max-w-md text-muted">
          Beklager, vi finner ikke siden du leter etter. Den kan ha blitt flyttet
          eller eksisterer ikke lenger.
        </p>
        <Link
          href="/"
          className="rounded-xl bg-accent px-8 py-3.5 font-medium text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-hover"
        >
          Tilbake til forsiden
        </Link>
      </main>
    </SubpageLayout>
  );
}
