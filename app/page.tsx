import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { DigitalSolutionsSection } from "@/components/digital-solutions-section"
import { IdentifyingSection } from "@/components/identifying-section"
import { ResultsSection } from "@/components/results-section"
import { WorkProcessSection } from "@/components/work-process-section"
import { StatsSection } from "@/components/stats-section"
import { ImpactSection } from "@/components/impact-section"
import { ValuesSection } from "@/components/values-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <DigitalSolutionsSection />
        <IdentifyingSection />
        <ResultsSection />
        <WorkProcessSection />
        <StatsSection />
        <ImpactSection />
        <ValuesSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}

