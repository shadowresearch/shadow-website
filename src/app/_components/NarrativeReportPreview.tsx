"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Palette + data sourced from /reports/agency-sector — see _components/data.ts.
const PALETTE = {
  dusk: "#977BA1",
  uv: "#7489A3",
  lamplight: "#B27A53",
  amber: "#BF8440",
  cool: "#63727E",
  shade: "#8F7F6B",
  foreground: "#453F3D",
  border: "#CFC7BD",
  // Light variants — used inside the dark glass card where text inverts.
  light: "#FBFAF6",
  lightDim: "rgba(251,250,246,0.6)",
} as const;

type NarrativeKey = "margin" | "consolidation" | "ai" | "regulatory" | "talent";

type MonthRow = {
  m: string;
  margin: number;
  consolidation: number;
  ai: number;
  regulatory: number;
  talent: number;
};

const MONTHLY: MonthRow[] = [
  { m: "Nov", margin: 12, consolidation: 8, ai: 4, regulatory: 4, talent: 0 },
  { m: "Dec", margin: 9, consolidation: 6, ai: 4, regulatory: 0, talent: 0 },
  { m: "Jan", margin: 7, consolidation: 6, ai: 1, regulatory: 0, talent: 0 },
  { m: "Feb", margin: 23, consolidation: 14, ai: 12, regulatory: 4, talent: 4 },
  { m: "Mar", margin: 5, consolidation: 4, ai: 2, regulatory: 0, talent: 1 },
  { m: "Apr", margin: 2, consolidation: 5, ai: 4, regulatory: 9, talent: 0 },
];

const NARRATIVES: { key: NarrativeKey; label: string; color: string }[] = [
  { key: "margin", label: "Margin", color: PALETTE.dusk },
  { key: "consolidation", label: "Consolidation", color: PALETTE.lamplight },
  { key: "ai", label: "AI", color: PALETTE.uv },
  { key: "regulatory", label: "Regulatory", color: PALETTE.amber },
  { key: "talent", label: "Talent", color: PALETTE.cool },
];

type Item = { name: string; sub: string };

type Strategy = {
  n: string;
  eyebrow: string;
  name: string;
  angle: string;
  accent: string;
  journalists: Item[];
  awardsEvents: Item[];
};

const STRATEGIES: Strategy[] = [
  {
    n: "01",
    eyebrow: "Underreported · 4% of coverage",
    name: "The Talent frame.",
    angle:
      "Position as the antidote to holdco AI-driven attrition. Buyer concern is unanswered in print.",
    accent: PALETTE.cool,
    journalists: [
      { name: "Suzanne Vranica", sub: "WSJ — Agencies" },
      { name: "Lara O'Reilly", sub: "Business Insider" },
      { name: "Megan Graham", sub: "Bloomberg" },
    ],
    awardsEvents: [
      { name: "PRWeek Best Places to Work", sub: "Sep 18, 2026" },
      { name: "Ad Age Best Places to Work", sub: "Jun 6, 2026" },
      { name: "Cannes Lions · Talent track", sub: "Jun 22, 2026" },
      { name: "PRovoke Global Summit", sub: "Oct 27, 2026" },
    ],
  },
  {
    n: "02",
    eyebrow: "Emerging · 7% of coverage",
    name: "The Regulatory frame.",
    angle:
      "Own the compliance-first lane as AI-disclosure and platform rules tighten across major markets.",
    accent: PALETTE.amber,
    journalists: [
      { name: "Kim Mackrael", sub: "WSJ — Regulatory" },
      { name: "Brian Fung", sub: "CNN — Tech Policy" },
      { name: "Cecilia Kang", sub: "NYT — Tech Policy" },
    ],
    awardsEvents: [
      { name: "SABRE Awards · Public Affairs", sub: "May 22, 2026" },
      { name: "ICCO Global Awards", sub: "Oct 16, 2026" },
      { name: "IAB Annual Leadership Meeting", sub: "Jan 26, 2027" },
      { name: "PRSA International", sub: "Oct 12, 2026" },
    ],
  },
];

// Single visible frame height — matches ProgramAgentDemo (480px) so the
// hero capability cards line up.
const FRAME_H = 480;

