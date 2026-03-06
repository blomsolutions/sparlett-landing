"use client";

import dynamic from "next/dynamic";
import Spinner from "@/components/Spinner";

const BrandGuideClient = dynamic(() => import("./BrandGuideClient"), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-screen items-center justify-center bg-canvas">
      <Spinner size="lg" />
    </div>
  ),
});

export default function BrandGuideWrapper() {
  return <BrandGuideClient />;
}
