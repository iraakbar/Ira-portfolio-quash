import ImageSlot from "@/components/image-slot";
import PhotoRotator from "@/components/photo-rotator";
import type { ElsewhereItem } from "@/content/site";

// Elsewhere card: a 4:5 photo, then a "Kind · Title" headline, a line of text and an optional link.
export default function CarouselCard({ item, index = 0 }: { item: ElsewhereItem; index?: number }) {
  const sizes = "(min-width: 768px) 280px, 240px";
  return (
    <li className="w-[240px] shrink-0 snap-start md:w-[280px]">
      <article className="flex h-full flex-col">
        {item.image && item.morePhotos ? (
          <PhotoRotator
            photos={[{ src: item.image, alt: item.imageAlt }, ...item.morePhotos]}
            sizes={sizes}
            delayMs={index * 700}
          />
        ) : (
          <ImageSlot
            src={item.image}
            alt={item.imageAlt}
            aspect="4/5"
            sizes={sizes}
            position={item.imagePosition}
          />
        )}
        <h3 className="pt-4 text-base font-medium">
          {item.title ? (
            <>
              <span className="text-grey">{item.kind} · </span>
              {item.title}
            </>
          ) : (
            item.kind
          )}
        </h3>
        <p className="pt-1 text-sm text-grey">{item.text}</p>
        {item.linkLabel && (
          <p className="mt-auto pt-3 text-sm font-medium">
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gap-1 transition-colors hover:text-grey"
              >
                {item.linkLabel}
                <span aria-hidden="true">↗</span>
              </a>
            ) : (
              // Link still to come from Ira.
              <span className="text-grey">{item.linkLabel} ↗</span>
            )}
          </p>
        )}
      </article>
    </li>
  );
}
