import { palette, narratives, formatComma, formatK } from "./data";

// 2x2 alignment matrix: media volume (x) vs. monthly search volume (y, log scale).
// DTC's 14.5M monthly searches forces log treatment; the visualization reads as
// "where does the press lead, where does the market lead, where do they meet?"

export function AlignmentMatrix() {
  const W = 800;
  const H = 480;
  const padL = 76;
  const padR = 32;
  const padT = 64;
  const padB = 64;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;

  // Linear x-axis on media volume, log y-axis on search demand (DTC at 14.5M
  // is two orders of magnitude above everything else).
  const xMax = 12000;
  const yLogMin = Math.log10(1000);
  const yLogMax = Math.log10(20_000_000);

  const xPos = (v: number) => padL + (v / xMax) * chartW;
  const yPos = (v: number) => {
    const safe = Math.max(v, 1000);
    const logv = Math.log10(safe);
    return padT + chartH - ((logv - yLogMin) / (yLogMax - yLogMin)) * chartH;
  };

  // Quadrant midlines: 4K media is the median split; 100K search is the
  // threshold above which a narrative carries genuine consumer pull.
  const xMid = 4000;
  const yMid = 100_000;

  const yTicks = [1_000, 10_000, 100_000, 1_000_000, 10_000_000];

  return (
    <figure className="w-full">
      <figcaption className="mb-5 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          Media volume × Search demand · April 2026 (log scale)
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          DTC is really a search story. The press is writing about creators.
        </h3>
      </figcaption>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Scatter plot of consumer narratives positioned by media volume and search demand on log scale, divided into four alignment quadrants."
      >
        {/* Quadrant fills */}
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
          <text
            key={`x-${t}`}
            x={xPos(t)}
            y={H - 36}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize={10}
            fill={palette.shade}
            className="tabular-nums"
          >
            {formatComma(t)}
          </text>
        ))}
        {yTicks.map((t) => (
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
            {formatK(t)}
          </text>
        ))}

        <text
          x={padL + chartW / 2}
          y={H - 14}
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize={10}
          fill={palette.foreground}
          className="uppercase tracking-widest"
        >
          Media volume (articles, 30d)
        </text>
        <text
          x={20}
          y={padT + chartH / 2}
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize={10}
          fill={palette.foreground}
          transform={`rotate(-90, 20, ${padT + chartH / 2})`}
          className="uppercase tracking-widest"
        >
          Search demand (monthly · log)
        </text>

        {/* Plot points */}
        {narratives.map((n) => {
          const cx = xPos(n.mediaVolume);
          const cy = yPos(n.searchVolume);
          const isCreator = n.key === "creator";
          const isDtc = n.key === "dtc";
          const isTariff = n.key === "tariff";
          const color = isCreator
            ? palette.dusk
            : isDtc
            ? palette.uv
            : isTariff
            ? palette.lamplight
            : palette.shade;
          const offset: Record<
            string,
            { dx: number; dy: number; anchor: "start" | "end" }
          > = {
            creator: { dx: -10, dy: -12, anchor: "end" },
            dtc: { dx: -10, dy: -12, anchor: "end" },
            sports: { dx: 10, dy: 4, anchor: "start" },
            tariff: { dx: 10, dy: -10, anchor: "start" },
            luxury: { dx: 10, dy: 4, anchor: "start" },
            retailAI: { dx: 10, dy: 4, anchor: "start" },
          };
          const o = offset[n.key];
          const r = isCreator || isDtc ? 7 : 5;
          return (
            <g key={n.key}>
              <circle
                cx={cx}
                cy={cy}
                r={r}
                fill={color}
                opacity={isCreator || isDtc ? 1 : 0.85}
              />
              <text
                x={cx + o.dx}
                y={cy + o.dy}
                textAnchor={o.anchor}
                fontFamily="var(--font-sans)"
                fontSize={12}
                fontWeight={isCreator || isDtc ? 500 : 400}
                fill={color}
              >
                {n.short}
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
                {n.classification.replace("_", " ")}
              </text>
            </g>
          );
        })}
      </svg>

      <p className="mt-4 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: Perigon; DataForSEO; Shadow analysis. Quadrants split at 4K media / 100K search.
      </p>
    </figure>
  );
}
