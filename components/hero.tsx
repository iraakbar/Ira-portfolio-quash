import { asciiShape } from "@/components/ascii-shape";
import { hero, links } from "@/content/site";

export default function Hero() {
  return (
    <section className="page-x pt-[12vh] text-center">
      <p className="text-lead text-grey">{hero.intro}</p>

      <div className="relative mt-6">
        {/* Decorative ASCII shape behind the headline. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -inset-y-6 flex select-none items-center justify-center overflow-hidden"
        >
          <pre className="font-mono text-[6px] leading-[1.15] text-ascii [mask-image:radial-gradient(closest-side,#000_55%,transparent)] md:text-[9px]">
            {asciiShape}
          </pre>
        </div>
        <h1 className="relative font-serif text-display">
          {hero.line1}
          <br />
          {hero.line2}
        </h1>
      </div>

      <p className="mx-auto mt-14 max-w-[720px] text-statement text-grey">
        {hero.statement}
        <br />
        <span className="text-ink">{hero.highlight}</span>
      </p>
      <a
        href={links.resume}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center rounded-full border border-ink bg-paper px-6 py-2.5 text-[15px] font-medium transition-colors hover:bg-ink hover:text-paper"
      >
        Resume
      </a>
    </section>
  );
}
