"use client";

import { useEffect, useRef } from "react";

const CHARS = ["·", "∙", "•", "°", "◦"];
const COLS = 80;
const ROWS = 36;
const MAX_OPACITY = 0.28;

// Contour levels in normalised height units. Cells whose computed height
// falls near one of these levels light up — reading like topographic
// contour lines. Tighter tolerance = thinner, more delicate lines.
const LEVELS = [0.18, 0.32, 0.46, 0.60, 0.74];
const TOLERANCE = 0.032;

const N_BLOBS = 5;

// Each blob has its own long lifecycle: slow fade-in, hold (with drift),
// slow fade-out. When a lifecycle ends the blob respawns at a fresh
// position so the topology is never fixed.
interface Blob {
  cx0: number;
  cy0: number;
  ax: number;
  ay: number;
  fx: number;
  fy: number;
  sigma: number;
  amp0: number;
  ampOsc: number;
  fAmp: number;
  phase: number;
  birth: number; // ms
  duration: number; // ms
}

function makeBlob(now: number, jitterAge = 0): Blob {
  const duration = 35000 + Math.random() * 55000; // 35–90s lifecycle
  return {
    cx0: COLS * (0.1 + 0.8 * Math.random()),
    cy0: ROWS * (0.1 + 0.8 * Math.random()),
    // Smaller drift radius so terrain feels still rather than wandering.
    ax: COLS * (0.04 + 0.07 * Math.random()),
    ay: ROWS * (0.04 + 0.07 * Math.random()),
    // Very low drift frequencies (~0.005–0.012 Hz → 80–200s periods).
    fx: 0.004 + Math.random() * 0.008,
    fy: 0.004 + Math.random() * 0.008,
    sigma: 5 + Math.random() * 5,
    amp0: 0.65 + Math.random() * 0.35,
    ampOsc: 0.12 + Math.random() * 0.18,
    fAmp: 0.006 + Math.random() * 0.012,
    phase: Math.random() * Math.PI * 2,
    birth: now - jitterAge,
    duration,
  };
}

/**
 * AsciiWave (calm topographic mode)
 *
 * Continuous elevation field built from a small pool of slowly drifting,
 * long-lived Gaussian hills. Cells whose elevation falls near a contour
 * level glow softly. Each hill has its own ~35–90s birth → hold → death
 * lifecycle; a fresh hill respawns elsewhere when one ends — so the
 * landscape is rarely the same and sometimes nearly empty. A long-period
 * global presence envelope adds further breathing space, so the field
 * isn't always present.
 *
 * Motion is driven by very low frequencies (≈0.005–0.012 Hz, 80–200s
 * periods) so contour lines flow rather than scroll. prefers-reduced-motion
 * disables the loop.
 */
export function AsciiWave() {
  const cellRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const now0 = performance.now();
    // Seed initial blobs with random ages so they're at different points in
    // their lifecycles on first render.
    const blobs: Blob[] = Array.from({ length: N_BLOBS }, () => {
      const b = makeBlob(now0);
      return { ...b, birth: now0 - Math.random() * b.duration };
    });

    // Live state allocated once.
    const live = blobs.map(() => ({
      cx: 0,
      cy: 0,
      sigma2: 0,
      amp: 0,
    }));

    let rafId = 0;

    const tick = (t: number) => {
      const time = (t - now0) / 1000;

      // Global presence envelope: very long period, occasionally dips low so
      // the field genuinely recedes. Period ~140s, never quite zero so it
      // doesn't feel deliberately "off".
      const globalRaw =
        0.55 + 0.5 * Math.sin((time / 140) * 2 * Math.PI - 1.1);
      const globalPresence = Math.max(0.05, Math.min(1, globalRaw));

      // Update / cycle blobs.
      for (let j = 0; j < blobs.length; j++) {
        const b = blobs[j];
        const age = (t - b.birth) / b.duration;
        if (age >= 1) {
          blobs[j] = makeBlob(t);
          continue;
        }
        // Per-blob smooth lifecycle envelope (sin² → 0 at edges, 1 at peak).
        const lifecycle = Math.sin(Math.PI * Math.max(0, age));
        const lifecycleEnv = lifecycle * lifecycle;

        const cx = b.cx0 + b.ax * Math.sin(time * b.fx * 2 * Math.PI + b.phase);
        const cy =
          b.cy0 +
          b.ay * Math.cos(time * b.fy * 2 * Math.PI + b.phase * 1.3);
        const ampPulse =
          b.amp0 +
          b.ampOsc * Math.sin(time * b.fAmp * 2 * Math.PI + b.phase * 0.7);

        live[j].cx = cx;
        live[j].cy = cy;
        live[j].sigma2 = b.sigma * b.sigma;
        live[j].amp = ampPulse * lifecycleEnv;
      }

      const cells = cellRefs.current;
      for (let i = 0; i < cells.length; i++) {
        const el = cells[i];
        if (!el) continue;
        const x = i % COLS;
        const y = (i - x) / COLS;

        let h = 0;
        for (let j = 0; j < live.length; j++) {
          const b = live[j];
          if (b.amp <= 0.01) continue;
          const dx = x - b.cx;
          const dy = y - b.cy;
          const d2 = dx * dx + dy * dy;
          if (d2 > 7 * b.sigma2) continue;
          h += b.amp * Math.exp(-d2 / (2 * b.sigma2));
        }

        let pulse = 0;
        for (let k = 0; k < LEVELS.length; k++) {
          const d = Math.abs(h - LEVELS[k]);
          if (d < TOLERANCE) {
            const p = 1 - d / TOLERANCE;
            if (p > pulse) pulse = p;
          }
        }

        const opacity = pulse * MAX_OPACITY * globalPresence;
        el.style.opacity = opacity > 0.0015 ? opacity.toFixed(3) : "0";
      }

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const cells = [];
  for (let i = 0; i < COLS * ROWS; i++) {
    cells.push(
      <span
        key={i}
        ref={(el) => {
          cellRefs.current[i] = el;
        }}
        className="flex items-center justify-center"
        style={{ opacity: 0 }}
      >
        {CHARS[(i * 7 + Math.floor(i / COLS) * 3) % CHARS.length]}
      </span>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none select-none absolute inset-0 overflow-hidden font-mono text-foreground text-[9px] md:text-[10px] leading-none"
    >
      <div
        className="absolute inset-0 grid"
        style={{
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gridTemplateRows: `repeat(${ROWS}, 1fr)`,
        }}
      >
        {cells}
      </div>
    </div>
  );
}
