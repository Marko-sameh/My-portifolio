export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/projects-crud/', '/emotion-demo/'],
    },
    sitemap: 'https://markosameh.com/sitemap.xml',
  };
}