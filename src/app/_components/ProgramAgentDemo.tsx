"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const PROMPT =
  "Erin Walsh (CEO, Northwind) just emailed — Series C announcement in 6 weeks, looking for earned media support. Draft a first-rev positioning angle for Mike's review.";

type Row = { label: string; tag: string; color: string };
type StatBlock = { value: string; label: string };
type Step =
  | { kind: "thinking"; text: string; phase: string }
  | { kind: "data"; title: ReactNode; details?: ReactNode[] }
  | { kind: "rows"; title: ReactNode; rows: Row[]; coda?: string }
  | {
      kind: "report";
      eyebrow: string;
      title: string;
      lead: string;
      stats: StatBlock[];
      findingsEyebrow: string;
      findings: ReactNode[];
      source: string;
      workflow: { label: string; current?: boolean }[];
    };

function TypedText({
  text,
  speed = 14,
  onDone,
}: {
  text: string;
  speed?: number;
  onDone?: () => void;
}) {
  const [shown, setShown] = useState("");
  useEffect(() => {
    let i = 0;
    let cancelled = false;
    let timer: number | undefined;
    const tick = () => {
      if (cancelled) return;
      i++;
      setShown(text.slice(0, i));
      if (i < text.length) {
        timer = window.setTimeout(tick, speed + Math.random() * speed);
      } else {
        onDone?.();
      }
    };
    timer = window.setTimeout(tick, 80);
    return () => {
      cancelled = true;
      if (timer) window.clearTimeout(timer);
    };
  }, [text, speed, onDone]);
  const done = shown.length === text.length;
  return (
    <>
      {shown}
      <span
        aria-hidden="true"
        className={`inline-block w-[1px] h-[0.95em] -mb-[0.08em] ml-[1px] align-baseline bg-current ${
          done ? "opacity-0" : "animate-pulse"
        }`}
      />
    </>
  );
}

