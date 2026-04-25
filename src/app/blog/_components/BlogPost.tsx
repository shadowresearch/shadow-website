import Link from "next/link";

interface SeriesPost {
  title: string;
  href: string;
  part: number;
}

interface BlogPostProps {
  title: string;
  subtitle?: string;
  author: string;
  date: string;
  series?: {
    name: string;
    part: number;
    total: number;
  };
  relatedPosts?: SeriesPost[];
  children: React.ReactNode;
}

export function BlogPost({
  title,
  subtitle,
  author,
  date,
  series,
  relatedPosts,
  children,
}: BlogPostProps) {
  return (
    <div className="flex flex-col bg-card">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            author: {
              "@type": "Person",
              name: author,
            },
            datePublished: date,
            publisher: {
              "@type": "Organization",
              name: "Shadow",
              url: "https://shadow.inc",
            },
          }),
        }}
      />

      {/* ━━━ Hero ━━━ */}
      <section className="flex items-start relative">
        <div className="relative z-10 w-full max-w-[960px] mx-auto px-8 md:px-16 pb-12 pt-24">
          <nav className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-wider mb-8">
            <Link
              href="/blog"
              className="hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            {series && (
              <>
                <span className="text-border">/</span>
                <span className="text-foreground truncate">{series.name}</span>
              </>
            )}
          </nav>
          <h1 className="mt-5 font-serif font-medium text-[clamp(2rem,4vw,3.5rem)] text-foreground leading-[1.1] tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7] max-w-xl">
              {subtitle}
            </p>
          )}
          <p className="mt-6 text-xs font-mono text-muted-foreground uppercase tracking-wider">
            <span>{author}</span>
            <span className="mx-2">·</span>
            <span>{date}</span>
          </p>
        </div>
      </section>

      {/* ━━━ Body ━━━ */}
      <article className="px-8 md:px-16 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <div className="space-y-6 text-base leading-relaxed text-foreground">
            {children}
          </div>

          {relatedPosts && relatedPosts.length > 0 && (
            <div className="mt-20 pt-10 border-t border-border">
              <h2 className="font-heading font-semibold text-lg text-foreground mb-6">
                Other posts in this series
              </h2>
              <div className="flex flex-col gap-3">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.href}
                    href={post.href}
                    className="flex items-center gap-3 text-sm text-primary underline hover:text-primary/80 transition-colors"
                  >
                    <span className="text-xs font-mono text-muted-foreground shrink-0">
                      Part {post.part}
                    </span>
                    <span>{post.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}

export function BlogH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading font-semibold text-2xl text-foreground mt-12 mb-4">
      {children}
    </h2>
  );
}

export function BlogH3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-heading font-semibold text-xl text-foreground mt-8 mb-3">
      {children}
    </h3>
  );
}

export function BlogBlockquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-2 border-primary pl-6 italic text-muted-foreground my-6">
      {children}
    </blockquote>
  );
}

export function BlogStat({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-medium text-foreground bg-muted/60 border border-border rounded-lg px-5 py-4 my-6">
      {children}
    </p>
  );
}
