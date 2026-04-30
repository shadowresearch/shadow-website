import { palette, narratives, formatComma } from "./data";

// Horizontal ordered bar of monthly media volume across the 6 consumer & brand
// narratives. Top bar (Creator Economy) in Dusk; rest in Shade.

export function NarrativeRanking() {
  const rows = [...narratives]
    .map((n) => ({
      key: n.key,
      label: n.label,
      value: n.mediaVolume,
    }))
    .sort((a, b) => b.value - a.value);

  const totalVolume = rows.reduce((a, r) => a + r.value, 0);
  const max = Math.max(...rows.map((r) => r.value));

  const W = 800;
  const rowH = 48;
  const padT = 24;
  const padB = 24;
  const labelW = 200;
  const valueW = 110;
  const padL = 16;
  const padR = 16;
  const barTrackW = W - padL - padR - labelW - valueW;
  const H = padT + padB + rows.length * rowH;

  const topShare = ((rows[0].value / totalVolume) * 100).toFixed(1);

  return (
    <figure className="w-full">
      <figcaption className="mb-5 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          Monthly media volume · Ranked, April 2026
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          Creators and DTC together write 62% of the consumer story.
        </h3>
      </figcaption>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Ranked horizontal bar chart of consumer and brand narratives by April 2026 article volume."
      >
        {rows.map((r, i) => {
          const y = padT + i * rowH;
          const barW = (r.value / max) * barTrackW;
          const isTop = i === 0;
          const sharePct = ((r.value / totalVolume) * 100).toFixed(1);
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
                y={y + rowH / 2 - 1}
                fontFamily="var(--font-mono)"
                fontSize={12}
                fill={isTop ? palette.dusk : palette.foreground}
                className="tabular-nums"
              >
                {formatComma(r.value)}
              </text>
              <text
                x={padL + labelW + barW + 10}
                y={y + rowH / 2 + 13}
                fontFamily="var(--font-mono)"
                fontSize={10}
                fill={palette.shade}
                className="tabular-nums"
              >
                {sharePct}%
              </text>
            </g>
          );
        })}

        {/* Annotation on top bar */}
        <g>
          <line
            x1={padL + labelW + barTrackW * 0.7}
            y1={padT + rowH / 2 - 20}
            x2={padL + labelW + barTrackW * 0.7}
            y2={padT + rowH / 2 - 11}
            stroke={palette.dusk}
            strokeWidth={0.5}
          />
          <text
            x={padL + labelW + barTrackW * 0.7}
            y={padT + rowH / 2 - 25}
            textAnchor="middle"
            fontFamily="var(--font-sans)"
            fontSize={11}
            fontStyle="italic"
            fill={palette.dusk}
          >
            {topShare}% of all consumer coverage in a single narrative
          </text>
        </g>
      </svg>

      <p className="mt-4 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: Perigon; Shadow analysis. Articles per 30-day window, April 2026.
      </p>
    </figure>
  );
}
