import Image from "next/image";

const steps = [
  {
    nodeId: "40:2252",
    number: "01",
    tone: "purple",
    title: "Free site audit",
    description:
      "Enter your URL to see your site's current health, speed, and lead leaks.",
  },
  {
    nodeId: "40:2257",
    number: "02",
    tone: "blue",
    title: "Data & Analytics",
    description:
      "We install deep tracking to discover how real users interact with your business online.",
  },
  {
    nodeId: "40:2264",
    number: "03",
    tone: "blue",
    title: "Web Support & Maintenance",
    description:
      "We fix technical errors, speed up load times, and secure your site based on real numbers.",
  },
  {
    nodeId: "40:2269",
    number: "04",
    tone: "purple",
    title: "Operational Growth",
    description:
      "As your revenue expands, we scale your campaigns, systems, and traffic workflows.",
  },
];

function StepCard({ step }: { step: (typeof steps)[number] }) {
  return (
    <article
      className={`work-card work-card--${step.tone}`}
      data-node-id={step.nodeId}
    >
      <span className="work-card__number">{step.number}</span>
      <div className="work-card__copy">
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </div>
    </article>
  );
}

export function HowWeWork() {
  return (
    <section
      className="how-work"
      aria-labelledby="how-work-title"
      data-reveal="how-work"
      data-node-id="40:2241"
    >
      <div className="how-work__heading" data-node-id="40:2242">
        <div className="how-work__copy" data-node-id="40:2243">
          <span className="section-eyebrow">How We Work</span>
          <h2 className="motion-copy motion-copy--heading" id="how-work-title">
            Clear steps. No&nbsp;digital guesswork.
          </h2>
          <p className="motion-copy motion-copy--description">
            Every engagement starts with evidence and moves toward focused
            operational growth.
          </p>
        </div>
        <div className="how-work__action-wrap">
          <a className="button button--primary how-work__action" href="#">
            Get in touch
          </a>
        </div>
      </div>

      <div className="how-work__grid" data-node-id="40:2250">
        <div className="how-work__stack">
          <StepCard step={steps[0]} />
          <StepCard step={steps[1]} />
        </div>

        <div
          className="how-work__portrait"
          style={{ position: "relative" }}
          data-node-id="40:2262"
        >
          <Image
            src="/assets/how-we-work.png"
            alt="Two people collaborating at a desk"
            fill
            sizes="420px"
            unoptimized
          />
        </div>

        <div className="how-work__stack">
          <StepCard step={steps[2]} />
          <StepCard step={steps[3]} />
        </div>
      </div>
    </section>
  );
}
