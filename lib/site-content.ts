export type ExternalUrl = `https://${string}`;
export type SectionHref = `#${string}`;

type NavigationItem = Readonly<{
  label: string;
  href: SectionHref;
}>;

type BoardMember = Readonly<{
  name: string;
  role: string;
  image: ExternalUrl;
}>;

type ScholarSlide = Readonly<{
  eyebrow: string;
  title: string;
  body: string;
  image: ExternalUrl;
  alt: string;
}>;

type ScholarshipStep = Readonly<{
  date: string;
  label: string;
}>;

type ScholarshipFaq = Readonly<{
  question: string;
  answer: string;
  initiallyOpen?: boolean;
}>;

export const SITE_LINKS = {
  apply: "https://form.jotform.com/262286896162065",
  donate: "https://buy.stripe.com/8wM2aW13q7Gu3lKcMM",
  gala: "https://babcsf.aweb.page/2026BABCgala",
  sponsor: "https://drive.google.com/file/d/1oydRY-pn4nawDV7rSOKZb8yjtNAGPMzu/view?usp=share_link",
} as const satisfies Record<"apply" | "donate" | "gala" | "sponsor", ExternalUrl>;

export const SITE_IMAGES = {
  naomi: "https://www.babcsf.com/uploads/5/0/9/3/50936111/naomi_orig.jpg",
  scholars2025: "https://www.babcsf.com/uploads/5/0/9/3/50936111/unnamed-5_orig.jpg",
  scholars2024: "https://www.babcsf.com/uploads/5/0/9/3/50936111/group_orig.jpg",
  gala: "https://www.babcsf.com/uploads/5/0/9/3/50936111/babc-sf-2026-gala_orig.jpg",
} as const satisfies Record<"naomi" | "scholars2025" | "scholars2024" | "gala", ExternalUrl>;

export const NAV_ITEMS = [
  { label: "About", href: "#mission" },
  { label: "Scholarships", href: "#scholarships" },
  { label: "Mentorship", href: "#mentorship" },
  { label: "Gala", href: "#gala" },
  { label: "Board", href: "#board" },
] as const satisfies readonly NavigationItem[];

export const BOARD_MEMBERS = [
  { name: "Jade Ramos", role: "President", image: "https://www.babcsf.com/uploads/5/0/9/3/50936111/editor/jade-ramos_1.jpg" },
  { name: "Janie Rodriguez", role: "Vice President", image: "https://www.babcsf.com/uploads/5/0/9/3/50936111/editor/janie-marquez_1.png" },
  { name: "Martha Morales", role: "Treasurer", image: "https://www.babcsf.com/uploads/5/0/9/3/50936111/editor/martha-morales_1.png" },
  { name: "Veronica Franco", role: "Co-Treasurer", image: "https://www.babcsf.com/uploads/5/0/9/3/50936111/veronicapic_orig.jpg" },
  { name: "Nora Garcia", role: "Secretary", image: "https://www.babcsf.com/uploads/5/0/9/3/50936111/published/nora-garcia_1.jpg" },
  { name: "Rosa Alicia Centeno", role: "Director", image: "https://www.babcsf.com/uploads/5/0/9/3/50936111/published/rosa-alicia-headshot_1.png" },
  { name: "Jennifer Zamora", role: "Director", image: "https://www.babcsf.com/uploads/5/0/9/3/50936111/published/jen-zamora-headshot_1.jpg" },
] as const satisfies readonly BoardMember[];

export const SCHOLAR_SLIDES = [
  {
    eyebrow: "2025 cohort",
    title: "Nine scholars celebrated",
    body: "A growing class of young women supported by BABC scholarships, mentorship, and community.",
    image: SITE_IMAGES.scholars2025,
    alt: "BABC 2025 scholarship recipients",
  },
  {
    eyebrow: "2026 Rising Star",
    title: "Naomi Zamora",
    body: "UCLA Psychobiology graduate, former research assistant, and now a 911 dispatcher with UCLA Police.",
    image: SITE_IMAGES.naomi,
    alt: "Naomi Zamora, BABC 2026 Rising Star",
  },
  {
    eyebrow: "2024 cohort",
    title: "Eight scholars, $16,000 invested",
    body: "Selected from more than 110 applicants representing 18 Southern California schools and colleges.",
    image: SITE_IMAGES.scholars2024,
    alt: "BABC 2024 scholarship recipients",
  },
] as const satisfies readonly ScholarSlide[];

export const SCHOLARSHIP_STEPS = [
  { date: "Aug 17", label: "Applications open" },
  { date: "Sep 17", label: "Application deadline" },
  { date: "By Oct 5", label: "Recipients announced" },
  { date: "Nov 13", label: "Scholarship Gala" },
] as const satisfies readonly ScholarshipStep[];

export const SCHOLARSHIP_FAQS = [
  {
    question: "Who can apply?",
    answer: "Current Southern California residents who are high school seniors or first-year college students.",
    initiallyOpen: true,
  },
  {
    question: "What does BABC consider?",
    answer: "Educational commitment, financial need, resilience, leadership, community involvement, and a positive vision for the future.",
  },
  {
    question: "What happens after the award?",
    answer: "Recipients join a growing community with mentorship, networking, leadership experiences, and continued alumni connection.",
  },
] as const satisfies readonly ScholarshipFaq[];
