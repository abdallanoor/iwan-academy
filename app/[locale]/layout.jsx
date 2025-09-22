import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import TopLoader from "@/components/shared/TopLoader";
import "./globals.css";

export async function generateMetadata({ params }) {
  const { locale } = params;

  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: "Iwan Academy" }],
    icons: {
      icon: "/images/fav32.png",
      apple: "/images/iwan-small.jpg",
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://www.iwanacademy.net",
      siteName: t("title"),
      images: [
        {
          url: "/images/iwan.jpg",
          width: 1200,
          height: 630,
          alt: t("description"),
        },
      ],
      type: "website",
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  const messages = await getMessages(locale);

  const isRTL = locale === "ar";
  const direction = isRTL ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <TopLoader />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
