export function ClientSpaceMockup() {
  return (
    <div className="w-full rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-primary/15 flex items-center justify-center">
          <div className="w-3 h-3 rounded-sm bg-primary/60" />
        </div>
        <span className="text-sm font-semibold text-foreground">Inworld AI</span>
        <span className="ml-auto text-[10px] font-mono text-primary bg-primary/10 px-1.5 py-0.5 rounded">
          Active
        </span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 divide-x divide-border">
        {[
          { label: "Documents", value: "3" },
          { label: "Files", value: "5" },
          { label: "Chats", value: "12" },
        ].map((stat) => (
          <div key={stat.label} className="px-3 py-3 text-center">
            <div className="text-lg font-semibold text-foreground leading-none">
              {stat.value}
            </div>
            <div className="text-[10px] text-muted-foreground mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Recent item */}
      <div className="px-4 py-2 border-t border-border">
        <p className="text-[10px] text-muted-foreground">
          Last activity: Series B press release draft · 2h ago
        </p>
      </div>
    </div>
  );
}

export function SOPExecutionMockup() {
  return (
    <div className="w-full rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
        <span className="text-sm font-semibold text-foreground">
          Press Inbound SOP
        </span>
        <span className="ml-auto text-[10px] text-muted-foreground font-mono">
          Running
        </span>
      </div>

      {/* Progress bar */}
      <div className="px-4 pt-3 pb-2">
        <div className="h-1 bg-muted rounded-full overflow-hidden">
          <div className="h-full w-2/3 bg-primary rounded-full" />
        </div>
        <p className="text-[10px] text-muted-foreground mt-1">Step 2 of 3</p>
      </div>

      {/* Steps */}
      <div className="px-4 pb-3 flex flex-col gap-1.5">
        {[
          { label: "Research client", done: true },
          { label: "Draft brief", done: true },
          { label: "Review & send", done: false, active: true },
        ].map((step) => (
          <div key={step.label} className="flex items-center gap-2">
            <span className="text-[11px] w-3">
              {step.done ? "✓" : step.active ? "→" : "·"}
            </span>
            <span
              className={`text-[11px] ${
                step.done
                  ? "text-muted-foreground line-through"
                  : step.active
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AutonomousAgentMockup() {
  return (
    <div className="w-full rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border flex items-center gap-2">
        <span className="text-[10px] font-mono font-semibold bg-green-500/15 text-green-700 dark:text-green-400 px-1.5 py-0.5 rounded">
          Auto
        </span>
        <span className="text-sm font-semibold text-foreground">
          Daily Media Digest
        </span>
      </div>

      {/* Status */}
      <div className="px-4 py-3 flex items-center gap-2 border-b border-border">
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <span className="text-[11px] text-muted-foreground">
          Completed · 6:00 AM
        </span>
      </div>

      {/* Preview */}
      <div className="px-4 py-3">
        <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">
          3 stories surfaced for Inworld AI — TechCrunch covered AI NPCs in
          gaming, Wired ran a feature on character intelligence...
        </p>
      </div>
    </div>
  );
}
