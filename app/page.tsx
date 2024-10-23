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
      <main className="relative flex-1">
        <section className="overflow-hidden">
          <HeroSection />
        </section>
        <section className="relative section-gradient bg-muted/50">
          <FeaturesSection />
        </section>
        <section className="relative section-gradient bg-muted/50">
          <TestimonialSection />
        </section>
        <section className="relative">
          <div className="absolute inset-0 -z-10 bg-grid-slate-200/20 mask-radial dark:bg-grid-slate-800/20" />
          <PricingPreviewSection />
        </section>
        <section className="relative section-gradient bg-muted/50">
          <IntegrationsSection />
        </section>
        <section className="relative section-gradient bg-muted/50">
          <FAQSection />
        </section>
        
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10" />
          </div>
          <CTASection />
        </section>
      </main>
    </>
  );
};

export default HomePage;
