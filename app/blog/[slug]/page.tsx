import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogArtwork } from "@/components/blog/blog-artwork";
import { BlogCard, PostMeta } from "@/components/blog/blog-card";
import { ShareArticle } from "@/components/blog/share-article";
import { blogPosts, getPost } from "@/lib/blog-posts";

export function generateStaticParams() { return blogPosts.map(({ slug }) => ({ slug })); }
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return { title: "Article not found | Talatech" };
  return { title: `${post.title} | Talatech`, description: post.excerpt, openGraph: { type: "article", title: post.title, description: post.excerpt, publishedTime: post.date, authors: ["Talatech Editorial"] } };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const related = blogPosts.filter((entry) => entry.slug !== post.slug).sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category)).slice(0, 3);
  return (
    <main className="blog-main blog-article-main">
      <article>
        <header className="article-intro blog-container">
          <Link className="blog-text-link article-back" href="/blog">← Back to the journal</Link>
          <span className="section-eyebrow">{post.category}</span>
          <h1>{post.title}</h1>
          <p className="article-deck">{post.excerpt}</p>
          <div className="article-byline"><div className="article-author"><span className="article-avatar" aria-hidden="true">t.</span><div><strong>Talatech Editorial</strong><PostMeta post={post} /></div></div><ShareArticle /></div>
        </header>
        <div className="article-cover blog-container"><BlogArtwork kind={post.artwork} priority /></div>
        <div className="article-layout blog-container">
          <aside className="article-sidebar"><nav aria-label="On this page"><span className="blog-kicker">IN THIS ARTICLE</span><ol>{post.sections.map((section, index) => <li key={section.id}><a href={`#${section.id}`}><span>{String(index + 1).padStart(2, "0")}</span>{section.title}</a></li>)}</ol></nav><div className="article-sidebar__note"><span className="section-eyebrow">Insight into action</span><p>A clearer picture starts with your own website.</p><Link className="blog-text-link" href="/#pathways-title">Find your next step ↗</Link></div></aside>
          <div className="article-body">
            <div className="article-takeaway"><span className="blog-kicker">THE TAKEAWAY</span><p>{post.takeaway}</p></div>
            {post.sections.map((section) => <section id={section.id} key={section.id}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.checklist && <ul className="article-checklist">{section.checklist.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}
            <div className="article-end"><span className="article-avatar" aria-hidden="true">t.</span><div><strong>Written by Talatech Editorial</strong><p>Perspectives on websites, digital operations, and the work behind meaningful growth.</p></div></div>
            <div className="article-bottom-links"><Link className="blog-text-link" href="/blog">← All articles</Link><ShareArticle /></div>
          </div>
        </div>
      </article>
      <section className="blog-related blog-container" aria-labelledby="related-title"><div className="blog-section-heading"><div><span className="blog-kicker">KEEP EXPLORING</span><h2 id="related-title">Your next read.</h2></div><Link className="blog-text-link" href="/blog">All articles ↗</Link></div><div className="blog-card-grid">{related.map((entry) => <BlogCard key={entry.slug} post={entry} />)}</div></section>
    </main>
  );
}
