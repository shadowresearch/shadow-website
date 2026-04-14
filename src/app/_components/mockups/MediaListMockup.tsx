const journalists = [
  { name: "Cade Metz", outlet: "New York Times", beat: "AI & ML", recent: "14 articles/mo" },
  { name: "Kylie Robison", outlet: "The Verge", beat: "Tech Industry", recent: "18 articles/mo" },
  { name: "Will Knight", outlet: "Wired", beat: "AI & Robotics", recent: "10 articles/mo" },
  { name: "Devin Coldewey", outlet: "TechCrunch", beat: "Startups & AI", recent: "22 articles/mo" },
];

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).join("");
}

export function MediaListMockup() {
  return (
    <div
      className="w-full max-w-2xl mx-auto rounded-xl border border-border bg-card shadow-xl overflow-hidden"
      style={{ transform: "perspective(1200px) rotateY(-2deg)" }}
    >
      {/* Chat header */}
      <div className="px-4 py-3 border-b border-border flex items-center gap-2">
        <div className="w-5 h-5 rounded-md bg-foreground flex items-center justify-center shrink-0">
          <span className="text-[9px] font-bold text-background">S</span>
        </div>
        <span className="text-xs font-semibold text-foreground">Inworld AI</span>
        <span className="text-[10px] text-muted-foreground">· AI Chat</span>
      </div>

      <div className="px-4 py-4 flex flex-col gap-3">
        {/* User message */}
        <div className="flex justify-end">
          <div className="max-w-[75%] bg-muted rounded-lg rounded-tr-sm px-3 py-2 border border-border">
            <p className="text-xs text-foreground leading-snug">
              Build a media list for AI gaming and tech reporters who cover funding rounds.
            </p>
          </div>
        </div>

        {/* AI response */}
        <div className="flex gap-2">
          <div className="w-5 h-5 rounded-md bg-foreground flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-[9px] font-bold text-background">S</span>
          </div>
          <div className="flex-1 bg-muted rounded-lg rounded-tl-sm border border-border overflow-hidden">
            {/* Tool call banner */}
            <div className="px-3 py-2 border-b border-border flex items-center gap-2">
              <span className="text-[10px] font-mono bg-card text-muted-foreground px-1.5 py-0.5 rounded border border-border">
                build_media_list · AI gaming · funding
              </span>
              <span className="text-[10px] text-muted-foreground ml-auto">4 journalists</span>
            </div>

            {/* Prose */}
            <div className="px-3 pt-2.5 pb-1">
              <p className="text-xs text-foreground leading-relaxed">
                Built a media list of 4 journalists covering AI, gaming, and startup funding — each with strong readership in your target audience:
              </p>
            </div>

            {/* Journalist list */}
            <div className="flex flex-col divide-y divide-border">
              {journalists.map((j) => (
                <div key={j.name} className="flex items-center gap-3 px-3 py-2.5">
                  {/* Avatar */}
                  <div className="w-6 h-6 rounded-md bg-muted border border-border flex items-center justify-center shrink-0">
                    <span className="text-[9px] font-semibold text-muted-foreground">
                      {initials(j.name)}
                    </span>
                  </div>

                  {/* Name + outlet */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-medium text-foreground leading-none mb-0.5">{j.name}</p>
                    <p className="text-[10px] text-muted-foreground">{j.outlet}</p>
                  </div>

                  {/* Beat tag */}
                  <span className="text-[9px] font-mono bg-card text-muted-foreground px-1.5 py-0.5 rounded border border-border whitespace-nowrap">
                    {j.beat}
                  </span>

                  {/* Volume */}
                  <span className="text-[10px] text-muted-foreground whitespace-nowrap hidden sm:block">
                    {j.recent}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="px-4 py-3 border-t border-border">
        <div className="rounded-lg border border-border bg-muted px-3 py-2">
          <span className="text-xs text-muted-foreground">Ask Shadow anything about Inworld AI...</span>
        </div>
      </div>
    </div>
  );
}
