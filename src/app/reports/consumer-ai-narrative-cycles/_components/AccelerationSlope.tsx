import {
  palette,
  quarterlyData,
  narratives,
  type NarrativeKey,
} from "./data";

// Slopegraph: Q4 2025 → Q1 2026 percent change by narrative.
// Biggest mover highlighted in Dusk; others in Shade.

function qoqPct(prev: number | null, cur: number | null): number | null {
  if (prev == null || cur == null || prev === 0) return null;
  return Math.round(((cur - prev) / prev) * 100);
}

export function AccelerationSlope() {
  const prev = quarterlyData[quarterlyData.length - 2]; // Q4 '25
  const cur = quarterlyData[quarterlyData.length - 1]; // Q1 '26

  const points = narratives
    .map((n) => ({
      key: n.key as NarrativeKey,
      label: n.label,
      pct: qoqPct(
        prev[n.key as keyof typeof prev] as number | null,
        cur[n.key as keyof typeof cur] as number | null
      ),
    }))
    .filter((p): p is { key: NarrativeKey; label: string; pct: number } => p.pct != null)
    .sort((a, b) => b.pct - a.pct);

  const maxPct = Math.max(...points.map((p) => p.pct));
  const minPct = Math.min(...points.map((p) => p.pct));

  const W = 800;
  const H = 420;
  const padL = 24;
  const padR = 24;
  const padT = 56;
  const padB = 44;
  const chartH = H - padT - padB;
  const leftX = padL + 140;
  const rightX = W - padR - 140;

  // All narratives start at the same baseline (0) on the left axis.
  // Right axis encodes the percent change.
  const yPos = (pct: number) => {
    const normalized = (pct - minPct) / (maxPct - minPct);
    return padT + chartH - normalized * chartH;
  };

  const topKey = points[0].key;

  return (
    <figure className="w-full">
      <figcaption className="mb-5 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          QoQ percent change · Q4 2025 → Q1 2026
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          Embodied AI grew faster than every other narrative, 88 points ahead of agentic.
        </h3>
      </figcaption>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Slopegraph of QoQ percent change by narrative, Q4 2025 to Q1 2026."
      >
        {/* Axis labels */}
        <text
          x={leftX}
          y={padT - 20}
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize={10}
          fill={palette.shade}
          className="uppercase tracking-widest"
        >
          Q4 &apos;25
        </text>
        <text
          x={rightX}
          y={padT - 20}
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize={10}
          fill={palette.shade}
          className="uppercase tracking-widest"
        >
          Q1 &apos;26
        </text>

        {/* Vertical anchor rules */}
        <line
          x1={leftX}
          y1={padT}
          x2={leftX}
          y2={padT + chartH}
          stroke={palette.border}
          strokeWidth={0.5}
        />
        <line
          x1={rightX}
          y1={padT}
          x2={rightX}
          y2={padT + chartH}
          stroke={palette.border}
          strokeWidth={0.5}
        />

        {points.map((p) => {
          const isTop = p.key === topKey;
          const y = yPos(p.pct);
          const color = isTop ? palette.dusk : palette.shade;
          const lineOpacity = isTop ? 1 : 0.6;
          return (
            <g key={p.key}>
              <line
                x1={leftX}
                y1={padT + chartH / 2} // all start stacked at middle on Q4 side
                x2={rightX}
                y2={y}
                stroke={color}
                strokeWidth={isTop ? 2.25 : 1.25}
                opacity={lineOpacity}
              />
              <circle cx={rightX} cy={y} r={isTop ? 4 : 3} fill={color} />
              <text
                x={rightX + 10}
                y={y + 4}
                fontFamily="var(--font-sans)"
                fontSize={12}
                fontWeight={isTop ? 500 : 400}
                fill={color}
              >
                {p.label}
              </text>
              <text
                x={rightX + 10}
                y={y + 18}
                fontFamily="var(--font-mono)"
                fontSize={11}
                fill={color}
                className="tabular-nums"
              >
                +{p.pct}%
              </text>
            </g>
          );
        })}

        {/* Left-side single label */}
        <text
          x={leftX - 12}
          y={padT + chartH / 2 + 4}
          textAnchor="end"
          fontFamily="var(--font-sans)"
          fontSize={12}
          fill={palette.shade}
        >
          All narratives
        </text>

        {/* Annotation */}
        <text
          x={rightX - 40}
          y={padT - 4}
          textAnchor="end"
          fontFamily="var(--font-sans)"
          fontSize={11}
          fontStyle="italic"
          fill={palette.dusk}
        >
          Fastest mover of the quarter
        </text>
      </svg>

      <p className="mt-4 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: Perigon; Shadow analysis. Percent change in quarterly article volume.
      </p>
    </figure>
  );
}
