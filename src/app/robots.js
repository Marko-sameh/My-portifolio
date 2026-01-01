export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/projects-crud/', '/emotion-demo/'],
    },
    sitemap: 'https://markosameh.dev/sitemap.xml',
  };
}