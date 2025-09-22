"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTransition } from "react";
import { Languages } from "lucide-react";

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  function onSelectChange(nextLocale) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <button
      disabled={isPending}
      onClick={() => onSelectChange(locale === "en" ? "ar" : "en")}
      className="max-sm:ml-auto mr-3 cursor-pointer flex items-center justify-center gap-1 text-sm text-zinc-700 hover:text-primary transition-colors duration-300"
    >
      <Languages className="w-[13px] h-[13px]" />
      {locale === "ar" ? "English" : "العربية"}
    </button>
  );
}
