import { palette, narratives, formatPct } from "./data";

// Horizontal ranked bar of narrative share of voice across tier-1 coverage.
// Talent / Jobs is highlighted as the underreported story.

export function NarrativeShare() {
  const rows = [...narratives].sort((a, b) => b.share - a.share);
  const max = Math.max(...rows.map((r) => r.share));

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
          % of agency-relevant tier-1 coverage · by narrative
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          The talent story is nearly invisible — 4% of coverage against 4,000+ confirmed cuts.
        </h3>
      </figcaption>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Horizontal ranked bar of agency-sector narrative share of voice; talent at 4% is the underreported narrative."
      >
        {rows.map((r, i) => {
          const y = padT + i * rowH;
          const barW = (r.share / max) * barTrackW;
          const isTalent = r.key === "talent";
          const color = isTalent ? palette.lamplight : palette.shade;
          return (
            <g key={r.key}>
              <text
                x={padL + labelW - 10}
                y={y + rowH / 2 - 2}
                textAnchor="end"
                fontFamily="var(--font-sans)"
                fontSize={13}
                fill={palette.foreground}
                fontWeight={isTalent ? 500 : 400}
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
              >
                {r.lifecycle}
              </text>
              <rect
                x={padL + labelW}
                y={y + rowH / 2 - 8}
                width={Math.max(2, barW)}
                height={16}
                fill={color}
                opacity={isTalent ? 1 : 0.7}
              />
              <text
                x={padL + labelW + barW + 10}
                y={y + rowH / 2 - 1}
                fontFamily="var(--font-mono)"
                fontSize={12}
                fill={isTalent ? palette.lamplight : palette.foreground}
                className="tabular-nums"
              >
                {formatPct(r.share)}
              </text>
              <text
                x={padL + labelW + barW + 10}
                y={y + rowH / 2 + 14}
                fontFamily="var(--font-mono)"
                fontSize={10}
                fill={palette.shade}
                className="tabular-nums"
              >
                n = {r.count}
              </text>
            </g>
          );
        })}

        {/* Annotation on Talent row */}
        <g>
          <line
            x1={padL + labelW + (rows[rows.length - 1].share / max) * barTrackW + 80}
            y1={padT + (rows.length - 1) * rowH + rowH / 2 + 6}
            x2={padL + labelW + (rows[rows.length - 1].share / max) * barTrackW + 90}
            y2={padT + (rows.length - 1) * rowH + rowH / 2 + 14}
            stroke={palette.lamplight}
            strokeWidth={0.5}
          />
          <text
            x={padL + labelW + (rows[rows.length - 1].share / max) * barTrackW + 96}
            y={padT + (rows.length - 1) * rowH + rowH / 2 + 18}
            fontFamily="var(--font-sans)"
            fontSize={11}
            fontStyle="italic"
            fill={palette.lamplight}
          >
            underreported by an order of magnitude
          </text>
        </g>
      </svg>

      <p className="mt-4 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: Perigon News Intelligence; Shadow analysis. n = 272 tier-1 articles, Nov 2025 – Apr 2026.
      </p>
    </figure>
  );
}
