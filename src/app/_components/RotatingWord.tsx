"use client";

import { useEffect, useState } from "react";

type Props = {
  words: string[];
  intervalMs?: number;
  fadeMs?: number;
};

export function RotatingWord({ words, intervalMs = 2200, fadeMs = 600 }: Props) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const tick = setInterval(() => {
      setVisible(false);
      const swap = setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, fadeMs);
      return () => clearTimeout(swap);
    }, intervalMs);
    return () => clearInterval(tick);
  }, [words.length, intervalMs, fadeMs]);

  const widest = words.reduce((a, b) => (a.length >= b.length ? a : b));

  return (
    <em className="italic relative inline-block align-baseline">
      <span aria-hidden="true" className="invisible">
        {widest}
      </span>
      <span
        className="absolute left-0 top-0 isolate transition-opacity"
        style={{
          opacity: visible ? 1 : 0,
          transitionDuration: `${fadeMs}ms`,
        }}
      >
        <span
          aria-hidden="true"
          className="absolute inset-x-[-0.08em] bottom-[0.05em] top-[0.42em] -z-10 rounded-[2px]"
          style={{ backgroundColor: "#E0D3AF" }}
        />
        {words[index]}
      </span>
    </em>
  );
}
