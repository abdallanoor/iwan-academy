import PageHeader from "@/components/PageHeader";
import Pricing from "@/components/Pricing";
import { useTranslations } from "next-intl";

export default function PricingPage() {
  const t = useTranslations("pricing");
  return (
    <main>
      <PageHeader title={t("title")} />
      <div className="container py-page">
        <Pricing />
      </div>
    </main>
  );
}
