import Image from "next/image";
import { logoStrip } from "@/content/site";

// Self-contained: remove <LogoStrip /> from app/page.tsx to drop it from the site.
export default function LogoStrip() {
  const set = (hidden: boolean, key: string) => (
    <ul key={key} className="flex shrink-0 items-center gap-16 pr-16" aria-hidden={hidden || undefined}>
      {logoStrip.logos.map((logo) => (
        <li key={logo.name} className="shrink-0">
          <Image
            src={logo.src}
            alt={hidden ? "" : logo.name}
            width={logo.width}
            height={logo.height}
            className="h-7 w-auto"
          />
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label={logoStrip.label}>
      <p className="page-x section-label mb-4">{logoStrip.label}</p>
      <div className="overflow-hidden py-[22px]">
        {/* Moving strip. The set repeats so the loop is seamless on wide screens. */}
        <div className="marquee-mask motion-reduce:hidden">
          <div className="marquee-track flex w-max">
            {set(false, "a")}
            {[1, 2, 3, 4, 5].map((n) => set(true, `copy-${n}`))}
          </div>
        </div>
        {/* Reduced motion: a still, wrapping row. */}
        <div className="page-x hidden justify-center motion-reduce:flex">
          <ul className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6">
            {logoStrip.logos.map((logo) => (
              <li key={logo.name}>
                <Image src={logo.src} alt={logo.name} width={logo.width} height={logo.height} className="h-7 w-auto" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
