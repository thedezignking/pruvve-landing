import { HeroSection } from "@/components/sections/hero-section";

export default function HomePage() {
  return (
    /* Figma "Landing page" frame padding (10px top / 24px sides); the hero
       card fills the viewport width fluidly rather than capping at 1436px */
    <main
      id="main-content"
      className="min-h-screen px-m pt-[10px] md:px-2xl"
    >
      <HeroSection />
    </main>
  );
}
