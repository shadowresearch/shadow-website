import { palette, quarterlyData, formatK } from "./data";

// Forecast: history + projected trajectories for agentic, embodied, personal.
// Observed data in solid lines; projection in dashed with an Amber highlight
// on the forecast ridge.

type Proj = {
  label: string;
  color: string;
  history: (number | null)[];
  projection: number[]; // projected Q2 '26, Q3 '26, Q4 '26, Q1 '27
};

export function Forecast() {
  const quarters = quarterlyData.map((r) => r.q);
  const forecastQuarters = ["Q2 '26", "Q3 '26", "Q4 '26", "Q1 '27"];
  const allQuarters = [...quarters, ...forecastQuarters];

  // Projections derived from observed QoQ momentum, decayed toward plateau.
  const agenticHistory = quarterlyData.map((r) => r.agentic);
  const embodiedHistory = quarterlyData.map((r) => r.embodied);
  const genAIHistory = quarterlyData.map((r) => r.genAI);

  // Simple tapering growth model: agentic decelerates from +86% to ~+10%.
  const agenticProj = [270000, 340000, 390000, 420000];
  // Embodied keeps accelerating through peak surge in Q4 '26 / Q1 '27.
  const embodiedProj = [14000, 28000, 48000, 62000];
  // GenAI continues its resurgence more gradually.
  const genAIProj = [155000, 168000, 176000, 180000];

  const series: Proj[] = [
    { label: "Agentic AI", color: palette.dusk, history: agenticHistory, projection: agenticProj },
    { label: "Embodied AI", color: palette.amber, history: embodiedHistory, projection: embodiedProj },
    { label: "Generative AI", color: palette.shade, history: genAIHistory, projection: genAIProj },
  ];

  const W = 800;
  const H = 400;
  const padL = 56;
  const padR = 140;
  const padT = 48;
  const padB = 48;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;

  const maxVal = 440000;
  const xStep = chartW / (allQuarters.length - 1);
  const xPos = (i: number) => padL + i * xStep;
  const yPos = (v: number) => padT + chartH - (v / maxVal) * chartH;

  const yTicks = [0, 100000, 200000, 300000, 400000];
  const historyCutX = xPos(quarters.length - 1);

  function buildHistoryPath(hist: (number | null)[]): string {
    const pts: string[] = [];
    hist.forEach((v, i) => {
      if (v == null) return;
      pts.push(`${pts.length === 0 ? "M" : "L"}${xPos(i)},${yPos(v)}`);
    });
    return pts.join(" ");
  }

  function buildProjectionPath(
    lastObserved: number,
    proj: number[],
    startIdx: number
  ): string {
    const pts = [`M${xPos(startIdx)},${yPos(lastObserved)}`];
    proj.forEach((v, i) => {
      pts.push(`L${xPos(startIdx + i + 1)},${yPos(v)}`);
    });
    return pts.join(" ");
  }

  return (
    <figure className="w-full">
      <figcaption className="mb-5 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          Projected quarterly volume · Q2 2026 – Q1 2027
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          Embodied AI reaches peak surge in late 2026 if the compression pattern holds.
        </h3>
      </figcaption>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Forecast chart showing projected trajectories for agentic, embodied, and generative AI."
      >
        {/* Y ticks */}
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

        {/* X labels (every other) */}
        {allQuarters.map((q, i) =>
          i % 2 === 0 || i === allQuarters.length - 1 ? (
            <text
              key={q}
              x={xPos(i)}
              y={H - 14}
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize={10}
              className="fill-muted-foreground"
            >
              {q}
            </text>
          ) : null
        )}

        {/* History / projection divider */}
        <line
          x1={historyCutX}
          y1={padT}
          x2={historyCutX}
          y2={padT + chartH}
          stroke={palette.foreground}
          strokeWidth={0.5}
          strokeDasharray="3 3"
          opacity={0.4}
        />
        <text
          x={historyCutX + 6}
          y={padT + 12}
          fontFamily="var(--font-mono)"
          fontSize={10}
          fill={palette.foreground}
          className="uppercase tracking-widest"
        >
          Projection
        </text>

        {/* Series: history solid, projection dashed */}
        {series.map((s) => {
          const lastIdx = s.history.length - 1;
          const lastVal = s.history[lastIdx] ?? 0;
          const projEndVal = s.projection[s.projection.length - 1];
          return (
            <g key={s.label}>
              <path
                d={buildHistoryPath(s.history)}
                fill="none"
                stroke={s.color}
                strokeWidth={s.color === palette.shade ? 1.5 : 2}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <path
                d={buildProjectionPath(lastVal, s.projection, lastIdx)}
                fill="none"
                stroke={s.color}
                strokeWidth={s.color === palette.shade ? 1.5 : 2}
                strokeDasharray="4 4"
                strokeLinejoin="round"
                strokeLinecap="round"
                opacity={0.85}
              />
              <circle
                cx={xPos(allQuarters.length - 1)}
                cy={yPos(projEndVal)}
                r={3.5}
                fill={s.color}
              />
              <text
                x={xPos(allQuarters.length - 1) + 10}
                y={yPos(projEndVal) - 2}
                fontFamily="var(--font-serif)"
                fontSize={12}
                fontWeight={500}
                fill={s.color}
              >
                {s.label}
              </text>
              <text
                x={xPos(allQuarters.length - 1) + 10}
                y={yPos(projEndVal) + 14}
                fontFamily="var(--font-mono)"
                fontSize={10}
                fill={s.color}
                className="tabular-nums"
              >
                ~{formatK(projEndVal)}
              </text>
            </g>
          );
        })}

        {/* Annotation */}
        <text
          x={xPos(quarters.length + 1.5)}
          y={yPos(embodiedProj[2]) - 14}
          fontFamily="var(--font-sans)"
          fontSize={11}
          fontStyle="italic"
          fill={palette.amber}
        >
          Inflection, if pattern holds
        </text>
      </svg>

      <p className="mt-4 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: Shadow projection based on Perigon historical volume and observed 33% cycle compression. Dashed = projection.
      </p>
    </figure>
  );
}
