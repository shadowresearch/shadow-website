import { palette, narratives } from "./data";

// Lollipop-style velocity chart. Creator Economy at +65.5% leads; Sports Media
// Rights War at -13.2% is the only narrative actively decelerating.

export function CreatorVelocity() {
  const rows = [...narratives]
    .map((n) => ({
      key: n.key,
      label: n.label,
      velocity: n.velocity,
      lifecycle: n.lifecycle,
    }))
    .sort((a, b) => b.velocity - a.velocity);

  const W = 800;
  const rowH = 56;
  const padT = 60;
  const padB = 40;
  const labelW = 200;
  const padL = 16;
  const padR = 80;
  const trackW = W - padL - padR - labelW;
  const H = padT + padB + rows.length * rowH;

  // Symmetric scale around zero.
  const absMax = 70;
  const zeroX = padL + labelW + (absMax / (absMax * 2)) * trackW;
  const xPos = (v: number) =>
    padL + labelW + ((v + absMax) / (absMax * 2)) * trackW;

  const tickValues = [-50, -25, 0, 25, 50];

  return (
    <figure className="w-full">
      <figcaption className="mb-5 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          Velocity (28-day vs prior 28-day) · April 2026
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          One narrative is accelerating fast. One is rolling off. Four are flat.
        </h3>
      </figcaption>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Velocity comparison across the six consumer and brand narratives, with Creator Economy at plus 65.5 percent and Sports Media Rights War at minus 13.2 percent."
      >
        {/* Tick guides */}
        {tickValues.map((t) => (
          <g key={t}>
            <line
              x1={xPos(t)}
              y1={padT - 12}
              x2={xPos(t)}
              y2={H - padB + 6}
              stroke={palette.border}
              strokeWidth={0.5}
              strokeDasharray="2 4"
              opacity={t === 0 ? 0.9 : 0.45}
            />
            <text
              x={xPos(t)}
              y={padT - 18}
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize={10}
              fill={palette.shade}
              className="tabular-nums"
            >
              {t > 0 ? `+${t}%` : `${t}%`}
            </text>
          </g>
        ))}

        {/* Zero baseline emphasis */}
        <line
          x1={zeroX}
          y1={padT - 12}
          x2={zeroX}
          y2={H - padB + 6}
          stroke={palette.foreground}
          strokeWidth={0.75}
          opacity={0.5}
        />

        {rows.map((r, i) => {
          const y = padT + i * rowH;
          const cy = y + rowH / 2;
          const positive = r.velocity > 0;
          const isLeader = r.velocity === Math.max(...rows.map((x) => x.velocity));
          const isLaggard = r.velocity === Math.min(...rows.map((x) => x.velocity));
          const accent = isLeader
            ? palette.dusk
            : isLaggard
            ? palette.lamplight
            : palette.shade;
          const tipX = xPos(r.velocity);
          const isFlat = r.velocity === 0;

          return (
            <g key={r.key}>
              <text
                x={padL + labelW - 10}
                y={cy + 4}
                textAnchor="end"
                fontFamily="var(--font-sans)"
                fontSize={13}
                fill={palette.foreground}
              >
                {r.label}
              </text>
              {!isFlat && (
                <line
                  x1={zeroX}
                  y1={cy}
                  x2={tipX}
                  y2={cy}
                  stroke={accent}
                  strokeWidth={isLeader || isLaggard ? 2.5 : 1.75}
                  opacity={isLeader || isLaggard ? 1 : 0.7}
                />
              )}
              <circle
                cx={tipX}
                cy={cy}
                r={isLeader || isLaggard ? 5.5 : 4}
                fill={accent}
                opacity={isFlat ? 0.45 : 1}
              />
              <text
                x={tipX + (positive ? 10 : -10)}
                y={cy + 4}
                textAnchor={positive ? "start" : "end"}
                fontFamily="var(--font-mono)"
                fontSize={12}
                fill={accent}
                className="tabular-nums"
              >
                {r.velocity > 0
                  ? `+${r.velocity.toFixed(1)}%`
                  : r.velocity < 0
                  ? `${r.velocity.toFixed(1)}%`
                  : "flat"}
              </text>
            </g>
          );
        })}

        {/* Leader callout */}
        <text
          x={xPos(65.5)}
          y={padT + rowH / 2 - 18}
          textAnchor="end"
          fontFamily="var(--font-sans)"
          fontSize={11}
          fontStyle="italic"
          fill={palette.dusk}
        >
          fastest mover in the category
        </text>
      </svg>

      <p className="mt-4 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: Perigon; Shadow analysis. Velocity = (28d − prior 28d) / prior 28d. Newly initialized narratives shown as flat.
      </p>
    </figure>
  );
}
