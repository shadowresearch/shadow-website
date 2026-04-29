"use client";

import { useEffect, useState } from "react";
import { ProductionLineCard } from "./ProductionLineCard";

interface CardDetails {
  runs: string[];
  summary: string;
}

interface CardData {
  slug: string;
  eyebrow: string;
  accent: string;
  hero: { value: number; suffix: string; label: string };
  secondary: { value: number; suffix: string; label: string }[];
  headline: string;
  body: string;
  details?: CardDetails;
}

export function ProductionLineCarousel({ cards }: { cards: CardData[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;
    const id = window.setTimeout(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 5000);
    return () => window.clearTimeout(id);
  }, [active, cards.length]);

  return (
    <div className="mt-12 md:mt-16 max-w-[1080px]">
      <div className="mb-6 flex items-center gap-6">
        <div className="flex items-center gap-2.5 h-2">
          {cards.map((card, i) => {
            const isActive = i === active;
            return (
              <button
                key={card.slug}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show case ${i + 1} of ${cards.length}`}
                aria-current={isActive}
                className="h-2 w-2 rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                style={{
                  backgroundColor: isActive
                    ? "#B27A53"
                    : "rgba(43, 32, 22, 0.18)",
                }}
              />
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setActive((active + 1) % cards.length)}
          aria-label={`Next: ${cards[(active + 1) % cards.length].eyebrow.split(" — ")[0]}`}
          className="group inline-flex items-center gap-2 leading-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          style={{ color: "#B27A53" }}
        >
          <span
            key={cards[(active + 1) % cards.length].slug}
            className="font-serif text-[15px] leading-none"
            style={{
              animation:
                "carousel-fade-in 360ms cubic-bezier(0.22, 1, 0.36, 1) both",
            }}
          >
            {cards[(active + 1) % cards.length].eyebrow.split(" — ")[0]}
          </span>
          <span
            aria-hidden="true"
            className="leading-none transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </button>
      </div>

      <div className="grid">
        {cards.map((card, i) => {
          const isActive = i === active;
          return (
            <div
              key={card.slug}
              style={{
                gridArea: "1 / 1",
                opacity: isActive ? 1 : 0,
                transform: isActive ? "translateY(0)" : "translateY(4px)",
                transition: isActive
                  ? "opacity 700ms cubic-bezier(0.4, 0, 0.2, 1) 220ms, transform 700ms cubic-bezier(0.22, 1, 0.36, 1) 220ms"
                  : "opacity 420ms cubic-bezier(0.4, 0, 0.2, 1), transform 420ms cubic-bezier(0.4, 0, 0.2, 1)",
                pointerEvents: isActive ? "auto" : "none",
                willChange: "opacity, transform",
              }}
              aria-hidden={!isActive}
            >
              <ProductionLineCard {...card} index={i} expanded />
            </div>
          );
        })}
      </div>
    </div>
  );
}
