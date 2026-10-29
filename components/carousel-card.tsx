import ImageSlot from "@/components/image-slot";
import type { CarouselItem } from "@/content/site";

// Card used by both the On stage and free-time carousels:
// a headline on top, a 4:5 photo, and a one-line subtitle.
export default function CarouselCard({ item }: { item: CarouselItem }) {
  return (
    <li className="w-[240px] shrink-0 snap-start md:w-[280px]">
      <article className="flex h-full flex-col rounded-card border border-ink bg-paper p-[10px]">
        <h3 className="px-1 pb-3 pt-1 text-base font-medium">{item.title}</h3>
        <ImageSlot
          src={item.image}
          alt={item.imageAlt}
          aspect="4/5"
          sizes="(min-width: 768px) 280px, 240px"
          className="border border-ink"
        />
        <p className="px-1 pt-3 text-sm text-grey">
          {item.subtitle}
        </p>
        {item.linkLabel && (
          <p className="mt-auto px-1 pb-1 pt-2 text-sm font-medium">
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex gap-1"
              >
                {item.linkLabel}
                <span aria-hidden="true" className="text-grey transition-colors group-hover:text-ink">
                  ↗
                </span>
              </a>
            ) : (
              // Talk link still to come from Ira.
              <span className="text-grey">
                {item.linkLabel} ↗ [link to come]
              </span>
            )}
          </p>
        )}
      </article>
    </li>
  );
}
