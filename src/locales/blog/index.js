import { blogPostsFr } from './fr';
import { blogPostsEn } from './en';
import { blogPostsRu } from './ru';

export const blogPostsByLocale = {
  fr: blogPostsFr,
  en: blogPostsEn,
  ru: blogPostsRu,
};

export function getBlogPosts(locale = 'fr') {
  return blogPostsByLocale[locale] || blogPostsByLocale.fr;
}

export function getBlogPost(locale = 'fr', slug) {
  const posts = getBlogPosts(locale);
  return posts.find((post) => post.slug === slug);
}
