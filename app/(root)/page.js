import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <section className="container">
      <h1 className="text-2xl">{t("title")}</h1>
      <LanguageSwitcher />
    </section>
  );
}
