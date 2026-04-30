import { palette, keywords, formatComma, type Keyword } from "./data";

// Bubble plot of search demand × CPC for the keyword universe.
// Bubble size = monthly volume. GEO cluster is highlighted in dusk.

const CLUSTER_COLOR: Record<string, string> = {
  "GEO/AI": palette.dusk,
  "Crisis PR": palette.lamplight,
  "Agency Selection": palette.uv,
  "Tech PR": palette.amber,
  Brand: palette.shade,
};

// Combine keywords that share identical (volume, cpc) coordinates so labels
// don't stack on top of each other. The display label joins the terms with
// "·" and the cluster of the dominant term wins.
type DisplayPoint = {
  id: string;
  label: string;
  volume: number;
  cpc: number;
  cluster: Keyword["cluster"];
};

function combineCoincident(rows: Keyword[]): DisplayPoint[] {
  const groups = new Map<string, Keyword[]>();
  for (const r of rows) {
    const k = `${r.volume}|${r.cpc}`;
    const arr = groups.get(k) ?? [];
    arr.push(r);
    groups.set(k, arr);
  }
  return Array.from(groups.values()).map((g) => ({
    id: g.map((x) => x.term).join("|"),
    label: g.map((x) => x.term).join(" · "),
    volume: g[0].volume,
    cpc: g[0].cpc,
    cluster: g[0].cluster,
  }));
}

export function SearchDemand() {
  const points = combineCoincident(keywords);

  const W = 820;
  const H = 480;
  const padL = 64;
  const padR = 32;
  const padT = 56;
  const padB = 64;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;

  const xMax = 7000;
  const yMax = 60;

  const xPos = (v: number) => padL + (v / xMax) * chartW;
  const yPos = (v: number) => padT + chartH - (v / yMax) * chartH;
  const rPos = (v: number) => 5 + Math.sqrt(v) / 6;

  // Hand-tuned label offsets keyed by the joined-id of each point. Each entry
  // places the label in a free direction relative to its bubble.
  const offsets: Record<
    string,
    { dx: number; dy: number; anchor: "start" | "middle" | "end" }
  > = {
    "AI PR agency":                                    { dx: 14,  dy: 4,   anchor: "start"  },
    "AI visibility":                                   { dx: 0,   dy: -16, anchor: "middle" },
    "crisis communications agency|crisis PR firm":     { dx: 14,  dy: 18,  anchor: "start"  },
    "GEO optimization":                                { dx: 14,  dy: 4,   anchor: "start"  },
    "tech PR agency":                                  { dx: 14,  dy: 4,   anchor: "start"  },
    "top PR firms|best PR agency":                     { dx: 14,  dy: 4,   anchor: "start"  },
    "generative engine optimization":                  { dx: 0,   dy: 26,  anchor: "middle" },
    "PR firm":                                         { dx: 0,   dy: -18, anchor: "middle" },
    "PR agency":                                       { dx: -14, dy: 4,   anchor: "end"    },
  };

  const clusters = Array.from(new Set(keywords.map((k) => k.cluster)));

  return (
    <figure className="w-full">
      <figcaption className="mb-5 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          Monthly search volume × CPC · DataForSEO · April 2026
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          GEO keywords carry agency-selection-level CPCs — buyers are ready to pay.
        </h3>
      </figcaption>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3 text-[11px] font-mono text-muted-foreground">
        {clusters.map((c) => (
          <span key={c} className="inline-flex items-center gap-1.5">
            <span
              aria-hidden
              className="inline-block w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: CLUSTER_COLOR[c] }}
            />
            {c}
          </span>
        ))}
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Bubble plot of PR/comms keywords by search volume and CPC. GEO cluster highlighted; coincident keywords combined into single bubbles."
      >
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

        {[0, 15, 30, 45, 60].map((t) => (
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
              ${t}
            </text>
            <line
              x1={padL}
              y1={yPos(t)}
              x2={padL + chartW}
              y2={yPos(t)}
              stroke={palette.border}
              strokeWidth={0.5}
              strokeDasharray="2 4"
              opacity={0.5}
            />
          </g>
        ))}

        {[0, 2000, 4000, 6000].map((t) => (
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

        <text
          x={padL + chartW / 2}
          y={H - 12}
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize={10}
          fill={palette.foreground}
          className="uppercase tracking-widest"
        >
          Monthly search volume
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
          CPC (USD)
        </text>

        {/* Bubbles */}
        {points.map((p) => {
          const cx = xPos(Math.min(p.volume, xMax));
          const cy = yPos(Math.min(p.cpc, yMax));
          const r = rPos(p.volume);
          const color = CLUSTER_COLOR[p.cluster];
          const isGeo = p.cluster === "GEO/AI";
          const o =
            offsets[p.id] ?? { dx: 14, dy: 4, anchor: "start" as const };
          return (
            <g key={p.id}>
              <circle
                cx={cx}
                cy={cy}
                r={r}
                fill={color}
                opacity={isGeo ? 0.85 : 0.55}
                stroke={isGeo ? color : "none"}
                strokeWidth={isGeo ? 1 : 0}
              />
              <text
                x={cx + o.dx}
                y={cy + o.dy}
                textAnchor={o.anchor}
                fontFamily="var(--font-sans)"
                fontSize={11}
                fontWeight={isGeo ? 500 : 400}
                fill={isGeo ? color : palette.foreground}
              >
                {p.label}
              </text>
            </g>
          );
        })}
      </svg>

      <p className="mt-4 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: DataForSEO. US market (code 2840). Bubble size = monthly volume. Coincident keywords combined. April 2026.
      </p>
    </figure>
  );
}
