import Link from "next/link";
import { hero, links } from "@/content/site";

const linkClass = "transition-colors hover:text-grey";

export default function Hero() {
  return (
    <section className="page-x pb-[16vh] pt-[22vh]">
      <p className="text-about font-medium text-grey">
        {hero.line1} {hero.line2}
      </p>
      <h1 className="mt-4 max-w-[860px] text-intro font-medium">
        {hero.intro} <span className="text-grey">{hero.introMiddle}</span>{" "}
        {hero.introHighlight}
      </h1>
      <ul className="mt-10 flex flex-wrap gap-6 text-sm font-medium">
        <li>
          <a href={links.resume} target="_blank" rel="noopener noreferrer" className={linkClass}>
            Resume ↗
          </a>
        </li>
        <li>
          <Link href="#work" className={linkClass}>
            Work
          </Link>
        </li>
        <li>
          <Link href="#contact" className={linkClass}>
            Contact
          </Link>
        </li>
      </ul>
    </section>
  );
}
