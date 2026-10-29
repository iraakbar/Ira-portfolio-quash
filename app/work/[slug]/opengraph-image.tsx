import { placeholderShareImage, shareImageSize } from "@/lib/share-image";
import { caseStudies } from "@/content/work";

export const alt = "Ira Akbar case study";
export const size = shareImageSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export default function Image() {
  return placeholderShareImage();
}
