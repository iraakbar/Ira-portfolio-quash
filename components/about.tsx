import { about } from "@/content/site";
import { Pill } from "@/components/pill";

export default function About() {
  return (
    <section aria-labelledby="about-heading" className="page-x mt-[18vh]">
      <h2 id="about-heading" className="section-label">
        About
      </h2>
      <div className="mt-6 max-w-[640px] space-y-4 text-about">
        <p>{about.lead}</p>
        <p>{about.body}</p>
      </div>
      <p className="mt-6 text-sm text-grey">
        {about.previouslyLabel} {about.previously.join(" · ")}
      </p>
      <ul className="mt-8 flex flex-wrap gap-2" aria-label="Tools">
        {about.tools.map((tool) => (
          <li key={tool}>
            <Pill>{tool}</Pill>
          </li>
        ))}
      </ul>
    </section>
  );
}
