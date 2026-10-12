import BlogList from '../../../components/BlogList';
import { getDictionary } from '../../../locales/dictionary';

export async function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }, { locale: 'ru' }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const lang = dict.locale;

  const titles = {
    fr: 'Blog & Actualités Juridiques et Entreprise',
    en: 'Blog & Legal Insights for Businesses',
    ru: 'Блог и юридическая аналитика для бизнеса',
  };

  const descriptions = {
    fr: "Retrouvez tous nos articles et conseils sur la création d'entreprise, la gestion, et la médiation de litiges commerciaux.",
    en: 'Discover our expert legal advice and insights on company formation, corporate governance, and commercial dispute mediation.',
    ru: 'Экспертные статьи и рекомендации по регистрации бизнеса, управлению, налоговой оптимизации и разрешению споров во Франции.',
  };

  return {
    title: titles[lang],
    description: descriptions[lang],
    alternates: {
      canonical: `https://www.cimaccassin.fr/${lang}/blog`,
      languages: {
        fr: 'https://www.cimaccassin.fr/fr/blog',
        en: 'https://www.cimaccassin.fr/en/blog',
        ru: 'https://www.cimaccassin.fr/ru/blog',
        'x-default': 'https://www.cimaccassin.fr/fr/blog',
      },
    },
  };
}

export default async function LocalizedBlogIndex({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const lang = dict.locale;
  const posts = dict.getBlogPosts();

  const headers = {
    fr: {
      title: 'Blog & Actualités',
      subtitle: "Conseils d'experts, actualités juridiques et bonnes pratiques pour les entrepreneurs.",
    },
    en: {
      title: 'Blog & News',
      subtitle: 'Expert insights, legal updates, and actionable strategies for entrepreneurs.',
    },
    ru: {
      title: 'Блог и актуальные статьи',
      subtitle: 'Экспертные рекомендации, юридические разъяснения и практика для предпринимателей во Франции.',
    },
  };

  const currentHeader = headers[lang] || headers.fr;

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
          <h1 style={{ fontSize: '3rem', marginBottom: '10px', color: 'white' }}>{currentHeader.title}</h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto' }}>
            {currentHeader.subtitle}
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <BlogList initialPosts={posts} locale={lang} />
        </div>
      </div>
    </>
  );
}
