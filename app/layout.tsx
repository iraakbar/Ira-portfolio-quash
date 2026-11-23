import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Instrument_Serif } from "next/font/google";
import { googleSiteVerification, links, seo, siteBanner, siteUrl } from "@/content/site";
import "./globals.css";

// Display serif for the hero headline only.
const serif = Instrument_Serif({ weight: "400", subsets: ["latin"], variable: "--font-serif" });

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
  twitter: {
    card: "summary_large_image",
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
  jobTitle: "Senior Product Designer",
  description: seo.description,
  url: siteUrl,
  image: `${siteUrl}/avatar-ira.webp`,
  email: "mailto:helloiraakbar@gmail.com",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "National Institute of Fashion Technology, Gandhinagar",
  },
  knowsAbout: ["Product design", "Conversational design", "Voice AI", "AI workflow design", "UX design"],
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
    <html lang="en" className={`${GeistSans.variable} ${serif.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {siteBanner && (
          <p className="bg-wash px-4 py-2 text-center text-[13px] text-grey">{siteBanner}</p>
        )}
        {children}
      </body>
    </html>
  );
}
