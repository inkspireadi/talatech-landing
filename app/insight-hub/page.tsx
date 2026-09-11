import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MotionOrchestrator } from "@/components/motion-orchestrator";
import { PlatformShowcase } from "./platform-showcase";
import "./insight-hub.css";

export const metadata: Metadata = {
  title: "Insight Hub | Talatech",
  description: "The operating system for your digital growth. Turn web data into a clear 90-day action plan with Insight Hub and a dedicated account manager.",
};

const steps = [
  { title: "See the whole picture", text: "Bring performance, conversion paths, and platform health into one clear view.", icon: "path-target" },
  { title: "Know your next move", text: "Focus on a 90-day plan, with practical tasks prioritized by business impact.", icon: "path-file" },
  { title: "Move forward together", text: "Work directly with your account manager to review progress and approve the next fix.", icon: "path-wrench" },
];

export default function InsightHubPage() {
  return (
    <div className="platform-site">
      <SiteHeader />
      <MotionOrchestrator />
      <main className="platform-main">
        <section className="platform-hero platform-container" aria-labelledby="platform-title">
          <span className="section-eyebrow">Meet Insight Hub</span>
          <h1 id="platform-title">The operating system for<br /><span>your digital growth.</span></h1>
          <p>An all-in-one platform that turns raw web traffic<br className="platform-desktop-break" /> into daily business decisions.</p>
          <div className="platform-actions">
            <a className="button button--primary" href="mailto:admin@talatech.io?subject=Insight%20Hub%20%E2%80%94%20Site%20audit">Audit my site <span aria-hidden="true">↗</span></a>
            <a className="button button--secondary" href="#platform-demo">Explore platform demo <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <PlatformShowcase />

        <section className="platform-outcomes platform-container" aria-label="From insight to action">
          {steps.map((step, index) => (
            <article key={step.title}>
              <span className="platform-icon"><Image src={`/assets/${step.icon}.svg`} width={23} height={23} alt="" /></span>
              <span className="platform-step">0{index + 1}</span>
              <h2>{step.title}</h2><p>{step.text}</p>
            </article>
          ))}
        </section>

        <section className="platform-clarity platform-container" data-reveal="platform-clarity" aria-labelledby="clarity-title">
          <div className="platform-section-heading">
            <span className="section-eyebrow">Beyond the dashboard</span>
            <h2 id="clarity-title" className="motion-copy motion-copy--heading">More charts aren’t the answer.<br /><span>A clear next step is.</span></h2>
            <p className="motion-copy motion-copy--description">Data should move your business forward, not leave you wondering what to do with it.</p>
          </div>
          <div className="platform-comparison">
            <article className="platform-problem">
              <span className="platform-overline">The problem</span>
              <h3>Plenty of data. Little direction.</h3>
              <p>Traditional dashboards can become data graveyards: disconnected charts, noisy metrics, and no clear owner for what happens next.</p>
              <ul><li>Traffic counts without business context</li><li>Issues discovered after they cost you</li><li>Reports that end without an action plan</li></ul>
            </article>
            <article className="platform-solution">
              <span className="platform-overline">The Insight Hub approach</span>
              <h3>Clear signals. A team to act on them.</h3>
              <p>Insight Hub pairs data tracking with a dedicated account manager. You get a clear 90-day plan—and the people to help put it into motion.</p>
              <ul><li>Performance connected to leads and revenue</li><li>Diagnostics that surface what needs attention</li><li>Prioritized tasks, ownership, and progress</li></ul>
            </article>
          </div>
        </section>

        <section className="platform-closing platform-container" data-reveal="platform-closing" aria-labelledby="platform-closing-title">
          <Image src="/assets/insight-bg.png" alt="" fill sizes="calc(100vw - 140px)" />
          <div>
            <span className="section-eyebrow">Your next best move</span>
            <h2 id="platform-closing-title" className="motion-copy motion-copy--heading">Start with clarity.<br /><span>Build toward growth.</span></h2>
            <p>Find out what your website needs before deciding what to do next.</p>
            <div className="platform-actions"><a className="button button--primary" href="mailto:admin@talatech.io?subject=Insight%20Hub%20%E2%80%94%20Site%20audit">Audit my site</a><Link className="button button--secondary" href="/service">Explore our services <span aria-hidden="true">↗</span></Link></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
