import { palette, narratives, formatComma } from "./data";

// AI engine mentions per 100 articles. Highlights the AI Productivity Paradox
// gap: AI engines treat it as a central question, the press barely covers it.

export function AIEngineDivergence() {
  const rows = narratives
    .map((n) => ({
      key: n.key,
      label: n.label,
      ratio: (n.aiMentions / n.mediaVolume) * 100,
      aiMentions: n.aiMentions,
      mediaVolume: n.mediaVolume,
    }))
    .sort((a, b) => b.ratio - a.ratio);

  const max = Math.max(...rows.map((r) => r.ratio));

  const W = 800;
  const rowH = 56;
  const padT = 24;
  const padB = 24;
  const labelW = 160;
  const valueW = 140;
  const padL = 16;
  const padR = 16;
  const barTrackW = W - padL - padR - labelW - valueW;
  const H = padT + padB + rows.length * rowH;

  return (
    <figure className="w-full">
      <figcaption className="mb-5 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          AI engine mentions per 100 articles · April 2026
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          AI engines treat &ldquo;does AI actually work&rdquo; as the central workforce question. The press barely covers it.
        </h3>
      </figcaption>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Bar chart of AI engine mentions per 100 articles by narrative; AI Productivity Paradox is highest."
      >
        {rows.map((r, i) => {
          const y = padT + i * rowH;
          const barW = (r.ratio / max) * barTrackW;
          const isTop = i === 0;
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
                {r.aiMentions} mentions / {formatComma(r.mediaVolume)} articles
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
                {r.ratio.toFixed(1)} per 100
              </text>
            </g>
          );
        })}

        {/* Annotation on top bar */}
        <g>
          <line
            x1={padL + labelW + barTrackW * 0.55}
            y1={padT + rowH / 2 - 22}
            x2={padL + labelW + barTrackW * 0.55}
            y2={padT + rowH / 2 - 9}
            stroke={palette.dusk}
            strokeWidth={0.5}
          />
          <text
            x={padL + labelW + barTrackW * 0.55}
            y={padT + rowH / 2 - 26}
            textAnchor="middle"
            fontFamily="var(--font-sans)"
            fontSize={11}
            fontStyle="italic"
            fill={palette.dusk}
          >
            12× the press rate; the question buyers ask AI engines first
          </text>
        </g>
      </svg>

      <p className="mt-4 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: Shadow GEO audit (ChatGPT, Claude, Gemini, Perplexity); Perigon. April 2026.
      </p>
    </figure>
  );
}
