import { palette, narratives, formatComma } from "./data";

// Scatter of media volume (x) × monthly search demand (y) with quadrants.
// GEO and Crisis are the two narratives with high search relative to coverage.

export function WhiteSpaceMatrix() {
  const W = 820;
  const H = 520;
  const padL = 64;
  const padR = 32;
  const padT = 48;
  const padB = 64;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;

  const xMax = 700;
  const yMax = 6500;

  const xPos = (v: number) => padL + (v / xMax) * chartW;
  const yPos = (v: number) => padT + chartH - (v / yMax) * chartH;

  const xMid = 200;
  const yMid = 1500;

  // Per-narrative label placement, hand-tuned to avoid overlap with both
  // points and quadrant labels. dx/dy are pixel offsets from the point.
  const offsets: Record<
    string,
    { dx: number; dy: number; anchor: "start" | "middle" | "end" }
  > = {
    geo:           { dx: 14,  dy: -2,  anchor: "start" }, // upper-mid-left → label right
    aiAdoption:    { dx: -14, dy: -2,  anchor: "end"   }, // top-right → label left so it doesn't clip
    trust:         { dx: -14, dy: -16, anchor: "end"   }, // bottom-right → label up-left, clear of consolidation
    crisis:        { dx: 14,  dy: -16, anchor: "start" }, // just below midline → label well above to clear THIN MARKET
    earned:        { dx: 14,  dy: -16, anchor: "start" }, // mid-low → label up-right, clear of talent below
    consolidation: { dx: 14,  dy: 14,  anchor: "start" }, // bottom-mid → label down-right, clear of trust above
    talent:        { dx: 14,  dy: -6,  anchor: "start" }, // bottom cluster → label up-right
    advocacy:      { dx: 14,  dy: 14,  anchor: "start" }, // very bottom-left → label down-right, clear of talent above
  };

  return (
    <figure className="w-full">
      <figcaption className="mb-5 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          Media coverage × Search demand · 6-month window
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          Two narratives sit in the white-space quadrant. Buyers are searching; the industry isn&rsquo;t writing.
        </h3>
      </figcaption>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Scatter of PR/comms narratives by media volume and search demand. GEO and Crisis PR sit in the high-search, low-media white-space quadrant."
      >
        {/* Quadrant fills */}
        <rect
          x={padL}
          y={padT}
          width={xPos(xMid) - padL}
          height={yPos(yMid) - padT}
          fill={palette.dusk}
          opacity={0.06}
        />
        <rect
          x={xPos(xMid)}
          y={padT}
          width={padL + chartW - xPos(xMid)}
          height={yPos(yMid) - padT}
          fill={palette.uv}
          opacity={0.04}
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

        {/* Quadrant labels — placed at the midline so they sit clear of points */}
        <text
          x={padL + 10}
          y={padT + 16}
          fontFamily="var(--font-mono)"
          fontSize={10}
          fill={palette.dusk}
          className="uppercase tracking-widest"
        >
          WHITE SPACE
        </text>
        <text
          x={padL + chartW - 10}
          y={padT + 16}
          textAnchor="end"
          fontFamily="var(--font-mono)"
          fontSize={10}
          fill={palette.uv}
          className="uppercase tracking-widest"
        >
          ALIGNED HIGH-DEMAND
        </text>
        <text
          x={padL + 10}
          y={yPos(yMid) + 18}
          fontFamily="var(--font-mono)"
          fontSize={10}
          fill={palette.shade}
          className="uppercase tracking-widest"
        >
          THIN MARKET
        </text>
        <text
          x={padL + chartW - 10}
          y={yPos(yMid) + 18}
          textAnchor="end"
          fontFamily="var(--font-mono)"
          fontSize={10}
          fill={palette.shade}
          className="uppercase tracking-widest"
        >
          OVERSUPPLIED
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
        {[0, 200, 400, 600].map((t) => (
          <text
            key={`x-${t}`}
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
        ))}
        {[0, 1500, 3000, 4500, 6000].map((t) => (
          <text
            key={`y-${t}`}
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
          Media coverage (articles, 6 mo)
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
          const cx = xPos(Math.min(n.mediaVol, xMax));
          const cy = yPos(Math.min(n.searchVol, yMax));
          const isPrimary = n.key === "geo";
          const isSecondary = n.key === "crisis";
          const color = isPrimary
            ? palette.dusk
            : isSecondary
            ? palette.lamplight
            : palette.shade;
          const o = offsets[n.key];
          return (
            <g key={n.key}>
              <circle
                cx={cx}
                cy={cy}
                r={isPrimary ? 8 : isSecondary ? 6 : 5}
                fill={color}
                opacity={isPrimary || isSecondary ? 1 : 0.7}
              />
              <text
                x={cx + o.dx}
                y={cy + o.dy}
                textAnchor={o.anchor}
                fontFamily="var(--font-sans)"
                fontSize={12}
                fontWeight={isPrimary ? 500 : 400}
                fill={color}
              >
                {n.label}
              </text>
              <text
                x={cx + o.dx}
                y={cy + o.dy + 13}
                textAnchor={o.anchor}
                fontFamily="var(--font-mono)"
                fontSize={10}
                fill={color}
                opacity={0.85}
              >
                ratio {n.ratio.toFixed(2)}x
              </text>
            </g>
          );
        })}
      </svg>

      <p className="mt-4 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: Perigon (media); DataForSEO (search). Shadow analysis. Quadrants split at 200 articles / 1.5K searches.
      </p>
    </figure>
  );
}
