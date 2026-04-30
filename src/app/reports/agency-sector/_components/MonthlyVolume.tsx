import { palette, monthlyData, formatComma, formatPct } from "./data";

// Total monthly tier-1 article volume, Nov '25 – Apr '26.
// February peak (60 articles) is highlighted; sentiment shows as a
// secondary line so the spike's tone is visible without a second chart.

export function MonthlyVolume() {
  const W = 800;
  const H = 380;
  const padL = 56;
  const padR = 64;
  const padT = 56;
  const padB = 48;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;

  const maxVal = 70;
  const xStep = chartW / (monthlyData.length - 1);
  const yPos = (v: number) => padT + chartH - (v / maxVal) * chartH;
  const xPos = (i: number) => padL + i * xStep;

  // Sentiment axis on the right (0–50%).
  const negMax = 0.5;
  const yNeg = (v: number) => padT + chartH - (v / negMax) * chartH;

  const yTicks = [0, 20, 40, 60];
  const negTicks = [0, 0.25, 0.5];

  const peakIdx = monthlyData.reduce(
    (acc, r, i) => (r.total > monthlyData[acc].total ? i : acc),
    0
  );
  const peak = monthlyData[peakIdx];

  const volumePath = monthlyData
    .map((r, i) => `${i === 0 ? "M" : "L"}${xPos(i)},${yPos(r.total)}`)
    .join(" ");

  const negPath = monthlyData
    .map((r, i) => `${i === 0 ? "M" : "L"}${xPos(i)},${yNeg(r.avgNeg)}`)
    .join(" ");

  return (
    <figure className="w-full">
      <figcaption className="mb-5 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          Monthly tier-1 article volume · Nov 2025 – Apr 2026
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          Coverage hit its peak in February 2026 and has not returned to pre-crisis levels.
        </h3>
      </figcaption>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3 text-[11px] font-mono text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <span
            aria-hidden
            className="inline-block w-3 h-[2px]"
            style={{ backgroundColor: palette.dusk }}
          />
          Article volume
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span
            aria-hidden
            className="inline-block w-3 h-[2px]"
            style={{ backgroundColor: palette.lamplight, opacity: 0.7 }}
          />
          Avg negative sentiment
        </span>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Monthly tier-1 article volume on the agency sector with February 2026 peak highlighted; secondary line shows monthly average negative sentiment."
      >
        {/* Left axis (volume) */}
        {yTicks.map((t) => (
          <g key={t}>
            <text
              x={padL - 10}
              y={yPos(t) + 4}
              textAnchor="end"
              fontFamily="var(--font-mono)"
              fontSize={10}
              fill={palette.shade}
              className="tabular-nums"
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

        {/* Right axis (sentiment) */}
        {negTicks.map((t) => (
          <text
            key={`neg-${t}`}
            x={W - padR + 10}
            y={yNeg(t) + 4}
            fontFamily="var(--font-mono)"
            fontSize={10}
            fill={palette.lamplight}
            className="tabular-nums"
          >
            {formatPct(t)}
          </text>
        ))}

        {monthlyData.map((row, i) => (
          <text
            key={row.m}
            x={xPos(i)}
            y={H - 14}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize={10}
            fill={palette.shade}
          >
            {row.m}
          </text>
        ))}

        {/* Sentiment line (secondary) */}
        <path
          d={negPath}
          fill="none"
          stroke={palette.lamplight}
          strokeWidth={1.5}
          strokeDasharray="3 4"
          opacity={0.7}
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Volume line (primary) */}
        <path
          d={volumePath}
          fill="none"
          stroke={palette.dusk}
          strokeWidth={2.25}
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Peak marker */}
        <circle
          cx={xPos(peakIdx)}
          cy={yPos(peak.total)}
          r={5}
          fill={palette.dusk}
        />
        <line
          x1={xPos(peakIdx)}
          y1={yPos(peak.total) - 8}
          x2={xPos(peakIdx)}
          y2={yPos(peak.total) - 26}
          stroke={palette.dusk}
          strokeWidth={0.5}
        />
        <text
          x={xPos(peakIdx)}
          y={yPos(peak.total) - 32}
          textAnchor="middle"
          fontFamily="var(--font-sans)"
          fontSize={11}
          fontStyle="italic"
          fill={palette.dusk}
        >
          {formatComma(peak.total)} articles · inflection
        </text>
      </svg>

      <p className="mt-4 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: Perigon News Intelligence (top 100 sources by traffic). Shadow analysis. n = 272 articles.
      </p>
    </figure>
  );
}
