import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { googleSiteVerification, links, seo, siteUrl } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seo.title,
  description: seo.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Ira Akbar",
    title: seo.title,
    description: seo.description,
    url: "/",
    locale: "en_IN",
  },
  // Switch to "summary_large_image" once share images are added.
  twitter: {
    card: "summary",
    title: seo.title,
    description: seo.description,
  },
  verification: googleSiteVerification
    ? { google: googleSiteVerification }
    : undefined,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ira Akbar",
  jobTitle: "Lead Product Designer",
  url: siteUrl,
  worksFor: {
    "@type": "Organization",
    name: "Hunar AI",
    url: links.hunar,
  },
  sameAs: [links.linkedin, links.instagram, links.youtube],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
