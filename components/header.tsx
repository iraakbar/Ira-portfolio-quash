"use client";
import Link from "next/link";
import React, { useState } from "react";

const headerNavArray = [
  { label: "Ira Akbar", value: "home" },
  { label: "Work", value: "work" },
  { label: "Contact", value: "contact" },
];

const Header = ({ handleScroll }: any) => {
  const [selectedNav, setselectedNav] = useState("home");
  return (
    <div className="fixed top-0 w-full flex justify-between items-center h-[52px] px-4 md:h-[72px] md:px-[120px] bg-background/80 backdrop-blur-sm ">
      <div className="hidden md:flex item-center gap-8 ">
        {headerNavArray.map((el, index) => (
          <p
            key={index}
            className={`${
              selectedNav === el.value ? "text-black" : "text-[#CFCFDB]"
            } cursor-pointer md:text-2xl md:font-semibold`}
            onClick={(e) => {
              setselectedNav(el.value);
              handleScroll(el.value);
            }}
          >
            {el.label}
          </p>
        ))}
      </div>
      <p
        className={` text-black text-base flex font-semibold cursor-pointer md:hidden`}
      >
        Ira Akbar
      </p>
      <Link
        href="https://drive.google.com/file/d/1jU5aKsnAp4RvQzb6-BycEK7ZCyIgYzBC/view?usp=drive_link"
        target="_blank"
      >
        <button className="text-white flex px-5 py-[10px] justify-center items-center gap-2 rounded-full bg-gray-800 md:text-lg md:font-medium md:py-2 hover:bg-[#CFCFDB] hover:text-[#232333]">
          Resume
        </button>
      </Link>
    </div>
  );
};

export default Header;
