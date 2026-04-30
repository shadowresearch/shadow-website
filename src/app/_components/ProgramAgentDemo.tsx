"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const PROMPT =
  "Series C announcement in 6 weeks — looking for earned media support. Need a first-rev positioning angle by Friday.";

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
    text: "Pulling everything public on Northwind: prior announcements, leadership history, customer case studies, Erin's posts. Building a primary-source picture.",
    phase: "Researching Northwind across primary sources",
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
    kind: "rows",
    title: <>Competitor narrative map:</>,
    rows: [
      { label: "Cobalt", tag: "'enterprise-grade agentic AI' · saturated", color: "#B27A53" },
      { label: "Polaris", tag: "'the AI-native enterprise stack' · crowded", color: "#B27A53" },
      { label: "Sequel", tag: "'AI agents that 10x your team' · commoditized", color: "#977BA1" },
      { label: "Aperture", tag: "'AI workflows for operators' · closest, weak voice", color: "#7489A3" },
    ],
    coda: "Nobody owns 'operator's choice.' Aperture is closest but their voice is weak. Open territory that lines up with Northwind's existing surface.",
  },
  {
    kind: "thinking",
    text: "Synthesizing. Northwind's existing voice + the live narrative cycle + the competitive whitespace. Locked.",
    phase: "Synthesizing the positioning strategy",
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

function StepRow({
  step,
  active = false,
  scrollRoot,
}: {
  step: Step;
  active?: boolean;
  scrollRoot?: HTMLElement | null;
}) {
  const [shown, setShown] = useState(false);
  const liRef = useRef<HTMLLIElement | null>(null);
  // Tracks how far the row has scrolled into view inside the scroll
  // container. 0 = fully outside the visible band, 1 = fully inside.
  const [scrollOpacity, setScrollOpacity] = useState(0);
  useEffect(() => {
    const r = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(r);
  }, []);
  useEffect(() => {
    const el = liRef.current;
    if (!el || !scrollRoot) return;
    if (typeof IntersectionObserver === "undefined") {
      setScrollOpacity(1);
      return;
    }
    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // Ramp opacity with intersection ratio so the copy fades in
          // as it scrolls into the visible band of the stream.
          const ratio = entry.intersectionRatio;
          const eased = Math.min(1, Math.max(0, ratio * 1.6));
          setScrollOpacity(eased);
        }
      },
      {
        root: scrollRoot,
        threshold: thresholds,
        // Match the top + bottom mask zones so the fade lines up with
        // the visual mask on the stream container.
        rootMargin: "-48px 0px -64px 0px",
      },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [scrollRoot]);
  const baseClass = `relative pb-6 pl-6 transition-opacity duration-300 ease-out ${
    shown ? "translate-y-0" : "translate-y-1"
  }`;
  const isThinking = step.kind === "thinking";
  const pulse = isThinking && active;
  return (
    <li
      ref={liRef}
      className={baseClass}
      style={{ opacity: shown ? scrollOpacity : 0 }}
    >
      {/* Per-row dashed connector — starts below the dot and runs to the
          row's bottom, so each row's dot naturally breaks the dashed line. */}
      <span
        aria-hidden="true"
        className="absolute left-[5px] top-[18px] bottom-0 border-l border-dashed border-border"
      />
      {/* Step dot — sits on the line and breaks it at this position.
          Uniform gray across all nodes for a consistent chain. */}
      <span
        className="absolute left-[2px] top-[7px] w-1.5 h-1.5 rounded-full bg-foreground/55"
      />

      {step.kind === "thinking" && (
        <div>
          <div className="font-mono text-[13px] leading-snug text-foreground mb-1.5">
            {step.phase}
          </div>
          <div className="text-[14px] italic text-foreground/65 leading-relaxed">
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

/** Lucide-style inline SVG. 24×24 viewBox, stroke 2, round caps/joins. */
function LucideIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function CopyIcon() {
  return (
    <LucideIcon>
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </LucideIcon>
  );
}

function LinkIcon() {
  return (
    <LucideIcon>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </LucideIcon>
  );
}

function ExpandIcon() {
  return (
    <LucideIcon>
      <polyline points="15 3 21 3 21 9" />
      <polyline points="9 21 3 21 3 15" />
      <line x1="21" x2="14" y1="3" y2="10" />
      <line x1="3" x2="10" y1="21" y2="14" />
    </LucideIcon>
  );
}

function ArrowUpRightIcon() {
  return (
    <LucideIcon>
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </LucideIcon>
  );
}

function IconButton({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className="inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground hover:bg-foreground/[0.05] transition-colors"
      aria-label={label}
    >
      {children}
    </button>
  );
}

/**
 * Doc preview card — exact spec from the Shadow product
 * (document-preview-card.tsx): outer flex-col with bg-muted/30 +
 * border-border/40; header row with truncated context label and ghost
 * icon row; inner h-40 content card with bg-background, rounded-t only,
 * border-border/30; bottom 48px linear-gradient fade from --background
 * to transparent that gives the "preview" read.
 */
function ReportCard({ step }: { step: Extract<Step, { kind: "report" }> }) {
  // Phased reveal so the document unfolds: title and lead type in,
  // continuation paragraphs fade up beneath them.
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase(1), 2200);
    return () => window.clearTimeout(t1);
  }, []);

  return (
    <div className="flex flex-col rounded-xl border border-border/25 bg-muted/15 pt-2 px-3 pb-0">
      {/* Header row — context label left, ghost icon row right */}
      <div className="flex items-center justify-between gap-2 pb-2">
        <p className="text-xs text-muted-foreground truncate">{step.eyebrow}</p>
        <div className="flex items-center gap-0.5 shrink-0">
          <IconButton label="Copy">
            <CopyIcon />
          </IconButton>
          <IconButton label="Copy link">
            <LinkIcon />
          </IconButton>
          <IconButton label="Expand">
            <ExpandIcon />
          </IconButton>
          <IconButton label="Open">
            <ArrowUpRightIcon />
          </IconButton>
        </div>
      </div>

      {/* Inner content preview card — h-40, paper white, top-rounded only.
          Spec says bg-background; in the Shadow app that token is paper
          white. On this marketing site --background is Ash (gray), so we
          use --card (#FBFAF6) which is the actual paper-white token here. */}
      <div className="relative w-full rounded-t-lg border-t border-l border-r border-border/30 bg-card overflow-hidden cursor-pointer">
        <div className="h-40 overflow-hidden p-3 text-xs leading-[1.6]">
          <p className="font-semibold text-foreground">{step.title}</p>
          <p className="mt-2 text-foreground/80">{step.lead}</p>
          {step.findings.map((f, i) => (
            <p
              key={i}
              className="mt-2 text-foreground/70 transition-all duration-500 ease-out"
              style={{
                transitionDelay: phase >= 1 ? `${i * 220}ms` : "0ms",
                opacity: phase >= 1 ? 1 : 0,
                transform: phase >= 1 ? "translateY(0)" : "translateY(4px)",
              }}
            >
              {f}
            </p>
          ))}
        </div>
        {/* Bottom fade — 48px gradient from the paper-white card token */}
        <div
          className="absolute inset-x-0 bottom-0 h-12 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, var(--card), transparent)",
          }}
        />
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
  const [scrollEl, setScrollEl] = useState<HTMLDivElement | null>(null);
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

  return (
    <div
      ref={containerRef}
      className="flex flex-col h-[480px]"
    >
      {/* Inbound profile card — sender header + message body */}
      <div className="shrink-0 px-5 pt-5 pb-2 md:px-6 md:pt-6 md:pb-2">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <span className="text-[14px] font-medium text-foreground">
              Erin Walsh
            </span>
            <span className="ml-2 text-[12px] text-muted-foreground">
              CEO · Northwind
            </span>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/80 shrink-0">
            Inbound · Apr 28
          </div>
        </div>
        <div className="mt-2 min-h-[3rem] text-[15px] leading-relaxed text-foreground">
          {typed}
          <span
            aria-hidden="true"
            className={`inline-block w-[1px] h-[1.1em] -mb-[0.15em] ml-[1px] bg-foreground/70 ${
              !typingComplete ? "animate-pulse" : "opacity-0"
            }`}
          />
        </div>
      </div>

      {/* Stream — flat, no border; top + bottom fade so it dissolves into page */}
      <div
        ref={(el) => {
          scrollRef.current = el;
          setScrollEl(el);
        }}
        className="scroll-faint relative flex-1 overflow-y-auto px-5 pt-2 pb-5 md:px-6 md:pt-2 md:pb-6"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0, black 24px, black calc(100% - 64px), transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0, black 24px, black calc(100% - 64px), transparent 100%)",
        }}
      >
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
              <ol className="mt-3 relative">
                {timelineSteps.map((step, i) => (
                  <StepRow
                    key={i}
                    step={step}
                    active={i === activeIdx}
                    scrollRoot={scrollEl}
                  />
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
