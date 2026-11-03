import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import { links } from "@/content/site";

export const metadata: Metadata = {
  title: "Case studies coming soon · Ira Akbar",
  robots: { index: false, follow: false },
};

// Where "Case study" points for work that doesn't have a write-up yet.
export default function ComingSoon() {
  return (
    <>
      <Nav />
      <main className="page-x pt-[16vh] text-center">
        <h1 className="font-serif text-[clamp(40px,6vw,72px)] leading-[0.95] tracking-[-0.04em]">
          Some case studies will be up by weekend!
        </h1>
        <p className="mx-auto mt-6 max-w-[560px] text-statement text-grey">
          Like everyone in my design community, I&apos;ve let the work get ahead of the portfolio.
          Taking a little time to catch it up.
        </p>
        <p className="mx-auto mt-4 max-w-[560px] text-statement">
          Happy to walk you through on call or coffee :)
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={links.email} className="pill-button">
            Email me
          </a>
          <Link href="/#work" className="pill-button">
            Back to work
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
