import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sparlett.no"),
  title: {
    default: "Sparlett — Lett å spare. Lett å ha kontroll.",
    template: "%s — Sparlett",
  },
  description:
    "Sparlett gir deg innsikt og kontroll over økonomien din — og jobber for deg selv når du ikke tenker på det.",
  keywords: [
    "sparing",
    "økonomi",
    "personlig økonomi",
    "budsjett",
    "fintech",
    "Norge",
    "sparekalkulator",
    "valutakalkulator",
    "økonomiapp",
    "sparemål",
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
    title: "Sparlett — Lett å spare. Lett å ha kontroll.",
    description:
      "Sparlett gir deg innsikt og kontroll over økonomien din — og jobber for deg selv når du ikke tenker på det.",
    url: "https://sparlett.no",
    siteName: "Sparlett",
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sparlett — Lett å spare. Lett å ha kontroll.",
    description:
      "Sparlett gir deg innsikt og kontroll over økonomien din — og jobber for deg selv når du ikke tenker på det.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://sparlett.no/#organization",
      name: "BLOM SOLUTIONS",
      url: "https://sparlett.no",
      logo: "https://sparlett.no/icon.svg",
      contactPoint: {
        "@type": "ContactPoint",
        email: "hei@sparlett.no",
        telephone: "+47-907-90-093",
        contactType: "customer service",
        availableLanguage: "Norwegian",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://sparlett.no/#website",
      url: "https://sparlett.no",
      name: "Sparlett",
      description:
        "Sparlett gir deg innsikt og kontroll over økonomien din — og jobber for deg selv når du ikke tenker på det.",
      publisher: { "@id": "https://sparlett.no/#organization" },
      inLanguage: "nb-NO",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://sparlett.no/#app",
      name: "Sparlett",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: "https://app.sparlett.no",
      description:
        "Smart spareplattform som gir deg innsikt og kontroll over økonomien din.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "NOK",
        availability: "https://schema.org/InStock",
      },
      publisher: { "@id": "https://sparlett.no/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
