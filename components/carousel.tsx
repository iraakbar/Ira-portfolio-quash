import AutoScroll from "@/components/auto-scroll";
import CarouselCard from "@/components/carousel-card";
import type { ElsewhereItem } from "@/content/site";

// Horizontal row of cards that scrolls on its own (see AutoScroll).
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
      <AutoScroll labelledBy={headingId} className="mt-8 flex gap-5 overflow-x-auto pb-4">
        {items.map((item, index) => (
          <CarouselCard key={item.title ?? item.kind} item={item} index={index} />
        ))}
        {/* Second set for a seamless loop; hidden from assistive tech and keyboard. */}
        {items.map((item, index) => (
          <CarouselCard key={`copy-${item.title ?? item.kind}`} item={item} index={index} copy />
        ))}
      </AutoScroll>
    </section>
  );
}
