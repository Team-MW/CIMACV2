'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BlogList({ initialPosts }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = initialPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div style={{ marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' }}>
        <input 
          type="text" 
          placeholder="Rechercher un article..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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
                  {new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--color-primary)', lineHeight: '1.4' }}>
                  <Link href={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {post.title}
                  </Link>
                </h2>
                <p style={{ color: 'var(--color-text)', marginBottom: '25px', flex: '1' }}>
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.slug}`} className="btn btn-secondary" style={{ textAlign: 'center', width: '100%', padding: '10px' }}>
                  Lire l'article
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div style={{ gridColumn: 'span 3', textAlign: 'center', padding: '40px', color: 'var(--color-text)', fontSize: '1.2rem' }}>
            Aucun article ne correspond à votre recherche.
          </div>
        )}
      </div>
    </>
  );
}
