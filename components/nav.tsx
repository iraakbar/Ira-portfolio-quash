"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { links } from "@/content/site";

const linkClass = "transition-colors hover:text-grey";

// Sticky header: hides while scrolling down, comes back on any scroll up.
export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) < 4) return;
      setHidden(y > last && y > 80);
      setScrolled(y > 0);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper transition-[transform,border-color] duration-300 ${
        scrolled ? "border-b border-line" : "border-b border-transparent"
      } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <nav
        aria-label="Main"
        className="page-x flex items-center justify-between gap-4 py-5 text-[15px] font-medium"
        // Keep the header visible while someone tabs through its links.
        onFocus={() => setHidden(false)}
      >
        <Link href="/" className={`flex items-center gap-3 ${linkClass}`}>
          <Image
            src="/avatar.webp"
            alt=""
            width={44}
            height={44}
            priority
            className="h-11 w-11 rounded-full object-cover"
          />
          <span className="sr-only tab:not-sr-only">Ira&apos;s Portfolio</span>
        </Link>
        <ul className="flex items-center gap-5 rounded-full border border-line bg-paper px-5 py-2.5">
          <li>
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Resume
            </a>
          </li>
          <li>
            <Link href="/#work" className={linkClass}>
              Work
            </Link>
          </li>
          <li>
            <Link href="/#contact" className={linkClass}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
