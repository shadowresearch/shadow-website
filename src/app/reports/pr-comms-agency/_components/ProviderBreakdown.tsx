import { palette, entities } from "./data";

// Stacked horizontal bars showing AI provider coverage for the top 6 entities.
// Each provider runs 15 prompts. Edelman's lead holds across all four.

const PROVIDERS = [
  { key: "chatgpt",    label: "ChatGPT",    color: palette.dusk },
  { key: "claude",     label: "Claude",     color: palette.lamplight },
  { key: "gemini",     label: "Gemini",     color: palette.uv },
  { key: "perplexity", label: "Perplexity", color: palette.shade },
] as const;

export function ProviderBreakdown() {
  const rows = [...entities].sort((a, b) => b.total - a.total).slice(0, 6);
  const max = 15 * PROVIDERS.length; // 60 total

  const W = 800;
  const rowH = 50;
  const padT = 40;
  const padB = 24;
  const labelW = 180;
  const valueW = 60;
  const padL = 16;
  const padR = 16;
  const barTrackW = W - padL - padR - labelW - valueW;
  const H = padT + padB + rows.length * rowH;

  return (
    <figure className="w-full">
      <figcaption className="mb-5 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          Mentions by AI provider · top 6 entities · 15 prompts per provider
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          Edelman&rsquo;s lead holds across every AI provider — no challenger is provider-specific.
        </h3>
      </figcaption>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-5 gap-y-2 mb-3 text-[11px] font-mono text-muted-foreground">
        {PROVIDERS.map((p) => (
          <span key={p.key} className="inline-flex items-center gap-1.5">
            <span
              aria-hidden
              className="inline-block w-2.5 h-2.5"
              style={{ backgroundColor: p.color }}
            />
            {p.label}
          </span>
        ))}
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Stacked horizontal bars showing AI provider mention counts for the top six PR/comms agencies."
      >
        {rows.map((r, i) => {
          const y = padT + i * rowH;
          let xCursor = padL + labelW;
          const total = r.total;
          return (
            <g key={r.entity}>
              <text
                x={padL + labelW - 10}
                y={y + rowH / 2 + 4}
                textAnchor="end"
                fontFamily="var(--font-sans)"
                fontSize={13}
                fill={palette.foreground}
              >
                {r.entity}
              </text>
              {PROVIDERS.map((p) => {
                const v = r[p.key] as number;
                const w = (v / max) * barTrackW;
                const seg = (
                  <g key={p.key}>
                    <rect
                      x={xCursor}
                      y={y + rowH / 2 - 9}
                      width={Math.max(0, w)}
                      height={18}
                      fill={p.color}
                      opacity={0.9}
                    />
                    {v > 2 && (
                      <text
                        x={xCursor + w / 2}
                        y={y + rowH / 2 + 4}
                        textAnchor="middle"
                        fontFamily="var(--font-mono)"
                        fontSize={10}
                        fill="#FFFFFF"
                        className="tabular-nums"
                      >
                        {v}
                      </text>
                    )}
                  </g>
                );
                xCursor += w;
                return seg;
              })}
              <text
                x={padL + labelW + (total / max) * barTrackW + 10}
                y={y + rowH / 2 + 4}
                fontFamily="var(--font-mono)"
                fontSize={12}
                fill={palette.foreground}
                className="tabular-nums"
              >
                {total}
              </text>
            </g>
          );
        })}
      </svg>

      <p className="mt-4 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: Shadow GEO Audit. Each provider answered 15 prompts; max possible per entity per provider = 15. April 2026.
      </p>
    </figure>
  );
}
