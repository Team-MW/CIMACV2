import './globals.css';

import Navigation from '../components/Navigation';
import FloatingContact from '../components/FloatingContact';

export const metadata = {
  metadataBase: new URL('https://www.cimaccassin.fr'),
  title: {
    default: 'CIMAC by Ludovic CASSIN | Services Juridiques & Gestion',
    template: '%s | CIMAC by Ludovic CASSIN',
  },
  description: 'Expertise juridique et gestion d\'entreprise. CIMAC by Ludovic CASSIN vous accompagne en création, dissolution, médiation de litiges et assistance URSSAF.',
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
    description: 'Expertise juridique et gestion d\'entreprise. CIMAC by Ludovic CASSIN vous accompagne en création, dissolution, médiation de litiges et assistance URSSAF.',
    url: 'https://www.cimaccassin.fr',
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

        <FloatingContact />

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
                  <li>Email: presidentcimac@gmail.com</li>
                  <li>Tél: +33 6 29 64 24 27</li>
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
