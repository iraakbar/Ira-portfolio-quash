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
  // Which part of the photo to keep when it is cropped to 4:5.
  imagePosition?: string;
  imageAlt: string;
};

export const onStage: CarouselItem[] = [
  {
    title: "India AI Impact Summit 2026",
    subtitle: "Using Conversational AI to Spot Attrition Signals",
    linkLabel: "Watch talk",
    url: "https://lnkd.in/p/g_XQPnjX",
    image: "/talks/ai-impact-summit.webp",
    imageAlt: "Ira at the India AI Impact Summit 2026",
  },
  {
    title: "EkStep Voice AI Conference",
    subtitle: "From App Drop-offs to Conversational Onboarding",
    linkLabel: "Watch talk",
    url: "https://lnkd.in/p/g9t9UZcT",
    image: "/talks/ekstep.webp",
    imageAlt: "Ira speaking on stage at the EkStep Voice AI Conference",
  },
  {
    title: "Scaler School of Technology",
    subtitle: "Guest lecture · Designing with Empathy",
    image: "/talks/scaler.png",
    imagePosition: "right",
    imageAlt: "Ira presenting a guest lecture to Scaler School of Technology over video call",
  },
  {
    title: "NIFT Gandhinagar",
    subtitle: "Guest lecture · Storytelling in Case Studies, Basics of UX Design",
    image: "/talks/nift-gandhinagar.webp",
    imagePosition: "right",
    imageAlt: "Ira waving to NIFT Gandhinagar students during an online guest lecture",
  },
];

export const freeTime: CarouselItem[] = [
  {
    title: "Act",
    subtitle: "Theatre, Short Films, wherever there's a good story to tell",
    image: "/free-time/act.webp",
    imageAlt: "Ira performing in a stage play",
  },
  {
    title: "Sing",
    subtitle: "Mostly on Instagram and in karaoke bars",
    image: "/free-time/sing-karaoke.webp",
    imageAlt: "Ira singing karaoke at Road House Bluez",
  },
  {
    title: "Make art",
    subtitle: "Paintings, embroidery, furniture. I love arts and crafts",
    image: null,
    imageAlt: "One of Ira's artworks",
  },
  {
    title: "Host",
    subtitle: "Cooking and hosting parties",
    image: "/free-time/host-table.webp",
    imageAlt: "A party spread Ira cooked: buns, dips, sandwiches and doughnuts",
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
