import { getWhyIwanData } from "@/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function WhyIwanSection() {
  const t = useTranslations("whyIwan");
  const whyIwanData = getWhyIwanData(t);
  return (
    <section className="py-section">
      <div className="container">
        <h1 className="section-title">{t("title")}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
          {whyIwanData.map((data, i) => (
            <div
              key={i}
              className="w-full p-5 flex items-center justify-center text-center flex-col gap-2 shadow-md rounded-md"
            >
              <Image
                src={data.imgSrc}
                width={80}
                height={80}
                alt={data.title}
                className="w-20 h-20"
              />
              <p className="text-2xl font-medium">{data.title}</p>
              <p>{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
