/**
 * Activity Dashboard mockup — matches the actual /dashboard page structure:
 * Layer cards (2x2) + summary card on top, activity grid below with row labels on right.
 */

const LAYERS = [
  { label: "Ops", color: "#BF8440", count: 8, time: "1h 42m" },
  { label: "Intel", color: "#7489A3", count: 4, time: "38m" },
  { label: "Services", color: "#977BA1", count: 14, time: "2h 22m" },
  { label: "Reporting", color: "#453F3D", count: 3, time: "15m" },
];

const GRID_ROWS = [
  { label: "Ops", color: "#BF8440", isSub: false },
  { label: "Intel", color: "#7489A3", isSub: false },
  { label: "Services", color: "#977BA1", isSub: false },
  { label: "GEO", color: "#977BA1", isSub: true },
  { label: "Positioning", color: "#977BA1", isSub: true },
  { label: "Reporting", color: "#453F3D", isSub: false },
];

// Pre-defined activity pattern — which cells are lit and at what intensity
// Each row maps to GRID_ROWS, values are 0 (empty), 1 (light), 2 (medium), 3 (full)
const ACTIVITY_DATA = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,3,1,0,3,0,0,1,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,2,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,0,2,0,3,0,0,2,0,1,3,0,0,1,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,2,0,0,1,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
];

const CELL = 14;
const GAP = 3;
const COLS = 55;

// Selected cell — Services row (index 2), column 44 (intensity 3)
const SELECTED_ROW = 2;
const SELECTED_COL = 44;

const SELECTED_ACTIVITIES = [
  { title: "Whop Positioning Document", mode: "Collaborative", client: "Whop", time: "18m" },
  { title: "White Space Analysis: Whop's Creator Economy", mode: "Collaborative", client: "Whop", time: "24m" },
  { title: "2026 Awards & Events Target List", mode: "Autonomous", client: "Whop", time: "12m" },
];

function opacityHex(intensity: number): string {
  if (intensity >= 3) return "FF";
  if (intensity >= 2) return "99";
  if (intensity >= 1) return "40";
  return "00";
}

// Generate month labels
function getMonthLabels(): { index: number; label: string }[] {
  const labels: { index: number; label: string }[] = [];
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let lastMonth = -1;
  for (let i = 0; i < COLS; i++) {
    const d = new Date(today.getTime() - (COLS - 1 - i) * 86400000);
    if (d.getMonth() !== lastMonth) {
      labels.push({ index: i, label: d.toLocaleDateString("en-US", { month: "short" }) });
      lastMonth = d.getMonth();
    }
  }
  return labels;
}

export function DashboardMockup() {
  const monthLabels = getMonthLabels();

  return (
    <div className="overflow-hidden text-left rounded-lg border border-border shadow-md">
      {/* Top — layer cards + summary */}
      <div className="px-6 pt-6 pb-0">
        <div className="flex gap-3 items-stretch">
          {/* 2x2 layer grid */}
          <div className="grid grid-cols-2 gap-2 shrink-0 w-1/2">
            {LAYERS.map((layer) => (
              <div key={layer.label} className="rounded-xl px-4 py-3 bg-muted/30">
                <span className="text-sm font-heading font-semibold" style={{ color: layer.color }}>
                  {layer.label}
                </span>
                <div className="flex items-baseline gap-2 mt-1.5">
                  <span className="text-xs text-foreground tabular-nums">
                    {layer.count} documents
                  </span>
                  <span className="text-xs text-muted-foreground tabular-nums">
                    {layer.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* Summary card */}
          <div className="flex-1 min-w-0 rounded-xl bg-muted/30 p-4 flex items-center">
            <p className="text-xs text-muted-foreground leading-relaxed">
              Work activity is distributed across{" "}
              <span className="font-medium" style={{ color: "#BF8440" }}>Ops</span> (28%),{" "}
              <span className="font-medium" style={{ color: "#7489A3" }}>Intel</span> (14%),{" "}
              <span className="font-medium" style={{ color: "#977BA1" }}>Services</span> (48%) and{" "}
              <span className="font-medium" style={{ color: "#453F3D" }}>Reporting</span> (10%).{" "}
              <span className="font-medium text-foreground">24%</span> of work is run solely by agents and{" "}
              <span className="font-medium text-foreground">76%</span> is collaborative.{" "}
              <span className="font-medium" style={{ color: "#977BA1" }}>Services</span> has the most time invested.{" "}
              <span className="font-medium" style={{ color: "#7489A3" }}>Intel</span> is the most efficient layer.
            </p>
          </div>
        </div>
      </div>

      {/* Activity grid */}
      <div className="px-6 pt-6 pb-6">
        <div className="rounded-xl bg-muted/30 p-5">
          {/* Month labels */}
          <div className="flex mb-1" style={{ marginRight: 90 + 8 }}>
            <div className="flex flex-1" style={{ gap: GAP }}>
              {Array.from({ length: COLS }).map((_, i) => {
                const ml = monthLabels.find((m) => m.index === i);
                return (
                  <div key={i} className="flex-1 min-w-0">
                    {ml && (
                      <span className="text-xs text-muted-foreground whitespace-nowrap" style={{ fontSize: 9 }}>{ml.label}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Rows */}
          {GRID_ROWS.map((row, rowIdx) => (
            <div
              key={`${row.label}-${row.isSub}`}
              className="flex items-center"
              style={{ height: CELL + GAP }}
            >
              {/* Cells */}
              <div className="flex flex-1" style={{ gap: GAP }}>
                {ACTIVITY_DATA[rowIdx].map((intensity, colIdx) => {
                  const isSelected = rowIdx === SELECTED_ROW && colIdx === SELECTED_COL;
                  return (
                    <div
                      key={colIdx}
                      className={`flex-1 min-w-0 rounded-[2px] ${intensity === 0 ? "bg-muted/30" : ""} ${isSelected ? "ring-2 ring-foreground ring-offset-1 ring-offset-card" : ""}`}
                      style={{
                        height: CELL,
                        ...(intensity > 0 ? { backgroundColor: `${row.color}${opacityHex(intensity)}` } : {}),
                      }}
                    />
                  );
                })}
              </div>

              {/* Row label on right */}
              <div className="shrink-0 truncate pl-2" style={{ width: 90 }}>
                {row.isSub ? (
                  <span className="text-muted-foreground truncate pl-2" style={{ fontSize: 9 }}>{row.label}</span>
                ) : (
                  <span className="font-medium truncate" style={{ color: row.color, fontSize: 9 }}>{row.label}</span>
                )}
              </div>
            </div>
          ))}

          {/* Expanded activities list */}
          <div className="mt-6">
            {/* Column headers */}
            <div className="grid items-center px-2 py-1 text-muted-foreground" style={{ gridTemplateColumns: "1fr 120px 90px 60px", fontSize: 9 }}>
              <span>Activity</span>
              <span>Mode</span>
              <span>Client</span>
              <span className="text-right">Time taken</span>
            </div>
            {/* Rows */}
            {SELECTED_ACTIVITIES.map((activity) => (
              <div
                key={activity.title}
                className="grid items-center px-2 py-1.5 rounded-md"
                style={{ gridTemplateColumns: "1fr 120px 90px 60px" }}
              >
                <span className="text-foreground truncate" style={{ fontSize: 10 }}>{activity.title}</span>
                <span className="text-muted-foreground" style={{ fontSize: 10 }}>{activity.mode}</span>
                <span className="text-muted-foreground truncate" style={{ fontSize: 10 }}>{activity.client}</span>
                <span className="text-muted-foreground tabular-nums text-right" style={{ fontSize: 10 }}>{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
