import { useTranslations } from "next-intl";
import Link from "next/link";

export default function BookFreeButton() {
  const t = useTranslations("");
  return (
    <Link
      href="https://calendly.com/salahamin911/30min"
      target="_blank"
      className="hidden lg:block uppercase text-[11px] p-3 bg-primary text-white rounded-[2px] hover:bg-white hover:text-primary border border-primary transition-colors duration-300 leading-4"
    >
      {t("bookFree")}
    </Link>
  );
}
