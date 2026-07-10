import { Header } from "@/components/layout/header";
import { FeaturesTrustSection } from "@/components/sections/features-trust-section";
import { HeroSection } from "@/components/sections/hero-section";

export default function HomePage() {
  return (
    <>
      <div className="sticky top-0 z-50 bg-background/95 px-l backdrop-blur-sm md:px-2xl">
        <div className="py-m">
          <Header />
        </div>
      </div>
      <main id="main-content" className="min-h-screen">
        <HeroSection />
        <FeaturesTrustSection />
      </main>
    </>
  );
}
