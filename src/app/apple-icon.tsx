import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 36,
          background: "#1E2B26",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          {(() => {
            const cx = 60;
            const cy = 60;
            const r = 44;
            const sw = 14;
            const circ = 2 * Math.PI * r;
            const proportions = [1 / 3, 1 / 3, 1 / 3];
            const colors = ["#C8A87C", "#4A7C6F", "#3D6B5F"];
            const gap = 4;
            let offset = circ * 0.08;

            return proportions.map((val, i) => {
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
          })()}
        </svg>
      </div>
    ),
    { ...size }
  );
}
