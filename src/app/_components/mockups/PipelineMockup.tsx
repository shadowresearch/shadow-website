const columns = [
  {
    title: "New Inbound",
    color: "bg-muted text-muted-foreground",
    dot: "bg-muted-foreground",
    cards: ["Acme Corp", "HealthTech Co"],
  },
  {
    title: "Proposing",
    color: "bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400",
    dot: "bg-amber-500",
    cards: ["DataStream Inc", "Nova Labs"],
  },
  {
    title: "Onboarding",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400",
    dot: "bg-blue-500",
    cards: ["Synthex AI"],
  },
  {
    title: "Active",
    color: "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400",
    dot: "bg-green-500",
    cards: ["Inworld AI", "OpenAI", "TikTok"],
  },
];

const runningTasks = [
  {
    label: "Daily Media Digest — Inworld AI",
    time: "Next run: 6:00 AM",
  },
  {
    label: "Weekly Competitive Scan — OpenAI",
    time: "Next run: Mon 8:00 AM",
  },
];

export function PipelineMockup() {
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
          Pipeline
        </span>
      </div>

      {/* Kanban */}
      <div className="grid grid-cols-4 gap-0 border-b border-border divide-x divide-border">
        {columns.map((col) => (
          <div key={col.title} className="flex flex-col min-h-[180px]">
            {/* Column header */}
            <div className="px-3 py-2.5 border-b border-border">
              <div className="flex items-center gap-1.5">
                <div className={`w-1.5 h-1.5 rounded-full ${col.dot}`} />
                <span className="text-[10px] font-semibold text-foreground">
                  {col.title}
                </span>
                <span className="text-[9px] text-muted-foreground ml-auto">
                  {col.cards.length}
                </span>
              </div>
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-1.5 p-2 flex-1">
              {col.cards.map((card) => (
                <div
                  key={card}
                  className="rounded-lg border border-border bg-muted/30 px-2.5 py-2 hover:border-primary/30 transition-colors"
                >
                  <p className="text-[10px] font-medium text-foreground leading-tight">
                    {card}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Autonomous Agents section */}
      <div className="px-4 py-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
            Autonomous Agents
          </span>
          <span className="text-[9px] font-mono bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400 px-1.5 py-0.5 rounded">
            2 running
          </span>
        </div>

        <div className="flex flex-col gap-1.5">
          {runningTasks.map((task) => (
            <div
              key={task.label}
              className="flex items-center gap-2.5 rounded-lg border border-border bg-muted/20 px-3 py-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
              <span className="text-[11px] text-foreground flex-1 truncate">
                {task.label}
              </span>
              <span className="text-[10px] text-muted-foreground font-mono whitespace-nowrap">
                {task.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
