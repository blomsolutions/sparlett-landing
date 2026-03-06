"use client";

import { useRef, useState, useCallback } from "react";

interface ChartPoint {
  x: number;
  y: number;
  label: string;
  value: number;
  dateLabel: string;
}

interface InteractiveChartProps {
  data: { date: string; value: number }[];
  color: string;
  valuePrefix?: string;
  valueSuffix?: string;
  valueDecimals?: number;
  height?: number;
}

export default function InteractiveChart({
  data,
  color,
  valuePrefix = "",
  valueSuffix = "",
  valueDecimals = 2,
  height = 200,
}: InteractiveChartProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  const w = 600;
  const h = height;
  const pad = 30;

  if (data.length < 2) return null;

  const values = data.map((d) => d.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;

  const points: ChartPoint[] = data.map((d, i) => {
    const x = pad + (i / (data.length - 1)) * (w - pad * 2);
    const y = h - pad - ((d.value - min) / range) * (h - pad * 2);
    const dt = new Date(d.date);
    const dateLabel = `${String(dt.getDate()).padStart(2, "0")}.${String(dt.getMonth() + 1).padStart(2, "0")}.${dt.getFullYear()}`;
    return { x, y, label: d.date, value: d.value, dateLabel };
  });

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${h - pad} L ${points[0].x} ${h - pad} Z`;

  const gridLines = 4;
  const gridVals = Array.from({ length: gridLines }, (_, i) => min + (range / (gridLines - 1)) * i);

  const step = Math.max(1, Math.floor(data.length / 4));
  const dateIdxs = [0, step, step * 2, step * 3, data.length - 1].filter(
    (idx, i, arr) => idx < data.length && arr.indexOf(idx) === i
  );

  const getIdxFromEvent = useCallback(
    (e: React.MouseEvent<SVGSVGElement> | React.TouchEvent<SVGSVGElement>) => {
      const svg = svgRef.current;
      if (!svg || points.length === 0) return null;

      const rect = svg.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const svgX = ((clientX - rect.left) / rect.width) * w;

      let closest = 0;
      let closestDist = Infinity;
      for (let i = 0; i < points.length; i++) {
        const dist = Math.abs(points[i].x - svgX);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      }
      return closest;
    },
    [points, w]
  );

  const handleMove = useCallback(
    (e: React.MouseEvent<SVGSVGElement> | React.TouchEvent<SVGSVGElement>) => {
      const idx = getIdxFromEvent(e);
      if (idx !== null) setHoverIdx(idx);
    },
    [getIdxFromEvent]
  );

  const handleLeave = useCallback(() => setHoverIdx(null), []);

  const hp = hoverIdx !== null ? points[hoverIdx] : null;

  return (
    <div className="relative">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${w} ${h}`}
        className="w-full cursor-crosshair"
        preserveAspectRatio="xMidYMid meet"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onTouchMove={handleMove}
        onTouchEnd={handleLeave}
      >
        {/* Grid */}
        {gridVals.map((val, i) => {
          const gy = h - pad - ((val - min) / range) * (h - pad * 2);
          return (
            <g key={i}>
              <line x1={pad} y1={gy} x2={w - pad} y2={gy} stroke="#D4D0C8" strokeWidth={0.5} strokeDasharray="4 4" />
              <text x={pad - 4} y={gy + 3} fontSize={8} fill="#8B9D97" textAnchor="end" fontFamily="JetBrains Mono, monospace">
                {val.toFixed(valueDecimals > 2 ? 4 : 1)}
              </text>
            </g>
          );
        })}

        {/* Date labels */}
        {dateIdxs.map((idx) => {
          const p = points[idx];
          if (!p) return null;
          const dt = new Date(p.label);
          const short = `${String(dt.getDate()).padStart(2, "0")}.${String(dt.getMonth() + 1).padStart(2, "0")}`;
          return (
            <text key={idx} x={p.x} y={h - 8} fontSize={8} fill="#8B9D97" textAnchor="middle" fontFamily="JetBrains Mono, monospace">
              {short}
            </text>
          );
        })}

        {/* Area + Line */}
        <defs>
          <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.15} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#chart-grad)" />
        <path d={linePath} fill="none" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />

        {/* End dot (when not hovering) */}
        {hoverIdx === null && (
          <circle cx={points[points.length - 1].x} cy={points[points.length - 1].y} r={3} fill={color} />
        )}

        {/* Hover crosshair */}
        {hp && (
          <>
            <line x1={hp.x} y1={pad / 2} x2={hp.x} y2={h - pad} stroke={color} strokeWidth={0.75} strokeDasharray="3 3" opacity={0.6} />
            <circle cx={hp.x} cy={hp.y} r={4} fill="white" stroke={color} strokeWidth={2} />
          </>
        )}
      </svg>

      {/* Tooltip */}
      {hp && (
        <div
          className="pointer-events-none absolute top-0 z-10 rounded-md border border-border bg-white px-3 py-1.5 shadow-sm"
          style={{
            left: `${(hp.x / w) * 100}%`,
            transform: hp.x > w / 2 ? "translateX(-110%)" : "translateX(10%)",
          }}
        >
          <div className="font-mono text-xs font-semibold text-deep">
            {valuePrefix}{hp.value.toLocaleString("nb-NO", { minimumFractionDigits: valueDecimals, maximumFractionDigits: valueDecimals })}{valueSuffix}
          </div>
          <div className="font-mono text-[10px] text-muted">{hp.dateLabel}</div>
        </div>
      )}
    </div>
  );
}
