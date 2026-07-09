export default function Contact() {
  return (
    <>
      <div className="section" style={{ 
        backgroundImage: 'linear-gradient(rgba(26, 50, 88, 0.8), rgba(26, 50, 88, 0.8)), url("/images/cta-bg.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', 
        padding: '80px 0', 
        textAlign: 'center' 
      }}>
        <div className="container animate-fade-in">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '10px', color: 'white', fontWeight: '700' }}>Contactez-nous</h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)' }}>Nous sommes à votre disposition pour toute demande d'accompagnement.</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '60px' }}>
            <div className="animate-fade-in">
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Parlons de votre projet</h2>
              <p style={{ marginBottom: '30px', fontSize: '1.1rem', color: 'var(--color-text-light)' }}>Remplissez le formulaire ci-contre pour nous faire part de vos besoins. Nous vous recontacterons dans les plus brefs délais.</p>
              
              <div className="grid grid-cols-1" style={{ gap: '20px', marginTop: '40px' }}>
                <div className="glass hover-lift" style={{ padding: '25px', display: 'flex', alignItems: 'center', gap: '25px', borderRadius: 'var(--radius-md)', transition: 'all 0.3s ease' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(26, 50, 88, 0.1)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div>
                    <h4 style={{ margin: 0, color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '5px', fontWeight: '700' }}>Téléphone</h4>
                    <p style={{ margin: 0, color: 'var(--color-text)', fontSize: '1.1rem' }}>+33 6 29 64 24 27</p>
                  </div>
                </div>

                <div className="glass hover-lift" style={{ padding: '25px', display: 'flex', alignItems: 'center', gap: '25px', borderRadius: 'var(--radius-md)', transition: 'all 0.3s ease' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(26, 50, 88, 0.1)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <h4 style={{ margin: 0, color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '5px', fontWeight: '700' }}>Email</h4>
                    <p style={{ margin: 0, color: 'var(--color-text)', fontSize: '1.1rem' }}>presidentcimac@gmail.com</p>
                  </div>
                </div>

                <div className="glass hover-lift" style={{ padding: '25px', display: 'flex', alignItems: 'center', gap: '25px', borderRadius: 'var(--radius-md)', transition: 'all 0.3s ease' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(26, 50, 88, 0.1)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <h4 style={{ margin: 0, color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '5px', fontWeight: '700' }}>Adresse</h4>
                    <p style={{ margin: 0, color: 'var(--color-text)', fontSize: '1.1rem' }}>Paris, France</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass animate-fade-in" style={{ padding: '0', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              {/* En Next.js, il est fortement recommandé d'utiliser l'iframe Jotform plutôt que le script JS pour éviter les bugs d'affichage */}
              <iframe
                id="JotFormIFrame-261883116403353"
                title="Formulaire de contact CIMAC"
                allowTransparency="true"
                allowFullScreen="true"
                allow="geolocation; microphone; camera"
                src="https://form.jotform.com/261883116403353"
                frameBorder="0"
                className="jotform-iframe"
                scrolling="no"
              >
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
