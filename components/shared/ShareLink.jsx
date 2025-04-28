import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ShareLink({ title, href, reverse, className, blank }) {
  return (
    <Link
      className={cn(
        "uppercase inline-block text-[11px] text-center font-medium py-4 px-7 bg-primary text-white rounded-[2px] sm:hover:bg-white sm:hover:text-primary border border-primary transition-colors duration-300 leading-4 ltr:tracking-widest",
        reverse &&
          "bg-white text-primary sm:hover:bg-primary sm:hover:text-white",
        className
      )}
      href={href ? href : "/"}
      target={blank ? "_blank" : "_self"}
    >
      {title}
    </Link>
  );
}
