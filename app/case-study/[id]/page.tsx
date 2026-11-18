import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import { links } from "@/content/site";
import { protectedCaseStudies } from "@/content/protected-case-studies";
import { work } from "@/content/work";
import Unlock from "./unlock";

type Props = { params: Promise<{ id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(protectedCaseStudies).map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const caseStudy = protectedCaseStudies[(await params).id];
  return {
    title: `${caseStudy?.title ?? "Case"} case study · Ira Akbar`,
    robots: { index: false, follow: false },
  };
}

// Password page for an encrypted case study PDF.
export default async function CaseStudyGate({ params }: Props) {
  const { id } = await params;
  const caseStudy = protectedCaseStudies[id];
  if (!caseStudy) notFound();

  // Year comes from the work card, e.g. "2023"; "2023 - 2024" uses the last year.
  const years = work.find((item) => item.slug === id)?.years;
  const endYear = years ? Number(years.match(/\d{4}/g)?.pop()) : NaN;
  const yearsAgo = new Date().getFullYear() - endYear;
  const age =
    Number.isFinite(yearsAgo) && yearsAgo > 0
      ? `Work from ${years}, about ${yearsAgo} year${yearsAgo === 1 ? "" : "s"} ago.`
      : null;

  return (
    <>
      <Nav />
      <main className="page-x pt-[16vh] text-center">
        <p className="text-lead text-grey">
          {caseStudy.title} case study{years && ` · ${years}`}
        </p>
        <h1 className="mt-3 font-serif text-[clamp(40px,6vw,72px)] leading-[0.95] tracking-[-0.04em]">
          This one&apos;s password protected.
        </h1>
        <p className="mx-auto mt-6 max-w-[520px] text-statement text-grey">
          {age && (
            <>
              {age}
              <br />
            </>
          )}
          Enter the password I shared with you to open it. Don&apos;t have one?{" "}
          <a
            href={links.email}
            className="border-b border-ink text-ink transition-colors hover:border-grey hover:text-grey"
          >
            Ask me
          </a>
          .
        </p>
        <Unlock id={id} file={caseStudy.file} />
      </main>
      <Footer />
    </>
  );
}
