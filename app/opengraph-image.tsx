import { placeholderShareImage, shareImageSize } from "@/lib/share-image";

export const alt = "Ira Akbar, Product Designer";
export const size = shareImageSize;
export const contentType = "image/png";

export default function Image() {
  return placeholderShareImage();
}
