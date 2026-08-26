import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InteriorHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { BOARD_PROFILES } from "@/lib/directory";

export const metadata: Metadata = {
  title: "Board | BABC Scholarship Foundation",
  description: "Meet the professional women who lead, mentor, fundraise, and create opportunities through BABC Scholarship Foundation.",
  alternates: { canonical: "/board" },
};

export default function BoardPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <InteriorHero eyebrow="Our board" title="Professional leadership in service of the next generation." body="The current BABC board brings experience across finance, banking, real estate, title, tax, community development, and nonprofit leadership." />
        <section className="shell py-16 md:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BOARD_PROFILES.map((member) => (
              <Link href={`/board/${member.slug}`} className="group card overflow-hidden border border-[#e8e2d7] bg-white shadow-none transition hover:-translate-y-1 hover:border-[#d3b06f] hover:shadow-lg" key={member.slug}>
                <div className="relative aspect-[4/4.5] overflow-hidden bg-[#f8f5ee]"><Image src={member.image} alt={`${member.name}, ${member.role}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" /></div>
                <div className="p-6"><p className="eyebrow">{member.role}</p><h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#0d2745]">{member.name}</h2><p className="mt-3 text-sm leading-6 text-[#667085]">{member.focus.slice(0, 3).join(" · ")}</p><span className="mt-5 inline-flex text-sm font-bold text-[#b57a18]">Read profile →</span></div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}