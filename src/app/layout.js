import './globals.css';

import Navigation from '../components/Navigation';

export const metadata = {
  metadataBase: new URL('https://cimaccassin.fr'),
  title: {
    default: 'CIMAC by Ludovic CASSIN | Services Juridiques & Gestion',
    template: '%s | CIMAC by Ludovic CASSIN',
  },
  description: 'Cabinet de conseil expert en création, dissolution et gestion d\'entreprises. Services juridiques, médiation de litiges et assistance URSSAF par Ludovic CASSIN.',
  keywords: ['Création entreprise', 'Gestion entreprise', 'Dissolution', 'Médiation litiges', 'Assistance URSSAF', 'Services juridiques', 'Ludovic CASSIN', 'CIMAC'],
  authors: [{ name: 'Ludovic CASSIN' }],
  creator: 'CIMAC',
  publisher: 'CIMAC by Ludovic CASSIN',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'CIMAC by Ludovic CASSIN | Services Juridiques & Gestion',
    description: 'Expertise en création, dissolution et gestion d\'entreprises. Services juridiques et médiation de litiges.',
    url: 'https://cimaccassin.fr',
    siteName: 'CIMAC by Ludovic CASSIN',
    locale: 'fr_FR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navigation />

        <main>{children}</main>

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <h3>CIMAC by Ludovic CASSIN</h3>
                <p>Expertise et accompagnement professionnel pour toutes les étapes de la vie de votre entreprise.</p>
              </div>
              <div>
                <h3>Nos Services</h3>
                <ul>
                  <li><a href="/services/creation">Création d'entreprise</a></li>
                  <li><a href="/services/dissolution">Dissolution</a></li>
                  <li><a href="/services/gestion">Gestion & Admin</a></li>
                  <li><a href="/services/juridique">Services Juridiques</a></li>
                  <li><a href="/services/mediation">Médiation Litiges</a></li>
                  <li><a href="/blog">Blog & Actualités</a></li>
                </ul>
              </div>
              <div>
                <h3>Contact</h3>
                <ul>
                  <li><a href="/contact">Nous contacter</a></li>
                  <li>Email: contact@cimac.fr</li>
                  <li>Tél: 01 23 45 67 89</li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom" style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', textAlign: 'center' }}>
              <p>&copy; {new Date().getFullYear()} CIMAC by Ludovic CASSIN. Tous droits réservés.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                  <a href="/mentions-legales" style={{ color: 'var(--gray-300)', fontSize: '0.9rem', textDecoration: 'none' }}>Mentions Légales</a>
                  <span style={{ color: 'var(--gray-300)', fontSize: '0.9rem' }}>|</span>
                  <a href="/politique-confidentialite" style={{ color: 'var(--gray-300)', fontSize: '0.9rem', textDecoration: 'none' }}>Politique de Confidentialité</a>
                </div>
                <p style={{ color: 'var(--gray-300)', fontSize: '0.9rem', margin: 0 }}>
                  Réalisé par <a href="https://microdidact.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold' }}>Microdidact</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
