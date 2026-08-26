import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InteriorHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { SCHOLARS, getScholarsByYear } from "@/lib/directory";
import { SCHOLARSHIP_STEPS, SITE_LINKS } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Scholarships | BABC Scholarship Foundation",
  description: "Meet BABC scholarship recipients and review the current Southern California scholarship cycle.",
};

const years = [2025, 2024, 2023, 2022] as const;

export default function ScholarshipsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <InteriorHero eyebrow="Scholarships" title="From dreams to degrees." body="BABC has awarded 27 scholarships since 2022. This archive preserves the recipients, schools, fields of study, and images published on the foundation's current scholarship page." />

        <section className="shell py-16">
          <div className="grid gap-8 rounded-xl border border-[#e8e2d7] bg-[#f8f5ee] p-7 md:grid-cols-[1.2fr_.8fr] md:p-10">
            <div>
              <p className="eyebrow">2026 scholarship cycle</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold text-[#0d2745]">Applications are open August 17 through September 17, 2026.</h2>
              <p className="body-copy mt-4">Applicants must be current Southern California residents and either current high school seniors or first-year college students.</p>
              <div className="actions"><a className="btn btn-primary" href={SITE_LINKS.apply} target="_blank" rel="noopener noreferrer">Apply now →</a></div>
            </div>
            <ol className="grid gap-3">
              {SCHOLARSHIP_STEPS.map(({ date, label }, index) => <li className="flex items-center gap-4 border-b border-[#e8e2d7] py-3" key={date}><span className="grid h-8 w-8 place-items-center rounded-full bg-[#b57a18] text-xs font-bold text-white">{index + 1}</span><div><strong className="block text-[#0d2745]">{date}</strong><span className="text-sm text-[#667085]">{label}</span></div></li>)}
            </ol>
          </div>
        </section>

        {years.map((year) => {
          const recipients = getScholarsByYear(year);
          return (
            <section className="shell pb-16" key={year}>
              <div className="mb-7 flex items-end justify-between gap-4 border-b border-[#e8e2d7] pb-4"><div><p className="eyebrow">Scholarship class</p><h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold text-[#0d2745]">{year} recipients</h2></div><span className="text-sm text-[#667085]">{recipients.length} scholars</span></div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {recipients.map((scholar) => (
                  <Link href={`/scholars/${scholar.slug}`} className="group card overflow-hidden border border-[#e8e2d7] bg-white shadow-none transition hover:-translate-y-1 hover:border-[#d3b06f] hover:shadow-lg" key={scholar.slug}>
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#f8f5ee]"><Image src={scholar.image} alt={scholar.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" /></div>
                    <div className="p-5"><p className="eyebrow">{year} scholar</p><h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#0d2745]">{scholar.name}</h3><p className="mt-2 text-sm font-semibold text-[#334155]">{scholar.institution}</p>{scholar.field ? <p className="mt-1 text-sm text-[#667085]">{scholar.field}</p> : null}<span className="mt-5 inline-flex text-sm font-bold text-[#b57a18]">View profile →</span></div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        <section className="section-soft"><div className="shell py-16 text-center"><p className="eyebrow">27 scholars and growing</p><h2 className="mx-auto max-w-3xl font-[family-name:var(--font-playfair)] text-4xl font-semibold text-[#0d2745]">Help fund the next generation of BABC scholars.</h2><div className="actions justify-center"><a className="btn btn-primary" href={SITE_LINKS.donate} target="_blank" rel="noopener noreferrer">Donate to BABC →</a></div></div></section>
      </main>
      <SiteFooter />
    </>
  );
}

export const scholarCount = SCHOLARS.length;
