"use client";

import { useEffect, useRef, useState } from "react";

type Event = {
  agent: string;
  agentLabel: string;
  color: string;
  label: string;
  shadowFrac: number; // 0..1 along the shadow track
  todayFrac: number; // 0..1 along the today track
  outcome?: boolean;
};

const EVENTS: Event[] = [
  {
    agent: "RSC",
    agentLabel: "Research",
    color: "#7489A3",
    label: "Indexed Halo filings, launch cadence, Series C messaging",
    shadowFrac: 0.012,
    todayFrac: 0.005,
  },
  {
    agent: "RSC",
    agentLabel: "Research",
    color: "#7489A3",
    label: "Pulled space + satellite awards calendar · 187 events surfaced",
    shadowFrac: 0.05,
    todayFrac: 0.05,
  },
  {
    agent: "ANL",
    agentLabel: "Analysis",
    color: "#977BA1",
    label: "Scored each event against 'broadband for the unconnected' angle",
    shadowFrac: 0.12,
    todayFrac: 0.14,
  },
  {
    agent: "ANL",
    agentLabel: "Analysis",
    color: "#977BA1",
    label: "Past 5 yrs of category winners analyzed for selection patterns",
    shadowFrac: 0.2,
    todayFrac: 0.24,
  },
  {
    agent: "STR",
    agentLabel: "Strategy",
    color: "#88A374",
    label: "Eligibility pruning · 187 → 38 viable opportunities",
    shadowFrac: 0.29,
    todayFrac: 0.33,
  },
  {
    agent: "STR",
    agentLabel: "Strategy",
    color: "#88A374",
    label: "Ranked · prestige × fit × deadline × narrative momentum",
    shadowFrac: 0.38,
    todayFrac: 0.43,
  },
  {
    agent: "PLN",
    agentLabel: "Plan",
    color: "#7489A3",
    label: "Top 12 shortlisted · deadline calendar · submission specs mapped",
    shadowFrac: 0.48,
    todayFrac: 0.52,
  },
  {
    agent: "WRT",
    agentLabel: "Writer",
    color: "#B27A53",
    label:
      "Drafting top 4 — Fast Company WCI, Edison, SATELLITE 2026, GLOMO",
    shadowFrac: 0.59,
    todayFrac: 0.62,
  },
  {
    agent: "WRT",
    agentLabel: "Writer",
    color: "#B27A53",
    label: "Each draft tailored to the award's historical winner profile",
    shadowFrac: 0.71,
    todayFrac: 0.76,
  },
  {
    agent: "WRT",
    agentLabel: "Writer",
    color: "#B27A53",
    label: "Cross-referenced Halo customer wins, deployment metrics, ESG",
    shadowFrac: 0.83,
    todayFrac: 0.88,
  },
  {
    agent: "STR",
    agentLabel: "Strategy",
    color: "#88A374",
    label: "Open-questions list compiled — CFO sign-off, customer quotes",
    shadowFrac: 0.95,
    todayFrac: 0.95,
  },
  {
    agent: "OUT",
    agentLabel: "Sent",
    color: "#88A374",
    label: "Awards & events package · staged for Maya's review",
    shadowFrac: 1.0,
    todayFrac: 1.0,
    outcome: true,
  },
];

// Total cycle in ms. Shadow finishes at SHADOW_DONE_T fraction; Today finishes
// at TODAY_DONE_T. After that, both rows hold "Done" until reset.
const CYCLE_MS = 28000;
const SHADOW_DONE_T = 0.0714; // ~2s real-time
const TODAY_DONE_T = 0.92;

const SHADOW_TRACK_WIDTH_PCT = 22;

function findLatestFired(t: number, frac: (ev: Event) => number): Event | null {
  let latest: Event | null = null;
  for (const ev of EVENTS) {
    if (frac(ev) <= t) latest = ev;
    else break;
  }
  return latest;
}

