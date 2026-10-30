import CarouselCard from "@/components/carousel-card";
import type { ElsewhereItem } from "@/content/site";

// Horizontal scroll with snap points.
export default function Carousel({
  id,
  heading,
  intro,
  items,
}: {
  id: string;
  heading: string;
  intro?: string;
  items: ElsewhereItem[];
}) {
  const headingId = `${id}-heading`;
  return (
    <section aria-labelledby={headingId} className="page-x mt-[18vh]">
      <h2 id={headingId} className="section-title">
        {heading}
      </h2>
      {intro && <p className="mt-3 text-about text-grey">{intro}</p>}
      <ul
        tabIndex={0}
        aria-labelledby={headingId}
        className="mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4"
      >
        {items.map((item, index) => (
          <CarouselCard key={item.title ?? item.kind} item={item} index={index} />
        ))}
      </ul>
    </section>
  );
}
