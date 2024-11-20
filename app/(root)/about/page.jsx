import About from "@/components/About";
import PageHeader from "@/components/PageHeader";
import ShareLink from "@/components/ShareLink";
import { FREE_EVALUATION_URL, getAboutIwanData } from "@/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutPage() {
  const bookFree = useTranslations("");
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
            {aboutIwanData.map((data, i) => (
              <p key={i}>{data}</p>
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
          <ShareLink
            title={bookFree("bookFree")}
            href={FREE_EVALUATION_URL}
            className="block w-fit mx-auto"
            blank
          />
        </div>
      </div>
    </main>
  );
}
