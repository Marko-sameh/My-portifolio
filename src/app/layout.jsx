import { Geist, Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/ui/Nav";
import Footer from "@/components/ui/Footer";
import ModeToggle from "@/components/ui/ModeToggle";
import { RecruiterModeProvider } from "@/contexts/RecruiterModeContext";
import RecruiterBanner from "@/components/ui/RecruiterBanner";
import ErrorBoundary from "@/components/ui/ErrorBoundary";
import WebVitals from "@/components/ui/WebVitals";
import { seoData } from "@/data/seo";
import dynamic from "next/dynamic";

// Dynamic import for non-critical AI system
const AIEmotionSystem = dynamic(() => import("../components/ui/AIEmotionSystem"));

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial']
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial']
});

export const metadata = {
  metadataBase: new URL(seoData.site.url),
  title: {
    default: seoData.pages.home.title,
    template: "%s | Marko Sameh - Frontend Developer"
  },
  description: seoData.pages.home.description,
  keywords: seoData.site.keywords,
  authors: [{ name: seoData.site.author }],
  creator: seoData.site.author,
  publisher: seoData.site.author,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: seoData.site.url,
    siteName: seoData.site.name,
    title: seoData.pages.home.ogTitle,
    description: seoData.pages.home.ogDescription,
    images: [
      {
        url: seoData.site.image,
        width: 1200,
        height: 630,
        alt: "Marko Sameh - Expert Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoData.pages.home.ogTitle,
    description: seoData.pages.home.ogDescription,
    images: [seoData.site.image],
    creator: seoData.site.twitterHandle,
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '16x16', type: 'image/png' }
    ],
    shortcut: '/icon.png',
    apple: [{ url: '/icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: seoData.site.url,
  },
  other: {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Cross-Origin-Embedder-Policy': 'require-corp',
  },
};

function StructuredData({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://assets.nflxext.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://assets.nflxext.com" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark light" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        {seoData.pages.home.structuredData.map((schema, index) => (
          <StructuredData key={index} data={schema.data} />
        ))}
        <StructuredData data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Marko Sameh - Frontend Developer",
          "description": "Frontend development services in React, Next.js, and modern web applications",
          "url": "https://markosameh.com",
          "founder": {
            "@type": "Person",
            "name": "Marko Sameh",
            "jobTitle": "Frontend Developer",
            "email": "markosameh75@gmail.com",
            "telephone": "+201203113955"
          },
          "serviceType": "Web Development",
          "areaServed": "Worldwide"
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${inter.variable} antialiased emotion-aware`}
      >
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <WebVitals />
        <ErrorBoundary>
          <RecruiterModeProvider>
            <RecruiterBanner />
            <Nav />
            <AIEmotionSystem />
            <ModeToggle />
            <main role="main" id="main-content" tabIndex="-1">
              {children}
            </main>
            <Footer />
          </RecruiterModeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
