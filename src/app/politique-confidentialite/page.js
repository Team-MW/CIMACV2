import React from 'react';

export const metadata = {
  title: 'Politique de Confidentialité | CIMAC',
  description: 'Politique de confidentialité et gestion des données personnelles du site CIMAC by Ludovic CASSIN.',
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
      <h1>Politique de Confidentialité</h1>

      <section style={{ marginTop: '40px' }}>
        <h2>1. Introduction</h2>
        <p>
          Chez <strong>CIMAC by Ludovic CASSIN</strong>, nous accordons une grande importance à la protection et à la confidentialité de vos données personnelles. La présente politique vise à vous informer sur la manière dont nous collectons, utilisons et protégeons les informations que vous nous transmettez via notre site internet.
        </p>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2>2. Collecte des données personnelles</h2>
        <p>
          Nous pouvons être amenés à collecter vos données personnelles (nom, prénom, adresse email, numéro de téléphone, entreprise) lorsque vous :
        </p>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px', marginBottom: '20px' }}>
          <li>Remplissez notre formulaire de contact ou de demande de devis.</li>
          <li>Nous contactez par email ou par téléphone.</li>
        </ul>
        <p>
          Ces informations sont recueillies de manière explicite et avec votre consentement dans le but de pouvoir répondre à vos demandes et vous recontacter.
        </p>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2>3. Utilisation de vos données</h2>
        <p>
          Les informations que nous recueillons sont destinées exclusivement à <strong>CIMAC by Ludovic CASSIN</strong>. Elles sont utilisées pour :
        </p>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px', marginBottom: '20px' }}>
          <li>Répondre à vos questions et demandes de renseignements.</li>
          <li>Établir des devis et assurer le suivi commercial de votre dossier.</li>
          <li>Vous informer de nos services si vous en avez fait la demande.</li>
        </ul>
        <p>
          Vos données ne seront en aucun cas cédées, vendues, louées ou échangées à des tiers à des fins commerciales ou publicitaires.
        </p>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2>4. Sécurité et conservation des données</h2>
        <p>
          Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, altération, divulgation ou destruction.
        </p>
        <p>
          Vos données sont conservées pendant la durée strictement nécessaire au traitement de votre demande, puis archivées conformément aux durées de prescription légales en vigueur (généralement 3 ans pour les prospects, ou pour la durée de la relation contractuelle).
        </p>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2>5. Vos droits (RGPD)</h2>
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants concernant vos données personnelles :
        </p>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px', marginBottom: '20px' }}>
          <li><strong>Droit d'accès :</strong> vous pouvez demander à consulter les données que nous détenons sur vous.</li>
          <li><strong>Droit de rectification :</strong> vous pouvez demander la correction de données inexactes ou incomplètes.</li>
          <li><strong>Droit à l'effacement :</strong> vous pouvez demander la suppression de vos données personnelles.</li>
          <li><strong>Droit d'opposition :</strong> vous pouvez vous opposer au traitement de vos données.</li>
        </ul>
        <p>
          Pour exercer ces droits, veuillez nous contacter à l'adresse suivante : <strong>contact@cimac.fr</strong>.
        </p>
      </section>
    </div>
  );
}
