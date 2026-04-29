"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ProgramAgentDemo } from "./ProgramAgentDemo";
import { ProgramFeed } from "./ProgramFeed";

/**
 * ProgramExecutionSection
 *
 * Outer section is taller than the viewport; the inner card is sticky to the
 * top so it pins while the user scrolls. Scroll progress through the section
 * drives a continuous fade-in of the headline and the right-hand demo.
 */
export function ProgramExecutionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setProgress(1);
      return;
    }

    const compute = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // The sticky child pins for (sectionHeight - vh) of scroll. Map that
      // window to 0→1 progress, but only consume the first ~55% of the pin
      // for the fade so the user sees the fully-revealed state for a beat
      // before the section releases.
      const scrolled = -rect.top;
      const total = el.offsetHeight - vh;
      if (total <= 0) {
        setProgress(1);
        return;
      }
      const raw = scrolled / (total * 0.75);
      const next = Math.max(0, Math.min(1, raw));
      setProgress((prev) => (Math.abs(prev - next) < 0.005 ? prev : next));
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  const fadeStyle = (start: number, duration = 0.14) => {
    const t = Math.max(0, Math.min(1, (progress - start) / duration));
    return {
      opacity: t,
      transform: `translateY(${(1 - t) * 14}px)`,
    };
  };

  return (
    <section
      ref={sectionRef}
      className="relative px-4 md:px-8 pt-12 md:pt-24 pb-2 md:pb-4"
      style={{ height: "150vh" }}
    >
      <div className="sticky top-4">
        <div className="w-full rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-10 md:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70 flex items-center gap-3">
                  <span className="inline-block w-7 h-px bg-muted-foreground/30" />
                  Program execution
                </div>
                <h2 className="mt-8 font-serif font-normal text-[clamp(2rem,4.4vw,3.75rem)] leading-[1.05] tracking-tight text-foreground">
                  <span className="block" style={fadeStyle(0)}>
                    The work that remembers.
                  </span>
                  <span
                    className="block not-italic italic font-light text-foreground/55"
                    style={fadeStyle(0.18)}
                  >
                    From signal to program.
                  </span>
                </h2>
                <div style={fadeStyle(0.36)}>
                  <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-md">
                    From mapping the narrative cycles and competitor claims
                    crowding their sector, to developing the position only
                    your client can defend, to building the program and
                    executing it — the same context follows your client
                    across the whole arc. Proposals, media, GEO, thought
                    leadership: one voice, one memory, one team.
                  </p>
                  <Link
                    href="/program-execution"
                    className="mt-8 inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors border-b border-foreground/30 hover:border-foreground/60 pb-1 w-fit"
                  >
                    Explore Program Execution
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
                <div className="mt-12" style={fadeStyle(0.18)}>
                  <ProgramFeed />
                </div>
              </div>
              <div style={fadeStyle(0.54)}>
                <ProgramAgentDemo start={progress >= 0.54} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
