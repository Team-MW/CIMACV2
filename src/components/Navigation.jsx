'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { commonTranslations } from '../locales/common';

export default function Navigation({ locale }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  let currentLocale = locale;
  if (!currentLocale && pathname) {
    const firstSegment = pathname.split('/').filter(Boolean)[0];
    if (['fr', 'en', 'ru'].includes(firstSegment)) {
      currentLocale = firstSegment;
    }
  }
  if (!currentLocale) currentLocale = 'fr';

  const t = commonTranslations[currentLocale]?.nav || commonTranslations.fr.nav;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link href={`/${currentLocale}`} className="logo" onClick={closeMenu}>
          <img src="/logo-full.jpeg" alt="CIMAC Logo" style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
        </Link>

        <div className="header-actions">
          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li><Link href={`/${currentLocale}`} onClick={closeMenu}>{t.home}</Link></li>
            <li><Link href={`/${currentLocale}/services/creation`} onClick={closeMenu}>{t.creation}</Link></li>
            <li><Link href={`/${currentLocale}/services/gestion`} onClick={closeMenu}>{t.management}</Link></li>
            <li><Link href={`/${currentLocale}/services/juridique`} onClick={closeMenu}>{t.legal}</Link></li>
            <li><Link href={`/${currentLocale}/services/mediation`} onClick={closeMenu}>{t.mediation}</Link></li>
            <li><Link href={`/${currentLocale}/blog`} onClick={closeMenu}>{t.blog}</Link></li>
            <li><Link href={`/${currentLocale}/contact`} onClick={closeMenu}>{t.contact}</Link></li>
            <li className="mobile-only-lang">
              <LanguageSwitcher currentLocale={currentLocale} onSelect={closeMenu} />
            </li>
          </ul>

          <div className="desktop-lang">
            <LanguageSwitcher currentLocale={currentLocale} />
          </div>

          <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Menu">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
