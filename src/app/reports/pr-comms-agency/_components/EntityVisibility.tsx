import { palette, entities, formatPct } from "./data";

// Horizontal ranked bar of AI engine SOV across the top 10 PR/comms entities.
// Edelman is the highlight; the independent-premium narrative (Finn Partners,
// Ruder Finn outranking FleishmanHillard and Ketchum) is called out as a
// caption below the chart so it doesn't crowd the bars.

export function EntityVisibility() {
  const rows = [...entities].sort((a, b) => b.total - a.total);
  const max = Math.max(...rows.map((r) => r.total));

  const W = 800;
  const rowH = 38;
  const padT = 24;
  const padB = 24;
  const labelW = 200;
  const valueW = 110;
  const padL = 16;
  const padR = 16;
  const barTrackW = W - padL - padR - labelW - valueW;
  const H = padT + padB + rows.length * rowH;

  return (
    <figure className="w-full">
      <figcaption className="mb-5 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          Entity SOV across 60 GEO queries · April 2026
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          Edelman appears in 65% of all AI queries — nearly 2× its nearest competitor.
        </h3>
        <p
          className="mt-3 text-[12px] italic"
          style={{ color: palette.lamplight }}
        >
          Independents Finn Partners and Ruder Finn outrank FleishmanHillard
          and Ketchum in AI-generated recommendations.
        </p>
      </figcaption>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Horizontal bar chart of PR/comms entity share of voice across 60 generative AI queries. Edelman ranks first; Finn Partners and Ruder Finn outrank FleishmanHillard and Ketchum."
      >
        {rows.map((r, i) => {
          const y = padT + i * rowH;
          const barW = (r.total / max) * barTrackW;
          const isTop = i === 0;
          const isIndependent =
            r.entity === "Finn Partners" || r.entity === "Ruder Finn";
          const color = isTop
            ? palette.dusk
            : isIndependent
            ? palette.lamplight
            : palette.shade;
          return (
            <g key={r.entity}>
              <text
                x={padL + labelW - 10}
                y={y + rowH / 2 + 4}
                textAnchor="end"
                fontFamily="var(--font-sans)"
                fontSize={13}
                fill={palette.foreground}
                fontWeight={isTop ? 500 : 400}
              >
                {r.entity}
              </text>
              <rect
                x={padL + labelW}
                y={y + rowH / 2 - 8}
                width={Math.max(2, barW)}
                height={16}
                fill={color}
                opacity={isTop ? 1 : isIndependent ? 0.9 : 0.65}
              />
              <text
                x={padL + labelW + barW + 10}
                y={y + rowH / 2 + 4}
                fontFamily="var(--font-mono)"
                fontSize={12}
                fill={
                  isTop
                    ? palette.dusk
                    : isIndependent
                    ? palette.lamplight
                    : palette.foreground
                }
                className="tabular-nums"
              >
                {formatPct(r.sov)} ({r.total}/60)
              </text>
            </g>
          );
        })}
      </svg>

      <p className="mt-4 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: Shadow GEO Audit. 15 prompts × 4 providers (GPT-5, Claude Opus 4, Gemini 2.5 Pro, Perplexity Sonar Pro). 27 Apr 2026.
      </p>
    </figure>
  );
}
