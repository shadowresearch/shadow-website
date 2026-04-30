import { palette, monthlyData, narratives, type NarrativeKey } from "./data";

// Stacked bar by month, narratives ordered to surface margin / consolidation
// at the bottom (the dominant narratives) and regulatory + talent on top so
// their April / February inflections are visible.

const STACK_ORDER: NarrativeKey[] = [
  "margin",
  "consolidation",
  "ai",
  "regulatory",
  "talent",
];

export function NarrativeStack() {
  const W = 800;
  const H = 380;
  const padL = 56;
  const padR = 156;
  const padT = 48;
  const padB = 48;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;

  const colorByKey = Object.fromEntries(
    narratives.map((n) => [n.key, n.color])
  ) as Record<NarrativeKey, string>;
  const labelByKey = Object.fromEntries(
    narratives.map((n) => [n.key, n.label])
  ) as Record<NarrativeKey, string>;

  const maxStack = Math.max(
    ...monthlyData.map((r) =>
      STACK_ORDER.reduce((acc, k) => acc + (r[k] as number), 0)
    )
  );

  const barW = chartW / monthlyData.length - 16;
  const xBar = (i: number) =>
    padL + (i + 0.5) * (chartW / monthlyData.length) - barW / 2;
  const yPos = (v: number) => padT + chartH - (v / maxStack) * chartH;

  const yTicks = [0, 15, 30, 45, 60];

  return (
    <figure className="w-full">
      <figcaption className="mb-5 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          Monthly volume by narrative · stacked
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          Margin and consolidation dominate. AI is the third narrative, not the first.
        </h3>
      </figcaption>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Stacked bar chart of monthly tier-1 article volume by narrative across the agency sector. Margin and consolidation dominate; regulatory spikes in April."
      >
        {yTicks.map((t) => (
          <g key={t}>
            <text
              x={padL - 10}
              y={yPos(t) + 4}
              textAnchor="end"
              fontFamily="var(--font-mono)"
              fontSize={10}
              fill={palette.shade}
              className="tabular-nums"
            >
              {t}
            </text>
            <line
              x1={padL}
              y1={yPos(t)}
              x2={W - padR}
              y2={yPos(t)}
              stroke={palette.border}
              strokeWidth={0.5}
              strokeDasharray="2 4"
              opacity={0.5}
            />
          </g>
        ))}

        {monthlyData.map((row, i) => {
          let cursor = padT + chartH;
          return (
            <g key={row.m}>
              {STACK_ORDER.map((k) => {
                const v = row[k] as number;
                if (!v) return null;
                const h = (v / maxStack) * chartH;
                const y = cursor - h;
                cursor = y;
                return (
                  <rect
                    key={k}
                    x={xBar(i)}
                    y={y}
                    width={barW}
                    height={h}
                    fill={colorByKey[k]}
                    opacity={0.85}
                  />
                );
              })}
              <text
                x={xBar(i) + barW / 2}
                y={H - 14}
                textAnchor="middle"
                fontFamily="var(--font-mono)"
                fontSize={10}
                fill={palette.shade}
              >
                {row.m}
              </text>
            </g>
          );
        })}

        {/* Right-side legend */}
        {STACK_ORDER.map((k, i) => {
          const y = padT + 4 + i * 22;
          return (
            <g key={`leg-${k}`}>
              <rect
                x={W - padR + 10}
                y={y}
                width={12}
                height={12}
                fill={colorByKey[k]}
                opacity={0.85}
              />
              <text
                x={W - padR + 28}
                y={y + 10}
                fontFamily="var(--font-sans)"
                fontSize={11}
                fill={palette.foreground}
              >
                {labelByKey[k]}
              </text>
            </g>
          );
        })}
      </svg>

      <p className="mt-4 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: Perigon News Intelligence; Shadow analysis. Tier-1 business and tech media.
      </p>
    </figure>
  );
}
