import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DiagnosticVisual } from "@/components/insight-hub";
import { MotionOrchestrator } from "@/components/motion-orchestrator";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./about.css";

export const metadata: Metadata = {
  title: "About us | Talatech",
  description:
    "We are closing the digital intelligence gap. Meet Talatech: the web intelligence, security, and growth infrastructure behind better business decisions.",
};

const capabilities = [
  {
    title: "Understand",
    icon: "/assets/path-target.svg",
    description: "See what drives results across your digital footprint.",
  },
  {
    title: "Protect",
    icon: "/assets/path-wrench.svg",
    description: "Keep the platform behind your business reliable and secure.",
  },
  {
    title: "Grow",
    icon: "/assets/path-quiz.svg",
    description: "Turn clear signals into practical steps for your next stage.",
  },
];

const metrics = [
  { value: "97", label: "Client Satisfaction Rate" },
  { value: "98", label: "On-Time Project Delivery" },
  { value: "96", label: "Annual Retention Rate" },
];

const divisions = [
  {
    name: "Talatech.io",
    discipline: "Web intelligence",
    icon: "/assets/path-target.svg",
    description: "Web intelligence, performance diagnostics, and the infrastructure for meaningful growth.",
    id: "talatech",
  },
  {
    name: "Talasec",
    discipline: "Cybersecurity intelligence",
    icon: "/assets/path-wrench.svg",
    description: "Advanced cybersecurity intelligence to protect your digital assets.",
    id: "talasec",
  },
  {
    name: "Talachain",
    discipline: "Decentralized intelligence",
    icon: "/assets/path-quiz.svg",
    description: "Intelligence for blockchain systems and decentralized protocols.",
    id: "talachain",
  },
  {
    name: "Tytlflow",
    discipline: "Compliance & operations",
    icon: "/assets/path-file.svg",
    description: "Smart compliance and document management that bring clarity to complex operations.",
    id: "tytlflow",
  },
];

export default function AboutPage() {
  return (
    <div className="about-site">
      <MotionOrchestrator />
      <SiteHeader />
      <main className="about-main">
        <section className="about-hero about-container" aria-labelledby="about-title">
          <div className="about-hero__statement">
            <div>
              <span className="section-eyebrow">About Talatech</span>
              <h1 id="about-title">We are closing the <span>digital intelligence gap.</span></h1>
            </div>
            <ul className="about-principles" aria-label="Our focus">
              <li><span aria-hidden="true">↗</span> Data first</li>
              <li><span aria-hidden="true">↗</span> Built to protect</li>
              <li><span aria-hidden="true">↗</span> Ready to grow</li>
            </ul>
          </div>
          <div className="about-hero__context">
            <div className="about-hero__image">
              <Image
                src="/assets/how-we-work.png"
                alt=""
                fill
                priority
                sizes="(max-width: 1000px) 45vw, 50vw"
              />
            </div>
            <p>Talatech was founded to replace guesswork with clear data engineering. We build and operate the intelligence infrastructure modern businesses run on.</p>
            <a className="button button--primary" href="mailto:admin@talatech.io">Get in touch <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="about-story about-container" aria-labelledby="who-title" data-reveal="about-story">
          <div className="about-story__visual" aria-hidden="true">
            <Image src="/assets/insight-bg.png" alt="" fill sizes="35vw" />
            <span className="about-story__visual-label">A clearer view of your business.</span>
            <div className="about-story__dashboard"><DiagnosticVisual /></div>
            <span className="about-story__visual-caption">Powered by Insight Hub</span>
          </div>
          <div className="about-story__copy">
            <span className="section-eyebrow">Who we are</span>
            <h2 id="who-title" className="motion-copy motion-copy--heading">Clarity at the heart of every digital decision.</h2>
            <p className="motion-copy motion-copy--description">Too many businesses invest in websites and advertising without a clear view of what drives revenue. Decisions are made on instinct, while the useful signals stay hidden.</p>
            <p>We bring those signals together through <Link href="/#insight-title">Insight Hub</Link>—a direct, data-first system that monitors your digital footprint, protects your platform, and gives you clear steps to scale.</p>
            <div className="about-capabilities">
              {capabilities.map((capability) => (
                <div key={capability.title}>
                  <span className="about-icon" aria-hidden="true"><Image src={capability.icon} width={22} height={22} alt="" /></span>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-performance about-container" aria-labelledby="performance-title" data-reveal="about-performance">
          <div className="about-performance__heading">
            <span className="section-eyebrow">Our performance</span>
            <h2 id="performance-title" className="motion-copy motion-copy--heading">Built on trust. Measured in results.</h2>
          </div>
          <dl className="about-metrics">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.label}</dt>
                <dd>{metric.value}<span>%</span></dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="about-group" aria-labelledby="group-title" data-reveal="about-group">
          <div className="about-group__layout about-container">
            <div className="about-group__intro">
              <span className="section-eyebrow">The Talatech Group</span>
              <h2 id="group-title" className="motion-copy motion-copy--heading">Specialist expertise.<br /> Shared intelligence.</h2>
              <p className="motion-copy motion-copy--description">Talatech.io is the front door to our business intelligence ecosystem. Four focused divisions, each bringing clarity to a different part of your digital world.</p>
              <Link className="about-text-link" href="/service">Explore our services <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="about-divisions">
              {divisions.map((division, index) => (
                <article className="about-division" id={division.id} key={division.id}>
                  <div className="about-division__inner">
                    <div className="about-division__top"><span className="about-icon" aria-hidden="true"><Image src={division.icon} width={24} height={24} alt="" /></span><span className="about-division__number" aria-hidden="true">0{index + 1}</span></div>
                    <span className="about-division__discipline">{division.discipline}</span>
                    <h3>{division.name}</h3>
                    <p>{division.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-cta about-container" aria-labelledby="about-cta-title" data-reveal="about-cta">
          <Image className="about-cta__background" src="/assets/insight-bg.png" alt="" fill sizes="calc(100vw - 140px)" aria-hidden="true" />
          <div className="about-cta__copy">
            <span className="section-eyebrow">Your next chapter</span>
            <h2 id="about-cta-title" className="motion-copy motion-copy--heading">A clearer picture.<br /><span>A better next move.</span></h2>
            <p>Let’s turn your digital setup into a foundation for growth.</p>
            <div className="about-cta__actions"><a className="button button--primary" href="mailto:admin@talatech.io">Get in touch</a><Link className="button button--secondary" href="/service">Explore services <span aria-hidden="true">↗</span></Link></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
