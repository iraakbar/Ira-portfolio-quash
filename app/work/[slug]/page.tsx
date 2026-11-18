import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import { caseStudies, getCaseStudy } from "@/content/work";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getCaseStudy((await params).slug);
  if (!item) return {};

  const title = `${item.project} · ${item.category} case study · Ira Akbar`;
  const path = `/work/${item.slug}`;
  return {
    title,
    description: item.brief,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      siteName: "Ira Akbar",
      title,
      description: item.brief,
      url: path,
    },
    twitter: { card: "summary_large_image", title, description: item.brief },
  };
}

// Placeholder case study: the card copy as the intro, until Ira supplies the full content.
export default async function CaseStudy({ params }: Props) {
  const item = getCaseStudy((await params).slug);
  if (!item) notFound();

  return (
    <>
      <Nav />
      <main className="page-x pt-[16vh]">
        <p className="section-label">
          {item.category} · {item.years} · {item.company}
        </p>
        <h1 className="mt-4 max-w-[800px] text-hero font-medium">{item.title}</h1>
        <p className="mt-6 text-about">{item.project}</p>
        <p className="mt-6 max-w-[640px] text-about text-grey">{item.brief}</p>

        {/* Case study content to come from Ira. */}
        <div aria-hidden="true" className="mt-[12vh] aspect-[16/9] rounded-card border border-line bg-wash" />
      </main>
      <Footer />
    </>
  );
}
