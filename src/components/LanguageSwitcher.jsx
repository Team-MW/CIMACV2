'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const languages = [
  { code: 'fr', label: 'FR', name: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'EN', name: 'English', flag: '🇬🇧' },
  { code: 'ru', label: 'RU', name: 'Русский', flag: '🇷🇺' },
];

export default function LanguageSwitcher({ currentLocale = 'fr', onSelect }) {
  const pathname = usePathname();

  const getTargetUrl = (targetLocale) => {
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 0 && ['fr', 'en', 'ru'].includes(segments[0])) {
      segments[0] = targetLocale;
    } else {
      segments.unshift(targetLocale);
    }
    return '/' + segments.join('/');
  };

  return (
    <div className="language-switcher" role="navigation" aria-label="Language selector">
      {languages.map((lang) => {
        const isActive = currentLocale === lang.code;
        return (
          <Link
            key={lang.code}
            href={getTargetUrl(lang.code)}
            onClick={() => onSelect && onSelect()}
            className={`lang-btn ${isActive ? 'active' : ''}`}
            title={lang.name}
            aria-current={isActive ? 'page' : undefined}
          >
            <span className="lang-flag">{lang.flag}</span>
            <span className="lang-code">{lang.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