const STEPS: Step[] = [
  {
    kind: "thinking",
    text: "Pulling everything public on Northwind: prior announcements, leadership history, customer case studies, Erin's posts, podcast appearances. Building a primary-source picture.",
    phase: "Researching Northwind across primary sources",
  },
  {
    kind: "data",
    title: (
      <>
        Northwind picture assembled:{" "}
        <span className="font-medium">2 prior funding announcements</span>, 11
        customer case studies, voice cluster pragmatic + customer-anchored.
      </>
    ),
    details: [
      "Strongest distinguishing line across the surface area: 'we ship to operators, not buyers.'",
    ],
  },
  {
    kind: "thinking",
    text: "Reading the narrative cycles dominating enterprise AI right now. Filtering to clusters with live reporter coverage and search demand.",
    phase: "Scanning the enterprise AI narrative landscape",
  },
  {
    kind: "rows",
    title: (
      <>
        Five dominant narrative cycles in the sector, mapped to lifecycle and
        coverage signal:
      </>
    ),
    rows: [
      { label: "Workflow agents replacing tools", tag: "peak · 22K/mo · tier-1 active", color: "#88A374" },
      { label: "AI cost reckoning", tag: "rising · 14K/mo", color: "#88A374" },
      { label: "The operator stack", tag: "emerging · open territory", color: "#7489A3" },
      { label: "Vertical SaaS consolidation", tag: "saturated · agency-led", color: "#B27A53" },
      { label: "Compliance-first AI", tag: "fading · low yield", color: "#977BA1" },
    ],
    coda: "Operator stack is open. Workflow-agents cycle is at peak — Northwind needs to plant a flag this cycle, not next.",
  },
  {
    kind: "thinking",
    text: "Mapping Northwind's six closest competitors. What each is claiming, where they're overcommitted, and what narrative real estate is still unclaimed.",
    phase: "Mapping competitor positioning and narrative claims",
  },
  {
    kind: "rows",
    title: <>Competitor narrative map:</>,
    rows: [
      { label: "Cobalt", tag: "'enterprise-grade agentic AI' · saturated", color: "#B27A53" },
      { label: "Polaris", tag: "'the AI-native enterprise stack' · crowded", color: "#B27A53" },
      { label: "Quanta", tag: "'compliance-first AI for regulated industries' · fading", color: "#977BA1" },
      { label: "Sequel", tag: "'AI agents that 10x your team' · commoditized", color: "#977BA1" },
      { label: "Aperture", tag: "'AI workflows for operators' · closest, weak voice", color: "#7489A3" },
    ],
    coda: "Nobody owns 'operator's choice.' Aperture is closest but their voice is weak. Open territory that lines up with Northwind's existing surface.",
  },
  {
    kind: "thinking",
    text: "Synthesizing. Northwind's existing voice + the live narrative cycle + the competitive whitespace. Cross-checking against earned-media reporter beats.",
    phase: "Synthesizing the positioning strategy",
  },
  {
    kind: "data",
    title: (
      <>
        Strategy locked: position Northwind as the{" "}
        <span className="font-medium">operator&apos;s choice</span> inside the
        workflow-agents cycle. Customer-led, not founder-led.
      </>
    ),
    details: [
      "Earned-media targets: 7 reporters with live beats, 3 with prior Northwind touchpoints. Tier-1: Reuters, Bloomberg, The Information.",
    ],
  },
  {
    kind: "thinking",
    text: "Strategy locked, reporter shortlist staged, voice match clean. The wood-chopping is done — the judgment calls only Mike can make are flagged.",
    phase: "Finalizing the first rev for Mike",
  },
  {
    kind: "report",
    eyebrow: "Northwind Series C — First rev for Mike",
    title: "Built for the operators, not the fundraisers",
    lead:
      "The narrative cycle dominating their sector is workflow agents replacing tools. The whitespace nobody's claimed is 'operator's choice.' This first rev plants Northwind there before Sigil can close the gap.",
    stats: [
      { value: "5", label: "Narratives mapped" },
      { value: "6", label: "Competitors analyzed" },
      { value: "1", label: "Whitespace claimed" },
      { value: "7", label: "Reporters lined up" },
    ],
    findingsEyebrow: "What's in here",
    findings: [
      <>
        <span className="text-foreground font-medium">The cycle.</span>{" "}
        Workflow agents replacing tools is at peak — 22K/mo search demand and
        four tier-1 reporters actively covering. The window to plant a flag
        is now, not next quarter.
      </>,
      <>
        <span className="text-foreground font-medium">The whitespace.</span>{" "}
        Five competitors crowd &lsquo;AI-native,&rsquo; &lsquo;enterprise
        grade,&rsquo; and &lsquo;compliance-first.&rsquo; Nobody owns
        &lsquo;operator&apos;s choice.&rsquo; Aperture is closest, voice is
        weak.
      </>,
      <>
        <span className="text-foreground font-medium">The angle.</span>{" "}
        Position Northwind as the operator&apos;s choice — anchor in their
        customer numbers, contrast against the &lsquo;AI for buyers&rsquo;
        framing the rest are stuck in. Customer-led, not founder-led.
      </>,
      <>
        <span className="text-foreground font-medium">What&apos;s left for you.</span>{" "}
        The customer quote, the call on the round&apos;s strategic shape, and
        the reporter outreach order. The judgment work — yours.
      </>,
    ],
    source: "Drafted by Shadow · Northwind account · April 28, 2026",
    workflow: [
      { label: "Intake" },
      { label: "Research" },
      { label: "Strategy", current: true },
      { label: "First rev" },
      { label: "Outreach" },
      { label: "Follow-up" },
    ],
  },
];

