import {
  palette,
  dailyData,
  NARRATIVE_KEYS,
  formatComma,
  shortDate,
} from "./data";

// Daily total media volume across all 6 consumer & brand narratives, 28 days.
// History line in shade; peak day (Apr 24, the Tariff/Luxury initialization)
// annotated as the inflection point for the category.

export function CategoryLandscape() {
  const totals = dailyData.map((row) => {
    const sum = NARRATIVE_KEYS.reduce(
      (acc, k) => acc + (row[k] ?? 0),
      0
    );
    return { date: row.date, total: sum };
  });

  const grandTotal = totals.reduce((a, t) => a + t.total, 0);

  const W = 800;
  const H = 360;
  const padL = 56;
  const padR = 32;
  const padT = 48;
  const padB = 56;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;

  const maxVal = 2800;
  const xStep = chartW / (totals.length - 1);
  const yPos = (v: number) => padT + chartH - (v / maxVal) * chartH;
  const xPos = (i: number) => padL + i * xStep;

  const path = totals
    .map((t, i) => `${i === 0 ? "M" : "L"}${xPos(i)},${yPos(t.total)}`)
    .join(" ");

  // Highlight the single highest day (2026-04-24, 2,495 articles).
  const peakIdx = totals.reduce(
    (acc, t, i) => (t.total > totals[acc].total ? i : acc),
    0
  );
  const peak = totals[peakIdx];

  const yTicks = [0, 700, 1400, 2100, 2800];

  return (
    <figure className="w-full">
      <figcaption className="mb-5 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          Daily article volume · 30 Mar – 26 Apr 2026
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          28,382 articles in 28 days. Two new narratives went live in the final week.
        </h3>
      </figcaption>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Daily total article volume across six consumer and brand narratives, with peak day annotated."
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
              {formatComma(t)}
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

        {totals.map((t, i) =>
          i === 0 || i === totals.length - 1 || i % 7 === 0 ? (
            <text
              key={t.date}
              x={xPos(i)}
              y={H - 18}
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize={10}
              className="fill-muted-foreground"
            >
              {shortDate(t.date)}
            </text>
          ) : null
        )}

        <path
          d={path}
          fill="none"
          stroke={palette.shade}
          strokeWidth={1.75}
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Peak-day marker */}
        <circle
          cx={xPos(peakIdx)}
          cy={yPos(peak.total)}
          r={4}
          fill={palette.dusk}
        />
        <line
          x1={xPos(peakIdx)}
          y1={yPos(peak.total) - 6}
          x2={xPos(peakIdx) - 70}
          y2={yPos(peak.total) - 30}
          stroke={palette.dusk}
          strokeWidth={0.5}
        />
        <text
          x={xPos(peakIdx) - 74}
          y={yPos(peak.total) - 34}
          textAnchor="end"
          fontFamily="var(--font-sans)"
          fontSize={11}
          fontStyle="italic"
          fill={palette.dusk}
        >
          Tariff + Luxury initialize · {formatComma(peak.total)} articles
        </text>

        {/* Weekend rhythm callout */}
        <text
          x={xPos(5)}
          y={yPos(473) + 16}
          textAnchor="middle"
          fontFamily="var(--font-sans)"
          fontSize={10}
          fontStyle="italic"
          fill={palette.shade}
        >
          weekend troughs
        </text>
      </svg>

      <p className="mt-4 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: Perigon; Shadow analysis. Sum across 6 narratives. n = {formatComma(grandTotal)} articles.
      </p>
    </figure>
  );
}
