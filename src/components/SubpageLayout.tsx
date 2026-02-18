import Link from "next/link";
import Image from "next/image";
import Footer from "./Footer";

export default function SubpageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/Horizontal_logo_white.svg"
              alt="Sparlett.no"
              width={130}
              height={30}
              className="h-7 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="text-sm text-muted transition-colors hover:text-white"
          >
            &larr; Tilbake til forsiden
          </Link>
        </div>
      </header>

      {children}

      <Footer />
    </div>
  );
}
