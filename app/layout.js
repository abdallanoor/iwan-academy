import "./globals.css";

export const metadata = {
  title: "Learn Qur’an, Arabic And Islamic Studies",
  description:
    "Iwan Academy is an educational online academy in order to serve online Qur’an, Tajweed, Arabic Language, and Islamic Studies to Arabs & non-Arabic speakers; with an interesting technique in teaching through online one-to-one sessions, we can work with your needs to ensure the best learning environment for you or your kids.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`antialiased`}>
      <body>{children}</body>
    </html>
  );
}
