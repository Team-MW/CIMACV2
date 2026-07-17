import Link from 'next/link';
import FAQ from '../components/FAQ';
import Counter from '../components/Counter';
import { blogPosts } from './blog/data';

export default function Home() {
  const latestPosts = blogPosts.slice(0, 3);

  const services = [
    {
      id: 'creation',
      title: 'Création d\'entreprises',
      desc: 'Accompagnement complet pour la création de toutes formes juridiques (SAS, SARL, SCI, etc.).',
      icon: '🏢'
    },
    {
      id: 'dissolution',
      title: 'Dissolution d\'entreprises',
      desc: 'Prise en charge de la dissolution et liquidation de toutes formes juridiques en toute conformité.',
      icon: '📉'
    },
    {
      id: 'gestion',
      title: 'Gestion & Comptabilité',
      desc: 'Administration, gestion courante et comptabilité pour pérenniser votre activité.',
      icon: '📊'
    },
    {
      id: 'juridique',
      title: 'Services Juridiques',
      desc: 'Négociation avec les organismes et les services publics pour défendre vos intérêts.',
      icon: '⚖️'
    },
    {
      id: 'mediation',
      title: 'Médiation',
      desc: 'Médiation spécialisée et résolution de litiges entre entreprises.',
      icon: '🤝'
    }
  ];

  const homeFaqs = [
    {
      question: "Pourquoi faire appel à un cabinet spécialisé pour la création d'entreprise ?",
      answer: "Créer une entreprise implique des choix stratégiques (forme juridique, fiscalité, statut du dirigeant) qui auront un impact durable. Notre expertise vous garantit des statuts optimisés, conformes à la législation en vigueur, et adaptés à votre situation personnelle et professionnelle."
    },
    {
      question: "Quels sont vos tarifs pour une consultation ou un accompagnement ?",
      answer: "Nos honoraires sont transparents et s'adaptent à la complexité de votre dossier. Nous proposons des forfaits pour les missions classiques (création, dissolution) et une facturation au temps passé pour le conseil ou la médiation. Un devis gratuit et détaillé est systématiquement établi avant toute intervention."
    },
    {
      question: "La médiation est-elle obligatoire avant de saisir la justice ?",
      answer: "Dans certains litiges (notamment de faible montant ou impliquant des conflits de voisinage/commerciaux spécifiques), la tentative de médiation ou de conciliation préalable est effectivement obligatoire. Au-delà de l'obligation légale, c'est un moyen souvent plus rapide, moins coûteux et plus apaisé de résoudre un différend."
    },
    {
      question: "Comment se déroule le premier rendez-vous ?",
      answer: "Le premier rendez-vous (en physique, par téléphone ou en visioconférence) permet de faire un état des lieux de votre situation, de cerner vos besoins et de définir les premières pistes d'action. Il s'agit d'un échange confidentiel visant à établir une relation de confiance."
    },
    {
      question: "Puis-je vous confier la gestion de mon entreprise même si vous ne l'avez pas créée ?",
      answer: "Absolument. Nous pouvons reprendre la gestion de votre entreprise à tout moment de son développement. Nous réaliserons un audit initial pour nous assurer de la conformité de vos dossiers (statuts, déclarations, etc.) avant de prendre le relais administratif."
    },
    {
      question: "Quels sont vos délais d'intervention pour un dossier urgent ?",
      answer: "La réactivité est l'un de nos points forts. Pour une demande classique ou urgente (ex: réponse à une mise en demeure de l'URSSAF, immatriculation rapide), nous intervenons généralement sous 48h à 72h après réception de l'ensemble des pièces nécessaires."
    },
    {
      question: "Intervenez-vous dans toute la France ou seulement au niveau local ?",
      answer: "Grâce à la dématérialisation des démarches (via le guichet unique) et à l'utilisation d'outils de visioconférence, nous sommes tout à fait en mesure d'accompagner des entreprises situées sur l'ensemble du territoire national."
    }
  ];

  return (
    <>
      <section className="hero">
        <div className="container animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <img src="/logo-full.jpeg" alt="CIMAC Logo" style={{ height: '100px', width: 'auto', marginBottom: '30px', objectFit: 'contain', borderRadius: 'var(--radius-md)', padding: '10px', backgroundColor: 'rgba(255,255,255,0.9)' }} />
          <h1 className="hero-title">Votre Partenaire Stratégique</h1>
          <p className="hero-subtitle">
            CIMAC by Ludovic CASSIN vous accompagne dans toutes les étapes clés de la vie de votre entreprise : de la création à la gestion, en passant par la médiation et les services juridiques.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link href="/services/creation" className="btn btn-secondary">Découvrir nos services</Link>
            <Link href="/contact" className="btn" style={{ backgroundColor: 'transparent', border: '1px solid white', color: 'white' }}>Nous contacter</Link>
          </div>
        </div>
      </section>

      {/* Section Chiffres Clés */}
      <section className="section" style={{ padding: '40px 0', backgroundColor: 'var(--color-white)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container">
          <div className="grid grid-cols-3" style={{ textAlign: 'center', gap: '30px' }}>
            <div className="animate-fade-in">
              <div style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--color-secondary)', marginBottom: '10px' }}><Counter end={15} suffix="+" /></div>
              <p style={{ fontWeight: '600', color: 'var(--color-primary)', margin: 0 }}>Années d'expertise</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--color-secondary)', marginBottom: '10px' }}><Counter end={500} suffix="+" /></div>
              <p style={{ fontWeight: '600', color: 'var(--color-primary)', margin: 0 }}>Entreprises accompagnées</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--color-secondary)', marginBottom: '10px' }}><Counter end={98} suffix="%" /></div>
              <p style={{ fontWeight: '600', color: 'var(--color-primary)', margin: 0 }}>Clients satisfaits</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Nos Domaines d'Expertise</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>Des solutions sur-mesure pour répondre aux défis administratifs et juridiques de votre entreprise.</p>
          </div>

          <div className="grid grid-cols-3">
            {services.map(s => (
              <div key={s.id} className="glass animate-fade-in service-card" style={{ padding: '40px 30px', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '20px' }}>{s.icon}</div>
                <h3 style={{ marginBottom: '15px', color: 'var(--color-primary)' }}>{s.title}</h3>
                <p>{s.desc}</p>
                <Link href={`/services/${s.id}`} style={{ color: 'var(--color-secondary)', fontWeight: '600', marginTop: '20px', display: 'inline-block' }}>
                  En savoir plus &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ 
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url("/images/office-1.avif")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'var(--color-white)' 
      }}>
        <div className="container grid grid-cols-2" style={{ alignItems: 'center' }}>
          <div className="animate-fade-in">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Pourquoi choisir CIMAC ?</h2>
            <p>Fort d'une solide expérience, Ludovic CASSIN et son équipe s'engagent à fournir des conseils pragmatiques et une gestion rigoureuse de vos dossiers.</p>
            <ul style={{ listStyle: 'none', marginTop: '30px' }}>
              <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '15px', fontWeight: '500' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'rgba(101, 151, 207, 0.2)', color: 'var(--color-secondary)' }}>✓</span> 
                Expertise reconnue et pluridisciplinaire
              </li>
              <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '15px', fontWeight: '500' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'rgba(101, 151, 207, 0.2)', color: 'var(--color-secondary)' }}>✓</span> 
                Accompagnement sur-mesure et personnalisé
              </li>
              <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '15px', fontWeight: '500' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'rgba(101, 151, 207, 0.2)', color: 'var(--color-secondary)' }}>✓</span> 
                Confidentialité absolue et grande réactivité
              </li>
            </ul>
            <Link href="/contact" className="btn btn-primary" style={{ marginTop: '30px' }}>Prendre rendez-vous</Link>
          </div>
          <div className="glass animate-fade-in" style={{ padding: '50px 40px', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
            <h3 style={{ color: 'white', marginBottom: '20px', fontSize: '2rem' }}>Besoin d'un conseil urgent ?</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '30px', fontSize: '1.1rem' }}>Nos experts sont à votre écoute pour évaluer votre situation et vous proposer les meilleures solutions juridiques et administratives.</p>
            <Link href="/contact" className="btn btn-secondary" style={{ width: '100%' }}>Contactez-nous maintenant</Link>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="section" style={{ 
        backgroundImage: 'linear-gradient(rgba(244, 247, 250, 0.95), rgba(244, 247, 250, 0.95)), url("/images/office-2.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'var(--color-background)' 
      }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Ils nous font confiance</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>Découvrez les retours d'expérience des dirigeants qui ont choisi CIMAC.</p>
          </div>
          <div className="grid grid-cols-3">
            {[
              { text: "L'accompagnement de CIMAC a été décisif pour la structuration de notre groupe. Expertise et réactivité au rendez-vous.", author: "Julien M.", role: "CEO, TechInnov" },
              { text: "Nous avons externalisé notre gestion administrative. Le gain de temps est immense, nous pouvons enfin nous concentrer sur notre croissance.", author: "Sophie D.", role: "Fondatrice, EcoDesign" },
              { text: "Une procédure de médiation menée avec un grand professionnalisme qui nous a évité un procès long et coûteux. Merci !", author: "Marc A.", role: "Gérant, BâtiPro" }
            ].map((avis, i) => (
              <div key={i} className="glass animate-fade-in" style={{ padding: '30px', borderRadius: 'var(--radius-lg)', position: 'relative' }}>
                <div style={{ fontSize: '3rem', color: 'rgba(101, 151, 207, 0.2)', position: 'absolute', top: '10px', left: '20px', fontFamily: 'serif' }}>"</div>
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

      {/* Section Blog */}
      <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Nos Dernières Actualités</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>Conseils, analyses et décryptages juridiques par nos experts.</p>
          </div>
          <div className="grid grid-cols-3">
            {latestPosts.map(post => (
              <div key={post.slug} className="glass animate-fade-in" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '0.9rem', color: 'var(--color-secondary)', marginBottom: '10px', fontWeight: 'bold' }}>
                    {new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                  <h3 style={{ marginBottom: '15px', color: 'var(--color-primary)', fontSize: '1.4rem', lineHeight: '1.3' }}>{post.title}</h3>
                  <p style={{ marginBottom: '20px', flex: 1 }}>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} style={{ color: 'var(--color-secondary)', fontWeight: '600', textDecoration: 'none' }}>
                    Lire l'article &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link href="/blog" className="btn btn-secondary">Voir tout le blog</Link>
          </div>
        </div>
      </section>

      {/* Call To Action Final */}
      <section className="section" style={{ 
        backgroundImage: 'linear-gradient(rgba(26, 50, 88, 0.85), rgba(26, 50, 88, 0.9)), url("/images/cta-bg.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', 
        textAlign: 'center' 
      }}>
        <div className="container animate-fade-in" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'white' }}>Prêt à faire décoller votre entreprise ?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: 'rgba(255,255,255,0.8)' }}>Contactez-nous dès aujourd'hui pour un premier audit gratuit de votre situation.</p>
          <Link href="/contact" className="btn btn-secondary" style={{ fontSize: '1.2rem', padding: '15px 30px' }}>Planifier un rendez-vous</Link>
        </div>
      </section>

      <FAQ title="Questions Fréquentes" items={homeFaqs} />
    </>
  );
}
