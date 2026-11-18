import { hero, links } from "@/content/site";

export default function Hero() {
  return (
    <section className="page-x pt-[12vh] text-center">
      <p className="text-lead text-grey">{hero.intro}</p>

      <div className="relative mt-6">
        {/* Decorative ASCII shape behind the headline. An image, so search engines skip it. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -inset-y-6 flex select-none items-center justify-center overflow-hidden"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- tiny static SVG, no optimisation needed */}
          <img
            src="/ascii-shape.svg"
            alt=""
            className="w-[360px] max-w-none [mask-image:radial-gradient(closest-side,#000_55%,transparent)] md:w-[576px]"
          />
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
        className="pill-button mt-8"
      >
        Resume
      </a>
    </section>
  );
}
