"use client";

import { useEffect, useRef, useState } from "react";

export function ShareArticle() {
  const [status, setStatus] = useState("Copy article link");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href.split("#")[0]);
      setStatus("Link copied!");
    } catch {
      setStatus("Copy the URL from your address bar");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("Copy article link"), 3500);
  }
  return <button className="blog-share" type="button" aria-label="Copy article link" onClick={copyLink}><span aria-hidden="true">↗</span> <span role="status">{status}</span></button>;
}
