"use client";

import { useEffect, useRef, useState } from "react";

const FEED_ITEMS = [
  { agent: "Researcher", color: "#7489A3", action: "Scanned 847 sources across media, search, and AI", client: "Lovable", time: "now" },
  { agent: "Analyst", color: "#977BA1", action: "Landscape refreshed: 3 new contested positions", client: "Whop", time: "1m ago" },
  { agent: "Strategist", color: "#B27A53", action: "Positioning scored: compliance-first leads at 92", client: "OpenAI", time: "2m ago" },
  { agent: "Planner", color: "#BF8440", action: "Campaign drafted: 6 angles, 14 journalists, 3 channels", client: "Nova Labs", time: "4m ago" },
  { agent: "Writer", color: "#8F7F6B", action: "Tier-1 pitch ready for review", client: "Whop", time: "6m ago" },
  { agent: "Reporter", color: "#63727E", action: "Coverage report: claim strength up 18 points", client: "Lovable", time: "8m ago" },
  { agent: "Researcher", color: "#7489A3", action: "Competitor signal: new funding round detected", client: "OpenAI", time: "10m ago" },
  { agent: "Analyst", color: "#977BA1", action: "White space identified: regulatory moat", client: "Synthex AI", time: "12m ago" },
  { agent: "Strategist", color: "#B27A53", action: "Position extensibility check complete", client: "Nova Labs", time: "14m ago" },
  { agent: "Writer", color: "#8F7F6B", action: "Byline draft ready: Forbes contributor", client: "Whop", time: "16m ago" },
  { agent: "Planner", color: "#BF8440", action: "Editorial calendar synced: Q2 sequence locked", client: "Lovable", time: "18m ago" },
  { agent: "Reporter", color: "#63727E", action: "AI citation delta logged: Perplexity +3, ChatGPT +2", client: "Synthex AI", time: "20m ago" },
];

const ROW_HEIGHT = 32;
const VISIBLE = 4;
const SCROLL_DURATION = 800;
const PAUSE_DURATION = 2200;

export function AgentFeed() {
  const containerRef = useRef<HTMLDivElement>(null);
  // Start offset so the first VISIBLE items are in view (they sit at the end of the doubled list)
  const [offset, setOffset] = useState(0);
  const animating = useRef(false);

  // Reverse the items: newest arrives at top, older items push down.
  // We render: [...FEED_ITEMS (copy for wrapping)] [... FEED_ITEMS (initial view)]
  // Container is positioned so the second copy is in view initially.
  // Each tick we shift the container DOWN by one row (revealing the item above).
  const items = [...FEED_ITEMS, ...FEED_ITEMS];

  // Initial position: start showing from index FEED_ITEMS.length (second copy)
  // offset=0 means translateY = -(FEED_ITEMS.length) * ROW_HEIGHT
  const baseOffset = FEED_ITEMS.length;

  useEffect(() => {
    const tick = () => {
      if (animating.current) return;
      animating.current = true;

      setOffset((prev) => {
        const next = prev + 1;

        if (next >= FEED_ITEMS.length) {
          // We've scrolled through the entire first copy — snap back
          setTimeout(() => {
            if (containerRef.current) {
              containerRef.current.style.transition = "none";
            }
            setOffset(0);
            requestAnimationFrame(() => {
              if (containerRef.current) {
                containerRef.current.style.transition = `transform ${SCROLL_DURATION}ms cubic-bezier(0.25, 0.1, 0.25, 1)`;
              }
              animating.current = false;
            });
          }, SCROLL_DURATION);
          return next;
        }

        setTimeout(() => {
          animating.current = false;
        }, SCROLL_DURATION);
        return next;
      });
    };

    const interval = setInterval(tick, SCROLL_DURATION + PAUSE_DURATION);
    return () => clearInterval(interval);
  }, []);

  // translateY: moving positively (down) reveals items above
  // Start at -(baseOffset - offset) * ROW_HEIGHT
  const translateY = -(baseOffset - offset) * ROW_HEIGHT;

  return (
    <div>
      <div
        className="relative overflow-hidden"
        style={{
          height: ROW_HEIGHT * VISIBLE,
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
        }}
      >
        <div
          ref={containerRef}
          className="flex flex-col"
          style={{
            transform: `translateY(${translateY}px)`,
            transition: `transform ${SCROLL_DURATION}ms cubic-bezier(0.25, 0.1, 0.25, 1)`,
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 shrink-0"
              style={{ height: ROW_HEIGHT }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-[11px] font-mono text-muted-foreground shrink-0">
                {item.agent}
              </span>
              <span className="text-[11px] text-foreground/80 truncate">
                {item.action}
              </span>
              <span className="text-[11px] text-muted-foreground ml-auto hidden sm:block shrink-0">
                {item.client}
              </span>
              <span className="text-[10px] text-muted-foreground/60 tabular-nums shrink-0">
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
