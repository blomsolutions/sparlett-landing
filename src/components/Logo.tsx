import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  darkBg?: boolean;
}

const heights = {
  sm: 16,
  md: 20,
  lg: 28,
};

export default function Logo({ size = "md", darkBg = false }: LogoProps) {
  const h = heights[size];
  // SVG aspect ratio: 555 / 147 ≈ 3.78
  const w = Math.round(h * 3.78);

  return (
    <Image
      src={darkBg ? "/brand/logo-light.svg" : "/brand/logo-dark.svg"}
      alt="Sparlett"
      width={w}
      height={h}
      priority
    />
  );
}
