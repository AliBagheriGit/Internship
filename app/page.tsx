import React from "react";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { DualPathwaysSection } from "@/components/home/dual-pathways-section";
import { InvestmentCtaSection } from "@/components/home/investment-cta-section";
import { StatisticsSection } from "@/components/home/statistics-section";
import { FaqSection } from "@/components/home/faq-section";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ServicesSection />
      <DualPathwaysSection />
      <InvestmentCtaSection />
      <StatisticsSection />
      <FaqSection />
    </div>
  );
}
