"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const RING_RADII = [
  0.78, 1.17, 1.56, 1.95, 2.34, 2.73, 3.32, 3.9, 4.49, 5.07, 5.85, 6.63, 7.61,
  8.58, 9.75, 11.12, 12.68, 14.43, 16.38, 18.72, 21.45, 24.57, 28.08, 31.98,
  37.05, 42.64, 48.88, 55.12, 61.36, 67.6,
];
const RING_EDGE_FALLOFF = RING_RADII.map((_, i) => {
  const t = i / (RING_RADII.length - 1);
  if (t < 0.5) return 1;
  const u = (t - 0.5) / 0.5;
  return Math.max(0, 1 - Math.pow(u, 1.6));
});
const RING_SEGMENTS = 110;

function ringPath(cx: number, cy: number, r: number, seed: number) {
  // Inner rings get all frequencies (noisy, organic); outer rings keep only
  // low-frequency components (smooth ovals). Mimics fbm contours.
  const innerBlend = Math.max(0, 1 - r / 14.8);
  let d = "";
  for (let i = 0; i <= RING_SEGMENTS; i++) {
    const theta = (i / RING_SEGMENTS) * Math.PI * 2;
    const low =
      0.16 * Math.sin(2 * theta + seed) +
      0.11 * Math.sin(3 * theta + seed * 1.71);
    const mid =
      0.08 * Math.sin(7 * theta + seed * 2.13) +
      0.05 * Math.sin(13 * theta + seed * 3.07);
    const hi =
      0.03 * Math.sin(23 * theta + seed * 4.41) +
      0.018 * Math.sin(37 * theta + seed * 5.7);
    const wobble = low + mid * (0.35 + 0.65 * innerBlend) + hi * innerBlend;
    const rr = r * (1 + wobble);
    const x = cx + rr * Math.cos(theta);
    const y = cy + rr * Math.sin(theta);
    d += i === 0 ? `M${x.toFixed(2)},${y.toFixed(2)}` : `L${x.toFixed(2)},${y.toFixed(2)}`;
  }
  return d + "Z";
}

interface ProductionLineCardProps {
  slug: string;
  eyebrow: string;
  hero: Stat;
  secondary: Stat[];
  headline: string;
  body: string;
  index: number;
  accent: string;
}

