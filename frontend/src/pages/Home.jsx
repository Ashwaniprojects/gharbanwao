import { useEffect } from "react";
import { scrollToId } from "@/lib/scroll";
import { AnnouncementStrip } from "@/components/site/AnnouncementStrip";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustBar, WhyChoose } from "@/components/site/TrustWhy";
import { ProjectsMap } from "@/components/site/ProjectsMap";
import { Materials, Process, Services } from "@/components/site/ServicesProcessMaterials";
import { CalculatorSection } from "@/components/site/CalculatorSection";
import { GoogleReviews, Testimonials, VideoTestimonials } from "@/components/site/SocialProof";
import { Awards, Comparison, Pricing, Team } from "@/components/site/PricingTeam";
import { FAQ, FinalCTA, Footer, MobileBar } from "@/components/site/FaqCtaFooter";

export default function Home() {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) setTimeout(() => scrollToId(id), 400);
  }, []);
  return (
    <div className="min-h-screen bg-paper text-ink" data-testid="home-page">
      <AnnouncementStrip />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <WhyChoose />
        <ProjectsMap />
        <Services />
        <CalculatorSection />
        <Process />
        <Materials />
        <Testimonials />
        <VideoTestimonials />
        <GoogleReviews />
        <Pricing />
        <Comparison />
        <Team />
        <Awards />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}
