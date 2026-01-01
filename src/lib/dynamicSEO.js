import { seoData } from '@/data/seo';

export async function getProjectsSEO() {
  try {
    const response = await fetch('/api/projects');
    const projects = await response.json();
    
    return projects.map(project => ({
      id: project.id,
      slug: project.title.toLowerCase().replace(/\s+/g, '-'),
      seoTitle: `${project.title} - ${project.tag}`,
      seoDescription: project.desc || project.description,
      keywords: project.tech,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.description,
        applicationCategory: project.tag.includes('Mobile') ? 'MobileApplication' : 'WebApplication',
        operatingSystem: project.tag.includes('Mobile') ? 'iOS, Android' : 'Web Browser',
        author: {
          "@type": "Person",
          name: seoData.site.author,
        },
      },
    }));
  } catch (error) {
    console.error('Failed to fetch projects for SEO:', error);
    return [];
  }
}

export async function generateProjectMetadata(id) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/projects`);
    const projects = await response.json();
    const project = projects.find(p => 
      p.id.toString() === id.toString() || 
      p.title.toLowerCase().replace(/\s+/g, '-') === id.toLowerCase() ||
      encodeURIComponent(p.title.toLowerCase().replace(/\s+/g, '-')) === id
    );
    
    if (!project) {
      return {
        title: 'Project Not Found',
        description: 'The requested project could not be found.',
      };
    }
    
    return {
      title: `${project.title} - ${project.tag || 'Project'}`,
      description: project.desc || project.description,
      keywords: project.tech,
      openGraph: {
        title: project.title,
        description: project.description,
        images: [{ url: project.img }],
      },
      twitter: {
        title: project.title,
        description: project.description,
        images: [project.img],
      },
      alternates: {
        canonical: `/Builds/${id}`,
      },
    };
  } catch (error) {
    console.error('SEO fetch error:', error);
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }
}