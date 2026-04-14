interface ResourcePageProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function ResourcePage({ title, description, children }: ResourcePageProps) {
  return (
    <article className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="font-serif text-3xl md:text-4xl text-foreground leading-tight tracking-tight">
          {title}
        </h1>

        {/* Description */}
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* Divider */}
        <div className="mt-10 mb-10 border-t border-border" />

        {/* Body */}
        <div className="space-y-6 text-base leading-relaxed text-foreground">
          {children}
        </div>
      </div>
    </article>
  );
}

export function ResourceH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading font-semibold text-2xl text-foreground mt-12 mb-4">
      {children}
    </h2>
  );
}

export function ResourceH3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-heading font-semibold text-xl text-foreground mt-8 mb-3">
      {children}
    </h3>
  );
}

export function ResourceBlockquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-2 border-primary pl-6 italic text-muted-foreground my-6">
      {children}
    </blockquote>
  );
}
