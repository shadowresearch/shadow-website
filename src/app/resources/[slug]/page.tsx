import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ResourcePage } from "../_components/ResourcePage";
import { resources, getResourceBySlug, getResourcesByCategory } from "../_data/resources";

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

  const related = getResourcesByCategory(resource.category)
    .filter((r) => r.slug !== resource.slug)
    .slice(0, 3);

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
        <p className="text-muted-foreground italic">
          This resource is being migrated. Full content coming soon.
        </p>
      </ResourcePage>

      {/* Related resources */}
      {related.length > 0 && (
        <section>
          <div className="px-8 py-6 border-y border-border">
            <h2 className="font-heading font-semibold text-xs uppercase tracking-widest text-muted-foreground">
              More in {resource.category}
            </h2>
          </div>
          <div className="grid border-b border-border" style={{ gridTemplateColumns: `repeat(${related.length}, 1fr)` }}>
            {related.map((r, i) => (
              <Link
                key={r.slug}
                href={`/resources/${r.slug}`}
                className={`group flex flex-col gap-1 px-6 py-6 hover:bg-card transition-colors ${i < related.length - 1 ? "border-r border-border" : ""}`}
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