function StepRow({ step, active = false }: { step: Step; active?: boolean }) {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const r = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(r);
  }, []);
  const baseClass = `relative pb-6 pl-6 transition-all duration-500 ease-out ${
    shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
  }`;
  const isThinking = step.kind === "thinking";
  const pulse = isThinking && active;
  return (
    <li className={baseClass}>
      <span
        className={`absolute left-[2px] top-[7px] w-1.5 h-1.5 rounded-full ${
          isThinking
            ? `bg-[#7489A3]${pulse ? " animate-[pulse_1s_ease-in-out_infinite]" : ""}`
            : "bg-foreground/40"
        }`}
      />

      {step.kind === "thinking" && (
        <div>
          <div
            className={`font-mono text-[13px] leading-snug text-[#7489A3] mb-1.5${
              pulse ? " animate-[pulse_1.2s_ease-in-out_infinite]" : ""
            }`}
          >
            {step.phase}
          </div>
          <div className="text-[14px] italic text-muted-foreground leading-relaxed">
            <TypedText text={step.text} speed={12} />
          </div>
        </div>
      )}

      {step.kind === "data" && (
        <div>
          <div className="text-[15px] text-foreground leading-snug">{step.title}</div>
          {step.details?.map((d, j) => (
            <div
              key={j}
              className="mt-1.5 font-mono text-[11px] text-muted-foreground tracking-tight leading-relaxed"
            >
              {d}
            </div>
          ))}
        </div>
      )}

      {step.kind === "rows" && (
        <div>
          <div className="text-[15px] text-foreground leading-snug">{step.title}</div>
          <ul className="mt-3 space-y-1.5">
            {step.rows.map((r, j) => (
              <li
                key={j}
                className="flex items-start gap-2.5 text-[12px] leading-snug transition-all duration-500 ease-out"
                style={{
                  transitionDelay: shown ? `${120 + j * 110}ms` : "0ms",
                  opacity: shown ? 1 : 0,
                  transform: shown ? "translateX(0)" : "translateX(-4px)",
                }}
              >
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full shrink-0 mt-[6px]"
                  style={{ backgroundColor: r.color }}
                />
                <span>
                  <span className="font-medium text-foreground">{r.label}</span>
                  <span className="text-muted-foreground/75"> — {r.tag}</span>
                </span>
              </li>
            ))}
          </ul>
          {step.coda && (
            <p
              className="mt-3 text-[12px] italic text-muted-foreground/80 leading-relaxed transition-all duration-500 ease-out"
              style={{
                transitionDelay: shown
                  ? `${120 + step.rows.length * 110 + 200}ms`
                  : "0ms",
                opacity: shown ? 1 : 0,
                transform: shown ? "translateY(0)" : "translateY(2px)",
              }}
            >
              {step.coda}
            </p>
          )}
        </div>
      )}
    </li>
  );
}

function ReportReveal({ step }: { step: Extract<Step, { kind: "report" }> }) {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const r = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(r);
  }, []);
  return (
    <div
      className={`mt-6 transition-all duration-500 ease-out ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
      }`}
    >
      <ReportCard step={step} />
    </div>
  );
}

function ReportCard({ step }: { step: Extract<Step, { kind: "report" }> }) {
  // Internal phased reveal so the report unfolds inside its own surface,
  // separate from the timeline above it.
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase(1), 1900); // stats after lead types
    const t2 = window.setTimeout(() => setPhase(2), 2700); // findings begin
    const t3 = window.setTimeout(() => setPhase(3), 5200); // footer + CTA
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, []);

  return (
    <div
      className="rounded-xl border border-foreground/30 overflow-hidden shadow-md"
      style={{ backgroundColor: "#FBFAF6" }}
    >
      {/* Title bar */}
      <div className="px-5 py-2.5 border-b border-foreground/15 flex items-center justify-between gap-3">
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#88A374]" />
          Report ready
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/65 truncate">
          {step.eyebrow}
        </span>
      </div>

      {/* Body — capped height; bottom fades into the footer */}
      <div
        className="relative px-5 md:px-6 pt-5 pb-4 max-h-[260px] overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
        }}
      >
        <h3 className="font-serif text-[22px] md:text-[24px] text-foreground leading-[1.15]">
          {step.title}
        </h3>
        <p className="text-[14px] text-muted-foreground mt-2.5 leading-relaxed">
          <TypedText text={step.lead} speed={10} />
        </p>

        {/* Workflow breadcrumb — locates this rev inside the longer journey */}
        <div
          className={`mt-3 flex items-center gap-1.5 flex-wrap text-[10px] font-mono uppercase tracking-[0.16em] transition-all duration-500 ease-out ${
            phase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
          }`}
        >
          {step.workflow.map((w, i) => (
            <span key={w.label} className="flex items-center gap-1.5">
              {i > 0 && (
                <span aria-hidden="true" className="text-muted-foreground/40">
                  →
                </span>
              )}
              <span
                className={
                  w.current
                    ? "px-1.5 py-0.5 rounded bg-foreground/8 text-foreground"
                    : "text-muted-foreground/65"
                }
                style={
                  w.current ? { backgroundColor: "rgba(43,32,22,0.08)" } : undefined
                }
              >
                {w.label}
              </span>
            </span>
          ))}
        </div>

        {/* Stats — single inline row, never wraps */}
        <div
          className={`mt-3 pt-3 border-t border-foreground/10 flex items-baseline gap-x-3 text-[11px] whitespace-nowrap overflow-hidden transition-all duration-500 ease-out ${
            phase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
          }`}
        >
          {step.stats.map((s, i) => (
            <span key={s.label} className="shrink-0">
              {i > 0 && (
                <span className="mr-3 text-muted-foreground/35">·</span>
              )}
              <span className="font-medium text-foreground">{s.value}</span>{" "}
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/75">
                {s.label}
              </span>
            </span>
          ))}
        </div>

        {/* Findings — top of list visible, rest fades under the body mask */}
        <div
          className={`mt-4 transition-opacity duration-500 ${
            phase >= 2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
            {step.findingsEyebrow}
          </div>
          <ul className="space-y-2">
            {step.findings.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-[13px] leading-relaxed transition-all duration-500 ease-out"
                style={{
                  transitionDelay: phase >= 2 ? `${i * 240}ms` : "0ms",
                  opacity: phase >= 2 ? 1 : 0,
                  transform: phase >= 2 ? "translateY(0)" : "translateY(4px)",
                }}
              >
                <span className="font-mono text-[10px] text-muted-foreground/60 mt-1 shrink-0">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer + CTA */}
      <div
        className={`px-5 py-3 border-t border-foreground/15 flex items-center justify-between gap-3 transition-opacity duration-500 ${
          phase >= 3 ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/65 truncate">
          {step.source}
        </span>
        <button
          type="button"
          className="shrink-0 inline-flex items-center gap-1.5 rounded-md border border-foreground/15 bg-card px-3 py-1.5 text-[12px] font-medium text-foreground hover:border-foreground/30 transition-colors"
        >
          Open in editor
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}

export function ProgramAgentDemo({ start }: { start?: boolean } = {}) {
  const [started, setStarted] = useState(false);
  const [cycle, setCycle] = useState(0);
  const [typed, setTyped] = useState("");
  const [running, setRunning] = useState(false);
  const [revealed, setRevealed] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // External trigger takes precedence — caller controls when typing begins.
  // Otherwise, fall back to an IntersectionObserver so the demo still works
  // standalone.
  useEffect(() => {
    if (started) return;
    if (start === true) {
      setStarted(true);
      return;
    }
    if (start === false) return; // explicitly held back by parent
    const el = containerRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setStarted(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setStarted(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started, start]);

  // Type prompt → trigger run. Re-runs each cycle for replay.
  useEffect(() => {
    if (!started) return;
    let cancelled = false;
    setTyped("");
    setRunning(false);
    setRevealed(0);

    let i = 0;
    let typingTimer: number | undefined;
    let runTimer: number | undefined;
    const typeNext = () => {
      if (cancelled) return;
      i++;
      setTyped(PROMPT.slice(0, i));
      if (i < PROMPT.length) {
        typingTimer = window.setTimeout(typeNext, 22 + Math.random() * 18);
      } else {
        runTimer = window.setTimeout(() => {
          if (!cancelled) setRunning(true);
        }, 600);
      }
    };
    const startTimer = window.setTimeout(typeNext, 500);

    return () => {
      cancelled = true;
      window.clearTimeout(startTimer);
      if (typingTimer) window.clearTimeout(typingTimer);
      if (runTimer) window.clearTimeout(runTimer);
    };
  }, [started, cycle]);

  // Reveal steps in sequence
  useEffect(() => {
    if (!running) return;
    let cancelled = false;
    let idx = 0;
    let advanceTimer: number | undefined;
    const advance = () => {
      if (cancelled) return;
      idx++;
      setRevealed(idx);
      if (idx < STEPS.length) {
        const step = STEPS[idx - 1];
        let dwell: number;
        switch (step.kind) {
          case "thinking":
            dwell = 1500 + Math.random() * 700;
            break;
          case "data":
            dwell = 1700 + Math.random() * 600;
            break;
          case "rows":
            dwell = 3000 + Math.random() * 600;
            break;
          case "report":
            dwell = 5500;
            break;
        }
        advanceTimer = window.setTimeout(advance, dwell);
      }
    };
    advanceTimer = window.setTimeout(advance, 500);
    return () => {
      cancelled = true;
      if (advanceTimer) window.clearTimeout(advanceTimer);
    };
  }, [running, cycle]);

  // Replay: a few seconds after the sequence completes, restart the cycle.
  useEffect(() => {
    if (!running) return;
    if (revealed < STEPS.length) return;
    const t = window.setTimeout(() => {
      setCycle((c) => c + 1);
    }, 7000);
    return () => window.clearTimeout(t);
  }, [running, revealed]);

  // Auto-scroll to bottom whenever a new step appears
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [revealed]);

  const typingComplete = typed.length === PROMPT.length;
  const isWorking = running && revealed < STEPS.length;

  return (
    <div
      ref={containerRef}
      className="flex flex-col h-[640px]"
    >
      {/* Prompt block — dark card; rounded top only, flat bottom */}
      <div className="shrink-0 p-5 md:p-6 rounded-t-2xl bg-[#0a0908] text-[#fbf7ee]">
        <div className="min-h-[3rem] text-[15px] leading-relaxed text-[#fbf7ee]">
          {typed}
          <span
            aria-hidden="true"
            className={`inline-block w-[1px] h-[1.1em] -mb-[0.15em] ml-[1px] bg-[#fbf7ee]/80 ${
              !typingComplete ? "animate-pulse" : "opacity-0"
            }`}
          />
        </div>
        <div className="mt-4 pt-3 border-t border-[#fbf7ee]/15 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.18em]">
          <span className="text-[#fbf7ee]/55">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#88A374] mr-2 align-middle" />
            Northwind · New business · April 2026
          </span>
          <span
            className={`flex items-center gap-1.5 transition-colors ${
              typingComplete ? "text-[#fbf7ee]" : "text-[#fbf7ee]/35"
            }`}
          >
            <span aria-hidden="true">↵</span> Run
          </span>
        </div>
      </div>

      {/* Stream — bordered on sides + bottom, flat top; subtle inset shadow
       * at the top creates a soft glow at the seam under the dark prompt. */}
      <div
        ref={scrollRef}
        className="scroll-faint relative flex-1 overflow-y-auto border-x border-b border-border/65 rounded-b-2xl bg-card p-5 md:p-6 shadow-[inset_0_10px_14px_-10px_rgba(0,0,0,0.18)]"
      >
        <div
          className={`flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] transition-opacity duration-500 ${
            running ? "opacity-100" : "opacity-0"
          }`}
        >
          <span
            className={`inline-block w-1.5 h-1.5 rounded-full bg-[#88A374] ${
              isWorking ? "animate-pulse" : ""
            }`}
          />
          <span className="text-muted-foreground">{isWorking ? "Working" : "Done"}</span>
        </div>

        {(() => {
          const visible = STEPS.slice(0, revealed);
          const timelineSteps = visible.filter((s) => s.kind !== "report");
          const report = visible.find(
            (s): s is Extract<Step, { kind: "report" }> => s.kind === "report",
          );
          // Only the most-recently-revealed timeline step pulses, and only
          // until a follow-on step (or the report) is revealed.
          const activeIdx = report ? -1 : timelineSteps.length - 1;
          return (
            <>
              <ol className="mt-5 relative">
                {timelineSteps.length > 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[5px] top-2 bottom-3 w-px bg-border"
                  />
                )}
                {timelineSteps.map((step, i) => (
                  <StepRow key={i} step={step} active={i === activeIdx} />
                ))}
              </ol>
              {report && <ReportReveal step={report} />}
            </>
          );
        })()}
      </div>
    </div>
  );
}
