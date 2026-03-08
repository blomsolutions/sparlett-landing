"use client";

const COLORS = {
  sand: "#C8A87C",
  sage: "#4A7C6F",
  sageDark: "#2A5449",
};

// Order: sageDark, sand, sage (clockwise from top, matching brand guide)
// States: 0=neutral(1/3 each), 1=insight(sand heavy), 2=savings(sage heavy), 3=goals(sageDark heavy)
const STATES = [
  [1 / 3, 1 / 3, 1 / 3],
  [0.2, 0.55, 0.25],
  [0.23, 0.22, 0.55],
  [0.55, 0.22, 0.23],
];

interface Ring3Props {
  size?: number;
  strokeWidth?: number;
  state?: number;
  className?: string;
}

export default function Ring3({
  size = 80,
  strokeWidth,
  state = 0,
  className,
}: Ring3Props) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.38;
  const circ = 2 * Math.PI * r;
  const sw = strokeWidth || size * 0.08;
  const proportions = STATES[state] || STATES[0];
  const colors = [COLORS.sageDark, COLORS.sand, COLORS.sage];
  let offset = -circ * 0.25;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
    >
      {proportions.map((val, i) => {
        const dashLen = circ * val;
        const gapLen = circ - dashLen;
        const currentOffset = offset;
        offset += dashLen;
        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={colors[i]}
            strokeWidth={sw}
            strokeDasharray={`${dashLen - 1.5} ${gapLen + 1.5}`}
            strokeDashoffset={-currentOffset}
            style={{ transition: "all 0.5s ease" }}
          />
        );
      })}
    </svg>
  );
}
