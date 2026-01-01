import { seoData } from "@/data/seo";

export const metadata = {
  title: seoData.pages.mastery.title,
  description: seoData.pages.mastery.description,
  keywords: seoData.pages.mastery.keywords,
  openGraph: {
    title: seoData.pages.mastery.ogTitle,
    description: seoData.pages.mastery.ogDescription,
    url: "/Mastery",
  },
  twitter: {
    title: seoData.pages.mastery.ogTitle,
    description: seoData.pages.mastery.ogDescription,
  },
  alternates: {
    canonical: "/Mastery",
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

import MasteryClient from "./MasteryClient";

export default function MasteryPage() {
  return (
    <>
      {seoData.pages.mastery.structuredData.map((schema, index) => (
        <StructuredData key={index} data={schema.data} />
      ))}
      <MasteryClient />
    </>
  );
}