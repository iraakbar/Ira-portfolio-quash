import Link from "next/link";
import ImageSlot from "@/components/image-slot";
import { type WorkItem, workHref } from "@/content/work";

// One work item: the image at its original 4:3 shape with the copy beside it
// (stacked on mobile). Links only when there is somewhere to go.
export default function WorkCard({ item }: { item: WorkItem }) {
  const href = workHref(item);
  const external = Boolean(item.externalUrl);
  const content = (
    <>
      <ImageSlot
        src={item.image}
        alt={item.imageAlt}
        aspect="4/3"
        sizes="(min-width: 768px) 460px, 100vw"
      />
      <div>
        <h3 className={`text-title font-medium ${href ? "transition-colors group-hover:text-grey" : ""}`}>
          {item.title}
        </h3>
        <p className="mt-3 text-base font-medium">{item.project}</p>
        <p className="mt-1 text-sm text-grey">
          {item.category} · {item.years} · {item.company}
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-grey">{item.brief}</p>
        {href && (
          <p className="mt-5 text-sm font-medium">
            {external ? "Download App" : "Case study"} <span aria-hidden="true">↗</span>
          </p>
        )}
      </div>
    </>
  );

  const className = "group grid items-center gap-6 md:grid-cols-2 md:gap-10";

  if (!href) return <article className={className}>{content}</article>;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
