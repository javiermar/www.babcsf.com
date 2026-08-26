export type ExternalUrl = `https://${string}`;
export type InternalHref = `/${string}` | `#${string}`;

type NavigationItem = Readonly<{
  label: string;
  href: InternalHref;
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
  initiallyOpen: boolean;
}>;

type HomepageCopy = Readonly<{
  heroLede: string;
  missionBody: string;
  missionTagline: string;
  scholarshipIntro: string;
  boardIntro: string;
  footerMission: string;
}>;

type SponsorTier = "Diamond" | "Platinum" | "Gold" | "Silver" | "Donor";

type GalaSponsor = Readonly<{
  name: string;
  tier: SponsorTier;
  image: ExternalUrl;
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
  { label: "About", href: "/about" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Mentorship", href: "/mentorship" },
  { label: "Gala", href: "/gala" },
  { label: "Board", href: "/board" },
  { label: "Impact", href: "/impact" },
] as const satisfies readonly NavigationItem[];

export const HOMEPAGE_COPY = {
  heroLede: "A volunteer-led scholarship and mentorship organization empowering young women as they transition from high school into college and beyond.",
  missionBody: "The Believe and Achieve Book Club is dedicated to empowering young women as they transition from high school into college. BABC provides scholarships, mentorship, and ongoing support so scholars can pursue higher education and thrive throughout their academic journey and beyond.",
  missionTagline: "From Dreams to Degrees — We Walk With Her!",
  scholarshipIntro: "BABC’s 2026 priority is to expand to 10+ scholarships. The program serves current Southern California high school seniors and first-year college students, with 90% of applicants coming from low-to-moderate-income households.",
  boardIntro: "Seven professional women raise funds, mentor scholars, and create educational opportunities throughout the year.",
  footerMission: "Scholarships, mentorship, and ongoing support for young women from high school through college and beyond.",
} as const satisfies HomepageCopy;

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
    body: "Nine recipients received college scholarships plus recognition from the City of Whittier and Senator Susan Rubio.",
    image: SITE_IMAGES.scholars2025,
    alt: "BABC 2025 scholarship celebration",
  },
  {
    eyebrow: "2026 Rising Star",
    title: "Naomi Zamora",
    body: "Naomi graduated from UCLA a year early in Psychobiology, served as a research assistant in the BioCritical Studies Lab, and now works as a 911 dispatcher with UCLA Police.",
    image: SITE_IMAGES.naomi,
    alt: "Naomi Zamora, BABC 2026 Rising Star",
  },
  {
    eyebrow: "2024 cohort",
    title: "Eight scholars, $16,000 invested",
    body: "Eight scholarships were awarded from a pool of more than 110 applicants representing 18 schools and colleges.",
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
    initiallyOpen: false,
  },
  {
    question: "What happens after the award?",
    answer: "BABC stays connected through direct mentor support, an active WhatsApp scholar network, check-ins, career guidance, reunions, milestones, and graduation celebrations.",
    initiallyOpen: false,
  },
] as const satisfies readonly ScholarshipFaq[];

export const MENTORSHIP_POINTS = [
  "Ongoing mentorship throughout college",
  "Scholar reunions, alumni engagement, and WhatsApp support",
  "Career guidance, golf and networking, and professional etiquette training",
  "Financial literacy plus living-trust and asset-protection education",
] as const satisfies readonly string[];

export const GALA_SPONSORS = [
  { name: "Life Works", tier: "Diamond", image: "https://www.babcsf.com/uploads/5/0/9/3/50936111/life-works-logo-black_orig.jpeg" },
  { name: "Diamond Sponsor", tier: "Diamond", image: "https://www.babcsf.com/uploads/5/0/9/3/50936111/img-5765-2_orig.jpeg" },
  { name: "Platinum Sponsor", tier: "Platinum", image: "https://www.babcsf.com/uploads/5/0/9/3/50936111/bae-logo_orig.jpg" },
  { name: "Provident Title / Title by Vero", tier: "Gold", image: "https://www.babcsf.com/uploads/5/0/9/3/50936111/provident-title-title-by-vero-gold-sponsor_orig.jpeg" },
  { name: "Alarcon Group LLC", tier: "Gold", image: "https://www.babcsf.com/uploads/5/0/9/3/50936111/alarcon-group-llc_orig.png" },
  { name: "Blue and Zueus Foundation", tier: "Gold", image: "https://www.babcsf.com/uploads/5/0/9/3/50936111/blue-and-zueus-foundation_orig.jpg" },
  { name: "Jules Hirst", tier: "Silver", image: "https://www.babcsf.com/uploads/5/0/9/3/50936111/jules-hirst-b-logo-silver_orig.png" },
  { name: "My Favorite Notary", tier: "Silver", image: "https://www.babcsf.com/uploads/5/0/9/3/50936111/my-favorite-notary-logo-gold_orig.png" },
  { name: "Royal Business Bank", tier: "Donor", image: "https://www.babcsf.com/uploads/5/0/9/3/50936111/royal-business-bank-logo_orig.png" },
] as const satisfies readonly GalaSponsor[];
