import { hero, links } from "@/content/site";
import { PillLink } from "@/components/pill";

export default function Hero() {
  return (
    <section className="page-x pb-[16vh] pt-[22vh]">
      <h1 className="text-hero font-medium">
        {hero.line1}
        <br />
        <span className="text-grey">{hero.line2}</span>
      </h1>
      <p className="mt-6 max-w-[560px] text-about text-grey">{hero.subline}</p>
      <div className="mt-8 flex flex-wrap gap-2">
        <PillLink href={links.resume} external>
          Resume
        </PillLink>
        <PillLink href="#work">Work</PillLink>
        <PillLink href="#contact">Contact</PillLink>
      </div>
    </section>
  );
}
