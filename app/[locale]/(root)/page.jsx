import AboutContent from "@/components/shared/AboutContent";
import CoursesContent from "@/components/shared/CoursesContent";
import FaqsSection from "@/components/home/FaqsSection";
import HeroSection from "@/components/home/HeroSection";
import WhyIwanSection from "@/components/home/WhyIwanSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutContent section />
      <CoursesContent section />
      <WhyIwanSection />
      <HowItWorksSection />
      <FaqsSection />
    </main>
  );
}
