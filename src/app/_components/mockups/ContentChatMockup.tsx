export function ContentChatMockup() {
  return (
    <div
      className="w-full max-w-2xl mx-auto rounded-xl border border-border bg-card shadow-xl overflow-hidden"
      style={{ transform: "perspective(1200px) rotateY(-2deg)" }}
    >
      {/* Chat header */}
      <div className="px-4 py-3 border-b border-border flex items-center gap-2">
        <div className="w-5 h-5 rounded-md bg-foreground flex items-center justify-center shrink-0">
          <span className="text-[9px] font-bold text-background">S</span>
        </div>
        <span className="text-xs font-semibold text-foreground">Inworld AI</span>
        <span className="text-[10px] text-muted-foreground">· AI Chat</span>
      </div>

      <div className="flex h-[360px]">
        {/* Chat area */}
        <div className="flex-1 flex flex-col min-w-0 border-r border-border">
          <div className="flex-1 px-4 py-4 flex flex-col gap-3 overflow-hidden">
            {/* User message */}
            <div className="flex justify-end">
              <div className="max-w-[80%] bg-muted rounded-lg rounded-tr-sm px-3 py-2 border border-border">
                <p className="text-xs text-foreground leading-snug">
                  Write the press release for the Series B. $40M led by a16z, focus on gaming and NPC use cases.
                </p>
              </div>
            </div>

            {/* AI response */}
            <div className="flex gap-2">
              <div className="w-5 h-5 rounded-md bg-foreground flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-[9px] font-bold text-background">S</span>
              </div>
              <div className="flex-1 bg-muted rounded-lg rounded-tl-sm border border-border overflow-hidden">
                {/* SOP banner */}
                <div className="px-3 py-2 border-b border-border flex items-center gap-2">
                  <span className="text-[10px] font-mono bg-card text-muted-foreground px-1.5 py-0.5 rounded border border-border">
                    SOP: Press Release
                  </span>
                  <span className="text-[10px] text-muted-foreground">· Inworld AI voice</span>
                </div>

                <div className="px-3 py-2.5">
                  <p className="text-[10px] font-bold tracking-wider text-muted-foreground mb-1.5">
                    FOR IMMEDIATE RELEASE
                  </p>
                  <p className="text-[11px] font-semibold text-foreground leading-snug mb-2">
                    Inworld AI Raises $40M Series B to Advance AI Character Technology for Games
                  </p>
                  <p className="text-[10px] text-muted-foreground leading-relaxed line-clamp-3">
                    Round led by Andreessen Horowitz; platform enables developers to create deeply believable AI-powered NPCs at scale.
                    SAN FRANCISCO — Inworld AI, the leading platform for AI character technology...
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-border">
            <div className="rounded-lg border border-border bg-muted px-3 py-2">
              <span className="text-xs text-muted-foreground">Continue drafting...</span>
            </div>
          </div>
        </div>

        {/* Document card preview panel */}
        <div className="w-40 shrink-0 flex flex-col bg-muted">
          <div className="px-3 py-2.5 border-b border-border">
            <span className="text-[9px] font-semibold uppercase tracking-widest text-muted-foreground">
              Created
            </span>
          </div>
          <div className="flex-1 p-3 flex flex-col gap-2">
            {/* Document card matching product: aspect-[17/22] rounded-xl border bg-muted */}
            <div
              className="rounded-xl border border-border bg-card w-full"
              style={{ aspectRatio: "17/22" }}
            >
              {/* Inner content area */}
              <div className="mx-2 mt-2 rounded-lg border border-border bg-background" style={{ height: "65%" }}>
                <p className="text-[8px] font-medium font-heading px-2 pt-2 text-foreground leading-snug line-clamp-3">
                  Series B Press Release — Inworld AI
                </p>
                {/* Gradient fade */}
                <div
                  className="h-4 mt-auto"
                  style={{
                    background: "linear-gradient(to bottom, transparent, var(--color-background))",
                  }}
                />
              </div>
              {/* Footer */}
              <div className="px-2.5 py-1.5">
                <p className="text-[8px] text-muted-foreground">Apr 12, 2026</p>
                <span className="text-[7px] font-mono bg-muted text-muted-foreground px-1 py-0.5 rounded border border-border">
                  Draft
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
