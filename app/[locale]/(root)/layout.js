import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import ScrollToTop from "@/components/shared/ScrollToTop";
import ShareLink from "@/components/shared/ShareLink";
import WhatsappWidget from "@/components/shared/WhatsappWidget";
import { FREE_EVALUATION_URL } from "@/constants";
import { useTranslations } from "next-intl";

export default function RootLayout({ children }) {
  const t = useTranslations("");
  return (
    <div className="relative">
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
      <WhatsappWidget />
      <div className="sm:hidden fixed bottom-5 left-1/2 -translate-x-1/2">
        <ShareLink
          title={t("bookFree")}
          href={FREE_EVALUATION_URL}
          className="ltr:tracking-normal w-max"
          blank
        />
      </div>
    </div>
  );
}
