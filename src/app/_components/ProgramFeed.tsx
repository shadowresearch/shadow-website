"use client";

import { useEffect, useRef, useState } from "react";

type Track = {
  name: string;
  color: string;
};

const TRACKS: Track[] = [
  { name: "Messaging", color: "#977BA1" },
  { name: "Media", color: "#7489A3" },
  { name: "Digital", color: "#CC764F" },
  { name: "Social", color: "#88A374" },
  { name: "E&A", color: "#B27A53" },
];

const WORK_BATCHES: string[][][] = [
  [
    ["Master messaging", "Narrative refresh", "Positioning brief"],
    ["Press release", "Tier-1 pitch", "Coverage report"],
    ["SEO brief", "GEO page", "ChatGPT audit"],
    ["LinkedIn POV", "X thread", "Founder post"],
    ["Award entry", "Speaker abstract", "Panel pitch"],
  ],
  [
    ["Spokesperson POV", "Message house"],
    ["Trade pitch", "Op-ed draft", "Briefing doc"],
    ["Content calendar", "Perplexity audit", "Citation gaps"],
    ["Founder long-form", "LinkedIn series"],
    ["Cannes submission", "Webby entry"],
  ],
  [
    ["Audit findings", "Strategy memo", "Reframe deck"],
    ["Analyst pitch", "Embargo plan"],
    ["Case study", "AI brand mentions", "Prompt set"],
    ["Owned posts", "Series posts", "Community reply"],
    ["Year-in-review", "Awards shortlist", "Keynote outline"],
  ],
];

// Container mount fade.
const T_MOUNT = 450;

// Per-cycle item timing.
const T_ITEM_TRACK_STAGGER = 360;
const T_ITEM_INDEX_STAGGER = 130;
const T_ITEM_ANIM = 580;
const T_CHECK_PHASE_GAP = 350;
const T_CHECK_TRACK_STAGGER = 200;
const T_CHECK_INDEX_STAGGER = 90;
const T_CHECK_ANIM = 480;
const T_HOLD = 2100;
const T_ITEM_OUT_TRACK_STAGGER = 100;
const T_ITEM_OUT_INDEX_STAGGER = 55;
const T_ITEM_OUT_ANIM = 500;
const T_BATCH_GAP = 300;

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const easeOvershoot = (t: number) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

const computeItemsInEnd = (batch: string[][]) => {
  let end = 0;
  batch.forEach((trackItems, trackIdx) => {
    trackItems.forEach((_item, itemIdx) => {
      const itemEnd =
        trackIdx * T_ITEM_TRACK_STAGGER +
        itemIdx * T_ITEM_INDEX_STAGGER +
        T_ITEM_ANIM;
      if (itemEnd > end) end = itemEnd;
    });
  });
  return end;
};

const computeChecksEnd = (batch: string[][], itemsInEnd: number) => {
  const checkPhaseStart = itemsInEnd + T_CHECK_PHASE_GAP;
  let end = checkPhaseStart;
  batch.forEach((trackItems, trackIdx) => {
    trackItems.forEach((_item, itemIdx) => {
      const checkEnd =
        checkPhaseStart +
        trackIdx * T_CHECK_TRACK_STAGGER +
        itemIdx * T_CHECK_INDEX_STAGGER +
        T_CHECK_ANIM;
      if (checkEnd > end) end = checkEnd;
    });
  });
  return end;
};

const computeCycleEnd = (batch: string[][]) => {
  const itemsInEnd = computeItemsInEnd(batch);
  const checksEnd = computeChecksEnd(batch, itemsInEnd);
  const holdEnd = checksEnd + T_HOLD;
  let outEnd = 0;
  batch.forEach((trackItems, trackIdx) => {
    trackItems.forEach((_item, itemIdx) => {
      const outStart =
        trackIdx * T_ITEM_OUT_TRACK_STAGGER +
        itemIdx * T_ITEM_OUT_INDEX_STAGGER;
      if (outStart + T_ITEM_OUT_ANIM > outEnd)
        outEnd = outStart + T_ITEM_OUT_ANIM;
    });
  });
  return holdEnd + outEnd + T_BATCH_GAP;
};

/**
 * ProgramFeed
 *
 * Five program-track columns laid out in the same minimal, type-driven style
 * as AgentFeed: small colored dot + mono uppercase track label, then a list
 * of work items in 11px rows. Items wave into each track left-to-right, a
 * green check pops on each in a second wave, then items fade out and the
 * next batch rolls in. Bottom fade mask matches AgentFeed.
 */
