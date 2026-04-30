import { palette, narratives } from "./data";

// Bar chart of weighted CPC by narrative — what enterprise buyers will actually
// pay. Retail AI Transformation is the highlight: highest CPC on the lowest
// media share in Consumer & Brand.

export function CPCSpread() {
  const rows = [...narratives]
    .map((n) => ({
      key: n.key,
      label: n.label,
      cpc: n.weightedCpc,
      mediaShare: n.mediaVolume,
    }))
    .sort((a, b) => b.cpc - a.cpc);

  const totalVol = narratives.reduce((a, n) => a + n.mediaVolume, 0);
  const max = Math.max(...rows.map((r) => r.cpc));

  const W = 800;
  const rowH = 56;
  const padT = 24;
  const padB = 24;
  const labelW = 200;
  const valueW = 130;
  const padL = 16;
  const padR = 16;
  const barTrackW = W - padL - padR - labelW - valueW;
  const H = padT + padB + rows.length * rowH;

  return (
    <figure className="w-full">
      <figcaption className="mb-5 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          Weighted average CPC · April 2026 (USD)
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          Enterprise buyers are paying premium for retail AI keywords the press almost never covers.
        </h3>
      </figcaption>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Bar chart of weighted CPC per narrative; Retail AI Transformation is highest at $19.33."
      >
        {rows.map((r, i) => {
          const y = padT + i * rowH;
          const barW = (r.cpc / max) * barTrackW;
          const isTop = i === 0;
          const sharePct = ((r.mediaShare / totalVol) * 100).toFixed(1);
          return (
            <g key={r.key}>
              <text
                x={padL + labelW - 10}
                y={y + rowH / 2 - 2}
                textAnchor="end"
                fontFamily="var(--font-sans)"
                fontSize={13}
                fill={palette.foreground}
              >
                {r.label}
              </text>
              <text
                x={padL + labelW - 10}
                y={y + rowH / 2 + 14}
                textAnchor="end"
                fontFamily="var(--font-mono)"
                fontSize={10}
                fill={palette.shade}
                className="tabular-nums"
              >
                {sharePct}% of media coverage
              </text>
              <rect
                x={padL + labelW}
                y={y + rowH / 2 - 7}
                width={Math.max(2, barW)}
                height={14}
                fill={isTop ? palette.dusk : palette.shade}
                opacity={isTop ? 1 : 0.7}
              />
              <text
                x={padL + labelW + barW + 10}
                y={y + rowH / 2 + 4}
                fontFamily="var(--font-mono)"
                fontSize={12}
                fill={isTop ? palette.dusk : palette.foreground}
                className="tabular-nums"
              >
                ${r.cpc.toFixed(2)}
              </text>
            </g>
          );
        })}

        {/* Annotation on top bar */}
        <g>
          <line
            x1={padL + labelW + barTrackW * 0.65}
            y1={padT + rowH / 2 - 22}
            x2={padL + labelW + barTrackW * 0.65}
            y2={padT + rowH / 2 - 9}
            stroke={palette.dusk}
            strokeWidth={0.5}
          />
          <text
            x={padL + labelW + barTrackW * 0.65}
            y={padT + rowH / 2 - 26}
            textAnchor="middle"
            fontFamily="var(--font-sans)"
            fontSize={11}
            fontStyle="italic"
            fill={palette.dusk}
          >
            Highest CPC in the category on 2.7% of media share
          </text>
        </g>
      </svg>

      <p className="mt-4 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: DataForSEO (US); Shadow analysis. Volume-weighted across each narrative&rsquo;s keyword set.
      </p>
    </figure>
  );
}
