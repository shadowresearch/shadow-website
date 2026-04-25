/**
 * CampaignOutputs
 *
 * Plain list of the streams a positioning campaign runs through. Same minimal
 * row style as NarrativeSignals and AgentFeed: a small brand-colored dot, the
 * stream name, and nothing more.
 */

const STREAMS: { name: string; color: string }[] = [
  { name: "Media relations", color: "#977BA1" }, // Dusk
  { name: "Digital and social visibility", color: "#7489A3" }, // UV
  { name: "Awards and events", color: "#B27A53" }, // Lamplight
  { name: "Social owned content", color: "#BF8440" }, // Amber
  { name: "News alerts", color: "#8F7F6B" }, // Shade
];

export function CampaignOutputs() {
  return (
    <div className="w-full max-w-[420px]">
      <div className="flex items-baseline justify-between mb-4">
        <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground/80">
          Program streams
        </span>
        <span className="text-[10px] font-mono tracking-wider text-muted-foreground/55">
          {STREAMS.length} running
        </span>
      </div>

      <div className="flex flex-col">
        {STREAMS.map((s, i) => (
          <div
            key={s.name}
            className="flex items-center gap-3 py-2.5 craft-rise"
            style={{ animationDelay: `${0.1 + i * 0.08}s` }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ backgroundColor: s.color }}
            />
            <span className="text-[11px] font-mono text-muted-foreground shrink-0 tabular-nums">
              0{i + 1}
            </span>
            <span className="text-sm text-foreground/90">{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
