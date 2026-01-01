import { seoData } from "@/data/seo";

export const metadata = {
  title: seoData.pages.core.title,
  description: seoData.pages.core.description,
  keywords: seoData.pages.core.keywords,
  openGraph: {
    title: seoData.pages.core.ogTitle,
    description: seoData.pages.core.ogDescription,
    url: "/Core",
  },
  twitter: {
    title: seoData.pages.core.ogTitle,
    description: seoData.pages.core.ogDescription,
  },
  alternates: {
    canonical: "/Core",
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

import CoreClient from "./CoreClient";

export default function CorePage() {
  return (
    <>
      {seoData.pages.core.structuredData.map((schema, index) => (
        <StructuredData key={index} data={schema.data} />
      ))}
      <CoreClient />
    </>
  );
}