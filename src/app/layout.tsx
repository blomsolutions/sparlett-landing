import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sparlett.no"),
  title: {
    default: "Sparlett.no — Spar smartere. Lev friere.",
    template: "%s — Sparlett.no",
  },
  description:
    "Din personlige AI-drevne økonomiassistent. Sparlett.no gjør kompleks økonomi enkel, visuell og motiverende.",
  keywords: [
    "sparing",
    "økonomi",
    "AI",
    "personlig økonomi",
    "budsjett",
    "fintech",
    "Norge",
    "sparekalkulator",
    "valutakalkulator",
    "økonomiapp",
  ],
  authors: [{ name: "BLOM SOLUTIONS" }],
  creator: "BLOM SOLUTIONS",
  publisher: "BLOM SOLUTIONS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Sparlett.no — Spar smartere. Lev friere.",
    description:
      "Din personlige AI-drevne økonomiassistent. Sparlett.no gjør kompleks økonomi enkel, visuell og motiverende.",
    url: "https://sparlett.no",
    siteName: "Sparlett.no",
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sparlett.no — Spar smartere. Lev friere.",
    description:
      "Din personlige AI-drevne økonomiassistent. Sparlett.no gjør kompleks økonomi enkel, visuell og motiverende.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sparlett.no",
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://sparlett.no/#organization",
      name: "BLOM SOLUTIONS",
      url: "https://sparlett.no",
      logo: {
        "@type": "ImageObject",
        url: "https://sparlett.no/Horizontal_logo_white.svg",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "kontakt@sparlett.no",
        telephone: "+47-907-90-093",
        contactType: "customer service",
        availableLanguage: "Norwegian",
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://sparlett.no/#website",
      url: "https://sparlett.no",
      name: "Sparlett.no",
      description:
        "Din personlige AI-drevne økonomiassistent. Sparlett.no gjør kompleks økonomi enkel, visuell og motiverende.",
      publisher: {
        "@id": "https://sparlett.no/#organization",
      },
      inLanguage: "nb-NO",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://sparlett.no/#app",
      name: "Sparlett.no",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: "https://app.sparlett.no",
      description:
        "AI-drevet økonomiassistent som hjelper deg med budsjett, sparing og personlig økonomi.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "NOK",
        availability: "https://schema.org/InStock",
      },
      publisher: {
        "@id": "https://sparlett.no/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
