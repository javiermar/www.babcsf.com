import type { ReactNode } from "react";
import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { CarouselControls } from "@/components/CarouselControls";
import { GraduationCapIcon, HeartIcon, UsersIcon } from "@/components/Icons";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { MobileNav } from "@/components/MobileNav";
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
  gala: "https://www.babcsf.com/uploads/5/0/9/3/50936111/babc-sf-2026-gala_orig.jpg",
} as const;

const board = [
  ["Jade Ramos", "President", "https://www.babcsf.com/uploads/5/0/9/3/50936111/editor/jade-ramos_1.jpg"],
  ["Janie Rodriguez", "Vice President", "https://www.babcsf.com/uploads/5/0/9/3/50936111/editor/janie-marquez_1.png"],
  ["Martha Morales", "Treasurer", "https://www.babcsf.com/uploads/5/0/9/3/50936111/editor/martha-morales_1.png"],
  ["Veronica Franco", "Co-Treasurer", "https://www.babcsf.com/uploads/5/0/9/3/50936111/veronicapic_orig.jpg"],
  ["Nora Garcia", "Secretary", "https://www.babcsf.com/uploads/5/0/9/3/50936111/published/nora-garcia_1.jpg"],
  ["Rosa Alicia Centeno", "Director", "https://www.babcsf.com/uploads/5/0/9/3/50936111/published/rosa-alicia-headshot_1.png"],
  ["Jennifer Zamora", "Director", "https://www.babcsf.com/uploads/5/0/9/3/50936111/published/jen-zamora-headshot_1.jpg"],
] as const;

const scholarSlides = [
  { eyebrow: "2025 cohort", title: "Nine scholars celebrated", body: "A growing class of young women supported by BABC scholarships, mentorship, and community.", image: images.scholars2025, alt: "BABC 2025 scholarship recipients" },
  { eyebrow: "2026 Rising Star", title: "Naomi Zamora", body: "UCLA Psychobiology graduate, former research assistant, and now a 911 dispatcher with UCLA Police.", image: images.naomi, alt: "Naomi Zamora, BABC 2026 Rising Star" },
  { eyebrow: "2024 cohort", title: "Eight scholars, $16,000 invested", body: "Selected from more than 110 applicants representing 18 Southern California schools and colleges.", image: images.scholars2024, alt: "BABC 2024 scholarship recipients" },
] as const;

const scholarshipSteps = [
  ["Aug 17", "Applications open"],
  ["Sep 17", "Application deadline"],
  ["By Oct 5", "Recipients announced"],
  ["Nov 13", "Scholarship Gala"],
] as const;

function Cta({ href, children, outline = false }: { href: string; children: ReactNode; outline?: boolean }) {
  return <a className={`btn ${outline ? "btn-outline" : "btn-primary"}`} href={href} target="_blank" rel="noopener noreferrer" data-track="cta">{children}<span aria-hidden>→</span></a>;
}

