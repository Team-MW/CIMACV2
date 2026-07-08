import Link from 'next/link';
import { notFound } from 'next/navigation';
import FAQ from '../../../components/FAQ';

export function generateStaticParams() {
  return [
    { slug: 'creation' },
    { slug: 'dissolution' },
    { slug: 'gestion' },
    { slug: 'juridique' },
    { slug: 'mediation' },
  ];
}

export default async function ServicePage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const servicesData = {
    creation: {
      title: 'Création d\'entreprises',
      subtitle: 'Toutes formes juridiques',
      icon: '🏢',
      content: "La création d'une entreprise est une étape cruciale. Chez CIMAC, nous vous accompagnons dans le choix de la forme juridique la plus adaptée à votre projet (SAS, SARL, SCI, auto-entreprise, etc.) et prenons en charge l'ensemble des formalités administratives et légales. Concentrez-vous sur votre cœur de métier, nous nous occupons du reste.",
      benefits: ["Conseil sur le statut juridique", "Rédaction des statuts", "Immatriculation au RCS", "Obtention du Kbis"],
      problems: [
        "Incertitude face au choix du bon statut fiscal et social.",
        "Peur de faire des erreurs lors de la rédaction des statuts.",
        "Manque de temps pour gérer les aller-retours avec le Greffe.",
        "Besoin de structurer une association avec des partenaires (pacte d'associés)."
      ],
      process: [
        { title: "Consultation initiale", desc: "Analyse de votre projet, de vos besoins financiers et de votre situation personnelle." },
        { title: "Choix & Stratégie", desc: "Définition du statut juridique (SAS, SARL...), du régime fiscal et rédaction des statuts sur-mesure." },
        { title: "Formalités", desc: "Dépôt du capital, publication de l'annonce légale et constitution du dossier sur le guichet unique." },
        { title: "Lancement", desc: "Obtention de votre Kbis et activation de l'entreprise. Vous êtes prêt à facturer !" }
      ],
      faqs: [
        { question: "Quel statut juridique choisir pour mon entreprise ?", answer: "Le choix dépend de plusieurs facteurs : le nombre d'associés, le montant du capital, votre régime social souhaité (assimilé salarié ou TNS), et vos prévisions de chiffre d'affaires. Nous analysons votre projet pour vous orienter vers la forme la plus avantageuse (SAS, SARL, Micro-entreprise...)." },
        { question: "Combien de temps faut-il pour créer une société ?", answer: "Une fois le dossier complet (statuts signés, attestation de dépôt des fonds, pièces d'identité), l'immatriculation au Registre du Commerce et des Sociétés (RCS) prend généralement entre 48h et 72h ouvrées." },
        { question: "Puis-je créer mon entreprise tout en étant salarié ?", answer: "Oui, c'est tout à fait possible sous réserve de respecter une éventuelle clause d'exclusivité ou de non-concurrence stipulée dans votre contrat de travail, et d'une obligation de loyauté envers votre employeur actuel." },
        { question: "Faut-il un capital minimum pour se lancer ?", answer: "Pour la plupart des formes juridiques courantes comme la SAS ou la SARL, le capital minimum légal est de 1 euro symbolique. Toutefois, nous vous conseillons de prévoir un capital cohérent avec vos besoins de démarrage pour rassurer vos partenaires bancaires." },
        { question: "Rédigez-vous aussi les pactes d'associés ?", answer: "Oui. Si vous vous associez, le pacte d'associés est un document confidentiel fondamental qui fixe les règles entre fondateurs (clause de sortie, rachat de parts, prise de décision). Nous le rédigeons sur-mesure en complément de vos statuts." }
      ]
    },
    dissolution: {
      title: 'Dissolution d\'entreprises',
      subtitle: 'Accompagnement de A à Z',
      icon: '📉',
      content: "Fermer une entreprise nécessite de suivre une procédure stricte. Nous gérons la dissolution et la liquidation de toutes formes juridiques en assurant la conformité avec les exigences légales. Nous rédigeons les procès-verbaux, publions les annonces légales et effectuons les démarches de radiation.",
      benefits: ["Bilan de liquidation", "Annonce légale", "Radiation au registre des commerces", "Démarches fiscales"],
      problems: [
        "Ignorance des étapes légales obligatoires pour fermer une société.",
        "Risque de redressement si la clôture n'est pas faite dans les règles.",
        "Incapacité à rédiger les Procès-Verbaux (PV) d'Assemblée Générale.",
        "Besoin de radier une entreprise rapidement pour stopper les charges."
      ],
      process: [
        { title: "Audit de la situation", desc: "Vérification des comptes pour s'assurer que la dissolution amiable est possible (pas de cessation des paiements)." },
        { title: "Dissolution", desc: "Rédaction du PV d'AG Extraordinaire, nomination du liquidateur, et première annonce légale." },
        { title: "Liquidation", desc: "Réalisation de l'actif, paiement des dettes, et établissement des comptes de clôture." },
        { title: "Radiation", desc: "Dépôt du dossier final au Greffe et obtention du Kbis de radiation." }
      ],
      faqs: [
        { question: "Quelle est la différence entre dissolution et liquidation ?", answer: "La dissolution est la décision de mettre fin à l'activité de la société (souvent votée en Assemblée Générale). La liquidation est la phase qui suit : on réalise l'actif (vente des biens) et on apure le passif (paiement des dettes) avant de procéder à la radiation définitive." },
        { question: "Puis-je fermer ma société s'il reste des dettes ?", answer: "La dissolution anticipée à l'amiable n'est possible que si la société est en mesure de payer toutes ses dettes (on parle de dissolution amiable). Si la société est en cessation de paiements, il faut engager une procédure de dépôt de bilan (liquidation judiciaire)." },
        { question: "Quel est le coût d'une fermeture d'entreprise ?", answer: "Les frais obligatoires incluent la publication d'une annonce légale de dissolution puis de liquidation, ainsi que les frais de greffe pour la radiation. Nos honoraires d'accompagnement sont proposés sur devis et couvrent la gestion intégrale de la procédure." },
        { question: "Puis-je être le liquidateur de ma propre entreprise ?", answer: "Oui, c'est le cas le plus courant pour les TPE et PME. Le gérant ou président est généralement nommé liquidateur amiable par les associés lors de l'assemblée générale de dissolution." },
        { question: "Combien de temps dure une procédure de dissolution / liquidation ?", answer: "En général, une procédure amiable simple prend entre 1 et 2 mois si la société n'a pas ou peu de dettes et d'actifs à réaliser. La loi impose un délai maximum de 3 ans pour clôturer la liquidation." }
      ]
    },
    gestion: {
      title: 'Gestion des entreprises',
      subtitle: 'Administration et comptabilité',
      icon: '📊',
      content: "Une bonne gestion administrative et comptable est le pilier d'une entreprise saine. Nous proposons des services d'externalisation pour votre administration courante, le suivi de votre trésorerie, la préparation des documents comptables et la gestion de vos obligations déclaratives.",
      benefits: ["Saisie comptable", "Suivi de trésorerie", "Gestion administrative", "Tableaux de bord"],
      problems: [
        "Temps perdu le soir et le week-end à faire de l'administratif.",
        "Retards de paiement récurrents à cause de relances clients mal gérées.",
        "Pénalités URSSAF ou TVA liées à des oublis de déclarations.",
        "Manque de visibilité sur la rentabilité réelle de l'entreprise."
      ],
      process: [
        { title: "Audit initial", desc: "Analyse de vos processus actuels et mise à plat de votre gestion administrative." },
        { title: "Mise en place des outils", desc: "Déploiement d'outils de facturation, de suivi de trésorerie et de partage de documents." },
        { title: "Externalisation au quotidien", desc: "Nous prenons en charge la saisie, les déclarations, la facturation et les relances." },
        { title: "Pilotage", desc: "Remise d'un tableau de bord mensuel pour piloter vos finances en toute sérénité." }
      ],
      faqs: [
        { question: "Proposez-vous un accompagnement mensuel ?", answer: "Oui, nous proposons des forfaits d'accompagnement mensuels ou trimestriels pour l'externalisation de votre gestion administrative et la préparation des éléments comptables à transmettre à votre expert-comptable." },
        { question: "De quels documents avez-vous besoin pour commencer ?", answer: "Lors de notre prise en charge, nous vous demanderons un accès à vos relevés bancaires, les statuts de la société, un KBIS récent, et les dernières liasses fiscales si la société a déjà une antériorité." }
      ]
    },
    juridique: {
      title: 'Services Juridiques',
      subtitle: 'Négociation avec les organismes publics',
      icon: '⚖️',
      content: "Face à la complexité administrative, nous défendons vos intérêts. Nous intervenons pour négocier avec les organismes (URSSAF, impôts) et les services publics. Notre expertise nous permet de trouver des accords favorables et de résoudre les situations de blocage.",
      benefits: ["Négociation URSSAF", "Étalement de dettes", "Relations avec les impôts", "Assistance contrôle"],
      problems: [
        "Réception d'une mise en demeure de l'URSSAF ou des impôts avec majorations.",
        "Incapacité à rembourser une dette fiscale dans l'immédiat.",
        "Avis de contrôle fiscal ou social générant du stress.",
        "Litiges complexes avec l'administration nécessitant des recours formels."
      ],
      process: [
        { title: "Diagnostic de la crise", desc: "Analyse détaillée des courriers reçus et qualification du risque financier et pénal." },
        { title: "Gel des procédures", desc: "Prise de contact immédiate avec l'administration pour stopper les poursuites (saisies)." },
        { title: "Négociation & Recours", desc: "Montage du dossier, demande de remises gracieuses ou proposition d'un plan d'apurement." },
        { title: "Résolution", desc: "Signature de l'accord avec l'organisme et sécurisation juridique de la situation." }
      ],
      faqs: [
        { question: "Que faire en cas de mise en demeure de l'URSSAF ?", answer: "Il est impératif de réagir rapidement pour éviter des majorations de retard ou des saisies. Nous analysons la mise en demeure, vérifions son bien-fondé et nous chargeons de contacter l'URSSAF pour négocier un échéancier ou contester le montant réclamé." },
        { question: "Pouvez-vous m'assister lors d'un contrôle fiscal ?", answer: "Oui, notre équipe vous accompagne pour préparer les documents demandés par l'administration, répondre aux questions du contrôleur, et défendre vos droits tout au long de la procédure contradictoire." }
      ]
    },
    mediation: {
      title: 'Médiation',
      subtitle: 'Résolution de litiges entre entreprises',
      icon: '🤝',
      content: "Les conflits inter-entreprises peuvent être coûteux et longs. La médiation est une alternative amiable, rapide et confidentielle. Ludovic CASSIN intervient comme tiers neutre pour vous aider à renouer le dialogue avec vos partenaires et trouver une solution gagnant-gagnant.",
      benefits: ["Alternative aux tribunaux", "Rapidité et confidentialité", "Maintien des relations commerciales", "Accords sur-mesure"],
      problems: [
        "Conflit profond entre associés bloquant la gestion de l'entreprise.",
        "Gros litige commercial avec un fournisseur ou un client stratégique.",
        "Peur d'engager une procédure judiciaire longue (plusieurs années) et coûteuse.",
        "Volonté de régler un litige dans la plus stricte confidentialité."
      ],
      process: [
        { title: "Prise de contact", desc: "Entretien préalable avec l'initiateur de la demande pour comprendre la nature du conflit." },
        { title: "Entretiens individuels", desc: "Le médiateur rencontre chaque partie séparément pour entendre les griefs en toute confidentialité." },
        { title: "Réunion plénière", desc: "Mise en place d'un espace de dialogue sécurisé pour purger le conflit et chercher des solutions." },
        { title: "Protocole d'accord", desc: "Rédaction de l'accord final, qui peut être homologué par un juge pour obtenir force exécutoire." }
      ],
      faqs: [
        { question: "La médiation a-t-elle une valeur juridique ?", answer: "Oui. L'accord de médiation signé par les deux parties à l'issue du processus a une valeur contractuelle forte. Il peut même être homologué par un juge pour lui donner force exécutoire (comme un jugement)." },
        { question: "Qui paie les frais du médiateur ?", answer: "Sauf accord contraire, les frais de médiation sont généralement partagés à parts égales entre les parties en conflit. Cela garantit la neutralité du médiateur." },
        { question: "Que se passe-t-il si la médiation échoue ?", answer: "Si aucun accord n'est trouvé, la médiation prend fin. Tout ce qui a été dit ou échangé durant la médiation est strictement confidentiel et ne pourra pas être utilisé dans une éventuelle procédure judiciaire ultérieure. Vous restez libre de saisir la justice." },
        { question: "Quels types de conflits peuvent être résolus en médiation ?", answer: "La plupart des litiges commerciaux (impayés, inexécution de contrat, rupture brutale des relations commerciales) ou intra-entreprise (conflit entre associés) s'y prêtent, du moment que les parties acceptent d'en discuter librement." },
        { question: "Dois-je être assisté d'un avocat pendant la médiation ?", answer: "Ce n'est pas obligatoire, mais c'est tout à fait possible et même recommandé pour des enjeux importants. L'avocat joue alors un rôle de conseil juridique pour valider les solutions envisagées." }
      ]
    }
  };

  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <div className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '80px 0', textAlign: 'center' }}>
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
              <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>À propos de ce service</h2>
              <p>{service.content}</p>
              
              <h3 style={{ fontSize: '1.5rem', marginTop: '40px', marginBottom: '20px' }}>Nos points forts</h3>
              <ul style={{ listStyle: 'none' }}>
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'rgba(101, 151, 207, 0.2)', color: 'var(--color-secondary)', fontWeight: 'bold' }}>✓</span> {benefit}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass animate-fade-in" style={{ padding: '40px', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ marginBottom: '20px', color: 'var(--color-primary)' }}>Intéressé par ce service ?</h3>
              <p style={{ marginBottom: '30px', color: 'var(--color-text-light)' }}>Contactez-nous pour obtenir un devis personnalisé ou pour échanger sur vos besoins spécifiques avec Ludovic CASSIN.</p>
              <Link href="/contact" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Demander des informations</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="section" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Les problématiques que nous résolvons</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>Si vous vous reconnaissez dans ces situations, notre expertise est faite pour vous.</p>
          </div>
          <div className="grid grid-cols-2" style={{ gap: '20px' }}>
            {service.problems.map((problem, idx) => (
              <div key={idx} className="glass animate-fade-in" style={{ padding: '25px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
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
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Notre Processus d'Accompagnement</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>Une méthodologie claire et transparente, étape par étape.</p>
          </div>
          <div className="grid grid-cols-4" style={{ gap: '20px' }}>
            {service.process.map((step, idx) => (
              <div key={idx} className="animate-fade-in" style={{ position: 'relative', padding: '30px', backgroundColor: 'var(--color-white)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.05)', animationDelay: `${idx * 0.1}s` }}>
                <div style={{ position: 'absolute', top: '-20px', left: '30px', width: '40px', height: '40px', backgroundColor: 'var(--color-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 'bold', fontSize: '1.2rem' }}>
                  {idx + 1}
                </div>
                <h4 style={{ color: 'var(--color-primary)', marginTop: '10px', marginBottom: '10px' }}>{step.title}</h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)', margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FAQ title="Questions Fréquentes sur ce service" items={service.faqs} />
    </>
  );
}