const TODAY_TOTAL_DAYS = 21;
const SHADOW_TOTAL_SEC = 634; // 10:34

function formatDays(t: number): string {
  if (t >= 1) return `${TODAY_TOTAL_DAYS}d`;
  const totalMin = Math.max(0, t) * TODAY_TOTAL_DAYS * 24 * 60;
  const days = Math.floor(totalMin / (24 * 60));
  const hours = Math.floor((totalMin % (24 * 60)) / 60);
  const minutes = Math.floor(totalMin % 60);
  if (days > 0) return `${days}d ${hours}h`;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
}

// Interpolate the Today number from a neutral muted brown toward an alert
// red. Stays neutral for the first day, then ramps to full alert red over
// the next day so the warning lands hard, and holds red for the remainder.
function interpolateRedness(t: number): string {
  const start: [number, number, number] = [104, 86, 70]; // muted brown-grey
  const end: [number, number, number] = [165, 48, 48]; // dimmed alert red (#A53030)
  const threshold = 1 / TODAY_TOTAL_DAYS; // first day stays neutral
  const rampWindow = 1 / TODAY_TOTAL_DAYS; // ramp completes within ~1 day
  if (t <= threshold) return `rgb(${start[0]}, ${start[1]}, ${start[2]})`;
  const remapped = Math.min(1, (t - threshold) / rampWindow);
  const r = Math.round(start[0] + (end[0] - start[0]) * remapped);
  const g = Math.round(start[1] + (end[1] - start[1]) * remapped);
  const b = Math.round(start[2] + (end[2] - start[2]) * remapped);
  return `rgb(${r}, ${g}, ${b})`;
}

function formatMinSec(t: number): string {
  const sec = Math.min(SHADOW_TOTAL_SEC, t * SHADOW_TOTAL_SEC);
  const minutes = sec / 60;
  // Show one decimal so the counter ticks 0.1m → 10.5m through the cycle.
  const display = minutes < 0.1 ? "0.1" : minutes.toFixed(1);
  return `${display}m`;
}

