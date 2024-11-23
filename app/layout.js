import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";

import "./globals.css";
import TopLoader from "@/components/TopLoader";

const Metadata = ({ t }) => (
  <>
    <meta name="description" content={t("description")} />
    <meta name="keywords" content={t("keywords")} />
    <meta name="author" content="Iwan Academy" />
    <meta property="og:title" content={t("title")} />
    <meta property="og:description" content={t("description")} />
    <meta property="og:url" content="https://www.iwanacademy.net" />
    <meta property="og:image" content="images/iwan-small.jpg" />
    <link rel="apple-touch-icon" sizes="180x180" href="images/iwan-small.jpg" />
    <link rel="icon" type="image/png" sizes="32x32" href="images/fav32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="images/fav16.png" />
    <title>{t("title")}</title>
  </>
);

export default async function RootLayout({ children }) {
  const [locale, messages, t] = await Promise.all([
    getLocale(),
    getMessages(),
    getTranslations("metadata"),
  ]);
  const direction = locale === "en" ? "ltr" : "rtl";

  return (
    <html dir={direction} lang={locale}>
      <head>
        <Metadata t={t} />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <TopLoader />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
