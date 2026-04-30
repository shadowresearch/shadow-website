import { palette, dailyData, formatComma, shortDate } from "./data";

// Two-line tension chart: AI Job Displacement Wave vs the other four narratives combined.
// Demonstrates the 45% concentration that defines the category.

export function DisplacementDominance() {
  const series = dailyData.map((row) => ({
    date: row.date,
    displacement: row.displacement,
    others:
      row.productivity + row.skills + row.gig + row.whiteCollar,
  }));

  const W = 800;
  const H = 360;
  const padL = 56;
  const padR = 130;
  const padT = 48;
  const padB = 56;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;

  const maxVal = 600;
  const xStep = chartW / (series.length - 1);
  const yPos = (v: number) => padT + chartH - (v / maxVal) * chartH;
  const xPos = (i: number) => padL + i * xStep;

  const dispPath = series
    .map((r, i) => `${i === 0 ? "M" : "L"}${xPos(i)},${yPos(r.displacement)}`)
    .join(" ");
  const othersPath = series
    .map((r, i) => `${i === 0 ? "M" : "L"}${xPos(i)},${yPos(r.others)}`)
    .join(" ");

  const last = series[series.length - 1];
  const lastDispPos = yPos(last.displacement);
  const lastOthersPos = yPos(last.others);

  const yTicks = [0, 200, 400, 600];

  // Headline ratio for the 28-day window.
  const totalDisp = series.reduce((a, r) => a + r.displacement, 0);
  const totalOthers = series.reduce((a, r) => a + r.others, 0);
  const dispShare = Math.round((totalDisp / (totalDisp + totalOthers)) * 100);

  return (
    <figure className="w-full">
      <figcaption className="mb-5 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          Daily article volume · Displacement vs. all other workforce narratives
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          The displacement narrative outweighs the other four narratives combined every single day.
        </h3>
      </figcaption>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Two-line chart comparing daily article volume for AI Job Displacement Wave against the sum of the other four workforce narratives."
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
              x2={W - padR + 8}
              y2={yPos(t)}
              stroke={palette.border}
              strokeWidth={0.5}
              strokeDasharray="2 4"
              opacity={0.5}
            />
          </g>
        ))}

        {series.map((r, i) =>
          i === 0 || i === series.length - 1 || i % 7 === 0 ? (
            <text
              key={r.date}
              x={xPos(i)}
              y={H - 18}
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize={10}
              className="fill-muted-foreground"
            >
              {shortDate(r.date)}
            </text>
          ) : null
        )}

        <path
          d={othersPath}
          fill="none"
          stroke={palette.shade}
          strokeWidth={1.75}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d={dispPath}
          fill="none"
          stroke={palette.dusk}
          strokeWidth={2.5}
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* End-of-line direct labels */}
        <g>
          <circle
            cx={xPos(series.length - 1)}
            cy={lastDispPos}
            r={4}
            fill={palette.dusk}
          />
          <text
            x={xPos(series.length - 1) + 10}
            y={lastDispPos - 2}
            fontFamily="var(--font-serif)"
            fontSize={13}
            fontWeight={500}
            fill={palette.dusk}
          >
            Displacement
          </text>
          <text
            x={xPos(series.length - 1) + 10}
            y={lastDispPos + 14}
            fontFamily="var(--font-mono)"
            fontSize={11}
            fill={palette.dusk}
            className="tabular-nums"
          >
            {dispShare}% of beat
          </text>
        </g>

        <g>
          <circle
            cx={xPos(series.length - 1)}
            cy={lastOthersPos}
            r={3.5}
            fill={palette.shade}
          />
          <text
            x={xPos(series.length - 1) + 10}
            y={lastOthersPos - 2}
            fontFamily="var(--font-serif)"
            fontSize={13}
            fill={palette.shade}
          >
            Other 4 combined
          </text>
          <text
            x={xPos(series.length - 1) + 10}
            y={lastOthersPos + 14}
            fontFamily="var(--font-mono)"
            fontSize={11}
            fill={palette.shade}
            className="tabular-nums"
          >
            {100 - dispShare}% of beat
          </text>
        </g>
      </svg>

      <p className="mt-4 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: Perigon; Shadow analysis. 28-day rolling window through Apr 26, 2026.
      </p>
    </figure>
  );
}
