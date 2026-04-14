// Shadow logo mark SVG
function ShadowLogo() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" rx="3" fill="currentColor" className="text-foreground" />
      <path d="M4 5h8M4 8h5M4 11h7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const docCards = [
  {
    title: "Inworld AI: Series B Announcement — Press Release",
    date: "Apr 12, 2026",
    category: "PR",
  },
  {
    title: "GEO Audit: AI Visibility Report Q1",
    date: "Apr 10, 2026",
    category: "GEO",
  },
  {
    title: "Inworld AI: Statement of Work",
    date: "Apr 8, 2026",
    category: "Internal",
  },
  {
    title: "Media List — AI Gaming Beat",
    date: "Apr 6, 2026",
    category: "Media",
  },
];

const categories = ["All", "Internal", "GEO", "Media", "PR"];

export function DashboardMockup() {
  return (
    <div
      className="w-full max-w-2xl mx-auto rounded-xl border border-border bg-card shadow-xl overflow-hidden"
      style={{ transform: "perspective(1200px) rotateY(-2deg)" }}
    >
      <div className="flex h-[460px]">
        {/* Sidebar */}
        <div className="w-40 border-r border-border bg-muted flex flex-col shrink-0">
          {/* Header */}
          <div className="px-3 py-3 border-b border-border flex items-center gap-2">
            <ShadowLogo />
            <span className="text-xs font-semibold text-foreground font-heading">Shadow</span>
          </div>

          {/* Chat section */}
          <div className="px-2 pt-3 pb-1">
            <span className="text-[9px] font-semibold uppercase tracking-widest text-muted-foreground px-2">
              Chat
            </span>
          </div>
          <div className="flex flex-col gap-0.5 px-2">
            {/* New Chat */}
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-muted-foreground">
              <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
              </svg>
              <span className="text-[11px]">Chat</span>
            </div>
            {/* History */}
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-muted-foreground">
              <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-[11px]">History</span>
            </div>
          </div>

          {/* Workspace section */}
          <div className="px-2 pt-4 pb-1">
            <span className="text-[9px] font-semibold uppercase tracking-widest text-muted-foreground px-2">
              Workspace
            </span>
          </div>
          <div className="flex flex-col gap-0.5 px-2">
            {/* Dashboard */}
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-muted-foreground">
              <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 9a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1v-5zm9-9a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zm0 9a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1h-4a1 1 0 01-1-1v-5z" />
              </svg>
              <span className="text-[11px]">Dashboard</span>
            </div>
            {/* Clients — active */}
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-accent text-foreground">
              <svg className="h-4 w-4 shrink-0 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-[11px] font-medium">Clients</span>
            </div>
            {/* Analytics */}
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-muted-foreground">
              <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="text-[11px]">Analytics</span>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Page header */}
          <div className="px-5 pt-5 pb-3">
            <p className="text-[9px] font-semibold uppercase tracking-widest text-muted-foreground font-heading mb-3">
              Work Products
            </p>

            {/* Drafts/Completed toggle */}
            <div className="flex items-center gap-3 mb-3">
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
            <div className="flex items-center gap-1.5 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-3 py-1 rounded-full text-xs ${
                    cat === "GEO" || cat === "Media" || cat === "Internal"
                      ? "bg-foreground text-background font-medium"
                      : "text-muted-foreground border border-border"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Document cards grid */}
          <div
            className="flex-1 px-5 pb-4 overflow-hidden"
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: "1rem", alignContent: "start" }}
          >
            {docCards.map((doc) => (
              <div
                key={doc.title}
                className="rounded-xl border border-border bg-muted"
                style={{ aspectRatio: "17/22" }}
              >
                {/* Inner content area */}
                <div className="mx-2.5 mt-2.5 rounded-lg border border-border bg-card" style={{ aspectRatio: "14/16" }}>
                  <p className="text-[9px] font-medium line-clamp-4 font-heading px-2.5 pt-2.5 text-foreground leading-snug">
                    {doc.title}
                  </p>
                  {/* Gradient fade */}
                  <div
                    className="h-6"
                    style={{
                      background: "linear-gradient(to bottom, transparent, var(--color-card))",
                    }}
                  />
                </div>
                {/* Footer */}
                <div className="px-3 py-2">
                  <p className="text-[9px] text-muted-foreground">{doc.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Floating button */}
          <div className="px-5 pb-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-3.5 py-1.5 text-[10px] font-medium shadow-md">
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              New chat for Inworld AI
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
