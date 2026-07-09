'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="logo" onClick={closeMenu}>
          <img src="/logo.jpeg" alt="CIMAC Logo" style={{ height: '40px', width: '40px', objectFit: 'cover', borderRadius: '50%' }} />
          CIMAC
        </Link>
        
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link href="/" onClick={closeMenu}>Accueil</Link></li>
          <li><Link href="/services/creation" onClick={closeMenu}>Création</Link></li>
          <li><Link href="/services/gestion" onClick={closeMenu}>Gestion</Link></li>
          <li><Link href="/services/juridique" onClick={closeMenu}>Juridique</Link></li>
          <li><Link href="/services/mediation" onClick={closeMenu}>Médiation</Link></li>
          <li><Link href="/blog" onClick={closeMenu}>Blog</Link></li>
          <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </header>
  );
}
