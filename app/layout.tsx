import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./fixes.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.babcsf.com"),
  title: "BABC Scholarship Foundation | Believe. Achieve. Lead.",
  description: "BABC provides scholarships, mentorship, leadership development, and ongoing support to young women across Southern California.",
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/icon.jpg", type: "image/jpeg" }],
    shortcut: "/icon.jpg",
  },
  openGraph: {
    title: "BABC Scholarship Foundation",
    description: "Scholarships are only the beginning. BABC helps young women believe, achieve, and lead.",
    url: "https://www.babcsf.com",
    siteName: "BABC Scholarship Foundation",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable}`} data-theme="babcsf">
      <body>
        {children}
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config',${JSON.stringify(gaId)});document.addEventListener('click',function(e){const a=e.target.closest('a[data-track]');if(a)gtag('event','cta_click',{link_url:a.href,link_text:a.textContent.trim()})});`}</Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
