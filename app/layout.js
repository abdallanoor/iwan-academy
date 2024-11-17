import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import "./globals.css";
import TopLoader from "@/components/TopLoader";

export const metadata = {
  title: "Learn Qur’an, Arabic And Islamic Studies",
  description:
    "Iwan Academy is an educational online academy in order to serve online Qur’an, Tajweed, Arabic Language, and Islamic Studies to Arabs & non-Arabic speakers; with an interesting technique in teaching through online one-to-one sessions, we can work with your needs to ensure the best learning environment for you or your kids.",
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();

  const messages = await getMessages();

  const direction = locale === "en" ? "ltr" : "rtl";

  return (
    <html dir={direction} lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <TopLoader />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
