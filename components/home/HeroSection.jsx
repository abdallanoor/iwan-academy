import { useTranslations } from "next-intl";
import ShareLink from "../shared/ShareLink";

export default function HeroSection() {
  const t = useTranslations("");
  return (
    <section className="bg-hero bg-heroSize h-[calc(100vh-75px)]">
      <div className="container h-full flex items-center justify-center flex-col">
        <div className="flex flex-col items-center text-center gap-3 text-primary mb-4">
          <p className="text-2xl">{t("welcome")}</p>
          <h1 className="text-4xl md:text-[80px] md:leading-none font-bold uppercase">
            {t("title")}
          </h1>
          <h2 className="text-2xl">{t("description")}</h2>
        </div>
        <div className="flex items-center justify-center flex-col sm:flex-row gap-3 w-full">
          <ShareLink
            title={t("pages.courses")}
            href="/courses"
            className="max-sm:w-full"
            reverse
          />
          <ShareLink
            title={t("pages.contact")}
            href="/contact"
            className="max-sm:w-full"
          />
        </div>
      </div>
    </section>
  );
}
