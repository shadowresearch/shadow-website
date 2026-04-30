"use client";

import { useState } from "react";
import Link from "next/link";
import { NarrativeIntelligenceViz } from "./viz/NarrativeIntelligenceViz";
import { ProgramExecutionViz } from "./viz/ProgramExecutionViz";
import { AiAgentsViz } from "./viz/AiAgentsViz";

interface Tab {
  id: "narrative-intelligence" | "program-execution" | "ai-agents";
  label: string;
  href: string;
  linkLabel: string;
  heading: string;
  body: React.ReactNode;
}

const TABS: Tab[] = [
  {
    id: "narrative-intelligence",
    label: "Narrative Intelligence",
    href: "/narrative-intelligence",
    linkLabel: "Explore Narrative Intelligence",
    heading: "The narrative graph.",
    body: (
      <>
        <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
          Most platforms give you one view: media coverage, or search data, or
          social mentions, or AI citations. Shadow blends all four into a
          single, real-time narrative graph.
        </p>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-md">
          The graph tracks how stories move across channels, which positions
          are forming, where competitors are gaining ground, and which
          narratives are about to break. It doesn&apos;t just monitor what
          happened. It shows what&apos;s available to own.
        </p>
      </>
    ),
  },
  {
    id: "program-execution",
    label: "Program Execution",
    href: "/program-execution",
    linkLabel: "Explore Program Execution",
    heading: "From position to program.",
    body: (
      <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
        Narrative intelligence is only valuable if you can act on it.
        Shadow&apos;s program execution layer is where positioning becomes
        work: proposals drafted from live competitive data, media relations
        grounded in who&apos;s actually covering the conversation, SEO and GEO
        content written to the positions the graph identified, and thought
        leadership that speaks to what audiences are searching for right now.
      </p>
    ),
  },
  {
    id: "ai-agents",
    label: "AI Agents",
    href: "/ai-agents",
    linkLabel: "Explore AI Agents",
    heading: "Your always-on narrative team.",
    body: (
      <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
        Shadow gives you a team of specialised AI agents, each with a defined
        role in the narrative craft. Some read from the world. Others write
        to it. Together, they form a persistent narrative team that operates
        as an extension of your team.
      </p>
    ),
  },
];

export function HomeTabbedSection() {
  const [activeId, setActiveId] = useState<Tab["id"]>(TABS[0].id);
  const tab = TABS.find((t) => t.id === activeId) ?? TABS[0];

  return (
    <section className="px-4 md:px-8 py-12 md:py-20">
      <div className="max-w-[1530px] mx-auto rounded-3xl bg-background/60 overflow-hidden">
        <div className="relative max-w-[1425px] mx-auto px-6 md:px-10 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: tabs + copy */}
            <div className="lg:sticky lg:top-28">
              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
                {TABS.map((t) => {
                  const isActive = t.id === activeId;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setActiveId(t.id)}
                      className={`text-sm pb-1 border-b transition-colors ${
                        isActive
                          ? "text-foreground border-foreground"
                          : "text-muted-foreground border-transparent hover:text-foreground"
                      }`}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>

              <h2 className="font-serif text-[clamp(2rem,3.6vw,3.25rem)] text-foreground leading-[1.08] tracking-tight">
                {tab.heading}
              </h2>
              {tab.body}
              <Link
                href={tab.href}
                className="mt-8 inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors border-b border-foreground/30 hover:border-foreground/60 pb-1 w-fit"
              >
                {tab.linkLabel}
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* Right: visualization */}
            <div>
              {tab.id === "narrative-intelligence" && (
                <NarrativeIntelligenceViz />
              )}
              {tab.id === "program-execution" && <ProgramExecutionViz />}
              {tab.id === "ai-agents" && <AiAgentsViz />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
