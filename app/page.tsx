import Image from "next/image";
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
  scholars2023: "https://www.babcsf.com/uploads/5/0/9/3/50936111/group2_orig.jpg",
} as const;

const board = [
  {
    name: "Jade Ramos",
    role: "President",
    image: "https://www.babcsf.com/uploads/5/0/9/3/50936111/editor/jade-ramos_1.jpg",
    bio: "Real-estate finance leader and community advocate focused on expanding opportunity for women and the next generation.",
  },
  {
    name: "Janie Rodriguez",
    role: "Vice President",
    image: "https://www.babcsf.com/uploads/5/0/9/3/50936111/editor/janie-marquez_1.png",
    bio: "Banking leader and financial-literacy advocate with more than two decades serving Southern California communities.",
  },
  {
    name: "Martha Morales",
    role: "Treasurer",
    image: "https://www.babcsf.com/uploads/5/0/9/3/50936111/editor/martha-morales_1.png",
    bio: "Real-estate professional and educator centered on homeownership, wealth building, and community service.",
  },
  {
    name: "Veronica Franco",
    role: "Co-Treasurer",
    image: "https://www.babcsf.com/uploads/5/0/9/3/50936111/veronicapic_orig.jpg",
    bio: "Title-industry leader, founding BABC member, and longtime volunteer committed to education and service.",
  },
  {
    name: "Nora Garcia",
    role: "Secretary",
    image: "https://www.babcsf.com/uploads/5/0/9/3/50936111/published/nora-garcia_1.jpg",
    bio: "Bilingual tax professional and small-business owner who has served her community for more than two decades.",
  },
  {
    name: "Rosa Alicia Centeno",
    role: "Director",
    image: "https://www.babcsf.com/uploads/5/0/9/3/50936111/published/rosa-alicia-headshot_1.png",
    bio: "Real-estate professional and community advocate whose work is rooted in education, generosity, and service.",
  },
  {
    name: "Jennifer Zamora",
    role: "Director",
    image: "https://www.babcsf.com/uploads/5/0/9/3/50936111/published/jen-zamora-headshot_1.jpg",
    bio: "Banking and community-development leader advancing financial literacy and economic opportunity.",
  },
] as const;

const impact = [
  ["27", "scholarships awarded through 2025"],
  ["$45,500+", "invested directly in scholarships"],
  ["110+", "2024 applicants from 18 schools"],
] as const;

