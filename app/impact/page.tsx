import type { Metadata } from "next";
import Image from "next/image";
import { InteriorHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { SITE_LINKS } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Impact | BABC Scholarship Foundation",
  description: "BABC scholarship impact, annual growth, community partnerships, and educational programming.",
  alternates: { canonical: "/impact" },
};

const growth = [
  { year: 2022, scholars: 4, investment: "$3,000" },
  { year: 2023, scholars: 6, investment: "$9,000" },
  { year: 2024, scholars: 8, investment: "$16,000" },
  { year: 2025, scholars: 9, investment: "$17,500" },
] as const;

const reportImages = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((page) => `https://www.babcsf.com/uploads/5/0/9/3/50936111/babc-impact-report-presentation-1-pptx-page-${page}_orig.jpg` as const);

export default function ImpactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <InteriorHero eyebrow="Our impact" title="A growing investment in education, confidence, and community." body="BABC's published impact report tracks scholarship growth from four recipients in 2022 to nine in 2025, alongside mentorship and community education." />
        <section className="shell py-16 md:py-20">
          <div className="stats stats-vertical overflow-hidden border border-[#e8e2d7] bg-[#f8f5ee] shadow-none md:stats-horizontal">
            <div className="stat"><div className="stat-value">27</div><div className="stat-desc">Scholarships awarded through 2025</div></div>
            <div className="stat"><div className="stat-value">$45,500+</div><div className="stat-desc">Scholarship investment since 2022</div></div>
            <div className="stat"><div className="stat-value">120</div><div className="stat-desc">Average applications annually</div></div>
            <div className="stat"><div className="stat-value">90%</div><div className="stat-desc">Applicants from low-to-moderate-income households</div></div>
          </div>
        </section>
        <section className="section-soft"><div className="shell py-16"><p className="eyebrow">Scholarship growth</p><h2 className="mb-9 max-w-3xl font-[family-name:var(--font-playfair)] text-4xl font-semibold text-[#0d2745]">Each year has expanded the circle of support.</h2><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{growth.map((item) => <div className="card border border-[#e8e2d7] bg-white p-6 shadow-none" key={item.year}><span className="eyebrow">{item.year}</span><strong className="font-[family-name:var(--font-playfair)] text-4xl text-[#0d2745]">{item.scholars}</strong><span className="mt-1 text-sm text-[#667085]">scholarships</span><span className="mt-5 border-t border-[#e8e2d7] pt-4 font-semibold text-[#b57a18]">{item.investment} invested</span></div>)}</div></div></section>
        <section className="shell py-16 md:py-20"><div className="grid gap-10 md:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">Community education</p><h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold text-[#0d2745]">Impact extends beyond scholarship checks.</h2></div><div className="grid gap-4 sm:grid-cols-2"><div className="card border border-[#e8e2d7] p-6 shadow-none"><h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#0d2745]">Financial education</h3><p className="body-copy mt-3">The current Community Impact page documents workshops on living trusts and asset protection plus BMO down-payment-assistance education.</p></div><div className="card border border-[#e8e2d7] p-6 shadow-none"><h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#0d2745]">Health and confidence</h3><p className="body-copy mt-3">BABC has also highlighted community bingo, Zumba and yoga, and self-defense programming as part of its 2025 outreach.</p></div></div></div></section>
        <section className="section-soft"><div className="shell py-16"><div className="mb-8"><p className="eyebrow">Published impact report</p><h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold text-[#0d2745]">See the foundation's report as published.</h2></div><div className="carousel carousel-center gap-4 rounded-xl bg-white p-4">{reportImages.map((src, index) => <div className="carousel-item relative aspect-[16/9] w-[85%] max-w-3xl overflow-hidden border border-[#e8e2d7] bg-white" key={src}><Image src={src} alt={`BABC impact report page ${index + 1}`} fill sizes="(max-width: 768px) 85vw, 768px" className="object-contain" /></div>)}</div></div></section>
        <section className="shell py-16 text-center"><p className="eyebrow">Keep the growth going</p><h2 className="mx-auto max-w-3xl font-[family-name:var(--font-playfair)] text-4xl font-semibold text-[#0d2745]">Help BABC invest in the next scholarship class.</h2><div className="actions justify-center"><a className="btn btn-primary" href={SITE_LINKS.donate} target="_blank" rel="noopener noreferrer">Donate to BABC →</a></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
