import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ShareLink({ title, href, reverse, className, blank }) {
  return (
    <Link
      className={cn(
        "uppercase max-sm:w-full text-[11px] text-center font-medium py-4 px-7 bg-primary text-white rounded-[2px] hover:bg-white hover:text-primary border border-primary transition-colors duration-300 leading-4 ltr:tracking-widest",
        reverse && "bg-white text-primary hover:bg-primary hover:text-white",
        className
      )}
      href={href ? href : "/"}
      target={blank ? "_blank" : "_self"}
    >
      {title}
    </Link>
  );
}
