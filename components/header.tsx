"use client";
import React, { useState } from "react";

const headerNavArray = ["Ira Akbar", "Work", "Contact"];

const Header = () => {
  const [selectedNav, setselectedNav] = useState("Ira Akbar");
  return (
    <div className="absolute top-0 w-full flex justify-between items-center h-[52px] px-4 md:h-[72px] md:px-[120px]">
      <div className="hidden md:flex item-center gap-8 ">
        {headerNavArray.map((el, index) => (
          <p
            key={index}
            className={`${
              selectedNav === el ? "text-black" : "text-[#CFCFDB]"
            } cursor-pointer md:text-2xl md:font-semibold`}
            onClick={(e) => {
              setselectedNav(el);
            }}
          >
            {el}
          </p>
        ))}
      </div>
      <p
        className={` text-black text-base flex font-semibold cursor-pointer md:hidden`}
      >
        Ira Akbar
      </p>

      <button className="flex px-5 py-[10px] justify-center items-center gap-2 rounded-full bg-gray-800 md:text-lg md:font-medium md:py-2">
        Resume
      </button>
    </div>
  );
};

export default Header;
