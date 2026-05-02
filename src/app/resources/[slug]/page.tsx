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
  const canonical = `https://shadow.inc/resources/${resource.slug}`;
  return {
    title: `${resource.title} | Shadow`,
    description: resource.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      siteName: "Shadow",
      title: resource.title,
      description: resource.description,
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
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

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://shadow.inc/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Resources",
        item: "https://shadow.inc/resources",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: resource.title,
        item: `https://shadow.inc/resources/${resource.slug}`,
      },
    ],
  };

  return (
    <div className="flex flex-col bg-card">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Breadcrumb */}
      <div className="w-full max-w-[960px] mx-auto px-8 md:px-16 pt-16">
        <nav className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-wider">
          <Link href="/resources" className="hover:text-foreground transition-colors">
            Resources
          </Link>
          <span className="text-border">/</span>
          <span className="text-foreground truncate">{resource.category}</span>
        </nav>
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
        <section className="px-4 md:px-8 pb-12 md:pb-20">
          <div className="rounded-3xl bg-card overflow-hidden">
            <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Related Guides
              </p>
              <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/resources/${r.slug}`}
                      className="block group"
                    >
                      <h3 className="font-heading text-lg font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                        {r.title}
                      </h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {r.description}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
