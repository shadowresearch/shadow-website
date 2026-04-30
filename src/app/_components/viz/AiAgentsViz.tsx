"use client";

import { AgentFeed } from "../AgentFeed";

/**
 * AiAgentsViz
 *
 * Wraps the AgentFeed in a card frame so it reads as a self-contained
 * "live activity" panel — matching the look of the other tab visualizations
 * in the homepage tabbed section.
 */
export function AiAgentsViz() {
  return (
    <div className="relative rounded-2xl bg-card overflow-hidden ring-1 ring-foreground/10 shadow-[0_18px_48px_-20px_rgba(0,0,0,0.25)]">
      {/* Title bar */}
      <div className="flex items-center justify-between gap-2 px-5 py-3 border-b border-border/60">
        <div className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-[#88A374] animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            Agent activity · live
          </span>
        </div>
        <span className="text-[10px] font-mono text-muted-foreground/60">
          6 agents · 4 clients
        </span>
      </div>

      <div className="px-5 py-6">
        <AgentFeed />
      </div>
    </div>
  );
}
