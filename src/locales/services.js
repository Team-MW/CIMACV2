export const servicesTranslations = {
  fr: {
    creation: {
      title: "Création d'entreprise",
      subtitle: "De l'idée à l'immatriculation",
      icon: '🚀',
      bgImage: 'office-1.avif',
      content: "La création d'une entreprise est une étape cruciale. Chez CIMAC, nous vous accompagnons dans le choix de la forme juridique la plus adaptée à votre projet (SAS, SARL, SCI, auto-entreprise, etc.) et prenons en charge l'ensemble des formalités administratives et légales. Concentrez-vous sur votre cœur de métier, nous nous occupons du reste.",
      benefits: ["Conseil sur le statut juridique", "Rédaction des statuts sur-mesure", "Immatriculation au RCS", "Obtention du Kbis"],
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
      title: 'Dissolution',
      subtitle: "Fermeture d'entreprise simplifiée",
      icon: '🔒',
      bgImage: 'office-2.jpeg',
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
      title: 'Gestion & Administration',
      subtitle: 'Externalisation et pilotage',
      icon: '📊',
      bgImage: 'cta-bg.webp',
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
      bgImage: 'office-1.avif',
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
      bgImage: 'hero-bg.avif',
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
  },
  en: {
    creation: {
      title: 'Company Formation in France',
      subtitle: 'From Initial Concept to Official Registration',
      icon: '🚀',
      bgImage: 'office-1.avif',
      content: "Starting a company in France is a decisive milestone. At CIMAC, we advise and assist you in selecting the ideal legal structure for your business (SAS, SASU, SARL, EURL, SCI, holding, branch) and handle the entirety of administrative and legal filings. Focus on growing your business while we handle the regulatory framework.",
      benefits: ["Strategic legal structure advisory", "Bespoke Articles of Association", "Trade Register (RCS) filing", "Expedited Kbis extraction"],
      problems: [
        "Uncertainty regarding French tax regimes and social contribution schemes for directors.",
        "Apprehension about costly mistakes in customized bylaws or founder clauses.",
        "Time constraints and administrative bottlenecks with the commercial registry.",
        "Need to structure partnerships securely through comprehensive shareholders' agreements."
      ],
      process: [
        { title: "Initial Strategic Consultation", desc: "In-depth review of your business plan, funding needs, and personal asset protection." },
        { title: "Structuring & Drafting", desc: "Selection of legal form (SAS, SARL...), tax elections, and tailored drafting of corporate bylaws." },
        { title: "Official Formalities", desc: "Capital deposit escrow, legal gazette publication, and dossier lodging via the French Guichet Unique." },
        { title: "Launch & Operational Readiness", desc: "Delivery of your official Kbis certificate and tax activation. You are fully ready to invoice!" }
      ],
      faqs: [
        { question: "Which French legal structure should I choose for my company?", answer: "The right structure depends on several factors: number of shareholders, share capital, preferred director social scheme (general employee or self-employed TNS), and projected dividend distribution. We evaluate your goals to pinpoint the most tax-efficient structure (SAS, SARL, Micro-enterprise, etc.)." },
        { question: "How long does it take to register a company in France?", answer: "Once the application file is complete (executed bylaws, capital deposit certificate, founder ID files), registration with the Trade & Companies Register (RCS) typically takes 48 to 72 business hours." },
        { question: "Can a foreign national or non-resident start a French company?", answer: "Yes. Foreign citizens can incorporate a company in France without prior residency, subject to standard identity and clean-record verifications. Non-EU residents managing the company locally may require specific consular authorizations." },
        { question: "Is there a minimum share capital required?", answer: "For most prevalent French corporate forms such as SAS or SARL, the statutory minimum capital is just €1. However, setting a credible starting capital is strongly recommended to build confidence with French commercial banks." },
        { question: "Do you draft tailored Shareholders' Agreements (Pacte d'Associés)?", answer: "Yes. When multiple partners co-found a company, the shareholders' agreement is a vital confidential contract governing key matters (exit clauses, tag/drag-along rights, share valuation, veto rules). We draft comprehensive, enforceable agreements customized to your venture." }
      ]
    },
    dissolution: {
      title: 'Company Dissolution & Liquidation',
      subtitle: 'Streamlined Corporate Winding-Up in France',
      icon: '🔒',
      bgImage: 'office-2.jpeg',
      content: "Closing a company in France requires rigorous adherence to statutory procedures. We oversee the amicable dissolution and liquidation of all business structures, ensuring total compliance with commercial courts and tax authorities. We prepare shareholder resolutions, publish legal notices, and secure deregistration.",
      benefits: ["Final liquidation balance sheet", "Statutory legal notice publications", "Registry deregistration certificate", "Tax clearance filings"],
      problems: [
        "Confusion around the mandatory legal phases required to properly close a French entity.",
        "Risk of tax or social audits if formal closing procedures are neglected.",
        "Difficulty in drafting formal Extraordinary and Ordinary General Meeting minutes.",
        "Urgent need to deregister a dormant entity to stop recurring corporate fees and taxes."
      ],
      process: [
        { title: "Situation Audit", desc: "Financial and balance-sheet audit to confirm solvent status (amicable dissolution is only viable without cessation of payments)." },
        { title: "Dissolution", desc: "Drafting of Extraordinary General Meeting minutes, liquidator appointment, and first legal publication." },
        { title: "Liquidation", desc: "Asset realization, creditor settlement, and preparation of final liquidation closing accounts." },
        { title: "Deregistration", desc: "Filing the final dossier with the Commercial Court registry and issuance of the radiation Kbis." }
      ],
      faqs: [
        { question: "What is the difference between dissolution and liquidation in France?", answer: "Dissolution is the formal legal decision to terminate operations (voted by shareholders). Liquidation is the operational phase that follows: assets are sold and liabilities settled before final deregistration from the corporate registry." },
        { question: "Can I close a company if outstanding debts remain?", answer: "An amicable dissolution is only permissible if the company is capable of satisfying all liabilities. If debts exceed assets and the company cannot pay, insolvency proceedings (judicial liquidation) must be initiated through the Commercial Court." },
        { question: "How long does a French dissolution and liquidation procedure take?", answer: "A straightforward amicable closing generally spans 1 to 2 months if the entity has clear books. French company law allows a maximum statutory period of 3 years to conclude the liquidation." },
        { question: "Can the company director act as the liquidator?", answer: "Yes. For small and medium-sized enterprises, the managing director or president is typically appointed as the amicable liquidator by the shareholders." },
        { question: "What are the costs involved in company closure?", answer: "Mandatory third-party costs include two legal announcements (dissolution and liquidation) and commercial registry filing fees. Our professional advisory fees are quoted upfront and encompass full procedural management." }
      ]
    },
    gestion: {
      title: 'Management & Administration',
      subtitle: 'Operational Outsourcing and Financial Steering',
      icon: '📊',
      bgImage: 'cta-bg.webp',
      content: "Sound administrative and bookkeeping management is the foundation of a resilient enterprise. We provide outsourced back-office services for day-to-day administration, cash-flow monitoring, document preparation for your certified accountant, and rigorous compliance with French filing deadlines.",
      benefits: ["Bookkeeping data preparation", "Cash flow & treasury tracking", "Administrative back-office", "Executive financial dashboards"],
      problems: [
        "Precious executive hours wasted on evenings and weekends sorting receipts and paperwork.",
        "Delayed cash collections due to inconsistent client billing and reminder workflows.",
        "URSSAF or VAT fines triggered by missed French statutory declaration deadlines.",
        "Lack of clean financial visibility into true project and company profitability."
      ],
      process: [
        { title: "Operational Audit", desc: "Comprehensive evaluation of your current workflows and back-office organization." },
        { title: "System Setup", desc: "Deployment of intuitive digital invoicing, cash-flow monitoring, and document repositories." },
        { title: "Daily Outsourcing", desc: "We manage receipt intake, statutory declarations, billing, and debtor collection follow-ups." },
        { title: "Executive Reporting", desc: "Monthly management dashboard providing real-time oversight of financial health." }
      ],
      faqs: [
        { question: "Do you offer recurring monthly retainers?", answer: "Yes, we provide flexible monthly and quarterly outsourcing retainers tailored to your operational volume, including preparation of pre-accounting packages for your certified accountant." },
        { question: "What documents are required to begin onboarding?", answer: "Upon engagement, we will request read access to bank feeds, company articles of association, a recent Kbis certificate, and recent tax returns if the company has prior trading history." }
      ]
    },
    juridique: {
      title: 'Legal & Agency Negotiations',
      subtitle: 'Defense & Settlement with French Public Bodies',
      icon: '⚖️',
      bgImage: 'office-1.avif',
      content: "Navigating French administrative enforcement requires seasoned representation. We step in to negotiate with social security agencies (URSSAF) and tax offices (DGFiP). Our tactical expertise enables us to negotiate payment schedules, waive penalty surcharges, and resolve high-stakes administrative stalemates.",
      benefits: ["URSSAF dispute negotiation", "Debt installment plans", "Tax office representation", "Audit assistance"],
      problems: [
        "Receipt of a formal demand (mise en demeure) from URSSAF or tax authorities with punitive penalties.",
        "Inability to immediately pay unexpected tax liabilities or payroll contribution reassessments.",
        "High stress and legal uncertainty triggered by a tax or social security audit notice.",
        "Complex bureaucratic disputes requiring formal administrative appeals."
      ],
      process: [
        { title: "Crisis Diagnosis", desc: "Detailed review of official correspondence received and assessment of financial and legal exposure." },
        { title: "Enforcement Freeze", desc: "Prompt communication with enforcement officers to halt aggressive collection actions (seizures)." },
        { title: "Negotiation & Appeals", desc: "Formulation of formal requests for penalty remissions and structured repayment terms." },
        { title: "Formal Agreement", desc: "Execution of binding settlement protocols with public authorities to secure your enterprise." }
      ],
      faqs: [
        { question: "What should I do upon receiving a formal notice (mise en demeure) from URSSAF?", answer: "Immediate action is crucial to prevent frozen bank accounts (ATD) and escalated fines. We review the legitimacy of the claimed amounts, identify potential administrative errors, and open direct dialogue with URSSAF to request deferrals or file formal challenges." },
        { question: "Can you assist our company during a French tax inspection?", answer: "Yes. Our team assists you in assembling all required evidentiary records, communicating with the tax auditor, and vigorously defending your statutory rights throughout the contradictory phase." }
      ]
    },
    mediation: {
      title: 'Commercial Mediation',
      subtitle: 'Swift, Confidential B2B Dispute Resolution',
      icon: '🤝',
      bgImage: 'hero-bg.avif',
      content: "Corporate disputes can severely drain cash and damage business momentum. Mediation represents a confidential, amicable, and cost-effective alternative to multi-year courtroom battles. Ludovic CASSIN acts as an accredited neutral third party to restore productive communication and craft mutually advantageous win-win outcomes.",
      benefits: ["Amicable alternative to courts", "Speed and strict confidentiality", "Preservation of business relationships", "Legally binding custom agreements"],
      problems: [
        "Bitter disagreements between shareholders paralyzing executive decision-making.",
        "Major commercial deadlock with a critical supplier or strategic corporate client.",
        "Dread of prolonged court proceedings lasting multiple years with escalating legal bills.",
        "Need to settle sensitive disputes under ironclad confidentiality away from the public eye."
      ],
      process: [
        { title: "Intake Consultation", desc: "Confidential briefing with the initiating party to assess the root causes of the commercial dispute." },
        { title: "Individual Sessions", desc: "The mediator convenes each party separately to explore concerns, claims, and underlying interests." },
        { title: "Plenary Negotiation", desc: "Facilitated joint sessions designed to unpack tension and brainstorm collaborative solutions." },
        { title: "Settlement Agreement", desc: "Drafting of the formal agreement, which can be judicially homologated to carry the force of a judgment." }
      ],
      faqs: [
        { question: "Does a mediation agreement carry legal force?", answer: "Yes. The settlement protocol signed by both parties possesses binding contractual validity. Moreover, it can be homologated by a French judge to endow it with direct executive enforceability, equivalent to a court verdict." },
        { question: "Who bears the mediator's fees?", answer: "Unless otherwise agreed, mediation fees are customarily shared equally between the contending parties, ensuring complete independence and neutrality of the mediator." },
        { question: "What occurs if mediation does not reach an accord?", answer: "If no agreement is reached, mediation concludes. Everything disclosed during the proceedings remains strictly confidential and cannot be introduced in any subsequent judicial trial. The parties remain fully entitled to seek court adjudication." },
        { question: "Can our company attorney participate in the mediation?", answer: "Yes. Legal counsel is welcome and recommended in high-stakes commercial disputes. Attorneys assist as advisors to review the legal soundness of prospective settlement terms." }
      ]
    }
  },
  ru: {
    creation: {
      title: 'Регистрация компании во Франции',
      subtitle: 'От бизнес-идеи до официальной выписки Kbis',
      icon: '🚀',
      bgImage: 'office-1.avif',
      content: "Открытие компании во Франции — ответственный шаг, требующий точного соблюдения юридических норм. В CIMAC мы помогаем выбрать оптимальную организационно-правовую форму (SAS, SASU, SARL, EURL, SCI, филиалы, холдинги) и берем на себя все бюрократические и регистрационные формальности. Сосредоточьтесь на бизнесе — правовую сторону мы берем на себя.",
      benefits: ["Подбор организационно-правовой формы", "Индивидуальный устав под ключ", "Регистрация в торговом реестре (RCS)", "Быстрое получение выписки Kbis"],
      problems: [
        "Сложность в выборе между SAS и SARL с точки зрения налогов и социальных взносов.",
        "Опасение допустить ошибки в уставе, ведущие к блокировке счетов или отказу регистратора.",
        "Нехватка времени и языковой барьер при взаимодействии с государственными органами Франции.",
        "Необходимость юридически зафиксировать договоренности между соучредителями."
      ],
      process: [
        { title: "Первичная консультация", desc: "Детальный анализ вашего проекта, финансовых целей, налогового статуса и вопросов защиты личных активов." },
        { title: "Выбор структуры и устав", desc: "Определение формы (SAS, SARL...), налогового режима и составление индивидуального устава." },
        { title: "Регистрационные формальности", desc: "Внесение уставного капитала, публикация в официальном вестнике и подача через портал Guichet Unique." },
        { title: "Старт деятельности", desc: "Получение официальной выписки Kbis и налоговых номеров (SIREN/SIRET, TVA). Вы готовы к выставлению счетов!" }
      ],
      faqs: [
        { question: "Какую правовую форму компании лучше выбрать во Франции?", answer: "Выбор зависит от состава учредителей, планируемого капитала, системы налогообложения и желаемого социального статуса директора (assimilé salarié или TNS). Мы проводим детальный сравнительный расчет, чтобы подобрать наилучший вариант (SAS, SARL, ИП и др.)." },
        { question: "Сколько времени занимает открытие компании во Франции?", answer: "После сбора полного комплекта документов (подписанный устав, справка о внесении уставного капитала, удостоверения личности) регистрация в Торговом реестре (RCS) обычно занимает от 48 до 72 рабочих часов." },
        { question: "Может ли иностранец без французского ВНЖ зарегистрировать компанию?", answer: "Да, иностранные граждане вправе создавать компании и владеть долями во Франции. Если генеральный директор является резидентом третьих стран и планирует руководить из Франции, может потребоваться соответствующая виза или вид на жительство." },
        { question: "Каков минимальный размер уставного капитала?", answer: "Для популярных форм (SAS, SARL) закон разрешает минимальный капитал от 1 евро. Однако на практике рекомендуется вносить сумму, адекватную начальным расходам, чтобы вызвать доверие у французских банков при открытии расчетного счета." },
        { question: "Составляете ли вы корпоративные договоры (Pacte d'Associés)?", answer: "Да. При наличии нескольких партнеров корпоративный договор является важнейшим конфиденциальным документом, регулирующим порядок выхода из бизнеса, преимущественное право выкупа долей и голосование. Мы составляем его индивидуально." }
      ]
    },
    dissolution: {
      title: 'Ликвидация и закрытие компаний во Франции',
      subtitle: 'Официальное прекращение деятельности без рисков',
      icon: '🔒',
      bgImage: 'office-2.jpeg',
      content: "Закрытие юридического лица во Франции требует строгого соблюдения законодательной процедуры. Мы проводим добровольную ликвидацию любых коммерческих организаций, обеспечивая полную юридическую и налоговую чистоту: от протоколов общих собраний и публикации извещений до исключения из торгового реестра.",
      benefits: ["Ликвидационный баланс", "Публикации в официальной прессе", "Исключение из торгового реестра RCS", "Налоговая очистка и закрытие счетов"],
      problems: [
        "Непонимание юридических этапов и сроков добровольной ликвидации компании во Франции.",
        "Риск налоговых доначислений и штрафов при некорректном закрытии отчетности.",
        "Сложности с составлением протоколов внеочередных и очередных собраний участников.",
        "Необходимость быстро ликвидировать неактивную компанию для прекращения начисления фиксированных сборов."
      ],
      process: [
        { title: "Аудит состояния компании", desc: "Проверка отсутствия задолженностей (добровольная ликвидация возможна только при платежеспособности компании)." },
        { title: "Принятие решения о роспуске", desc: "Протокол внеочередного собрания, назначение ликвидатора и первая публикация в официальном вестнике." },
        { title: "Ликвидационные процедуры", desc: "Реализация активов компании, расчеты с кредиторами и составление итогового ликвидационного баланса." },
        { title: "Исключение из реестра", desc: "Подача итогового пакета в Торговый суд и получение свидетельства о ликвидации (Kbis de radiation)." }
      ],
      faqs: [
        { question: "В чем разница между роспуском (dissolution) и ликвидацией (liquidation)?", answer: "Роспуск (dissolution) — это официальное юридическое решение учредителей прекратить деятельность компании. Ликвидация (liquidation) — последующий процесс: реализация оставшегося имущества, выплата долгов и окончательное закрытие счетов." },
        { question: "Можно ли ликвидировать компанию добровольно при наличии долгов?", answer: "Добровольная ликвидация (amiable) возможна исключительно в случае, если активов предприятия достаточно для покрытия всех обязательств перед кредиторами. При неплатежеспособности инициируется судебное банкротство." },
        { question: "Сколько времени длится процедура ликвидации?", answer: "В стандартных случаях при отсутствии задолженностей процедура занимает от 1 до 2 месяцев. Французское законодательство ограничивает максимальный срок ликвидации 3 годами." },
        { question: "Может ли руководитель компании быть назначен ликвидатором?", answer: "Да, в подавляющем большинстве случаев для компаний малого и среднего бизнеса учредители назначают действующего директора ликвидатором." },
        { question: "Каковы государственные расходы на закрытие бизнеса?", answer: "К обязательным государственным пошлинам относятся две официальные публикации в юридической прессе и пошлина судебного секретариата (greffe). Наши услуги рассчитываются по фиксированной смете." }
      ]
    },
    gestion: {
      title: 'Административное управление и бухгалтерия',
      subtitle: 'Аутсорсинг бизнес-процессов и контроль финансов',
      icon: '📊',
      bgImage: 'cta-bg.webp',
      content: "Грамотное администрирование — фундамент стабильности французского предприятия. Мы предлагаем комплексный аутсорсинг повседневных административных задач: контроль кассовых разрывов и движения денежных средств, сбор и классификацию первичных документов для главного бухгалтера (Expert-comptable), а также своевременное соблюдение всех регуляторных сроков.",
      benefits: ["Обработка первичной бухгалтерии", "Управление денежными потоками", "Административный аутсорсинг", "Ежемесячные управленческие отчеты"],
      problems: [
        "Потеря времени руководителя на рутинную бумажную волокиту и французские формуляры.",
        "Кассовые разрывы из-за задержек оплат клиентами и отсутствия системных напоминаний.",
        "Штрафы от URSSAF и налоговой службы из-за просроченных деклараций.",
        "Отсутствие наглядной картины реальной доходности предприятия."
      ],
      process: [
        { title: "Первичный аудит", desc: "Анализ текущих административных процессов и систематизация документооборота." },
        { title: "Внедрение инструментов", desc: "Настройка удобных систем выставления счетов, реестра оплат и защищенного файлообмена." },
        { title: "Ежедневное сопровождение", desc: "Прием и обработка счетов, контроль сроков оплаты, взаимодействие с контрагентами." },
        { title: "Управленческий контроль", desc: "Предоставление ежемесячного отчета о ключевых финансовых показателях для руководства." }
      ],
      faqs: [
        { question: "Предоставляете ли вы абонентское ежемесячное обслуживание?", answer: "Да, мы работаем на основе гибких ежемесячных и квартальных контрактов, адаптированных под объем документооборота вашей компании, включая полную подготовку данных для французского эксперт-бухгалтера." },
        { question: "Какие документы требуются для начала работы?", answer: "Для старта нам потребуется доступ к банковским выпискам, устав компании, свежая выписка Kbis и налоговые декларации за предыдущие периоды (при наличии)." }
      ]
    },
    juridique: {
      title: 'Юридические споры и защита интересов',
      subtitle: 'Урегулирование претензий с URSSAF и налоговой инспекцией',
      icon: '⚖️',
      bgImage: 'office-1.avif',
      content: "Французское налоговое и социальное администрирование отличается высокой сложностью. Мы выступаем на вашей стороне в переговорах с государственными структурами (URSSAF, налоговая инспекция). Наш опыт позволяет снижать штрафы, добиваться отсрочек и рассрочек задолженностей, а также успешно защищать права бизнеса.",
      benefits: ["Переговоры с URSSAF", "Рассрочка налоговой задолженности", "Защита при проверках", "Досудебные апелляции"],
      problems: [
        "Получение досудебного требования (mise en demeure) от URSSAF или налоговой с пенями.",
        "Временная невозможность единовременно выплатить крупные налоговые начисления.",
        "Стресс и риски при получении уведомления о выездной или камеральной проверке.",
        "Сложные разногласия с французской администрацией, требующие официальной правовой жалобы."
      ],
      process: [
        { title: "Анализ претензии", desc: "Тщательное изучение официальных писем, расчет рисков и проверка правомерности начислений." },
        { title: "Приостановка взыскания", desc: "Срочный контакт с ведомством для предотвращения списания средств со счетов компании (ATD)." },
        { title: "Переговоры и ходатайства", desc: "Подготовка мотивированных заявлений на отмену штрафов и графика реструктуризации долга." },
        { title: "Юридическая фиксация", desc: "Подписание официального соглашения с госорганом и защита стабильности вашей компании." }
      ],
      faqs: [
        { question: "Что делать при получении претензии (mise en demeure) от URSSAF?", answer: "Главное — оперативно отреагировать в установленный законом срок, чтобы избежать блокировки банковских счетов. Мы анализируем обоснованность расчета, выявляем системные ошибки ведомства и запрашиваем рассрочку или пересмотр суммы." },
        { question: "Сопровождаете ли вы налоговые проверки во Франции?", answer: "Да. Наша команда помогает грамотно подготовить запрашиваемые инспекцией регистры и первичные документы, формулирует ответы на запросы проверяющих и защищает ваши интересы на всех стадиях." }
      ]
    },
    mediation: {
      title: 'Коммерческая медиация',
      subtitle: 'Досудебное и конфиденциальное разрешение споров',
      icon: '🤝',
      bgImage: 'hero-bg.avif',
      content: "Судебные тяжбы во Франции могут длиться годами и обходиться в десятки тысяч евро. Коммерческая медиация — это быстрая, конфиденциальная и эффективная альтернатива судам. Людовик КАССЕН выступает в качестве аккредитованного независимого медиатора, помогая восстановить конструктивный диалог и выработать взаимовыгодное решение.",
      benefits: ["Альтернатива французским судам", "Скорость и строгая конфиденциальность", "Сохранение деловых отношений", "Юридическая сила соглашения"],
      problems: [
        "Затяжной конфликт между соучредителями, блокирующий операционную деятельность.",
        "Крупный коммерческий спор с поставщиком или ключевым корпоративным клиентом.",
        "Опасение потерять годы и бюджет в судебных инстанциях Франции.",
        "Необходимость урегулировать спор без огласки в прессе и публичных реестрах."
      ],
      process: [
        { title: "Первичный контакт", desc: "Предварительная беседа с инициатором процедуры для оценки характера спора и позиций сторон." },
        { title: "Индивидуальные сессии", desc: "Медиатор встречается с каждой стороной отдельно для доверительного анализа претензий и истинных интересов." },
        { title: "Совместные переговоры", desc: "Организация конструктивного диалога для поиска взаимоприемлемых компромиссов." },
        { title: "Мировое соглашение", desc: "Составление итогового юридического протокола, который может быть утвержден судом (homologation)." }
      ],
      faqs: [
        { question: "Имеет ли соглашение о медиации юридическую силу?", answer: "Да. Подписанное сторонами мировое соглашение является полноценным юридическим контрактом. По ходатайству сторон оно может быть утверждено французским судьей, приобретая силу судебного решения." },
        { question: "Кто оплачивает услуги медиатора?", answer: "По общему правилу расходы на процедуру медиации делятся поровну между участниками спора, что подчеркивает абсолютную нейтральность и беспристрастность медиатора." },
        { question: "Что произойдет, если стороны не придут к согласию?", answer: "Если договоренность не достигнута, медиация прекращается. При этом вся информация и документы, озвученные в процессе, остаются строго конфиденциальными и не могут использоваться в суде. Вы сохраняете право подать иск в суд." },
        { question: "Может ли адвокат присутствовать при процедуре медиации?", answer: "Да, участие корпоративных юристов и адвокатов допускается и приветствуется при крупных суммах спора для юридической верификации вырабатываемых решений." }
      ]
    }
  }
};
