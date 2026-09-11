"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";

const capabilities = [
  { title: "Diagnostic Center", icon: "path-target", headline: "Catch the issues hiding in plain sight.", description: "Monitor platform health, broken conversion paths, and security risks in one place. Know what needs attention before it holds your business back.", image: "/assets/platform-diagnostic.png", alt: "Insight Hub diagnostic dashboard with uptime, sessions, security scans, system health, and activity log" },
  { title: "90-Day Action Plan", icon: "path-file", headline: "A clear plan. In the right order.", description: "Turn your findings into step-by-step tasks, prioritized by business ROI. See what is happening now, what comes next, and who owns the work." },
  { title: "Performance Radar", icon: "path-quiz", headline: "Measure progress that matters.", description: "Connect leads, organic search visibility, and site speed with business outcomes. Understand which channels and improvements are moving you forward.", image: "/assets/platform-impact.png", alt: "Insight Hub impact dashboard showing return on ad spend, revenue, lead-to-sale funnel, and campaign performance" },
  { title: "Direct AM Access", icon: "path-wrench", headline: "Your account manager, in the loop.", description: "Request updates, review tasks, and approve technical fixes with your dedicated account manager. Keep decisions close to the work." },
];

function PlanPreview() {
  return <div className="platform-native-preview">
    <div className="platform-preview-heading"><div><span>INSIGHT HUB / ACTION PLAN</span><h3>Your next 90 days</h3><p>A focused path from diagnosis to growth.</p></div><span className="platform-preview-tag">Illustrative preview</span></div>
    <div className="platform-plan-columns">{[
      { phase: "Days 01–30", title: "Build the foundation", tasks: [["Repair mobile lead form", "High business impact", "In progress"], ["Verify conversion tracking", "Measurement", "Ready for review"], ["Resolve critical speed issues", "Performance", "Next up"]] },
      { phase: "Days 31–60", title: "Improve what converts", tasks: [["Refine the enquiry journey", "Conversion", "Planned"], ["Strengthen search visibility", "Organic growth", "Planned"], ["Review landing-page signals", "Analytics", "Planned"]] },
      { phase: "Days 61–90", title: "Scale with confidence", tasks: [["Review qualified lead growth", "Business outcomes", "Planned"], ["Expand high-performing channels", "Growth", "Planned"], ["Set the next 90-day priorities", "Strategy", "Planned"]] },
    ].map(column => <div className="platform-plan-column" key={column.phase}><span>{column.phase}</span><h4>{column.title}</h4>{column.tasks.map(([title, type, status]) => <div className="platform-plan-task" key={title}><small>{type}</small><h5>{title}</h5><span>{status}</span></div>)}</div>)}</div>
  </div>;
}

function ManagerPreview() {
  return <div className="platform-native-preview">
    <div className="platform-preview-heading"><div><span>INSIGHT HUB / YOUR TEAM</span><h3>Clarity, with a human behind it.</h3><p>One place for feedback, approvals, and progress.</p></div><span className="platform-preview-tag">Illustrative preview</span></div>
    <div className="platform-manager-layout"><div className="platform-conversation"><span className="platform-overline">Task discussion · Mobile lead form</span><div className="platform-message"><span className="platform-avatar">AM</span><div><strong>Your account manager</strong><p>We’ve identified a validation issue in the mobile enquiry form. The fix is ready for your review.</p><small>Technical update</small></div></div><div className="platform-message platform-message--reply"><span className="platform-avatar">You</span><div><strong>You</strong><p>Thanks. Please include a check of the confirmation message before we publish.</p><small>Feedback received</small></div></div><div className="platform-message"><span className="platform-avatar">AM</span><div><strong>Your account manager</strong><p>Added to the checklist. We’ll share the final review here before the update goes live.</p><small>Next step confirmed</small></div></div></div><div className="platform-review"><span className="platform-overline">Ready for review</span><h4>Mobile enquiry flow</h4><p>Review the work with full context before approving the next step.</p><ul><li>Form validation repaired</li><li>Confirmation message checked</li><li>Conversion event verified</li></ul><span className="platform-preview-tag">Awaiting your approval</span></div></div>
  </div>;
}

export function PlatformShowcase() {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const item = capabilities[active];
  function onTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % capabilities.length;
    else if (event.key === "ArrowLeft") next = (index + capabilities.length - 1) % capabilities.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = capabilities.length - 1;
    else return;
    event.preventDefault(); setActive(next); refs.current[next]?.focus();
  }
  return <section className="platform-showcase" id="platform-demo" aria-label="Explore inside Insight Hub">
    <div className="platform-container">
      <div className="platform-tabs" role="tablist" aria-label="Platform capabilities">{capabilities.map((capability, index) => <button key={capability.title} ref={el => { refs.current[index] = el; }} type="button" id={`capability-tab-${index}`} role="tab" aria-selected={active === index} aria-controls={`capability-panel-${index}`} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => onTabKey(event, index)}><span><Image src={`/assets/${capability.icon}.svg`} width={18} height={18} alt="" /></span>{capability.title}</button>)}</div>
      <div className="platform-showcase__frame" role="tabpanel" id={`capability-panel-${active}`} aria-labelledby={`capability-tab-${active}`} tabIndex={0}>
        <div className="platform-screen" key={active}>
          {item.image ? <Image className="platform-screen__image" src={item.image} alt={item.alt ?? ""} width={2880} height={active === 0 ? 2400 : 2600} sizes="calc(100vw - 180px)" priority={active === 0} /> : active === 1 ? <PlanPreview /> : <ManagerPreview />}
        </div>
        <div className="platform-showcase__caption"><div><span>{item.title}</span><h2>{item.headline}</h2><p>{item.description}</p></div><a className="button button--secondary" href="mailto:admin@talatech.io?subject=Insight%20Hub%20platform%20walkthrough">Book a walkthrough <span aria-hidden="true">↗</span></a></div>
      </div>
      <p className="platform-preview-note">Explore the platform · Dashboard screenshots and illustrative workflows. Preview data is not live.</p>
    </div>
  </section>;
}
