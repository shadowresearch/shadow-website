"use client";

import { useEffect, useRef, useState } from "react";

interface Metric {
  label: string;
  industry: string;
  /** Target numeric values to animate from 0 → target. */
  numbers: number[];
  /** How to render the animated values. */
  format: (n: number[]) => string;
}

const METRICS: Metric[] = [
  {
    label: "Capacity per head",
    industry: "5–8 clients",
    // Derived from "60–100 clients per 5-person team" / 5.
    numbers: [12, 20],
    format: ([l, h]) => `${l}–${h} clients`,
  },
  {
    label: "Billable utilization",
    // Industry benchmark for agency utilization sits ~55–65%.
    industry: "55–65%",
    // Agents work alongside humans, pushing effective utilization past 100%.
    numbers: [110, 130],
    format: ([l, h]) => `${l}–${h}%`,
  },
  {
    label: "Internal technical resource",
    // Headcount needed to run/maintain the comms tech stack.
    industry: "3–5 FTE",
    numbers: [0],
    format: () => `0 FTE`,
  },
];

const ANIM_DURATION = 1600;

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * EconomicsTable
 *
 * Three-column metric table with aligned columns. The Shadow column counts
 * up from 0 to its final value(s) when the table scrolls into view.
 */
export function EconomicsTable() {
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

    let rafId = 0;
    let triggered = false;
    let startTime: number | null = null;

    const tick = (t: number) => {
      if (startTime == null) startTime = t;
      const e = t - startTime;
      const p = clamp01(e / ANIM_DURATION);
      setProgress(easeOut(p));
      if (p < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          triggered = true;
          startTime = null;
          rafId = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={ref} className="flex flex-col">
      {METRICS.map((metric) => {
        const animated = metric.numbers.map((n) => Math.round(n * progress));
        return (
          <div
            key={metric.label}
            className="grid grid-cols-[1fr_minmax(0,7rem)_minmax(0,11rem)] items-baseline gap-4 py-5 border-b border-border"
          >
            <p className="text-sm text-foreground">{metric.label}</p>
            <p className="font-mono text-xs text-muted-foreground tracking-wide text-right tabular-nums">
              {metric.industry}
            </p>
            <p className="font-serif text-xl md:text-2xl font-medium text-foreground text-right tabular-nums">
              {metric.format(animated)}
            </p>
          </div>
        );
      })}
      <div className="mt-4 grid grid-cols-[1fr_minmax(0,7rem)_minmax(0,11rem)] gap-4 text-[10px] font-mono text-muted-foreground/70 uppercase tracking-widest">
        <span />
        <span className="text-right">Industry</span>
        <span className="text-right">With Shadow</span>
      </div>
    </div>
  );
}
