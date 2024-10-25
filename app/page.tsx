"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";

const workArray = [
  {
    role: "Founding Designer",
    company: "Hunar AI",
    description:
      "Enhanced the overall candidate experience and refined a recruiter dashboard UX at Hunar AI, an AI powered frontline recruitment platform.",
    link: "https://www.hunar.ai/",
    linkLabel: "Website",
    image: "/hunar.svg",
  },
  {
    role: "Product Designer",
    company: "JIVA AI",
    description:
      "Helped building an AI Assistant for Judges in Karnataka High Court. Made for quick access of legal documents within the courtroom.",
    link: "",
    linkLabel: "Case Study",
    image: "/jiva.png",
  },

  {
    role: "Design Consultant (Current)",
    company: "Kotak Securities",
    description:
      "Currently working on increasing the discoverability of stock baskets on the platform.",
    link: "https://neo.kotaksecurities.com/",
    linkLabel: "Download App",
    image: "/kotak.png",
  },
  {
    role: "Founding Designer",
    company: "Apperture",
    description:
      "Contributed in turning a few post-its into a no-code data warehouse platform. Currently has 20 Unique Users.",
    link: "https://apperture.io",
    linkLabel: "Website",
    image: "/apperture.png",
  },
  {
    role: "Founding Team",
    company: "Quash",
    description:
      "Launched a Mobile Testing Platform for cohesive bug reporting.Currently in pre-seed stage with 10 Clients.",
    link: "https://quashbugs.com/",
    linkLabel: "Website",
    image: "/quash.png",
  },

  {
    role: "Product Designer",
    company: "Bangalore Pulse",
    description:
      "Designed an app for the loyalty program for flyers at Bangalore International Airport with R360.",
    link: "https://drive.google.com/file/d/1tfSa-LVLko2tojQZ5EtAylLnc3V66BKr/view?usp=drive_link",
    linkLabel: "Case Study",
    image: "/pulse.png",
  },
];

export default function Home() {
  const handleScroll = (targetId: any) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-scroll">
      <Header handleScroll={handleScroll} />

      <div className="w-full h-full pt-[52px] ">
        <section id="home">
          <div className="intro min-w-full px-7 py-20 flex flex-col items-start justify-center gap-5 md:gap-8 md:max-w-[895px] md:py-[180px] md:px-20 lg:px-[258px] ">
            <div className="flex flex-col flex-grow items-start justify-center gap-3 md:gap-4 w-full">
              <p className="text-gray-700 text-2xl md:text-[48px] font-bold">
                Hi! I’m Ira.
              </p>
              <div>
                <p className="text-gray-700 text-2xl md:text-[48px] font-bold md:leading-[66px]">
                  A Product Designer
                </p>{" "}
                <p className="text-gray-300 text-2xl md:text-[48px] font-bold md:leading-[66px]">
                  with management skills up her sleeve.
                </p>
              </div>
            </div>
            <Link
              href="https://drive.google.com/file/d/11LGtL-3M1hErNUvs-uPH_IBz1PhVLQql/view?usp=drive_link"
              target="_blank"
            >
              <button className="text-white flex px-5 py-[10px] justify-center items-center gap-2 rounded-full bg-gray-800 md:text-lg md:font-medium md:py-2 hover:bg-[#CFCFDB] hover:text-[#232333]">
                Resume
              </button>
            </Link>
          </div>
        </section>

        <section id="work">
          <div className="flex flex-col py-20 px-4 md:px-[120px] md:py-[72px] gap-6 md:gap-8">
            <p className="text-gray-300 text-base font-semibold md:text-[32px]">
              Selected Work
            </p>
            {workArray.map((work, index) => (
              <div
                key={index}
                className="work-card pl-4 pt-10 pb-6 md:py-11 md:pl-20 flex gap-5 flex-col md:flex-row md:justify-between md:items-center items-start bg-[#F9F9FC] rounded-xl"
              >
                <div className="flex flex-col items-start text-start ">
                  <p className="text-gray-600 text-[14px] md:text-[24px] font-semibold mb-1">
                    {work.role}
                  </p>
                  <p className="text-[#4B4B5F] text-[24px] md:text-[48px] font-semibold mb-2">
                    {work.company}
                  </p>

                  <p className="text-[#4B4B5F] text-[14px] md:text-[24px] font-[400] max-w-[234px] md:max-w-[414px] mb-6 md:mb-10">
                    {work.description}
                  </p>
                  <Link
                    target="_blank"
                    href={work.link}
                    className="flex px-5 md:px-[18px] py-[10px] justify-center items-center rounded-full border border-solid border-[#4B4B5F] text-[#4B4B5F] text-[14px] md:text-[24px] font-[500] hover:bg-[#CFCFDB]"
                  >
                    {work.linkLabel}
                  </Link>
                </div>
                <div>
                  <Image
                    src={
                      work.image === "/pulse.png"
                        ? "/pulse-mob.png"
                        : work.image
                    }
                    height={535}
                    width={600}
                    alt={work.company}
                    className={`${
                      work.image === "/pulse.png" && "-ml-2"
                    } md:hidden`}
                  />
                  <Image
                    src={work.image}
                    height={535}
                    width={600}
                    alt={work.company}
                    className="hidden md:flex"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}
