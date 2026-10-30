import Link from "next/link";
import { hero, links } from "@/content/site";

const buttonClass =
  "inline-flex items-center rounded-lg border border-ink bg-paper px-5 py-2.5 text-base font-medium transition-colors hover:bg-ink hover:text-paper md:text-lg";

export default function Hero() {
  return (
    <section className="page-x pt-[22vh]">
      <h1 className="text-hero font-medium">
        {hero.line1}
        <br />
        {hero.line2}
      </h1>
      <p className="mt-4 text-lead text-grey">{hero.intro}</p>

      <p className="mt-16 max-w-[820px] text-statement md:mt-24">
        <span className="text-grey">{hero.introMiddle}</span>
        <br />
        {hero.introHighlight}
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a href={links.resume} target="_blank" rel="noopener noreferrer" className={buttonClass}>
          Resume
        </a>
        <Link href="#work" className={buttonClass}>
          Work
        </Link>
        <Link href="#contact" className={buttonClass}>
          Contact
        </Link>
      </div>
    </section>
  );
}
