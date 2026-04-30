"use client";

/**
 * TimelineMetrics
 *
 * Standalone wrapper around the dual TimelineRow comparison ("With Shadow"
 * vs "Before Shadow") from TimelineCompressionSection. Auto-runs the cycle
 * once the panel scrolls into view.
 */

import { useEffect, useRef, useState } from "react";
import {
  CYCLE_MS,
  EVENTS,
  findLatestFired,
  formatDays,
  formatMinSec,
  SHADOW_DONE_T,
  TimelineRow,
  TODAY_DONE_T,
} from "./TimelineCompressionSection";

export function TimelineMetrics() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setProgress(1);
      return;
    }

    let started = false;
    let raf = 0;
    let startTs: number | null = null;

    const tick = (ts: number) => {
      if (startTs == null) startTs = ts;
      const e = (ts - startTs) % CYCLE_MS;
      setProgress(e / CYCLE_MS);
      raf = requestAnimationFrame(tick);
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

  const shadowT = Math.min(1, progress / SHADOW_DONE_T);
  const todayT = Math.min(1, progress / TODAY_DONE_T);
  const shadowDone = progress >= SHADOW_DONE_T;
  const todayDone = progress >= TODAY_DONE_T;

  const latestShadow = findLatestFired(shadowT, (ev) => ev.shadowFrac);
  const latestToday = findLatestFired(todayT, (ev) => ev.todayFrac);

  // Reference EVENTS so it survives any tree-shake; both TimelineRows
  // already reach into it internally for the silhouette path.
  void EVENTS;

  return (
    <div ref={wrapRef} className="flex flex-col gap-10">
      <div className="origin-top-left scale-[1.08]">
        <TimelineRow
          variant="shadow"
          tag="With Shadow"
          name="Ten minutes · before the next meeting"
          stat={formatMinSec(shadowT)}
          staffing="1"
          tickLabels={[
            { pos: 0, label: "8:30 AM" },
            { pos: 0.5, label: "8:35 AM" },
            { pos: 1, label: "8:40 AM" },
          ]}
          widthPct={100}
          t={shadowT}
          done={shadowDone}
          eventFrac={(ev) => ev.shadowFrac}
          latest={latestShadow}
        />
      </div>
      <div className="opacity-75">
        <TimelineRow
          variant="today"
          tag="Before Shadow"
          name="Three weeks · scattered across the calendar"
          stat={formatDays(todayT)}
          staffing={String(7 + Math.min(4, Math.floor(todayT * 5)))}
          tickLabels={[
            { pos: 0, label: "Apr 7" },
            { pos: 7 / 21, label: "Apr 14" },
            { pos: 14 / 21, label: "Apr 21" },
            { pos: 1, label: "Apr 28" },
          ]}
          widthPct={100}
          t={todayT}
          done={todayDone}
          eventFrac={(ev) => ev.todayFrac}
          latest={latestToday}
          metricFontSize="clamp(2.25rem, 4.4vw, 3.5rem)"
        />
      </div>
    </div>
  );
}
