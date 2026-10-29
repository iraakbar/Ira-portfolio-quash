"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { type WorkItem, workHref } from "@/content/work";

const rowClass =
  "flex items-start justify-between gap-6 py-4 transition-colors hover:text-grey";

// "View all" control that opens a list panel of the remaining work.
export default function ViewAll({ items }: { items: WorkItem[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="mt-3">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between rounded-card border border-ink bg-paper px-[18px] py-4 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
      >
        View all
        <span
          aria-hidden="true"
          className={`text-lg leading-none transition-transform duration-[250ms] ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="mt-3 rounded-card border border-ink bg-paper px-[18px]"
      >
        <ul className="divide-y divide-line">
          {items.map((item) => {
            const external = Boolean(item.externalUrl);
            const row = (
              <>
                <span>
                  <span className="block text-base font-medium">{item.title}</span>
                  <span className="mt-1 block text-sm text-grey">
                    {item.project} · {item.category} · {item.years} · {item.company}
                  </span>
                  <span className="mt-1 block text-sm text-grey">{item.brief}</span>
                </span>
                <span className="shrink-0 text-[13px] font-medium text-grey">
                  {external ? "↗" : "Case study ↗"}
                </span>
              </>
            );
            return (
              <li key={item.title}>
                {external ? (
                  <a
                    href={workHref(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={rowClass}
                  >
                    {row}
                  </a>
                ) : (
                  <Link href={workHref(item)} className={rowClass}>
                    {row}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
