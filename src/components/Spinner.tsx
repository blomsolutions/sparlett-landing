"use client";

// Order: sageDark, sand, sage (clockwise from top, matching brand guide)
const COLORS = ["#2A5449", "#C8A87C", "#4A7C6F"];
const STATES = [
  [1 / 3, 1 / 3, 1 / 3],
  [0.2, 0.55, 0.25],
  [0.23, 0.22, 0.55],
  [0.55, 0.22, 0.23],
];
const GAP = 1.5;

const sizes = { sm: 28, md: 40, lg: 56 } as const;

interface SpinnerProps {
  size?: keyof typeof sizes | number;
  className?: string;
}

export default function Spinner({ size: sizeProp = "md", className }: SpinnerProps) {
  const sz = typeof sizeProp === "number" ? sizeProp : sizes[sizeProp];
  const cx = sz / 2;
  const cy = sz / 2;
  const r = sz * 0.38;
  const sw = sz * 0.08;
  const circ = 2 * Math.PI * r;

  // Build keyframes for each sector
  const keyframes = COLORS.map((_, sectorIdx) => {
    const dashName = `sp-d-${sz}-${sectorIdx}`;
    const offName = `sp-o-${sz}-${sectorIdx}`;

    let dashKf = "";
    let offKf = "";

    STATES.forEach((state, stateIdx) => {
      const arriveAt = stateIdx * 25;
      const holdUntil = arriveAt + 12;
      const d = circ * state[sectorIdx];
      const g = circ - d;
      let off = -circ * 0.25;
      for (let j = 0; j < sectorIdx; j++) off += circ * state[j];
      const da = `stroke-dasharray:${d - GAP} ${g + GAP}`;
      const dof = `stroke-dashoffset:${-off}`;
      dashKf += `${arriveAt}%{${da}} ${holdUntil}%{${da}} `;
      offKf += `${arriveAt}%{${dof}} ${holdUntil}%{${dof}} `;
    });

    // Close loop back to state 0
    const d0 = circ * STATES[0][sectorIdx];
    const g0 = circ - d0;
    let off0 = -circ * 0.25;
    for (let j = 0; j < sectorIdx; j++) off0 += circ * STATES[0][j];
    dashKf += `100%{stroke-dasharray:${d0 - GAP} ${g0 + GAP}}`;
    offKf += `100%{stroke-dashoffset:${-off0}}`;

    return { dashName, offName, dashKf, offKf };
  });

  // Initial values (state 0)
  const initials = COLORS.map((_, i) => {
    const d = circ * STATES[0][i];
    const g = circ - d;
    let off = -circ * 0.25;
    for (let j = 0; j < i; j++) off += circ * STATES[0][j];
    return { da: `${d - GAP} ${g + GAP}`, offset: -off };
  });

  return (
    <div className={className}>
      <style>{`
        @keyframes sp-rot{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        ${keyframes.map((k) => `@keyframes ${k.dashName}{${k.dashKf}} @keyframes ${k.offName}{${k.offKf}}`).join("\n")}
      `}</style>
      <svg
        width={sz}
        height={sz}
        viewBox={`0 0 ${sz} ${sz}`}
        style={{ animation: "sp-rot 3s linear infinite" }}
      >
        {COLORS.map((col, i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={col}
            strokeWidth={sw}
            strokeDasharray={initials[i].da}
            strokeDashoffset={initials[i].offset}
            style={{
              animation: `${keyframes[i].dashName} 8s ease-in-out infinite, ${keyframes[i].offName} 8s ease-in-out infinite`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
