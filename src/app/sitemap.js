import { blogPosts } from './blog/data';

export default function sitemap() {
  const baseUrl = 'https://cimaccassin.fr';

  // Routes statiques
  const staticRoutes = [
    '',
    '/contact',
    '/mentions-legales',
    '/politique-confidentialite',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Routes des services
  const servicesRoutes = [
    '/services/creation',
    '/services/dissolution',
    '/services/gestion',
    '/services/juridique',
    '/services/mediation',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  // Routes dynamiques du blog
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...servicesRoutes, ...blogRoutes];
}
