import { blogPostsFr } from '../locales/blog/fr';

export default function sitemap() {
  const baseUrl = 'https://www.cimaccassin.fr';
  const locales = ['fr', 'en', 'ru'];

  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/services/creation', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/services/dissolution', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/services/gestion', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/services/juridique', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/services/mediation', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/mentions-legales', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/politique-confidentialite', priority: 0.3, changeFrequency: 'yearly' },
  ];

  const entries = [];

  // Generate static page entries for all locales
  for (const page of pages) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            fr: `${baseUrl}/fr${page.path}`,
            en: `${baseUrl}/en${page.path}`,
            ru: `${baseUrl}/ru${page.path}`,
            'x-default': `${baseUrl}/fr${page.path}`,
          },
        },
      });
    }
  }

  // Generate blog article entries for all locales
  for (const post of blogPostsFr) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: {
            fr: `${baseUrl}/fr/blog/${post.slug}`,
            en: `${baseUrl}/en/blog/${post.slug}`,
            ru: `${baseUrl}/ru/blog/${post.slug}`,
            'x-default': `${baseUrl}/fr/blog/${post.slug}`,
          },
        },
      });
    }
  }

  return entries;
}
