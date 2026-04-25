interface ResourcePageProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function ResourcePage({ title, description, children }: ResourcePageProps) {
  return (
    <>
      {/* ━━━ Hero ━━━ */}
      <section className="flex items-start relative">
        <div className="relative z-10 w-full max-w-[960px] mx-auto px-8 md:px-16 pb-12 pt-16">
          <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.5rem)] text-foreground leading-[1.1] tracking-tight">
            {title}
          </h1>
          <p className="mt-6 text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7] max-w-xl">
            {description}
          </p>
        </div>
      </section>

      {/* ━━━ Body ━━━ */}
      <article className="px-8 md:px-16 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <div className="space-y-6 text-base leading-relaxed text-foreground">
            {children}
          </div>
        </div>
      </article>
    </>
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
