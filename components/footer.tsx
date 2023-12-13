import Image from "next/image";
import Link from "next/link";
import React from "react";

const footerNavArray = [
  {
    icon: "/Instagram.svg",
    link: "https://www.instagram.com/_canvast_/",
  },
  {
    icon: "/Letter.svg",
    link: "iraakbar1@gmail.com",
  },
  {
    icon: "/YouTube.svg",
    link: "https://www.youtube.com/channel/UCBHnP5uqW2PZJpRmNhLu6Vw",
  },
  {
    icon: "/LinkedIn.svg",
    link: "https://www.linkedin.com/in/iraakbar/",
  },
];

const Footer = () => {
  return (
    <div className="w-full py-20 px-6 flex flex-col gap-8 md:gap-12 items-start justify-center md:pl-[126px] md:pt-[120px] md:pb-[200px] md:pr-[250px] ">
      <div className="flex flex-col gap-2 items-start justify-center">
        <p className="text-[#4B4B5F] text-[30px] md:text-[48px] font-[700]">
          Want to connect?
        </p>
        <p className="text-[#CFCFDB] text-[14px] md:text-[40px] font-[700]">
          Reach out for collaborations, or just a chat!
        </p>
      </div>
      <div className="flex items-center justify-center gap-8 md:gap-12">
        {footerNavArray.map((item, index) => (
          <>
            <Link
              className={`${item.icon === "/Letter.svg" ? "hidden" : "flex"}`}
              href={item.link}
              key={index}
              target="_blank"
            >
              <Image
                src={item.icon}
                height={32}
                width={32}
                alt={item.icon}
                className="md:hidden flex"
              />
              <Image
                src={item.icon}
                height={50}
                width={50}
                alt={item.icon}
                className="md:flex hidden"
              />
            </Link>
            <Link
              className={`${item.icon === "/Letter.svg" ? "flex" : "hidden"}`}
              href="mailto:iraakbar1@gmail.com"
              key={index}
              target="_blank"
            >
              <Image
                src={item.icon}
                height={32}
                width={32}
                alt={item.icon}
                className="md:hidden flex"
              />
              <Image
                src={item.icon}
                height={50}
                width={50}
                alt={item.icon}
                className="md:flex hidden"
              />
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Footer;
