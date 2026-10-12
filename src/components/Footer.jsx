'use client';

import { usePathname } from 'next/navigation';
import { commonTranslations } from '../locales/common';

export default function Footer() {
  const pathname = usePathname();
  let locale = 'fr';
  if (pathname) {
    const firstSegment = pathname.split('/').filter(Boolean)[0];
    if (['fr', 'en', 'ru'].includes(firstSegment)) {
      locale = firstSegment;
    }
  }

  const common = commonTranslations[locale] || commonTranslations.fr;

  return (
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
              <li><a href={`/${locale}/services/creation`}>{common.nav.creation}</a></li>
              <li><a href={`/${locale}/services/dissolution`}>{common.nav.dissolution || 'Dissolution'}</a></li>
              <li><a href={`/${locale}/services/gestion`}>{common.nav.management}</a></li>
              <li><a href={`/${locale}/services/juridique`}>{common.nav.legal}</a></li>
              <li><a href={`/${locale}/services/mediation`}>{common.nav.mediation}</a></li>
              <li><a href={`/${locale}/blog`}>{common.nav.blog}</a></li>
            </ul>
          </div>
          <div>
            <h3>{common.footer.contactTitle}</h3>
            <ul>
              <li><a href={`/${locale}/contact`}>{common.cta.getInTouch}</a></li>
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
                href={`/${locale}/mentions-legales`}
                style={{ color: 'var(--gray-300)', fontSize: '0.9rem', textDecoration: 'none' }}
              >
                {common.footer.legalNotice}
              </a>
              <span style={{ color: 'var(--gray-300)', fontSize: '0.9rem' }}>|</span>
              <a
                href={`/${locale}/politique-confidentialite`}
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
  );
}
