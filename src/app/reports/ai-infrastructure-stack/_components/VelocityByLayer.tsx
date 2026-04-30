import { layers, palette, statusColor } from "./data";

// Horizontal bar chart of velocity scores per layer.
// Layers ordered top-to-bottom (Layer 7 at top, Layer 1 at bottom).
// Color coded by status; the three accelerating layers stand out.

export function VelocityByLayer() {
  const ordered = [...layers].sort((a, b) => b.layer - a.layer);

  const W = 800;
  const rowH = 44;
  const padT = 56;
  const padB = 36;
  const padL = 220;
  const padR = 80;
  const H = padT + padB + ordered.length * rowH;
  const chartW = W - padL - padR;

  const maxVal = 100;
  const xPos = (v: number) => padL + (v / maxVal) * chartW;

  const xTicks = [0, 25, 50, 75, 100];

  return (
    <figure className="w-full">
      <figcaption className="mb-5 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          Narrative velocity score by stack layer · 90-day trailing baseline
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          Infrastructure layers are generating the most narrative momentum.
        </h3>
      </figcaption>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Horizontal bar chart of narrative velocity scores by stack layer."
      >
        {/* X-axis ticks (gridlines) */}
        {xTicks.map((t) => (
          <g key={t}>
            <line
              x1={xPos(t)}
              y1={padT - 8}
              x2={xPos(t)}
              y2={H - padB + 4}
              stroke={palette.border}
              strokeWidth={0.5}
              strokeDasharray="2 4"
              opacity={0.5}
            />
            <text
              x={xPos(t)}
              y={padT - 14}
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize={10}
              className="fill-muted-foreground tabular-nums"
            >
              {t}
            </text>
          </g>
        ))}

        {/* "Velocity" axis label */}
        <text
          x={padL}
          y={padT - 32}
          fontFamily="var(--font-mono)"
          fontSize={10}
          className="fill-muted-foreground"
          style={{ textTransform: "uppercase", letterSpacing: "0.16em" }}
        >
          Velocity score
        </text>

        {/* Bars */}
        {ordered.map((layer, i) => {
          const y = padT + i * rowH + rowH / 2;
          const color = statusColor(layer.status);
          const barW = xPos(layer.velocity) - padL;
          return (
            <g key={layer.layer}>
              {/* Layer label */}
              <text
                x={padL - 14}
                y={y - 3}
                textAnchor="end"
                fontFamily="var(--font-sans)"
                fontSize={12}
                className="fill-foreground"
              >
                {`L${layer.layer} · ${layer.name}`}
              </text>
              <text
                x={padL - 14}
                y={y + 12}
                textAnchor="end"
                fontFamily="var(--font-mono)"
                fontSize={9}
                className="fill-muted-foreground"
                style={{ letterSpacing: "0.12em", textTransform: "uppercase" }}
              >
                {layer.status}
              </text>

              {/* Bar track */}
              <rect
                x={padL}
                y={y - 9}
                width={chartW}
                height={18}
                fill={palette.border}
                opacity={0.3}
                rx={2}
              />
              {/* Bar fill */}
              <rect
                x={padL}
                y={y - 9}
                width={Math.max(0, barW)}
                height={18}
                fill={color}
                rx={2}
              />
              {/* Value */}
              <text
                x={xPos(layer.velocity) + 8}
                y={y + 4}
                fontFamily="var(--font-sans)"
                fontSize={12}
                fontWeight={500}
                fill={color}
                className="tabular-nums"
              >
                {layer.velocity}
              </text>
            </g>
          );
        })}
      </svg>

      <p className="mt-4 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: Perigon News Intelligence · Shadow narrative velocity analysis · as of April 30, 2026.
      </p>
    </figure>
  );
}
