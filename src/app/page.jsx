import { Suspense } from "react";
import dynamic from "next/dynamic";
import CoreTimeline from "@/components/ui/CoreTimeline";
import IdentitySection from "@/components/ui/IdentitySection";
import BuildsSection from "@/components/ui/BuildsSection";
import HeroBanner from "@/components/ui/HeroBanner";
import MasterySection from "@/components/ui/MasterySection";
import BeyondSection from "@/components/ui/BeyondSection";
import SignalSection from "@/components/ui/SignalSection";
import BusinessFocusedSection from "@/components/ui/BusinessFocusedSection";
import { seoData } from "@/data/seo";

// Dynamic imports for non-critical components
const RecruiterBanner = dynamic(() => import("@/components/ui/RecruiterBanner"), {
  loading: () => null
});

// Loading component for suspense boundaries
function SectionLoading() {
  return (
    <div className="min-h-[200px] flex items-center justify-center" role="status" aria-label="Loading section">
      <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" aria-hidden="true" />
      <span className="sr-only">Loading section content...</span>
    </div>
  );
}

function BreadcrumbSchema() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": seoData.site.url
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
}

export default function Page() {
  return (
    <>
      <BreadcrumbSchema />
      <div className="relative bg-black text-white overflow-x-hidden">
        <header role="banner">
          <HeroBanner />
        </header>

        <Suspense fallback={<SectionLoading />}>
          <section aria-labelledby="business-focus-heading" className="business-focus-section">
            <h2 id="business-focus-heading" className="sr-only">Business Focus</h2>
            <BusinessFocusedSection />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <section aria-labelledby="identity-heading" className="identity-section">
            <h2 id="identity-heading" className="sr-only">Identity</h2>
            <IdentitySection />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <section aria-labelledby="mastery-heading" className="mastery-section">
            <h2 id="mastery-heading" className="sr-only">Mastery</h2>
            <MasterySection />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <section aria-labelledby="builds-heading" className="builds-section" id="builds">
            <h2 id="builds-heading" className="sr-only">Projects</h2>
            <BuildsSection />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <section aria-labelledby="core-heading" className="core-section">
            <h2 id="core-heading" className="sr-only">Core Philosophy</h2>
            <CoreTimeline />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <section aria-labelledby="beyond-heading" className="beyond-section">
            <h2 id="beyond-heading" className="sr-only">Beyond</h2>
            <BeyondSection />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <section aria-labelledby="signal-heading" className="signal-section">
            <h2 id="signal-heading" className="sr-only">Contact</h2>
            <SignalSection />
          </section>
        </Suspense>
      </div>
    </>
  );
}