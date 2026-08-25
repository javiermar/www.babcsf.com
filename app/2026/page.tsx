import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "2026 Scholarship Cycle & Gala | BABC Scholarship Foundation",
  description: "Apply for the 2026 BABC scholarship cycle, meet Rising Star Naomi Zamora, and support the Fifth Annual BABC Scholarship Foundation Gala.",
  alternates: { canonical: "/2026" },
};

const links = {
  apply: "https://form.jotform.com/262286896162065",
  donate: "https://buy.stripe.com/8wM2aW13q7Gu3lKcMM",
  gala: "https://babcsf.aweb.page/2026BABCgala",
  sponsor: "https://drive.google.com/file/d/1oydRY-pn4nawDV7rSOKZb8yjtNAGPMzu/view?usp=share_link",
} as const;

const images = {
  naomi: "https://www.babcsf.com/uploads/5/0/9/3/50936111/naomi_orig.jpg",
  scholars: "https://www.babcsf.com/uploads/5/0/9/3/50936111/unnamed-5_orig.jpg",
} as const;

function LogoPlaceholder() {
  return (
    <div className="logo-placeholder" aria-label="BABC Scholarship Foundation logo placeholder">
      <span className="logo-mark">LOGO</span>
      <span className="logo-copy"><strong>BABC</strong><small>Scholarship Foundation</small></span>
    </div>
  );
}

function Cta({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) {
  return (
    <a className={`cta ${secondary ? "cta-secondary" : ""}`} href={href} target="_blank" rel="noopener noreferrer" data-track="cta">
      {children}<span aria-hidden>→</span>
    </a>
  );
}

export default function Campaign2026() {
  return (
    <>
      <header className="site-header">
        <Link href="/" className="brand-link"><LogoPlaceholder /></Link>
        <nav aria-label="Campaign navigation">
          <a href="#scholarship">Scholarship</a>
          <a href="#gala">Gala</a>
          <a href="#sponsors">Sponsors</a>
          <Link href="/">About BABC</Link>
        </nav>
        <Cta href={links.donate}>Donate</Cta>
      </header>

      <main className="campaign-hero shell">
        <section className="campaign-hero-grid">
          <div>
            <p className="eyebrow">2026 BABC campaign</p>
            <h1>Support the next class of BABC scholars.</h1>
            <p className="lede">The 2026 Scholarship Cycle is open, and our Fifth Annual Gala brings the community together to fund scholarships, mentorship, and brighter futures for young women across Southern California.</p>
            <div className="button-row"><Cta href={links.apply}>Apply Now</Cta><Cta href={links.gala} secondary>Get Gala Tickets</Cta></div>
          </div>
          <div className="hero-visual">
            <div className="hero-main-photo"><Image src={images.scholars} alt="BABC scholarship recipients" fill priority sizes="(max-width: 900px) 100vw, 50vw" /></div>
            <div className="hero-polaroid hero-polaroid-top"><Image src={images.naomi} alt="Naomi Zamora, BABC 2026 Rising Star" fill sizes="220px" /></div>
          </div>
        </section>

        <section className="campaign-card-grid" id="scholarship">
          <article className="campaign-card">
            <p className="eyebrow">2026 Scholarship Cycle</p>
            <h2>Applications are open.</h2>
            <ul>
              <li><strong>August 17 – September 17, 2026</strong></li>
              <li>Current Southern California residents</li>
              <li>High school seniors or first-year college students</li>
              <li>10 scholarships planned at $2,000 each</li>
              <li>Recipients announced on or before October 5, 2026</li>
            </ul>
            <Cta href={links.apply}>Apply Now</Cta>
          </article>

          <article className="campaign-card rising-star-card">
            <div className="rising-star-photo"><Image src={images.naomi} alt="Naomi Zamora" fill sizes="(max-width: 700px) 100vw, 22vw" /></div>
            <div>
              <p className="eyebrow">2026 Rising Star</p>
              <h2>Naomi Zamora</h2>
              <p>Naomi is a recent UCLA graduate in Psychobiology who now works as a 911 dispatcher with the UCLA Police Department. Her story reflects BABC’s commitment to staying connected with scholars beyond the original award.</p>
            </div>
          </article>
        </section>

        <section className="campaign-gala" id="gala">
          <div className="campaign-gala-copy">
            <p className="eyebrow">Fifth Annual Gala</p>
            <h2>BABC Scholarship Foundation Gala</h2>
            <p className="gala-date">Friday, November 13, 2026 · 6:00 PM</p>
            <p>Pacific Palms Resort, City of Industry, California. An elegant evening uniting scholars, sponsors, volunteers, and community leaders to raise funds for scholarships and mentorship.</p>
            <div className="button-row"><Cta href={links.gala}>Purchase Tickets</Cta><Cta href={links.sponsor} secondary>Become a Sponsor</Cta></div>
          </div>
          <div className="campaign-gala-photo"><Image src={images.scholars} alt="BABC scholarship community" fill sizes="(max-width: 900px) 100vw, 56vw" /></div>
        </section>

        <section id="sponsors">
          <div className="section-heading compact" style={{ marginTop: 48 }}>
            <p className="eyebrow">Sponsorship opportunities</p>
            <h2>Put your support directly behind the next generation.</h2>
          </div>
          <div className="sponsor-row">
            <article className="sponsor-card"><strong>Diamond</strong><span>$10,000</span></article>
            <article className="sponsor-card"><strong>Platinum</strong><span>$5,000</span></article>
            <article className="sponsor-card"><strong>Gold</strong><span>$2,000</span></article>
            <article className="sponsor-card"><strong>Silver</strong><span>$600</span></article>
          </div>
        </section>

        <section className="impact-bar" aria-label="BABC impact">
          <article><span className="impact-icon">27</span><div><strong>27</strong><small>Scholarships awarded</small></div></article>
          <article><span className="impact-icon">$</span><div><strong>$45,500+</strong><small>Invested since 2022</small></div></article>
          <article><span className="impact-icon">★</span><div><strong>Ongoing</strong><small>Mentorship and community support</small></div></article>
        </section>
      </main>

      <footer style={{ marginTop: 64 }}>
        <div className="shell footer-grid">
          <LogoPlaceholder />
          <p>BABC Scholarship Foundation is a 501(c)(3) nonprofit organization committed to empowering young women to believe, achieve, and pursue higher education.</p>
          <div><p>964 East Badillo Street #223<br />Covina, CA 91724</p><p>Tax ID #93-1833636</p></div>
          <Cta href={links.donate}>Donate</Cta>
        </div>
      </footer>
    </>
  );
}
