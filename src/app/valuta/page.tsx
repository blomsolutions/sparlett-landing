import type { Metadata } from "next";
import SubpageLayout from "@/components/SubpageLayout";
import ValutaContent from "./ValutaContent";

export const metadata: Metadata = {
  title: "Valutakalkulator — Sparlett.no",
  description:
    "Gratis valutakalkulator med offisielle kurser fra Norges Bank. Regn om mellom NOK og 37+ valutaer.",
};

export default function ValutaPage() {
  return (
    <SubpageLayout>
      <ValutaContent />
    </SubpageLayout>
  );
}
