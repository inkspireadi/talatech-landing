import Image from "next/image";
import { InfiniteTicker } from "@/components/infinite-ticker";

const logoSlots = Array.from({ length: 9 }, (_, index) => index);

function PartnerLogo() {
  return (
    <div className="partners__logo-cell">
      <Image
        src="/assets/microsoft-partner.svg"
        alt="Microsoft"
        width={78}
        height={19}
      />
    </div>
  );
}

export function LogoSection() {
  return (
    <section
      className="partners"
      aria-labelledby="partners-title"
      data-reveal="partners"
      data-node-id="40:1833"
    >
      <div className="partners__heading">
        <span className="partners__eyebrow">Our partners</span>
        <h2 id="partners-title">
          Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting
          industry.
        </h2>
      </div>

      <div className="partners__rows">
        <InfiniteTicker
          className="partners__row partners__row--one"
          direction="left"
          duration={32}
          label="Partner logos moving left"
        >
          {logoSlots.map((slot) => (
            <PartnerLogo key={slot} />
          ))}
        </InfiniteTicker>

        <InfiniteTicker
          className="partners__row partners__row--two"
          direction="right"
          duration={34}
          label="Partner logos moving right"
        >
          {logoSlots.map((slot) => (
            <PartnerLogo key={slot} />
          ))}
        </InfiniteTicker>

        <InfiniteTicker
          className="partners__row partners__row--three"
          direction="left"
          duration={32}
          label="Partner logos moving left"
        >
          {logoSlots.map((slot) => (
            <PartnerLogo key={slot} />
          ))}
        </InfiniteTicker>
      </div>
    </section>
  );
}
