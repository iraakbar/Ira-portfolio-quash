"use client";

import { useId, useState } from "react";
import WorkCard from "@/components/work-card";
import type { WorkItem } from "@/content/work";

// Work list with a "View all" control that reveals the remaining cards in place.
// Hidden cards stay in the HTML so their links are still crawlable.
export default function ViewAll({
  items,
  visibleCount,
}: {
  items: WorkItem[];
  visibleCount: number;
}) {
  const [open, setOpen] = useState(false);
  const gridId = useId();

  return (
    <>
      <ul id={gridId} className="mt-8 flex flex-col gap-16 md:gap-24">
        {items.map((item, index) => (
          <li key={item.title} hidden={!open && index >= visibleCount}>
            <WorkCard item={item} />
          </li>
        ))}
      </ul>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={gridId}
        onClick={() => setOpen((value) => !value)}
        className="mx-auto mt-16 flex items-center gap-3 rounded-full border border-ink bg-paper px-6 py-2.5 text-[15px] font-medium transition-colors hover:bg-ink hover:text-paper md:mt-24"
      >
        {open ? "View less" : "View all"}
        <span
          aria-hidden="true"
          className={`text-lg font-normal leading-none transition-transform duration-[250ms] ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
    </>
  );
}
