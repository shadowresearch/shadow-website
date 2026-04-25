/**
 * HeroLandscapeMark
 *
 * Three stacked narrative lines. Each has a distinct curve form and a single
 * point sitting at a different part of its arc, representing a position within
 * that narrative. The stroke style echoes the hand-drawn curve in the Shadow
 * logo. All motion is CSS-driven and respects prefers-reduced-motion.
 */

const NARRATIVES = [
  {
    id: "compliance",
    index: 1,
    label: "Compliance",
    state: "Gaining",
    color: "#977BA1", // Dusk
    // Upward sweep: starts low, rises through the right half
    path:
      "M 90 110 C 260 128, 420 55, 580 72 S 850 40, 1000 68 S 1150 95, 1180 55",
    pointX: 580,
    pointY: 72,
    captionDy: -14,
  },
  {
    id: "developer",
    index: 2,
    label: "Developer",
    state: "Contested",
    color: "#7489A3", // UV
    // Rolling oscillation across the width
    path:
      "M 90 185 C 210 165, 320 215, 430 185 S 600 155, 740 195 S 910 210, 1030 178 S 1130 160, 1180 180",
    pointX: 910,
    pointY: 200,
    captionDy: 22,
  },
  {
    id: "regulatory",
    index: 3,
    label: "Regulatory",
    state: "Open",
    color: "#B27A53", // Lamplight
    // Gentle terrain with a single dip mid-left
    path:
      "M 90 278 C 220 290, 340 308, 460 282 S 680 258, 820 280 S 1040 298, 1180 273",
    pointX: 460,
    pointY: 282,
    captionDy: 22,
  },
] as const;

export function HeroLandscapeMark() {
  return (
    <svg
      viewBox="0 0 1200 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="hero-landscape-mark w-full h-auto overflow-visible [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]"
    >
      {NARRATIVES.map((n) => (
        <g key={n.id} className={`narrative narrative-${n.index}`}>
          {/* Narrative curve */}
          <path
            className="narrative-curve"
            d={n.path}
            stroke={n.color}
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={1}
          />

          {/* Marker point (static translate wraps animated scale group) */}
          <g transform={`translate(${n.pointX}, ${n.pointY})`}>
            <g className="narrative-point">
              <circle
                r="22"
                fill={n.color}
                opacity="0.18"
                className="narrative-pulse"
              />
              <circle r="10" fill={n.color} opacity="0.35" />
              <circle r="5" fill={n.color} />
            </g>
          </g>

          {/* Caption near the point (state + claim tag) */}
          <g
            transform={`translate(${n.pointX + 10}, ${n.pointY + n.captionDy})`}
          >
            <g className="narrative-caption">
              <text
                fontSize="9"
                fontFamily="var(--font-mono), ui-monospace, monospace"
                fill="currentColor"
                opacity="0.65"
                letterSpacing="0.06em"
                className="uppercase select-none"
              >
                {n.state}
              </text>
              <text
                y="11"
                fontSize="8.5"
                fontFamily="var(--font-mono), ui-monospace, monospace"
                fill="currentColor"
                opacity="0.38"
                letterSpacing="0.04em"
                className="select-none"
              >
                {`claim · ${String(n.index * 3 + 2).padStart(2, "0")}`}
              </text>
            </g>
          </g>
        </g>
      ))}
    </svg>
  );
}
