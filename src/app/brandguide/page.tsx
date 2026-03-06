import type { Metadata } from "next";
import BrandGuideWrapper from "./BrandGuideWrapper";

export const metadata: Metadata = {
  title: "Brandguide",
  robots: { index: false, follow: false },
};

export default function BrandGuidePage() {
  return <BrandGuideWrapper />;
}
