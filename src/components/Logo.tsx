import Ring3 from "./Ring3";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  darkBg?: boolean;
}

const sizes = {
  sm: { ring: 14, sw: 1.4, text: "text-xs" },
  md: { ring: 22, sw: 2, text: "text-base" },
  lg: { ring: 32, sw: 2.5, text: "text-2xl" },
};

export default function Logo({ size = "md", darkBg = false }: LogoProps) {
  const s = sizes[size];
  return (
    <div className="flex items-center gap-1.5">
      <Ring3 size={s.ring} strokeWidth={s.sw} />
      <span
        className={`${s.text} font-bold tracking-tight ${darkBg ? "text-canvas" : "text-deep"}`}
      >
        Spar<span className="text-sage">lett</span>
      </span>
    </div>
  );
}
