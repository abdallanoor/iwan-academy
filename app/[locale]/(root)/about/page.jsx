import About from "@/components/shared/AboutContent";
import PageHeader from "@/components/shared/PageHeader";
import { getAboutIwanData } from "@/constants";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata() {
  const t = await getTranslations("metadata.about");
  return {
    title: t("title"),
  };
}

export default function AboutPage() {
  const t = useTranslations("aboutPage");
  const aboutIwanData = getAboutIwanData(t);
  return (
    <main>
      <PageHeader title={t("title")} />
      <div className="container py-page">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center justify-center text-center gap-3">
            <p className="text-xl font-medium text-primary">
              {t("description.title")}
            </p>
            {aboutIwanData.map((data, index) => (
              <p key={index}>{data}</p>
            ))}
          </div>
          <Image
            src="/images/quran.png"
            alt="Quran"
            width={930}
            height={186}
            priority={true}
            className="hue-rotate-43 w-[930] h-full"
          />
          <About />
        </div>
      </div>
    </main>
  );
}
