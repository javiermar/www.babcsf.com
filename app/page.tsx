import Image from "next/image";
import type { ReactNode } from "react";
import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { CarouselControls } from "@/components/CarouselControls";
import { GraduationCapIcon, HeartIcon, UsersIcon } from "@/components/Icons";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { MobileNav } from "@/components/MobileNav";
import { MotionReveal } from "@/components/MotionReveal";
import {
  BOARD_MEMBERS,
  GALA_SPONSORS,
  HOMEPAGE_COPY,
  MENTORSHIP_POINTS,
  NAV_ITEMS,
  SCHOLARSHIP_FAQS,
  SCHOLARSHIP_STEPS,
  SCHOLAR_SLIDES,
  SITE_IMAGES,
  SITE_LINKS,
  type ExternalUrl,
} from "@/lib/site-content";

type CtaProps = Readonly<{
  href: ExternalUrl;
  children: ReactNode;
  outline?: boolean;
}>;

function Cta({ href, children, outline = false }: CtaProps) {
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
      <header className="site-header-wrap">
        <div className="navbar shell site-nav">
          <a href="#top" className="brand min-w-0" aria-label="BABC Scholarship Foundation home">
            <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full md:h-16 md:w-16">
              <Image
                className="scale-[1.9] object-contain"
                src="/logo.png"
                alt=""
                fill
                priority
                sizes="64px"
              />
            </span>
            <span className="hidden leading-tight sm:block">
              <strong className="block font-[var(--font-playfair)] text-[18px] font-semibold text-[#0d2745] md:text-[20px]">BABC</strong>
              <small className="block text-[9px] font-semibold uppercase tracking-[0.12em] text-[#667085] md:text-[10px]">Scholarship Foundation</small>
            </span>
          </a>
          <nav aria-label="Primary navigation" className="nav-links">
            {NAV_ITEMS.map(({ label, href }) => <a href={href} key={href}>{label}</a>)}
          </nav>
          <div className="nav-actions"><MobileNav /><Cta href={SITE_LINKS.donate}>Donate</Cta></div>
        </div>
      </header>

      <main id="top">
        <section className="shell hero-grid">
          <MotionReveal className="hero-copy" direction="left">
            <p className="eyebrow">Believe &amp; Achieve</p>
            <AnimatedHeadline before="Empowering young women to" accent="believe, achieve," after="and pursue higher education." />
            <p className="lede">{HOMEPAGE_COPY.heroLede}</p>
            <div className="actions"><Cta href={SITE_LINKS.apply}>Apply for a Scholarship</Cta><Cta href={SITE_LINKS.donate} outline>Donate</Cta></div>
          </MotionReveal>
          <MotionReveal className="hero-collage" delay={0.08} direction="right">
            <div className="hero-main"><ImageWithSkeleton src={SITE_IMAGES.scholars2025} alt="BABC 2025 scholarship celebration" fill priority sizes="(max-width: 900px) 100vw, 50vw" /></div>
            <div className="floating-photo floating-one"><ImageWithSkeleton src={SITE_IMAGES.naomi} alt="BABC scholar Naomi Zamora" fill sizes="220px" /></div>
            <div className="floating-photo floating-two"><ImageWithSkeleton src={SITE_IMAGES.scholars2024} alt="BABC 2024 scholarship recipients" fill sizes="220px" /></div>
          </MotionReveal>
        </section>

        <MotionReveal className="shell stats stats-horizontal card" aria-label="BABC impact at a glance">
          <div className="stat"><div className="stat-figure"><GraduationCapIcon /></div><div className="stat-value">27</div><div className="stat-desc">Scholarships awarded since 2022</div></div>
          <div className="stat"><div className="stat-figure"><HeartIcon /></div><div className="stat-value">$45,500+</div><div className="stat-desc">Invested in scholarships</div></div>
          <div className="stat"><div className="stat-figure"><UsersIcon /></div><div className="stat-value">120</div><div className="stat-desc">Average applications annually</div></div>
        </MotionReveal>

        <section id="mission" className="shell mission-grid section-pad">
          <MotionReveal direction="left">
            <p className="eyebrow">Our mission</p>
            <h2>More than a scholarship. A lifelong commitment.</h2>
            <p className="body-copy">{HOMEPAGE_COPY.missionBody}</p>
            <p className="signature">{HOMEPAGE_COPY.missionTagline}</p>
          </MotionReveal>
          <MotionReveal delay={0.08} direction="right" className="spotlight-wrap">
            <div className="section-row">
              <div><p className="eyebrow">Scholar stories</p><h3 className="compact-heading">Meet the women at the center of the mission.</h3></div>
              <CarouselControls targetId="scholar-carousel" label="scholar stories" />
            </div>
            <div id="scholar-carousel" className="carousel carousel-start scholar-carousel" aria-label="Scholar stories">
              {SCHOLAR_SLIDES.map((slide) => (
                <article className="carousel-item card scholar-slide" key={slide.title}>
                  <div className="scholar-slide-image"><ImageWithSkeleton src={slide.image} alt={slide.alt} fill sizes="(max-width: 900px) 82vw, 380px" /></div>
                  <div className="scholar-slide-copy"><span>{slide.eyebrow}</span><h3>{slide.title}</h3><p>{slide.body}</p></div>
                </article>
              ))}
            </div>
          </MotionReveal>
        </section>

        <section id="scholarships" className="section-soft">
          <div className="shell scholarship-stack">
            <MotionReveal className="section-intro">
              <p className="eyebrow">2026 Scholarship Cycle</p>
              <h2>Applications are open now.</h2>
              <p className="body-copy">{HOMEPAGE_COPY.scholarshipIntro}</p>
            </MotionReveal>
            <MotionReveal delay={0.05} className="steps-wrap">
              <ul className="steps steps-horizontal scholarship-steps" aria-label="2026 scholarship timeline">
                {SCHOLARSHIP_STEPS.map(({ date, label }, index) => (
                  <li className="step step-primary" data-content={String(index + 1)} key={date}>
                    <span className="step-copy"><strong>{date}</strong><small>{label}</small></span>
                  </li>
                ))}
              </ul>
            </MotionReveal>
            <div className="scholarship-detail-grid">
              <MotionReveal direction="left" className="scholarship-collapses">
                {SCHOLARSHIP_FAQS.map(({ question, answer, initiallyOpen }) => (
                  <details className="collapse collapse-arrow bg-base-100 border border-base-300" open={initiallyOpen} key={question}>
                    <summary className="collapse-title">{question}</summary>
                    <div className="collapse-content"><p>{answer}</p></div>
                  </details>
                ))}
              </MotionReveal>
              <MotionReveal id="mentorship" direction="right" className="mentorship-card card">
                <p className="eyebrow">Mentorship that makes a difference</p>
                <h2>Our scholars are never alone on their journey.</h2>
                <ul className="check-list">{MENTORSHIP_POINTS.map((point) => <li key={point}>{point}</li>)}</ul>
                <Cta href={SITE_LINKS.apply}>Apply Now</Cta>
              </MotionReveal>
            </div>
          </div>
        </section>

        <section id="board" className="shell section-pad board-section">
          <MotionReveal>
            <div className="section-row">
              <div><p className="eyebrow">Meet our board</p><h2>A professional network turned into opportunity.</h2></div>
              <div className="board-intro"><p className="body-copy">{HOMEPAGE_COPY.boardIntro}</p><CarouselControls targetId="board-carousel" label="board members" /></div>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.06} id="board-carousel" className="carousel carousel-start board-carousel" aria-label="BABC board members">
            {BOARD_MEMBERS.map(({ name, role, image }) => (
              <article className="carousel-item card board-card" key={name}>
                <div className="board-photo"><ImageWithSkeleton src={image} alt={`${name}, ${role}`} fill sizes="220px" /></div>
                <h3>{name}</h3><p>{role}</p>
              </article>
            ))}
          </MotionReveal>
        </section>

        <section id="gala" className="gala-section">
          <div className="shell gala-grid">
            <MotionReveal className="gala-copy" direction="left">
              <p className="eyebrow light">Save the date</p>
              <h2>Fifth Annual BABC Scholarship Foundation Gala</h2>
              <p className="gala-date">Friday, November 13, 2026 · 6:00 PM</p>
              <p className="body-copy light-copy">An elegant evening uniting scholars, sponsors, volunteers, and community leaders to fund the next class of BABC scholars.</p>
              <div className="gala-meta"><span>Pacific Palms Resort</span><span>Great Gatsby Affair</span></div>
              <div className="actions"><Cta href={SITE_LINKS.gala}>View Gala</Cta><Cta href={SITE_LINKS.sponsor} outline>Become a Sponsor</Cta></div>
            </MotionReveal>
            <MotionReveal className="gala-image gala-poster-panel" delay={0.08} direction="right"><ImageWithSkeleton className="gala-poster" src={SITE_IMAGES.gala} alt="2026 BABC Scholarship Foundation Gala" fill sizes="(max-width: 900px) 100vw, 50vw" /></MotionReveal>
          </div>
        </section>

        <section className="sponsor-section" aria-labelledby="sponsor-heading">
          <div className="shell sponsor-shell">
            <MotionReveal className="sponsor-intro">
              <p className="eyebrow">2026 Gala Sponsors</p>
              <h2 id="sponsor-heading">Community partners investing in our scholars.</h2>
              <p className="body-copy">BABC is grateful to the organizations and donors helping turn scholarship funding into long-term opportunity.</p>
            </MotionReveal>
            <MotionReveal className="sponsor-grid" delay={0.05}>
              {GALA_SPONSORS.map(({ name, tier, image }) => (
                <article className="sponsor-card" key={`${tier}-${name}`}>
                  <div className="sponsor-logo-frame">
                    <ImageWithSkeleton src={image} alt={`${name}, ${tier} sponsor`} fill sizes="(max-width: 700px) 42vw, 180px" />
                  </div>
                  <span>{tier}</span>
                </article>
              ))}
            </MotionReveal>
          </div>
        </section>

        <section className="shell final-cta section-pad">
          <MotionReveal><p className="eyebrow">Keep the circle growing</p><h2>Help a young woman turn possibility into a degree.</h2><div className="actions"><Cta href={SITE_LINKS.donate}>Make a Donation</Cta><Cta href={SITE_LINKS.apply} outline>Apply for a Scholarship</Cta></div></MotionReveal>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div className="footer-brand"><strong>BABC Scholarship Foundation</strong><p>Believe and Achieve Book Club Scholarship Foundation</p><p className="footer-mission">{HOMEPAGE_COPY.footerMission}</p></div>
          <div><span className="footer-label">Mailing address</span><p>964 East Badillo Street #223<br/>Covina, CA 91724</p></div>
          <div><span className="footer-label">Nonprofit information</span><p>501(c)(3) nonprofit<br/>Tax ID #93-1833636</p></div>
          <div className="footer-actions"><Cta href={SITE_LINKS.donate}>Donate</Cta><p>© 2026 BABC Scholarship Foundation</p></div>
        </div>
      </footer>
    </>
  );
}
