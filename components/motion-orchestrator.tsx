"use client";

import { useLayoutEffect } from "react";

export function MotionOrchestrator() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    root.classList.add("motion-ready");

    if (reducedMotion || !("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("is-revealed"));
      return () => root.classList.remove("motion-ready");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12%", threshold: 0.16 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
