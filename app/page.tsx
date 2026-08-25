import Image from "next/image";

const links = {
  apply: "https://form.jotform.com/262286896162065",
  donate: "https://buy.stripe.com/8wM2aW13q7Gu3lKcMM",
  gala: "https://babcsf.aweb.page/2026BABCgala",
  sponsor: "https://drive.google.com/file/d/1oydRY-pn4nawDV7rSOKZb8yjtNAGPMzu/view?usp=share_link",
};

const stats = [
  ["27", "scholarships awarded"],
  ["$45,500+", "scholarship investment"],
  ["120", "average applications annually"],
  ["90%", "applicants from LMI households"],
  ["45", "school & community partnerships"],
  ["26", "professional women in the book club"],
];

const programs = [
  ["Scholarships", "Open doors to higher education", "College scholarships, first-generation assistance, academic encouragement, and transition support help scholars begin their next chapter with momentum."],
  ["Mentorship", "Stay connected through the journey", "BABC remains alongside scholars through mentorship, alumni engagement, career guidance, check-ins, and a growing network of women invested in their success."],
  ["Leadership", "Build confidence beyond the classroom", "Professional etiquette, networking, golf, financial literacy, and community education create practical opportunities to grow into confident leaders."],
];

const board = [
  ["Jade Ramos", "President"],
  ["Janie Rodriguez", "Vice President"],
  ["Nora Garcia", "Secretary"],
  ["Martha Morales", "Treasurer"],
  ["Veronica Franco", "Co-Treasurer"],
  ["Rosa Alicia Centeno", "Director"],
  ["Jennifer Zamora", "Director"],
];

const growth = [
  ["2022", "4 scholarships", "$3,000"],
  ["2023", "6 scholarships", "$9,000"],
  ["2024", "8 scholarships", "$16,000"],
  ["2025", "9 scholarships", "$17,500"],
];

function Cta({ href, children, secondary = false }: { href: string; children: React.ReactNode; secondary?: boolean }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" data-track="cta" className={secondary ? "btn btn-secondary" : "btn"}>{children}<span aria-hidden>→</span></a>;
}

