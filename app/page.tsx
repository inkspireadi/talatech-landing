import { ChoosePath } from "@/components/choose-path";
import { Hero } from "@/components/hero";
import { HowWeWork } from "@/components/how-we-work";
import { InsightHub } from "@/components/insight-hub";
import { LogoSection } from "@/components/logo-section";
import { MotionOrchestrator } from "@/components/motion-orchestrator";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main className="homepage">
      <MotionOrchestrator />
      <Hero />
      <LogoSection />
      <InsightHub />
      <ChoosePath />
      <HowWeWork />
      <SiteFooter />
    </main>
  );
}
