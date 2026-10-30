import Link from "next/link";
import ImageSlot from "@/components/image-slot";
import { type WorkItem, workHref } from "@/content/work";

// One work item: a large framed image with the copy underneath. The whole item is a link.
export default function WorkCard({ item }: { item: WorkItem }) {
  const external = Boolean(item.externalUrl);
  const content = (
    <>
      <ImageSlot
        src={item.image}
        alt={item.imageAlt}
        aspect="16/10"
        sizes="(min-width: 1056px) 960px, 100vw"
      />
      <div className="mt-6 max-w-[760px]">
        <h3 className="text-title font-medium transition-colors group-hover:text-grey">
          {item.title}
        </h3>
        <p className="mt-3 text-base font-medium">{item.project}</p>
        <p className="mt-1 text-sm text-grey">
          {item.category} · {item.years} · {item.company}
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-grey">{item.brief}</p>
        <p className="mt-5 text-sm font-medium">
          {external ? "Download App" : "Case study"} <span aria-hidden="true">↗</span>
        </p>
      </div>
    </>
  );

  const className = "group block";

  if (external) {
    return (
      <a href={workHref(item)} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }
  return (
    <Link href={workHref(item)} className={className}>
      {content}
    </Link>
  );
}
