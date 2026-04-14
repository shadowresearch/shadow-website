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
        <section className="px-6 pb-20 border-t border-border pt-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-8">
              More in {resource.category}
            </h2>
            <div className="flex flex-col gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/resources/${r.slug}`}
                  className="group flex flex-col gap-1 bg-card border border-border rounded-xl px-5 py-4 hover:border-primary/40 hover:shadow-sm transition-all"
                >
                  <h3 className="font-heading font-semibold text-base text-foreground group-hover:text-primary transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {r.description}
                  </p>
                  <span className="mt-2 text-xs text-primary font-medium group-hover:underline">
                    Read &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
