import { BusinessModelSolutionSection } from "./components/businessModelSolutionSection";
import { CompatibilityBanner } from "./components/compatibilityBanner";
import { ContentSection } from "./components/contentSection";
import { CtaSection } from "./components/ctaSection";
import { DifferentialsSection } from "./components/differentialsSection";
import { FaqSection } from "./components/faqSection";
import { FormSection } from "./components/formSection";
import { FutureSection } from "./components/futureSection";
import { Hero } from "./components/hero";
import { Navbar } from "./components/nav";
import { PartnerSection } from "./components/partnerSection";
import { SolutionsSection } from "./components/solutionsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
        <Navbar/>
        <Hero/>
        <FutureSection/>
        <SolutionsSection/>
        <DifferentialsSection/>
        <BusinessModelSolutionSection/>
        <FormSection/>
        <PartnerSection/>
        <ContentSection/>
        <FaqSection/>
        <CtaSection/>
        



    </main>
  
  );
}
