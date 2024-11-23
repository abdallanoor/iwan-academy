import ContactLinks from "@/components/ContactLinks";
import PageHeader from "@/components/PageHeader";
import ShareLink from "@/components/ShareLink";
import { FREE_EVALUATION_URL } from "@/constants";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const tBookFree = useTranslations("");
  const t = useTranslations("contact");
  return (
    <main>
      <PageHeader title={t("title")} />
      <section className="container py-page">
        <div className="w-4/5">
          <h3 className="text-lg font-medium text-primary mb-5 sm:w-2/5">
            {t("description")}
          </h3>
          <ContactLinks />
          <ShareLink
            title={tBookFree("bookFree")}
            href={FREE_EVALUATION_URL}
            className="mt-5"
            blank
          />
        </div>
      </section>
    </main>
  );
}
