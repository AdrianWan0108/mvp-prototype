import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { site } from "./lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

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

// Applies the saved palette before first paint to prevent a flash of the
// default theme. Mirrors the theme list in theme-switcher.tsx.
const themeInitScript = `(function(){try{var t=localStorage.getItem('mvp-theme');var ok=['verdant','forest','sage','mint'];document.documentElement.setAttribute('data-theme',ok.indexOf(t)>-1?t:'verdant');}catch(e){document.documentElement.setAttribute('data-theme','verdant');}})();`;

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
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
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
