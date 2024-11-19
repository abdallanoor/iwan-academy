import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({ children }) {
  return (
    <div className="relative">
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
    </div>
  );
}
