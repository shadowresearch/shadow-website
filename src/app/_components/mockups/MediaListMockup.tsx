const journalists = [
  {
    name: "Cade Metz",
    outlet: "New York Times",
    beat: "AI & ML",
    articlesPerMonth: "14",
    activity: 90,
  },
  {
    name: "Kylie Robison",
    outlet: "The Verge",
    beat: "Tech Industry",
    articlesPerMonth: "18",
    activity: 75,
  },
  {
    name: "Will Knight",
    outlet: "Wired",
    beat: "AI & Robotics",
    articlesPerMonth: "10",
    activity: 60,
  },
  {
    name: "Devin Coldewey",
    outlet: "TechCrunch",
    beat: "Startups & AI",
    articlesPerMonth: "22",
    activity: 95,
  },
];

export function MediaListMockup() {
  return (
    <div
      className="w-full max-w-2xl mx-auto rounded-xl border border-border bg-card shadow-xl overflow-hidden"
      style={{ transform: "perspective(1200px) rotateY(-2deg)" }}
    >
      {/* Toolbar */}
      <div className="px-4 py-3 border-b border-border flex items-center gap-2">
        <div className="flex gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        </div>
        <span className="text-xs font-semibold text-foreground ml-2">
          Media List — AI & ML Beat
        </span>
        <span className="ml-auto text-[10px] font-mono bg-primary/10 text-primary px-1.5 py-0.5 rounded">
          4 journalists
        </span>
      </div>

      {/* Table header */}
      <div className="grid grid-cols-[1fr_auto_auto_auto_auto] gap-x-4 px-4 py-2 bg-muted/30 border-b border-border">
        {["Journalist", "Outlet", "Beat", "Art./mo", "Activity"].map((h) => (
          <span key={h} className="text-[10px] font-mono text-muted-foreground uppercase tracking-wide">
            {h}
          </span>
        ))}
      </div>

      {/* Rows */}
      <div className="flex flex-col divide-y divide-border">
        {journalists.map((j) => (
          <div
            key={j.name}
            className="grid grid-cols-[1fr_auto_auto_auto_auto] gap-x-4 items-center px-4 py-3 hover:bg-muted/20 transition-colors"
          >
            {/* Name + avatar */}
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                <span className="text-[9px] font-semibold text-primary">
                  {j.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <span className="text-xs font-medium text-foreground truncate">
                {j.name}
              </span>
            </div>

            <span className="text-[11px] text-muted-foreground whitespace-nowrap">
              {j.outlet}
            </span>

            <span className="text-[10px] font-mono bg-muted px-1.5 py-0.5 rounded text-muted-foreground whitespace-nowrap">
              {j.beat}
            </span>

            <span className="text-[11px] text-foreground font-medium text-center">
              {j.articlesPerMonth}
            </span>

            {/* Activity bar */}
            <div className="flex items-center gap-1.5 w-20">
              <div className="h-1.5 flex-1 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${j.activity}%` }}
                />
              </div>
              <span className="text-[9px] text-muted-foreground shrink-0">
                {j.activity}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
