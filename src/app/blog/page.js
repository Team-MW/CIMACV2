import Link from 'next/link';
import { blogPosts } from './data';

export const metadata = {
  title: 'Blog & Actualités | CIMAC by Ludovic CASSIN',
  description: 'Retrouvez tous nos articles et conseils sur la création d\'entreprise, la gestion, et la médiation de litiges commerciaux.',
};

export default function BlogIndex() {
  return (
    <>
      <div className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '80px 0', textAlign: 'center' }}>
        <div className="container animate-fade-in">
          <h1 style={{ fontSize: '3rem', marginBottom: '10px', color: 'white' }}>Blog & Actualités</h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto' }}>
            Conseils d'experts, actualités juridiques et bonnes pratiques pour les entrepreneurs.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="grid grid-cols-3" style={{ gap: '30px' }}>
            {blogPosts.map((post) => (
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
