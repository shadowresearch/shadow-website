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
    <article className="py-20 px-6">
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
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight tracking-tight">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-4 text-xl text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Author and date */}
        <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
          <span>{author}</span>
          <span className="text-border">&middot;</span>
          <span>{date}</span>
        </div>

        {/* Divider */}
        <div className="mt-10 mb-10 border-t border-border" />

        {/* Body */}
        <div className="space-y-6 text-base leading-relaxed text-foreground">
          {children}
        </div>

        {/* Related posts */}
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
