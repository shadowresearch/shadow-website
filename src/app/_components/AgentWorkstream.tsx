"use client";

/**
 * AgentWorkstream
 *
 * Standalone wrapper around ShadowAgentPanel: auto-progresses `t` from 0 → 1
 * over the configured duration so the agent feed plays on its own when the
 * panel scrolls into view, no scroll-pinning required.
 */

import { useEffect, useRef, useState } from "react";
import { EVENTS, ShadowAgentPanel } from "./TimelineCompressionSection";

const DURATION_MS = 14000;

export function AgentWorkstream() {
  const [t, setT] = useState(0);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setT(1);
      return;
    }

    let started = false;
    let raf = 0;
    let startTs = 0;

    const tick = (now: number) => {
      if (!startTs) startTs = now;
      const elapsed = now - startTs;
      const next = Math.min(1, elapsed / DURATION_MS);
      setT(next);
      if (next < 1) raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started) {
            started = true;
            raf = requestAnimationFrame(tick);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "0px 0px -20% 0px", threshold: 0 },
    );
    io.observe(el);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  // Reference EVENTS so it isn't tree-shaken in case the panel relies on it
  void EVENTS;

  return (
    <div ref={wrapRef}>
      <ShadowAgentPanel t={t} />
    </div>
  );
}
