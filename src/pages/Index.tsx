// src/pages/Index.tsx (updated - remove Header/Footer as they are now in MainLayout)
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ApproachSection />
      <ServicesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default Index;