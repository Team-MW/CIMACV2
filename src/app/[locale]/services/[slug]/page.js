import Link from 'next/link';
import { notFound } from 'next/navigation';
import FAQ from '../../../../components/FAQ';
import { servicesTranslations } from '../../../../locales/services';
import { commonTranslations } from '../../../../locales/common';

const validSlugs = ['creation', 'dissolution', 'gestion', 'juridique', 'mediation'];
const validLocales = ['fr', 'en', 'ru'];

export function generateStaticParams() {
  const params = [];
  for (const locale of validLocales) {
    for (const slug of validSlugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const lang = validLocales.includes(locale) ? locale : 'fr';
  const service = servicesTranslations[lang]?.[slug];

  if (!service) return {};

  return {
    title: service.title,
    description: service.content.slice(0, 160),
    alternates: {
      canonical: `https://www.cimaccassin.fr/${lang}/services/${slug}`,
      languages: {
        fr: `https://www.cimaccassin.fr/fr/services/${slug}`,
        en: `https://www.cimaccassin.fr/en/services/${slug}`,
        ru: `https://www.cimaccassin.fr/ru/services/${slug}`,
        'x-default': `https://www.cimaccassin.fr/fr/services/${slug}`,
      },
    },
  };
}

export default async function LocalizedServicePage({ params }) {
  const { locale, slug } = await params;
  const lang = validLocales.includes(locale) ? locale : 'fr';
  const service = servicesTranslations[lang]?.[slug];
  const common = commonTranslations[lang] || commonTranslations.fr;

  if (!service) {
    notFound();
  }

  return (
    <>
      <div
        className="section"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 50, 88, 0.8), rgba(26, 50, 88, 0.8)), url("/images/${service.bgImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '80px 0',
          textAlign: 'center',
        }}
      >
        <div className="container animate-fade-in">
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>{service.icon}</div>
          <h1 style={{ fontSize: '3rem', marginBottom: '10px', color: 'white' }}>{service.title}</h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)' }}>{service.subtitle}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '60px', alignItems: 'flex-start' }}>
            <div className="animate-fade-in" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>{service.aboutTitle}</h2>
              <p>{service.content}</p>

              <h3 style={{ fontSize: '1.5rem', marginTop: '40px', marginBottom: '20px' }}>
                {service.strengthsTitle}
              </h3>
              <ul style={{ listStyle: 'none' }}>
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(101, 151, 207, 0.2)',
                        color: 'var(--color-secondary)',
                        fontWeight: 'bold',
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>{' '}
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass animate-fade-in" style={{ padding: '40px', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ marginBottom: '20px', color: 'var(--color-primary)' }}>{service.contactBox.title}</h3>
              <p style={{ marginBottom: '30px', color: 'var(--color-text-light)' }}>
                {service.contactBox.text}
              </p>
              <Link
                href={`/${lang}/contact`}
                className="btn btn-primary"
                style={{ width: '100%', textAlign: 'center', display: 'block' }}
              >
                {service.contactBox.button}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="section" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{service.problemsTitle}</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>{service.problemsSubtitle}</p>
          </div>
          <div className="grid grid-cols-2" style={{ gap: '20px' }}>
            {service.problems.map((problem, idx) => (
              <div
                key={idx}
                className="glass animate-fade-in"
                style={{ padding: '25px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'flex-start', gap: '15px' }}
              >
                <span style={{ color: '#A45729', fontSize: '1.5rem', lineHeight: '1' }}>⚠️</span>
                <p style={{ margin: 0, fontWeight: '500' }}>{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{service.processTitle}</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>{service.processSubtitle}</p>
          </div>
          <div className="grid grid-cols-4" style={{ gap: '20px' }}>
            {service.process.map((step, idx) => (
              <div
                key={idx}
                className="animate-fade-in"
                style={{
                  position: 'relative',
                  padding: '30px',
                  backgroundColor: 'var(--color-white)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  animationDelay: `${idx * 0.1}s`,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    left: '30px',
                    width: '40px',
                    height: '40px',
                    backgroundColor: 'var(--color-primary)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                  }}
                >
                  {idx + 1}
                </div>
                <h4 style={{ color: 'var(--color-primary)', marginTop: '10px', marginBottom: '10px' }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)', margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FAQ title={service.faqsTitle} items={service.faqs} />
    </>
  );
}
