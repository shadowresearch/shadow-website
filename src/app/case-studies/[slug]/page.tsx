import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies, getCaseStudyBySlug } from "../_data";
import { GlassSection } from "../../_components/GlassSection";

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
    <div className="flex flex-col">
      {/* Hero */}
      <GlassSection>
        <section className="py-28 md:py-36 px-6 md:px-16 border-b border-border">
          <div className="max-w-3xl">
            <span className="text-xs font-sans text-muted-foreground tracking-widest">
              {cs.descriptor}
            </span>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl text-foreground leading-tight">
              {cs.headline}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {cs.summary}
            </p>
          </div>
        </section>
      </GlassSection>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {cs.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-6 md:px-16 py-12 ${i < cs.stats.length - 1 ? "sm:border-r border-b sm:border-b-0 border-border" : ""}`}
            >
              <span className="text-4xl font-heading font-semibold text-foreground tabular-nums">
                {stat.value}
              </span>
              <p className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Content placeholder */}
      <section className="border-b border-border">
        <div className="px-6 md:px-16 py-20">
          <div className="max-w-2xl">
            <p className="text-base text-muted-foreground leading-relaxed">
              We&apos;re putting the finishing touches on this case study. The full story — including process, deliverables, and results — is coming soon.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-foreground px-4 py-1.5 text-xs font-semibold text-background transition-all"
            >
              Want to learn more? Book a demo
            </Link>
          </div>
        </div>
      </section>

      {/* Other case studies */}
      {otherStudies.length > 0 && (
        <section className="border-b border-border">
          <div className="px-6 md:px-16 py-6 border-b border-border">
            <span className="text-xs font-sans text-muted-foreground tracking-widest">
              More case studies
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {otherStudies.map((study, i) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className={`group px-6 md:px-16 py-8 hover:bg-muted/20 transition-colors ${i < otherStudies.length - 1 ? "sm:border-r border-b sm:border-b-0 border-border" : ""}`}
              >
                <span className="text-xs font-sans text-muted-foreground tracking-widest">
                  {study.descriptor}
                </span>
                <h3 className="mt-2 font-heading font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                  {study.team}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {study.headline}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
