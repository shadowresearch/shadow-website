import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ResourcePage } from "../_components/ResourcePage";
import { resources, getResourceBySlug } from "../_data/resources";
import { resourceCrosslinks } from "../_data/crosslinks";
import { getResourceContent } from "../_content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return {};
  return {
    title: `${resource.title} — Shadow`,
    description: resource.description,
    openGraph: {
      title: resource.title,
      description: resource.description,
    },
  };
}

export default async function ResourceSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) notFound();

  const ContentComponent = await getResourceContent(slug);

  const crosslinkedSlugs = resourceCrosslinks[resource.slug] ?? [];
  const related = crosslinkedSlugs
    .map((s) => getResourceBySlug(s))
    .filter((r): r is NonNullable<typeof r> => r != null);

  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <div className="px-6 pt-10 pb-0">
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
            <Link href="/resources" className="hover:text-foreground transition-colors">
              Resources
            </Link>
            <span className="text-border">/</span>
            <span className="text-foreground truncate">{resource.category}</span>
          </nav>
        </div>
      </div>

      <ResourcePage title={resource.title} description={resource.description}>
        {ContentComponent ? (
          <ContentComponent />
        ) : (
          <p className="text-muted-foreground italic">
            This resource is being migrated. Full content coming soon.
          </p>
        )}
      </ResourcePage>

      {/* Related resources */}
      {related.length > 0 && (
        <section>
          <div className="px-8 py-6 border-y border-border">
            <h2 className="font-heading font-semibold text-xs uppercase tracking-widest text-muted-foreground">
              Related Guides
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-b border-border">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/resources/${r.slug}`}
                className="group flex flex-col gap-1 px-6 py-6 hover:bg-muted/20 transition-colors border-r border-b border-border last:border-r-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
              >
                <h3 className="font-heading font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                  {r.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {r.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
