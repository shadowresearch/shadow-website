"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface Props {
  rows: ReactNode[];
  /** Optional className for the outer container. */
  className?: string;
  /** Max-height applied to each visible row (px). Tune to fit content. */
  rowMaxHeight?: number;
}

/**
 * ScrollRevealRowsHorizontal
 *
 * Same scroll-driven reveal as ScrollRevealList — each row expands downwards
 * (max-height + opacity + slight translateY) one by one as the user scrolls
 * the surrounding section through the viewport. Accepts pre-rendered rows so
 * it can wrap arbitrary row content.
 */
export function ScrollRevealRowsHorizontal({
  rows,
  className,
  rowMaxHeight = 200,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setVisibleCount(rows.length);
      return;
    }

    const compute = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const startY = vh * 1.0;
      const endY = vh * 0.55;
      const raw = (startY - rect.top) / (startY - endY);
      const progress = Math.max(0, Math.min(1, raw));
      const next = Math.round(progress * rows.length);
      setVisibleCount((prev) => (prev === next ? prev : next));
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [rows.length]);

  return (
    <div
      ref={containerRef}
      role="list"
      className={className ?? "flex flex-col"}
    >
      {rows.map((row, i) => {
        const visible = i < visibleCount;
        return (
          <div
            key={i}
            role="listitem"
            className="overflow-hidden transition-[max-height,opacity,transform] duration-700 ease-out"
            style={{
              maxHeight: visible ? `${rowMaxHeight}px` : "0px",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(-8px)",
            }}
          >
            {row}
          </div>
        );
      })}
    </div>
  );
}
