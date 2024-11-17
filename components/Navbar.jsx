"use client";
import { getNavLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale, useTranslations } from "next-intl";
import MobileNav from "./MobileNav";
import ShareLink from "./ShareLink";

export default function Navbar() {
  const pathname = usePathname();
  const locale = useLocale();

  const t = useTranslations("");
  const pagesTranslations = useTranslations("pages");
  const navLinks = getNavLinks(pagesTranslations);

  return (
    <header
      dir="ltr"
      className="sticky inset-0 bg-background shadow direction-reverse font-medium"
    >
      <div className="container py-[6px] flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Iwan Academy"
            width={120}
            height={60}
            className="max-sm:w-[120px] max-[992px]:w-[110px] w-[120px] h-full"
          />
        </Link>

        <nav
          dir={locale === "ar" ? "rtl" : "ltr"}
          className="hidden sm:block max-md:text-sm"
        >
          <ul className="flex gap-3">
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <Link
                  className={cn(
                    "py-4 hover:text-primary transition-colors duration-300",
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

        <LanguageSwitcher />

        <MobileNav navLinks={navLinks} pathname={pathname} />

        <ShareLink
          title={t("bookFree")}
          href="https://calendly.com/salahamin911/30min"
          className="hidden lg:block p-3 ltr:tracking-normal"
          blank
        />
      </div>
    </header>
  );
}
