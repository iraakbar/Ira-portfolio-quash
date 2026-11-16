import CopyEmail from "@/components/copy-email";

// Temporary holding page while the new portfolio is finished.
const resumeUrl = "/Ira-Akbar-Resume.pdf";

const linkClass =
  "text-xl font-medium underline decoration-1 underline-offset-[6px] transition-colors hover:text-grey md:text-2xl";

export default function Holding() {
  return (
    <div className="flex min-h-[100svh] flex-col px-4 text-center md:px-12">
      <header className="pt-8 md:pt-10">
        <p className="text-xl font-semibold tracking-[-0.02em] md:text-2xl">Ira’s Portfolio</p>
      </header>

      <main className="mx-auto flex max-w-[1100px] flex-1 flex-col items-center justify-center py-16">
        <h1 className="text-[clamp(26px,3.6vw,40px)] font-medium leading-[1.15] tracking-[-0.03em]">
          A designer redesigning her portfolio. Groundbreaking.
        </h1>
        <p className="mt-8 max-w-[580px] text-[clamp(17px,1.6vw,20px)] leading-[1.45] tracking-[-0.01em]">
          Like everyone in my design community, I’ve let the work get ahead of the website. Taking
          a little time to catch it up.
        </p>
        <div aria-hidden="true" className="mt-10 flex gap-3">
          <span className="h-[14px] w-[14px] rounded-full bg-line" />
          <span className="h-[14px] w-[14px] rounded-full bg-line" />
          <span className="h-[14px] w-[14px] rounded-full bg-line" />
        </div>
        <p className="mt-10 max-w-[600px] text-[clamp(17px,1.6vw,20px)] leading-[1.45] tracking-[-0.01em]">
          Until then, happy to walk you through what I’ve been building.{" "}
          <br className="hidden md:inline" />
          Over a call or a coffee, whichever you prefer.
        </p>
        <div className="mt-12 flex gap-12">
          <CopyEmail className={linkClass} />
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
            Resume
          </a>
        </div>
      </main>
    </div>
  );
}
