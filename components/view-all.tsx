"use client";

import { useId, useState } from "react";
import WorkCard from "@/components/work-card";
import type { WorkItem } from "@/content/work";

// Work grid with a "View all" control that reveals the remaining cards in place.
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
      <ul id={gridId} className="mt-6 grid auto-rows-fr grid-cols-1 gap-3 tab:grid-cols-2">
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
        className="mt-3 flex w-full items-center justify-between rounded-card border border-ink bg-paper px-[18px] py-4 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
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
