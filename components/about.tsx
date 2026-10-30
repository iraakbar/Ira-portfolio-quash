import { about } from "@/content/site";

export default function About() {
  return (
    <section aria-labelledby="about-heading" className="page-x mt-[18vh]">
      <h2 id="about-heading" className="section-title">
        About
      </h2>
      <div className="mt-8 max-w-[640px] space-y-4 text-about">
        <p>{about.lead}</p>
        <p>{about.body}</p>
      </div>
      <p className="mt-6 text-sm text-grey">
        {about.previouslyLabel} {about.previously.join(" · ")}
      </p>
      <ul className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium" aria-label="Tools">
        {about.tools.map((tool, index) => (
          <li key={tool} className="flex items-center gap-4">
            {tool}
            {index < about.tools.length - 1 && <span aria-hidden="true">•</span>}
          </li>
        ))}
      </ul>
    </section>
  );
}
