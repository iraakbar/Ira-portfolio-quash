import { logoStrip } from "@/content/site";

// Self-contained: remove <LogoStrip /> from app/page.tsx to drop it from the site.
export default function LogoStrip() {
  const items = logoStrip.names.map((name) => (
    <li key={name} className="shrink-0 whitespace-nowrap">
      {name}
    </li>
  ));

  return (
    <section aria-label={logoStrip.label}>
      <p className="page-x section-label mb-4">{logoStrip.label}</p>
      <div className="overflow-hidden border-y border-line bg-paper py-[22px] text-xl font-semibold tracking-[-0.02em] text-mute">
        {/* Moving strip. The list is repeated so the loop is seamless. */}
        <div className="marquee-mask motion-reduce:hidden">
          <div className="marquee-track flex w-max">
            <ul className="flex gap-16 pr-16">{items}</ul>
            <ul className="flex gap-16 pr-16" aria-hidden="true">
              {items}
            </ul>
          </div>
        </div>
        {/* Reduced motion: a still, wrapping list. */}
        <ul className="page-x hidden flex-wrap justify-center gap-x-16 gap-y-3 motion-reduce:flex">
          {items}
        </ul>
      </div>
    </section>
  );
}
