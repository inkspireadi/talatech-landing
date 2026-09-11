import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./service.css";

export const metadata: Metadata = {
  title: "Services & Solutions | Talatech",
  description:
    "Intelligence-driven web analytics, website support, and growth services. Diagnose your digital setup, fix hidden issues, and scale your operations.",
};

const services = [
  {
    number: "01",
    title: "Web Analytics",
    phase: "Diagnosis First",
    icon: "/assets/path-target.svg",
    purpose: "Uncover why site traffic is not turning into paying customers.",
    deliverables: [
      "Full data setup",
      "Behavior tracking",
      "Monthly strategy call",
      "Custom Insight Hub dashboard",
    ],
    recommendedFor: "Companies starting a retainer relationship.",
  },
  {
    number: "02",
    title: "Web Support",
    phase: "Fix & Protect",
    icon: "/assets/path-wrench.svg",
    purpose: "Repair technical bugs, speed up pages, and protect your digital assets.",
    deliverables: [
      "Ongoing code updates",
      "Cloud backups",
      "Speed tuning",
      "Security patches",
    ],
    recommendedFor: "Sites with existing traffic that need reliable maintenance.",
  },
  {
    number: "03",
    title: "The Complete Bundle",
    phase: "Recommended",
    icon: "/assets/path-quiz.svg",
    purpose: "Combine diagnosis and technical maintenance into one smooth system.",
    deliverables: [
      "Everything in Analytics + Web Support",
      "A dedicated Account Manager running both",
    ],
    recommendedFor: "Businesses wanting full operational peace of mind.",
    popular: true,
  },
  {
    number: "04",
    title: "Growth Tiers",
    phase: "Scale Up",
    icon: "/assets/path-file.svg",
    purpose: "Expand your operations as your business grows larger.",
    deliverables: [],
    growth: [
      { name: "Foundation", detail: "Core search & lead setup." },
      { name: "Campaigns", detail: "Paid & search expansion." },
      { name: "Systems", detail: "Complex workflows & automation." },
    ],
    recommendedFor: "Expanding businesses ready for enterprise scale.",
  },
];

export default function ServicePage() {
  return (
    <div className="service-site">
      <SiteHeader />
      <main className="service-main">
        <div className="service-container">
          <div className="service-banner">
            <Image src="/assets/insight-bg.png" alt="" fill priority sizes="calc(100vw - 140px)" aria-hidden="true" />
            <p>Services &amp; solutions</p>
            <nav className="service-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span aria-hidden="true">↗</span><span aria-current="page">Services</span>
            </nav>
          </div>

          <header className="service-intro">
            <div>
              <span className="section-eyebrow">What we do</span>
              <h1>Intelligence-Driven Web Services <span>Built for Growth</span></h1>
            </div>
            <div className="service-intro__copy">
              <p>We don&apos;t guess what your site needs. We diagnose your digital setup first, fix hidden issues, and scale your operations.</p>
              <a className="button button--secondary" href="#solutions">Explore our solutions <span aria-hidden="true">↓</span></a>
            </div>
          </header>

          <section className="service-solutions" id="solutions" aria-labelledby="solutions-title">
            <div className="service-section-heading">
              <span className="section-eyebrow">Our services</span>
              <h2 id="solutions-title">Our Tiered Solutions Journey</h2>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className={`service-card${service.popular ? " service-card--recommended" : ""}`} key={service.number}>
                  <div className="service-card__inner">
                    <div className="service-card__top">
                      <span className="service-card__icon" aria-hidden="true"><Image src={service.icon} width={26} height={26} alt="" /></span>
                      <span className="service-card__number" aria-label={`Tier ${service.number}`}>{service.number}</span>
                    </div>
                    <div className="service-card__title"><h3>{service.title}</h3><span className="service-phase">{service.phase}</span></div>
                    <p className="service-card__purpose">{service.purpose}</p>
                    <div className="service-deliverables">
                      <h4>Core deliverables</h4>
                      {service.growth ? (
                        <dl className="service-growth">{service.growth.map((tier) => <div key={tier.name}><dt>{tier.name}</dt><dd>{tier.detail}</dd></div>)}</dl>
                      ) : (
                        <ul>{service.deliverables.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
                      )}
                    </div>
                    <div className="service-recommendation"><h4>{service.popular ? "Most Popular" : "Recommended for"}</h4><p>{service.recommendedFor}</p></div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="service-commitment" aria-labelledby="commitment-title">
            <div className="service-commitment__copy">
              <span className="section-eyebrow">A longer view</span>
              <h2 id="commitment-title">Commit Long-Term &amp; Save</h2>
              <p>Choose a 6 or 12-month commitment on any tier to lock in reduced monthly operational rates and priority engineering hours.</p>
            </div>
            <div className="service-commitment__action"><div className="service-terms"><span>6 months</span><span>12 months</span></div><a className="button button--primary" href="mailto:admin@talatech.io">Get in touch <span aria-hidden="true">↗</span></a></div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
