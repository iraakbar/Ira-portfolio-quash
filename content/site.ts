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
  subtitle?: string;
  // Talk recording link. null until Ira supplies it.
  url?: string | null;
  linkLabel?: string;
  // Photo path in /public. null until Ira supplies it.
  image: string | null;
  // Which part of the photo to keep when it is cropped to 4:5.
  imagePosition?: string;
  imageAlt: string;
  // Extra photos. When present, the card crossfades through all of them.
  morePhotos?: { src: string; alt: string }[];
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
    title: "NIFT Gandhinagar",
    subtitle: "Guest lecture · Storytelling in Case Studies, Basics of UX Design",
    image: "/talks/nift-gandhinagar.webp",
    imagePosition: "right",
    imageAlt: "Ira waving to NIFT Gandhinagar students during an online guest lecture",
  },
  {
    title: "Scaler School of Technology",
    subtitle: "Guest lecture · Designing with Empathy",
    image: "/talks/scaler.png",
    imagePosition: "right",
    imageAlt: "Ira presenting a guest lecture to Scaler School of Technology over video call",
  },
];

export const freeTime: CarouselItem[] = [
  {
    title: "Act",
    subtitle: "Theatre, Short Films, wherever there's a good story to tell",
    image: "/free-time/act.webp",
    imageAlt: "Ira performing in a stage play",
    morePhotos: [{ src: "/free-time/act-film.webp", alt: "Ira in a scene from the short film series Nazar Na Lagey" }],
  },
  {
    title: "Sing",
    subtitle: "Mostly on Instagram and in karaoke bars",
    image: "/free-time/sing-karaoke.webp",
    imageAlt: "Ira singing karaoke at Road House Bluez",
    morePhotos: [{ src: "/free-time/sing-stage.webp", alt: "Ira singing live on stage at The Quad" }],
  },
  {
    title: "Make art",
    subtitle: "Paintings, embroidery, furniture. I love arts and crafts",
    image: "/free-time/art-painting.webp",
    imageAlt: "Ira's acrylic portrait of a boy among oleander flowers",
    morePhotos: [{ src: "/free-time/art-embroidery.webp", alt: "Ira's hand embroidery of two folk-art birds in a hoop" }],
  },
  {
    title: "Host",
    subtitle: "Cooking and hosting parties",
    image: "/free-time/host-table.webp",
    imageAlt: "A party spread Ira cooked: buns, dips, sandwiches and doughnuts",
    morePhotos: [{ src: "/free-time/host-toast.webp", alt: "Friends raising a toast over a dinner Ira hosted" }],
  },
  {
    title: "Pamper my cat",
    image: "/free-time/cat-hug.webp",
    imageAlt: "Ira hugging her ginger cat",
    morePhotos: [{ src: "/free-time/cat-sofa.webp", alt: "Ira's ginger cat peering over the back of a floral sofa" }],
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
