import Link from "next/link";
import ImageSlot from "@/components/image-slot";
import { type WorkItem, workHref } from "@/content/work";

// The whole card is one link and inverts to black on hover.
export default function WorkCard({ item }: { item: WorkItem }) {
  const external = Boolean(item.externalUrl);
  const content = (
    <>
      <ImageSlot
        src={item.image}
        alt={item.imageAlt}
        aspect="4/3"
        sizes="(min-width: 700px) 480px, 100vw"
        className="!rounded-[2px] border border-line"
      />
      <div className="flex flex-1 flex-col px-2 pb-1.5 pt-4">
        <h3 className="text-title font-medium">
          {item.title}
          {external && " ↗"}
        </h3>
        <p className="mt-3 text-sm font-medium">{item.project}</p>
        <p className="mt-1 text-sm text-grey transition-colors group-hover:text-grey-soft">
          {item.category} · {item.years}
        </p>
        <p className="text-sm text-grey transition-colors group-hover:text-grey-soft">
          {item.company}
        </p>
        <p className="mt-3 text-sm leading-normal text-grey transition-colors group-hover:text-grey-soft">
          {item.brief}
        </p>
        <div className="mt-auto flex items-center justify-between pt-6 text-[13px] font-medium">
          <span>{external ? "Download App" : "Case study"}</span>
          <span aria-hidden="true" className="text-lg font-normal leading-none">
            ↗
          </span>
        </div>
      </div>
    </>
  );

  const className =
    "group flex h-full flex-col rounded-card border border-ink bg-paper p-[10px] transition-colors hover:bg-ink hover:text-paper";

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
