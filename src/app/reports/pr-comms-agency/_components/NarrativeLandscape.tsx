import { palette, monthlyData } from "./data";

// Multi-line chart of monthly coverage volume by narrative, Oct '25 – Apr '26.
// AI Adoption is the dominant volume line; GEO is the only narrative still
// accelerating. Trust & Credibility's April spike is annotated separately —
// 498 articles in a single month would crush every other line at scale.

type SeriesKey = "aiAdoption" | "geo" | "consolidation" | "earned" | "talent" | "crisis" | "advocacy";

const SERIES: { key: SeriesKey; label: string; color: string; weight: number }[] = [
  { key: "aiAdoption",    label: "AI Adoption",   color: palette.dusk,      weight: 2.5 },
  { key: "geo",           label: "GEO / AI Vis.", color: palette.lamplight, weight: 2.25 },
  { key: "consolidation", label: "Consolidation", color: palette.shade,     weight: 1.25 },
  { key: "earned",        label: "Earned Media",  color: palette.cool,      weight: 1.25 },
  { key: "talent",        label: "Talent",        color: palette.shade,     weight: 1.25 },
  { key: "crisis",        label: "Crisis PR",     color: palette.uv,        weight: 1.5 },
  { key: "advocacy",      label: "Advocacy",      color: palette.shade,     weight: 1.25 },
];

export function NarrativeLandscape() {
  const W = 800;
  const H = 420;
  const padL = 56;
  const padR = 132;
  const padT = 68;
  const padB = 48;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;

  const maxVal = 240;
  const xStep = chartW / (monthlyData.length - 1);
  const yPos = (v: number) =>
    padT + chartH - (Math.min(v, maxVal) / maxVal) * chartH;
  const xPos = (i: number) => padL + i * xStep;

  const yTicks = [0, 60, 120, 180, 240];
  const lastIdx = monthlyData.length - 1;

  // ─── Endpoint label de-collision ────────────────────────────────────────
  // Sort series by their natural endpoint y, then nudge each label downward
  // to maintain a minimum vertical spacing. Draw a thin connector when the
  // label has been displaced from the line endpoint.
  const MIN_SPACING = 16;
  const lineH = 13;
  const sortedByY = [...SERIES]
    .map((s) => ({
      ...s,
      rawY: yPos(monthlyData[lastIdx][s.key] as number),
    }))
    .sort((a, b) => a.rawY - b.rawY);

  let cursor = -Infinity;
  const placed = sortedByY.map((s) => {
    const y = Math.max(s.rawY, cursor + MIN_SPACING);
    cursor = y;
    return { ...s, y };
  });

  // Then push the bottom labels up if any cluster has run past the chart
  // floor — keeps everything inside the plot area.
  const bottomLimit = padT + chartH + lineH;
  for (let i = placed.length - 1; i >= 0; i--) {
    const upperBound =
      i === placed.length - 1 ? bottomLimit : placed[i + 1].y - MIN_SPACING;
    if (placed[i].y > upperBound) placed[i].y = upperBound;
  }

  return (
    <figure className="w-full">
      <figcaption className="mb-5 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          Monthly article volume by narrative · Oct 2025 – Apr 2026
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          AI Adoption peaked in February. GEO is the only narrative still accelerating.
        </h3>
      </figcaption>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Monthly article volume across PR/comms agency narratives. AI Adoption peaks in February 2026 and falls; GEO accelerates."
      >
        {yTicks.map((t) => (
          <g key={t}>
            <text
              x={padL - 10}
              y={yPos(t) + 4}
              textAnchor="end"
              fontFamily="var(--font-mono)"
              fontSize={10}
              className="fill-muted-foreground tabular-nums"
            >
              {t}
            </text>
            <line
              x1={padL}
              y1={yPos(t)}
              x2={W - padR}
              y2={yPos(t)}
              stroke={palette.border}
              strokeWidth={0.5}
              strokeDasharray="2 4"
              opacity={0.5}
            />
          </g>
        ))}

        {monthlyData.map((row, i) => (
          <text
            key={row.m}
            x={xPos(i)}
            y={H - 14}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize={10}
            className="fill-muted-foreground"
          >
            {row.m}
          </text>
        ))}

        {/* Lines */}
        {SERIES.map((s) => {
          const path = monthlyData
            .map(
              (row, i) =>
                `${i === 0 ? "M" : "L"}${xPos(i)},${yPos(row[s.key] as number)}`
            )
            .join(" ");
          const isFeatured = s.key === "aiAdoption" || s.key === "geo";
          return (
            <path
              key={s.key}
              d={path}
              fill="none"
              stroke={s.color}
              strokeWidth={s.weight}
              strokeLinejoin="round"
              strokeLinecap="round"
              opacity={isFeatured ? 1 : 0.45}
            />
          );
        })}

        {/* Endpoint labels (de-collided) */}
        {placed.map((s) => {
          const isFeatured = s.key === "aiAdoption" || s.key === "geo";
          const labelX = xPos(lastIdx) + 12;
          const dotX = xPos(lastIdx);
          return (
            <g key={`label-${s.key}`}>
              <circle
                cx={dotX}
                cy={s.rawY}
                r={isFeatured ? 3.5 : 2.5}
                fill={s.color}
                opacity={isFeatured ? 1 : 0.55}
              />
              {/* Connector when label shifted from raw endpoint */}
              {Math.abs(s.y - s.rawY) > 1 && (
                <line
                  x1={dotX + 3}
                  y1={s.rawY}
                  x2={labelX - 4}
                  y2={s.y - 3}
                  stroke={s.color}
                  strokeWidth={0.5}
                  opacity={isFeatured ? 0.6 : 0.4}
                />
              )}
              <text
                x={labelX}
                y={s.y}
                fontFamily="var(--font-sans)"
                fontSize={isFeatured ? 11 : 10}
                fill={s.color}
                fontWeight={isFeatured ? 500 : 400}
                opacity={isFeatured ? 1 : 0.78}
                dominantBaseline="middle"
              >
                {s.label}
              </text>
            </g>
          );
        })}

        {/* Annotation: AI Adoption peak (above the Feb point) */}
        <text
          x={xPos(4)}
          y={yPos(205) - 12}
          textAnchor="middle"
          fontFamily="var(--font-sans)"
          fontSize={11}
          fontStyle="italic"
          fill={palette.dusk}
        >
          205 articles · peak
        </text>

        {/* Annotation: −70% drop, placed above the Feb→Apr decline */}
        <text
          x={(xPos(4) + xPos(6)) / 2}
          y={yPos(150)}
          textAnchor="middle"
          fontFamily="var(--font-sans)"
          fontSize={11}
          fontStyle="italic"
          fill={palette.dusk}
          opacity={0.85}
        >
          −70% from Feb peak
        </text>

        {/* Trust spike — off-scale callout pinned to top edge */}
        <g>
          <line
            x1={xPos(6)}
            y1={padT + 12}
            x2={xPos(6)}
            y2={padT + 24}
            stroke={palette.uv}
            strokeWidth={0.75}
          />
          <text
            x={xPos(6) - 10}
            y={padT}
            textAnchor="end"
            fontFamily="var(--font-sans)"
            fontSize={11}
            fontStyle="italic"
            fill={palette.uv}
          >
            Trust &amp; Credibility: 498 articles in April (off-scale)
          </text>
        </g>
      </svg>

      <p className="mt-4 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: Perigon News API; Shadow analysis. Earned media, English, dedup&apos;d. n = 13,200+ articles.
      </p>
    </figure>
  );
}
