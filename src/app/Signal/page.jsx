import { seoData } from "@/data/seo";

export const metadata = {
  title: seoData.pages.signal.title,
  description: seoData.pages.signal.description,
  keywords: seoData.pages.signal.keywords,
  openGraph: {
    title: seoData.pages.signal.ogTitle,
    description: seoData.pages.signal.ogDescription,
    url: "/Signal",
  },
  twitter: {
    title: seoData.pages.signal.ogTitle,
    description: seoData.pages.signal.ogDescription,
  },
  alternates: {
    canonical: "/Signal",
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

import SignalClient from "./SignalClient";

export default function SignalPage() {
  return (
    <>
      {seoData.pages.signal.structuredData.map((schema, index) => (
        <StructuredData key={index} data={schema.data} />
      ))}
      <SignalClient />
    </>
  );
}