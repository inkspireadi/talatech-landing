import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MotionOrchestrator } from "@/components/motion-orchestrator";
import { ContactForm } from "./contact-form";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact us | Talatech",
  description: "Talk to Talatech about web intelligence, website support, and your next stage of growth. Get in touch with our team.",
};

const questions = [
  { question: "What can Talatech help me with?", answer: <>We help businesses understand, protect, and grow their digital setup through web analytics, ongoing website support, and growth infrastructure. Explore our <Link href="/service">services and solutions</Link> to see the available tiers.</> },
  { question: "I’m not sure what my website needs. Where do I start?", answer: <>Start with a conversation about your website and your goals. Our approach is diagnosis first: understand the data and hidden issues before choosing what to fix or scale.</> },
  { question: "Can I see Insight Hub before getting started?", answer: <>Yes. Explore the <Link href="/insight-hub#platform-demo">platform preview</Link> for a closer look at the capabilities, or contact us to discuss a guided walkthrough.</> },
  { question: "Can you support an existing website?", answer: <>Our Web Support tier focuses on existing websites that need reliable maintenance, speed tuning, security patches, and ongoing code updates. Share your current platform and requirements so we can discuss the right fit.</> },
  { question: "What should I include in my message?", answer: <>Your website address, the challenge you’re facing, and the outcome you want are a good start. Include any important timing or project context. Please don’t send passwords, access tokens, or other sensitive account details.</> },
];

function ContactIcon({ kind }: { kind: "location" | "email" | "phone" }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{kind === "location" ? <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></> : kind === "email" ? <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m3 7 9 6 9-6" /></> : <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2a15 15 0 0 1-7-7l2-2-2-5Z" />}</svg>;
}

export default function ContactPage() {
  return <div className="contact-site"><SiteHeader /><MotionOrchestrator /><main className="contact-main">
    <div className="contact-top">
      <section className="contact-hero contact-container" aria-labelledby="contact-title"><span className="section-eyebrow">Contact Talatech</span><h1 id="contact-title">Your next chapter<br /><span>starts with a conversation.</span></h1><p>A question, a challenge, or an idea for what’s next.<br />We’d love to hear what you’re working on.</p></section>
      <section className="contact-form-section contact-container" aria-label="Contact form"><div className="contact-form-frame"><ContactForm /></div></section>
    </div>
    <section className="contact-details contact-container" aria-label="Contact details">
      <article><span className="contact-detail-icon"><ContactIcon kind="location" /></span><h2>Find us</h2><address>20 F St NW<br />Washington, DC 20001</address></article>
      <article><span className="contact-detail-icon"><ContactIcon kind="email" /></span><h2>Email us</h2><a href="mailto:admin@talatech.io">admin@talatech.io <span aria-hidden="true">↗</span></a></article>
      <article><span className="contact-detail-icon"><ContactIcon kind="phone" /></span><h2>Call us</h2><a href="tel:+19405975872">+1 (940) 597-5872 <span aria-hidden="true">↗</span></a></article>
    </section>
    <section className="contact-faq contact-container" data-reveal="contact-faq" aria-labelledby="contact-faq-title"><div className="contact-faq__intro"><span className="section-eyebrow">A little more clarity</span><h2 id="contact-faq-title" className="motion-copy motion-copy--heading">Good questions.<br /><span>Clear answers.</span></h2><p className="motion-copy motion-copy--description">A few things you might be wondering before we talk. Have another question? We’re here to help.</p><a className="button button--primary" href="mailto:admin@talatech.io">Ask our team <span aria-hidden="true">↗</span></a></div><div className="contact-faq__items">{questions.map((item, index) => <details key={item.question} name="contact-faq" open={index === 0}><summary>{item.question}<span className="contact-faq__toggle" aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div></section>
    <section className="contact-closing contact-container" data-reveal="contact-closing" aria-labelledby="contact-closing-title"><Image src="/assets/insight-bg.png" alt="" fill sizes="calc(100vw - 140px)" /><div><span className="section-eyebrow">Built around your next move</span><h2 id="contact-closing-title" className="motion-copy motion-copy--heading">Less guesswork.<br /><span>More room to grow.</span></h2><p>Discover how data, support, and a clear plan come together.</p><div className="contact-closing__actions"><Link className="button button--primary" href="/service">Explore our services <span aria-hidden="true">↗</span></Link><Link className="button button--secondary" href="/insight-hub">Meet Insight Hub</Link></div></div></section>
  </main><SiteFooter /></div>;
}
