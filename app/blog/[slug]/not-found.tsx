import Link from "next/link";

export default function ArticleNotFound() {
  return <main className="blog-main"><div className="blog-intro"><span className="section-eyebrow">404 · Article not found</span><h1>A different<br /><span>next move.</span></h1><p>This article isn’t in the journal. Explore our latest insights instead.</p><Link href="/blog" className="button button--primary">Back to the journal</Link></div></main>;
}
