import Courses from "@/components/Courses";
import PageHeader from "@/components/PageHeader";
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
        <Courses />
      </div>
    </main>
  );
}
