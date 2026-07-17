import Link from 'next/link';
import { blogPosts } from './data';
import BlogList from '../../components/BlogList';

export const metadata = {
  title: 'Blog & Actualités | CIMAC by Ludovic CASSIN',
  description: 'Retrouvez tous nos articles et conseils sur la création d\'entreprise, la gestion, et la médiation de litiges commerciaux.',
};

export default function BlogIndex() {
  return (
    <>
      <div className="section" style={{ 
        backgroundImage: 'linear-gradient(rgba(26, 50, 88, 0.8), rgba(26, 50, 88, 0.8)), url("/images/office-1.avif")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', 
        padding: '80px 0', 
        textAlign: 'center' 
      }}>
        <div className="container animate-fade-in">
          <h1 style={{ fontSize: '3rem', marginBottom: '10px', color: 'white' }}>Blog & Actualités</h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto' }}>
            Conseils d'experts, actualités juridiques et bonnes pratiques pour les entrepreneurs.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <BlogList initialPosts={blogPosts} />
        </div>
      </div>
    </>
  );
}
