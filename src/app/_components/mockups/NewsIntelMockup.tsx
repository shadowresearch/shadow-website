const articles = [
  {
    title: "Inworld AI's NPC technology is redefining character intelligence in games",
    source: "TechCrunch",
    date: "Apr 12, 2026",
    sentiment: "Positive",
  },
  {
    title: "The companies racing to build AI companions for entertainment",
    source: "Wired",
    date: "Apr 11, 2026",
    sentiment: "Neutral",
  },
  {
    title: "a16z leads $40M round into Inworld AI amid AI gaming boom",
    source: "The Information",
    date: "Apr 10, 2026",
    sentiment: "Positive",
  },
];

export function NewsIntelMockup() {
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
              Research recent coverage of Inworld AI over the last 7 days.
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
                search_news · Inworld AI · last 7 days
              </span>
              <span className="text-[10px] text-muted-foreground ml-auto">3 results</span>
            </div>

            {/* AI prose */}
            <div className="px-3 py-2.5">
              <p className="text-xs text-foreground mb-2.5 leading-relaxed">
                Found 3 articles covering Inworld AI this week — predominantly positive coverage around the Series B announcement and AI NPC technology:
              </p>

              {/* Article results */}
              <div className="flex flex-col gap-2">
                {articles.map((article) => (
                  <div
                    key={article.title}
                    className="rounded-lg border border-border bg-card px-3 py-2.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-medium text-foreground leading-snug mb-1 line-clamp-2">
                          {article.title}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-semibold text-muted-foreground">
                            {article.source}
                          </span>
                          <span className="text-[10px] text-muted-foreground">{article.date}</span>
                        </div>
                      </div>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded shrink-0 font-mono ${
                          article.sentiment === "Positive"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {article.sentiment}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
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
