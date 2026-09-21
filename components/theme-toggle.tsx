"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "talatech-theme";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const currentTheme =
      document.documentElement.dataset.theme === "dark" ? "dark" : "light";

    applyTheme(currentTheme);

    const frame = window.requestAnimationFrame(() => {
      setTheme(currentTheme);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    applyTheme(nextTheme);

    try {
      window.localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch {
      // The visual state still changes if browser storage is unavailable.
    }
  };

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "dark"}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        <svg className="theme-toggle__sun" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.7" />
          <path
            d="M12 2.5v2M12 19.5v2M4.5 12h-2M21.5 12h-2M5.28 5.28l1.42 1.42M17.3 17.3l1.42 1.42M18.72 5.28 17.3 6.7M6.7 17.3l-1.42 1.42"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
        <svg className="theme-toggle__moon" viewBox="0 0 24 24" fill="none">
          <path
            d="M20.3 15.2A8.5 8.5 0 0 1 8.8 3.7 8.5 8.5 0 1 0 20.3 15.2Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="sr-only">Toggle color theme</span>
    </button>
  );
}
