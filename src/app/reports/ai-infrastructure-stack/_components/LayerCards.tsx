import { layers } from "./data";

// Detailed analysis card per layer. Stacked bottom-up (Layer 1 first) since the
// thesis is that narratives originate at the foundation and travel up.

export function LayerCards() {
  const ordered = [...layers].sort((a, b) => a.layer - b.layer);

  return (
    <div className="space-y-6 not-prose">
      {ordered.map((layer) => {
        return (
          <article
            key={layer.layer}
            className="relative rounded-2xl overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.7]"
              style={{ backgroundImage: "url('/sandscape.png')" }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle, color-mix(in srgb, var(--card) 50%, transparent) 0.4px, transparent 0.8px)",
                backgroundSize: "5px 5px",
              }}
            />
            <div className="relative p-3 lg:p-5">
              <div
                className="relative rounded-2xl overflow-hidden backdrop-blur-3xl backdrop-saturate-150 bg-foreground/[0.55] isolate"
                style={{
                  boxShadow: [
                    "inset 0 1px 0 0 rgba(255,255,255,0.5)",
                    "inset 0 0 0 1px rgba(255,255,255,0.18)",
                    "inset 0 -1px 0 0 rgba(43,32,22,0.08)",
                    "0 1px 2px 0 rgba(43,32,22,0.04)",
                    "0 8px 24px -8px rgba(43,32,22,0.18)",
                    "0 24px 48px -16px rgba(43,32,22,0.22)",
                  ].join(", "),
                }}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-2xl"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(255,255,255,0.18) 0%, transparent 100%)",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.65) 50%, transparent 100%)",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.22) 50%, transparent 100%)",
                  }}
                />

                <div className="relative p-6 lg:p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-6 flex-wrap">
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-background/70">
                        Layer {layer.layer} · {layer.bracket}
                        <span className="mx-2 text-background/30">•</span>
                        <span className="text-background">{layer.status}</span>
                      </p>
                      <h3 className="mt-2 font-serif text-[clamp(1.25rem,2vw,1.625rem)] text-background leading-tight tracking-tight">
                        {layer.name}
                      </h3>
                      <p className="mt-3 text-[14.5px] text-background/85 leading-relaxed max-w-[64ch]">
                        {layer.body}
                      </p>
                    </div>

                    <div className="flex flex-col items-end shrink-0">
                      <span className="font-serif text-3xl tabular-nums leading-none text-background">
                        {layer.velocity}
                      </span>
                      <span className="mt-1 text-[10px] font-mono uppercase tracking-[0.16em] text-background/70">
                        Velocity
                      </span>
                    </div>
                  </div>

                  {/* Body grid */}
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-x-10 gap-y-6 border-t border-background/15 pt-6">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-background/70">
                        Active signals
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {layer.signals.map((s) => (
                          <li
                            key={s}
                            className="grid grid-cols-[10px_minmax(0,1fr)] gap-x-3 text-[13.5px] text-background leading-snug"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2 w-1.5 h-1.5 rounded-full bg-background"
                            />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-background/70">
                        Key voices
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {layer.voices.map((v) => (
                          <li
                            key={v}
                            className="inline-flex items-center px-2.5 py-1 rounded-full border border-background/25 bg-background/5 text-[12px] text-background"
                          >
                            {v}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Propagation footer */}
                  {layer.propagatesTo && (
                    <div className="mt-6 border-t border-background/15 pt-4 flex items-center gap-3 flex-wrap">
                      <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-background/70">
                        Propagates to
                      </span>
                      <span className="inline-flex items-center gap-2 text-[13px] text-background">
                        <span
                          aria-hidden="true"
                          className="inline-block w-3 h-px bg-background"
                        />
                        Layer {layer.propagatesTo.layer} · {layer.propagatesTo.name}
                      </span>
                      <span className="text-background/30">·</span>
                      <span className="text-[12px] font-mono text-background/70">
                        Estimated lag: {layer.propagatesTo.lagDays}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
