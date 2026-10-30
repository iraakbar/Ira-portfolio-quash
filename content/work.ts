// The eight work cards. Copy is final: edit only with Ira's sign-off.
// Cards with a slug get a case study page at /work/[slug].
// Cards with an externalUrl link out to a live app.

export type WorkItem = {
  title: string;
  project: string;
  category: string;
  years: string;
  company: string;
  brief: string;
  slug?: string;
  externalUrl?: string;
  // Card image path in /public. null until Ira supplies it.
  image: string | null;
  imageAlt: string;
};

export const work: WorkItem[] = [
  {
    title: "When apps are a barrier, conversation becomes the interface.",
    project: "Voice AI for Construction Workers",
    category: "Conversational Design",
    years: "2026",
    company: "Hunar.ai",
    brief:
      "Workers signed up but went no further. Language barriers, varying literacy levels and unfamiliar app flows stood between them and potential jobs. I designed a multilingual voice recruiter that understood their work preferences, suggested matching gigs, and checked availability and interest through conversation.",
    slug: "conversational-design",
    image: "/work/conversational-design.webp",
    imageAlt: "Voice recruiter conversation flow for construction workers",
  },
  {
    title: "Making complex voice AI feel like an everyday tool",
    project: "Hunar Voice",
    category: "End-to-End Product Design",
    years: "2026",
    company: "Hunar.ai",
    brief:
      "Voice campaigns once ran through APIs operated by internal teams. I designed Hunar Voice from the ground up, shaping its brand identity, information architecture, core workflows and design library. Every decision helped turn a technical capability into a cohesive, self-serve product customers could comfortably use every day, as monthly calls grew from 3.1M to 11M.",
    slug: "hunar-voice",
    image: "/work/hunar-voice.webp",
    imageAlt: "Hunar Voice self-serve campaign platform",
  },
  {
    title: "Turning onboarding into a guided conversation",
    project: "Multi-stage conversational onboarding for a quick-commerce company",
    category: "AI Workflow Design",
    years: "2026",
    company: "Hunar.ai",
    brief:
      "Packers stalled at different stages, from uploading documents to visiting the store. The app showed the process, but couldn't address what was holding each person back. I designed a sequence of voice agents that used each packer's progress and previous conversations to offer focused guidance at the right moment.",
    slug: "ai-workflow-design",
    image: "/work/ai-workflow-design.webp",
    imageAlt: "Voice agent follow-up workflow for candidate onboarding",
  },
  {
    title: "Designing for a courtroom where every minute counts",
    project: "JIVA",
    category: "Zero-to-One Product Design",
    years: "2023",
    company: "Parallel",
    brief:
      "With cases piling up and limited time per hearing, finding the right information quickly mattered. I stepped into the unfamiliar world of the Karnataka High Court, researched how judges worked, and designed an AI assistant from the ground up to help them find and reference case-related documents during hearings.",
    slug: "jiva",
    image: "/work/jiva.webp",
    imageAlt: "JIVA legal research assistant interface",
  },
  {
    title: "Making complex hiring workflows easier to run",
    project: "Hunar Connect",
    category: "Product Design",
    years: "2025",
    company: "Hunar.ai",
    brief:
      "Hiring teams needed to manage candidates across AI assessments, CV matching and walk-in interviews. I designed connected workflows and reusable components that brought these tasks into one recruitment platform, used by 30+ clients.",
    slug: "hunar-connect",
    image: "/work/hunar-connect.webp",
    imageAlt: "Hunar Connect hiring CRM",
  },
  {
    title: "Making data exploration feel as familiar as a spreadsheet",
    project: "Apperture",
    category: "Zero-to-One Product Design",
    years: "2023",
    company: "Parallel",
    brief:
      "Users kept returning to Excel to work with their data. Working with the founders, I helped design a product analytics platform from the ground up, bringing query-building, data exploration and an AI assistant into a familiar, spreadsheet-style workspace.",
    slug: "apperture",
    image: "/work/apperture.webp",
    imageAlt: "Apperture spreadsheet-style data query interface",
  },
  {
    title: "Helping flyers discover more of the airport",
    project: "BIAL Pulse",
    category: "Product Design",
    years: "2022",
    company: "Parallel",
    brief:
      "As spontaneous airport shopping declined after COVID, Bengaluru Airport needed new ways to connect flyers with its shops and offers. I contributed to research and design for its loyalty app, using modular, personalised experiences to help flyers discover what was relevant to them.",
    slug: "bial-pulse",
    image: "/work/bial-pulse.webp",
    imageAlt: "BIAL Pulse airport offers app",
  },
  {
    title: "Exploring a conversational way to navigate investing",
    project: "Kotak Neo",
    category: "AI Feature Concept & UX Design · Fintech",
    years: "2023 - 2024",
    company: "Kotak Securities",
    brief:
      "I conceptualised and prototyped Kotak Neo's first AI feature, exploring how a chat assistant could help users navigate stocks and mutual funds. The proof of concept helped the team evaluate the experience and informed the feature's beta launch.",
    externalUrl: "https://neo.kotaksecurities.com/",
    image: "/work/kotak-neo.webp",
    imageAlt: "Kotak Neo AI chat assistant",
  },
];

export const visibleCount = 4;

export const caseStudies = work.filter(
  (item): item is WorkItem & { slug: string } => Boolean(item.slug),
);

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}

export function workHref(item: WorkItem) {
  return item.externalUrl ?? `/work/${item.slug}`;
}
