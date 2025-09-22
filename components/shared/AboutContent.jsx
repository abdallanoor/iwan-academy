import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export default function AboutContent({ section }) {
  const t = useTranslations("about");
  return (
    <section className={cn(section && "py-section")}>
      <div className={cn(section && "container")}>
        {section && <h1 className="section-title">{t("title")}</h1>}
        <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-10">
          <Image
            src="/images/about-image.jpg"
            width={310}
            height={435}
            alt="Learn Qur’an"
            className="w-full sm:w-[310px] h-full sm:h-[435px] rounded-lg object-cover"
          />
          <div className="flex flex-col gap-4 max-sm:text-center">
            <p>{t("description")}</p>
            <p className="text-xl font-medium text-primary">{t("ourTutors")}</p>
            <p>{t("ourTutorsDes")}</p>
            {section && (
              <Link
                href="/about"
                className="hover:underline text-sm text-primary font-semibold "
              >
                {t("readMore")}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
