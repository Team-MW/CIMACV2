import Link from 'next/link';
import FAQ from '../../components/FAQ';
import Counter from '../../components/Counter';
import { getDictionary } from '../../locales/dictionary';

export default async function LocalizedHomePage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const { home, common } = dict;
  const latestPosts = dict.getBlogPosts().slice(0, 3);

  const dateLocale = locale === 'ru' ? 'ru-RU' : locale === 'en' ? 'en-US' : 'fr-FR';

  return (
    <>
      <section className="hero">
        <div
          className="container animate-fade-in"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
        >
          <img
            src="/logo-full.jpeg"
            alt="CIMAC Logo"
            style={{
              height: '100px',
              width: 'auto',
              marginBottom: '30px',
              objectFit: 'contain',
              borderRadius: 'var(--radius-md)',
              padding: '10px',
              backgroundColor: 'rgba(255,255,255,0.9)',
            }}
          />
          <h1 className="hero-title">{home.hero.title}</h1>
          <p className="hero-subtitle">{home.hero.subtitle}</p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={`/${dict.locale}/services/creation`} className="btn btn-secondary">
              {common.cta.discoverServices}
            </Link>
            <Link
              href={`/${dict.locale}/contact`}
              className="btn"
              style={{ backgroundColor: 'transparent', border: '1px solid white', color: 'white' }}
            >
              {common.cta.getInTouch}
            </Link>
          </div>
        </div>
      </section>

      {/* Chiffres Clés */}
      <section
        className="section"
        style={{ padding: '40px 0', backgroundColor: 'var(--color-white)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}
      >
        <div className="container">
          <div className="grid grid-cols-3" style={{ textAlign: 'center', gap: '30px' }}>
            {home.stats.map((stat, i) => (
              <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--color-secondary)', marginBottom: '10px' }}>
                  <Counter end={stat.end} suffix={stat.suffix} />
                </div>
                <p style={{ fontWeight: '600', color: 'var(--color-primary)', margin: 0 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{home.servicesSection.title}</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>{home.servicesSection.subtitle}</p>
          </div>

          <div className="grid grid-cols-3">
            {home.servicesSection.items.map((s) => (
              <div
                key={s.id}
                className="glass animate-fade-in service-card"
                style={{ padding: '40px 30px', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}
              >
                <div style={{ fontSize: '3.5rem', marginBottom: '20px' }}>{s.icon}</div>
                <h3 style={{ marginBottom: '15px', color: 'var(--color-primary)' }}>{s.title}</h3>
                <p>{s.desc}</p>
                <Link
                  href={`/${dict.locale}/services/${s.id}`}
                  style={{ color: 'var(--color-secondary)', fontWeight: '600', marginTop: '20px', display: 'inline-block' }}
                >
                  {common.cta.learnMore} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi choisir CIMAC */}
      <section
        className="section"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url("/images/office-1.avif")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'var(--color-white)',
        }}
      >
        <div className="container grid grid-cols-2" style={{ alignItems: 'center' }}>
          <div className="animate-fade-in">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{home.whyChooseUs.title}</h2>
            <p>{home.whyChooseUs.description}</p>
            <ul style={{ listStyle: 'none', marginTop: '30px' }}>
              {home.whyChooseUs.points.map((pt, i) => (
                <li
                  key={i}
                  style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '15px', fontWeight: '500' }}
                >
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
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  {pt}
                </li>
              ))}
            </ul>
            <Link href={`/${dict.locale}/contact`} className="btn btn-primary" style={{ marginTop: '30px' }}>
              {common.cta.bookAppointment}
            </Link>
          </div>
          <div
            className="glass animate-fade-in"
            style={{
              padding: '50px 40px',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--color-primary)',
              color: 'white',
              textAlign: 'center',
            }}
          >
            <h3 style={{ color: 'white', marginBottom: '20px', fontSize: '2rem' }}>
              {home.whyChooseUs.urgentBox.title}
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '30px', fontSize: '1.1rem' }}>
              {home.whyChooseUs.urgentBox.text}
            </p>
            <Link href={`/${dict.locale}/contact`} className="btn btn-secondary" style={{ width: '100%' }}>
              {home.whyChooseUs.urgentBox.button}
            </Link>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section
        className="section"
        style={{
          backgroundImage: 'linear-gradient(rgba(244, 247, 250, 0.95), rgba(244, 247, 250, 0.95)), url("/images/office-2.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'var(--color-background)',
        }}
      >
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{home.testimonials.title}</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>{home.testimonials.subtitle}</p>
          </div>
          <div className="grid grid-cols-3">
            {home.testimonials.items.map((avis, i) => (
              <div
                key={i}
                className="glass animate-fade-in"
                style={{ padding: '30px', borderRadius: 'var(--radius-lg)', position: 'relative' }}
              >
                <div
                  style={{
                    fontSize: '3rem',
                    color: 'rgba(101, 151, 207, 0.2)',
                    position: 'absolute',
                    top: '10px',
                    left: '20px',
                    fontFamily: 'serif',
                  }}
                >
                  "
                </div>
                <p style={{ fontStyle: 'italic', marginBottom: '20px', position: 'relative', zIndex: 1 }}>{avis.text}</p>
                <div>
                  <h4 style={{ color: 'var(--color-primary)', margin: 0 }}>{avis.author}</h4>
                  <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--color-secondary)' }}>{avis.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dernières Actualités */}
      <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{home.latestNews.title}</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>{home.latestNews.subtitle}</p>
          </div>
          <div className="grid grid-cols-3">
            {latestPosts.map((post) => (
              <div
                key={post.slug}
                className="glass animate-fade-in"
                style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '0.9rem', color: 'var(--color-secondary)', marginBottom: '10px', fontWeight: 'bold' }}>
                    {new Date(post.date).toLocaleDateString(dateLocale, { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                  <h3 style={{ marginBottom: '15px', color: 'var(--color-primary)', fontSize: '1.4rem', lineHeight: '1.3' }}>
                    {post.title}
                  </h3>
                  <p style={{ marginBottom: '20px', flex: 1 }}>{post.excerpt}</p>
                  <Link
                    href={`/${dict.locale}/blog/${post.slug}`}
                    style={{ color: 'var(--color-secondary)', fontWeight: '600', textDecoration: 'none' }}
                  >
                    {common.cta.readArticle} &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link href={`/${dict.locale}/blog`} className="btn btn-secondary">
              {common.cta.viewAllBlog}
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="section"
        style={{
          backgroundImage: 'linear-gradient(rgba(26, 50, 88, 0.85), rgba(26, 50, 88, 0.9)), url("/images/cta-bg.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <div className="container animate-fade-in" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'white' }}>{home.finalCta.title}</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: 'rgba(255,255,255,0.8)' }}>
            {home.finalCta.subtitle}
          </p>
          <Link
            href={`/${dict.locale}/contact`}
            className="btn btn-secondary"
            style={{ fontSize: '1.2rem', padding: '15px 30px' }}
          >
            {home.finalCta.button}
          </Link>
        </div>
      </section>

      <FAQ title={home.faqs.title} items={home.faqs.items} />
    </>
  );
}
