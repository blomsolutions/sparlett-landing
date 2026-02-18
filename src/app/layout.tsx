import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sparlett.no — Spar smartere. Lev friere.",
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
  ],
  openGraph: {
    title: "Sparlett.no — Spar smartere. Lev friere.",
    description:
      "Din personlige AI-drevne økonomiassistent. Sparlett.no gjør kompleks økonomi enkel, visuell og motiverende.",
    url: "https://sparlett.no",
    siteName: "Sparlett.no",
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
