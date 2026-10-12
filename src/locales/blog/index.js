import { blogPostsFr } from './fr.js';
import { blogPostsEn } from './en.js';
import { blogPostsRu } from './ru.js';

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
