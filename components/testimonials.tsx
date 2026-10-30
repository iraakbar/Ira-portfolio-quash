import Image from "next/image";
import AutoScroll from "@/components/auto-scroll";
import { type Testimonial, testimonials } from "@/content/site";

function Card({ item, copy = false }: { item: Testimonial; copy?: boolean }) {
  const initials = item.name
    .split(" ")
    .map((part) => part[0])
    .join("");
  return (
    <li
      className={`flex w-[85vw] max-w-[560px] shrink-0 flex-col rounded-frame bg-wash p-6 md:p-8 ${
        copy ? "motion-reduce:hidden" : ""
      }`}
      data-copy={copy || undefined}
      aria-hidden={copy || undefined}
      inert={copy || undefined}
    >
      <figure className="flex h-full flex-col">
        <blockquote className="space-y-3 text-[15px] leading-relaxed">
          {item.quote.map((paragraph, index) => (
            <p key={index}>
              {index === 0 && "“"}
              {paragraph}
              {index === item.quote.length - 1 && "”"}
            </p>
          ))}
        </blockquote>
        <figcaption className="mt-auto flex items-center gap-3 pt-6">
          {item.photo ? (
            <Image
              src={item.photo}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
          ) : (
            <span
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-line text-xs font-medium text-grey"
            >
              {initials}
            </span>
          )}
          <span className="text-sm">
            {item.linkedin ? (
              <a
                href={item.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium transition-colors hover:text-grey"
              >
                {item.name} <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className="font-medium">{item.name}</span>
            )}
            <span className="block text-grey">{item.role}</span>
          </span>
        </figcaption>
      </figure>
    </li>
  );
}

// Short testimonials row before Work. It auto-scrolls once there are enough cards to loop.
export default function Testimonials() {
  const scrolls = testimonials.length >= 3;
  return (
    <section aria-labelledby="testimonials-heading" className="page-x mt-[14vh]">
      <h2 id="testimonials-heading" className="sr-only">
        Testimonials
      </h2>
      {scrolls ? (
        <AutoScroll labelledBy="testimonials-heading" className="flex gap-5 overflow-x-auto pb-4">
          {testimonials.map((item) => (
            <Card key={item.name} item={item} />
          ))}
          {testimonials.map((item) => (
            <Card key={`copy-${item.name}`} item={item} copy />
          ))}
        </AutoScroll>
      ) : (
        <ul className="flex gap-5 overflow-x-auto pb-4">
          {testimonials.map((item) => (
            <Card key={item.name} item={item} />
          ))}
        </ul>
      )}
    </section>
  );
}
