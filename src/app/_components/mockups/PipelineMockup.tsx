const clients = [
  {
    name: "Inworld AI",
    status: "Active",
    dotColor: "bg-green-500",
    chipClass: "border-green-200 text-green-700 dark:border-green-800 dark:text-green-400",
    updated: "Updated 2h ago",
    category: "AI / Gaming",
  },
  {
    name: "Lovable",
    status: "Onboarding",
    dotColor: "bg-blue-500",
    chipClass: "border-blue-200 text-blue-700 dark:border-blue-800 dark:text-blue-400",
    updated: "Updated 1d ago",
    category: "Developer Tools",
  },
  {
    name: "OpenAI",
    status: "Active",
    dotColor: "bg-green-500",
    chipClass: "border-green-200 text-green-700 dark:border-green-800 dark:text-green-400",
    updated: "Updated 4h ago",
    category: "AI / Foundation",
  },
  {
    name: "Synthex AI",
    status: "Proposing",
    dotColor: "bg-amber-500",
    chipClass: "border-amber-200 text-amber-700 dark:border-amber-800 dark:text-amber-400",
    updated: "Updated 3d ago",
    category: "AI / Enterprise",
  },
  {
    name: "TikTok",
    status: "Active",
    dotColor: "bg-green-500",
    chipClass: "border-green-200 text-green-700 dark:border-green-800 dark:text-green-400",
    updated: "Updated 6h ago",
    category: "Consumer / Social",
  },
  {
    name: "Nova Labs",
    status: "New Inbound",
    dotColor: "bg-muted-foreground",
    chipClass: "border-border text-muted-foreground",
    updated: "Updated 5d ago",
    category: "Biotech",
  },
];

export function PipelineMockup() {
  return (
    <div
      className="w-full max-w-2xl mx-auto rounded-xl border border-border bg-card shadow-xl overflow-hidden"
      style={{ transform: "perspective(1200px) rotateY(-2deg)" }}
    >
      {/* Page header */}
      <div className="px-5 py-3.5 border-b border-border flex items-center gap-3">
        <span className="text-sm font-semibold text-foreground font-heading">Clients</span>
        <span className="text-xs text-muted-foreground">{clients.length} clients</span>

        {/* Filter bar */}
        <div className="ml-auto flex items-center gap-2">
          <select
            className="h-7 text-xs rounded-full border border-border bg-card text-muted-foreground px-2.5 appearance-none cursor-pointer"
            disabled
          >
            <option>All categories</option>
          </select>
          <select
            className="h-7 text-xs rounded-full border border-border bg-card text-muted-foreground px-2.5 appearance-none cursor-pointer"
            disabled
          >
            <option>All statuses</option>
          </select>
        </div>
      </div>

      {/* Client grid */}
      <div className="p-4 grid grid-cols-3 gap-3">
        {clients.map((client) => (
          <div
            key={client.name}
            className="rounded-lg p-4 border border-border bg-card h-48 flex flex-col justify-between"
          >
            <div>
              {/* Client name */}
              <p className="text-sm font-medium text-foreground mb-2">{client.name}</p>

              {/* Status chip */}
              <div
                className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-xs ${client.chipClass}`}
              >
                <div className={`h-1.5 w-1.5 rounded-full ${client.dotColor}`} />
                {client.status}
              </div>

              {/* Category */}
              <p className="text-[10px] text-muted-foreground mt-2">{client.category}</p>
            </div>

            {/* Updated time */}
            <p className="text-xs text-muted-foreground">{client.updated}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
