'use client';

import { useState } from 'react';
import Link from 'next/link';

const labels = {
  fr: {
    placeholder: 'Rechercher un article...',
    readMore: "Lire l'article",
    noResults: 'Aucun article ne correspond à votre recherche.',
    dateLocale: 'fr-FR',
  },
  en: {
    placeholder: 'Search an article...',
    readMore: 'Read Article',
    noResults: 'No articles match your search criteria.',
    dateLocale: 'en-US',
  },
  ru: {
    placeholder: 'Поиск статей...',
    readMore: 'Читать статью',
    noResults: 'По вашему запросу статей не найдено.',
    dateLocale: 'ru-RU',
  },
};

export default function BlogList({ initialPosts, locale = 'fr' }) {
  const [searchTerm, setSearchTerm] = useState('');
  const t = labels[locale] || labels.fr;

  const filteredPosts = initialPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div style={{ marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' }}>
        <input 
          type="text" 
          placeholder={t.placeholder} 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label={t.placeholder}
          style={{
            width: '100%',
            padding: '15px 20px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(26, 50, 88, 0.2)',
            fontSize: '1.1rem',
            outline: 'none',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            fontFamily: 'inherit'
          }}
        />
      </div>

      <div className="grid grid-cols-3" style={{ gap: '30px' }}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.slug} className="glass animate-fade-in" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '30px', flex: '1', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '0.9rem', color: 'var(--color-secondary)', marginBottom: '10px', fontWeight: 'bold' }}>
                  {new Date(post.date).toLocaleDateString(t.dateLocale, { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--color-primary)', lineHeight: '1.4' }}>
                  <Link href={`/${locale}/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {post.title}
                  </Link>
                </h2>
                <p style={{ color: 'var(--color-text)', marginBottom: '25px', flex: '1' }}>
                  {post.excerpt}
                </p>
                <Link href={`/${locale}/blog/${post.slug}`} className="btn btn-secondary" style={{ textAlign: 'center', width: '100%', padding: '10px' }}>
                  {t.readMore}
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div style={{ gridColumn: 'span 3', textAlign: 'center', padding: '40px', color: 'var(--color-text)', fontSize: '1.2rem' }}>
            {t.noResults}
          </div>
        )}
      </div>
    </>
  );
}
