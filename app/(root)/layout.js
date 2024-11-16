import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <main className="relative">
      <Navbar />
      {children}
    </main>
  );
}
