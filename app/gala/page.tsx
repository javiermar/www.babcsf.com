import type { Metadata } from "next";
import Image from "next/image";
import { InteriorHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { GALA_DETAILS } from "@/lib/directory";
import { GALA_SPONSORS, SITE_LINKS } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "2026 Gala | BABC Scholarship Foundation",
  description: "Fifth Annual BABC Scholarship Foundation Gala, Friday November 13, 2026 at Pacific Palms Resort.",
  alternates: { canonical: "/gala" },
};

const sponsorships = [
  ["Diamond", "$10,000"],
  ["Platinum", "$5,000"],
  ["Gold", "$2,000"],
  ["Silver", "$600"],
] as const;

export default function GalaPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <InteriorHero eyebrow="Save the date" title="Fifth Annual BABC Scholarship Foundation Gala" body="A Great Gatsby Affair bringing scholars, sponsors, volunteers, and community leaders together to fund the next class of BABC scholars." />

        <section className="shell grid items-center gap-10 py-16 md:grid-cols-[.9fr_1.1fr] md:py-20">
          <div>
            <p className="eyebrow">November 13, 2026</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-semibold leading-tight text-[#0d2745]">An evening that turns celebration into opportunity.</h2>
            <dl className="mt-8 grid gap-5 border-y border-[#e8e2d7] py-7 sm:grid-cols-2">
              <div><dt className="text-xs font-bold uppercase tracking-[.12em] text-[#b57a18]">Date & time</dt><dd className="mt-1 font-semibold text-[#0d2745]">{GALA_DETAILS.date}<br/>{GALA_DETAILS.time}</dd></div>
              <div><dt className="text-xs font-bold uppercase tracking-[.12em] text-[#b57a18]">Venue</dt><dd className="mt-1 font-semibold text-[#0d2745]">{GALA_DETAILS.venue}<br/>City of Industry, California</dd></div>
              <div><dt className="text-xs font-bold uppercase tracking-[.12em] text-[#b57a18]">Theme</dt><dd className="mt-1 font-semibold text-[#0d2745]">{GALA_DETAILS.theme}</dd></div>
              <div><dt className="text-xs font-bold uppercase tracking-[.12em] text-[#b57a18]">Individual ticket</dt><dd className="mt-1 font-semibold text-[#0d2745]">$155 · dinner, two drinks, entertainment</dd></div>
            </dl>
            <div className="actions"><a className="btn btn-primary" href={GALA_DETAILS.ticketUrl} target="_blank" rel="noopener noreferrer">Get tickets →</a><a className="btn btn-outline" href={GALA_DETAILS.sponsorUrl} target="_blank" rel="noopener noreferrer">Sponsor the gala →</a></div>
          </div>
          <div className="relative min-h-[560px] overflow-hidden rounded-xl bg-[#efe6d8] p-6"><Image src={GALA_DETAILS.image} alt="2026 BABC Scholarship Foundation Gatsby Gala" fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-contain p-6" /></div>
        </section>

        <section className="section-soft"><div className="shell py-16"><div className="mb-9 max-w-3xl"><p className="eyebrow">Sponsorship</p><h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold text-[#0d2745]">Help underwrite scholarships and mentorship.</h2></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{sponsorships.map(([tier, amount]) => <div className="card border border-[#e8e2d7] bg-white p-6 shadow-none" key={tier}><span className="eyebrow">{tier}</span><strong className="font-[family-name:var(--font-playfair)] text-3xl text-[#0d2745]">{amount}</strong></div>)}</div><div className="actions"><a className="btn btn-primary" href={SITE_LINKS.sponsor} target="_blank" rel="noopener noreferrer">View sponsorship packet →</a></div></div></section>

        <section className="shell py-16 md:py-20"><div className="mb-9 text-center"><p className="eyebrow">2026 supporters</p><h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold text-[#0d2745]">Community partners investing in scholars.</h2></div><div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">{GALA_SPONSORS.map(({ name, tier, image }) => <div className="card border border-[#e8e2d7] bg-white p-4 text-center shadow-none" key={`${tier}-${name}`}><div className="relative aspect-[3/2] overflow-hidden"><Image src={image} alt={`${name}, ${tier} sponsor`} fill sizes="180px" className="object-contain" /></div><span className="mt-3 text-[10px] font-bold uppercase tracking-[.12em] text-[#b57a18]">{tier}</span></div>)}</div></section>

        <section className="bg-[#0d2745]"><div className="shell py-16 text-center text-white"><p className="eyebrow light">Can’t attend?</p><h2 className="mx-auto max-w-3xl font-[family-name:var(--font-playfair)] text-4xl font-semibold">You can still help fund the next scholarship class.</h2><div className="actions justify-center"><a className="btn btn-primary" href={SITE_LINKS.donate} target="_blank" rel="noopener noreferrer">Donate to BABC →</a></div></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
