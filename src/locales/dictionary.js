import { commonTranslations } from './common';
import { homeTranslations } from './home';
import { servicesTranslations } from './services';
import { contactTranslations } from './contact';
import { legalTranslations } from './legal';
import { metaTranslations } from './meta';
import { getBlogPosts, getBlogPost } from './blog';

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
