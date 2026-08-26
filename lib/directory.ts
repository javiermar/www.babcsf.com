import { SITE_LINKS, type ExternalUrl } from "@/lib/site-content";

export type ScholarProfile = Readonly<{
  slug: string;
  name: string;
  year: 2022 | 2023 | 2024 | 2025;
  institution: string;
  field?: string;
  status?: string;
  image: ExternalUrl;
  summary: string;
  story?: readonly string[];
  featured?: boolean;
}>;

export type BoardProfile = Readonly<{
  slug: string;
  name: string;
  role: string;
  image: ExternalUrl;
  bio: readonly string[];
  focus: readonly string[];
}>;

export type MentorshipProgram = Readonly<{
  title: string;
  body: string;
  image: ExternalUrl;
}>;

const uploads = "https://www.babcsf.com/uploads/5/0/9/3/50936111" as const;

export const SCHOLARS = [
  { slug: "alejandra-ocaranza", name: "Alejandra Ocaranza", year: 2025, institution: "UC Santa Barbara", field: "Film/Media", image: `${uploads}/alejandra-ocaranza_orig.jpeg`, summary: "2025 BABC scholarship recipient attending UC Santa Barbara and studying Film/Media." },
  { slug: "camila-felix", name: "Camila Felix", year: 2025, institution: "Cal State Fullerton", field: "Nursing", image: `${uploads}/camila-felix_orig.jpg`, summary: "2025 BABC scholarship recipient attending Cal State Fullerton and studying Nursing." },
  { slug: "georgia-rickenbacker", name: "Georgia Rickenbacker", year: 2025, institution: "Dartmouth", field: "Biomedical Engineering", image: `${uploads}/georgia-rickenbacker_orig.jpg`, summary: "2025 BABC scholarship recipient attending Dartmouth in New Hampshire and studying Biomedical Engineering." },
  { slug: "isella-cortez", name: "Isella Cortez", year: 2025, institution: "Ramona Convent High School", status: "High school student at the time of the award", image: `${uploads}/isella-cortez_orig.jpg`, summary: "2025 BABC scholarship recipient from Ramona Convent High School." },
  { slug: "jazmyn-rosales-velez", name: "Jazmyn Rosales-Velez", year: 2025, institution: "University of La Verne", field: "Kinesiology", image: `${uploads}/jazmyn-rosales-velez_orig.jpg`, summary: "2025 BABC scholarship recipient attending the University of La Verne and studying Kinesiology." },
  { slug: "lauren-a-murillo", name: "Lauren A. Murillo", year: 2025, institution: "Cal State Fullerton", image: `${uploads}/lauren-a-murillo_orig.jpg`, summary: "2025 BABC scholarship recipient attending Cal State Fullerton." },
  { slug: "maggy-arely-guerrero", name: "Maggy Arely Guerrero", year: 2025, institution: "Whittier College", field: "Chemistry", image: `${uploads}/maggy-a-guerrero_orig.jpg`, summary: "2025 BABC scholarship recipient attending Whittier College and studying Chemistry." },
  { slug: "mikaela-alexandria-oliva", name: "Mikaela Alexandria Oliva", year: 2025, institution: "Santa Fe High School", status: "High school student at the time of the award", image: `${uploads}/mikaela-a-oliva_orig.jpg`, summary: "2025 BABC scholarship recipient from Santa Fe High School." },
  { slug: "sarah-e-villarruel-magana", name: "Sarah E. Villarruel-Magana", year: 2025, institution: "Whittier College", field: "Mechanical Engineering", image: `${uploads}/sarah-e-villarruel-magana_orig.jpg`, summary: "2025 BABC scholarship recipient attending Whittier College and studying Mechanical Engineering." },
  { slug: "alyssa-ruiz", name: "Alyssa Ruiz", year: 2024, institution: "Cal Poly San Luis Obispo", field: "Biomedical Engineering", image: `${uploads}/alyssa_orig.jpeg`, summary: "2024 BABC scholarship recipient committed to Cal Poly San Luis Obispo for Biomedical Engineering." },
  { slug: "chloe-castillo", name: "Chloe Castillo", year: 2024, institution: "Cal State Fullerton", field: "Art with an emphasis in teaching", status: "Freshman at the time of the award", image: `${uploads}/chloe-castillo_orig.jpeg`, summary: "2024 BABC scholarship recipient and Cal State Fullerton freshman studying Art with an emphasis in teaching." },
  { slug: "dannis-rivera", name: "Dannis Rivera", year: 2024, institution: "UCLA", status: "Sophomore at the time of the award", image: `${uploads}/danis-rivera-headshot_orig.jpeg`, summary: "2024 BABC scholarship recipient and UCLA sophomore at the time of the award." },
  { slug: "jacqueline-benitez", name: "Jacqueline Benitez", year: 2024, institution: "UCLA", field: "Public Health", image: `${uploads}/jacqueline_orig.jpeg`, summary: "2024 BABC scholarship recipient committed to UCLA to study Public Health." },
  { slug: "judith-luna", name: "Judith Luna", year: 2024, institution: "Hope International University", field: "Kinesiology", image: `${uploads}/judith-luna_orig.jpeg`, summary: "2024 BABC scholarship recipient committed to Hope International University for Kinesiology." },
  { slug: "serena-tarango", name: "Serena Tarango", year: 2024, institution: "UC Berkeley", field: "Political Science", image: `${uploads}/serena-headshot_orig.jpg`, summary: "2024 BABC scholarship recipient committed to UC Berkeley to study Political Science." },
  { slug: "mia", name: "Mia", year: 2024, institution: "Northwestern University", field: "Political Science or Economics", image: `${uploads}/img-3984-enhanced-nr_orig.jpg`, summary: "2024 BABC scholarship recipient attending Northwestern University with plans to study Political Science or Economics." },
  { slug: "berlin-soto", name: "Berlin Soto", year: 2024, institution: "UC San Diego", field: "Electrical Engineering", status: "Freshman at the time of the award", image: `${uploads}/berlin_orig.jpg`, summary: "2024 BABC scholarship recipient and UC San Diego freshman studying Electrical Engineering." },
  { slug: "glrenda-orozco", name: "Glrenda Orozco", year: 2023, institution: "Paramount High School", field: "Neuroscience", status: "Senior applying to UCLA, UC Riverside, and UC Irvine at the time of the award", image: `${uploads}/glenda2_1_orig.jpg`, summary: "2023 BABC scholarship recipient from Paramount High School pursuing a path in Neuroscience." },
  { slug: "bryann-noel-revilla", name: "Bryann-Noel Revilla", year: 2023, institution: "Standford University", field: "Biomedical Engineering", status: "Freshman at the time of the award", image: `${uploads}/bryann2_1_orig.jpg`, summary: "2023 BABC scholarship recipient listed as a freshman at Standford University studying Biomedical Engineering." },
  { slug: "daniela-mediana", name: "Daniela Mediana", year: 2023, institution: "Cal Poly Pomona", field: "Biochemistry", status: "Freshman at the time of the award", image: `${uploads}/daniela-2_1_orig.jpg`, summary: "2023 BABC scholarship recipient and Cal Poly Pomona freshman studying Biochemistry." },
  { slug: "athena-adame", name: "Athena Adame", year: 2023, institution: "UCLA", field: "Political Science", image: `${uploads}/athena2_1_orig.jpg`, summary: "BABC scholar who completed her UCLA Political Science degree two years early and planned to gain legal experience before applying to law school." },
  { slug: "joanna-vargas-esquivel", name: "Joanna Vargas Esquivel", year: 2023, institution: "San Diego State University", field: "Political Science", status: "Freshman at the time of the award", image: `${uploads}/johanna2_1_orig.jpg`, summary: "2023 BABC scholarship recipient and San Diego State University freshman pursuing Political Science." },
  { slug: "kailani-vargas", name: "Kailani Vargas", year: 2023, institution: "University of Oregon", field: "Medical / Pediatric Surgeon", status: "Freshman at the time of the award", image: `${uploads}/img-5861_1_orig.jpg`, summary: "2023 BABC scholarship recipient and University of Oregon freshman with a stated goal of becoming a pediatric surgeon." },
  { slug: "anahi-garcia", name: "Anahi Garcia", year: 2022, institution: "UC Berkeley", field: "Civil Engineering", image: `${uploads}/anahi-garcia_1_orig.jpg`, summary: "2022 BABC scholarship recipient attending UC Berkeley for Civil Engineering." },
  { slug: "naomi-zamora", name: "Naomi Zamora", year: 2022, institution: "UCLA", field: "Psychobiology", image: `${uploads}/naomi_orig.jpg`, summary: "2022 BABC scholar and the foundation's 2026 Rising Star, recognized after graduating from UCLA a year early.", story: ["Naomi graduated from UCLA a year early with a degree in Psychobiology. While at UCLA, she participated in Latinas Guiding Latinas and UCLA Alcanzar.", "She worked as a research assistant in the BioCritical Studies Lab under Dr. Terence Keel, where the team examined autopsies, police narratives, and media reports while studying flaws in the American death-investigation system.", "That experience deepened her interest in forensics and law enforcement. The current BABC scholarship page notes that she was hired as a 911 dispatcher with the UCLA Police Department and credits BABC's continued encouragement throughout her college career."], featured: true },
  { slug: "elianna-ruacho", name: "Elianna Ruacho", year: 2022, institution: "UC Berkeley", field: "Molecular Cell Biology", image: `${uploads}/elianna-ruacho-headshot_1_orig.jpg`, summary: "2022 BABC scholarship recipient attending UC Berkeley for Molecular Cell Biology." },
  { slug: "shaily-sarmiento", name: "Shaily Sarmiento", year: 2022, institution: "UCLA", field: "Psychology", image: `${uploads}/shaily_1_orig.jpg`, summary: "2022 BABC scholarship recipient attending UCLA for Psychology." },
] as const satisfies readonly ScholarProfile[];

