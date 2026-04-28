"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const PROMPT =
  "Run the Business & Markets baseline narrative report for April 2026.";

type Row = { label: string; tag: string; color: string };
type StatBlock = { value: string; label: string };
type Step =
  | { kind: "thinking"; text: string; duration: string }
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
    text: "Parsing the brief. Frame: coverage volume × search demand × narrative lifecycle × entity hierarchy.",
    duration: "2s",
  },
  {
    kind: "thinking",
    text: "Querying the narrative graph: how political-statement shocks propagate into market-confidence search demand.",
    duration: "3s",
  },
  {
    kind: "thinking",
    text: "Cross-referencing Fed commentary cycles against bond-yield query velocity to isolate buyer-intent shifts.",
    duration: "4s",
  },
  {
    kind: "thinking",
    text: "Joining tariff-policy headline volume to AI engine citation counts — checking which institutions inherit the story.",
    duration: "3s",
  },
  {
    kind: "data",
    title: (
      <>
        Corpus assembled: <span className="font-medium">31,201 articles</span>{" "}
        across the category, indexed and ready for clustering.
      </>
    ),
    details: [
      "847 sources · 142 tier-1 outlets · 14,200 AI citations · range 28d",
    ],
  },
  {
    kind: "thinking",
    text: "Clustering coverage into structural narratives. Joining each cluster to search demand and lifecycle position to detect divergence.",
    duration: "5s",
  },
  {
    kind: "rows",
    title: (
      <>
        8 structural narratives. Mapping each to its position on the
        press↔search divergence axis:
      </>
    ),
    rows: [
      { label: "Tariff Refund Unwind", tag: "aligned · 37.7K/mo", color: "#88A374" },
      { label: "AI Capex Race", tag: "media leads · 0.6K/mo", color: "#977BA1" },
      { label: "Mega-Deal Consolidation", tag: "media leads · 0.2K/mo", color: "#977BA1" },
      { label: "Fed Policy Paralysis", tag: "market leads · 156K/mo", color: "#7489A3" },
      { label: "Global Markets Contagion", tag: "market leads · 200K/mo", color: "#7489A3" },
      { label: "Fuel Shortage Anxiety", tag: "peak · 374K/mo", color: "#CC764F" },
    ],
    coda: "Two press-led clusters, two buyer-led, one aligned, one outlier dominating intent. The divergence is structural — not noise.",
  },
  {
    kind: "thinking",
    text: "Reconciling entity hierarchies. Press citation rank vs. AI engine citation rank — testing whether the two construct the same map.",
    duration: "3s",
  },
  {
    kind: "data",
    title: (
      <>
        Amazon leads press mentions (
        <span className="font-medium">4,487</span>); OpenAI leads AI engine
        citations (<span className="font-medium">32 of 25 prompts</span>).
        Hierarchies diverge.
      </>
    ),
    details: [
      "Press and AI engines are constructing distinct entity maps for the category.",
    ],
  },
  {
    kind: "thinking",
    text: "Synthesizing. Leading with the coverage-vs-intent divergence, closing with the positioning opportunity it implies.",
    duration: "4s",
  },
  {
    kind: "report",
    eyebrow: "Business & Markets — Baseline · April 2026",
    title: "Shadow Narrative Intelligence Report",
    lead: "The business press is covering deals and AI spending; buyers are searching for macro risk. The two audiences are reading different markets.",
    stats: [
      { value: "31,201", label: "Articles · 28d" },
      { value: "8", label: "Narratives" },
      { value: "374K", label: "Peak search" },
      { value: "2", label: "Market leads" },
    ],
    findingsEyebrow: "Key findings",
    findings: [
      <>
        <span className="text-foreground font-medium">Tariff Refund Unwind</span>{" "}
        dominates at 26.6% of coverage with matching search demand (37.7K/mo).
        The $166B refund story has both editorial and commercial gravity.
      </>,
      <>
        <span className="text-foreground font-medium">AI Capex Race</span> and{" "}
        <span className="text-foreground font-medium">Mega-Deal Consolidation</span>{" "}
        combine for 35.5% of coverage but only 0.8K/mo search. The press is
        fascinated; buyers are not yet looking.
      </>,
      <>
        <span className="text-foreground font-medium">Fed Policy Paralysis</span>{" "}
        and{" "}
        <span className="text-foreground font-medium">Global Markets Contagion</span>{" "}
        together: 14.5% of coverage against 356.7K monthly searches. Buyers seek
        macro intelligence the press under-covers.
      </>,
      <>
        <span className="text-foreground font-medium">Fuel Shortage Anxiety</span>{" "}
        generates 374,730 monthly searches — driven by gas-price and supply
        queries. The single largest buyer-intent signal in the category.
      </>,
    ],
    source: "Perigon News Intelligence · Shadow analysis · April 27, 2026",
  },
];

function StepRow({ step }: { step: Step }) {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const r = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(r);
  }, []);
  const baseClass = `relative pb-6 pl-6 transition-all duration-500 ease-out ${
    shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
  }`;
  return (
    <li className={baseClass}>
      <span className="absolute left-[2px] top-[7px] w-1.5 h-1.5 rounded-full bg-foreground/40" />

      {step.kind === "thinking" && (
        <div className="text-[14px] italic text-muted-foreground leading-relaxed">
          <TypedText text={step.text} speed={12} />
          <span className="ml-2 font-mono not-italic text-[#B27A53]/80 text-[11px]">
            {step.duration}
          </span>
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
          Read full report
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
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#7489A3] mr-2 align-middle" />
            Business &amp; Markets · April 2026
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
                  <StepRow key={i} step={step} />
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
