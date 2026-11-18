"use client";

import { useEffect, useRef } from "react";

const SPEED_PX_PER_SECOND = 30;
const RESUME_AFTER_TOUCH_MS = 3000;

// A horizontal list that drifts slowly and loops. The children are rendered twice by the
// caller (the second set marked data-copy) so the loop is seamless. It pauses on hover,
// keyboard focus, touch and while off screen, and never moves with reduced motion.
export default function AutoScroll({
  labelledBy,
  className,
  children,
}: {
  labelledBy: string;
  className: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = ref.current;
    if (!list || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let hovered = false;
    let focused = false;
    let touchedUntil = 0;
    let visible = true;
    let position = list.scrollLeft;
    let last = performance.now();
    let frame = 0;

    // Distance from the first card to the first copied card: one full loop.
    const loopWidth = () => {
      const copy = list.querySelector<HTMLElement>("[data-copy]");
      const first = list.firstElementChild as HTMLElement | null;
      return copy && first ? copy.offsetLeft - first.offsetLeft : 0;
    };

    const tick = (now: number) => {
      const elapsed = Math.min(now - last, 100);
      last = now;
      const paused = hovered || focused || now < touchedUntil || !visible;
      if (paused) {
        position = list.scrollLeft;
      } else {
        const loop = loopWidth();
        position += (SPEED_PX_PER_SECOND * elapsed) / 1000;
        if (loop > 0 && position >= loop) position -= loop;
        list.scrollLeft = position;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    const onEnter = () => (hovered = true);
    const onLeave = () => (hovered = false);
    const onFocusIn = () => (focused = true);
    const onFocusOut = () => (focused = list.contains(document.activeElement));
    const onTouch = () => (touchedUntil = performance.now() + RESUME_AFTER_TOUCH_MS);
    list.addEventListener("mouseenter", onEnter);
    list.addEventListener("mouseleave", onLeave);
    list.addEventListener("focusin", onFocusIn);
    list.addEventListener("focusout", onFocusOut);
    list.addEventListener("touchstart", onTouch, { passive: true });
    list.addEventListener("touchend", onTouch, { passive: true });
    const observer = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    observer.observe(list);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      list.removeEventListener("mouseenter", onEnter);
      list.removeEventListener("mouseleave", onLeave);
      list.removeEventListener("focusin", onFocusIn);
      list.removeEventListener("focusout", onFocusOut);
      list.removeEventListener("touchstart", onTouch);
      list.removeEventListener("touchend", onTouch);
    };
  }, []);

  return (
    <ul ref={ref} tabIndex={0} aria-labelledby={labelledBy} className={className}>
      {children}
    </ul>
  );
}
