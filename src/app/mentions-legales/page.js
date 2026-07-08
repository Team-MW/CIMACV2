import React from 'react';

export const metadata = {
  title: 'Mentions Légales | CIMAC',
  description: 'Mentions légales du site CIMAC by Ludovic CASSIN.',
};

export default function MentionsLegales() {
  return (
    <>
      <div className="section" style={{ 
        backgroundImage: 'linear-gradient(rgba(26, 50, 88, 0.8), rgba(26, 50, 88, 0.8)), url("/images/office-2.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', 
        padding: '80px 0', 
        textAlign: 'center' 
      }}>
        <div className="container animate-fade-in">
          <h1 style={{ fontSize: '3rem', marginBottom: '10px', color: 'white' }}>Mentions Légales</h1>
        </div>
      </div>
      <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>

      <section style={{ marginTop: '40px' }}>
        <h2>1. Éditeur du site</h2>
        <p>
          Le présent site est édité par <strong>CIMAC by Ludovic CASSIN</strong>.<br />
          [Adresse de l'entreprise]<br />
          Email: contact@cimac.fr<br />
          Tél: 01 23 45 67 89
        </p>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2>2. Hébergement</h2>
        <p>
          Ce site est hébergé par [Nom de l'hébergeur].<br />
          [Adresse de l'hébergeur]
        </p>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2>3. Conception et Réalisation</h2>
        <p>
          Site web réalisé par <a href="https://microdidact.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold' }}>Microdidact</a>.
        </p>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2>4. Propriété intellectuelle</h2>
        <p>
          L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
        </p>
      </section>
    </div>
    </>
  );
}
