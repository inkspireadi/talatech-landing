import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./blog.css";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <div className="blog-site"><SiteHeader />{children}<SiteFooter /></div>;
}
