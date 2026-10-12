import { commonTranslations } from './common.js';
import { homeTranslations } from './home.js';
import { servicesTranslations } from './services.js';
import { contactTranslations } from './contact.js';
import { legalTranslations } from './legal.js';
import { metaTranslations } from './meta.js';
import { getBlogPosts, getBlogPost } from './blog/index.js';

export const locales = ['fr', 'en', 'ru'];
export const defaultLocale = 'fr';

export function isValidLocale(locale) {
  return locales.includes(locale);
}

export function getDictionary(locale = defaultLocale) {
  const lang = isValidLocale(locale) ? locale : defaultLocale;
  return {
    locale: lang,
    common: commonTranslations[lang] || commonTranslations.fr,
    home: homeTranslations[lang] || homeTranslations.fr,
    services: servicesTranslations[lang] || servicesTranslations.fr,
    contact: contactTranslations[lang] || contactTranslations.fr,
    legal: legalTranslations[lang] || legalTranslations.fr,
    meta: metaTranslations[lang] || metaTranslations.fr,
    getBlogPosts: () => getBlogPosts(lang),
    getBlogPost: (slug) => getBlogPost(lang, slug),
  };
}
