import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies, getCaseStudyBySlug } from "../_data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};
  return {
    title: `${cs.team} | Case Studies | Shadow`,
    description: cs.summary,
    alternates: { canonical: `/case-studies/${cs.slug}` },
    openGraph: {
      title: `${cs.team} | Case Studies | Shadow`,
      description: cs.summary,
      type: "article",
      siteName: "Shadow",
    },
    twitter: {
      card: "summary_large_image",
      title: `${cs.team} | Case Studies | Shadow`,
      description: cs.summary,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  const otherStudies = caseStudies.filter((s) => s.slug !== cs.slug).slice(0, 3);

  return (
    <div className="flex flex-col bg-card">
      {/* ━━━ Hero ━━━ */}
      <section className="flex items-start relative">
        <div className="relative z-10 w-full max-w-[1425px] mx-auto px-8 md:px-16 pb-12 pt-24">
          <nav className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-wider mb-8">
            <Link
              href="/case-studies"
              className="hover:text-foreground transition-colors"
            >
              Case Studies
            </Link>
            <span className="text-border">/</span>
            <span className="text-foreground">{cs.descriptor}</span>
          </nav>
          <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.5rem)] text-foreground leading-[1.1] tracking-tight max-w-3xl">
            {cs.headline}
          </h1>
          <p className="mt-6 text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7] max-w-xl">
            {cs.summary}
          </p>
        </div>
      </section>

      {/* ━━━ Stats ━━━ */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16">
              {cs.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-[clamp(2.5rem,4vw,4rem)] text-foreground leading-none tabular-nums tracking-tight">
                    {stat.value}
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ Content ━━━ */}
      <article className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1425px] mx-auto px-8 md:px-16">
          <div className="max-w-[760px]">
            <p className="text-base text-muted-foreground leading-relaxed">
              We&apos;re putting the finishing touches on this case study. The
              full story, including process, deliverables, and results, is
              coming soon.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Want to learn more? Book a demo
            </Link>
          </div>
        </div>
      </article>

      {/* ━━━ More case studies ━━━ */}
      {otherStudies.length > 0 && (
        <section className="px-4 md:px-8 pb-12 md:pb-20">
          <div className="rounded-3xl bg-card overflow-hidden">
            <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                More case studies
              </p>
              <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherStudies.map((study) => (
                  <li key={study.slug}>
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="block group"
                    >
                      <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                        {study.descriptor}
                      </p>
                      <h3 className="mt-3 font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {study.team}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {study.headline}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* ━━━ CTA ━━━ */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-24 md:py-32">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-foreground leading-[1.04] tracking-tight max-w-2xl">
              Your team could be next.
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
              Book a demo and see how Shadow would work for your team and your
              clients.
            </p>
            <div className="mt-10 flex flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Book a demo
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-[13px] font-medium text-foreground hover:bg-muted/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                See all case studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