export default function Home() {
  return (
    <>
      <header className="site-header-wrap">
        <div className="navbar shell site-nav">
          <a href="#top" className="brand" aria-label="BABC Scholarship Foundation home"><span className="brand-mark" aria-hidden>✦</span><span><strong>BABC</strong><small>Scholarship Foundation</small></span></a>
          <nav aria-label="Primary navigation" className="nav-links"><a href="#mission">About</a><a href="#scholarships">Scholarships</a><a href="#mentorship">Mentorship</a><a href="#gala">Gala</a><a href="#board">Board</a></nav>
          <div className="nav-actions"><MobileNav /><Cta href={links.donate}>Donate</Cta></div>
        </div>
      </header>

      <main id="top">
        <section className="shell hero-grid">
          <MotionReveal className="hero-copy" direction="left"><p className="eyebrow">Believe &amp; Achieve</p><AnimatedHeadline before="Empowering young women to" accent="believe, achieve," after="and pursue higher education." /><p className="lede">Scholarships open the door. Mentorship, leadership development, and a community of accomplished women help scholars keep moving forward.</p><div className="actions"><Cta href={links.apply}>Apply for a Scholarship</Cta><Cta href={links.donate} outline>Donate</Cta></div></MotionReveal>
          <MotionReveal className="hero-collage" delay={0.08} direction="right"><div className="hero-main"><ImageWithSkeleton src={images.scholars2025} alt="BABC scholarship recipients" fill priority sizes="(max-width: 900px) 100vw, 50vw" /></div><div className="floating-photo floating-one"><ImageWithSkeleton src={images.naomi} alt="BABC scholar Naomi Zamora" fill sizes="220px" /></div><div className="floating-photo floating-two"><ImageWithSkeleton src={images.scholars2024} alt="BABC scholars" fill sizes="220px" /></div></MotionReveal>
        </section>

        <MotionReveal className="shell stats stats-horizontal card" aria-label="BABC impact at a glance">
          <div className="stat"><div className="stat-figure"><GraduationCapIcon /></div><div className="stat-value">27</div><div className="stat-desc">Scholarships awarded</div></div>
          <div className="stat"><div className="stat-figure"><HeartIcon /></div><div className="stat-value">$45,500+</div><div className="stat-desc">Invested since 2022</div></div>
          <div className="stat"><div className="stat-figure"><UsersIcon /></div><div className="stat-value">110+</div><div className="stat-desc">Applicants in 2024</div></div>
        </MotionReveal>

        <section id="mission" className="shell mission-grid section-pad">
          <MotionReveal direction="left"><p className="eyebrow">Our mission</p><h2>More than a scholarship. A lifelong commitment.</h2><p className="body-copy">BABC walks alongside scholars with funding, mentorship, encouragement, and meaningful professional exposure so they can thrive in college, in their careers, and in life.</p><p className="signature">We believe in her. We invest in her future. We celebrate her success.</p></MotionReveal>
          <MotionReveal delay={0.08} direction="right" className="spotlight-wrap"><div className="section-row"><div><p className="eyebrow">Scholar stories</p><h3 className="compact-heading">Meet the women at the center of the mission.</h3></div><CarouselControls targetId="scholar-carousel" label="scholar stories" /></div><div id="scholar-carousel" className="carousel carousel-start scholar-carousel" aria-label="Scholar stories">{scholarSlides.map((slide) => <article className="carousel-item card scholar-slide" key={slide.title}><div className="scholar-slide-image"><ImageWithSkeleton src={slide.image} alt={slide.alt} fill sizes="(max-width: 900px) 82vw, 380px" /></div><div className="scholar-slide-copy"><span>{slide.eyebrow}</span><h3>{slide.title}</h3><p>{slide.body}</p></div></article>)}</div></MotionReveal>
        </section>

        <section id="scholarships" className="section-soft"><div className="shell scholarship-stack"><MotionReveal className="section-intro"><p className="eyebrow">2026 Scholarship Cycle</p><h2>Applications are open now.</h2><p className="body-copy">Ten $2,000 scholarships are planned for current Southern California high school seniors and first-year college students.</p></MotionReveal><MotionReveal delay={0.05} className="steps-wrap"><ul className="steps steps-horizontal scholarship-steps" aria-label="2026 scholarship timeline">{scholarshipSteps.map(([date,label],index)=><li className="step step-primary" data-content={String(index+1)} key={date}><span className="step-copy"><strong>{date}</strong><small>{label}</small></span></li>)}</ul></MotionReveal><div className="scholarship-detail-grid"><MotionReveal direction="left" className="scholarship-collapses"><details className="collapse collapse-arrow bg-base-100 border border-base-300" open><summary className="collapse-title">Who can apply?</summary><div className="collapse-content"><p>Current Southern California residents who are high school seniors or first-year college students.</p></div></details><details className="collapse collapse-arrow bg-base-100 border border-base-300"><summary className="collapse-title">What does BABC consider?</summary><div className="collapse-content"><p>Educational commitment, financial need, resilience, leadership, community involvement, and a positive vision for the future.</p></div></details><details className="collapse collapse-arrow bg-base-100 border border-base-300"><summary className="collapse-title">What happens after the award?</summary><div className="collapse-content"><p>Recipients join a growing community with mentorship, networking, leadership experiences, and continued alumni connection.</p></div></details></MotionReveal><MotionReveal id="mentorship" direction="right" className="mentorship-card card"><p className="eyebrow">Mentorship that makes a difference</p><h2>Our scholars are never alone on their journey.</h2><ul className="check-list"><li>Confidence-building and leadership development</li><li>Professional exposure and career exploration</li><li>Networking with accomplished women leaders</li><li>Life-skills programming for long-term success</li></ul><Cta href={links.apply}>Apply Now</Cta></MotionReveal></div></div></section>

        <section id="board" className="shell section-pad board-section"><MotionReveal><div className="section-row"><div><p className="eyebrow">Meet our board</p><h2>A professional network turned into opportunity.</h2></div><div className="board-intro"><p className="body-copy">Leaders from finance, real estate, banking, tax, title, and community development volunteer their time and experience to support scholars.</p><CarouselControls targetId="board-carousel" label="board members" /></div></div></MotionReveal><MotionReveal delay={0.06} id="board-carousel" className="carousel carousel-start board-carousel" aria-label="BABC board members">{board.map(([name,role,image])=><article className="carousel-item card board-card" key={name}><div className="board-photo"><ImageWithSkeleton src={image} alt={`${name}, ${role}`} fill sizes="220px" /></div><h3>{name}</h3><p>{role}</p></article>)}</MotionReveal></section>

        <section id="gala" className="gala-section"><div className="shell gala-grid"><MotionReveal className="gala-copy" direction="left"><p className="eyebrow light">Save the date</p><h2>Fifth Annual BABC Scholarship Foundation Gala</h2><p className="gala-date">Friday, November 13, 2026 · 6:00 PM</p><p className="body-copy light-copy">An elegant evening uniting scholars, sponsors, volunteers, and community leaders to fund the next class of BABC scholars.</p><div className="gala-meta"><span>Pacific Palms Resort</span><span>Great Gatsby Affair</span></div><div className="actions"><Cta href={links.gala}>View Gala</Cta><Cta href={links.sponsor} outline>Become a Sponsor</Cta></div></MotionReveal><MotionReveal className="gala-image gala-poster-panel" delay={0.08} direction="right"><ImageWithSkeleton className="gala-poster" src={images.gala} alt="2026 BABC Scholarship Foundation Gala" fill sizes="(max-width: 900px) 100vw, 50vw" /></MotionReveal></div></section>

        <section className="shell final-cta section-pad"><MotionReveal><p className="eyebrow">Keep the circle growing</p><h2>Help a young woman turn possibility into a degree.</h2><div className="actions"><Cta href={links.donate}>Make a Donation</Cta><Cta href={links.apply} outline>Apply for a Scholarship</Cta></div></MotionReveal></section>
      </main>

      <footer className="site-footer"><div className="shell footer-grid"><div className="footer-brand"><strong>BABC Scholarship Foundation</strong><p>Believe and Achieve Book Club Scholarship Foundation</p><p className="footer-mission">Scholarships, mentorship, and opportunity for young women across Southern California.</p></div><div><span className="footer-label">Mailing address</span><p>964 East Badillo Street #223<br/>Covina, CA 91724</p></div><div><span className="footer-label">Nonprofit information</span><p>501(c)(3) nonprofit<br/>Tax ID #93-1833636</p></div><div className="footer-actions"><Cta href={links.donate}>Donate</Cta><p>© 2026 BABC Scholarship Foundation</p></div></div></footer>
    </>
  );
}
