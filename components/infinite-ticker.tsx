import type { CSSProperties, ReactNode } from "react";

type InfiniteTickerProps = {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right";
  duration?: number;
  label?: string;
};

export function InfiniteTicker({
  children,
  className = "",
  direction = "left",
  duration = 24,
  label,
}: InfiniteTickerProps) {
  const style = {
    "--ticker-duration": `${duration}s`,
  } as CSSProperties;

  return (
    <div
      className={`infinite-ticker infinite-ticker--${direction} ${className}`}
      style={style}
      role={label ? "region" : undefined}
      aria-label={label}
    >
      <div className="infinite-ticker__track">
        <div className="infinite-ticker__group">{children}</div>
        <div className="infinite-ticker__group" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
