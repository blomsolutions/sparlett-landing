import { ImageResponse } from "next/og";

export const alt = "Sparlett — Din økonomi, håndtert.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const cx = 60;
  const cy = 60;
  const r = 44;
  const sw = 12;
  const circ = 2 * Math.PI * r;
  const proportions = [1 / 3, 1 / 3, 1 / 3];
  const colors = ["#C8A87C", "#4A7C6F", "#3D6B5F"];
  const gap = 4;
  let offset = circ * 0.08;

  const ringCircles = proportions.map((val, i) => {
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
        strokeDasharray={`${dashLen - gap} ${gapLen + gap}`}
        strokeDashoffset={-currentOffset}
        strokeLinecap="round"
      />
    );
  });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1E2B26",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'DM Sans', sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle grid pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.04,
            backgroundImage:
              "linear-gradient(#4A7C6F 1px, transparent 1px), linear-gradient(90deg, #4A7C6F 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            display: "flex",
          }}
        />

        {/* Ring3 */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          {ringCircles}
        </svg>

        {/* Wordmark */}
        <div
          style={{
            marginTop: 36,
            fontSize: 56,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            display: "flex",
          }}
        >
          <span style={{ color: "#F5F2ED" }}>Spar</span>
          <span style={{ color: "#4A7C6F" }}>lett</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: 16,
            fontSize: 26,
            color: "#8B9D97",
            letterSpacing: "-0.01em",
            display: "flex",
          }}
        >
          Din økonomi, håndtert
          <span style={{ color: "#4A7C6F" }}>.</span>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 16,
            color: "#8B9D97",
            opacity: 0.6,
          }}
        >
          sparlett.no
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
