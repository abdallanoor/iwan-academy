import About from "@/components/About";
import Courses from "@/components/Courses";
import Faqs from "@/components/Faqs";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyIwan from "@/components/WhyIwan";

export default function Home() {
  return (
    <main>
      <Hero />
      <About section />
      <Courses section />
      <WhyIwan />
      <HowItWorks />
      <Faqs />
    </main>
  );
}