export const BOARD_PROFILES = [
  { slug: "jade-ramos", name: "Jade Ramos", role: "President", image: `${uploads}/editor/jade-ramos_1.jpg`, bio: ["Jade Ramos is a business leader, real estate finance professional, and community advocate with more than 25 years of mortgage-industry experience. Her career has included roles in processing, underwriting, loan origination, branch management, and business development.", "She currently works in business development for Investment Bankers Network (INBANET) in the private-money sector and also serves as a Sales Manager at Ciudad Maderas, helping U.S. clients explore real-estate investment opportunities in Mexico.", "An immigrant from El Salvador, Jade is committed to empowering women, supporting education, and creating opportunities for the next generation. She is a graduate of USC Marshall School of Business's Multicultural Women's Leadership program and serves as an Ambassador for the Downey Chamber of Commerce."], focus: ["Real estate finance", "Women's leadership", "Community service", "Education"] },
  { slug: "janie-rodriguez", name: "Janie Rodriguez", role: "Vice President", image: `${uploads}/editor/janie-marquez_1.png`, bio: ["Janie is a Senior Vice President and Relationship Manager for Enterprise Bank & Trust in Downtown Los Angeles, serving affluent individuals and commercial clients across Southern California.", "Her biography on the current BABC site notes 24 years of progressive leadership across retail, personal, and commercial banking, along with prior senior relationship-banking experience at 1st Century Bank.", "She is bilingual in English and Spanish, a graduate of the Multicultural Women Executive Leadership Program endorsed by USC, and volunteers through nonprofit financial-literacy workshops in low-income Los Angeles communities."], focus: ["Banking", "Financial literacy", "Bilingual community outreach", "Women's leadership"] },
  { slug: "martha-morales", name: "Martha Morales", role: "Treasurer", image: `${uploads}/editor/martha-morales_1.png`, bio: ["Martha Morales has worked in real estate for 22 years and has spent 15 years with Keller Williams, where she is also a part owner of her office.", "She specializes in probate sales and in helping seniors who are downsizing or relocating. Her work emphasizes compassionate guidance, financial stability, and generational wealth.", "Martha regularly hosts workshops on homeownership, wealth-building strategies, and financial resources. She is a graduate of USC Marshall School of Business and centers family, faith, service, and community in her work."], focus: ["Real estate", "Probate sales", "Homeownership education", "Wealth building"] },
  { slug: "veronica-franco", name: "Veronica Franco", role: "Co-Treasurer", image: `${uploads}/veronicapic_orig.jpg`, bio: ["Veronica Franco is a Vice President at Provident Title Company and has worked in the title industry for 30 years, building long-term relationships across real estate, commercial, industrial, legal, escrow, and credit-union communities.", "She graduated with honors from the Multicultural Women's Executive Leadership program through USC Marshall School of Business and was among the women who created the Believe and Achieve book club as a space for women to support one another.", "Veronica served as the organization's first board president and remains active in community service, including St. Mary's Catholic Church and Soroptimist International."], focus: ["Title industry", "Community leadership", "Scholarship fundraising", "Women's networks"] },
  { slug: "nora-garcia", name: "Nora Garcia", role: "Secretary", image: `${uploads}/published/nora-garcia_1.jpg`, bio: ["Nora Garcia is a bilingual professional tax preparer who has served the community since 2001.", "After owning a franchise for 20 years, she now owns Gorosave Tax Service. Her current BABC biography emphasizes family, service, and the joy she finds in her sons and grandchildren."], focus: ["Tax preparation", "Small business", "Bilingual service", "Community"] },
  { slug: "rosa-alicia-centeno", name: "Rosa Alicia Centeno", role: "Director", image: `${uploads}/published/rosa-alicia-headshot_1.png`, bio: ["Rosa Alicia Centeno has experience in health education and real estate. She earned her real-estate license in 2013 and later joined Sharpstone Realty, serving residential, commercial, and investor clients.", "Her current BABC biography highlights her commitment to education through trainings that help clients grow and protect their assets.", "Since 2018, Rosa Alicia has also supported children at the El Faro orphanage in Mexicali with clothing, toys, food, and an annual Christmas effort. She joined the book club in 2019 and now serves on the BABC board."], focus: ["Real estate", "Asset education", "Community giving", "Youth support"] },
  { slug: "jennifer-zamora", name: "Jennifer Zamora", role: "Director", image: `${uploads}/published/jen-zamora-headshot_1.jpg`, bio: ["Jennifer Zamora is Vice President and Community Development Outreach Team Lead for City National Bank, where she leads Community Reinvestment Act initiatives and nonprofit partnerships focused on underserved communities.", "With more than two decades in banking, Jennifer has championed financial literacy since 2005 and works to expand access to financial education and economic opportunity, particularly in historically underserved communities of color.", "She also serves on the board of the Boys & Girls Clubs of Whittier and Homeownership OC and completed the Multicultural Women Executive Leadership Program in partnership with USC."], focus: ["Community development", "Financial literacy", "Economic inclusion", "Nonprofit leadership"] },
] as const satisfies readonly BoardProfile[];

