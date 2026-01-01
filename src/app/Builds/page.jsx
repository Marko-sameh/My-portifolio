import { seoData } from "@/data/seo";

export const metadata = {
  title: seoData.pages.builds.title,
  description: seoData.pages.builds.description,
  keywords: seoData.pages.builds.keywords,
  openGraph: {
    title: seoData.pages.builds.ogTitle,
    description: seoData.pages.builds.ogDescription,
    url: "/Builds",
  },
  twitter: {
    title: seoData.pages.builds.ogTitle,
    description: seoData.pages.builds.ogDescription,
  },
  alternates: {
    canonical: "/Builds",
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

import BuildsClient from "./BuildsClient";

export default function BuildsPage() {
  return (
    <>
      {seoData.pages.builds.structuredData.map((schema, index) => (
        <StructuredData key={index} data={schema.data} />
      ))}
      <BuildsClient />
    </>
  );
}