import { ImageResponse } from "next/og";

export const shareImageSize = { width: 1200, height: 630 };

// Plain grey share image (the --wash token) until Ira supplies designed ones.
export function placeholderShareImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", background: "#F3F3F3" }} />,
    shareImageSize,
  );
}
