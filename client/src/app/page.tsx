import { Hero } from "@/components/hero/Hero";
import { Navbar } from "@/components/sections/Navbar";
import { Stats } from "@/components/sections/Stats";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Preview } from "@/components/sections/Preview";
import { UseCases } from "@/components/sections/UseCases";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Preview />
      <UseCases />
      <CTA />
      <Footer />
    </>
  );
}
