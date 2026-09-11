import { InfiniteTicker } from "@/components/infinite-ticker";

const statusItems = [
  "Security monitoring",
  "Operational growth",
  "Performance diagnostics",
];

export function StatusTicker() {
  return (
    <div className="status-ticker" data-node-id="40:1807">
      <InfiniteTicker
        className="status-ticker__viewport"
        duration={22}
        label="Talatech services"
      >
        {Array.from({ length: 4 }, (_, cycle) =>
          statusItems.map((item) => (
            <span className="status-ticker__item" key={`${cycle}-${item}`}>
              <span className="status-ticker__marker" aria-hidden="true" />
              <span>{item}</span>
            </span>
          )),
        )}
      </InfiniteTicker>
    </div>
  );
}