export const MENTORSHIP_PROGRAMS = [
  { title: "Etiquette Dining Experience", body: "BABC scholarship alumni participated in a formal dining workshop focused on dining etiquette, professional presence, confidence, social grace, place settings, and navigating business meals.", image: `${uploads}/img-7157_orig.jpg` },
  { title: "Golf, networking, and reconnection", body: "BABC alumni joined a golf workshop led by Azucena Maldonado, founder of the Latina Golfers Association, learning golf fundamentals while reconnecting and sharing updates on their college journeys.", image: `${uploads}/photo-2026-07-25-17-55-59-2_orig.jpg` },
] as const satisfies readonly MentorshipProgram[];

export const GALA_DETAILS = { title: "Fifth Annual BABC Scholarship Foundation Gala", date: "Friday, November 13, 2026", time: "6:00 PM", venue: "Pacific Palms Resort", theme: "Great Gatsby Affair", image: `${uploads}/babc-sf-2026-gala_orig.jpg` as ExternalUrl, ticketUrl: SITE_LINKS.gala, sponsorUrl: SITE_LINKS.sponsor } as const;

export function getScholar(slug: string): ScholarProfile | undefined {
  return SCHOLARS.find((scholar) => scholar.slug === slug) as ScholarProfile | undefined;
}

export function getBoardMember(slug: string): BoardProfile | undefined {
  return BOARD_PROFILES.find((member) => member.slug === slug) as BoardProfile | undefined;
}

export function getScholarsByYear(year: ScholarProfile["year"]): readonly ScholarProfile[] {
  return SCHOLARS.filter((scholar) => scholar.year === year) as readonly ScholarProfile[];
}
