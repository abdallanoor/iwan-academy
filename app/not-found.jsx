import Navbar from "@/components/shared/Navbar";
import ShareLink from "@/components/shared/ShareLink";
import Footer from "@/components/shared/Footer";
import { useTranslations } from "next-intl";
import Link from "next/link";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { SearchX, BookOpen, MessageCircle, Building2 } from "lucide-react";

export default function NotFound() {
  const t = useTranslations("notFound");
  return (
    <>
      <Navbar />
      <section>
        <PageHeader title={t("title")} />

        {/* Main content */}
        <div className="container py-page text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <SearchX className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t("quickLinks")}</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {t("description")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ShareLink
              title={t("backHome")}
              href="/"
              className="max-sm:w-full"
            />
            <ShareLink
              title={t("courses")}
              href="/courses"
              className="max-sm:w-full"
              reverse
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
