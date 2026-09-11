import Image from "next/image";
import { footerNavigation } from "@/lib/navigation";

const footerDestinations: Record<string, string> = {
  ...Object.fromEntries(footerNavigation.map(({ label, href }) => [label, href])),
  Talasec: "/about#talasec",
  Talachain: "/about#talachain",
  Tytlflow: "/about#tytlflow",
  "+1 (940) 597-5872": "tel:+19405975872",
  "admin@talatech.io": "mailto:admin@talatech.io",
  Newsletter: "#newsletter-email",
};

const footerGroups = [
  {
    title: "Explore",
    links: footerNavigation.map(({ label }) => label),
  },
  {
    title: "Talatech Group",
    links: ["Talasec", "Talachain", "Tytlflow"],
  },
  {
    title: "Contact",
    links: [
      "+1 (940) 597-5872",
      "admin@talatech.io",
      "20 F St NW\nWashington, DC 20001",
    ],
  },
  {
    title: "Signals",
    links: ["Discord", "LinkedIn", "Newsletter"],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer" data-node-id="40:2274">
      <div className="site-footer__top" data-node-id="40:2276">
        <div className="site-footer__top-inner" data-node-id="40:2277">
          <div className="site-footer__identity" data-node-id="40:2278">
            <Image
              src="/assets/talatech-logo.svg"
              alt="Talatech"
              width={158}
              height={34}
            />
            <p>
              Digital intelligence infrastructure
              <br />
              for modern businesses.
            </p>
          </div>

          <div className="site-footer__newsletter" data-node-id="40:2291">
            <div className="site-footer__newsletter-copy">
              <h2>Join the Newsletter</h2>
              <p>
                Business owners, marketers, and operators discuss SEO,
                performance, and growth.
              </p>
            </div>
            <form className="newsletter-form">
              <label className="sr-only" htmlFor="newsletter-email">
                Enter your email
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom" data-node-id="40:2299">
        <div className="site-footer__bottom-inner" data-node-id="40:2300">
          <nav className="site-footer__links" aria-label="Footer navigation">
            {footerGroups.map((group) => (
              <div className="footer-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="footer-group__items">
                  {group.links.map((link) => (
                    <a href={footerDestinations[link] ?? "#"} key={link}>
                      {link.split("\n").map((line, index) => (
                        <span key={line}>
                          {line}
                          {index === 0 && link.includes("\n") ? <br /> : null}
                        </span>
                      ))}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <Image
            className="site-footer__wordmark"
            src="/assets/footer-wordmark.svg"
            alt="Talatech.io"
            width={1360}
            height={168}
            loading="eager"
            unoptimized
            data-node-id="40:2327"
          />
        </div>
      </div>
    </footer>
  );
}
