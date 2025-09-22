import CoursesContent from "@/components/shared/CoursesContent";
import PageHeader from "@/components/shared/PageHeader";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
export async function generateMetadata() {
  const t = await getTranslations("metadata.courses");
  return {
    title: t("title"),
    description: t("description"),
  };
}
export default function CoursesPage() {
  const t = useTranslations("pages");
  return (
    <main>
      <PageHeader title={t("courses")} />
      <div className="container py-page">
        <CoursesContent />
      </div>
    </main>
  );
}
