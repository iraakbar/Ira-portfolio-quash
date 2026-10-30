import { hero, links } from "@/content/site";

export default function Hero() {
  return (
    <section className="page-x pt-[22vh]">
      <p className="text-lead text-grey">{hero.intro}</p>
      <h1 className="mt-3 text-hero font-medium">
        {hero.line1}
        <br />
        {hero.line2}
      </h1>

      <p className="mt-16 max-w-[820px] text-statement md:mt-24">
        <span className="text-grey">{hero.statement}</span>
        <br />
        {hero.highlight}
      </p>
      <a
        href={links.resume}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center rounded-lg border border-ink bg-paper px-5 py-2.5 text-base font-medium transition-colors hover:bg-ink hover:text-paper md:text-lg"
      >
        Resume
      </a>
    </section>
  );
}
