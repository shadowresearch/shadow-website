import { palette, narratives, formatComma } from "./data";

// AI engine mentions per 100 articles. Highlights the Tariff Brand Identity gap:
// AI engines treat trade policy as the defining consumer narrative even though
// the press has barely started covering it.

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
  const labelW = 200;
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
          The press writes about creators. AI engines talk about tariffs.
        </h3>
      </figcaption>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Bar chart of AI engine mentions per 100 articles by narrative; Retail AI Transformation and Tariff Brand Identity lead the ratio."
      >
        {rows.map((r, i) => {
          const y = padT + i * rowH;
          const barW = (r.ratio / max) * barTrackW;
          const isTariff = r.key === "tariff";
          const isTop = i === 0;
          const accent = isTariff
            ? palette.dusk
            : isTop
            ? palette.lamplight
            : palette.shade;
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
                fill={accent}
                opacity={isTariff || isTop ? 1 : 0.7}
              />
              <text
                x={padL + labelW + barW + 10}
                y={y + rowH / 2 + 4}
                fontFamily="var(--font-mono)"
                fontSize={12}
                fill={accent}
                className="tabular-nums"
              >
                {r.ratio.toFixed(2)} per 100
              </text>
            </g>
          );
        })}

        {/* Annotation — Tariff has the highest absolute mention count (87) */}
        {(() => {
          const tariffIdx = rows.findIndex((r) => r.key === "tariff");
          const y = padT + tariffIdx * rowH + rowH / 2;
          return (
            <g>
              <line
                x1={padL + labelW + barTrackW * 0.55}
                y1={y - 18}
                x2={padL + labelW + barTrackW * 0.55}
                y2={y - 9}
                stroke={palette.dusk}
                strokeWidth={0.5}
              />
              <text
                x={padL + labelW + barTrackW * 0.55}
                y={y - 22}
                textAnchor="middle"
                fontFamily="var(--font-sans)"
                fontSize={11}
                fontStyle="italic"
                fill={palette.dusk}
              >
                87 mentions — the highest absolute count in the category
              </text>
            </g>
          );
        })()}
      </svg>

      <p className="mt-4 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: Shadow GEO audit (ChatGPT, Claude, Gemini, Perplexity); Perigon. April 2026.
      </p>
    </figure>
  );
}
