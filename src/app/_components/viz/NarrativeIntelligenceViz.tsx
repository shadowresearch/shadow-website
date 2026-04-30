"use client";

/**
 * NarrativeIntelligenceViz
 *
 * A stylised, vertically-scrollable preview of a Shadow Narrative Cycle
 * Report. Built around the report design principles: declarative finding,
 * tight section labels, statistics with context, sparse colour, mono
 * metadata, lots of whitespace.
 */
export function NarrativeIntelligenceViz() {
  return (
    <div className="relative rounded-2xl bg-card overflow-hidden ring-1 ring-foreground/10 shadow-[0_18px_48px_-20px_rgba(0,0,0,0.25)]">
      {/* Title bar */}
      <div className="flex items-center justify-between gap-2 px-5 py-3 border-b border-border/60">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-[#88A374]" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            Narrative Cycle Report · Q1 2026
          </span>
        </div>
        <span className="text-[10px] font-mono text-muted-foreground/60">Live</span>
      </div>

      <div className="h-[460px] overflow-y-auto px-6 py-6 space-y-8">
        {/* Headline finding */}
        <section>
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            Headline finding
          </p>
          <h3 className="mt-2 font-serif text-[22px] leading-tight text-foreground">
            Agentic AI overtook generative AI as the dominant consumer
            narrative.
          </h3>
        </section>

        {/* Category share */}
        <section>
          <div className="flex items-baseline justify-between">
            <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
              Category share of voice
            </p>
            <p className="text-[10px] font-mono text-muted-foreground/70">
              Q1 2026
            </p>
          </div>
          <div className="mt-4 space-y-2.5">
            {[
              { label: "Agentic AI", v: 42, color: "#CC764F" },
              { label: "Generative AI", v: 28, color: "#977BA1" },
              { label: "Foundation models", v: 16, color: "#7489A3" },
              { label: "Open-source AI", v: 9, color: "#88A374" },
              { label: "Edge / on-device", v: 5, color: "#B27A53" },
            ].map((row) => (
              <div key={row.label} className="grid grid-cols-[120px_1fr_42px] items-center gap-3 text-[11px]">
                <span className="text-foreground/80">{row.label}</span>
                <div className="h-1.5 rounded-full bg-foreground/[0.06] overflow-hidden">
                  <div
                    className="h-full"
                    style={{ width: `${row.v}%`, backgroundColor: row.color }}
                  />
                </div>
                <span className="font-mono text-right text-muted-foreground tabular-nums">
                  {row.v}%
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Acceleration slope */}
        <section>
          <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
            Cycle compression
          </p>
          <div className="mt-3 flex items-end gap-4">
            <p className="font-serif text-3xl text-foreground leading-none tabular-nums">
              9–12<span className="text-base text-muted-foreground"> mo</span>
            </p>
            <p className="text-[11px] text-muted-foreground leading-tight">
              Down from 18–24 months in 2023.<br />
              Categories now peak and saturate in under a year.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-12 gap-[3px]">
            {Array.from({ length: 12 }).map((_, i) => {
              const v = Math.sin((i / 11) * Math.PI) * 0.6 + 0.25;
              return (
                <div
                  key={i}
                  className="rounded-sm bg-[#CC764F]/70"
                  style={{ height: `${v * 36 + 4}px`, opacity: 0.4 + v * 0.6 }}
                />
              );
            })}
          </div>
          <div className="mt-1 flex justify-between text-[9px] font-mono text-muted-foreground/60">
            <span>Jan</span>
            <span>Apr</span>
            <span>Jul</span>
            <span>Oct</span>
            <span>Dec</span>
          </div>
        </section>

        {/* AI citation grid */}
        <section>
          <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
            AI citation rate · category prompts
          </p>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {[
              { name: "ChatGPT", v: 31, delta: "+4" },
              { name: "Claude", v: 18, delta: "+2" },
              { name: "Perplexity", v: 24, delta: "+7" },
              { name: "Gemini", v: 12, delta: "−1" },
            ].map((p) => (
              <div
                key={p.name}
                className="border border-border/60 rounded-lg p-3"
              >
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  {p.name}
                </p>
                <div className="mt-1 flex items-baseline gap-2">
                  <p className="font-serif text-xl text-foreground tabular-nums">
                    {p.v}%
                  </p>
                  <p
                    className={`text-[10px] font-mono ${
                      p.delta.startsWith("+")
                        ? "text-[#88A374]"
                        : "text-[#CC764F]"
                    }`}
                  >
                    {p.delta} pts
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* White space */}
        <section>
          <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
            White space — positions available
          </p>
          <ul className="mt-3 space-y-2">
            {[
              "Agentic AI for regulated industries",
              "On-device inference economics",
              "Verifiable AI provenance",
            ].map((p) => (
              <li
                key={p}
                className="flex items-start gap-2.5 text-[12px] text-foreground/85"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 size-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: "#88A374" }}
                />
                {p}
              </li>
            ))}
          </ul>
        </section>

        {/* Footer note */}
        <p className="text-[10px] font-mono text-muted-foreground/60 pt-2 border-t border-border/40">
          Sources: Perigon (200k+ outlets) · DataForSEO · Direct LLM probes
        </p>
      </div>
    </div>
  );
}
