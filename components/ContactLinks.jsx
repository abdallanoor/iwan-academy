import { contactLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function ContactLinks({ footer }) {
  return (
    <div className="flex flex-col gap-4">
      {contactLinks.map((contactLink, i) => (
        <div key={i} className="flex gap-[10px] items-center">
          <Image
            alt={contactLink.label}
            src={contactLink.icon}
            width={28}
            height={28}
            className="w-7 h-7"
          />
          <Link
            className={footer ? "hover:text-zinc-50" : "hover:opacity-80"}
            href={contactLink.url}
            target="_blank"
          >
            {contactLink.label}
          </Link>
        </div>
      ))}
    </div>
  );
}
