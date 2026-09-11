import Image from "next/image";
import Link from "next/link";
import { HeaderNotch } from "@/components/header-notch";

export function SiteHeader() {
  return (
    <header className="site-header">
      <span className="dash-line dash-line--horizontal site-header__rule" aria-hidden="true" />
      <HeaderNotch />
      <Link className="site-header__brand" href="/" aria-label="Talatech home">
        <Image src="/assets/talatech-logo.svg" alt="Talatech" width={158} height={34} priority />
      </Link>
      <Link className="button button--primary site-header__contact" href="/contact">Get in touch</Link>
    </header>
  );
}
