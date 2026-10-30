import Image from "next/image";

// Image with a fixed aspect ratio. Shows a plain grey box until a photo is supplied.
export default function ImageSlot({
  src,
  alt,
  aspect,
  sizes,
  position,
  className = "",
}: {
  src: string | null;
  alt: string;
  aspect: "16/10" | "4/5";
  sizes: string;
  position?: string;
  className?: string;
}) {
  return (
    <div
      className={`frame ${aspect === "16/10" ? "aspect-[16/10]" : "aspect-[4/5]"} ${className}`}
    >
      {src && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
          style={position ? { objectPosition: position } : undefined}
        />
      )}
    </div>
  );
}
