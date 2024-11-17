"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export default function MobileNav({ navLinks, pathname }) {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setNavIsOpen(!navIsOpen)}
        className={`cursor-pointer w-[27px] sm:hidden `}
      >
        <i
          className={`block w-full h-[4px] bg-primary rounded ${
            navIsOpen ? "animate-inT" : "animate-outT"
          }`}
        ></i>
        <i
          className={`block w-full h-[4px] bg-primary rounded mt-[5px] ${
            navIsOpen ? "animate-inM" : "animate-outM"
          }`}
        ></i>
        <i
          className={`block w-full h-[4px] bg-primary rounded mt-[5px] ${
            navIsOpen ? "animate-inBtm" : "animate-outBtm"
          }`}
        ></i>
      </button>

      <nav
        className={cn(
          "absolute bg-white top-[99%] right-0 left-0 border-b p-2 z-10 clip-inset-0 transition-all duration-400 sm:hidden",
          navIsOpen && " clip-inset-1"
        )}
      >
        <ul className="flex flex-col items-center">
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <Link
                onClick={() => setNavIsOpen(!navIsOpen)}
                className={cn(
                  "py-3 hover:text-primary transition-colors duration-300 block",
                  pathname === navLink.route && "text-primary"
                )}
                href={navLink.route}
              >
                {navLink.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
