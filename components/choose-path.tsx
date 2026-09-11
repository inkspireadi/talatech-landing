import Image from "next/image";

const paths = [
  {
    nodeId: "40:2191",
    tone: "purple",
    tilt: "left",
    icon: "/assets/path-wrench.svg",
    title: "I have an existing website",
    description:
      "Find performance, traffic, conversion, and security problems in one 60-second scan.",
    action: "Run site diagnostic",
  },
  {
    nodeId: "40:2203",
    tone: "blue",
    tilt: "right",
    icon: "/assets/path-quiz.svg",
    title: "I need a new digital build",
    description:
      "Scope an intelligence-driven website or application around measurable business goals.",
    action: "Start 4-question intake",
  },
  {
    nodeId: "40:2214",
    tone: "purple",
    tilt: "left",
    icon: "/assets/path-target.svg",
    title: "I’m not sure what I need",
    description:
      "Pinpoint the core traffic and lead gaps before committing to a solution.",
    action: "Find the bottleneck",
  },
  {
    nodeId: "40:2229",
    tone: "blue",
    tilt: "right",
    icon: "/assets/path-file.svg",
    title: "Have project requirements?",
    description:
      "Share your project files and our engineering team will review them within 24 hours.",
    action: "Contact us",
  },
];

export function ChoosePath() {
  return (
    <section
      className="pathways"
      aria-labelledby="pathways-title"
      data-reveal="pathways"
      data-node-id="40:2183"
    >
      <div className="pathways__heading" data-node-id="40:2185">
        <span className="section-eyebrow">Choose your path</span>
        <h2 className="motion-copy motion-copy--heading" id="pathways-title">
          Start with what you&nbsp;know today.
        </h2>
        <p className="motion-copy motion-copy--description">
          Pick the situation that sounds most like yours. We’ll point you
          toward the clearest next move.
        </p>
      </div>

      <div className="pathways__cards" data-node-id="40:2190">
        {paths.map((path, index) => (
          <div className={`path-card-slot path-card-slot--${index + 1}`} key={path.title}>
            <article
              className={`path-card path-card--${path.tone} path-card--tilt-${path.tilt}`}
              data-node-id={path.nodeId}
            >
              <span className="path-card__icon" aria-hidden="true">
                <Image src={path.icon} alt="" width={26} height={26} />
              </span>

              <div className="path-card__bottom">
                <div className="path-card__copy">
                  <h3>{path.title}</h3>
                  <p>{path.description}</p>
                </div>
                <a className="path-card__action" href="#">
                  {path.action}
                </a>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
