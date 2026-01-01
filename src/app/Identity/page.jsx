import { seoData } from "@/data/seo";

export const metadata = {
  title: seoData.pages.identity.title,
  description: seoData.pages.identity.description,
  keywords: seoData.pages.identity.keywords,
  openGraph: {
    title: seoData.pages.identity.ogTitle,
    description: seoData.pages.identity.ogDescription,
    url: "/Identity",
  },
  twitter: {
    title: seoData.pages.identity.ogTitle,
    description: seoData.pages.identity.ogDescription,
  },
  alternates: {
    canonical: "/Identity",
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

import IdentityClient from "./IdentityClient";

export default function IdentityPage() {
  return (
    <>
      {seoData.pages.identity.structuredData.map((schema, index) => (
        <StructuredData key={index} data={schema.data} />
      ))}
      <IdentityClient />
    </>
  );
}