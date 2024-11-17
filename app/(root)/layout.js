import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <div className="relative">
      <Navbar />
      {children}
    </div>
  );
}
