export function ContentChatMockup() {
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
          Inworld AI · AI Chat
        </span>
      </div>

      <div className="flex h-[340px]">
        {/* Chat area */}
        <div className="flex-1 flex flex-col min-w-0 border-r border-border">
          <div className="flex-1 px-4 py-4 flex flex-col gap-3 overflow-hidden">
            {/* User message */}
            <div className="flex justify-end">
              <div className="max-w-[80%] bg-primary/10 rounded-lg rounded-tr-sm px-3 py-2">
                <p className="text-[11px] text-foreground leading-relaxed">
                  Write the press release for the Series B announcement. $40M led by a16z, focus on gaming and NPC use cases.
                </p>
              </div>
            </div>

            {/* AI response */}
            <div className="flex gap-2">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-sm bg-primary" />
              </div>
              <div className="flex-1 bg-muted/50 rounded-lg rounded-tl-sm px-3 py-2.5 border border-border">
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="text-[10px] font-mono bg-primary/10 text-primary px-1.5 py-0.5 rounded font-medium">
                    SOP: Press Release
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    · Inworld AI voice
                  </span>
                </div>
                <p className="text-[11px] text-foreground leading-relaxed">
                  <span className="font-bold text-[10px] tracking-wider text-muted-foreground">
                    FOR IMMEDIATE RELEASE
                  </span>
                  <br />
                  <br />
                  <span className="font-semibold">
                    Inworld AI Raises $40M Series B to Advance AI Character Technology for Games and Interactive Media
                  </span>
                  <br />
                  <br />
                  <span className="text-muted-foreground text-[10px] leading-relaxed">
                    Round led by Andreessen Horowitz; platform enables developers to create deeply believable AI-powered NPCs at scale
                    <br />
                    <br />
                    SAN FRANCISCO — Inworld AI, the leading platform for AI character technology...
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-border">
            <div className="rounded-lg border border-border bg-muted/40 px-3 py-2">
              <span className="text-[11px] text-muted-foreground">
                Continue drafting...
              </span>
            </div>
          </div>
        </div>

        {/* Document preview */}
        <div className="w-40 shrink-0 flex flex-col">
          <div className="px-3 py-3 border-b border-border">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              Preview
            </span>
          </div>
          <div className="flex-1 p-2">
            <div className="rounded-lg border border-border bg-background p-2.5 h-full">
              <div className="space-y-1.5">
                <div className="h-1 bg-muted-foreground/20 rounded w-full" />
                <div className="h-1 bg-muted-foreground/20 rounded w-4/5" />
                <div className="h-1 bg-muted-foreground/15 rounded w-full mt-2" />
                <div className="h-1 bg-muted-foreground/15 rounded w-3/4" />
                <div className="h-1 bg-muted-foreground/15 rounded w-full" />
                <div className="h-1 bg-muted-foreground/10 rounded w-5/6 mt-2" />
                <div className="h-1 bg-muted-foreground/10 rounded w-full" />
                <div className="h-1 bg-muted-foreground/10 rounded w-2/3" />
              </div>
              <div className="mt-3 flex gap-1">
                <span className="text-[9px] font-mono bg-primary/10 text-primary px-1 py-0.5 rounded">
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
