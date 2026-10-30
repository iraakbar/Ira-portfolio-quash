"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const INTERVAL_MS = 3500;

// A 4:5 photo slot that crossfades through several photos on its own.
// With reduced motion it stays on the first photo.
export default function PhotoRotator({
  photos,
  sizes,
  delayMs = 0,
}: {
  photos: { src: string; alt: string }[];
  sizes: string;
  // Staggers cards so they don't all switch at the same moment.
  delayMs?: number;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let interval: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      interval = setInterval(() => setActive((i) => (i + 1) % photos.length), INTERVAL_MS);
    }, delayMs);
    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [photos.length, delayMs]);

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-card border border-ink bg-wash">
      {photos.map((photo, index) => (
        <Image
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          aria-hidden={index !== active || undefined}
          className={`object-cover transition-opacity duration-700 ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
