import Link from "next/link";
import ImageSlot from "@/components/image-slot";
import { type WorkItem, workHref } from "@/content/work";

// One work item: the image beside the copy on desktop, stacked above it on smaller screens. Links only when there is somewhere to go.
export default function WorkCard({ item }: { item: WorkItem }) {
  const href = workHref(item);
  // External links and password-protected case studies open in a new tab, so the
  // portfolio stays open behind the PDF viewer. Other pages on the site open in place.
  const newTab = Boolean(href && (!href.startsWith("/") || href.startsWith("/case-study/")));
  const content = (
    <>
      <ImageSlot
        src={item.image}
        alt={item.imageAlt}
        aspect="4/3"
        sizes="(min-width: 1024px) 520px, 100vw"
        className="w-full lg:self-stretch"
      />
      <div>
        <p className="mb-4 inline-flex rounded-full bg-line px-3 py-1 text-[13px] font-medium text-ink">
          Role: {item.role}
        </p>
        <h3 className={`text-title font-medium ${href ? "transition-colors group-hover:text-grey" : ""}`}>
          {item.title}
        </h3>
        <p className="mt-3 text-base font-medium">{item.project}</p>
        <p className="mt-1 text-sm text-grey">
          {item.category} · {item.years} · {item.company}
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-grey">{item.brief}</p>
        {href && (
          // The whole item is the link; this only looks like a button and inverts on hover.
          <span className="pill-button mt-6 group-hover:bg-ink group-hover:text-paper">
            {item.externalUrl ? (item.externalLabel ?? "Visit") : "Case study"}
            <span aria-hidden="true">↗</span>
          </span>
        )}
      </div>
    </>
  );

  // Side by side from 1024px. The image stretches to the text's height (never below 4:3).
  const className = "group grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-10";

  if (!href) return <article className={className}>{content}</article>;
  if (newTab) {
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
