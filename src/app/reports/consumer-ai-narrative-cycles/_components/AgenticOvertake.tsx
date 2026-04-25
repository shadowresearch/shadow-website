import { palette, quarterlyData, formatK } from "./data";

// Tension chart: two-line chart showing agentic overtaking generative AI.
// Time range: Q1 '24 onward (first quarter with agentic data).

export function AgenticOvertake() {
  const data = quarterlyData.slice(4); // Q1 '24 onward

  const W = 800;
  const H = 380;
  const padL = 56;
  const padR = 120; // room for direct labels
  const padT = 40;
  const padB = 48;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;

  const maxVal = 190000;
  const xStep = chartW / (data.length - 1);
  const yPos = (v: number) => padT + chartH - (v / maxVal) * chartH;
  const xPos = (i: number) => padL + i * xStep;

  const agenticPath = data
    .map(
      (r, i) => `${i === 0 ? "M" : "L"}${xPos(i)},${yPos(r.agentic ?? 0)}`
    )
    .join(" ");
  const genAIPath = data
    .map(
      (r, i) => `${i === 0 ? "M" : "L"}${xPos(i)},${yPos(r.genAI ?? 0)}`
    )
    .join(" ");

  const yTicks = [0, 50000, 100000, 150000];

  // Crossover detection: first index where agentic > genAI
  const crossIdx = data.findIndex(
    (r) => (r.agentic ?? 0) > (r.genAI ?? 0)
  );

  const lastAgentic = data[data.length - 1].agentic ?? 0;
  const lastGenAI = data[data.length - 1].genAI ?? 0;

  return (
    <figure className="w-full">
      <figcaption className="mb-5 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          Quarterly article volume · Q1 2024 – Q1 2026
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          Agentic AI overtook generative AI in Q1 2026, two years after first surfacing.
        </h3>
      </figcaption>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Agentic AI quarterly volume crossed above generative AI in Q1 2026."
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
              {formatK(t)}
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

        {data.map((r, i) => (
          <text
            key={r.q}
            x={xPos(i)}
            y={H - 14}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize={10}
            className="fill-muted-foreground"
          >
            {r.q}
          </text>
        ))}

        {/* GenAI line, context grey */}
        <path
          d={genAIPath}
          fill="none"
          stroke={palette.shade}
          strokeWidth={1.75}
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Agentic line, Dusk, the argument */}
        <path
          d={agenticPath}
          fill="none"
          stroke={palette.dusk}
          strokeWidth={2.5}
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Crossover marker */}
        {crossIdx > 0 && (
          <g>
            <line
              x1={xPos(crossIdx)}
              y1={padT}
              x2={xPos(crossIdx)}
              y2={padT + chartH}
              stroke={palette.foreground}
              strokeWidth={0.5}
              strokeDasharray="3 3"
              opacity={0.5}
            />
            <text
              x={xPos(crossIdx) - 8}
              y={padT + 14}
              textAnchor="end"
              fontFamily="var(--font-sans)"
              fontSize={11}
              fontStyle="italic"
              fill={palette.foreground}
            >
              crossover
            </text>
          </g>
        )}

        {/* Direct labels at the end, right of the chart */}
        <g>
          <circle
            cx={xPos(data.length - 1)}
            cy={yPos(lastAgentic)}
            r={4}
            fill={palette.dusk}
          />
          <text
            x={xPos(data.length - 1) + 10}
            y={yPos(lastAgentic) - 2}
            fontFamily="var(--font-serif)"
            fontSize={13}
            fontWeight={500}
            fill={palette.dusk}
          >
            Agentic AI
          </text>
          <text
            x={xPos(data.length - 1) + 10}
            y={yPos(lastAgentic) + 14}
            fontFamily="var(--font-mono)"
            fontSize={11}
            fill={palette.dusk}
            className="tabular-nums"
          >
            {formatK(lastAgentic)}
          </text>
        </g>

        <g>
          <circle
            cx={xPos(data.length - 1)}
            cy={yPos(lastGenAI)}
            r={3.5}
            fill={palette.shade}
          />
          <text
            x={xPos(data.length - 1) + 10}
            y={yPos(lastGenAI) - 2}
            fontFamily="var(--font-serif)"
            fontSize={13}
            fill={palette.shade}
          >
            Generative AI
          </text>
          <text
            x={xPos(data.length - 1) + 10}
            y={yPos(lastGenAI) + 14}
            fontFamily="var(--font-mono)"
            fontSize={11}
            fill={palette.shade}
            className="tabular-nums"
          >
            {formatK(lastGenAI)}
          </text>
        </g>

        {/* On-chart annotation explaining the why */}
        <g>
          <text
            x={xPos(Math.max(0, crossIdx - 3))}
            y={yPos(180000) + 8}
            fontFamily="var(--font-sans)"
            fontSize={11}
            fontStyle="italic"
            fill={palette.dusk}
          >
            4 quarters peak-to-surge:
          </text>
          <text
            x={xPos(Math.max(0, crossIdx - 3))}
            y={yPos(180000) + 22}
            fontFamily="var(--font-sans)"
            fontSize={11}
            fontStyle="italic"
            fill={palette.dusk}
          >
            33% faster than genAI.
          </text>
        </g>
      </svg>

      <p className="mt-4 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: Perigon; Shadow analysis. Crossover: Q1 2026.
      </p>
    </figure>
  );
}
