import '../globals.css';

import Navigation from '../../components/Navigation';
import FloatingContact from '../../components/FloatingContact';
import { metaTranslations } from '../../locales/meta';
import { commonTranslations } from '../../locales/common';
import { servicesTranslations } from '../../locales/services';

export async function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }, { locale: 'ru' }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const lang = ['fr', 'en', 'ru'].includes(locale) ? locale : 'fr';
  const meta = metaTranslations[lang] || metaTranslations.fr;

  return {
    metadataBase: new URL('https://www.cimaccassin.fr'),
    title: {
      default: meta.defaultTitle,
      template: meta.titleTemplate,
    },
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: 'Ludovic CASSIN' }],
    creator: 'CIMAC',
    publisher: 'CIMAC by Ludovic CASSIN',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: meta.defaultTitle,
      description: meta.description,
      url: `https://www.cimaccassin.fr/${lang}`,
      siteName: 'CIMAC by Ludovic CASSIN',
      locale: meta.ogLocale,
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
      canonical: `https://www.cimaccassin.fr/${lang}`,
      languages: {
        'fr': 'https://www.cimaccassin.fr/fr',
        'en': 'https://www.cimaccassin.fr/en',
        'ru': 'https://www.cimaccassin.fr/ru',
        'x-default': 'https://www.cimaccassin.fr/fr',
      },
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const lang = ['fr', 'en', 'ru'].includes(locale) ? locale : 'fr';
  const common = commonTranslations[lang] || commonTranslations.fr;
  const services = servicesTranslations[lang] || servicesTranslations.fr;
  const meta = metaTranslations[lang] || metaTranslations.fr;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'CIMAC by Ludovic CASSIN',
    description: meta.description,
    url: `https://www.cimaccassin.fr/${lang}`,
    telephone: '+33629642427',
    email: 'presidentcimac@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      addressCountry: 'FR',
    },
    founder: {
      '@type': 'Person',
      name: 'Ludovic CASSIN',
    },
    areaServed: 'France',
    inLanguage: lang,
  };

  return (
    <html lang={lang}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navigation locale={lang} />

        <main>{children}</main>

        <FloatingContact locale={lang} />

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <img
                  src="/logo-full.jpeg"
                  alt="CIMAC Logo"
                  style={{
                    height: '50px',
                    width: 'auto',
                    objectFit: 'contain',
                    marginBottom: '15px',
                    borderRadius: 'var(--radius-md)',
                  }}
                />
                <p>{common.footer.tagline}</p>
              </div>
              <div>
                <h3>{common.footer.servicesTitle}</h3>
                <ul>
                  <li><a href={`/${lang}/services/creation`}>{services.creation.title}</a></li>
                  <li><a href={`/${lang}/services/dissolution`}>{services.dissolution.title}</a></li>
                  <li><a href={`/${lang}/services/gestion`}>{services.gestion.title}</a></li>
                  <li><a href={`/${lang}/services/juridique`}>{services.juridique.title}</a></li>
                  <li><a href={`/${lang}/services/mediation`}>{services.mediation.title}</a></li>
                  <li><a href={`/${lang}/blog`}>{common.nav.blog}</a></li>
                </ul>
              </div>
              <div>
                <h3>{common.footer.contactTitle}</h3>
                <ul>
                  <li><a href={`/${lang}/contact`}>{common.cta.getInTouch}</a></li>
                  <li>Email: <a href={`mailto:${common.footer.email}`}>{common.footer.email}</a></li>
                  <li>Tél: <a href="tel:+33629642427">{common.footer.phone}</a></li>
                  <li>{common.footer.address}</li>
                </ul>
              </div>
            </div>
            <div
              className="footer-bottom"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <p>&copy; {new Date().getFullYear()} CIMAC by Ludovic CASSIN. {common.footer.rights}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                  <a
                    href={`/${lang}/mentions-legales`}
                    style={{ color: 'var(--gray-300)', fontSize: '0.9rem', textDecoration: 'none' }}
                  >
                    {common.footer.legalNotice}
                  </a>
                  <span style={{ color: 'var(--gray-300)', fontSize: '0.9rem' }}>|</span>
                  <a
                    href={`/${lang}/politique-confidentialite`}
                    style={{ color: 'var(--gray-300)', fontSize: '0.9rem', textDecoration: 'none' }}
                  >
                    {common.footer.privacyPolicy}
                  </a>
                </div>
                <p style={{ color: 'var(--gray-300)', fontSize: '0.9rem', margin: 0 }}>
                  {common.footer.madeBy}{' '}
                  <a
                    href="https://microdidact.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold' }}
                  >
                    Microdidact
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
