import CarouselCard from "@/components/carousel-card";
import type { CarouselItem } from "@/content/site";

// Horizontal scroll with snap points, used by On stage and free time.
export default function Carousel({
  id,
  heading,
  items,
}: {
  id: string;
  heading: string;
  items: CarouselItem[];
}) {
  const headingId = `${id}-heading`;
  return (
    <section aria-labelledby={headingId} className="page-x mt-[18vh]">
      <h2 id={headingId} className="section-label">
        {heading}
      </h2>
      <ul
        tabIndex={0}
        aria-labelledby={headingId}
        className="mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4"
      >
        {items.map((item) => (
          <CarouselCard key={item.title} item={item} />
        ))}
      </ul>
    </section>
  );
}
