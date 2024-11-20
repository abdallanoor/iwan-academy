import Courses from "@/components/Courses";
import PageHeader from "@/components/PageHeader";
import { useTranslations } from "next-intl";

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
