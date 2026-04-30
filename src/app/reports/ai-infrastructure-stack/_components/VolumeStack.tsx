import {
  layers,
  layerColor,
  palette,
  velocityQuarters,
  volumeHistory,
} from "./data";

// Small multiples: one mini volume chart per layer. Independent y-scales so
// each shape reads clearly. Magnitude (current value, growth multiple) is
// shown numerically on each panel so absolute differences aren't lost.

const PANEL_W = 260;
const PANEL_H = 160;
const padL = 10;
const padR = 10;
const padT = 50;
const padB = 22;

function Panel({
  layerNum,
  name,
  values,
}: {
  layerNum: number;
  name: string;
  values: number[];
}) {
  const color = layerColor(layerNum);
  const max = Math.max(...values, 1);
  const min = Math.min(...values, 0);

  const chartW = PANEL_W - padL - padR;
  const chartH = PANEL_H - padT - padB;
  const xStep = chartW / (values.length - 1);
  const xPos = (i: number) => padL + i * xStep;
  const yPos = (v: number) =>
    padT + chartH - ((v - min) / Math.max(max - min, 1)) * chartH;

  const path = values
    .map((v, i) => `${i === 0 ? "M" : "L"}${xPos(i)},${yPos(v)}`)
    .join(" ");

  // Area fill under the line for visual weight
  const area =
    path +
    ` L${xPos(values.length - 1)},${padT + chartH} L${xPos(0)},${padT + chartH} Z`;

  const lastIdx = values.length - 1;
  const lastVal = values[lastIdx];
  const firstVal = values[0];
  const multiple = lastVal / Math.max(firstVal, 1);
  const multLabel =
    multiple >= 2
      ? `${multiple.toFixed(1)}× in 7 qtrs`
      : `+${Math.round((multiple - 1) * 100)}% in 7 qtrs`;

  return (
    <div className="flex flex-col">
      <svg
        viewBox={`0 0 ${PANEL_W} ${PANEL_H}`}
        className="w-full h-auto"
        role="img"
        aria-label={`${name} quarterly article volume from Q3 2024 to Q1 2026.`}
      >
        {/* Header: layer eyebrow in mono, matches chart conventions */}
        <text
          x={padL}
          y={18}
          fontFamily="var(--font-mono)"
          fontSize={10}
          fill={palette.foreground}
          style={{ letterSpacing: "0.16em" }}
        >
          {`L${layerNum} · ${name.toUpperCase()}`}
        </text>

        {/* Magnitude: current volume + growth multiple */}
        <text
          x={padL}
          y={36}
          fontFamily="var(--font-mono)"
          fontSize={10}
          fill={color}
          className="tabular-nums"
          style={{ letterSpacing: "0.04em" }}
        >
          {`${Math.round(lastVal)}K`}
        </text>
        <text
          x={padL + 38}
          y={36}
          fontFamily="var(--font-mono)"
          fontSize={10}
          fill={palette.shade}
          style={{ letterSpacing: "0.04em" }}
        >
          {`· ${multLabel}`}
        </text>

        {/* Baseline */}
        <line
          x1={padL}
          y1={padT + chartH}
          x2={PANEL_W - padR}
          y2={padT + chartH}
          stroke={palette.border}
          strokeWidth={0.5}
        />

        {/* Area + line */}
        <path d={area} fill={color} opacity={0.18} />
        <path
          d={path}
          fill="none"
          stroke={color}
          strokeWidth={2}
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Endpoint dot */}
        <circle cx={xPos(lastIdx)} cy={yPos(lastVal)} r={3.25} fill={color} />

        {/* X endpoints */}
        <text
          x={padL}
          y={PANEL_H - 8}
          fontFamily="var(--font-mono)"
          fontSize={10}
          fill={palette.shade}
        >
          {velocityQuarters[0]}
        </text>
        <text
          x={PANEL_W - padR}
          y={PANEL_H - 8}
          textAnchor="end"
          fontFamily="var(--font-mono)"
          fontSize={10}
          fill={palette.shade}
        >
          {velocityQuarters[velocityQuarters.length - 1]}
        </text>
      </svg>
    </div>
  );
}

export function VolumeStack() {
  // Order panels by Q1 '26 volume descending so the eye walks down by magnitude.
  const seriesByLayer = new Map(volumeHistory.map((s) => [s.layer, s.values]));
  const ordered = [...layers].sort((a, b) => {
    const aLast = seriesByLayer.get(a.layer)?.slice(-1)[0] ?? 0;
    const bLast = seriesByLayer.get(b.layer)?.slice(-1)[0] ?? 0;
    return bLast - aLast;
  });

  const lastIdx = velocityQuarters.length - 1;
  const totals = velocityQuarters.map((_, qi) =>
    layers.reduce(
      (sum, layer) => sum + (seriesByLayer.get(layer.layer)?.[qi] ?? 0),
      0
    )
  );

  return (
    <figure className="w-full max-w-[760px]">
      <figcaption className="mb-10 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          Quarterly article volume by layer · Q3 2024 – Q1 2026 · thousands of articles
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          Volume tells a different story than velocity.
        </h3>
        <p className="mt-3 text-[13.5px] text-muted-foreground leading-relaxed">
          One panel per layer, ordered by Q1 2026 volume. Each panel uses an
          independent y-scale so the shape reads on its own — the K value and
          growth multiple show absolute size.
        </p>
      </figcaption>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-7 max-w-[760px]">
        {ordered.map((layer) => {
          const values = seriesByLayer.get(layer.layer) ?? [];
          return (
            <Panel
              key={layer.layer}
              layerNum={layer.layer}
              name={layer.name}
              values={values}
            />
          );
        })}
      </div>

      <p className="mt-6 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: Perigon News Intelligence · Shadow analysis. Total across the
        stack, Q1 &apos;26: {Math.round(totals[lastIdx])}K articles.
      </p>
    </figure>
  );
}
