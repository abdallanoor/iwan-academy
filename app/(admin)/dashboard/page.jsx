import DashboardHeader from "@/components/dashboard/header";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function DashboardPage() {
  const t = useTranslations("dashboard");

  const breadcrumbs = [{ label: t("links.iwanDashboard") }];

  return (
    <>
      <DashboardHeader breadcrumbs={breadcrumbs} />
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto max-w-7xl px-4 py-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold mb-6">
              {t("links.iwanDashboard")}
            </h2>
            <Button>Add new blog</Button>
          </div>
        </div>
      </div>
    </>
  );
}
