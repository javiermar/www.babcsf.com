import { SiteHeader } from "@/components/SiteHeader";
import { HOMEPAGE_COPY, SITE_LINKS } from "@/lib/site-content";

export { SiteHeader };

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand"><strong>BABC Scholarship Foundation</strong><p>Believe and Achieve Book Club Scholarship Foundation</p><p className="footer-mission">{HOMEPAGE_COPY.footerMission}</p></div>
        <div><span className="footer-label">Mailing address</span><p>964 East Badillo Street #223<br/>Covina, CA 91724</p></div>
        <div><span className="footer-label">Nonprofit information</span><p>501(c)(3) nonprofit<br/>Tax ID #93-1833636</p></div>
        <div className="footer-actions"><a className="btn btn-primary" href={SITE_LINKS.donate} target="_blank" rel="noopener noreferrer">Donate</a><p>© 2026 BABC Scholarship Foundation</p></div>
      </div>
    </footer>
  );
}

export function InteriorHero({ eyebrow, title, body }: Readonly<{ eyebrow: string; title: string; body: string }>) {
  return (
    <section className="section-soft">
      <div className="shell py-16 md:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="max-w-4xl font-[family-name:var(--font-playfair)] text-5xl font-semibold leading-[1.04] tracking-[-.035em] text-[#0d2745] md:text-7xl">{title}</h1>
        <p className="body-copy mt-6 max-w-3xl text-lg">{body}</p>
      </div>
    </section>
  );
}
