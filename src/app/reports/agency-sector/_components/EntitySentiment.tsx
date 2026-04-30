import { palette, entities, formatPct1 } from "./data";

// Per-entity stacked sentiment bars, ordered most-negative first.
// WPP highlighted as the negative-frame leader; IPG/Omnicom as the positive end.

const SEGMENTS = [
  { key: "neg" as const,     label: "Negative", color: palette.lamplight },
  { key: "neutral" as const, label: "Neutral",  color: palette.shade,     opacity: 0.45 },
  { key: "pos" as const,     label: "Positive", color: palette.uv },
];

export function EntitySentiment() {
  const rows = [...entities].sort((a, b) => b.neg - a.neg);

  const W = 800;
  const rowH = 78;
  const padT = 40;
  const padB = 24;
  const labelW = 200;
  const padL = 16;
  const padR = 16;
  const barTrackW = W - padL - padR - labelW;
  const H = padT + padB + rows.length * rowH;

  return (
    <figure className="w-full">
      <figcaption className="mb-5 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          Avg sentiment distribution per article · by entity · Nov 2025 – Apr 2026
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          WPP&rsquo;s negative coverage runs 68% higher than Omnicom&rsquo;s &mdash; same disruption forces, opposite frames.
        </h3>
      </figcaption>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-5 gap-y-2 mb-3 text-[11px] font-mono text-muted-foreground">
        {SEGMENTS.map((s) => (
          <span key={s.key} className="inline-flex items-center gap-1.5">
            <span
              aria-hidden
              className="inline-block w-2.5 h-2.5"
              style={{ backgroundColor: s.color, opacity: s.opacity ?? 0.85 }}
            />
            {s.label}
          </span>
        ))}
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Stacked sentiment bars per holding company. WPP shows the highest negative share at 44.8 percent; IPG and Omnicom the lowest."
      >
        {rows.map((r, i) => {
          const y = padT + i * rowH;
          const isHighlight = r.entity === "WPP" || r.entity === "Omnicom";
          let cursor = padL + labelW;
          return (
            <g key={r.entity}>
              {/* Entity label + n */}
              <text
                x={padL + labelW - 10}
                y={y + rowH / 2 - 6}
                textAnchor="end"
                fontFamily="var(--font-sans)"
                fontSize={14}
                fill={palette.foreground}
                fontWeight={isHighlight ? 500 : 400}
              >
                {r.entity}
              </text>
              <text
                x={padL + labelW - 10}
                y={y + rowH / 2 + 10}
                textAnchor="end"
                fontFamily="var(--font-mono)"
                fontSize={10}
                fill={palette.shade}
              >
                n = {r.n}
              </text>
              <text
                x={padL + labelW - 10}
                y={y + rowH / 2 + 24}
                textAnchor="end"
                fontFamily="var(--font-mono)"
                fontSize={10}
                fill={palette.shade}
              >
                {r.frame}
              </text>

              {/* Stacked bar */}
              {SEGMENTS.map((s) => {
                const v = r[s.key];
                const w = v * barTrackW;
                const seg = (
                  <g key={s.key}>
                    <rect
                      x={cursor}
                      y={y + rowH / 2 - 12}
                      width={w}
                      height={24}
                      fill={s.color}
                      opacity={s.opacity ?? 0.85}
                    />
                    {w > 36 && (
                      <text
                        x={cursor + w / 2}
                        y={y + rowH / 2 + 5}
                        textAnchor="middle"
                        fontFamily="var(--font-mono)"
                        fontSize={11}
                        fill={s.key === "neutral" ? palette.foreground : "#FFFFFF"}
                        className="tabular-nums"
                      >
                        {formatPct1(v)}
                      </text>
                    )}
                  </g>
                );
                cursor += w;
                return seg;
              })}
            </g>
          );
        })}
      </svg>

      <p className="mt-4 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: Perigon sentiment scoring; Shadow analysis. Entity sentiment averaged across all tier-1 articles citing the entity.
      </p>
    </figure>
  );
}
