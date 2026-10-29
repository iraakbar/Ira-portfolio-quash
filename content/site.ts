// All homepage copy and links. Copy is final: edit only with Ira's sign-off.

export const siteUrl = "https://iraakbar.com";

// Paste the Google Search Console verification value here when Ira supplies it.
export const googleSiteVerification = "";

export const links = {
  email: "mailto:helloiraakbar@gmail.com",
  linkedin: "https://www.linkedin.com/in/iraakbar/",
  instagram: "https://www.instagram.com/_canvast_/",
  youtube: "https://www.youtube.com/channel/UCBHnP5uqW2PZJpRmNhLu6Vw",
  resume: "/Ira-Akbar-Resume.pdf",
  hunar: "https://www.hunar.ai/",
};

export const seo = {
  title: "Ira Akbar, Product Designer · Voice AI and Conversational Design",
  description:
    "I'm Ira, a product designer. I've designed for HR teams, delivery executives, judges and airport flyers. Some needed a screen. Some didn't.",
};

export const hero = {
  line1: "People are interesting.",
  line2: "That's where I start.",
  intro: "Hi! I'm Ira, a product designer.",
  introMiddle:
    "I've designed for HR teams, delivery executives, judges and airport flyers.",
  introHighlight: "Some needed a screen. Some didn't.",
};

// Single-colour black logos in /public/logos, shown at the same height.
export const logoStrip = {
  label: "Designed for teams at",
  logos: [
    { name: "Aditya Birla Capital", src: "/logos/aditya-birla-capital.png", width: 491, height: 193 },
    { name: "Career Launcher", src: "/logos/career-launcher.png", width: 300, height: 79 },
    { name: "Lloyds Metals and Energy", src: "/logos/lloyds-metals.png", width: 304, height: 38 },
    { name: "Tranzact AI", src: "/logos/tranzact.png", width: 659, height: 128 },
  ],
};

export const about = {
  lead: "I'm the lead product designer at Hunar AI.",
  body: "Most days I'm also writing the prompts behind our voice agents, sitting on client calls, or working out why a conversation went quiet halfway through. I also make the videos and comms that reach our users, and share what I learn on LinkedIn.",
  previouslyLabel: "previously at:",
  previously: ["Parallel", "Kotak Securities"],
  tools: [
    "Figma",
    "Claude Code",
    "ElevenLabs",
    "n8n",
    "GCP",
    "Framer",
    "Metabase",
    "Final Cut Pro",
  ],
};

export type CarouselItem = {
  title: string;
  subtitle: string;
  // Talk recording link. null until Ira supplies it.
  url?: string | null;
  linkLabel?: string;
  // Photo path in /public. null until Ira supplies it.
  image: string | null;
  imageAlt: string;
};

export const onStage: CarouselItem[] = [
  {
    title: "India AI Impact Summit 2026",
    subtitle: "Using Conversational AI to Spot Attrition Signals",
    linkLabel: "Watch talk",
    url: null,
    image: null,
    imageAlt: "Ira speaking at the India AI Impact Summit 2026",
  },
  {
    title: "EkStep Voice AI Conference",
    subtitle: "From App Drop-offs to Conversational Onboarding",
    linkLabel: "Watch talk",
    url: null,
    image: null,
    imageAlt: "Ira speaking at the EkStep Voice AI Conference",
  },
  {
    title: "Scaler School of Technology",
    subtitle: "Guest lecture · Designing with Empathy",
    image: null,
    imageAlt: "Ira giving a guest lecture at Scaler School of Technology",
  },
  {
    title: "NIFT Gandhinagar",
    subtitle: "Guest lecture · Storytelling in Case Studies, Basics of UX Design",
    image: null,
    imageAlt: "Ira giving a guest lecture at NIFT Gandhinagar",
  },
];

// Subtitles are placeholder copy until Ira supplies the final lines.
export const freeTime: CarouselItem[] = [
  {
    title: "Act",
    subtitle: "Theatre, whenever there's a stage",
    image: null,
    imageAlt: "Ira acting on stage",
  },
  {
    title: "Sing",
    subtitle: "Covers, mostly on YouTube",
    image: null,
    imageAlt: "Ira singing",
  },
  {
    title: "Make art",
    subtitle: "Paintings, shared on Instagram",
    image: null,
    imageAlt: "One of Ira's artworks",
  },
];

export const contact = {
  heading: "I'd love to hear from you.",
  subline: "Coffee's on me if the problem's interesting.",
  email: "helloiraakbar@gmail.com",
  socials: [
    { label: "LinkedIn", href: links.linkedin },
    { label: "Instagram", href: links.instagram },
    { label: "YouTube", href: links.youtube },
    { label: "Resume", href: links.resume },
  ],
  signOff: "Made with Figma, Claude Code and way too many call recordings.",
  copyright: "© 2026 Ira Akbar",
};
