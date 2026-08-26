import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { SCHOLARS, getScholar } from "@/lib/directory";
import { SITE_LINKS } from "@/lib/site-content";

type PageProps = Readonly<{ params: Promise<{ slug: string }> }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return SCHOLARS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const scholar = getScholar(slug);
  if (!scholar) return {};
  return {
    title: `${scholar.name} | BABC Scholar`,
    description: scholar.summary,
    alternates: { canonical: `/scholars/${scholar.slug}` },
  };
}

export default async function ScholarProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const scholar = getScholar(slug);
  if (!scholar) notFound();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="shell grid items-center gap-10 py-14 md:grid-cols-[.82fr_1.18fr] md:py-20">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-xl bg-[#f8f5ee] shadow-[0_18px_45px_rgba(13,39,69,.09)]">
            <Image src={scholar.image} alt={scholar.name} fill priority sizes="(max-width: 768px) 100vw, 42vw" className="object-cover" />
          </div>
          <div>
            <Link href="/scholarships" className="text-sm font-bold text-[#b57a18] hover:underline">← All scholars</Link>
            <p className="eyebrow mt-8">{scholar.year} BABC scholarship recipient</p>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-semibold leading-[1.04] tracking-[-.035em] text-[#0d2745] md:text-7xl">{scholar.name}</h1>
            <div className="mt-7 grid gap-4 border-y border-[#e8e2d7] py-6 sm:grid-cols-2">
              <div><span className="block text-xs font-bold uppercase tracking-[.12em] text-[#b57a18]">Institution</span><strong className="mt-1 block text-[#0d2745]">{scholar.institution}</strong></div>
              {scholar.field ? <div><span className="block text-xs font-bold uppercase tracking-[.12em] text-[#b57a18]">Field of study</span><strong className="mt-1 block text-[#0d2745]">{scholar.field}</strong></div> : null}
            </div>
            <p className="body-copy mt-7 text-lg">{scholar.summary}</p>
            {scholar.status ? <p className="mt-4 text-sm text-[#667085]">{scholar.status}</p> : null}
          </div>
        </section>

        {scholar.story?.length ? (
          <section className="section-soft"><div className="shell grid gap-9 py-16 md:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">Scholar update</p><h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight text-[#0d2745]">A BABC story in motion.</h2></div><div className="grid gap-5">{scholar.story.map((paragraph) => <p className="body-copy m-0 text-lg" key={paragraph}>{paragraph}</p>)}</div></div></section>
        ) : null}

        <section className="shell py-16 md:py-20">
          <div className="grid gap-8 rounded-xl bg-[#0d2745] p-8 text-white md:grid-cols-[1.2fr_.8fr] md:p-12">
            <div><p className="eyebrow light">Support the scholarship program</p><h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight text-white">Help BABC support scholars like {scholar.name}.</h2><p className="mt-4 max-w-2xl text-[#d7dfeb]">BABC does not publish recipient-specific donation destinations on its current site. This donation link supports the foundation's scholarship and mentorship work as a whole.</p></div>
            <div className="flex items-center md:justify-end"><a className="btn btn-primary" href={SITE_LINKS.donate} target="_blank" rel="noopener noreferrer" data-track="cta" data-recipient={scholar.slug}>Donate to BABC →</a></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
