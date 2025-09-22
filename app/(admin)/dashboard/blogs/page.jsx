import DashboardHeader from "@/components/dashboard/header";
import { useTranslations } from "next-intl";

export default function Blogs() {
  const t = useTranslations("dashboard");

  const breadcrumbs = [
    { label: t("links.iwanDashboard"), href: "/dashboard" },
    { label: t("links.blogs") },
  ];
  return (
    <>
      <DashboardHeader breadcrumbs={breadcrumbs} />
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto max-w-7xl px-4 py-6">
          <p>Blog Management</p>
        </div>
      </div>
    </>
  );
}
