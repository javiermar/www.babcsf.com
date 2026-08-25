import Image from "next/image";
import type { ReactNode } from "react";
import { MotionReveal } from "@/components/MotionReveal";

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
  gala: "https://www.babcsf.com/uploads/5/0/9/3/50936111/published/gala-2025.jpg",
} as const;

const board = [
  ["Jade Ramos", "President", "https://www.babcsf.com/uploads/5/0/9/3/50936111/editor/jade-ramos_1.jpg"],
  ["Janie Rodriguez", "Vice President", "https://www.babcsf.com/uploads/5/0/9/3/50936111/editor/janie-marquez_1.png"],
  ["Martha Morales", "Treasurer", "https://www.babcsf.com/uploads/5/0/9/3/50936111/editor/martha-morales_1.png"],
  ["Veronica Franco", "Co-Treasurer", "https://www.babcsf.com/uploads/5/0/9/3/50936111/veronicapic_orig.jpg"],
  ["Nora Garcia", "Secretary", "https://www.babcsf.com/uploads/5/0/9/3/50936111/published/nora-garcia_1.jpg"],
] as const;

function Cta({ href, children, outline = false }: { href: string; children: ReactNode; outline?: boolean }) {
  return (
    <a
      className={`btn ${outline ? "btn-outline" : "btn-primary"}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-track="cta"
    >
      {children}<span aria-hidden>→</span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <header className="navbar shell site-nav">
        <a href="#top" className="brand" aria-label="BABC Scholarship Foundation home">
          <span className="brand-mark">✦</span>
          <span><strong>BABC</strong><small>Scholarship Foundation</small></span>
        </a>
        <nav aria-label="Primary navigation" className="nav-links">
          <a href="#mission">About</a><a href="#scholarships">Scholarships</a><a href="#mentorship">Mentorship</a><a href="#gala">Gala</a><a href="#board">Board</a>
        </nav>
        <Cta href={links.donate}>Donate</Cta>
      </header>

      <main id="top">
        <section className="shell hero-grid">
          <MotionReveal className="hero-copy">
            <p className="eyebrow">Believe &amp; Achieve</p>
            <h1>Empowering young women to <em>believe, achieve,</em> and pursue higher education.</h1>
            <p className="lede">BABC is a nonprofit founded by professional women and community leaders. Through scholarships, mentorship, leadership development, and community support, we invest in the potential of young women and help them build brighter futures.</p>
            <div className="actions"><Cta href={links.apply}>Apply for a Scholarship</Cta><Cta href={links.donate} outline>Donate</Cta></div>
          </MotionReveal>
          <MotionReveal className="hero-collage" delay={0.08}>
            <div className="hero-main"><Image src={images.scholars2025} alt="BABC scholarship recipients" fill priority sizes="(max-width: 900px) 100vw, 50vw" /></div>
            <div className="floating-photo floating-one"><Image src={images.naomi} alt="BABC scholar Naomi Zamora" fill sizes="220px" /></div>
            <div className="floating-photo floating-two"><Image src={images.scholars2024} alt="BABC scholars" fill sizes="220px" /></div>
          </MotionReveal>
        </section>

        <section className="shell stats card">
          <div><span className="stat-icon">🎓</span><strong>27</strong><small>Scholarships Awarded</small></div>
          <div><span className="stat-icon">♡</span><strong>$45,500+</strong><small>Invested Since 2022</small></div>
          <div><span className="stat-icon">◎</span><strong>110+</strong><small>Applicants in 2024</small></div>
        </section>

        <section id="mission" className="shell mission-grid section-pad">
          <MotionReveal><p className="eyebrow">Our mission</p><h2>More than a scholarship. A lifelong commitment.</h2><p className="body-copy">Financial support is only the beginning. BABC walks alongside scholars with mentorship, resources, encouragement, and meaningful professional exposure so they can thrive in college, in their careers, and in life.</p><p className="signature">We believe in her. We invest in her future. We celebrate her success.</p></MotionReveal>
          <MotionReveal delay={0.08} className="spotlight-wrap"><p className="eyebrow centered">Scholarship recipient spotlight</p><div className="spotlight-grid"><article className="card scholar-mini"><Image src={images.scholars2024} alt="BABC scholarship recipients" width={480} height={320}/><h3>2024 Cohort</h3><p>Eight scholars selected from more than 110 applicants.</p></article><article className="card scholar-mini featured"><span className="badge badge-primary">2026 Rising Star</span><Image src={images.naomi} alt="Naomi Zamora" width={480} height={320}/><h3>Naomi Zamora</h3><p>UCLA Psychobiology graduate and 911 dispatcher with UCLA Police.</p></article></div></MotionReveal>
        </section>

        <section id="scholarships" className="section-soft"><div className="shell scholarship-grid"><MotionReveal className="card cycle-card"><p className="eyebrow">2026 Scholarship Cycle</p><h2>Applications are open now.</h2><ul className="clean-list"><li><strong>August 17 – September 17, 2026</strong><span>Application window</span></li><li><strong>Southern California residents</strong><span>Current residency requirement</span></li><li><strong>High school seniors &amp; first-year college students</strong><span>Current student eligibility</span></li></ul><Cta href={links.apply}>Apply Now</Cta></MotionReveal><MotionReveal id="mentorship" delay={0.08} className="mentorship-card"><p className="eyebrow">Mentorship that makes a difference</p><h2>Our scholars are never alone on their journey.</h2><ul className="check-list"><li>Confidence-building and leadership development</li><li>Professional exposure and career exploration</li><li>Networking with accomplished women leaders</li><li>Life-skills programming for long-term success</li></ul></MotionReveal></div></section>

        <section id="board" className="shell section-pad"><MotionReveal><p className="eyebrow">Meet our board</p><h2>A dedicated team of professional women committed to lifting up the next generation.</h2></MotionReveal><div className="board-grid">{board.map(([name,role,image],index)=><MotionReveal key={name} delay={index*0.04}><article className="card board-card"><div className="board-photo"><Image src={image} alt={`${name}, ${role}`} fill sizes="220px" /></div><h3>{name}</h3><p>{role}</p></article></MotionReveal>)}</div></section>

        <section id="gala" className="gala-section"><div className="shell gala-grid"><MotionReveal className="gala-copy"><p className="eyebrow light">Save the date</p><h2>Fifth Annual BABC Scholarship Foundation Gala</h2><p>Friday, November 13, 2026 · 6:00 PM</p><p className="body-copy light-copy">An elegant evening bringing together scholars, sponsors, volunteers, and community leaders to fund scholarships and mentorship for young women.</p><div className="actions"><Cta href={links.gala}>View Gala</Cta><Cta href={links.sponsor} outline>Become a Sponsor</Cta></div></MotionReveal><MotionReveal className="gala-image" delay={0.08}><Image src={images.gala} alt="BABC Scholarship Foundation gala" fill sizes="(max-width: 900px) 100vw, 50vw" /></MotionReveal></div></section>

        <section className="shell final-cta section-pad"><MotionReveal><p className="eyebrow">Keep the circle growing</p><h2>Help a young woman turn possibility into a degree.</h2><div className="actions"><Cta href={links.donate}>Make a Donation</Cta><Cta href={links.apply} outline>Apply for a Scholarship</Cta></div></MotionReveal></section>
      </main>

      <footer className="site-footer"><div className="shell footer-grid"><div><strong>BABC Scholarship Foundation</strong><p>Believe and Achieve Book Club Scholarship Foundation</p></div><div><p>964 East Badillo Street #223</p><p>Covina, CA 91724</p></div><div><p>501(c)(3) nonprofit · Tax ID #93-1833636</p><p>© 2026 BABC Scholarship Foundation</p></div></div></footer>
    </>
  );
}
