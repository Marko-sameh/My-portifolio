import { seoData } from '@/data/seo';

import { getProjectsSEO } from '@/lib/dynamicSEO';

export default async function sitemap() {
  const baseUrl = seoData.site.url;
  const currentDate = new Date().toISOString();
  const projectsSEO = await getProjectsSEO();

  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/Identity`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Mastery`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Builds`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/Core`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/beyond`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/Signal`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/recruiter`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...projectsSEO.map(project => ({
      url: `${baseUrl}/Builds/${project.id}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    }))
  ];

  return routes;
}