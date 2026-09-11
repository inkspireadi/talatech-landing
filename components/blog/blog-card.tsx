import Link from "next/link";
import { BlogArtwork } from "./blog-artwork";
import { formatPostDate, readingTime, type BlogPost } from "@/lib/blog-posts";

export function PostMeta({ post }: { post: BlogPost }) {
  return <div className="blog-meta"><time dateTime={post.date}>{formatPostDate(post.date)}</time><span aria-hidden="true">·</span><span>{readingTime(post)}</span></div>;
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="blog-card">
      <Link href={`/blog/${post.slug}`} className="blog-card__link">
        <BlogArtwork kind={post.artwork} />
        <div className="blog-card__body">
          <span className="blog-category">{post.category}</span>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <div className="blog-card__foot"><PostMeta post={post} /><span className="blog-arrow" aria-hidden="true">↗</span></div>
        </div>
      </Link>
    </article>
  );
}
