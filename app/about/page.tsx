import type { Metadata } from "next";
import Link from "next/link";
import { InteriorHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { SITE_LINKS } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About | BABC Scholarship Foundation",
  description: "Learn about Believe and Achieve Book Club Scholarship Foundation, its mission, scholarship program, mentorship, and community leadership.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <InteriorHero eyebrow="About BABC" title="A book club that grew into a scholarship community." body="BABC was created by professional women and community leaders who wanted to support one another and create opportunities for young women pursuing higher education." />
        <section className="shell grid gap-12 py-16 md:grid-cols-[.7fr_1.3fr] md:py-20">
          <div><p className="eyebrow">Our mission</p><h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight text-[#0d2745]">From Dreams to Degrees. We Walk With Her.</h2></div>
          <div className="grid gap-5"><p className="body-copy m-0 text-lg">The Believe and Achieve Book Club is dedicated to empowering young women as they transition from high school into college. The foundation combines scholarship funding with mentorship, encouragement, professional exposure, and continued alumni connection.</p><p className="body-copy m-0 text-lg">The current BABC site shows that the organization’s work now reaches beyond scholarships through financial education, confidence-building experiences, community programming, and opportunities for scholars to build long-term relationships with professional women leaders.</p></div>
        </section>
        <section className="section-soft"><div className="shell grid gap-5 py-16 md:grid-cols-3"><Link href="/scholarships" className="card border border-[#e8e2d7] bg-white p-7 shadow-none transition hover:-translate-y-1"><p className="eyebrow">Scholarships</p><h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#0d2745]">27 scholars through 2025</h2><p className="body-copy mt-3">Explore every recipient currently published in BABC’s scholarship archive.</p></Link><Link href="/mentorship" className="card border border-[#e8e2d7] bg-white p-7 shadow-none transition hover:-translate-y-1"><p className="eyebrow">Mentorship</p><h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#0d2745]">Support after the award</h2><p className="body-copy mt-3">See the experiences helping scholars build confidence, networks, and professional skills.</p></Link><Link href="/board" className="card border border-[#e8e2d7] bg-white p-7 shadow-none transition hover:-translate-y-1"><p className="eyebrow">Leadership</p><h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#0d2745]">Seven board members</h2><p className="body-copy mt-3">Meet the women who lead fundraising, mentorship, education, and community work.</p></Link></div></section>
        <section className="shell py-16 text-center"><p className="eyebrow">Join the mission</p><h2 className="mx-auto max-w-3xl font-[family-name:var(--font-playfair)] text-4xl font-semibold text-[#0d2745]">Help the next scholar believe, achieve, and move forward.</h2><div className="actions justify-center"><a className="btn btn-primary" href={SITE_LINKS.donate} target="_blank" rel="noopener noreferrer">Donate →</a><a className="btn btn-outline" href={SITE_LINKS.apply} target="_blank" rel="noopener noreferrer">Apply for a scholarship →</a></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
