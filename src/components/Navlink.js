import React from "react";

export default function Navlink({ text, href, classes }) {
  return (
    <a
      href={href}
      className={`group ${classes}`}
    >
      <span
        className="relative text-lg group-hover:text-color-main dark:text-white transition-all duration-300
          after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[2px] after:bg-color-main 
          after:scale-x-0 group-hover:after:scale-x-100
          after:transition-transform after:duration-300 
          after:origin-right group-hover:after:origin-left"
      >
        {text}
      </span>
    </a>
  );
}
