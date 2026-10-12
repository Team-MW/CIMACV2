import React from 'react';
import { legalTranslations } from '../../../locales/legal';

const validLocales = ['fr', 'en', 'ru'];

export async function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }, { locale: 'ru' }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const lang = validLocales.includes(locale) ? locale : 'fr';
  const l = legalTranslations[lang] || legalTranslations.fr;

  return {
    title: `${l.privacy.title} | CIMAC`,
    description: l.privacy.description,
    alternates: {
      canonical: `https://www.cimaccassin.fr/${lang}/politique-confidentialite`,
      languages: {
        fr: 'https://www.cimaccassin.fr/fr/politique-confidentialite',
        en: 'https://www.cimaccassin.fr/en/politique-confidentialite',
        ru: 'https://www.cimaccassin.fr/ru/politique-confidentialite',
        'x-default': 'https://www.cimaccassin.fr/fr/politique-confidentialite',
      },
    },
  };
}

export default async function LocalizedPolitiqueConfidentialite({ params }) {
  const { locale } = await params;
  const lang = validLocales.includes(locale) ? locale : 'fr';
  const l = legalTranslations[lang] || legalTranslations.fr;

  return (
    <>
      <div
        className="section"
        style={{
          backgroundImage: 'linear-gradient(rgba(26, 50, 88, 0.8), rgba(26, 50, 88, 0.8)), url("/images/office-1.avif")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '80px 0',
          textAlign: 'center',
        }}
      >
        <div className="container animate-fade-in">
          <h1 style={{ fontSize: '3rem', marginBottom: '10px', color: 'white' }}>{l.privacy.title}</h1>
        </div>
      </div>
      <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        {l.privacy.sections.map((sec, idx) => (
          <section key={idx} style={{ marginTop: '40px' }}>
            <h2>{sec.title}</h2>
            <div
              style={{ lineHeight: '1.8', marginTop: '15px' }}
              dangerouslySetInnerHTML={{ __html: sec.content }}
            />
          </section>
        ))}
      </div>
    </>
  );
}
