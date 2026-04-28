"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * FadeIn
 *
 * Scroll-driven fade. Opacity is mapped continuously to scroll position:
 * starts fading when the element's top crosses the bottom band of the viewport,
 * fully opaque by the time the top reaches the upper-mid area. Tied to the
 * user's gesture rather than a one-shot IntersectionObserver fire.
 */
export function FadeIn({
  children,
  className,
  start = 0.95,
  end = 0.4,
}: {
  children: ReactNode;
  className?: string;
  /** Viewport fraction (0–1, measured from top) where fade-in begins. */
  start?: number;
  /** Viewport fraction where fade-in completes. */
  end?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setProgress(1);
      return;
    }

    const compute = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const startY = vh * start;
      const endY = vh * end;
      const raw = (startY - rect.top) / (startY - endY);
      const next = Math.max(0, Math.min(1, raw));
      setProgress((prev) => (Math.abs(prev - next) < 0.01 ? prev : next));
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [start, end]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: progress,
        transform: `translateY(${(1 - progress) * 12}px)`,
      }}
    >
      {children}
    </div>
  );
}
