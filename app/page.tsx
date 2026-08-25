import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const links = {
  apply: "https://form.jotform.com/262286896162065",
  donate: "https://buy.stripe.com/8wM2aW13q7Gu3lKcMM",
  gala: "https://babcsf.aweb.page/2026BABCgala",
  sponsor: "https://drive.google.com/file/d/1oydRY-pn4nawDV7rSOKZb8yjtNAGPMzu/view?usp=share_link",
} as const;

const images = {
  naomi: "https://www.babcsf.com/uploads/5/0/9/3/50936111/naomi_orig.jpg",
  scholars2025: "https://www.babcsf.com/uploads/5/0/9/3/50936111/unnamed-5_orig.jpg",
  scholars2024: "https://www.babcsf.com/uploads/5/0/9/3/50936111/group_orig.jpg",
} as const;

const board = [
  ["Jade Ramos", "President", "https://www.babcsf.com/uploads/5/0/9/3/50936111/editor/jade-ramos_1.jpg"],
  ["Janie Rodriguez", "Vice President", "https://www.babcsf.com/uploads/5/0/9/3/50936111/editor/janie-marquez_1.png"],
  ["Martha Morales", "Treasurer", "https://www.babcsf.com/uploads/5/0/9/3/50936111/editor/martha-morales_1.png"],
  ["Veronica Franco", "Co-Treasurer", "https://www.babcsf.com/uploads/5/0/9/3/50936111/veronicapic_orig.jpg"],
  ["Nora Garcia", "Secretary", "https://www.babcsf.com/uploads/5/0/9/3/50936111/published/nora-garcia_1.jpg"],
] as const;

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

export default function Home() {
  return (
    <>
      <header className="site-header">
        <Link href="/" className="brand-link"><LogoPlaceholder /></Link>
        <nav aria-label="Primary navigation">
          <a href="#mission">About</a>
          <a href="#scholarships">Scholarships</a>
          <a href="#mentorship">Mentorship</a>
          <Link href="/2026">Gala</Link>
          <a href="#board">Board</a>
          <a href="#impact">Impact</a>
        </nav>
        <Cta href={links.donate}>Donate</Cta>
      </header>

      <main>
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">Believe. Achieve. Lead.</p>
            <h1>Empowering young women to <em>believe, achieve,</em> and pursue higher education.</h1>
            <p className="lede">BABC Scholarship Foundation is led by professional women and community leaders who invest in the potential of young women through scholarships, mentorship, leadership development, and community support.</p>
            <div className="button-row">
              <Cta href={links.apply}>Apply for a Scholarship</Cta>
              <Cta href={links.donate} secondary>Donate</Cta>
            </div>
          </div>
          <div className="hero-visual" aria-label="BABC scholars">
            <div className="hero-main-photo"><Image src={images.scholars2025} alt="BABC scholarship recipients" fill priority sizes="(max-width: 900px) 100vw, 50vw" /></div>
            <div className="hero-polaroid hero-polaroid-top"><Image src={images.naomi} alt="Naomi Zamora, 2026 BABC Rising Star" fill sizes="220px" /></div>
            <div className="hero-polaroid hero-polaroid-bottom"><Image src={images.scholars2024} alt="BABC scholarship recipients" fill sizes="200px" /></div>
          </div>
        </section>

        <section id="impact" className="impact-bar shell" aria-label="BABC impact">
          <article><span className="impact-icon">27</span><div><strong>27</strong><small>Scholarships awarded</small></div></article>
          <article><span className="impact-icon">$</span><div><strong>$45,500+</strong><small>Invested since 2022</small></div></article>
          <article><span className="impact-icon">+</span><div><strong>Growing</strong><small>Community of scholars & mentors</small></div></article>
        </section>

        <section id="mission" className="mission shell">
          <div>
            <p className="eyebrow">Our mission</p>
            <h2>More than a scholarship. A lifelong commitment.</h2>
          </div>
          <div className="mission-copy">
            <p>Financial support is only the beginning. BABC walks alongside scholars with mentorship, resources, professional exposure, and encouragement to help them thrive in college, in their careers, and in life.</p>
            <p className="mission-mantra">We believe in her. We invest in her future. We celebrate her success.</p>
          </div>
        </section>

        <section className="scholar-spotlight shell">
          <div className="section-heading">
            <p className="eyebrow">Scholarship recipient spotlight</p>
            <h2>The women at the center of the mission.</h2>
          </div>
          <div className="spotlight-grid">
            <article className="spotlight-card wide">
              <div className="spotlight-image"><Image src={images.scholars2025} alt="2025 BABC scholarship recipients" fill sizes="(max-width: 900px) 100vw, 58vw" /></div>
              <div><span>2025 cohort</span><h3>Nine scholarship recipients</h3><p>Celebrated together with the BABC board and community.</p></div>
            </article>
            <article className="spotlight-card featured">
              <div className="spotlight-image portrait"><Image src={images.naomi} alt="Naomi Zamora" fill sizes="(max-width: 900px) 100vw, 28vw" /></div>
              <div><span>2026 Rising Star</span><h3>Naomi Zamora</h3><p>UCLA graduate in Psychobiology who now works as a 911 dispatcher with the UCLA Police Department.</p></div>
            </article>
          </div>
        </section>

        <section id="scholarships" className="program-band">
          <div className="shell program-grid">
            <article className="program-card scholarship-card">
              <p className="eyebrow">2026 Scholarship Cycle</p>
              <h2>Applications are open.</h2>
              <ul>
                <li><strong>August 17 – September 17, 2026</strong></li>
                <li>Open to current Southern California residents</li>
                <li>For current high school seniors and first-year college students</li>
                <li>Ten scholarships planned at $2,000 each</li>
              </ul>
              <Cta href={links.apply}>Apply Now</Cta>
            </article>
            <article id="mentorship" className="program-card mentorship-card">
              <p className="eyebrow">Mentorship that makes a difference</p>
              <h2>Our scholars are never alone on the journey.</h2>
              <ul>
                <li>Confidence-building and leadership development</li>
                <li>Professional exposure and career exploration</li>
                <li>Networking with accomplished women leaders</li>
                <li>Life-skills programming for long-term success</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="board" className="board shell">
          <div className="section-heading compact">
            <p className="eyebrow">Meet our board</p>
            <h2>A dedicated team of professional women lifting up the next generation.</h2>
          </div>
          <div className="board-grid">
            {board.map(([name, role, image]) => (
              <article className="board-card" key={name}>
                <div className="board-photo"><Image src={image} alt={`${name}, ${role}`} fill sizes="(max-width: 700px) 50vw, 20vw" /></div>
                <h3>{name}</h3><p>{role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="gala-teaser">
          <div className="shell gala-grid">
            <div className="gala-copy">
              <p className="eyebrow">Save the date</p>
              <h2>Fifth Annual BABC Scholarship Foundation Gala</h2>
              <p className="gala-date">Friday, November 13, 2026 · 6:00 PM</p>
              <p>An elegant evening bringing scholars, sponsors, volunteers, supporters, and community leaders together to fund scholarships and mentorship.</p>
              <div className="button-row"><Cta href={links.gala}>View Gala</Cta><Cta href={links.sponsor} secondary>Become a Sponsor</Cta></div>
            </div>
            <div className="gala-photo"><Image src={images.scholars2025} alt="BABC community celebrating scholarship recipients" fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
          </div>
        </section>
      </main>

      <footer>
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
