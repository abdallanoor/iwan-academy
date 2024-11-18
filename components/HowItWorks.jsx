import { FREE_EVALUATION_URL, getHowItWorksData } from "@/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ShareLink from "./ShareLink";

export default function HowItWorks() {
  const t = useTranslations("howItWorks");
  const steps = getHowItWorksData(t);
  return (
    <section className="py-section bg-section">
      <div className="container text-center">
        <h1 className="section-title">{t("title")}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <div
              key={i}
              className="w-full p-5 flex flex-col items-center justify-center gap-2 shadow-md rounded-md"
            >
              <Image
                src={step.imgSrc}
                alt={step.title}
                width={100}
                height={100}
                className="w-[100px] h-[100px]"
              />
              <p className="text-5xl font-semibold">{step.stepNumber}</p>
              <p className="text-2xl font-medium">{step.title}</p>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        <p className="text-xl font-semibold mt-10 mb-6 uppercase ltr:-tracking-tighter">
          {t("reallySimple")}
        </p>
        <ShareLink
          title={t("getStarted")}
          href={FREE_EVALUATION_URL}
          className="hover:bg-transparent"
          blank
        />
      </div>
    </section>
  );
}