// Catmull-Rom → cubic Bezier smoothing for line-chart paths.
function smoothPath(points: [number, number][]): string {
  const n = points.length;
  if (n === 0) return "";
  if (n === 1) return `M${points[0][0]},${points[0][1]}`;
  const k = 1 / 6;
  let d = `M${points[0][0]},${points[0][1]}`;
  for (let i = 0; i < n - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const c1x = p1[0] + (p2[0] - p0[0]) * k;
    const c1y = p1[1] + (p2[1] - p0[1]) * k;
    const c2x = p2[0] - (p3[0] - p1[0]) * k;
    const c2y = p2[1] - (p3[1] - p1[1]) * k;
    d += ` C${c1x},${c1y} ${c2x},${c2y} ${p2[0]},${p2[1]}`;
  }
  return d;
}

export function NarrativeReportPreview() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [armed, setArmed] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setArmed(true);
      setScrolled(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            window.setTimeout(() => setArmed(true), 220);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Once armed, alternate between frame 1 (overview) and frame 2 (recs) on
  // a loop. Each frame dwells for `dwellMs` before scrolling.
  useEffect(() => {
    if (!armed) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;
    const dwellMs = 2200;
    const interval = window.setInterval(() => {
      setScrolled((prev) => !prev);
    }, dwellMs);
    return () => window.clearInterval(interval);
  }, [armed]);

  return (
    <div
      ref={wrapRef}
      className="relative w-full overflow-hidden"
      style={{ height: FRAME_H }}
    >
      {/* Scroll track containing the two frames stacked vertically */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrolled ? -FRAME_H : 0}px)`,
          transition: "transform 1500ms cubic-bezier(0.65,0,0.35,1)",
        }}
      >
        <FrameOne armed={armed} />
        <FrameTwo armed={armed} scrolled={scrolled} />
      </div>

      {/* Bottom fade — implies the report continues beyond the visible frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-12 z-10"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(43,32,22,0.45) 60%, rgba(43,32,22,0.75) 100%)",
        }}
      />
    </div>
  );
}

function FrameOne({ armed }: { armed: boolean }) {
  // Chart layout
  const W = 540;
  const chartTop = 10;
  const chartH = 80;
  const colCount = MONTHLY.length;
  const padX = 12;
  const xFor = (i: number) =>
    padX + (i * (W - padX * 2)) / (colCount - 1);
  const maxValue = Math.max(
    ...MONTHLY.flatMap((m) =>
      NARRATIVES.map((n) => m[n.key] as number),
    ),
  );
  const yFor = (v: number) => chartTop + chartH * (1 - v / maxValue);
  const febIdx = MONTHLY.findIndex((m) => m.m === "Feb");

  return (
    <section
      className="px-7 pt-7 pb-8"
      style={{ height: FRAME_H }}
      aria-label="Frame one — agency sector overview"
    >
      {/* Eyebrow row — matches the /reports breadcrumb pattern */}
      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.18em] text-background/65">
        <div className="flex items-center gap-2">
          <span className="relative inline-flex w-1.5 h-1.5">
            <span className="absolute inset-0 rounded-full bg-[#88A374] animate-ping opacity-60" />
            <span className="relative inline-block w-1.5 h-1.5 rounded-full bg-[#88A374]" />
          </span>
          <span>Reports</span>
          <span style={{ color: PALETTE.border }}>/</span>
          <span style={{ color: PALETTE.light }}>Agency Sector</span>
        </div>
        <span>Edition 1 · April 2026</span>
      </div>

      <h3 className="mt-4 font-serif font-medium text-[22px] leading-[1.1] tracking-tight text-background">
        The agency industry under the microscope.
      </h3>
      <p className="mt-2 text-[12.5px] text-background/65 leading-relaxed max-w-[480px]">
        Six months of tier-1 coverage. Same disruption forces — opposite frames.
      </p>

      {/* Stat row */}
      <div className="mt-4 grid grid-cols-3 gap-4 border-t border-background/15 pt-4">
        <Stat
          value="44.8%"
          label="WPP · negative"
          accent={PALETTE.lamplight}
        />
        <Stat
          value="26.6%"
          label="Omnicom · negative"
          accent={PALETTE.uv}
        />
        <Stat value="Feb '26" label="Inflection" accent={PALETTE.light} />
      </div>

      {/* Mini narrative-volume chart */}
      <div className="mt-5">
        <div className="flex items-baseline justify-between">
          <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-background/65">
            Narrative volume · monthly · Nov 2025 – Apr 2026
          </p>
          <p className="text-[10px] font-mono text-background/65 tabular-nums">
            n = 216
          </p>
        </div>
        <svg
          viewBox={`0 0 ${W} ${chartTop + chartH + 22}`}
          className="mt-3 w-full h-auto"
          role="img"
          aria-label="Monthly narrative volume per frame across the agency holdco sector."
        >
          {/* Subtle horizontal gridlines */}
          {[0.25, 0.5, 0.75].map((f) => (
            <line
              key={f}
              x1={0}
              x2={W}
              y1={chartTop + chartH * f}
              y2={chartTop + chartH * f}
              stroke={PALETTE.light}
              strokeOpacity={0.06}
              strokeWidth={1}
            />
          ))}

          {/* Base axis */}
          <line
            x1={0}
            x2={W}
            y1={chartTop + chartH + 0.5}
            y2={chartTop + chartH + 0.5}
            stroke={PALETTE.light}
            strokeOpacity={0.18}
            strokeWidth={1}
          />

          {/* February inflection — dashed vertical guide */}
          <g
            style={{
              transition: "opacity 500ms ease 1100ms",
              opacity: armed ? 1 : 0,
            }}
          >
            <line
              x1={xFor(febIdx)}
              x2={xFor(febIdx)}
              y1={chartTop - 4}
              y2={chartTop + chartH}
              stroke={PALETTE.lamplight}
              strokeWidth={1}
              strokeDasharray="2 2"
              opacity={0.55}
            />
            <circle
              cx={xFor(febIdx)}
              cy={chartTop - 4}
              r={2.5}
              fill={PALETTE.lamplight}
            />
          </g>

          {/* One line per narrative */}
          {NARRATIVES.map((n, lineIdx) => {
            const pts: [number, number][] = MONTHLY.map((m, i) => [
              xFor(i),
              yFor(m[n.key] as number),
            ]);
            const d = smoothPath(pts);
            const delay = 420 + lineIdx * 90;
            return (
              <g key={n.key}>
                <path
                  d={d}
                  fill="none"
                  stroke={n.color}
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeOpacity={0.9}
                  pathLength={1}
                  strokeDasharray="1"
                  style={{
                    strokeDashoffset: armed ? 0 : 1,
                    transition: `stroke-dashoffset 1200ms cubic-bezier(0.65,0,0.35,1) ${delay}ms`,
                  }}
                />
                {MONTHLY.map((m, i) => (
                  <circle
                    key={m.m}
                    cx={xFor(i)}
                    cy={yFor(m[n.key] as number)}
                    r={1.8}
                    fill={n.color}
                    style={{
                      opacity: armed ? 0.95 : 0,
                      transition: `opacity 280ms ease ${delay + 900 + i * 30}ms`,
                    }}
                  />
                ))}
              </g>
            );
          })}

          {/* X-axis month labels */}
          {MONTHLY.map((m, i) => {
            const isInflection = m.m === "Feb";
            return (
              <text
                key={m.m}
                x={xFor(i)}
                y={chartTop + chartH + 16}
                textAnchor="middle"
                fontSize={10}
                fontFamily="var(--font-mono)"
                fill={isInflection ? PALETTE.light : PALETTE.lightDim}
                fontWeight={isInflection ? 600 : 400}
              >
                {m.m}
              </text>
            );
          })}
        </svg>

        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[10px] font-mono text-background/65">
          {NARRATIVES.map((n) => (
            <span key={n.key} className="inline-flex items-center gap-1.5">
              <span
                aria-hidden
                className="inline-block w-2 h-2"
                style={{ backgroundColor: n.color, opacity: 0.85 }}
              />
              {n.label}
            </span>
          ))}
        </div>
      </div>

      {/* TOC-style finding — cues "more report below" */}
      <div className="mt-5 border-t border-background/15 pt-3 flex items-start gap-3 text-[12px] leading-snug text-background/75">
        <span className="font-mono text-[10px] tabular-nums text-background/65 pt-0.5">
          §
        </span>
        <span>
          Continue to{" "}
          <span className="text-background">Recommendations</span> for the two
          open positioning lanes.
        </span>
      </div>
    </section>
  );
}

function FrameTwo({
  armed,
  scrolled,
}: {
  armed: boolean;
  scrolled: boolean;
}) {
  return (
    <section
      className="px-7 pt-7 pb-8"
      style={{ height: FRAME_H }}
      aria-label="Frame two — positioning recommendations"
    >
      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.18em] text-background/65">
        <div className="flex items-center gap-2">
          <span style={{ color: PALETTE.light }}>Recommendations</span>
          <span style={{ color: PALETTE.border }}>/</span>
          <span>Positioning</span>
        </div>
        <span>§ 04 · for new entrants</span>
      </div>

      <h3 className="mt-4 font-serif font-medium text-[22px] leading-[1.1] tracking-tight text-background">
        Two frames the category hasn&rsquo;t claimed yet.
      </h3>
      <p className="mt-2 text-[12.5px] text-background/65 leading-relaxed max-w-[480px]">
        Both lanes have buyer signal and zero entrenched holdco voice. New
        entrants can own them on a six-to-twelve month window.
      </p>

      <div className="mt-5 border-t border-background/15 divide-y divide-background/15">
        {STRATEGIES.map((s, i) => (
          <StrategyRow
            key={s.n}
            s={s}
            visible={armed && scrolled}
            delayMs={200 + i * 180}
          />
        ))}
      </div>
    </section>
  );
}

function StrategyRow({
  s,
  visible,
  delayMs,
}: {
  s: Strategy;
  visible: boolean;
  delayMs: number;
}) {
  return (
    <div
      className="py-4"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transition: `opacity 600ms ease ${delayMs}ms, transform 700ms cubic-bezier(0.16,1,0.3,1) ${delayMs}ms`,
      }}
    >
      {/* Title block with Explore strategy in top-right */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-background/65">
            {s.eyebrow}
          </div>
          <h4 className="mt-1.5 font-serif text-[17px] leading-tight text-background">
            {s.name}
          </h4>
          <p className="mt-1.5 text-[11.5px] text-background/75 leading-snug">
            {s.angle}
          </p>
        </div>
        <UnderlineLink href="/reports/agency-sector" label="Explore strategy" />
      </div>

      {/* Two-column data block below: Journalists | Awards & Events */}
      <div className="mt-4 grid grid-cols-2 divide-x divide-background/15">
        <div className="pr-5">
          <MicroBlock
            label="Journalists"
            action={
              <UnderlineLink
                href="/reports/agency-sector"
                label="View more"
                size="xs"
              />
            }
          >
            {s.journalists.map((j) => (
              <MicroItem key={j.name} main={j.name} sub={j.sub} />
            ))}
          </MicroBlock>
        </div>
        <div className="pl-5">
          <MicroBlock
            label="Awards & Events"
            action={
              <UnderlineLink
                href="/reports/agency-sector"
                label="View more"
                size="xs"
              />
            }
          >
            {s.awardsEvents.map((item) => (
              <MicroItem key={item.name} main={item.name} sub={item.sub} />
            ))}
          </MicroBlock>
        </div>
      </div>
    </div>
  );
}

function MicroBlock({
  label,
  children,
  action,
}: {
  label: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 border-b border-background/15 pb-1.5">
        <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-background/70">
          {label}
        </div>
        {action}
      </div>
      <ul className="mt-2 space-y-1.5">{children}</ul>
    </div>
  );
}

function MicroItem({ main, sub }: { main: string; sub: string }) {
  return (
    <li className="leading-tight">
      <div className="text-[11px] text-background/95">{main}</div>
      <div className="mt-0.5 text-[8.5px] font-mono uppercase tracking-[0.08em] text-background/45">
        {sub}
      </div>
    </li>
  );
}

function UnderlineLink({
  href,
  label,
  size = "sm",
}: {
  href: string;
  label: string;
  size?: "xs" | "sm";
}) {
  const text =
    size === "xs"
      ? "text-[9px] tracking-[0.12em]"
      : "text-[10px] tracking-[0.14em]";
  return (
    <Link
      href={href}
      className={`shrink-0 font-mono uppercase ${text} text-background/70 hover:text-background border-b border-background/30 hover:border-background/60 pb-px transition-colors whitespace-nowrap`}
    >
      {label}
    </Link>
  );
}

function Stat({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent: string;
}) {
  return (
    <div>
      <div
        className="font-serif text-[22px] tabular-nums leading-none tracking-tight"
        style={{ color: accent }}
      >
        {value}
      </div>
      <div className="mt-1.5 text-[10px] font-mono uppercase tracking-[0.12em] text-background/65">
        {label}
      </div>
    </div>
  );
}
