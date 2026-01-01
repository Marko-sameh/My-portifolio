import { seoData, projectsSEO } from '@/data/seo';

/**
 * Generate page-specific metadata for Next.js
 */
export function generatePageMetadata(page, customData = {}) {
  const pageData = seoData.pages[page];
  if (!pageData) return {};

  return {
    title: customData.title || pageData.title,
    description: customData.description || pageData.description,
    keywords: customData.keywords || pageData.keywords,
    openGraph: {
      title: customData.ogTitle || pageData.ogTitle || pageData.title,
      description: customData.ogDescription || pageData.ogDescription || pageData.description,
      url: customData.url || `/${page}`,
      type: 'website',
      siteName: seoData.site.name,
      images: [
        {
          url: customData.image || seoData.site.image,
          width: 1200,
          height: 630,
          alt: customData.imageAlt || `${seoData.site.name} - ${pageData.title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: customData.twitterTitle || pageData.ogTitle || pageData.title,
      description: customData.twitterDescription || pageData.ogDescription || pageData.description,
      images: [customData.image || seoData.site.image],
      creator: seoData.site.twitterHandle,
    },
    alternates: {
      canonical: customData.canonical || `/${page}`,
    },
  };
}

/**
 * Generate structured data for projects
 */
export function generateProjectStructuredData(project) {
  const projectSEO = projectsSEO.find(p => p.id === project.id);
  if (!projectSEO) return null;

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.fullDescription,
    "url": `/Builds/${project.id}`,
    "image": project.img,
    "author": {
      "@type": "Person",
      "name": seoData.site.author,
      "url": seoData.site.url
    },
    "dateCreated": new Date().toISOString(),
    "keywords": projectSEO.keywords.join(', '),
    "genre": project.category,
    "workExample": {
      "@type": "WebApplication",
      "name": project.title,
      "description": project.description,
      "applicationCategory": "WebApplication",
      "operatingSystem": "Web Browser"
    }
  };
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbData(breadcrumbs) {
  if (!breadcrumbs || breadcrumbs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${seoData.site.url}${crumb.url}`
    }))
  };
}

/**
 * Generate FAQ structured data
 */
export function generateFAQData(faqs) {
  if (!faqs || faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Generate organization structured data
 */
export function generateOrganizationData() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": seoData.site.name,
    "description": seoData.site.description,
    "url": seoData.site.url,
    "founder": {
      "@type": "Person",
      "name": seoData.site.author,
      "jobTitle": "Frontend Developer",
      "email": "markosameh75@gmail.com",
      "telephone": "+201203113955"
    },
    "serviceType": "Web Development",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Frontend Development",
            "description": "React and Next.js web application development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Performance Optimization",
            "description": "Web performance auditing and optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Development",
            "description": "User interface and experience development"
          }
        }
      ]
    }
  };
}

/**
 * Calculate reading time for content
 */
export function calculateReadingTime(text) {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
}

/**
 * Generate meta keywords from content
 */
export function extractKeywords(text, maxKeywords = 10) {
  const commonWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should'];
  
  const words = text.toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 3 && !commonWords.includes(word));
  
  const wordFreq = {};
  words.forEach(word => {
    wordFreq[word] = (wordFreq[word] || 0) + 1;
  });
  
  return Object.entries(wordFreq)
    .sort(([,a], [,b]) => b - a)
    .slice(0, maxKeywords)
    .map(([word]) => word);
}

/**
 * Validate structured data
 */
export function validateStructuredData(data) {
  try {
    JSON.stringify(data);
    return data['@context'] && data['@type'];
  } catch {
    return false;
  }
}