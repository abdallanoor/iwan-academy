"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 75);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      className={cn(
        "fixed bottom-5 left-5 invisible opacity-0 transition-opacity duration-300",
        isVisible && "visible opacity-100"
      )}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        document.body.focus();
      }}
    >
      <Image
        src="/icons/up-arrow.svg"
        alt="Scroll To Top"
        width={50}
        height={50}
      />
    </button>
  );
}
