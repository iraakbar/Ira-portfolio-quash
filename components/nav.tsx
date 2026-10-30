import Link from "next/link";
import { links } from "@/content/site";

const linkClass = "transition-colors hover:text-grey";

export default function Nav() {
  return (
    <header className="page-x">
      <nav
        aria-label="Main"
        className="flex items-center justify-between gap-4 py-7 text-sm font-medium"
      >
        <Link href="/" className={linkClass}>
          Ira&apos;s Portfolio
        </Link>
        <ul className="flex items-center gap-6">
          <li>
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Resume ↗
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
