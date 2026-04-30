import {
  layers,
  palette,
  statusColor,
  velocityHistory,
  velocityQuarters,
} from "./data";

// Stacked sparkline grid: one row per layer, ordered Layer 7 at top → Layer 1 at bottom.
// The vertical layout mirrors the stack itself, so propagation reads as a peak that
// arrives at lower layers first and migrates upward over time.

const ROW_H = 76;
const PAD_T = 40;
const PAD_B = 36;
const LABEL_W = 220;
const VAL_W = 80;
const PAD_R = 24;

export function CycleTimeline() {
  const ordered = [...layers].sort((a, b) => b.layer - a.layer);
  const W = 880;
  const chartL = LABEL_W;
  const chartR = W - VAL_W - PAD_R;
  const chartW = chartR - chartL;
  const H = PAD_T + PAD_B + ordered.length * ROW_H;

  const seriesByLayer = new Map(velocityHistory.map((s) => [s.layer, s.values]));

  // Shared 0–100 y scale within each row's vertical band so amplitudes are comparable.
  const Y_INSET = 12;

  const xStep = chartW / (velocityQuarters.length - 1);
  const xPos = (i: number) => chartL + i * xStep;

  // Quarter index where each layer hits its peak — used to highlight the cycle apex.
  const peakIndexOf = (values: number[]) =>
    values.reduce((acc, v, i) => (v > values[acc] ? i : acc), 0);

  return (
    <figure className="w-full">
      <figcaption className="mb-5 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          Velocity score by layer · Q3 2024 – Q1 2026 · 7-quarter trajectory
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          The cycle peaks arrive at lower layers first, then migrate up.
        </h3>
      </figcaption>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Per-layer velocity trajectories from Q3 2024 to Q1 2026, ordered Layer 7 at top to Layer 1 at bottom."
      >
        {/* Vertical quarter gridlines */}
        {velocityQuarters.map((q, i) => (
          <g key={q}>
            <line
              x1={xPos(i)}
              y1={PAD_T - 8}
              x2={xPos(i)}
              y2={H - PAD_B + 4}
              stroke={palette.border}
              strokeWidth={0.5}
              strokeDasharray="2 4"
              opacity={0.45}
            />
            <text
              x={xPos(i)}
              y={H - PAD_B + 22}
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize={10}
              className="fill-muted-foreground"
            >
              {q}
            </text>
          </g>
        ))}

        {/* Axis label */}
        <text
          x={chartL}
          y={PAD_T - 18}
          fontFamily="var(--font-mono)"
          fontSize={10}
          className="fill-muted-foreground"
          style={{ textTransform: "uppercase", letterSpacing: "0.16em" }}
        >
          Velocity over time
        </text>

        {/* Rows */}
        {ordered.map((layer, rowIdx) => {
          const values = seriesByLayer.get(layer.layer) ?? [];
          const yTop = PAD_T + rowIdx * ROW_H;
          const yBot = yTop + ROW_H - Y_INSET;
          const bandTop = yTop + Y_INSET;
          const color = statusColor(layer.status);
          const yPos = (v: number) =>
            bandTop + (yBot - bandTop) * (1 - v / 100);

          const path = values
            .map((v, i) => `${i === 0 ? "M" : "L"}${xPos(i)},${yPos(v)}`)
            .join(" ");

          // Area fill for visual weight
          const areaPath =
            path +
            ` L${xPos(values.length - 1)},${yBot} L${xPos(0)},${yBot} Z`;

          const peakIdx = peakIndexOf(values);
          const peakVal = values[peakIdx] ?? 0;
          const lastIdx = values.length - 1;
          const lastVal = values[lastIdx] ?? 0;

          return (
            <g key={layer.layer}>
              {/* Row separator */}
              {rowIdx > 0 && (
                <line
                  x1={0}
                  y1={yTop}
                  x2={W}
                  y2={yTop}
                  stroke={palette.border}
                  strokeWidth={0.5}
                  opacity={0.5}
                />
              )}

              {/* Left label: layer number + name + status */}
              <text
                x={12}
                y={yTop + ROW_H / 2 - 2}
                fontFamily="var(--font-serif, 'Georgia', serif)"
                fontSize={12}
                className="fill-foreground"
              >
                {`L${layer.layer} · ${layer.name}`}
              </text>
              <text
                x={12}
                y={yTop + ROW_H / 2 + 11}
                fontFamily="var(--font-mono)"
                fontSize={8}
                fill={color}
                style={{
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                }}
              >
                {layer.status}
              </text>

              {/* Sparkline area */}
              <path d={areaPath} fill={color} opacity={0.14} />
              <path
                d={path}
                fill="none"
                stroke={color}
                strokeWidth={1.5}
                strokeLinejoin="round"
                strokeLinecap="round"
              />

              {/* Peak marker — shows where this layer's cycle apex sits in time */}
              <circle
                cx={xPos(peakIdx)}
                cy={yPos(peakVal)}
                r={2.5}
                fill={color}
                opacity={0.9}
              />

              {/* Endpoint marker */}
              {peakIdx !== lastIdx && (
                <circle
                  cx={xPos(lastIdx)}
                  cy={yPos(lastVal)}
                  r={2}
                  fill={color}
                  opacity={0.6}
                />
              )}

              {/* Right label: current velocity */}
              <text
                x={chartR + 12}
                y={yTop + ROW_H / 2 + 4}
                fontFamily="var(--font-serif, 'Georgia', serif)"
                fontSize={15}
                fill={color}
                className="tabular-nums"
              >
                {lastVal}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-mono uppercase tracking-[0.14em] text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full"
            style={{ background: palette.dusk }}
          />
          Accelerating
        </span>
        <span className="inline-flex items-center gap-2">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full"
            style={{ background: palette.uv }}
          />
          Active
        </span>
        <span className="inline-flex items-center gap-2">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full"
            style={{ background: palette.shade }}
          />
          Developing
        </span>
        <span className="inline-flex items-center gap-2 text-muted-foreground/80">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ background: palette.foreground }}
          />
          Cycle peak
        </span>
      </div>

      <p className="mt-3 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: Perigon News Intelligence · Shadow narrative velocity analysis. Each row uses a shared 0–100 scale.
      </p>
    </figure>
  );
}
