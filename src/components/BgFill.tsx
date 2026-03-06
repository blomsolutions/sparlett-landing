interface BgFillProps {
  color?: string;
  opacity?: number;
  lineOpacity?: number;
}

export default function BgFill({
  color = "#4A7C6F",
  opacity = 0.05,
  lineOpacity = 0.08,
}: BgFillProps) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 900 300"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full"
    >
      <path
        d="M -20 320 Q 150 30 920 170 L 920 320 L -20 320 Z"
        fill={color}
        opacity={opacity}
      />
      <path
        d="M -20 320 Q 150 30 920 170"
        fill="none"
        stroke={color}
        strokeWidth="1.2"
        opacity={lineOpacity}
      />
    </svg>
  );
}
