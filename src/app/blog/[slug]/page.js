import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '../data';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) {
    return {
      title: 'Article introuvable | CIMAC',
    };
  }

  return {
    title: `${post.title} | Blog CIMAC`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <div className="section" style={{ 
        backgroundImage: 'linear-gradient(rgba(26, 50, 88, 0.8), rgba(26, 50, 88, 0.8)), url("/images/hero-bg.avif")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', 
        padding: '80px 0', 
        textAlign: 'center' 
      }}>
        <div className="container animate-fade-in" style={{ maxWidth: '800px' }}>
          <div style={{ fontSize: '1rem', color: 'var(--color-secondary)', marginBottom: '15px', fontWeight: 'bold' }}>
            {new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'white', lineHeight: '1.2' }}>{post.title}</h1>
        </div>
      </div>

      <div className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="animate-fade-in">
            <Link href="/blog" style={{ display: 'inline-block', marginBottom: '30px', color: 'var(--color-text-light)', textDecoration: 'none', fontWeight: '500' }}>
              &larr; Retour au blog
            </Link>
            
            <div 
              style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text)' }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div style={{ marginTop: '60px', padding: '30px', backgroundColor: 'var(--color-background)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
              <h3 style={{ marginBottom: '15px', color: 'var(--color-primary)' }}>Besoin d'accompagnement sur ce sujet ?</h3>
              <p style={{ marginBottom: '20px' }}>Ludovic CASSIN et son équipe sont à votre disposition pour vous conseiller.</p>
              <Link href="/contact" className="btn btn-primary">Nous contacter</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
