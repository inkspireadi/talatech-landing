import type { Metadata } from "next";
import Link from "next/link";
import { BlogArtwork } from "@/components/blog/blog-artwork";
import { PostMeta } from "@/components/blog/blog-card";
import { BlogLibrary } from "@/components/blog/blog-library";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog | Talatech",
  description: "Practical perspectives on website performance, digital operations, and meaningful growth from Talatech.",
};

export default function BlogPage() {
  const featured = blogPosts[0];
  return (
    <main className="blog-main">
      <header className="blog-intro">
        <span className="section-eyebrow">The Talatech journal</span>
        <h1>A little insight.<br />A better <span>next move.</span></h1>
        <p>Ideas for a healthier website, smarter operations,<br />and growth you can understand.</p>
      </header>
      <div className="blog-container">
        <section className="blog-spotlight" aria-label="Featured and latest articles">
          <article className="blog-featured">
            <Link href={`/blog/${featured.slug}`}>
              <BlogArtwork kind={featured.artwork} priority />
              <div className="blog-featured__copy">
                <div className="blog-featured__labels"><span className="blog-category">{featured.category}</span><span className="blog-kicker">FEATURED STORY</span></div>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <div className="blog-featured__foot"><PostMeta post={featured} /><span className="blog-read">Read the story <span aria-hidden="true">↗</span></span></div>
              </div>
            </Link>
          </article>
          <aside className="blog-latest" aria-labelledby="latest-title">
            <div className="blog-latest__heading"><h2 id="latest-title">Latest insights</h2><span className="blog-live-dot" aria-hidden="true" /></div>
            {blogPosts.slice(1, 5).map((post) => (
              <article key={post.slug}><Link href={`/blog/${post.slug}`} className="blog-latest__item"><BlogArtwork kind={post.artwork} /><div><span className="blog-kicker">{post.category}</span><h3>{post.title}</h3><PostMeta post={post} /></div></Link></article>
            ))}
            <a className="blog-text-link" href="#articles-title">Explore all articles <span aria-hidden="true">↓</span></a>
          </aside>
        </section>
        <BlogLibrary posts={blogPosts.slice(1)} />
        <section className="blog-callout"><div><span className="section-eyebrow">Your next step</span><h2>Put your insights to work.</h2><p>Find out where your website needs attention.</p></div><Link className="button button--primary" href="/#pathways-title">Find my next step <span aria-hidden="true">↗</span></Link></section>
      </div>
    </main>
  );
}
