import Image from "next/image";

const diagnosticStats = [
  {
    label: "Site uptime",
    value: "99.98%",
    change: "+0.02% this month",
  },
  {
    label: "Total Sessions",
    value: "24,847",
    change: "+18.2% vs last month",
  },
  {
    label: "Total ROAS",
    value: "4.85x",
    change: "+0.82x vs last month",
  },
];

const growthBars = [76, 59, 76, 88, 95, 111, 138];

export function DiagnosticVisual() {
  return (
    <div
      className="insight-card__visual diagnostic-visual"
      aria-hidden="true"
      data-node-id="43:2466"
    >
      <div className="diagnostic-window">
        <div className="diagnostic-window__bar">
          <div className="diagnostic-window__lights">
            <span />
            <span />
            <span />
          </div>
          <span className="diagnostic-window__handle" />
        </div>

        <div className="diagnostic-window__content">
          <span className="diagnostic-window__title">
            Diagnostic center
          </span>

          <div className="diagnostic-window__stats">
            {diagnosticStats.map((stat) => (
              <div className="diagnostic-stat" key={stat.label}>
                <span className="diagnostic-stat__label">{stat.label}</span>
                <div className="diagnostic-stat__body">
                  <span className="diagnostic-stat__value">{stat.value}</span>
                  <span className="diagnostic-stat__change">
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="diagnostic-window__skeleton">
            <span />
            <span />
            <span />
          </div>

          <span className="diagnostic-cursor">
            <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M6.80276 1.62973L12.8363 3.99069C16.3163 5.35243 18.0563 6.03329 17.9986 7.1133C17.9409 8.1934 16.125 8.6886 12.4932 9.6791C11.4119 9.974 10.8712 10.1215 10.4963 10.4963C10.1214 10.8712 9.97404 11.4119 9.67904 12.4933C8.68864 16.125 8.19334 17.9409 7.11334 17.9986C6.03329 18.0563 5.35243 16.3163 3.99069 12.8363L1.62973 6.80276C0.204049 3.15934 -0.508791 1.33764 0.414419 0.414419C1.33764 -0.508791 3.15935 0.204049 6.80276 1.62973Z"
                fill="#9A0DFE"
              />
            </svg>
            <span className="diagnostic-cursor__pulse" />
          </span>
        </div>
      </div>
      <span className="insight-card__visual-fade" />
    </div>
  );
}

function TaskItem() {
  return (
    <div className="task-item">
      <div className="task-item__inner">
        <div className="task-item__details">
          <span className="task-item__icon">
            <Image
              src="/assets/task-bolt.svg"
              alt=""
              width={15}
              height={15}
              aria-hidden="true"
            />
          </span>
          <span className="task-item__copy">
            <span className="task-item__title">Repair mobile lead form</span>
            <span className="task-item__meta">High revenue impact</span>
          </span>
        </div>
        <span className="task-item__button">Take action</span>
      </div>
    </div>
  );
}

export function TasksVisual() {
  return (
    <div
      className="insight-card__visual tasks-visual"
      aria-hidden="true"
      data-node-id="43:2510"
    >
      <div className="tasks-ticker">
        {[0, 1, 2, 3, 4].map((item) => (
          <div className="tasks-ticker__item" key={item}>
            <TaskItem />
          </div>
        ))}
      </div>
      <span className="insight-card__visual-fade" />
    </div>
  );
}

export function GrowthVisual() {
  return (
    <div
      className="insight-card__visual growth-visual"
      aria-hidden="true"
      data-node-id="43:2554"
    >
      <div className="growth-visual__summary">
        <span>Qualified leads</span>
        <strong aria-label="148 percent">
          <span className="sr-only">148%</span>
        </strong>
      </div>
      <div className="growth-chart">
        <span className="growth-chart__grid growth-chart__grid--one" />
        <span className="growth-chart__grid growth-chart__grid--two" />
        <span className="growth-chart__grid growth-chart__grid--three" />
        <span className="growth-chart__change">+28.4%</span>
        <div className="growth-chart__bars">
          {growthBars.map((height, index) => (
            <span
              className={
                index === growthBars.length - 1
                  ? "growth-chart__bar growth-chart__bar--accent"
                  : "growth-chart__bar"
              }
              key={`${height}-${index}`}
              style={{ height }}
            />
          ))}
        </div>
      </div>
      <span className="insight-card__visual-fade" />
    </div>
  );
}

const insightCards = [
  {
    nodeId: "43:2464",
    Visual: DiagnosticVisual,
    title: "See what needs attention",
    description:
      "Live checks surface speed, security, and conversion issues before they cost you.",
  },
  {
    nodeId: "43:2508",
    Visual: TasksVisual,
    title: "Know exactly what to do next",
    description:
      "Every task is prioritized by business impact, not dashboard noise.",
  },
  {
    nodeId: "43:2552",
    Visual: GrowthVisual,
    title: "Connect activity to growth",
    description:
      "Track the signals that matter: leads, search visibility, and site performance.",
  },
];

export function InsightHub() {
  return (
    <section
      className="insight"
      aria-labelledby="insight-title"
      data-reveal="insight"
      data-node-id="40:2058"
    >
      <div className="insight__heading" data-node-id="40:2060">
        <span className="insight__eyebrow">Insight Hub</span>
        <h2 className="motion-copy motion-copy--heading" id="insight-title">
          Watch your business data&nbsp;work for you.
        </h2>
        <p className="motion-copy motion-copy--description">
          Most analytics tools give you graphs you cannot read. Insight Hub
          turns complex numbers into simple daily steps—tracking activity,
          spotting bugs, and telling your team what to fix next.
        </p>
      </div>

      <div className="insight__panel" data-node-id="40:2065">
        <Image
          className="insight__background"
          src="/assets/insight-bg.png"
          alt=""
          fill
          sizes="calc(100vw - 20px)"
          unoptimized
          aria-hidden="true"
        />

        <div className="insight__cards">
          {insightCards.map(({ Visual, ...card }) => (
            <article
              className="insight-card"
              data-node-id={card.nodeId}
              key={card.title}
            >
              <div className="insight-card__inner">
                <Visual />
                <div className="insight-card__copy">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <a
          className="insight__cta"
          href="#"
          data-node-id="40:2179"
        >
          <span>Find my next step</span>
          <Image
            src="/assets/arrow-right-01.svg"
            alt=""
            width={18}
            height={18}
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
}
