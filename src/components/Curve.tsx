interface CurveProps {
  width?: number;
  height?: number;
  stroke?: string;
  strokeWidth?: number;
  className?: string;
}

export default function Curve({
  width = 200,
  height = 24,
  stroke = "#4A7C6F",
  strokeWidth = 2,
  className,
}: CurveProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className={className}
      style={{ display: "block" }}
    >
      <path
        d={`M 0 ${height - 1} Q ${width * 0.18} ${height * 0.02} ${width} ${height * 0.28}`}
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