function useCountUp(target: number, revealed: boolean, delayMs: number) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!revealed) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(target);
      return;
    }
    const duration = 1500;
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    let raf = 0;
    let startTs = 0;
    const tick = (ts: number) => {
      if (!startTs) startTs = ts;
      const elapsed = ts - startTs - delayMs;
      if (elapsed < 0) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const t = Math.min(1, elapsed / duration);
      setValue(Math.round(target * easeOutCubic(t)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [revealed, target, delayMs]);
  return value;
}

export function ProductionLineCard({
  slug,
  eyebrow,
  hero,
  secondary,
  headline,
  body,
  index,
  accent,
}: ProductionLineCardProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setRevealed(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const peaks = [
    { x: 82, y: 22 },
    { x: 86, y: 58 },
    { x: 78, y: 18 },
  ];
  const { x: peakX, y: peakY } = peaks[index % peaks.length];
  const cardDelay = 120 + index * 180;

  const ringRefs = useRef<(SVGPathElement | null)[]>([]);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      ringRefs.current.forEach((p) => {
        if (p) p.style.opacity = "0.16";
      });
      return;
    }
    const N = RING_RADII.length;
    const T = 5800;
    const buildFrac = 0.62;
    const holdFrac = 0.16;
    const fadeFrac = 0.18;
    const peakOp = 0.55;
    const phaseOffset = index * 0.22 * T;
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    const start = performance.now();
    let raf = 0;
    function tick(now: number) {
      raf = requestAnimationFrame(tick);
      const p = (((now - start + phaseOffset) % T) + T) % T / T;
      for (let i = 0; i < N; i++) {
        const path = ringRefs.current[i];
        if (!path) continue;
        let op = 0;
        if (p < buildFrac) {
          const ringStart = (i / N) * buildFrac;
          const ringEnd = ringStart + (buildFrac / N);
          if (p < ringStart) op = 0;
          else if (p > ringEnd) op = peakOp;
          else op = ((p - ringStart) / (ringEnd - ringStart)) * peakOp;
        } else if (p < buildFrac + holdFrac) {
          op = peakOp;
        } else if (p < buildFrac + holdFrac + fadeFrac) {
          const ft = (p - buildFrac - holdFrac) / fadeFrac;
          op = peakOp * (1 - easeOutCubic(ft));
        } else {
          op = 0;
        }
        path.style.opacity = (op * RING_EDGE_FALLOFF[i]).toFixed(3);
      }
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [index]);
  const heroValue = useCountUp(hero.value, revealed, cardDelay);
  const sec0 = useCountUp(secondary[0].value, revealed, cardDelay + 220);
  const sec1 = useCountUp(secondary[1].value, revealed, cardDelay + 360);
  const secondaryValues = [sec0, sec1];

  const revealDelay = `${index * 120}ms`;

  return (
    <Link
      ref={ref}
      href={`/case-studies/${slug}`}
      className="group relative flex flex-col rounded-2xl bg-foreground/[0.018] border border-border/25 p-6 md:p-7 shadow-[0_8px_28px_-18px_rgba(20,16,12,0.18),0_2px_6px_-3px_rgba(20,16,12,0.06)] transition-all duration-300 ease-out hover:bg-foreground/[0.03] hover:-translate-y-1 hover:shadow-[0_28px_70px_-30px_rgba(20,16,12,0.4),0_8px_20px_-10px_rgba(20,16,12,0.18)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring will-change-transform"
      style={
        {
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translateY(0)" : "translateY(16px)",
          transition: `opacity 700ms ease-out ${revealDelay}, transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${revealDelay}, background-color 200ms ease-out, border-color 250ms ease-out, box-shadow 300ms ease-out`,
          "--accent": accent,
        } as React.CSSProperties
      }
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${accent}55`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "";
      }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="block w-full h-full"
        >
          {RING_RADII.map((r, ri) => {
            const seed = index * 7.13 + 11.3;
            return (
              <path
                key={ri}
                ref={(el) => {
                  ringRefs.current[ri] = el;
                }}
                d={ringPath(peakX, peakY, r, seed)}
                fill="none"
                stroke="#B27A53"
                strokeWidth={ri % 5 === 0 ? 0.5 : 0.3}
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                style={{ opacity: 0 }}
              />
            );
          })}
        </svg>
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-2xl motion-reduce:hidden"
        style={{
          boxShadow:
            "0 0 40px -8px rgba(20, 16, 12, 0.18), inset 0 1px 0 rgba(20, 16, 12, 0.08)",
          animation: `production-card-pulse 5s ease-in-out ${index * 1.1}s infinite`,
        }}
      />
      <div className="relative flex flex-col">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/80">
        {eyebrow}
      </div>

      <div className="mt-6">
        <div
          className="flex items-baseline motion-reduce:!opacity-100"
          aria-label={`${hero.value}${hero.suffix} ${hero.label}`}
          style={{
            animation: `hero-number-pulse 6s ease-in-out ${index * 1.4}s infinite`,
          }}
        >
          <span className="font-serif text-[clamp(2.75rem,5vw,4rem)] leading-none tabular-nums text-foreground">
            {heroValue}
          </span>
          <span className="font-serif text-[clamp(1.1rem,1.6vw,1.5rem)] leading-none ml-0.5 text-foreground/70">
            {hero.suffix}
          </span>
        </div>
        <p className="mt-2 text-[11.5px] uppercase tracking-[0.14em] font-mono text-muted-foreground/80">
          {hero.label}
        </p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4">
        {secondary.map((s, i) => (
          <div key={s.label} aria-label={`${s.value}${s.suffix} ${s.label}`}>
            <div className="flex items-baseline">
              <span className="font-serif text-[clamp(1.35rem,2vw,1.75rem)] leading-none text-foreground tabular-nums">
                {secondaryValues[i]}
              </span>
              <span className="font-serif text-[clamp(0.75rem,0.95vw,0.95rem)] leading-none text-foreground/70 ml-0.5">
                {s.suffix}
              </span>
            </div>
            <p className="mt-1.5 text-[10.5px] uppercase tracking-[0.14em] font-mono text-muted-foreground/75 leading-snug">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <hr className="mt-6 border-t border-border/50" />

      <p className="mt-4 font-serif text-[clamp(0.95rem,1.2vw,1.1rem)] leading-snug text-foreground">
        {headline}
      </p>
      <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
        {body}
      </p>

      <span className="mt-5 inline-flex items-center gap-1.5 text-[12.5px] text-foreground/80 group-hover:text-foreground transition-colors">
        Read case study
        <span
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      </span>
      </div>
    </Link>
  );
}
