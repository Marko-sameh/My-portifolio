import { seoData } from "@/data/seo";

export const metadata = {
  title: seoData.pages.beyond.title,
  description: seoData.pages.beyond.description,
  keywords: seoData.pages.beyond.keywords,
  openGraph: {
    title: seoData.pages.beyond.ogTitle,
    description: seoData.pages.beyond.ogDescription,
    url: "/beyond",
  },
  twitter: {
    title: seoData.pages.beyond.ogTitle,
    description: seoData.pages.beyond.ogDescription,
  },
  alternates: {
    canonical: "/beyond",
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

import BeyondClient from "./BeyondClient";

export default function BeyondPage() {
  return (
    <>
      {seoData.pages.beyond.structuredData.map((schema, index) => (
        <StructuredData key={index} data={schema.data} />
      ))}
      <BeyondClient />
    </>
  );
}