function ExternalButton({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "quiet" }) {
  return (
    <a
      className={`button ${variant === "quiet" ? "button-quiet" : ""}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-track="cta"
    >
      {children}
      <span aria-hidden>↗</span>
    </a>
  );
}

function SectionIntro({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {body ? <p className="section-copy">{body}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="announcement">
        <span>2026 scholarship applications are open through September 17.</span>
        <a href={links.apply} target="_blank" rel="noopener noreferrer">Apply now</a>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="BABC Scholarship Foundation home">
          <span className="brand-monogram">BABC</span>
          <span className="brand-copy"><strong>Scholarship Foundation</strong><small>Believe &amp; Achieve Book Club</small></span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#scholars">Scholars</a>
          <a href="#mission">Mission</a>
          <a href="#scholarships">Scholarships</a>
          <a href="#board">Board</a>
        </nav>
        <ExternalButton href={links.donate} variant="quiet">Donate</ExternalButton>
      </header>

      <main id="top">
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">From dreams to degrees</p>
            <h1>Belief changes what a young woman can imagine for herself.</h1>
            <p className="hero-lede">
              BABC helps young women move into higher education with scholarships, mentorship, leadership experiences, and a network that keeps showing up after the award.
            </p>
            <div className="actions">
              <ExternalButton href={links.apply}>Apply for a scholarship</ExternalButton>
              <a className="text-link" href="#scholars">Meet our scholars <span aria-hidden>↓</span></a>
            </div>
          </div>

          <figure className="hero-portrait">
            <div className="image-frame image-frame-hero">
              <Image src={images.naomi} alt="Naomi Zamora, BABC scholarship alumna and 2026 Rising Star" fill priority sizes="(max-width: 900px) 100vw, 44vw" />
            </div>
            <figcaption>
              <span>2026 Rising Star</span>
              <strong>Naomi Zamora</strong>
              <small>UCLA graduate · Psychobiology</small>
            </figcaption>
          </figure>
        </section>

        <section id="scholars" className="scholars-section">
          <div className="shell scholars-shell">
            <SectionIntro
              eyebrow="The heart of the foundation"
              title="Meet the women your support is investing in."
              body="Every scholarship represents a student with plans, responsibilities, resilience, and a future already in motion. BABC puts their stories at the center of the work."
            />

            <div className="scholar-gallery">
              <article className="scholar-card scholar-card-wide">
                <div className="image-frame image-frame-group">
                  <Image src={images.scholars2025} alt="The 2025 BABC scholarship recipients" fill sizes="(max-width: 900px) 100vw, 64vw" />
                </div>
                <div className="scholar-card-copy"><span>2025 cohort</span><strong>Nine scholarship recipients</strong><p>Celebrated alongside the board and community at the 2025 scholarship gala.</p></div>
              </article>

              <article className="scholar-card scholar-card-tall">
                <div className="image-frame image-frame-portrait">
                  <Image src={images.naomi} alt="Naomi Zamora on the UCLA campus" fill sizes="(max-width: 900px) 100vw, 30vw" />
                </div>
                <blockquote>
                  “The beautiful and amazing women are who inspire me to keep going and make a change in society.”
                  <cite>Naomi Zamora</cite>
                </blockquote>
              </article>

              <article className="scholar-card scholar-card-wide scholar-card-secondary">
                <div className="image-frame image-frame-group">
                  <Image src={images.scholars2024} alt="The 2024 BABC scholarship recipients" fill sizes="(max-width: 900px) 100vw, 64vw" />
                </div>
                <div className="scholar-card-copy"><span>2024 cohort</span><strong>Eight scholars · $2,000 each</strong><p>Selected from more than 110 applicants across 18 Southern California schools and colleges.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section className="impact-strip shell" aria-label="BABC impact at a glance">
          {impact.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </section>

        <section id="mission" className="mission-section shell">
          <div className="mission-statement">
            <p className="eyebrow">Our mission</p>
            <h2>Open the door. Walk with her. Help her lead.</h2>
          </div>
          <div className="mission-copy">
            <p>
              Believe and Achieve began as a book club created by professional women and community leaders who wanted to support one another and give back. That circle of women grew into a nonprofit scholarship foundation centered on helping young women pursue higher education.
            </p>
            <p>
              Today, BABC combines financial support with mentorship, professional exposure, confidence-building experiences, financial literacy, and a community that celebrates scholars beyond graduation.
            </p>
            <a className="text-link" href="#scholarships">How the scholarship program works <span aria-hidden>→</span></a>
          </div>
        </section>

        <section className="mentorship-feature">
          <div className="shell mentorship-grid">
            <div className="image-frame image-frame-mentorship">
              <Image src={images.scholars2023} alt="BABC scholars participating in an alumni experience" fill sizes="(max-width: 900px) 100vw, 52vw" />
            </div>
            <div className="mentorship-copy">
              <p className="eyebrow">Beyond the award</p>
              <h2>Success is more than tuition.</h2>
              <p>BABC creates experiences that help scholars feel confident in rooms they may be entering for the first time, from professional dining and networking to golf, financial education, alumni connection, and career exposure.</p>
              <p className="pull-quote">A scholarship is the beginning of the relationship, not the end.</p>
            </div>
          </div>
        </section>

        <section id="scholarships" className="scholarship-section shell">
          <SectionIntro
            eyebrow="2026 scholarship program"
            title="Ten $2,000 scholarships for Southern California students."
            body="Applicants must be current Southern California residents and either current high school seniors or first-year college students."
          />

          <div className="scholarship-layout">
            <div className="timeline" aria-label="2026 scholarship timeline">
              <div><span>01</span><strong>August 17</strong><small>Applications open</small></div>
              <div><span>02</span><strong>September 17</strong><small>Application deadline</small></div>
              <div><span>03</span><strong>By October 5</strong><small>Recipients announced</small></div>
              <div><span>04</span><strong>November 13</strong><small>Scholarship gala</small></div>
            </div>
            <aside className="criteria-card">
              <p className="eyebrow">Selection considers</p>
              <ul><li>Educational commitment</li><li>Financial need</li><li>Resilience and leadership</li><li>Community involvement</li><li>A positive vision for the future</li></ul>
              <ExternalButton href={links.apply}>Start the application</ExternalButton>
            </aside>
          </div>
        </section>

        <section id="board" className="board-section">
          <div className="shell">
            <SectionIntro
              eyebrow="Meet the board"
              title="Professional women turning their networks into opportunity."
              body="The BABC board brings together leaders from finance, real estate, banking, tax, title, and community development who volunteer their time and experience to support scholars."
            />
            <div className="board-grid">
              {board.map((member) => (
                <article className="board-card" key={member.name}>
                  <div className="board-photo"><Image src={member.image} alt={`${member.name}, ${member.role} of the BABC Scholarship Foundation`} fill sizes="(max-width: 640px) 50vw, (max-width: 1000px) 33vw, 22vw" /></div>
                  <div className="board-copy"><span>{member.role}</span><h3>{member.name}</h3><p>{member.bio}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="closing-section shell">
          <div>
            <p className="eyebrow">Keep the circle growing</p>
            <h2>Support the next scholar who is ready to believe bigger.</h2>
          </div>
          <div className="closing-actions">
            <ExternalButton href={links.donate}>Make a donation</ExternalButton>
            <ExternalButton href={links.gala} variant="quiet">2026 gala</ExternalButton>
            <ExternalButton href={links.sponsor} variant="quiet">Sponsor package</ExternalButton>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footer-grid">
          <div><strong>BABC Scholarship Foundation</strong><p>Believe and Achieve Book Club Scholarship Foundation</p></div>
          <div><p>964 East Badillo Street #223, Covina, CA 91724</p><p>501(c)(3) nonprofit · Tax ID #93-1833636</p></div>
          <div><p>© 2026 BABC Scholarship Foundation</p><p>Serving scholars across Southern California.</p></div>
        </div>
      </footer>
    </>
  );
}
