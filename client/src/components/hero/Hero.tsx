import { Container } from "@/components/layout/Container";

import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroPhone } from "./HeroPhone";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-52 pb-28">
      <HeroBackground />

      <Container>
        <div className="grid items-center gap-24 lg:grid-cols-[1fr_0.9fr]">
          <HeroContent />

          <HeroPhone />
        </div>
      </Container>
    </section>
  );
}
