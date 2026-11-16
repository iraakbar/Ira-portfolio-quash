import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const title = "Ira Akbar, Product Designer";
const description =
  "Like everyone in my design community, I've let the work get ahead of the website. Taking a little time to catch it up.";

export const metadata: Metadata = {
  metadataBase: new URL("https://iraakbar.com"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "Ira Akbar", title, description, url: "/" },
  twitter: { card: "summary", title, description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
