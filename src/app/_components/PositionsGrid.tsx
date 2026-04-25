/**
 * PositionsGrid
 *
 * A compact "commit-grid" view across four surfaces (Media, Search, Social,
 * AI). Dim cells = background signal; saturated cells mark where a candidate
 * position has taken hold. Each hot column corresponds to one of the top
 * scored positions listed underneath, rendered in that position's brand color.
 */

const LAYERS: { name: string; cells: number[] }[] = [
  {
    name: "Media",
    cells: [15, 20, 82, 25, 18, 12, 75, 10, 20, 72, 15],
  },
  {
    name: "Search",
    cells: [10, 15, 78, 22, 15, 18, 80, 8, 18, 28, 12],
  },
  {
    name: "Social",
    cells: [18, 22, 74, 15, 10, 22, 68, 12, 15, 32, 20],
  },
  {
    name: "AI",
    cells: [8, 10, 85, 18, 12, 8, 22, 5, 15, 78, 10],
  },
];

const TOP_POSITIONS = [
  {
    name: "Compliance-first AI infrastructure",
    status: "Open",
    statusColor: "#977BA1", // Dusk
    score: 92,
  },
  {
    name: "Hybrid deployment for regulated sectors",
    status: "Contested",
    statusColor: "#B27A53", // Lamplight
    score: 85,
  },
  {
    name: "Enterprise-grade developer tooling",
    status: "Emerging",
    statusColor: "#7489A3", // UV
    score: 78,
  },
];

// Each "hot" column maps to one of the top positions and uses its brand color.
const POSITION_COLUMN_COLOR: Record<number, string> = {
  2: "#977BA1", // Dusk — Position 01
  6: "#B27A53", // Lamplight — Position 02
  9: "#7489A3", // UV — Position 03
};

function cellStyle(intensity: number, colIdx: number): React.CSSProperties {
  if (intensity >= 60) {
    return {
      backgroundColor: POSITION_COLUMN_COLOR[colIdx] ?? "#977BA1",
    };
  }
  const alpha = Math.max(0.05, Math.min(0.4, (intensity / 100) * 0.9));
  return { backgroundColor: `rgba(69, 63, 61, ${alpha})` };
}

export function PositionsGrid() {
  return (
    <div className="w-full max-w-[560px]">
      {/* Layer commit grid */}
      <div className="flex flex-col gap-2.5">
        {LAYERS.map((layer, rowIdx) => (
          <div
            key={layer.name}
            className="grid grid-cols-[56px_1fr] items-center gap-4 craft-fade"
            style={{ animationDelay: `${0.1 + rowIdx * 0.08}s` }}
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground/80">
              {layer.name}
            </span>
            <div
              className="grid gap-[5px]"
              style={{
                gridTemplateColumns: `repeat(${layer.cells.length}, minmax(0, 1fr))`,
              }}
            >
              {layer.cells.map((intensity, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-[3px]"
                  style={cellStyle(intensity, i)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Top positions — AgentFeed-style rows */}
      <div className="mt-10">
        <div className="flex items-baseline justify-between mb-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground/80">
            Top positions
          </span>
          <span className="text-[10px] font-mono tracking-wider text-muted-foreground/55">
            Defensible
          </span>
        </div>

        <div className="flex flex-col">
          {TOP_POSITIONS.map((pos, i) => (
            <div
              key={pos.name}
              className="flex items-center gap-3 py-2 craft-rise"
              style={{ animationDelay: `${0.6 + i * 0.12}s` }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: pos.statusColor }}
              />
              <span className="text-[11px] font-mono text-muted-foreground shrink-0">
                0{i + 1}
              </span>
              <span className="text-[11px] text-foreground/85 truncate">
                {pos.name}
              </span>
              <span className="text-[11px] text-muted-foreground ml-auto shrink-0">
                {pos.status}
              </span>
              <span className="text-[10px] font-mono text-muted-foreground/60 tabular-nums shrink-0">
                {pos.score}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
