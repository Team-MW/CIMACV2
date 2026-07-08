export default function Contact() {
  return (
    <>
      <div className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '80px 0', textAlign: 'center' }}>
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
              
              <div style={{ marginTop: '50px' }}>
                <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(101, 151, 207, 0.2)', color: 'var(--color-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📞</div>
                  <div>
                    <h4 style={{ margin: 0, color: 'var(--color-primary)', fontSize: '1.2rem' }}>Téléphone</h4>
                    <p style={{ margin: 0, color: 'var(--color-text-light)' }}>01 23 45 67 89</p>
                  </div>
                </div>
                <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(101, 151, 207, 0.2)', color: 'var(--color-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>✉️</div>
                  <div>
                    <h4 style={{ margin: 0, color: 'var(--color-primary)', fontSize: '1.2rem' }}>Email</h4>
                    <p style={{ margin: 0, color: 'var(--color-text-light)' }}>contact@cimac.fr</p>
                  </div>
                </div>
                <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(101, 151, 207, 0.2)', color: 'var(--color-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📍</div>
                  <div>
                    <h4 style={{ margin: 0, color: 'var(--color-primary)', fontSize: '1.2rem' }}>Adresse</h4>
                    <p style={{ margin: 0, color: 'var(--color-text-light)' }}>Paris, France</p>
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
                style={{ minWidth: '100%', height: '700px', border: 'none' }}
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
