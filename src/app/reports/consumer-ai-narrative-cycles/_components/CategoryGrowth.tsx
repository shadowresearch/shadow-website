import { palette, quarterlyData, formatK, type NarrativeKey } from "./data";

// Hero landscape chart: total quarterly article volume across all 7 narratives.
// One line. Grey for history, Dusk highlight on the Q1 2026 spike.

const NARRATIVE_KEYS: NarrativeKey[] = [
  "genAI",
  "agentic",
  "safety",
  "companion",
  "embodied",
  "personal",
  "multimodal",
];

export function CategoryGrowth() {
  const totals = quarterlyData.map((row) => {
    const sum = NARRATIVE_KEYS.reduce((acc, k) => acc + (row[k] ?? 0), 0);
    return { q: row.q, total: sum };
  });

  const W = 800;
  const H = 380;
  const padL = 56;
  const padR = 32;
  const padT = 64;
  const padB = 48;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;

  const maxVal = 360000;
  const xStep = chartW / (totals.length - 1);
  const yPos = (v: number) => padT + chartH - (v / maxVal) * chartH;
  const xPos = (i: number) => padL + i * xStep;

  // History path: Q1 '23 through Q4 '25
  const historyCut = totals.length - 1; // index of last historical point (Q4 '25)
  const historyPath = totals
    .slice(0, historyCut + 1)
    .map((t, i) => `${i === 0 ? "M" : "L"}${xPos(i)},${yPos(t.total)}`)
    .join(" ");

  // Highlight segment: Q4 '25 → Q1 '26
  const highlightPath = `M${xPos(historyCut - 1)},${yPos(
    totals[historyCut - 1].total
  )} L${xPos(historyCut)},${yPos(totals[historyCut].total)}`;

  const yTicks = [0, 100000, 200000, 300000];

  const last = totals[totals.length - 1];
  const prev = totals[totals.length - 2];
  const qoqPct = Math.round(((last.total - prev.total) / prev.total) * 100);

  return (
    <figure className="w-full">
      <figcaption className="mb-5 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          Quarterly article volume · Jan 2023 – Mar 2026
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          Consumer AI coverage hit a 351K-article quarter in Q1 2026, a category high.
        </h3>
      </figcaption>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Total consumer AI article volume per quarter, with Q1 2026 surge highlighted in Dusk."
      >
        {/* Y ticks, minimal, no gridlines */}
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
              {formatK(t)}
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

        {/* X labels, every other quarter to reduce clutter */}
        {totals.map((t, i) =>
          i % 2 === 0 || i === totals.length - 1 ? (
            <text
              key={t.q}
              x={xPos(i)}
              y={H - 14}
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize={10}
              className="fill-muted-foreground"
            >
              {t.q}
            </text>
          ) : null
        )}

        {/* History line (grey) */}
        <path
          d={historyPath}
          fill="none"
          stroke={palette.shade}
          strokeWidth={1.75}
          strokeLinejoin="round"
          strokeLinecap="round"
          opacity={0.85}
        />

        {/* Highlight segment (Dusk) */}
        <path
          d={highlightPath}
          fill="none"
          stroke={palette.dusk}
          strokeWidth={2.75}
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Endpoint dot */}
        <circle
          cx={xPos(totals.length - 1)}
          cy={yPos(last.total)}
          r={4}
          fill={palette.dusk}
        />

        {/* Annotation on Q1 2026 spike */}
        <g>
          <line
            x1={xPos(totals.length - 1) - 6}
            y1={yPos(last.total) - 6}
            x2={xPos(totals.length - 1) - 70}
            y2={yPos(last.total) - 36}
            stroke={palette.dusk}
            strokeWidth={0.5}
          />
          <text
            x={xPos(totals.length - 1) - 74}
            y={yPos(last.total) - 48}
            textAnchor="end"
            fontFamily="var(--font-sans)"
            fontSize={11}
            fill={palette.dusk}
            fontStyle="italic"
          >
            +{qoqPct}% QoQ
          </text>
          <text
            x={xPos(totals.length - 1) - 74}
            y={yPos(last.total) - 34}
            textAnchor="end"
            fontFamily="var(--font-sans)"
            fontSize={11}
            fill={palette.dusk}
          >
            {formatK(last.total)} articles in Q1 &apos;26
          </text>
        </g>
      </svg>

      <p className="mt-4 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: Perigon; Shadow analysis. n = 200,000+ sources; as of Mar 2026.
      </p>
    </figure>
  );
}
