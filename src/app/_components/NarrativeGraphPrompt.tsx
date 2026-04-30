"use client";

import { useEffect, useRef, useState } from "react";

const SUGGESTIONS = ["OpenAI", "Klarna", "climate tech", "DTC fintech"];

const LAYERS = [
  {
    label: "Media",
    color: "#977BA1",
    sample: "247 articles · sentiment +0.34 · 12 tier-1 outlets",
  },
  {
    label: "Search",
    color: "#7489A3",
    sample: "1.2k branded queries · 3 contested keywords",
  },
  {
    label: "Social",
    color: "#88A374",
    sample: "82 conversations · 4 emerging narratives",
  },
  {
    label: "AI",
    color: "#CC764F",
    sample: "Cited in 31% of category prompts · 2 visibility gaps",
  },
];

/**
 * NarrativeGraphPrompt
 *
 * A floating, chat-style prompt that lives inside the dark Narrative Graph
 * callout. The user types a company or category; on submit, the graph "reads"
 * across the four layers (media, search, social, AI) and reveals signal in a
 * staggered animation. Designed for the dark callout: glassmorphic pill,
 * generous focus state, soft shadow, and an up-arrow submit button.
 */
export function NarrativeGraphPrompt() {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Auto-focus on mount for a "ready to type" feel.
    inputRef.current?.focus({ preventScroll: true });
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = value.trim();
    if (!q || loading) return;
    setLoading(true);
    window.setTimeout(() => {
      setSubmitted(q);
      setLoading(false);
    }, 900);
  }

  function reset() {
    setSubmitted(null);
    setValue("");
    requestAnimationFrame(() => inputRef.current?.focus());
  }

  function pickSuggestion(s: string) {
    setValue(s);
    inputRef.current?.focus();
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      {!submitted ? (
        <>
          <form
            onSubmit={handleSubmit}
            className={`group relative rounded-2xl bg-white transition-all duration-300 ${
              focused
                ? "ring-1 ring-black/15 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.4)]"
                : "ring-1 ring-black/5 shadow-[0_18px_48px_-20px_rgba(0,0,0,0.3)]"
            }`}
          >
            <textarea
              ref={inputRef}
              rows={2}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e as unknown as React.FormEvent);
                }
              }}
              placeholder="Ask about a company or category…"
              spellCheck={false}
              autoComplete="off"
              disabled={loading}
              className="w-full bg-transparent text-foreground placeholder:text-muted-foreground/60 text-[15px] leading-relaxed px-5 pt-4 pb-2 focus:outline-none resize-none disabled:opacity-50"
            />
            <div className="flex items-center justify-between gap-2 px-3 pb-3 pt-1">
              <div className="flex items-center gap-1 text-muted-foreground">
                <button
                  type="button"
                  className="inline-flex items-center justify-center size-8 rounded-lg hover:bg-foreground/5 transition-colors"
                  aria-label="Attach"
                  tabIndex={-1}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 3.5V12.5M3.5 8H12.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 px-2.5 h-8 rounded-lg text-[13px] hover:bg-foreground/5 transition-colors"
                  tabIndex={-1}
                >
                  <span>Model</span>
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 px-2.5 h-8 rounded-lg text-[13px] hover:bg-foreground/5 transition-colors"
                  tabIndex={-1}
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
                    <rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
                    <rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
                    <rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                  <span>Integrations</span>
                </button>
              </div>
              <button
                type="submit"
                disabled={!value.trim() || loading}
                aria-label="Read the narrative graph"
                className={`inline-flex items-center justify-center size-8 rounded-lg transition-all duration-200 ${
                  value.trim() && !loading
                    ? "text-foreground hover:bg-foreground/5"
                    : "text-muted-foreground/50 cursor-not-allowed"
                }`}
              >
                {loading ? (
                  <span className="inline-flex gap-1">
                    <span className="size-1.5 rounded-full bg-current animate-bounce [animation-delay:-0.2s]" />
                    <span className="size-1.5 rounded-full bg-current animate-bounce [animation-delay:-0.1s]" />
                    <span className="size-1.5 rounded-full bg-current animate-bounce" />
                  </span>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M4 9.5L8 5.5L12 9.5M8 5.5V12.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 13.5H13"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      opacity="0.4"
                    />
                  </svg>
                )}
              </button>
            </div>
          </form>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground/70 mr-1">
              Try
            </span>
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => pickSuggestion(s)}
                className="px-3 py-1 rounded-full border border-foreground/15 text-xs text-muted-foreground hover:border-foreground/40 hover:text-foreground transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        </>
      ) : (
        <ResultPreview query={submitted} onReset={reset} />
      )}
    </div>
  );
}

function ResultPreview({
  query,
  onReset,
}: {
  query: string;
  onReset: () => void;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-center">
        <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground/70">
          Reading the landscape
        </p>
        <h3 className="mt-2 font-serif text-2xl md:text-3xl text-foreground tracking-tight">
          {query}
        </h3>
      </div>

      <div className="flex flex-col gap-3 max-w-xl mx-auto w-full">
        {LAYERS.map((layer, i) => (
          <div
            key={layer.label}
            className="pl-5 py-2.5 will-change-transform"
            style={{
              borderLeft: `3px solid ${layer.color}`,
              opacity: 0,
              transform: "translateX(-6px)",
              animation: `ngp-fade-in 420ms cubic-bezier(0.22, 0.61, 0.36, 1) ${
                i * 110
              }ms forwards`,
            }}
          >
            <p className="text-sm font-heading font-semibold text-foreground">
              {layer.label}
            </p>
            <p className="mt-1 text-xs md:text-[13px] text-muted-foreground leading-relaxed">
              {layer.sample}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 pt-2">
        <button
          type="button"
          onClick={onReset}
          className="text-xs text-muted-foreground hover:text-foreground border-b border-foreground/30 hover:border-foreground/70 pb-0.5 transition-colors"
        >
          ← Try another
        </button>
      </div>

      <style jsx>{`
        @keyframes ngp-fade-in {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
