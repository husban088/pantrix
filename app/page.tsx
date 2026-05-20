import AboutSection from "./sections/AboutSection";
import ClientReviewsSection from "./sections/ClientReviewsSection";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import ServicesSection from "./sections/ServicesSection";
import WhyChooseUsSection from "./sections/WhyChooseUsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ClientReviewsSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}
