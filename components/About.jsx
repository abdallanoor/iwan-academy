import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function About({ section }) {
  const t = useTranslations("about");
  return (
    <section className="py-section">
      <div className="container">
        <h1 className="section-title">{t("title")}</h1>
        <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-10">
          <Image
            src="/images/about-iamge.jpg"
            width={310}
            height={435}
            alt="Learn Qur’an"
            className="w-full sm:w-[310px] h-full sm:h-[435px]"
          />
          <div className="flex flex-col gap-4 max-sm:text-center">
            <p>{t("description")}</p>
            <h3 className="text-xl font-medium text-primary">
              {t("ourTutors")}
            </h3>
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