export function TimelineCompressionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  // Scroll-driven reveal progress (0..1) — drives the staggered fade-ins
  // exactly like ProgramExecutionSection. The internal timeline animation
  // (cycle progress) is tracked separately as `cycleProgress`.
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cycleProgress, setCycleProgress] = useState(0);

  // Mirror ProgramExecutionSection: sticky-pinned inner, scroll over the
  // section maps to 0→1 fade progress.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setScrollProgress(1);
      return;
    }

    const compute = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrolled = -rect.top;
      const total = el.offsetHeight - vh;
      if (total <= 0) {
        setScrollProgress(1);
        return;
      }
      const raw = scrolled / (total * 0.75);
      const next = Math.max(0, Math.min(1, raw));
      setScrollProgress((prev) => (Math.abs(prev - next) < 0.005 ? prev : next));
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  // Once the agent panel has faded in (progress >= 0.54), start the
  // timeline cycle animation.
  const animationActive = scrollProgress >= 0.54;
  useEffect(() => {
    if (!animationActive) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let raf = 0;
    if (prefersReduced) {
      raf = requestAnimationFrame(() => setCycleProgress(1));
      return () => cancelAnimationFrame(raf);
    }
    let start: number | null = null;
    const tick = (t: number) => {
      if (start == null) start = t;
      const e = (t - start) % CYCLE_MS;
      setCycleProgress(e / CYCLE_MS);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [animationActive]);

  const fadeStyle = (start: number, duration = 0.14) => {
    const t = Math.max(0, Math.min(1, (scrollProgress - start) / duration));
    return {
      opacity: t,
      transform: `translateY(${(1 - t) * 14}px)`,
    };
  };

  const progress = cycleProgress;
  const shadowT = Math.min(1, progress / SHADOW_DONE_T);
  const todayT = Math.min(1, progress / TODAY_DONE_T);
  const shadowDone = progress >= SHADOW_DONE_T;
  const todayDone = progress >= TODAY_DONE_T;

  const latestShadow = findLatestFired(shadowT, (ev) => ev.shadowFrac);
  const latestToday = findLatestFired(todayT, (ev) => ev.todayFrac);
  const shadowFiredCount = EVENTS.reduce(
    (n, ev) => (ev.shadowFrac <= shadowT ? n + 1 : n),
    0,
  );
  const todayFiredCount = EVENTS.reduce(
    (n, ev) => (ev.todayFrac <= todayT ? n + 1 : n),
    0,
  );

  return (
    <section
      ref={sectionRef}
      className="relative px-4 md:px-8 pt-0 pb-0"
      style={{ height: "115vh" }}
    >
      <div className="sticky top-4">
        <div className="w-full rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-10 md:py-14 flex flex-col items-center text-center">
            {/* Header — centered */}
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70 flex items-center gap-3 justify-center">
              <span className="inline-block w-7 h-px bg-muted-foreground/30" />
              At the speed of agents
            </div>
            <h2
              className="mt-8 font-serif font-normal text-[clamp(2rem,4.4vw,3.75rem)] leading-[1.05] tracking-tight text-foreground max-w-[920px]"
              style={fadeStyle(0)}
            >
              The new frontier of comms.
            </h2>
            <p
              className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-md"
              style={fadeStyle(0.18)}
            >
              Three weeks of work, run in ten minutes. Your team spends the
              time gained on what only humans can do — strategy, judgment, the
              calls that move the needle.
            </p>

            {/* Timelines stacked on the left, agent workstream on the right */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-10 w-full max-w-[920px] text-left items-center">
              <div className="flex flex-col gap-4" style={fadeStyle(0.36)}>
                <div className="flex flex-col gap-2">
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
                    widthPct={90}
                    t={shadowT}
                    done={shadowDone}
                    eventFrac={(ev) => ev.shadowFrac}
                    latest={latestShadow}
                  />
                </div>
                <div className="flex flex-col gap-2">
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
                    widthPct={90}
                    t={todayT}
                    done={todayDone}
                    eventFrac={(ev) => ev.todayFrac}
                    latest={latestToday}
                  />
                </div>
              </div>
              <div style={fadeStyle(0.54)}>
                <ShadowAgentPanel t={shadowT} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineRow({
  variant,
  tag,
  name,
  stat,
  staffing,
  tickLabels,
  widthPct,
  t,
  done,
  eventFrac,
  latest,
  rightPanel,
}: {
  variant: "today" | "shadow";
  tag: string;
  name: string;
  stat: string;
  staffing: string;
  tickLabels: { pos: number; label: string }[];
  widthPct: number;
  t: number;
  done: boolean;
  eventFrac: (ev: Event) => number;
  latest: Event | null;
  rightPanel?: React.ReactNode;
}) {
  const accent = variant === "shadow";

  // Shadow rides the lamplight; Today is bone-on-warm-ink, no chroma.
  const ridgeColor = accent ? "#B27A53" : "#5a4a3a";

  const trackHeight = 110;
  const ridgeHeight = 80; // SVG area height
  const tickBottom = 7;
  const labelBottom = 0;
  const markerH = 60;
  const markerW = 2;
  const statBottom = 34;
  const statSize = 12;
  const tickFont = 10;

  // Stock-chart silhouette — sharp angular ticks across the width, with a
  // taller spike at each event position so events still register as peaks.
  // Straight-line segments (no curves) give the jagged, market-tape feel.
  // The baseline of the curve sits a few units above the SVG bottom so
  // there's a small lift between the line and the row's hairline baseline.
  const pathD = (() => {
    const W = 1000;
    const H = 100;
    const baselineLift = 6; // gap between curve baseline and SVG bottom
    const baseY = H - baselineLift;
    const samples = 90;
    const eventPositions = EVENTS.filter((ev) => !ev.outcome).map((ev, i) => ({
      pos: eventFrac(ev),
      amp: 50 + ((i * 17) % 38), // 50..88
    }));

    // Deterministic per-row hash so Shadow and Today have distinct silhouettes.
    const seed = accent ? 7 : 23;
    const rand = (i: number) => {
      const x = Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453;
      return x - Math.floor(x);
    };

    const pts: { x: number; y: number }[] = [];
    for (let i = 0; i <= samples; i++) {
      const xFrac = i / samples;
      const x = xFrac * W;
      // Ambient zigzag — small jittery height per tick
      let h = 8 + rand(i) * 14; // 8..22

      // Sharp spike right at event positions
      for (const ep of eventPositions) {
        const dist = Math.abs(xFrac - ep.pos);
        const sampleStep = 1 / samples;
        if (dist < sampleStep * 0.6) {
          h = Math.max(h, ep.amp);
        } else if (dist < sampleStep * 1.4) {
          h = Math.max(h, ep.amp * 0.55);
        }
      }

      // Taper to baseline at the very edges so it closes cleanly
      const edgeTaper = Math.min(xFrac * 4, (1 - xFrac) * 4, 1);
      h *= edgeTaper;

      pts.push({ x, y: baseY - Math.max(0, Math.min(95, h)) });
    }

    // Open polyline — no closing baseline segment, no Z. Just the ridge.
    let d = `M ${pts[0].x},${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      d += ` L ${pts[i].x},${pts[i].y}`;
    }
    return d;
  })();

  // Two-column readout: staffing on the left, live time/days on the right.
  // Each value sits over a tiny mono label.
  const staffingColorClass = accent ? "text-[#B27A53] font-normal" : "text-[#7489A3] font-normal";
  const staffingLabelColorClass = accent ? "text-[#B27A53]/70" : "text-[#7489A3]/70";
  const timeColorClass = "text-foreground/35 font-normal";
  const timeLabelColorClass = "text-foreground/30";
  const trackInner = (
    <div className="flex items-baseline gap-6">
      <div className="flex flex-col items-start">
        <span
          className={"font-serif tabular-nums tracking-tight leading-none " + staffingColorClass}
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          {staffing}
        </span>
        <span
          className={"mt-1.5 font-mono text-[10px] tracking-[0.04em] " + staffingLabelColorClass}
        >
          staffing
        </span>
      </div>
      <div className="flex flex-col items-start">
        <span
          className={"font-serif tabular-nums tracking-tight leading-none " + timeColorClass}
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          {stat}
        </span>
        <span
          className={"mt-1.5 font-mono text-[10px] tracking-[0.04em] " + timeLabelColorClass}
        >
          time
        </span>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-1">
      <span
        className={
          "font-mono text-[11px] tracking-[0.04em] w-fit " +
          (accent ? "text-[#B27A53]" : "text-foreground/55")
        }
      >
        {tag}
      </span>

      {rightPanel ? (
        <div className="max-w-[600px] flex flex-col items-center gap-5">
          <div className="w-[480px] max-w-full">{trackInner}</div>
          <div className="w-full">{rightPanel}</div>
        </div>
      ) : (
        trackInner
      )}
    </div>
  );
}

function CaptionBlock({
  variant,
  count,
  total,
  done,
}: {
  variant: "today" | "shadow";
  count: number;
  total: number;
  done: boolean;
}) {
  const accent = variant === "shadow";
  const progress = count / total;
  return (
    <div className="inline-flex items-center gap-2 w-fit font-mono text-[10px] uppercase tracking-[0.18em] tabular-nums whitespace-nowrap">
      <span className={accent ? "text-[#B27A53]" : "text-muted-foreground/80"}>
        {accent
          ? done
            ? "Done"
            : "Live"
          : done
            ? "Complete"
            : "Working"}
      </span>
      <span
        aria-hidden="true"
        className="inline-block w-px h-3"
        style={{
          backgroundColor: accent
            ? "rgba(178, 122, 83, 0.25)"
            : "rgba(43, 32, 22, 0.18)",
        }}
      />
      <span
        className={accent ? "text-foreground" : ""}
        style={accent ? undefined : { color: interpolateRedness(progress) }}
      >
        {count}{" "}
        <span className="text-muted-foreground/70">of {total} tasks</span>
      </span>
    </div>
  );
}

/**
 * ShadowAgentPanel — two-card stack matching ProgramAgentDemo's structure:
 * dark prompt card on top (rounded-t, flat bottom) + bordered light card
 * underneath (flat top, rounded-b) holding the live agent workstream that
 * mirrors the bars firing on the Shadow timeline.
 */
function ShadowAgentPanel({ t }: { t: number }) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const fired: Event[] = [];
  for (const ev of EVENTS) {
    if (ev.shadowFrac <= t) fired.push(ev);
  }
  const isWorking = fired.length > 0 && fired.length < EVENTS.length;
  const isDone = fired.length === EVENTS.length;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [fired.length]);

  return (
    <div className="flex flex-col h-[420px]">
      {/* Prompt card — dark, rounded top only, flat bottom */}
      <div className="shrink-0 p-5 md:p-6 rounded-t-2xl bg-[#0a0908] text-[#fbf7ee]">
        <div className="text-[14px] leading-relaxed text-[#fbf7ee]">
          Halo&apos;s Q3 awards window closes in three weeks — pull the
          calendar, score against our positioning, draft the top picks, and
          stage submissions for Maya&apos;s Friday review.
        </div>
        <div className="mt-4 pt-3 border-t border-[#fbf7ee]/15 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.18em]">
          <span className="text-[#fbf7ee]/55">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#88A374] mr-2 align-middle" />
            Halo Networks · Awards &amp; events · April 2026
          </span>
          <span className="text-[#fbf7ee] flex items-center gap-1.5">
            <span aria-hidden="true">↵</span> Run
          </span>
        </div>
      </div>

      {/* Stream card — bordered on sides + bottom, flat top */}
      <div
        ref={scrollRef}
        className="scroll-faint relative flex-1 overflow-y-auto border-x border-b border-border/65 rounded-b-2xl bg-card p-5 md:p-6 shadow-[inset_0_10px_14px_-10px_rgba(0,0,0,0.18)]"
      >
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em]">
          <span
            className={`inline-block w-1.5 h-1.5 rounded-full bg-[#88A374] ${
              isWorking ? "animate-pulse" : ""
            }`}
          />
          <span className="text-muted-foreground">
            {isDone ? "Done" : isWorking ? "Working" : "Idle"}
          </span>
        </div>

        <ol className="mt-5 relative">
          {fired.length > 1 && (
            <span
              aria-hidden="true"
              className="absolute left-[5px] top-2 bottom-3 w-px bg-border"
            />
          )}
          {fired.map((ev, i) => {
            const isLast = i === fired.length - 1;
            const isActive = isLast && isWorking;
            return (
              <li
                key={`${ev.agent}-${i}-${ev.label}`}
                className="craft-rise relative pb-5 pl-6"
              >
                <span
                  className={`absolute left-[2px] top-[7px] w-1.5 h-1.5 rounded-full ${
                    isActive
                      ? "animate-[pulse_1.2s_ease-in-out_infinite]"
                      : ""
                  }`}
                  style={{ backgroundColor: ev.color }}
                />
                <div
                  className={`font-mono text-[11px] uppercase tracking-[0.14em] leading-snug mb-1 ${
                    isActive
                      ? "animate-[pulse_1.4s_ease-in-out_infinite]"
                      : ""
                  }`}
                  style={{ color: ev.color }}
                >
                  {ev.agentLabel}
                </div>
                <div className="text-[13px] italic text-muted-foreground leading-snug">
                  {ev.label}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
