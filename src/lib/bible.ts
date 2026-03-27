/**
 * Bible du Bullshit LinkedIn
 * Donnees de reference pour le traducteur LinkedIn Bullshit.
 * Toutes les chaines sont en francais sans accents (le LLM gere les accents en sortie).
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Substitution {
  readonly normal: string;
  readonly linkedin: string;
}

export interface BuzzwordEntry {
  readonly term: string;
  readonly definition: string;
}

// ---------------------------------------------------------------------------
// Section 1.1 — Substitutions de verbes
// ---------------------------------------------------------------------------

export const VERB_SUBSTITUTIONS: readonly Substitution[] = [
  { normal: "faire", linkedin: "delivrer de la valeur" },
  { normal: "travailler", linkedin: "hustle / grind / executer" },
  { normal: "commencer", linkedin: "se lancer dans l'aventure entrepreneuriale" },
  { normal: "apprendre", linkedin: "monter en competences" },
  { normal: "echouer", linkedin: "pivoter / iterer / apprendre par l'echec" },
  { normal: "changer d'avis", linkedin: "faire evoluer sa vision" },
  { normal: "vendre", linkedin: "apporter des solutions" },
  { normal: "licencier", linkedin: "restructurer les equipes / realigner les talents" },
  { normal: "demissionner", linkedin: "prendre un nouveau virage / oser le leap of faith" },
  { normal: "copier", linkedin: "s'inspirer des best practices" },
  { normal: "dire non", linkedin: "poser ses limites / proteger son energie" },
  { normal: "demander une augmentation", linkedin: "valoriser son impact" },
  { normal: "envoyer des mails", linkedin: "nurture sa communaute" },
  { normal: "recruter", linkedin: "chasser les talents / onboarder des A-players" },
  { normal: "galerer", linkedin: "traverser une phase de croissance intense" },
  { normal: "ne rien faire", linkedin: "prendre du recul strategique" },
  { normal: "lire un livre", linkedin: "investir dans son developpement personnel" },
  { normal: "boire un cafe", linkedin: "networker autour d'un cafe inspirant" },
  { normal: "poster sur LinkedIn", linkedin: "creer du contenu a forte valeur ajoutee" },
  { normal: "se faire refuser", linkedin: "recevoir un feedback du marche" },
  { normal: "sous-traiter", linkedin: "scaler grace a l'externalisation" },
  { normal: "procrastiner", linkedin: "laisser maturer ses idees" },
  { normal: "corriger un bug", linkedin: "optimiser l'experience utilisateur" },
  { normal: "etre fatigue", linkedin: "froler le burnout (et en tirer une lecon)" },
  { normal: "dormir peu", linkedin: "sacrifier son confort pour sa vision" },
  { normal: "manager", linkedin: "lead / driver / piloter / orchestrer" },
  { normal: "reflechir", linkedin: "brainstormer / ideater" },
  { normal: "discuter", linkedin: "avoir une conversation a impact" },
  { normal: "partager", linkedin: "donner en retour / give back" },
  { normal: "comprendre", linkedin: "avoir le declic / le mindset shift" },
  { normal: "organiser une reunion", linkedin: "aligner les parties prenantes" },
  { normal: "annuler une reunion", linkedin: "optimiser son agenda" },
] as const;

// ---------------------------------------------------------------------------
// Section 1.2 — Substitutions de noms
// ---------------------------------------------------------------------------

export const NOUN_SUBSTITUTIONS: readonly Substitution[] = [
  { normal: "travail", linkedin: "mission / purpose / aventure" },
  { normal: "bureau", linkedin: "ecosysteme de travail / workspace" },
  { normal: "collegue", linkedin: "talent / collaborateur engage" },
  { normal: "patron", linkedin: "leader inspirant / mentor" },
  { normal: "client", linkedin: "partenaire de confiance" },
  { normal: "probleme", linkedin: "defi / challenge / pain point" },
  { normal: "solution", linkedin: "proposition de valeur" },
  { normal: "idee", linkedin: "vision / insight / game-changer" },
  { normal: "reunion", linkedin: "sync / workshop / session d'alignement" },
  { normal: "erreur", linkedin: "apprentissage / learning" },
  { normal: "resultat", linkedin: "impact / outcome / deliverable" },
  { normal: "argent", linkedin: "valeur creee / ROI" },
  { normal: "salaire", linkedin: "package de remuneration" },
  { normal: "entreprise", linkedin: "aventure humaine / projet de vie" },
  { normal: "stagiaire", linkedin: "talent en devenir / futur leader" },
  { normal: "licenciement", linkedin: "transition professionnelle" },
  { normal: "chomage", linkedin: "phase de rebond / periode de transition" },
  { normal: "CV", linkedin: "personal branding deck" },
  { normal: "entretien d'embauche", linkedin: "conversation de fit" },
  { normal: "promotion", linkedin: "next step dans son parcours" },
  { normal: "concurrence", linkedin: "ecosysteme / marche" },
  { normal: "produit", linkedin: "solution / offre / enabler" },
  { normal: "prix", linkedin: "investissement" },
  { normal: "PowerPoint", linkedin: "deck / pitch deck" },
  { normal: "Excel", linkedin: "data-driven insights" },
  { normal: "to-do list", linkedin: "roadmap / backlog priorise" },
  { normal: "pause dejeuner", linkedin: "lunch & learn" },
  { normal: "afterwork", linkedin: "moment de cohesion d'equipe" },
  { normal: "formation", linkedin: "upskilling / reskilling / capacity building" },
  { normal: "competence", linkedin: "skill / hard skill / soft skill / mad skill" },
  { normal: "experience", linkedin: "track record / parcours" },
  { normal: "echec", linkedin: "pivot / iteration / moment fondateur" },
  { normal: "succes", linkedin: "milestone / achievement unlocked" },
  { normal: "strategie", linkedin: "playbook / framework / north star" },
  { normal: "avis", linkedin: "feedback a 360°" },
  { normal: "reseau", linkedin: "communaute / tribu / cercle d'influence" },
  { normal: "site web", linkedin: "vitrine digitale / asset digital" },
  { normal: "newsletter", linkedin: "contenu premium / media proprietaire" },
  { normal: "podcast", linkedin: "format long / conversation inspirante" },
  { normal: "freelance", linkedin: "solopreneur / independant augmente" },
  { normal: "consultant", linkedin: "expert sectoriel / advisor" },
  { normal: "IA", linkedin: "l'IA (toujours mentionnee, meme sans rapport)" },
] as const;

// ---------------------------------------------------------------------------
// Section 1.3 — Substitutions d'adjectifs
// ---------------------------------------------------------------------------

export const ADJECTIVE_SUBSTITUTIONS: readonly Substitution[] = [
  { normal: "bien", linkedin: "disruptif / game-changing / next level" },
  { normal: "important", linkedin: "strategique / cle / critique / structurant" },
  { normal: "difficile", linkedin: "challenging / exigeant / transformant" },
  { normal: "interessant", linkedin: "inspirant / eye-opening / thought-provoking" },
  { normal: "nouveau", linkedin: "innovant / cutting-edge / state-of-the-art" },
  { normal: "simple", linkedin: "lean / agile / frugal" },
  { normal: "complique", linkedin: "complexe / multidimensionnel" },
  { normal: "rapide", linkedin: "fast-track / accelere / en mode sprint" },
  { normal: "lent", linkedin: "iteratif / en mode marathon" },
  { normal: "petit", linkedin: "early-stage / en amorcage" },
  { normal: "grand", linkedin: "scalable / a fort potentiel" },
  { normal: "content", linkedin: "reconnaissant / grateful / blessed" },
  { normal: "triste", linkedin: "en phase d'introspection" },
  { normal: "pas cher", linkedin: "accessible / democratise" },
  { normal: "cher", linkedin: "premium / haut de gamme / exclusive" },
  { normal: "normal", linkedin: "authentique / sans filtre" },
  { normal: "banal", linkedin: "sous-estime / underrated" },
  { normal: "gratuit", linkedin: "en open source / en freemium" },
  { normal: "inutile", linkedin: "a challenger" },
] as const;

// ---------------------------------------------------------------------------
// Section 1.4 — Substitutions d'expressions
// ---------------------------------------------------------------------------

export const EXPRESSION_SUBSTITUTIONS: readonly Substitution[] = [
  { normal: "je suis d'accord", linkedin: "+1 / tellement ceci / THIS" },
  { normal: "je ne sais pas", linkedin: "je suis en phase d'exploration sur ce sujet" },
  { normal: "ca depend", linkedin: "il n'y a pas de one-size-fits-all" },
  { normal: "c'est evident", linkedin: "rappel : [chose evidente]" },
  { normal: "j'ai de la chance", linkedin: "je suis reconnaissant(e) pour ce que l'univers m'envoie" },
  { normal: "j'ai travaille dur", linkedin: "j'ai grinde sans relache" },
  { normal: "ca ne marche pas", linkedin: "le product-market fit n'est pas encore la" },
  { normal: "c'est nul", linkedin: "ca ne cree pas assez de valeur" },
  { normal: "je m'en fiche", linkedin: "ce n'est pas aligne avec ma mission" },
  { normal: "j'ai ete vire", linkedin: "on m'a libere pour ma prochaine aventure" },
  { normal: "je cherche du travail", linkedin: "je suis open to work et ouvert aux opportunites" },
  { normal: "c'etait prevu", linkedin: "c'est le fruit d'une vision long terme" },
  { normal: "on verra", linkedin: "on reste agile sur le sujet" },
  { normal: "personne n'a lu mon post", linkedin: "l'algorithme ne m'a pas pousse cette fois" },
  { normal: "j'ai copie l'idee", linkedin: "je me suis inspire d'un framework existant" },
  { normal: "je suis stresse", linkedin: "je gere une charge mentale intense" },
  { normal: "il faut qu'on parle", linkedin: "il faut qu'on ait une vraie conversation" },
  { normal: "pas maintenant", linkedin: "ce n'est pas ma priorite du trimestre" },
  { normal: "je m'ennuie", linkedin: "je suis en quete de sens" },
] as const;

// ---------------------------------------------------------------------------
// Section 13.1 — Substitutions taches comptables
// ---------------------------------------------------------------------------

export const ACCOUNTING_TASK_SUBSTITUTIONS: readonly Substitution[] = [
  { normal: "saisir des factures", linkedin: "alimenter le referentiel transactionnel" },
  { normal: "saisi des factures", linkedin: "alimente le referentiel transactionnel" },
  { normal: "saisie des factures", linkedin: "alimente le referentiel transactionnel" },
  { normal: "lettrer des comptes", linkedin: "piloter la reconciliation analytique des flux" },
  { normal: "faire un rapprochement bancaire", linkedin: "securiser l'integrite des flux de tresorerie" },
  { normal: "pointer la caisse", linkedin: "auditer le cash management operationnel" },
  { normal: "classer des pieces", linkedin: "structurer l'architecture documentaire du dossier" },
  { normal: "relancer un client pour ses pieces", linkedin: "activer le workflow de collecte des data sources" },
  { normal: "corriger une erreur d'imputation", linkedin: "optimiser le mapping comptable" },
  { normal: "passer une OD", linkedin: "injecter une ecriture d'ajustement normatif" },
  { normal: "calculer la TVA", linkedin: "modeliser la fiscalite indirecte" },
  { normal: "declarer la TVA", linkedin: "deployer la conformite fiscale en temps reel" },
  { normal: "faire la paie", linkedin: "piloter le cycle de remuneration et charges sociales" },
  { normal: "pointer les immobilisations", linkedin: "realiser l'inventaire strategique des actifs" },
  { normal: "calculer les amortissements", linkedin: "modeliser la depreciation planifiee du capital productif" },
  { normal: "provisionner", linkedin: "anticiper les risques dans une logique de prudence normative" },
  { normal: "contre-passer une ecriture", linkedin: "reverser un flux dans le cadre du continuous improvement" },
  { normal: "sortir une balance", linkedin: "extraire un snapshot du referentiel comptable" },
  { normal: "editer un grand livre", linkedin: "generer le reporting analytique detaille" },
  { normal: "faire une situation intermediaire", linkedin: "produire un flash reporting a mi-parcours" },
  { normal: "envoyer la liasse au SIE", linkedin: "deployer le package declaratif dans l'ecosysteme reglementaire" },
  { normal: "repondre au telephone", linkedin: "assurer un touchpoint client en mode reactif" },
  { normal: "scanner des factures", linkedin: "digitaliser les flux d'entree documentaires" },
  { normal: "chercher une erreur de 0.02 euros", linkedin: "mener une investigation forensic sur micro-ecart" },
  // Formes conjuguees courantes
  { normal: "fait la TVA", linkedin: "optimise la conformite fiscale du portefeuille" },
  { normal: "fait les comptes", linkedin: "pilote la production comptable" },
  { normal: "fait un bilan", linkedin: "finalise le closing annuel" },
  { normal: "boucle un bilan", linkedin: "securise le reporting reglementaire" },
  { normal: "boucle le bilan", linkedin: "finalise le closing annuel et securise le reporting reglementaire" },
  { normal: "depose la liasse", linkedin: "assure la conformite declarative dans le respect des deadlines reglementaires" },
  { normal: "trouve une erreur", linkedin: "detecte une anomalie dans le process de reconciliation" },
  { normal: "creve", linkedin: "en phase de deep recovery apres un sprint de production intense" },
  { normal: "fatigue", linkedin: "a frole le burnout (et en a tire une lecon)" },
  { normal: "periode fiscale", linkedin: "saison des warriors de la comptabilite" },
  { normal: "heures sup", linkedin: "mode deep work immersif" },
  { normal: "controle fiscal", linkedin: "phase d'audit de conformite — l'occasion de demontrer notre rigueur" },
  { normal: "oublie de declarer", linkedin: "identifie un incident de process traite dans une logique d'amelioration continue" },
] as const;

// ---------------------------------------------------------------------------
// Section 13.2 — Substitutions evenements comptables
// ---------------------------------------------------------------------------

export const ACCOUNTING_EVENT_SUBSTITUTIONS: readonly Substitution[] = [
  { normal: "c'est la periode fiscale", linkedin: "c'est la saison des warriors de la comptabilite" },
  { normal: "je fais des heures sup", linkedin: "je suis en mode deep work immersif" },
  { normal: "le logiciel a plante", linkedin: "notre stack technologique est en phase de resilience" },
  { normal: "le client ne comprend pas son bilan", linkedin: "le client est en phase d'appropriation de sa data financiere" },
  { normal: "l'administration fiscale nous relance", linkedin: "nous sommes en dialogue constructif avec l'ecosysteme reglementaire" },
  { normal: "on a un controle fiscal", linkedin: "on traverse une phase d'audit de conformite — l'occasion de demontrer notre rigueur" },
  { normal: "le client veut frauder", linkedin: "le client explore les limites du cadre reglementaire — notre role est de le recentrer" },
  { normal: "j'ai oublie une declaration", linkedin: "un incident de process a ete identifie et traite dans une logique d'amelioration continue" },
  { normal: "mon PC rame", linkedin: "mon outil de production est en phase de latence" },
  { normal: "je suis en retard sur mes dossiers", linkedin: "je gere un backlog priorise en mode agile" },
  { normal: "j'ai trouve une fraude", linkedin: "j'ai detecte une anomalie significative necessitant une escalation" },
] as const;

// ---------------------------------------------------------------------------
// Section 13.3 — Substitutions outils comptables
// ---------------------------------------------------------------------------

export const ACCOUNTING_TOOLS_SUBSTITUTIONS: readonly Substitution[] = [
  { normal: "Excel", linkedin: "mon cockpit d'analyse financiere" },
  { normal: "Sage / Cegid / FULLL", linkedin: "ma plateforme de production comptable integree" },
  { normal: "le plan comptable", linkedin: "le referentiel normatif qui structure notre langage" },
  { normal: "un TCD", linkedin: "un outil de business intelligence frugal" },
  { normal: "CTRL+F", linkedin: "ma fonctionnalite d'audit express" },
  { normal: "un classeur a levier", linkedin: "un dispositif de stockage physique en voie de disruption" },
] as const;

// ---------------------------------------------------------------------------
// Section 2.1 — Templates de hooks (accroches de posts)
// ---------------------------------------------------------------------------

export const POST_HOOKS: readonly string[] = [
  "J'ai ete vire. Et c'est la meilleure chose qui me soit arrivee.",
  "On m'a dit que c'etait impossible. Voici ce qui s'est passe.",
  "J'ai refuse une offre a [montant]. Voici pourquoi.",
  "[Chiffre impressionnant]. C'est le nombre de [chose]. En [duree courte].",
  "Arretez de [chose que tout le monde fait]. Ca vous detruit.",
  "Il y a [duree], j'etais [situation miserable]. Aujourd'hui, [situation glorieuse].",
  "Personne ne vous le dira. Alors je vais le faire.",
  "[Affirmation controversee en 5 mots max].",
  "J'ai fait [action banale]. Et ca a change ma vie.",
  "Le secret que [profession] ne veut pas que vous sachiez.",
  "Hot take : [opinion tiede presentee comme brulante].",
  "J'ai commis [nombre] erreurs en [duree]. Voici les [nombre] lecons.",
  "Je dois vous avouer quelque chose.",
  "Unpopular opinion : [opinion tres populaire].",
] as const;

// ---------------------------------------------------------------------------
// Section 2.4 — Templates de CTA
// ---------------------------------------------------------------------------

export const CTA_TEMPLATES: readonly string[] = [
  "Repostez si vous etes d'accord.",
  "Dites-moi en commentaire : [question ouverte].",
  "Suivez-moi pour plus de contenu comme celui-ci.",
  "Lien en commentaire (toujours, meme s'il n'y en a pas).",
  "DM ouvert pour en discuter.",
  "Vous n'etes pas d'accord ? Dites-le moi, j'adore le debat constructif.",
  "Taguez quelqu'un qui a besoin de lire ca.",
] as const;

// ---------------------------------------------------------------------------
// Section 4.1 — Emojis par registre
// ---------------------------------------------------------------------------

export const EMOJIS_BY_REGISTER = {
  success: ["🚀", "🎯", "💪", "🏆", "⭐", "🎉", "✅", "🔥"],
  inspiration: ["💡", "🧠", "📚", "🌱", "✨", "🔑", "💎"],
  humility: ["🙏", "❤️", "😊", "🥹"],
  alert: ["🚨", "⚠️", "❌", "🛑"],
  direction: ["👇", "👆", "➡️", "↓", "📌", "📍"],
  tech: ["🤖", "💻", "📊", "⚙️", "🔧"],
  community: ["🤝", "👥", "🫶", "💼"],
  travel: ["✈️", "🌍", "🎤", "🏙️"],
} as const;

export type EmojiRegister = keyof typeof EMOJIS_BY_REGISTER;

// ---------------------------------------------------------------------------
// Section 7.1 — Cliches
// ---------------------------------------------------------------------------

export const CLICHES: readonly string[] = [
  "Le meilleur reste a venir",
  "Entourez-vous des bonnes personnes",
  "Votre reseau est votre net worth",
  "Done is better than perfect",
  "Fail fast, learn faster",
  "La chance, c'est quand la preparation rencontre l'opportunite",
  "Seul on va plus vite, ensemble on va plus loin",
  "Ce n'est pas un sprint, c'est un marathon",
  "Le talent gagne des matchs, le collectif gagne des championnats",
  "Culture eats strategy for breakfast",
  "Les gens ne quittent pas les entreprises, ils quittent les managers",
  "On n'a pas besoin de motivation, on a besoin de discipline",
  "Le meilleur investissement, c'est en vous-meme",
  "Ce qui ne tue pas rend plus fort",
  "L'echec n'est pas le contraire du succes, il en fait partie",
] as const;

// ---------------------------------------------------------------------------
// Section 14.2 — Connecteurs a vide
// ---------------------------------------------------------------------------

export const VOID_CONNECTORS: readonly string[] = [
  "Et c'est ca qui change tout.",
  "Et pourtant.",
  "Mais au fond, on le sait tous.",
  "La verite, c'est que...",
  "Ce qu'on ne vous dit jamais, c'est...",
  "Le plus important dans tout ca ?",
  "Et si c'etait ca, la cle ?",
  "Ce n'est pas une opinion. C'est un fait.",
  "Relisez ca. Lentement.",
  "Sauvegardez ce post. Revenez-y dans 6 mois.",
  "Si ca resonne en vous, vous savez quoi faire.",
  "Spoiler : la reponse etait en vous depuis le debut.",
] as const;

// ---------------------------------------------------------------------------
// Section 14.3 — Conclusions universelles
// ---------------------------------------------------------------------------

export const UNIVERSAL_CONCLUSIONS: readonly string[] = [
  "Le meilleur reste a venir.",
  "Et ce n'est que le debut.",
  "La suite s'ecrira ensemble.",
  "On ne fait que commencer.",
  "Le journey continue.",
  "La route est longue, mais la direction est claire.",
  "Tomorrow is day one.",
  "Le chapitre suivant sera le plus beau.",
  "L'aventure ne fait que commencer — et elle est collective.",
  "Je ne sais pas ou ca mene. Mais j'y vais. Avec vous.",
] as const;

// ---------------------------------------------------------------------------
// Section 10 — Glossaire des buzzwords
// ---------------------------------------------------------------------------

export const BUZZWORD_GLOSSARY: readonly BuzzwordEntry[] = [
  { term: "Accountability", definition: "Faire ce qu'on a dit qu'on ferait (dit la personne qui reporte chaque deadline)" },
  { term: "Agile", definition: "Changer d'avis en pretendant que c'etait prevu" },
  { term: "Alignment", definition: "Etre d'accord avec le chef" },
  { term: "Authentic", definition: "Filtre Instagram + storytelling calcule" },
  { term: "Bandwidth", definition: "Temps disponible (= jamais disponible)" },
  { term: "Best practice", definition: "Ce que tout le monde fait sans savoir pourquoi" },
  { term: "Bootstrapped", definition: "Pas reussi a lever des fonds" },
  { term: "Disruption", definition: "Faire la meme chose mais avec une app" },
  { term: "Empowerment", definition: "Deleguer sans donner les moyens" },
  { term: "Framework", definition: "Tableau a 4 cases" },
  { term: "Gamechanger", definition: "Legerement utile" },
  { term: "Growth hacking", definition: "Marketing avec un budget de 0 euros" },
  { term: "Hustle", definition: "Travailler trop en appelant ca une vertu" },
  { term: "Impact", definition: "Resultat (mais ca sonne mieux)" },
  { term: "KPI", definition: "Chiffre qu'on regarde pour justifier son poste" },
  { term: "Lean", definition: "Pas assez de ressources" },
  { term: "MVP", definition: "Produit pas fini" },
  { term: "North Star", definition: "Objectif (mais avec de la poesie)" },
  { term: "Pivot", definition: "Changer de strategie parce que la premiere a foire" },
  { term: "Scalable", definition: "Hypothetiquement capable de grossir" },
  { term: "Synergy", definition: "Mot magique qui ne veut rien dire" },
  { term: "Thought leader", definition: "Personne qui poste beaucoup sur LinkedIn" },
] as const;

// ---------------------------------------------------------------------------
// Sections 6.1-6.3 — Regles de transformation (pour le system prompt)
// ---------------------------------------------------------------------------

export const TRANSFORMATION_RULES = {
  syntactic: [
    "Sauts de ligne agressifs : max 2 lignes consecutives, puis saut",
    "Suppression des connecteurs logiques : pas de cependant, neanmoins → juste un saut de ligne",
    "Phrases nominales : transformer les phrases verbales en phrases nominales courtes",
    "Chiffres en debut de phrase : toujours attirer l'oeil avec un chiffre",
    "Questions rhetoriques : en inserer au moins une tous les 3 paragraphes",
    "Anglicismes : remplacer au moins 20% des termes cles par leur equivalent anglais",
  ],
  semantic: [
    "Amplification : tout resultat est incroyable, tout apprentissage est transformant",
    "Universalisation : transformer toute experience personnelle en lecon universelle",
    "Humilite toxique : se presenter comme humble tout en flex",
    "Fausse vulnerabilite : partager un echec qui est en fait une reussite deguisee",
    "Temporal stretching : il y a X ans pour dramatiser meme les evenements recents",
    "Name-dropping : mentionner des personnalites, des frameworks",
    "Victimisation positive : on m'a dit que c'etait impossible",
  ],
  structural: [
    "Hook obligatoire : la premiere phrase doit provoquer le clic sur voir plus",
    "CTA obligatoire : la derniere section doit inviter a l'interaction",
    "Longueur : entre 800 et 1500 caracteres",
    "Paragraphes : jamais plus de 3 lignes",
    "Emojis : 3 a 7 par post, jamais en milieu de phrase, toujours en debut de ligne ou fin de section",
    "Hashtags : 3 a 5, toujours a la fin",
  ],
} as const;

// ---------------------------------------------------------------------------
// Section 15.3 — Ouvertures lyriques (mode Transcendant)
// ---------------------------------------------------------------------------

export const LYRICAL_OPENINGS: readonly string[] = [
  "Il est des matins ou le tableur s'ouvre comme un livre de prieres.",
  "Dans le silence du bureau, entre deux ecritures, nait parfois une verite que les mots ne suffisent pas a porter.",
  "La lumiere de l'ecran, ce soir-la, n'eclairait pas que mon visage. Elle eclairait un chemin.",
  "Quelque part entre le debit et le credit, il y a l'humain. Et c'est la que je choisis de me tenir.",
  "Les chiffres sont un langage. Les lettres aussi. Mais entre les deux, il y a le geste. Le geste de celui qui traduit le chaos en clarte.",
  "On dit souvent que les chiffres sont froids. Moi je dis qu'ils sont des temoins. Des temoins silencieux de l'effort, du risque, du reve.",
  "Le vent ne se voit pas. Mais il deplace les montagnes. Le comptable ne se voit pas. Mais il deplace les entreprises.",
  "Il y a de la poesie dans un compte de resultat. Il y a du suspense dans un rapprochement bancaire. Il y a de l'epopee dans une cloture annuelle.",
  "Je ne fais pas de la comptabilite. Je fais de l'archeologie du present. Je creuse dans les flux pour exhumer la verite.",
] as const;

// ---------------------------------------------------------------------------
// Aggregats utilitaires
// ---------------------------------------------------------------------------

/** Toutes les substitutions regroupees (utile pour la recherche) */
export const ALL_SUBSTITUTIONS: readonly Substitution[] = [
  ...VERB_SUBSTITUTIONS,
  ...NOUN_SUBSTITUTIONS,
  ...ADJECTIVE_SUBSTITUTIONS,
  ...EXPRESSION_SUBSTITUTIONS,
  ...ACCOUNTING_TASK_SUBSTITUTIONS,
  ...ACCOUNTING_EVENT_SUBSTITUTIONS,
  ...ACCOUNTING_TOOLS_SUBSTITUTIONS,
];

/** Toutes les phrases pre-fabriquees (hooks, CTA, cliches, connecteurs, conclusions, lyriques) */
export const ALL_PHRASES: readonly string[] = [
  ...POST_HOOKS,
  ...CTA_TEMPLATES,
  ...CLICHES,
  ...VOID_CONNECTORS,
  ...UNIVERSAL_CONCLUSIONS,
  ...LYRICAL_OPENINGS,
];
