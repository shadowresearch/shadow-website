import { palette, narratives, formatComma, type Priority } from "./data";

// Lifecycle classification table — narrative × media × search × AI × priority.
// Mirrors the priority taxonomy used in the recommendations section.

const PRIORITY_COLOR: Record<Priority, string> = {
  PRIMARY:   palette.dusk,
  SECONDARY: palette.lamplight,
  DEFEND:    palette.uv,
  MONITOR:   palette.cool,
  SUPPORT:   palette.shade,
  CONTEXT:   palette.shade,
  EXIT:      palette.shade,
};

export function LifecycleTable() {
  const rows = [...narratives].sort((a, b) => {
    const order: Priority[] = ["PRIMARY", "SECONDARY", "DEFEND", "MONITOR", "SUPPORT", "CONTEXT", "EXIT"];
    return order.indexOf(a.priority) - order.indexOf(b.priority);
  });

  return (
    <figure className="w-full">
      <figcaption className="mb-5 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          Narrative lifecycle × strategic priority
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          Eight narratives. Two are wide open. Most are overcrowded.
        </h3>
      </figcaption>

      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="py-2 pr-4 text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground font-normal">
                Narrative
              </th>
              <th className="py-2 px-3 text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground font-normal">
                Lifecycle
              </th>
              <th className="py-2 px-3 text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground font-normal text-right">
                Media (6mo)
              </th>
              <th className="py-2 px-3 text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground font-normal text-right">
                Search/mo
              </th>
              <th className="py-2 px-3 text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground font-normal text-right">
                AI / 60
              </th>
              <th className="py-2 pl-3 text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground font-normal text-right">
                Priority
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const c = PRIORITY_COLOR[r.priority];
              return (
                <tr key={r.key} className="border-b border-border/60">
                  <td className="py-3 pr-4 text-[14px] font-sans text-foreground">
                    {r.label}
                  </td>
                  <td className="py-3 px-3 text-[12px] font-mono text-muted-foreground">
                    {r.lifecycle}
                  </td>
                  <td className="py-3 px-3 text-[12px] font-mono text-foreground text-right tabular-nums">
                    {formatComma(r.mediaVol)}
                  </td>
                  <td className="py-3 px-3 text-[12px] font-mono text-foreground text-right tabular-nums">
                    {formatComma(r.searchVol)}
                  </td>
                  <td className="py-3 px-3 text-[12px] font-mono text-foreground text-right tabular-nums">
                    {r.aiMentions}
                  </td>
                  <td className="py-3 pl-3 text-right">
                    <span
                      className="inline-block px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.14em]"
                      style={{
                        color: c,
                        backgroundColor: `${c}22`,
                      }}
                    >
                      {r.priority}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: Perigon, DataForSEO, Shadow GEO Audit. Shadow analysis. As of 27 Apr 2026.
      </p>
    </figure>
  );
}
