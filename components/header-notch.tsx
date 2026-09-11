"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { primaryNavigation } from "@/lib/navigation";

const mix = (from: number, to: number, progress: number) =>
  from + (to - from) * progress;

const ease = (value: number) =>
  value < 0.5
    ? 4 * value * value * value
    : 1 - Math.pow(-2 * value + 2, 3) / 2;

function notchPath(progress: number) {
  const leftTop = mix(585, 330, progress);
  const rightTop = mix(855, 1110, progress);
  const leftBottom = mix(680, 440, progress);
  const rightBottom = mix(760, 1000, progress);
  const depth = 58;
  const shoulder = mix(38, 55, progress);

  return [
    "M0 0H1440V20",
    `H${rightTop}`,
    `C${rightTop - shoulder} 20 ${rightBottom + shoulder} ${depth} ${rightBottom} ${depth}`,
    `H${leftBottom}`,
    `C${leftBottom - shoulder} ${depth} ${leftTop + shoulder} 20 ${leftTop} 20`,
    "H0V0Z",
  ].join(" ");
}

export function HeaderNotch() {
  const [expanded, setExpanded] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const value = expanded ? 1 : 0;
      const frame = requestAnimationFrame(() => {
        progressRef.current = value;
        setProgress(value);
      });
      return () => cancelAnimationFrame(frame);
    }

    const from = progressRef.current;
    const to = expanded ? 1 : 0;
    const duration = expanded ? 720 : 560;
    const start = performance.now();
    let frame = 0;

    const animate = (time: number) => {
      const elapsed = Math.min(1, (time - start) / duration);
      const value = mix(from, to, ease(elapsed));
      progressRef.current = value;
      setProgress(value);

      if (elapsed < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [expanded]);

  return (
    <div
      className={`site-header__notch${expanded ? " is-expanded" : ""}`}
      style={{ width: `${mix(370, 560, progress)}px` }}
      onPointerEnter={() => setExpanded(true)}
      onPointerLeave={() => setExpanded(false)}
      tabIndex={0}
      aria-label="Expand navigation menu"
      onFocus={() => setExpanded(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setExpanded(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") setExpanded(false);
      }}
    >
      <svg
        className="site-header__notch-shape"
        viewBox="0 0 1440 58"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d={notchPath(progress)} />
      </svg>

      <nav className="site-header__menu" aria-label="Primary navigation">
        {primaryNavigation.map((item, index) => (
          <Link
            href={item.href}
            key={item.label}
            onClick={() => setExpanded(false)}
            aria-hidden={!expanded}
            tabIndex={expanded ? 0 : -1}
            style={
              { "--menu-delay": `${180 + index * 48}ms` } as React.CSSProperties
            }
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
