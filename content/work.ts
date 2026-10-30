// The eight work cards. Copy is final: edit only with Ira's sign-off.
// Cards with a slug get a case study page at /work/[slug].
// Cards with an externalUrl link out and show a ↗.

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
    title: "When there's no app, the conversation is the interface",
    project: "A voice recruiter for construction workers",
    category: "Conversational Design",
    years: "2026",
    company: "Hunar.ai",
    brief:
      "Job apps didn't work for these workers, so I designed a Hindi-speaking recruiter that understands what work they want.",
    slug: "conversational-design",
    image: null,
    imageAlt: "Voice recruiter conversation flow for construction workers",
  },
  {
    title: "From months to days for a client's first campaign",
    project: "Hunar Voice",
    category: "UX/UI Design",
    years: "2024 - Present",
    company: "Hunar.ai",
    brief:
      "An API-only internal tool became a self-serve platform as monthly calls grew from 3.1M to 11M.",
    slug: "hunar-voice",
    image: null,
    imageAlt: "Hunar Voice self-serve campaign platform",
  },
  {
    title: "The app worked. People still didn't finish.",
    project: "An onboarding workflow for a quick-commerce company",
    category: "AI Workflow Design",
    years: "2026",
    company: "Hunar.ai",
    brief:
      "Candidates stalled before the final in-store visit. Voice agents followed up at the right moment, across days.",
    slug: "ai-workflow-design",
    image: null,
    imageAlt: "Voice agent follow-up workflow for candidate onboarding",
  },
  {
    title: "An AI that finds the law, without interpreting it",
    project: "JIVA",
    category: "AI Product Design",
    years: "2022 - 2023",
    company: "Parallel",
    brief:
      "Judges at the Karnataka High Court had minutes per hearing. I designed an assistant that finds the exact section and the right version, fast.",
    slug: "jiva",
    image: "/work/jiva.webp",
    imageAlt: "JIVA legal research assistant interface",
  },
  {
    title: "Bringing AI hiring into one place",
    project: "Hunar Connect",
    category: "Product Design",
    years: "2024 - Present",
    company: "Hunar.ai",
    brief:
      "CRM workflows for AI assessments, CV matching and walk-in interviews, used by 30+ clients.",
    slug: "hunar-connect",
    image: "/work/hunar-connect.webp",
    imageAlt: "Hunar Connect hiring CRM",
  },
  {
    title: "Users kept leaving for Excel, so I brought Excel in",
    project: "Apperture",
    category: "Product Design · B2B SaaS",
    years: "2021 - 2023",
    company: "Parallel",
    brief:
      "A spreadsheet-style way to query data that shaped the product's next phase.",
    slug: "apperture",
    image: "/work/apperture.webp",
    imageAlt: "Apperture spreadsheet-style data query interface",
  },
  {
    title: "Getting flyers to browse again",
    project: "BIAL Pulse",
    category: "Product Design · B2C",
    years: "2021 - 2022",
    company: "Parallel",
    brief:
      "After COVID, unplanned purchases at Bengaluru Airport fell from 25% to 14%. We brought the airport's offers to flyers' phones.",
    slug: "bial-pulse",
    image: "/work/bial-pulse.webp",
    imageAlt: "BIAL Pulse airport offers app",
  },
  {
    title: "Kotak Neo's first AI feature",
    project: "Kotak Securities",
    category: "UX Design · Fintech",
    years: "2023 - 2024",
    company: "Kotak",
    brief:
      "A chat assistant for stock and mutual fund investing that informed the beta launch.",
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
