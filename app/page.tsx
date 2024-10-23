import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { IntegrationsSection } from "@/components/IntegrationSection";
import { PricingPreviewSection } from "@/components/PricingPreviewSection";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const HomePage = () => {
  return (
    <>
      <ScrollProgress />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <TestimonialSection />
        <PricingPreviewSection />
        <IntegrationsSection />
        <FAQSection />
        <CTASection />
      </main>
    </>
  );
};

export default HomePage;
