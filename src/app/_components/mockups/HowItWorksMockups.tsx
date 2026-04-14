// Step 1: Client Space — shows Work Products section with doc cards
export function ClientSpaceMockup() {
  const docs = [
    { title: "Series B Press Release", date: "Apr 12" },
    { title: "Master Messaging Doc", date: "Apr 8" },
    { title: "GEO Audit Report", date: "Apr 6" },
  ];

  const categories = ["All", "Internal", "GEO", "Media"];

  return (
    <div className="w-full rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      <div className="px-4 pt-4 pb-3">
        {/* Section header */}
        <p className="text-[9px] font-semibold uppercase tracking-widest text-muted-foreground font-heading mb-2.5">
          Work Products
        </p>

        {/* Drafts/Completed toggle */}
        <div className="flex items-center gap-2 mb-2.5">
          <div className="flex items-center rounded-full border border-border p-0.5 h-7">
            <button className="rounded-full px-3 h-6 text-xs bg-foreground text-background font-medium">
              Drafts
            </button>
            <button className="rounded-full px-3 h-6 text-xs text-muted-foreground">
              Completed
            </button>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex items-center gap-1.5 mb-3">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-2.5 py-0.5 rounded-full text-[10px] ${
                cat === "GEO"
                  ? "bg-foreground text-background font-medium"
                  : "text-muted-foreground border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Doc cards grid */}
        <div className="grid grid-cols-3 gap-2">
          {docs.map((doc) => (
            <div
              key={doc.title}
              className="rounded-xl border border-border bg-muted"
              style={{ aspectRatio: "17/22" }}
            >
              <div className="mx-2 mt-2 rounded-lg border border-border bg-card h-[60%]">
                <p className="text-[8px] font-medium font-heading px-2 pt-2 text-foreground leading-snug line-clamp-3">
                  {doc.title}
                </p>
              </div>
              <div className="px-2 pt-1.5">
                <p className="text-[8px] text-muted-foreground">{doc.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Step 2: SOP Execution — mini chat with user message and AI creating a document
export function SOPExecutionMockup() {
  return (
    <div className="w-full rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-border flex items-center gap-2">
        <svg className="h-3.5 w-3.5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span className="text-xs font-semibold text-foreground">Inworld AI</span>
        <span className="text-[10px] text-muted-foreground">· AI Chat</span>
      </div>

      <div className="px-3 py-3 flex flex-col gap-2.5">
        {/* User message */}
        <div className="flex justify-end">
          <div className="max-w-[80%] bg-muted rounded-lg rounded-tr-sm px-2.5 py-2 border border-border">
            <p className="text-[10px] text-foreground leading-snug">
              Write a press release for the Series B. $40M led by a16z.
            </p>
          </div>
        </div>

        {/* AI response */}
        <div className="flex gap-1.5">
          <div className="w-5 h-5 rounded-md bg-foreground flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-[9px] font-bold text-background">S</span>
          </div>
          <div className="flex-1 bg-muted rounded-lg rounded-tl-sm px-2.5 py-2 border border-border">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-[9px] font-mono bg-card text-muted-foreground px-1.5 py-0.5 rounded border border-border">
                SOP: Press Release
              </span>
            </div>
            <p className="text-[10px] text-foreground leading-snug font-semibold mb-1">
              FOR IMMEDIATE RELEASE
            </p>
            <p className="text-[10px] text-muted-foreground leading-snug line-clamp-2">
              Inworld AI Raises $40M Series B to Advance AI Character Technology for Games...
            </p>
          </div>
        </div>

        {/* Document card being created */}
        <div className="flex justify-end">
          <div className="w-24 rounded-xl border border-border bg-muted" style={{ aspectRatio: "17/22" }}>
            <div className="mx-1.5 mt-1.5 rounded-lg border border-border bg-card h-[60%]">
              <p className="text-[7px] font-medium font-heading px-1.5 pt-1.5 text-foreground leading-snug">
                Series B Press Release
              </p>
            </div>
            <div className="px-1.5 pt-1">
              <p className="text-[7px] text-muted-foreground">Apr 12, 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="px-3 py-2.5 border-t border-border">
        <div className="rounded-lg border border-border bg-muted px-2.5 py-1.5">
          <span className="text-[10px] text-muted-foreground">Ask Shadow anything...</span>
        </div>
      </div>
    </div>
  );
}

// Step 3: Autonomous Agent — mini org dashboard activity grid
export function AutonomousAgentMockup() {
  // Activity grid: 8 columns x 4 rows, some cells filled with layer colors
  const layers = [
    { name: "Ops", color: "#BF8440" },
    { name: "Intel", color: "#7489A3" },
    { name: "Services", color: "#977BA1" },
    { name: "Reporting", color: "#453F3D" },
  ];

  // Each layer row has 8 cells, some active (with opacity encoded in fill)
  const activityData = [
    [1, 0, 1, 1, 0, 1, 0, 1], // Ops
    [0, 1, 1, 0, 1, 0, 1, 1], // Intel
    [1, 1, 0, 0, 1, 1, 0, 0], // Services
    [0, 0, 1, 0, 0, 1, 1, 0], // Reporting
  ];

  return (
    <div className="w-full rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-border flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <span className="text-xs font-semibold text-foreground">Activity</span>
        <span className="ml-auto text-[10px] text-muted-foreground font-mono">Today</span>
      </div>

      <div className="px-4 py-4">
        {/* Layer cards 2x2 */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {layers.map((layer) => (
            <div key={layer.name} className="rounded-xl px-3 py-2.5 bg-muted border border-border">
              <p className="text-[11px] font-semibold" style={{ color: layer.color }}>
                {layer.name}
              </p>
              <p className="text-[10px] text-muted-foreground mt-0.5">4 tasks · 2h</p>
            </div>
          ))}
        </div>

        {/* Activity grid */}
        <div className="space-y-1">
          {layers.map((layer, rowIdx) => (
            <div key={layer.name} className="flex items-center gap-2">
              <div className="flex gap-1">
                {activityData[rowIdx].map((active, colIdx) => (
                  <div
                    key={colIdx}
                    className="rounded-[3px]"
                    style={{
                      width: 18,
                      height: 18,
                      backgroundColor: active ? layer.color : "var(--color-muted)",
                    }}
                  />
                ))}
              </div>
              <span className="text-[9px] text-muted-foreground">{layer.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
