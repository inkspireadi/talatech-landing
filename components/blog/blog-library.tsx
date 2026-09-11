"use client";

import { useRef, useState } from "react";
import { BlogCard } from "./blog-card";
import type { BlogPost } from "@/lib/blog-posts";

const categories = ["All articles", "Strategy", "Performance", "Growth", "Operations"];
const PAGE_SIZE = 3;

export function BlogLibrary({ posts }: { posts: BlogPost[] }) {
  const [category, setCategory] = useState("All articles");
  const [page, setPage] = useState(1);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const filtered = category === "All articles" ? posts : posts.filter((post) => post.category === category);
  const pages = Math.ceil(filtered.length / PAGE_SIZE);
  const displayed = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function changePage(next: number) {
    setPage(next);
    headingRef.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
  }

  return (
    <section className="blog-library" aria-labelledby="articles-title">
      <div className="blog-section-heading"><div><span className="blog-kicker">IDEAS INTO ACTION</span><h2 id="articles-title" ref={headingRef}>The operator’s reading list.</h2></div><span className="blog-count">{posts.length} articles</span></div>
      <div className="blog-filters" role="group" aria-label="Filter articles by topic">
        {categories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => { setCategory(item); setPage(1); }}>{item}</button>)}
      </div>
      <p className="sr-only" role="status">{filtered.length} articles. Page {page} of {pages}.</p>
      <div className="blog-card-grid">{displayed.map((post) => <BlogCard key={post.slug} post={post} />)}</div>
      <nav className="blog-pagination" aria-label="Article pages">
        <button type="button" disabled={page === 1} onClick={() => changePage(page - 1)} aria-label="Previous page">← <span>Previous</span></button>
        <div>{Array.from({ length: pages }, (_, i) => <button key={i} type="button" aria-label={`Page ${i + 1}`} aria-current={page === i + 1 ? "page" : undefined} onClick={() => changePage(i + 1)}>{i + 1}</button>)}</div>
        <button type="button" disabled={page === pages} onClick={() => changePage(page + 1)} aria-label="Next page"><span>Next</span> →</button>
      </nav>
    </section>
  );
}
