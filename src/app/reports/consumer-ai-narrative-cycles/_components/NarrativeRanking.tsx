import {
  palette,
  quarterlyData,
  narratives,
  formatComma,
  type NarrativeKey,
} from "./data";

// Horizontal ordered bar of Q1 2026 volumes for all 7 narratives.
// Top bar (agentic) in Dusk; rest in Shade.

export function NarrativeRanking() {
  const last = quarterlyData[quarterlyData.length - 1];

  const rows = narratives
    .map((n) => ({
      key: n.key as NarrativeKey,
      label: n.label,
      value: (last[n.key as keyof typeof last] as number | null) ?? 0,
    }))
    .sort((a, b) => b.value - a.value);

  const max = Math.max(...rows.map((r) => r.value));

  const W = 800;
  const rowH = 44;
  const padT = 24;
  const padB = 24;
  const labelW = 140;
  const valueW = 80;
  const padL = 16;
  const padR = 16;
  const barTrackW = W - padL - padR - labelW - valueW;
  const H = padT + padB + rows.length * rowH;

  return (
    <figure className="w-full">
      <figcaption className="mb-5 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          Q1 2026 article volume · Ranked
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          Agentic AI captured more coverage than the next five narratives combined.
        </h3>
      </figcaption>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Ranked horizontal bar chart of consumer AI narratives, Q1 2026 volumes."
      >
        {rows.map((r, i) => {
          const y = padT + i * rowH;
          const barW = (r.value / max) * barTrackW;
          const isTop = i === 0;
          return (
            <g key={r.key}>
              <text
                x={padL + labelW - 10}
                y={y + rowH / 2 + 4}
                textAnchor="end"
                fontFamily="var(--font-sans)"
                fontSize={13}
                fill={palette.foreground}
              >
                {r.label}
              </text>
              <rect
                x={padL + labelW}
                y={y + rowH / 2 - 9}
                width={Math.max(2, barW)}
                height={18}
                fill={isTop ? palette.dusk : palette.shade}
                opacity={isTop ? 1 : 0.75}
              />
              <text
                x={padL + labelW + barW + 10}
                y={y + rowH / 2 + 4}
                fontFamily="var(--font-mono)"
                fontSize={12}
                fill={isTop ? palette.dusk : palette.foreground}
                className="tabular-nums"
              >
                {formatComma(r.value)}
              </text>
            </g>
          );
        })}

        {/* Annotation on top bar */}
        <g>
          <line
            x1={padL + labelW + barTrackW * 0.65}
            y1={padT + rowH / 2 - 20}
            x2={padL + labelW + barTrackW * 0.65}
            y2={padT + rowH / 2 - 11}
            stroke={palette.dusk}
            strokeWidth={0.5}
          />
          <text
            x={padL + labelW + barTrackW * 0.65}
            y={padT + rowH / 2 - 25}
            textAnchor="middle"
            fontFamily="var(--font-sans)"
            fontSize={11}
            fontStyle="italic"
            fill={palette.dusk}
          >
            Largest single-narrative quarter on record
          </text>
        </g>
      </svg>

      <p className="mt-4 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: Perigon; Shadow analysis. Articles per quarter, as of Mar 2026.
      </p>
    </figure>
  );
}
