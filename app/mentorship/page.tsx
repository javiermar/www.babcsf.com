import type { Metadata } from "next";
import Image from "next/image";
import { InteriorHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { MENTORSHIP_PROGRAMS } from "@/lib/directory";
import { SITE_LINKS } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Mentorship | BABC Scholarship Foundation",
  description: "BABC supports scholars beyond the award through mentorship, professional exposure, confidence building, and alumni connection.",
};

export default function MentorshipPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <InteriorHero eyebrow="Mentorship" title="Success beyond the classroom." body="BABC's current mentorship programming is designed to help scholars build confidence, professional presence, practical skills, and lifelong connections after the scholarship is awarded." />
        <section className="shell grid gap-8 py-16 md:py-20">
          {MENTORSHIP_PROGRAMS.map((program, index) => (
            <article className="grid overflow-hidden rounded-xl border border-[#e8e2d7] bg-white md:grid-cols-2" key={program.title}>
              <div className={`relative min-h-[330px] bg-[#f8f5ee] ${index % 2 ? "md:order-2" : ""}`}><Image src={program.image} alt={program.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div>
              <div className="flex flex-col justify-center p-8 md:p-12"><p className="eyebrow">BABC alumni experience</p><h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight text-[#0d2745]">{program.title}</h2><p className="body-copy mt-5 text-lg">{program.body}</p></div>
            </article>
          ))}
        </section>
        <section className="section-soft"><div className="shell grid gap-8 py-16 md:grid-cols-2"><div><p className="eyebrow">The commitment continues</p><h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold text-[#0d2745]">Scholarship funding is the beginning, not the finish line.</h2></div><div><p className="body-copy text-lg">The current BABC site describes continued support through direct mentors, scholar check-ins, alumni reunions, career guidance, networking, professional etiquette, and an active WhatsApp scholar community.</p><div className="actions"><a className="btn btn-primary" href={SITE_LINKS.donate} target="_blank" rel="noopener noreferrer">Support mentorship →</a></div></div></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
