import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import InsightSection from "@/components/InsightSection";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "https://sparlett.no" },
  openGraph: {
    title: "Sparlett — Lett å spare. Lett å ha kontroll.",
    description: "Sparlett gir deg innsikt og kontroll over økonomien din — budsjett, sparing, faste utgifter og AI-rådgivning samlet i en norsk app.",
    url: "https://sparlett.no",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <InsightSection />
        <Pricing />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
