import React from "react";

export default function Navlink({ text, href }) {
  return (
    <a
      href={href}
      className="relative text-lg hover:text-color-main transition-all duration-300
        after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[2px] after:bg-color-main 
        after:scale-x-0 hover:after:scale-x-100
        after:transition-transform after:duration-300 
        after:origin-right hover:after:origin-left"
    >
      {text}
    </a>
  );
}
