"use client";

import { useEffect, useRef, useState } from "react";

/**
 * ScrollRevealList
 *
 * Renders an ordered list whose items expand downwards (height + fade) one by
 * one as the user scrolls through the surrounding section. Driven by scroll
 * position so the reveal feels tied to the user's gesture, not a one-shot
 * IntersectionObserver fire.
 */
export function ScrollRevealList({ items }: { items: string[] }) {
  const containerRef = useRef<HTMLOListElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setVisibleCount(items.length);
      return;
    }

    const compute = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Start when the top of the list is just below the viewport,
      // finish by the time it reaches the upper-mid area.
      const startY = vh * 1.0;
      const endY = vh * 0.55;
      const raw = (startY - rect.top) / (startY - endY);
      const progress = Math.max(0, Math.min(1, raw));
      const next = Math.round(progress * items.length);
      setVisibleCount((prev) => (prev === next ? prev : next));
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [items.length]);

  return (
    <ol ref={containerRef} className="flex flex-col">
      {items.map((item, i) => {
        const visible = i < visibleCount;
        return (
          <li
            key={item}
            className="overflow-hidden transition-[max-height,opacity,transform] duration-700 ease-out"
            style={{
              maxHeight: visible ? "120px" : "0px",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(-8px)",
            }}
          >
            <div className="flex items-center gap-4 border-b border-border py-4">
              <span className="font-mono text-xs text-muted-foreground/70 tracking-widest uppercase shrink-0 w-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm text-foreground">{item}</span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
