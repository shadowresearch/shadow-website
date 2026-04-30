import { palette, narratives, formatComma } from "./data";

// 2x2 alignment matrix: media volume (x) vs. monthly search volume (y).
// Quadrants encode the alignment classifications (ALIGNED, MEDIA_LEADS, MARKET_LEADS, DECOUPLED).

export function AlignmentMatrix() {
  const W = 800;
  const H = 460;
  const padL = 64;
  const padR = 32;
  const padT = 64;
  const padB = 60;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;

  // Log-friendly linear axes; round-number max anchors
  const xMax = 12000; // media articles
  const yMax = 16000; // monthly searches

  const xPos = (v: number) => padL + (v / xMax) * chartW;
  const yPos = (v: number) => padT + chartH - (v / yMax) * chartH;

  // Quadrant midlines: median-ish thresholds
  const xMid = 4000;
  const yMid = 6000;

  return (
    <figure className="w-full">
      <figcaption className="mb-5 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          Media volume × Search demand · April 2026
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          One narrative is aligned. Two lead the market. Two are decoupled from buyer search.
        </h3>
      </figcaption>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Scatter plot of workforce narratives positioned by media volume and search demand, divided into four alignment quadrants."
      >
        {/* Quadrant fills, very faint */}
        <rect
          x={xPos(xMid)}
          y={padT}
          width={chartW - (xPos(xMid) - padL)}
          height={yPos(yMid) - padT}
          fill={palette.dusk}
          opacity={0.05}
        />
        <rect
          x={padL}
          y={padT}
          width={xPos(xMid) - padL}
          height={yPos(yMid) - padT}
          fill={palette.uv}
          opacity={0.05}
        />

        {/* Quadrant midlines */}
        <line
          x1={xPos(xMid)}
          y1={padT}
          x2={xPos(xMid)}
          y2={padT + chartH}
          stroke={palette.border}
          strokeWidth={0.5}
          strokeDasharray="3 4"
        />
        <line
          x1={padL}
          y1={yPos(yMid)}
          x2={padL + chartW}
          y2={yPos(yMid)}
          stroke={palette.border}
          strokeWidth={0.5}
          strokeDasharray="3 4"
        />

        {/* Quadrant labels */}
        <text
          x={padL + chartW - 8}
          y={padT + 14}
          textAnchor="end"
          fontFamily="var(--font-mono)"
          fontSize={10}
          fill={palette.dusk}
          className="uppercase tracking-widest"
        >
          ALIGNED
        </text>
        <text
          x={padL + 8}
          y={padT + 14}
          fontFamily="var(--font-mono)"
          fontSize={10}
          fill={palette.uv}
          className="uppercase tracking-widest"
        >
          MARKET LEADS
        </text>
        <text
          x={padL + chartW - 8}
          y={padT + chartH - 6}
          textAnchor="end"
          fontFamily="var(--font-mono)"
          fontSize={10}
          fill={palette.shade}
          className="uppercase tracking-widest"
        >
          MEDIA LEADS
        </text>
        <text
          x={padL + 8}
          y={padT + chartH - 6}
          fontFamily="var(--font-mono)"
          fontSize={10}
          fill={palette.shade}
          className="uppercase tracking-widest"
        >
          DECOUPLED
        </text>

        {/* Axes */}
        <line
          x1={padL}
          y1={padT + chartH}
          x2={padL + chartW}
          y2={padT + chartH}
          stroke={palette.border}
          strokeWidth={0.75}
        />
        <line
          x1={padL}
          y1={padT}
          x2={padL}
          y2={padT + chartH}
          stroke={palette.border}
          strokeWidth={0.75}
        />

        {/* Axis ticks */}
        {[0, 4000, 8000, 12000].map((t) => (
          <g key={`x-${t}`}>
            <text
              x={xPos(t)}
              y={H - 32}
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize={10}
              fill={palette.shade}
              className="tabular-nums"
            >
              {formatComma(t)}
            </text>
          </g>
        ))}
        {[0, 4000, 8000, 12000, 16000].map((t) => (
          <g key={`y-${t}`}>
            <text
              x={padL - 10}
              y={yPos(t) + 4}
              textAnchor="end"
              fontFamily="var(--font-mono)"
              fontSize={10}
              fill={palette.shade}
              className="tabular-nums"
            >
              {formatComma(t)}
            </text>
          </g>
        ))}

        <text
          x={padL + chartW / 2}
          y={H - 12}
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize={10}
          fill={palette.foreground}
          className="uppercase tracking-widest"
        >
          Media volume (articles, 30d)
        </text>
        <text
          x={16}
          y={padT + chartH / 2}
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize={10}
          fill={palette.foreground}
          transform={`rotate(-90, 16, ${padT + chartH / 2})`}
          className="uppercase tracking-widest"
        >
          Search demand (monthly)
        </text>

        {/* Plot points */}
        {narratives.map((n) => {
          const cx = xPos(n.mediaVolume);
          const cy = yPos(n.searchVolume);
          const isAnchor = n.key === "displacement";
          const isParadox = n.key === "productivity";
          const color = isAnchor
            ? palette.dusk
            : isParadox
            ? palette.lamplight
            : palette.shade;
          // Manual label offsets per narrative to avoid overlap
          const offset = {
            displacement: { dx: -10, dy: -14, anchor: "end" as const },
            productivity: { dx: 10, dy: 4, anchor: "start" as const },
            skills: { dx: 10, dy: -10, anchor: "start" as const },
            gig: { dx: 10, dy: 4, anchor: "start" as const },
            whiteCollar: { dx: 10, dy: 4, anchor: "start" as const },
          }[n.key];
          return (
            <g key={n.key}>
              <circle
                cx={cx}
                cy={cy}
                r={isAnchor ? 7 : 5}
                fill={color}
                opacity={isAnchor ? 1 : 0.85}
              />
              <text
                x={cx + offset.dx}
                y={cy + offset.dy}
                textAnchor={offset.anchor}
                fontFamily="var(--font-sans)"
                fontSize={12}
                fontWeight={isAnchor ? 500 : 400}
                fill={color}
              >
                {n.short}
              </text>
              <text
                x={cx + offset.dx}
                y={cy + offset.dy + 13}
                textAnchor={offset.anchor}
                fontFamily="var(--font-mono)"
                fontSize={10}
                fill={color}
                opacity={0.85}
              >
                {n.classification}
              </text>
            </g>
          );
        })}
      </svg>

      <p className="mt-4 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: Perigon; DataForSEO; Shadow analysis. Quadrants split at 4K media / 6K search.
      </p>
    </figure>
  );
}