export default function Home() {
  return (
    <>
      <div className="announcement"><span>2026 scholarship applications are open through September 17.</span><a href={links.apply} target="_blank" rel="noopener noreferrer">Apply now</a></div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="BABC home"><span className="mark">BABC</span><span><strong>Scholarship Foundation</strong><small>Believe &amp; Achieve Book Club</small></span></a>
        <nav aria-label="Primary navigation"><a href="#scholarships">Scholarships</a><a href="#programs">Programs</a><a href="#impact">Impact</a><a href="#gala">Gala</a><a href="#about">About</a></nav>
        <Cta href={links.donate}>Donate</Cta>
      </header>

      <main id="top">
        <section className="hero section-grid">
          <div className="hero-copy">
            <span className="pill">2026 applications are now open</span>
            <p className="eyebrow">From Dreams to Degrees — We Walk With Her!</p>
            <h1>Scholarships are only the beginning.</h1>
            <p className="lede">BABC empowers young women as they transition from high school into college, then stays beside them with mentorship, leadership development, and a community that celebrates every milestone.</p>
            <div className="actions"><Cta href={links.apply}>Apply for a 2026 scholarship</Cta><Cta href={links.donate} secondary>Support a scholar</Cta></div>
            <div className="mini-facts"><span>10 scholarships planned for 2026</span><span>$2,000 per recipient</span><span>Southern California</span></div>
          </div>
          <div className="hero-art" aria-label="BABC scholarship mission graphic">
            <div className="book"><span>Believe</span><strong>&amp;</strong><span>Achieve</span></div>
            <div className="hero-note"><b>Scholarships + mentorship</b><span>A lifelong network for future women leaders.</span></div>
          </div>
        </section>

        <section className="stats" aria-label="BABC impact at a glance">{stats.map(([value,label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>

        <section id="scholarships" className="section scholarship">
          <div className="section-heading"><p className="eyebrow">2026 scholarship program</p><h2>Ten scholarships. Ten young women. One community walking with them.</h2><p>Applicants must be current Southern California residents and either current high school seniors or first-year college students.</p></div>
          <div className="timeline"><div><b>Aug 17</b><span>Applications open</span></div><div><b>Sep 17</b><span>Application deadline</span></div><div><b>By Oct 5</b><span>Recipients announced</span></div><div><b>Nov 13</b><span>Scholarship Gala</span></div></div>
          <div className="split"><div><h3>What BABC considers</h3><ul><li>Educational commitment</li><li>Financial need</li><li>Resilience and leadership</li><li>Community involvement</li><li>A desire to create a positive future</li></ul><Cta href={links.apply}>Start the application</Cta></div><blockquote><span>2026 Rising Star</span><strong>Naomi Zamora</strong><p>UCLA graduate in Psychobiology, research assistant, community volunteer, and now a 911 dispatcher with the UCLA Police Department.</p><q>The beautiful and amazing women are who inspire me to keep going and make a change in society.</q></blockquote></div>
        </section>

        <section id="programs" className="section muted"><div className="section-heading"><p className="eyebrow">How we walk with her</p><h2>A scholarship starts the relationship. It does not end it.</h2><p>BABC is growing from a scholarship provider into a lifetime mentorship ecosystem for future women leaders.</p></div><div className="cards">{programs.map(([k,t,d],i)=><article key={t}><span className="number">0{i+1}</span><p className="eyebrow">{k}</p><h3>{t}</h3><p>{d}</p></article>)}</div></section>

        <section id="impact" className="section"><div className="section-heading"><p className="eyebrow">Impact report · 2022–2025</p><h2>A measurable return on belief.</h2><p>BABC has steadily increased both the number of scholarships awarded and the dollars invested each year since the first gala.</p></div><div className="growth">{growth.map(([year,count,amount])=><div key={year}><b>{year}</b><span>{count}</span><strong>{amount}</strong></div>)}</div><div className="impact-copy"><h3>Scholarships are the starting line.</h3><p>The Foundation uses its network to support educational access, workforce development, financial literacy, leadership development, and long-term community stability. 2026 priorities include formalizing mentorship, strengthening alumni engagement, expanding sponsors, and improving impact reporting.</p></div></section>

        <section id="gala" className="section gala"><div><p className="eyebrow">November 13, 2026 · Pacific Palms Resort</p><h2>The Fifth Annual BABC Scholarship Foundation Gala</h2><p>A Great Gatsby Affair celebrating scholars, sponsors, volunteers, and a community invested in opening doors for young women.</p><div className="actions"><Cta href={links.gala}>Tickets &amp; sponsorships</Cta><Cta href={links.sponsor} secondary>Sponsor package</Cta></div></div><div className="ticket"><span>Individual ticket</span><strong>$155</strong><p>Dinner, two drinks, and entertainment included.</p></div></section>

        <section id="about" className="section muted"><div className="section-heading"><p className="eyebrow">Our story</p><h2>A book club became a community. The community became a foundation.</h2><p>Seven professional women volunteer their time, networks, and experience to raise funds, mentor scholars, create educational opportunities, and grow the Foundation's impact.</p></div><div className="board">{board.map(([name,role])=><article key={name}><div className="avatar" aria-hidden>{name.split(" ").map(n=>n[0]).join("")}</div><div><h3>{name}</h3><p>{role}</p></div></article>)}</div></section>

        <section className="section final-cta"><div><p className="eyebrow">Invest in what comes next</p><h2>Help a young woman turn possibility into a degree.</h2><p>Donations support scholarships, mentorship, career readiness, leadership experiences, and the community that stays connected long after an award is made.</p></div><div className="actions"><Cta href={links.donate}>Make a donation</Cta><Cta href={links.gala} secondary>Become a sponsor</Cta></div></section>
      </main>

      <footer><div><strong>Believe and Achieve Book Club Scholarship Foundation</strong><p>964 East Badillo Street #223, Covina, CA 91724</p><p>501(c)(3) nonprofit · Tax ID #93-1833636</p></div><div><p>© 2026 BABC Scholarship Foundation</p><p>Serving scholars and communities across Southern California.</p></div></footer>
    </>
  );
}