export function ProgramFeed() {
  const [, setTickCount] = useState(0);
  const stateRef = useRef({
    mountStart: null as number | null,
    batchIdx: 0,
    cycleStart: null as number | null,
    elapsed: 0,
  });

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      const batch = WORK_BATCHES[0];
      const itemsInEnd = computeItemsInEnd(batch);
      stateRef.current.elapsed = computeChecksEnd(batch, itemsInEnd);
      setTickCount((n) => n + 1);
      return;
    }

    let rafId = 0;

    const tick = (t: number) => {
      const s = stateRef.current;
      if (s.mountStart == null) s.mountStart = t;
      if (s.cycleStart == null) s.cycleStart = t;

      const cycleEnd = computeCycleEnd(WORK_BATCHES[s.batchIdx]);
      const e = t - s.cycleStart;
      if (e >= cycleEnd) {
        s.batchIdx = (s.batchIdx + 1) % WORK_BATCHES.length;
        s.cycleStart = t;
        s.elapsed = 0;
      } else {
        s.elapsed = e;
      }

      setTickCount((n) => (n + 1) % 1000000);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const s = stateRef.current;
  const batch = WORK_BATCHES[s.batchIdx];
  const mountElapsed =
    s.mountStart == null ? 0 : performance.now() - s.mountStart;
  const mountP = easeOut(clamp01(mountElapsed / T_MOUNT));

  const itemsInEnd = computeItemsInEnd(batch);
  const checksPhaseStart = itemsInEnd + T_CHECK_PHASE_GAP;
  const checksEnd = computeChecksEnd(batch, itemsInEnd);
  const outPhaseStart = checksEnd + T_HOLD;

  return (
    <div
      className="relative"
      style={{
        opacity: mountP,
        transform: `translateY(${(1 - mountP) * 8}px)`,
      }}
      aria-hidden="true"
    >
      <div className="grid grid-cols-5 gap-4">
        {TRACKS.map((track, trackIdx) => {
          const trackItems = batch[trackIdx];
          return (
            <div key={track.name} className="flex flex-col">
              <div className="flex items-center gap-2">
                <span
                  className="inline-block rounded-full shrink-0"
                  style={{
                    width: 6,
                    height: 6,
                    backgroundColor: track.color,
                  }}
                />
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  {track.name}
                </span>
              </div>
              <ul className="mt-3 flex flex-col gap-1.5">
                {trackItems.map((item, itemIdx) => {
                  const itemStart =
                    trackIdx * T_ITEM_TRACK_STAGGER +
                    itemIdx * T_ITEM_INDEX_STAGGER;
                  const inRaw = clamp01(
                    (s.elapsed - itemStart) / T_ITEM_ANIM
                  );
                  const inP = easeOut(inRaw);

                  const checkStart =
                    checksPhaseStart +
                    trackIdx * T_CHECK_TRACK_STAGGER +
                    itemIdx * T_CHECK_INDEX_STAGGER;
                  const checkRaw = clamp01(
                    (s.elapsed - checkStart) / T_CHECK_ANIM
                  );
                  const checkScale = easeOvershoot(checkRaw);

                  const outStart =
                    outPhaseStart +
                    trackIdx * T_ITEM_OUT_TRACK_STAGGER +
                    itemIdx * T_ITEM_OUT_INDEX_STAGGER;
                  const outRaw = clamp01(
                    (s.elapsed - outStart) / T_ITEM_OUT_ANIM
                  );
                  const outP = easeOut(outRaw);

                  const opacity = inP * (1 - outP);
                  const translateY = (1 - inP) * 8 - outP * 14;
                  const checkOpacity =
                    easeOut(clamp01(checkRaw * 1.4)) * (1 - outP);

                  return (
                    <li
                      key={`${s.batchIdx}-${trackIdx}-${itemIdx}`}
                      className="flex items-center gap-1.5"
                      style={{
                        opacity,
                        transform: `translateY(${translateY}px)`,
                      }}
                    >
                      <span className="text-[11px] text-foreground/80 truncate">
                        {item}
                      </span>
                      <span
                        className="inline-block rounded-full shrink-0 ml-auto animate-dot-pulse"
                        style={{
                          width: 5,
                          height: 5,
                          backgroundColor: "#88A374",
                          opacity: checkOpacity,
                          transform: `scale(${checkScale})`,
                        }}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
