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
    "Hey! I'm Ira, a product designer. I've designed for HR teams, delivery executives, judges, jobseekers and airport flyers. Some needed a screen. Some didn't.",
};

export const hero = {
  intro: "Hey! I'm Ira, a product designer.",
  line1: "People are interesting.",
  line2: "That's where I start.",
  statement:
    "I've designed for HR teams, delivery executives, judges, jobseekers and airport flyers.",
  highlight: "Some needed a screen. Some didn't.",
};

export const about = {
  lead: "I'm leading product designer at Hunar AI.",
  body: "Most days I'm also writing the prompts behind our voice agents, sitting on client calls, or working out why a conversation went quiet halfway through. I also make the content and comms that reach our users, and share what I learn on LinkedIn.",
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
    "Cursor",
  ],
};

export type Testimonial = {
  name: string;
  role: string;
  // LinkedIn profile. Optional until Ira supplies it.
  linkedin?: string;
  // Paragraphs of the quote, without the quote marks.
  quote: string[];
  // Black-and-white photo in /public. null shows initials instead.
  photo: string | null;
};

export const testimonialsHeading = "What people say about me:";

export const testimonials: Testimonial[] = [
  {
    name: "Krishna Khandelwal",
    role: "Founder, Hunar.ai",
    linkedin: "https://www.linkedin.com/in/krishna-khandelwal/",
    quote: [
      "As a founder, you have a vision and a lot you want to say. Ira has a gift for finding the story in all of it and making it clear and compelling. She helped me turn our ideas for Hunar into a narrative that people could understand and investors could connect with, which was especially valuable during our fundraise.",
      "She has shaped how we think about design and the value we place on it at Hunar. She's someone any founder would be fortunate to have on their team.",
    ],
    photo: "/testimonials/krishna-khandelwal.webp",
  },
  {
    name: "Himanshu Kalra",
    role: "Co-founder, Parallel",
    linkedin: "https://www.linkedin.com/in/hkalra1/",
    quote: [
      "Ira is incredibly easy to work with. She grasps complex problems quickly, thinks beyond design, and takes ownership of responsibilities beyond what's expected of her. That made it easy for us to explore ideas, iterate quickly and ship without compromising on design quality.",
      "She's a true team player who puts her heart into the work. You can trust her to care about the product as a whole and do what it takes to move it forward.",
    ],
    photo: "/testimonials/himanshu-kalra.webp",
  },
  {
    name: "Urvashi Soni",
    role: "Principal Engineer, Hunar.ai",
    linkedin: "https://www.linkedin.com/in/urvashi-soni-58262b56/",
    quote: [
      "Ira is exceptionally organised and attentive to detail, which makes her a great partner to engineering. She thinks through how an experience should behave and brings clarity to the decisions and details we need to build it well.",
      "She has helped shape how design and engineering work together at Hunar, making collaboration smoother and easier for the team.",
    ],
    photo: "/testimonials/urvashi-soni.webp",
  },
];

export type ElsewhereItem = {
  // Small label before the title, e.g. "Talk" or "Art".
  kind: string;
  title?: string;
  text: string;
  linkLabel?: string;
  // null while the link is still to come from Ira.
  url?: string | null;
  // Photo path in /public.
  image: string | null;
  // Which part of the photo to keep when it is cropped to 4:5.
  imagePosition?: string;
  imageAlt: string;
  // Extra photos. When present, the card crossfades through all of them.
  morePhotos?: { src: string; alt: string }[];
};

export const elsewhere = {
  heading: "Elsewhere",
  intro: "Talks I've given, and the things I make when I'm not designing.",
  items: [
    {
      kind: "Talk",
      title: "India AI Impact Summit 2026",
      text: "Using Conversational AI to Spot Attrition Signals",
      linkLabel: "Watch",
      url: "https://lnkd.in/p/g_XQPnjX",
      image: "/talks/ai-impact-summit.webp",
      imageAlt: "Ira at the India AI Impact Summit 2026",
    },
    {
      kind: "Talk",
      title: "EkStep Voice AI Conference",
      text: "From App Drop-offs to Conversational Onboarding",
      linkLabel: "Watch",
      url: "https://lnkd.in/p/g9t9UZcT",
      image: "/talks/ekstep.webp",
      imageAlt: "Ira speaking on stage at the EkStep Voice AI Conference",
    },
    {
      kind: "Singing",
      text: "Singing and playing music, especially as a performer, lifts me up.",
      linkLabel: "YouTube",
      url: links.youtube,
      image: "/free-time/sing-karaoke.webp",
      imageAlt: "Ira singing karaoke at Road House Bluez",
      morePhotos: [
        { src: "/free-time/sing-stage.webp", alt: "Ira singing live on stage at The Quad" },
        { src: "/free-time/sing-ukulele.webp", alt: "Ira singing Window by Still Woozy on the ukulele" },
      ],
    },
    {
      kind: "Art",
      text: "I am obsessed with storytelling in paintings, it's a beautiful way to express yourself.",
      linkLabel: "Instagram",
      url: links.instagram,
      image: "/free-time/art-painting.webp",
      imageAlt: "Ira's acrylic portrait of a boy among oleander flowers",
      morePhotos: [
        { src: "/free-time/art-embroidery.webp", alt: "Ira's hand embroidery of two folk-art birds in a hoop" },
        { src: "/free-time/art-poster.webp", alt: "Ira's illustrated poster for The Queen's Gambit" },
      ],
    },
    {
      kind: "Acting",
      text: "I've been acting on stage, streets and on camera recently.",
      linkLabel: "Instagram",
      url: "https://www.instagram.com/jhatpatmicrofilms/",
      image: "/free-time/act.webp",
      imageAlt: "Ira performing in a stage play",
      morePhotos: [
        { src: "/free-time/act-film.webp", alt: "Ira in a scene from the short film series Nazar Na Lagey" },
        { src: "/free-time/act-stage2.webp", alt: "Ira performing on stage in a pink salwar kameez and patterned dupatta" },
      ],
    },
    {
      kind: "Guest lecture",
      title: "NIFT Gandhinagar",
      text: "Storytelling in Case Studies, Basics of UX Design",
      image: "/talks/nift-gandhinagar.webp",
      imagePosition: "right",
      imageAlt: "Ira waving to NIFT Gandhinagar students during an online guest lecture",
    },
    {
      kind: "Guest lecture",
      title: "Scaler School of Technology",
      text: "Designing with Empathy",
      image: "/talks/scaler.png",
      imagePosition: "right",
      imageAlt: "Ira presenting a guest lecture to Scaler School of Technology over video call",
    },
  ] as ElsewhereItem[],
};

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
