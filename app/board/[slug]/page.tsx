import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { BOARD_PROFILES, getBoardMember } from "@/lib/directory";

 type PageProps = Readonly<{ params: Promise<{ slug: string }> }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return BOARD_PROFILES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getBoardMember(slug);
  if (!member) return {};
  return {
    title: `${member.name}, ${member.role} | BABC Board`,
    description: `${member.name} serves as ${member.role} of the BABC Scholarship Foundation.`,
    alternates: { canonical: `/board/${member.slug}` },
  };
}

export default async function BoardProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const member = getBoardMember(slug);
  if (!member) notFound();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="shell grid gap-10 py-14 md:grid-cols-[.78fr_1.22fr] md:py-20">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-xl bg-[#f8f5ee] shadow-[0_18px_45px_rgba(13,39,69,.09)]"><Image src={member.image} alt={`${member.name}, ${member.role}`} fill priority sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" /></div>
          <div className="self-center">
            <Link href="/board" className="text-sm font-bold text-[#b57a18] hover:underline">← Meet the board</Link>
            <p className="eyebrow mt-8">{member.role}</p>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-semibold leading-[1.04] tracking-[-.035em] text-[#0d2745] md:text-7xl">{member.name}</h1>
            <div className="mt-7 flex flex-wrap gap-2">{member.focus.map((item) => <span className="badge badge-outline border-[#d9b166] px-3 py-3 text-[#0d2745]" key={item}>{item}</span>)}</div>
          </div>
        </section>
        <section className="section-soft"><div className="shell grid gap-10 py-16 md:grid-cols-[.65fr_1.35fr]"><div><p className="eyebrow">Biography</p><h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight text-[#0d2745]">Leadership rooted in community.</h2></div><div className="grid gap-5">{member.bio.map((paragraph) => <p className="body-copy m-0 text-lg" key={paragraph}>{paragraph}</p>)}</div></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
