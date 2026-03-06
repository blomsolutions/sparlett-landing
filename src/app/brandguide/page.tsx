import type { Metadata } from "next";
import BrandGuideClient from "./BrandGuideClient";

export const metadata: Metadata = {
  title: "Brandguide",
  robots: { index: false, follow: false },
};

export default function BrandGuidePage() {
  return <BrandGuideClient />;
}
