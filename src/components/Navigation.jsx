'use client';

import { useState } from 'react';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import { commonTranslations } from '../locales/common';

export default function Navigation({ locale = 'fr' }) {
  const [isOpen, setIsOpen] = useState(false);
  const t = commonTranslations[locale]?.nav || commonTranslations.fr.nav;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link href={`/${locale}`} className="logo" onClick={closeMenu}>
          <img src="/logo-full.jpeg" alt="CIMAC Logo" style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
        </Link>

        <div className="header-actions">
          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li><Link href={`/${locale}`} onClick={closeMenu}>{t.home}</Link></li>
            <li><Link href={`/${locale}/services/creation`} onClick={closeMenu}>{t.creation}</Link></li>
            <li><Link href={`/${locale}/services/gestion`} onClick={closeMenu}>{t.management}</Link></li>
            <li><Link href={`/${locale}/services/juridique`} onClick={closeMenu}>{t.legal}</Link></li>
            <li><Link href={`/${locale}/services/mediation`} onClick={closeMenu}>{t.mediation}</Link></li>
            <li><Link href={`/${locale}/blog`} onClick={closeMenu}>{t.blog}</Link></li>
            <li><Link href={`/${locale}/contact`} onClick={closeMenu}>{t.contact}</Link></li>
            <li className="mobile-only-lang">
              <LanguageSwitcher currentLocale={locale} onSelect={closeMenu} />
            </li>
          </ul>

          <div className="desktop-lang">
            <LanguageSwitcher currentLocale={locale} />
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
