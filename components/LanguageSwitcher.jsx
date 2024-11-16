"use client";
import { setUserLocale } from "@/services/locale";
import { useLocale } from "next-intl";
import { startTransition } from "react";
import { Languages } from "lucide-react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const changeLang = (value) => {
    startTransition(() => {
      setUserLocale(value);
    });
  };
  return (
    <button
      onClick={() => changeLang(locale === "en" ? "ar" : "en")}
      className="max-sm:ml-auto mr-3 cursor-pointer flex items-center justify-center gap-1 text-sm text-zinc-700 hover:text-primary transition-colors duration-300"
    >
      <Languages className="w-[13px] h-[13px]" />
      {locale === "en" ? "English" : "العربية"}
    </button>
  );
}
