import Image from "next/image";

// Image with a fixed aspect ratio. Shows a plain grey box until a photo is supplied.
export default function ImageSlot({
  src,
  alt,
  aspect,
  sizes,
  className = "",
}: {
  src: string | null;
  alt: string;
  aspect: "4/3" | "4/5";
  sizes: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-card bg-wash ${
        aspect === "4/3" ? "aspect-[4/3]" : "aspect-[4/5]"
      } ${className}`}
    >
      {src && <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />}
    </div>
  );
}
