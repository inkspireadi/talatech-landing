import { SiteHeader } from "@/components/site-header";
import { InteractiveHands } from "@/components/interactive-hands";
import { StatusTicker } from "@/components/status-ticker";

export function Hero() {
  return (
    <section className="hero-section" data-node-id="40:1765">
      <div className="hero" aria-labelledby="hero-title" data-node-id="40:1766">
        <SiteHeader />

        <div className="hero__grid" aria-hidden="true">
          <span className="dash-line dash-line--vertical hero__grid-left" />
          <span className="dash-line dash-line--vertical hero__grid-right" />
          <span className="dash-line dash-line--horizontal hero__grid-bottom" />
        </div>

        <div className="hero__content-frame">
          <div className="hero__content">
            <div className="hero__copy">
              <h1 id="hero-title">
                Your website, security, and growth operating with real{" "}
                <span>intelligence.</span>
              </h1>
              <p>
                Stop guessing what works. We diagnose your digital performance
                using clear data and run your web operations through Insight Hub.
              </p>
            </div>

            <div className="hero__actions">
              <a className="button button--primary button--medium" href="#">
                Audit My Site
              </a>
              <a className="button button--secondary button--medium" href="#">
                See Insight Hub
              </a>
            </div>
          </div>
        </div>

        <InteractiveHands />
      </div>
      <StatusTicker />
    </section>
  );
}
