"use client";

import { useEffect, useRef } from "react";

/**
 * ExpandingCallout
 *
 * Wraps the dark Narrative Intelligence callout on the home page. When the
 * element is below the fold it renders as an inset rounded card; as the user
 * scrolls through it, the card expands to full-bleed edge-to-edge.
 *
 * Geometry rules:
 * - The initial horizontal inset is sized off the viewport so the card is
 *   "match or slightly wider" than the rest of the page content (which uses
 *   max-w-[1425px] with px-8 md:px-16 gutters). On wide viewports the card
 *   inset shrinks in absolute px but grows relative to the viewport edges.
 * - Top and bottom margins are asymmetric and independent of horizontal
 *   inset so the card sits at the correct vertical position without being
 *   squeezed horizontally.
 *
 * Animation rules:
 * - Scroll sets a target progress value; a per-frame lerp smooths the
 *   rendered progress so fast scroll flicks don't snap.
 * - Progress is measured from a stable outer wrapper (display: flow-root)
 *   so the animated inner element's own margin doesn't create a feedback
 *   loop. Reset-on-scroll-up produces the same rendered state as a fresh
 *   page load.
 */
export function ExpandingCallout({ children }: { children: React.ReactNode }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outerEl = outerRef.current;
    const innerEl = innerRef.current;
    if (!outerEl || !innerEl) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      innerEl.style.margin = "0px";
      innerEl.style.borderRadius = "0px";
      return;
    }

    const getSizes = () => {
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;
      const vw = window.innerWidth;
      // Horizontal inset: match the page's content rail with a small bleed so
      // the card lands match-or-slightly-wider than other content.
      const horizontal = isDesktop
        ? Math.max(16, (vw - 1360) / 2 - 40)
        : 16;
      return {
        maxHorizontal: horizontal,
        maxTop: isDesktop ? 200 : 48,
        maxBottom: isDesktop ? 120 : 40,
        maxRadius: isDesktop ? 28 : 20,
      };
    };

    let targetProgress = 0;
    let currentProgress = 0;
    let rafId = 0;
    let running = false;

    const computeTarget = () => {
      const rect = outerEl.getBoundingClientRect();
      const vh = window.innerHeight;
      const { maxTop } = getSizes();
      // Hold progress at 0 until the inner card's visible top reaches the
      // viewport bottom. Without this offset the animation partly plays
      // before the user sees the card, so it never looks fully inset.
      const startY = vh - maxTop;
      const endY = vh * 0.3;
      const raw = (startY - rect.top) / (startY - endY);
      targetProgress = Math.max(0, Math.min(1, raw));
    };

    const applyProgress = (p: number) => {
      const { maxHorizontal, maxTop, maxBottom, maxRadius } = getSizes();
      const h = maxHorizontal * (1 - p);
      const t = maxTop * (1 - p);
      const b = maxBottom * (1 - p);
      const r = maxRadius * (1 - p);

      innerEl.style.marginTop = `${t}px`;
      innerEl.style.marginBottom = `${b}px`;
      innerEl.style.marginLeft = `${h}px`;
      innerEl.style.marginRight = `${h}px`;
      innerEl.style.borderRadius = `${r}px`;
    };

    const EASE = 0.1;
    const EPSILON = 0.0008;

    const tick = () => {
      const delta = targetProgress - currentProgress;
      if (Math.abs(delta) < EPSILON) {
        currentProgress = targetProgress;
        applyProgress(currentProgress);
        running = false;
        return;
      }
      currentProgress += delta * EASE;
      applyProgress(currentProgress);
      rafId = requestAnimationFrame(tick);
    };

    const start = () => {
      if (!running) {
        running = true;
        rafId = requestAnimationFrame(tick);
      }
    };

    const onScroll = () => {
      computeTarget();
      start();
    };

    // Initial sync — snap to current scroll state without animation.
    computeTarget();
    currentProgress = targetProgress;
    applyProgress(currentProgress);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={outerRef} style={{ display: "flow-root" }}>
      <div
        ref={innerRef}
        className="bg-foreground text-background relative overflow-hidden"
        style={{
          marginTop: "200px",
          marginBottom: "120px",
          marginLeft: "max(16px, calc((100vw - 1360px) / 2 - 40px))",
          marginRight: "max(16px, calc((100vw - 1360px) / 2 - 40px))",
          borderRadius: "28px",
        }}
      >
        {children}
      </div>
    </div>
  );
}
