import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 6,
          background: "#1E2B26",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ring3: 3 sectors — sand, sage, sageDark */}
          {(() => {
            const cx = 12;
            const cy = 12;
            const r = 9;
            const sw = 3;
            const circ = 2 * Math.PI * r;
            const proportions = [1 / 3, 1 / 3, 1 / 3];
            const colors = ["#C8A87C", "#4A7C6F", "#3D6B5F"];
            const gap = 1;
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
