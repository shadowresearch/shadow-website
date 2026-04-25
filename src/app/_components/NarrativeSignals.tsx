/**
 * NarrativeSignals
 *
 * A snapshot of what the narrative graph has been reading across surfaces.
 * Each row is a single signal (claim, source, surface, timestamp). Row style
 * matches the Always-On agent feed: colored surface dot, mono surface label,
 * signal text, source right-aligned, timestamp last.
 */

const SURFACE_COLORS = {
  Media: "#977BA1", // Dusk
  Search: "#7489A3", // UV
  Social: "#BF8440", // Amber
  AI: "#B27A53", // Lamplight
} as const;

type Surface = keyof typeof SURFACE_COLORS;

const SIGNALS: {
  surface: Surface;
  signal: string;
  source: string;
  time: string;
}[] = [
  { surface: "Media", signal: "Enterprise readiness amplified", source: "Bloomberg", time: "2m ago" },
  { surface: "AI", signal: "Compliance-native cited for category", source: "Perplexity", time: "8m ago" },
  { surface: "Search", signal: "Hybrid deployment · volume +23%", source: "DataForSEO", time: "14m ago" },
  { surface: "Media", signal: "API-first architecture contested", source: "Reuters", time: "22m ago" },
  { surface: "Social", signal: "Developer experience mentions up", source: "LinkedIn", time: "1h ago" },
  { surface: "AI", signal: "Competitor cited less (-12% SoV)", source: "ChatGPT", time: "2h ago" },
  { surface: "Media", signal: "Regulatory moat, new POV published", source: "WSJ", time: "3h ago" },
  { surface: "Search", signal: "Zero-trust infra · new cluster", source: "Ahrefs", time: "4h ago" },
];

export function NarrativeSignals() {
  return (
    <div className="w-full max-w-[560px]">
      {/* Header */}
      <div className="flex items-baseline justify-between mb-4">
        <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground/80">
          Recent signal
        </span>
        <span className="text-[10px] font-mono tracking-wider text-muted-foreground/55">
          4 surfaces · live
        </span>
      </div>

      {/* Signal rows */}
      <div className="flex flex-col">
        {SIGNALS.map((s, i) => (
          <div
            key={`${s.surface}-${i}`}
            className="flex items-center gap-3 py-2 craft-rise"
            style={{ animationDelay: `${0.1 + i * 0.06}s` }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ backgroundColor: SURFACE_COLORS[s.surface] }}
            />
            <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground shrink-0 w-[50px]">
              {s.surface}
            </span>
            <span className="text-[11px] text-foreground/85 truncate">
              {s.signal}
            </span>
            <span className="text-[11px] text-muted-foreground ml-auto hidden sm:block shrink-0">
              {s.source}
            </span>
            <span className="text-[10px] font-mono text-muted-foreground/60 tabular-nums shrink-0">
              {s.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
