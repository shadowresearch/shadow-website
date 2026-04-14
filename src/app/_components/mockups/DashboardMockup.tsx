export function DashboardMockup() {
  return (
    <div
      className="w-full max-w-2xl mx-auto rounded-xl border border-border bg-card shadow-xl overflow-hidden"
      style={{ transform: "perspective(1200px) rotateY(-2deg)" }}
    >
      <div className="flex h-[420px]">
        {/* Sidebar */}
        <div className="w-44 border-r border-border bg-muted/40 flex flex-col shrink-0">
          {/* Sidebar header */}
          <div className="px-3 py-3 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-sm bg-primary" />
              </div>
              <span className="text-xs font-semibold text-foreground font-heading">
                Shadow
              </span>
            </div>
          </div>

          {/* Clients label */}
          <div className="px-3 pt-4 pb-1">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              Clients
            </span>
          </div>

          {/* Client list */}
          {[
            { name: "Inworld AI", active: true },
            { name: "OpenAI", active: false },
            { name: "TikTok", active: false },
            { name: "Netflix", active: false },
          ].map((client) => (
            <div
              key={client.name}
              className={`mx-2 mb-0.5 px-2 py-1.5 rounded-md flex items-center gap-2 ${
                client.active
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted/60"
              }`}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                  client.active ? "bg-primary" : "bg-border"
                }`}
              />
              <span className="text-[11px] font-medium truncate">
                {client.name}
              </span>
            </div>
          ))}

          <div className="px-3 pt-4 pb-1">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              Workflows
            </span>
          </div>

          {["Media Digest", "Weekly Scan"].map((item) => (
            <div
              key={item}
              className="mx-2 mb-0.5 px-2 py-1.5 rounded-md flex items-center gap-2 text-muted-foreground"
            >
              <div className="w-1.5 h-1.5 rounded-full shrink-0 bg-border" />
              <span className="text-[11px] truncate">{item}</span>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex flex-1 min-w-0">
          {/* Chat area */}
          <div className="flex-1 flex flex-col min-w-0 border-r border-border">
            {/* Chat header */}
            <div className="px-4 py-3 border-b border-border">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-foreground">
                  Inworld AI
                </span>
                <span className="text-[10px] text-muted-foreground font-mono">
                  / AI Chat
                </span>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 px-4 py-4 flex flex-col gap-3 overflow-hidden">
              {/* User message */}
              <div className="flex justify-end">
                <div className="max-w-[75%] bg-primary/10 rounded-lg rounded-tr-sm px-3 py-2">
                  <p className="text-[11px] text-foreground leading-relaxed">
                    Draft a press release for our Series B announcement. $40M
                    led by a16z.
                  </p>
                </div>
              </div>

              {/* AI response */}
              <div className="flex gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-sm bg-primary" />
                </div>
                <div className="max-w-[80%] bg-muted/60 rounded-lg rounded-tl-sm px-3 py-2 border border-border">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="text-[10px] font-mono bg-primary/10 text-primary px-1.5 py-0.5 rounded">
                      SOP: Press Release
                    </span>
                  </div>
                  <p className="text-[11px] text-foreground leading-relaxed">
                    <span className="font-semibold">FOR IMMEDIATE RELEASE</span>
                    <br />
                    <br />
                    Inworld AI Raises $40M Series B to Advance AI Character
                    Technology
                    <br />
                    <br />
                    <span className="text-muted-foreground">
                      Round led by Andreessen Horowitz; company to accelerate
                      development of next-generation AI-powered NPCs...
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Chat input */}
            <div className="px-4 py-3 border-t border-border">
              <div className="rounded-lg border border-border bg-muted/40 px-3 py-2">
                <span className="text-[11px] text-muted-foreground">
                  Ask Shadow anything about Inworld AI...
                </span>
              </div>
            </div>
          </div>

          {/* Documents panel */}
          <div className="w-44 shrink-0 flex flex-col">
            <div className="px-3 py-3 border-b border-border">
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                Documents
              </span>
            </div>

            <div className="flex flex-col gap-1 p-2">
              {[
                { title: "Series B Press Release", tag: "Draft" },
                { title: "Master Messaging Doc", tag: "Final" },
                { title: "Media List — AI Beat", tag: "Active" },
              ].map((doc) => (
                <div
                  key={doc.title}
                  className="rounded-lg border border-border bg-muted/30 px-2.5 py-2 hover:border-primary/30 transition-colors cursor-pointer"
                >
                  <p className="text-[10px] font-medium text-foreground leading-snug mb-1">
                    {doc.title}
                  </p>
                  <span
                    className={`text-[9px] font-mono px-1 py-0.5 rounded ${
                      doc.tag === "Draft"
                        ? "bg-amber-100 text-amber-700"
                        : doc.tag === "Final"
                          ? "bg-green-100 text-green-700"
                          : "bg-primary/10 text-primary"
                    }`}
                  >
                    {doc.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
