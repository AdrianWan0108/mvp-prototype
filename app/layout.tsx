import type { Metadata } from "next";
import {
  Bebas_Neue,
  Cormorant_Garamond,
  DM_Sans,
  Lato,
  Montserrat,
  Playfair_Display,
  Raleway,
  Source_Sans_3,
} from "next/font/google";
import "./globals.css";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { BrandControls } from "./components/brand-controls";
import { site } from "./lib/site";

/* Four switchable font pairings (heading + body). Each is loaded as a CSS
   variable; globals.css maps the active [data-font] pair onto the heading/body
   tokens. Keep this list in sync with brand-controls.tsx and the no-FOUC
   script below. */

// Pair 1 — Montserrat / DM Sans
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

// Pair 2 — Playfair Display / Lato
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

// Pair 3 — Cormorant Garamond / Raleway
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

// Pair 4 — Bebas Neue / Source Sans
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
  display: "swap",
});
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const fontVariables = [
  montserrat.variable,
  dmSans.variable,
  playfair.variable,
  lato.variable,
  cormorant.variable,
  raleway.variable,
  bebas.variable,
  sourceSans.variable,
].join(" ");

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Pilates & GYROTONIC® Studio in Markham`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Pilates Markham",
    "Reformer Pilates Markham",
    "GYROTONIC Markham",
    "Polestar Pilates Toronto",
    "Pilates teacher training Toronto",
    "rehabilitation Pilates",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Pilates & GYROTONIC® Studio in Markham`,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
};

// Applies the saved palette + font pairing before first paint to prevent a
// flash of the defaults. Mirrors the option lists in brand-controls.tsx.
const themeInitScript = `(function(){try{var t=localStorage.getItem('mvp-theme');var ok=['verdant','forest','sage','mint','blush','amber','terracotta'];document.documentElement.setAttribute('data-theme',ok.indexOf(t)>-1?t:'verdant');}catch(e){document.documentElement.setAttribute('data-theme','verdant');}try{var f=localStorage.getItem('mvp-font');var of=['modern','classic','elegant','bold'];document.documentElement.setAttribute('data-font',of.indexOf(f)>-1?f:'modern');}catch(e){document.documentElement.setAttribute('data-font','modern');}})();`;

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  areaServed: ["Markham", "Toronto", "Richmond Hill", "Unionville"],
  sameAs: [site.social.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontVariables} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <BrandControls />
        <SiteHeader />
        <main className="flex flex-1 flex-col">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
      </body>
    </html>
  );
}
