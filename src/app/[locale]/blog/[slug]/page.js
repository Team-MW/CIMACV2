import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDictionary } from '../../../../locales/dictionary';
import { blogPostsFr } from '../../../../locales/blog/fr';

const validLocales = ['fr', 'en', 'ru'];

export async function generateStaticParams() {
  const params = [];
  for (const locale of validLocales) {
    for (const post of blogPostsFr) {
      params.push({ locale, slug: post.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const dict = getDictionary(locale);
  const lang = dict.locale;
  const post = dict.getBlogPost(slug);

  if (!post) {
    return {
      title: 'Article introuvable | CIMAC',
    };
  }

  return {
    title: `${post.title} | CIMAC by Ludovic CASSIN`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.cimaccassin.fr/${lang}/blog/${slug}`,
      languages: {
        fr: `https://www.cimaccassin.fr/fr/blog/${slug}`,
        en: `https://www.cimaccassin.fr/en/blog/${slug}`,
        ru: `https://www.cimaccassin.fr/ru/blog/${slug}`,
        'x-default': `https://www.cimaccassin.fr/fr/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Ludovic CASSIN'],
      url: `https://www.cimaccassin.fr/${lang}/blog/${slug}`,
    },
  };
}

export default async function LocalizedBlogPostPage({ params }) {
  const { locale, slug } = await params;
  const dict = getDictionary(locale);
  const lang = dict.locale;
  const post = dict.getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const dateLocale = lang === 'ru' ? 'ru-RU' : lang === 'en' ? 'en-US' : 'fr-FR';

  const uiTexts = {
    fr: {
      back: '← Retour au blog',
      ctaTitle: "Besoin d'accompagnement sur ce sujet ?",
      ctaText: 'Ludovic CASSIN et son équipe sont à votre disposition pour vous conseiller et sécuriser vos démarches.',
      ctaButton: 'Prendre rendez-vous',
    },
    en: {
      back: '← Back to blog',
      ctaTitle: 'Need assistance on this matter?',
      ctaText: 'Ludovic CASSIN and his team are at your disposal to advise you and protect your interests.',
      ctaButton: 'Book a Consultation',
    },
    ru: {
      back: '← Вернуться в блог',
      ctaTitle: 'Нужна экспертная помощь по этому вопросу?',
      ctaText: 'Людовик КАССЕН и команда CIMAC готовы предоставить консультацию и сопроводить ваш бизнес.',
      ctaButton: 'Записаться на консультацию',
    },
  };

  const ui = uiTexts[lang] || uiTexts.fr;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Ludovic CASSIN',
    },
    publisher: {
      '@type': 'Organization',
      name: 'CIMAC by Ludovic CASSIN',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.cimaccassin.fr/logo-full.jpeg',
      },
    },
    inLanguage: lang,
    mainEntityOfPage: `https://www.cimaccassin.fr/${lang}/blog/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div
        className="section"
        style={{
          backgroundImage: 'linear-gradient(rgba(26, 50, 88, 0.8), rgba(26, 50, 88, 0.8)), url("/images/hero-bg.avif")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '80px 0',
          textAlign: 'center',
        }}
      >
        <div className="container animate-fade-in" style={{ maxWidth: '800px' }}>
          <div style={{ fontSize: '1rem', color: 'var(--color-secondary)', marginBottom: '15px', fontWeight: 'bold' }}>
            {new Date(post.date).toLocaleDateString(dateLocale, { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'white', lineHeight: '1.2' }}>{post.title}</h1>
        </div>
      </div>

      <div className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="animate-fade-in">
            <Link
              href={`/${lang}/blog`}
              style={{
                display: 'inline-block',
                marginBottom: '30px',
                color: 'var(--color-text-light)',
                textDecoration: 'none',
                fontWeight: '500',
              }}
            >
              {ui.back}
            </Link>

            <div
              style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text)' }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div
              style={{
                marginTop: '60px',
                padding: '30px',
                backgroundColor: 'var(--color-background)',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'center',
              }}
            >
              <h3 style={{ marginBottom: '15px', color: 'var(--color-primary)' }}>{ui.ctaTitle}</h3>
              <p style={{ marginBottom: '20px' }}>{ui.ctaText}</p>
              <Link href={`/${lang}/contact`} className="btn btn-primary">
                {ui.ctaButton}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
