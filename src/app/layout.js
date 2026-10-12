import './globals.css';

import Navigation from '../components/Navigation';
import FloatingContact from '../components/FloatingContact';

import Footer from '../components/Footer';

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

        <Footer />
      </body>
    </html>
  );
}
