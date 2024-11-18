import About from "@/components/About";
import Courses from "@/components/Courses";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <About section />
      <Courses section />
    </main>
  );
}
