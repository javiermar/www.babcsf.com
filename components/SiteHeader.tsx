import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import { NAV_ITEMS, SITE_LINKS } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="site-header-wrap">
      <div className="navbar shell site-nav">
        <Link href="/" className="brand min-w-0" aria-label="BABC Scholarship Foundation home">
          <Image
            src="/logo.png"
            alt="BABC Scholarship Foundation"
            width={190}
            height={72}
            priority
            className="h-14 w-auto max-w-[180px] object-contain object-left md:h-16 md:max-w-[210px]"
          />
        </Link>

        <nav aria-label="Primary navigation" className="nav-links">
          {NAV_ITEMS.map(({ label, href }) => (
            <Link href={href} key={href}>{label}</Link>
          ))}
        </nav>

        <div className="nav-actions">
          <MobileNav />
          <a
            className="btn btn-primary"
            href={SITE_LINKS.donate}
            target="_blank"
            rel="noopener noreferrer"
            data-track="cta"
          >
            Donate <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
