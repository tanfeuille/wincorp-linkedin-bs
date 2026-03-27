/**
 * Moteur de transformation LinkedIn Bullshit — 100% local, zero API.
 * Applique les regles de la Bible du Bullshit pour transformer du texte normal
 * en post LinkedIn optimise pour l'engagement et le personal branding.
 */

import type { IntensityLevel, TranslateResponse } from "@/types";
import {
  VERB_SUBSTITUTIONS,
  NOUN_SUBSTITUTIONS,
  ADJECTIVE_SUBSTITUTIONS,
  EXPRESSION_SUBSTITUTIONS,
  ACCOUNTING_TASK_SUBSTITUTIONS,
  ACCOUNTING_EVENT_SUBSTITUTIONS,
  ACCOUNTING_TOOLS_SUBSTITUTIONS,
  POST_HOOKS,
  CTA_TEMPLATES,
  CLICHES,
  VOID_CONNECTORS,
  UNIVERSAL_CONCLUSIONS,
  LYRICAL_OPENINGS,
  type Substitution,
} from "@/lib/bible";
import { PERSONAS } from "@/lib/personas";

// ── Utilitaires ──────────────────────────────────────────────────────

function pick<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickN<T>(arr: readonly T[], n: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(n, arr.length));
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** Normalise pour la comparaison (minuscule, sans accents) */
function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// ── Substitution lexicale ────────────────────────────────────────────

function applySubstitutions(text: string, subs: readonly Substitution[]): string {
  let result = text;

  // Trier les substitutions par longueur decroissante pour eviter les conflits
  const sorted = subs.slice().sort((a, b) => b.normal.length - a.normal.length);

  for (const sub of sorted) {
    const normalSub = normalize(sub.normal);
    const escaped = normalSub.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    // Matcher sur la version normalisee du texte
    const normalResult = normalize(result);
    const regex = new RegExp(`(?:^|[\\s,.;:!?'"()])${escaped}(?=[\\s,.;:!?'"()]|$)`, "gi");

    // Trouver les positions dans le texte normalise
    let match;
    const replacements: Array<{ start: number; end: number; isCapital: boolean }> = [];
    while ((match = regex.exec(normalResult)) !== null) {
      // Ajuster le start pour ignorer le caractere de delimiteur
      const actualStart = match[0].length > normalSub.length ? match.index + 1 : match.index;
      replacements.push({
        start: actualStart,
        end: actualStart + normalSub.length,
        isCapital: result[actualStart] === result[actualStart].toUpperCase() && result[actualStart] !== result[actualStart].toLowerCase(),
      });
    }

    // Appliquer les remplacements en sens inverse (pour garder les indices)
    for (let i = replacements.length - 1; i >= 0; i--) {
      const rep = replacements[i];
      const replacement = rep.isCapital ? capitalize(sub.linkedin) : sub.linkedin;
      result = result.slice(0, rep.start) + replacement + result.slice(rep.end);
    }
  }
  return result;
}

// ── Formatage LinkedIn ───────────────────────────────────────────────

/** Decoupe le texte en phrases courtes avec sauts de ligne */
function splitIntoLinkedInParagraphs(text: string, intensity: IntensityLevel): string {
  // Decouper sur les points, points d'exclamation, points d'interrogation
  const sentences = text
    .split(/(?<=[.!?])\s+/)
    .filter((s) => s.trim().length > 0);

  if (intensity <= 2) {
    // Grouper par 2-3 phrases
    const paragraphs: string[] = [];
    for (let i = 0; i < sentences.length; i += 2) {
      paragraphs.push(sentences.slice(i, i + 2).join(" "));
    }
    return paragraphs.join("\n\n");
  }

  // Intensite 3-4 : une phrase par ligne, dramatique
  return sentences.join("\n\n");
}

// ── Emojis ───────────────────────────────────────────────────────────

const EMOJI_SETS = {
  success: ["🚀", "🎯", "💪", "🏆", "⭐", "🎉", "✅", "🔥"],
  wisdom: ["💡", "🧠", "📚", "🌱", "✨", "🔑", "💎"],
  emotion: ["🙏", "❤️", "😊"],
  alert: ["🚨", "⚠️"],
  direction: ["👇", "👆", "➡️", "↓", "📌"],
  tech: ["🤖", "💻", "📊", "⚙️"],
  community: ["🤝", "👥", "💼"],
  accounting: ["📊", "💰", "📈", "🏦", "⚖️", "📋", "🔍", "✍️"],
};

function getEmojisForPersona(personaId: string, intensity: IntensityLevel): string[] {
  const persona = PERSONAS[personaId];
  const isAccounting = persona?.category === "accounting";

  const pool = isAccounting
    ? [...EMOJI_SETS.accounting, ...EMOJI_SETS.success, ...EMOJI_SETS.wisdom]
    : [...EMOJI_SETS.success, ...EMOJI_SETS.wisdom, ...EMOJI_SETS.community];

  const count =
    intensity === 1 ? 2 : intensity === 2 ? 4 : intensity === 3 ? 7 : 10;

  return pickN(pool, count);
}

// ── Hooks (accroches) ────────────────────────────────────────────────

/** Genere un hook adapte au texte et a la persona */
function generateHook(
  _text: string,
  personaId: string,
  intensity: IntensityLevel
): string | null {
  if (intensity === 1) return null; // Pas de hook en mode light

  const persona = PERSONAS[personaId];
  const isAccounting = persona?.category === "accounting";

  // Hooks specifiques comptables
  const accountingHooks = [
    "On m'a dit que c'etait juste de la saisie.",
    "Personne ne comprend vraiment ce qu'on fait.",
    "187 ecritures. 14 rapprochements. 1 lundi.",
    "La periode fiscale arrive. Et cette annee, je suis pret(e).",
    "Ce qu'on ne met jamais dans une fiche de poste comptable :",
    "J'ai regarde un tableau de TVA. Et il m'a regarde en retour.",
    "Derriere chaque bilan, il y a un humain qui a ose.",
  ];

  // Hooks generiques de la Bible
  const genericHooks = POST_HOOKS.slice(0, 10).map((h) =>
    h.replace("[montant]", "120K€").replace("[durée]", "6 mois").replace("[chose]", "les conventions")
  );

  const hookPool = isAccounting
    ? [...accountingHooks, ...genericHooks.slice(0, 3)]
    : genericHooks;

  const hook = pick(hookPool);

  if (intensity >= 4) {
    // Niveau transcendant : ouverture lyrique
    return pick(LYRICAL_OPENINGS);
  }

  return hook;
}

// ── CTA (Call to Action) ─────────────────────────────────────────────

function generateCTA(intensity: IntensityLevel): string | null {
  if (intensity === 1) return null;
  if (intensity === 2) return pick(CTA_TEMPLATES.slice(0, 3));
  return pick(CTA_TEMPLATES);
}

// ── Cliches et connecteurs ───────────────────────────────────────────

function injectCliche(intensity: IntensityLevel): string | null {
  if (intensity <= 2) return null;
  return pick(CLICHES);
}

function injectConnector(intensity: IntensityLevel): string | null {
  if (intensity <= 1) return null;
  return pick(VOID_CONNECTORS);
}

function injectConclusion(intensity: IntensityLevel): string | null {
  if (intensity <= 2) return null;
  return pick(UNIVERSAL_CONCLUSIONS);
}

// ── Hashtags ─────────────────────────────────────────────────────────

function generateHashtags(personaId: string, intensity: IntensityLevel): string[] {
  const persona = PERSONAS[personaId];
  const isAccounting = persona?.category === "accounting";

  const genericTags = [
    "Leadership", "Innovation", "GrowthMindset", "Motivation",
    "PersonalBranding", "FutureOfWork", "Inspiration", "Success",
    "Networking", "Productivite",
  ];

  const accountingTags = [
    "Comptabilite", "ExpertiseComptable", "CabinetComptable",
    "PeriodeFiscale", "TeamCompta", "FinanceHeroes", "Audit",
    "GestionFinanciere", "ComptableLife", "Collaboration",
  ];

  const personaSpecificTags: Record<string, string[]> = {
    ceo: ["Entrepreneurship", "Startup", "ScaleUp", "Founder"],
    coach: ["Coaching", "Transformation", "Mindset", "BienEtreAuTravail"],
    recruteur: ["MarqueEmployeur", "Recrutement", "DiversiteInclusion", "RH"],
    commercial: ["Sales", "B2B", "Revenue", "BusinessDevelopment"],
    dev: ["Dev", "Tech", "OpenSource", "BuildInPublic"],
    freelance: ["Freelance", "Solopreneur", "Remote", "Independant"],
    manager: ["Management", "Leadership", "TeamWork", "Agile"],
    createur: ["ContentCreation", "Storytelling", "PersonalBranding"],
    consultant: ["Strategy", "Consulting", "Advisory", "Transformation"],
    diplome: ["NewJob", "ProudToAnnounce", "NouvelleAventure", "Grateful"],
  };

  const pool = isAccounting
    ? [...accountingTags, ...genericTags.slice(0, 3)]
    : [...(personaSpecificTags[personaId] ?? []), ...genericTags];

  const count =
    intensity === 1 ? 2 : intensity === 2 ? 3 : intensity === 3 ? 5 : 7;

  return pickN(pool, count);
}

// ── Persona : enrichissement specifique ──────────────────────────────

function getPersonaFlavor(personaId: string): string[] {
  const flavors: Record<string, string[]> = {
    ceo: [
      "Quand j'ai lance ce projet, on etait 2 dans un garage.",
      "Le scale, c'est un etat d'esprit avant d'etre un chiffre.",
      "Notre North Star n'a pas change depuis le jour 1.",
    ],
    coach: [
      "Et toi, qu'est-ce qui t'empeche de passer a l'action ?",
      "Tu merites mieux que ce que tu acceptes aujourd'hui.",
      "Le declic ne viendra pas de l'exterieur. Il est deja en toi.",
    ],
    recruteur: [
      "On recrute ! Et cette fois, c'est different.",
      "Le CV ne dit rien. Le mindset dit tout.",
      "Notre culture d'entreprise n'est pas un mot sur un mur. C'est un quotidien.",
    ],
    commercial: [
      "J'ai envoye 200 mails cette semaine. 1 a signe.",
      "Le closing, c'est pas une technique. C'est une relation.",
      "La perseverance paie. Toujours.",
    ],
    dev: [
      "J'ai code ca en un week-end. Et ca a tout change.",
      "Le meilleur code, c'est celui qu'on n'ecrit pas.",
      "Ship fast. Learn faster. Iterate forever.",
    ],
    freelance: [
      "Il y a 2 ans, je demandais la permission pour mes conges.",
      "Aujourd'hui, je travaille d'ou je veux, quand je veux.",
      "Le freelancing m'a appris la liberte. Et la liberte a un prix. Mais il vaut le coup.",
    ],
    manager: [
      "Mon meilleur recrutement ? Quelqu'un que tout le monde avait refuse.",
      "Le leadership, c'est pas un titre. C'est une posture.",
      "Arretez de recruter des CV. Recrutez des humains.",
    ],
    createur: [
      "Ce post va changer ta vision du contenu.",
      "J'ai poste tous les jours pendant 365 jours. Voici ce que ca m'a apporte.",
      "La regularite bat le talent. Toujours.",
    ],
    consultant: [
      "Dans ma pratique, j'ai vu cette erreur chez 90% de mes clients.",
      "Voici 3 etapes simples pour transformer votre approche.",
      "Le framework qui change tout ↓",
    ],
    diplome: [
      "Fier(e) d'annoncer ma nouvelle aventure !",
      "Merci a tous ceux qui ont cru en moi.",
      "Le debut d'un nouveau chapitre. Hate de voir la suite !",
    ],
    // Personas comptables
    apprenti: [
      "Il y a 6 mois, je ne savais pas ce qu'etait un FEC. Aujourd'hui, j'en ai traite 47.",
      "L'alternance m'a appris une chose que l'ecole ne m'enseignera jamais : la rigueur est un muscle.",
      "Chaque ecriture comptable est une brique. Je construis ma tour, pierre par pierre.",
    ],
    assistant: [
      "L'assistant comptable ne 'saisit' pas. Il orchestre le chaos financier des entreprises.",
      "23 dossiers en parallele. 4 regimes de TVA. Des factures en photo floue. Et on appelle ca 'support'.",
      "187 ecritures. 14 rapprochements. 3 declarations de TVA. 1 lundi.",
    ],
    collaborateur: [
      "Le collaborateur comptable n'est pas un technicien. C'est un copilote strategique.",
      "Chaque bilan boucle est un kilometre gagne dans ce marathon.",
      "Non, je ne 'fais pas les comptes'. Je traduis la realite economique en langage financier.",
    ],
    senior: [
      "J'ai forme 14 collaborateurs en 8 ans. Tous m'ont appris quelque chose.",
      "Mon KPI prefere ? Le nombre de juniors devenus autonomes.",
      "18h47. Le dernier bilan de la saison est parti. Et ce soir, je suis fier.",
    ],
    "manager-cabinet": [
      "Le cabinet comptable de 2026 n'est plus celui de 2016.",
      "Le manager de cabinet n'est plus un super-collaborateur. C'est un architecte de la transformation.",
      "Automatisation. IA. FEC analytics. Le metier ne disparait pas. Il mute.",
    ],
    "expert-comptable": [
      "J'ai signe mon premier bilan il y a 22 ans. Chaque signature porte une responsabilite.",
      "Un entrepreneur m'a dit : 'Vous etes le seul a qui je montre mes vrais chiffres.' Ce jour-la, j'ai compris.",
      "L'IA va remplacer l'expert-comptable qui refuse de s'adapter. Elle va amplifier celui qui l'embrasse.",
    ],
    cac: [
      "Certifier des comptes, ce n'est pas cocher des cases. C'est porter un regard independant.",
      "Le commissaire aux comptes ne travaille pas pour l'entreprise. Il travaille pour la verite.",
      "L'independance n'est pas un luxe. C'est le socle de la confiance publique.",
    ],
  };

  return flavors[personaId] ?? flavors.ceo!;
}

// ── Bullshit Score ───────────────────────────────────────────────────

function computeBullshitScore(
  originalText: string,
  translatedText: string,
  intensity: IntensityLevel
): number {
  // Facteurs : ratio de longueur, nombre d'emojis, anglicismes
  const lengthRatio = translatedText.length / Math.max(originalText.length, 1);
  // Compter les emojis en cherchant les caracteres communs
  const commonEmojis = "🚀🎯💪🏆⭐🎉✅🔥💡🧠📚🌱✨🔑💎🙏❤️😊🚨⚠️👇👆➡️📌🤖💻📊⚙️🤝👥💼📈💰🏦⚖️📋🔍✍️🖊️🌌🏗️🦁🎓⌨️";
  const emojiCount = Array.from(translatedText).filter(c => commonEmojis.includes(c)).length;
  const hashtagCount = (translatedText.match(/#\w+/g) ?? []).length;

  // Score de base selon l'intensite
  const baseScores: Record<IntensityLevel, [number, number]> = {
    1: [20, 40],
    2: [45, 65],
    3: [70, 88],
    4: [90, 100],
  };

  const [min, max] = baseScores[intensity];
  // Moduler avec les facteurs
  const ratioBonus = Math.min(lengthRatio * 3, 15);
  const emojiBonus = Math.min(emojiCount * 2, 10);
  const hashtagBonus = Math.min(hashtagCount * 1.5, 5);

  const raw = min + ratioBonus + emojiBonus + hashtagBonus;
  return Math.min(max, Math.max(min, Math.round(raw)));
}

// ── MOTEUR PRINCIPAL ─────────────────────────────────────────────────

export function translate(
  text: string,
  personaId: string,
  intensity: IntensityLevel
): TranslateResponse {
  const persona = PERSONAS[personaId];
  const isAccounting = persona?.category === "accounting";

  // 1. Substitution lexicale
  let result = text;

  // D'abord les expressions completes (plus longues)
  result = applySubstitutions(result, EXPRESSION_SUBSTITUTIONS);

  // Puis les substitutions specifiques comptables si pertinent
  if (isAccounting) {
    result = applySubstitutions(result, ACCOUNTING_TASK_SUBSTITUTIONS);
    result = applySubstitutions(result, ACCOUNTING_EVENT_SUBSTITUTIONS);
    result = applySubstitutions(result, ACCOUNTING_TOOLS_SUBSTITUTIONS);
  }

  // Puis verbes, noms, adjectifs (du plus long au plus court pour eviter les conflits)
  result = applySubstitutions(result, NOUN_SUBSTITUTIONS);
  result = applySubstitutions(result, VERB_SUBSTITUTIONS);
  result = applySubstitutions(result, ADJECTIVE_SUBSTITUTIONS);

  // 2. Formatage LinkedIn (phrases courtes, sauts de ligne)
  result = splitIntoLinkedInParagraphs(result, intensity);

  // 3. Assemblage du post complet
  const parts: string[] = [];

  // Hook d'accroche
  const hook = generateHook(text, personaId, intensity);
  if (hook) parts.push(hook);

  // Separateur apres hook
  if (hook && intensity >= 3) parts.push("");

  // Saveur persona (phrase d'intro)
  if (intensity >= 2) {
    const flavors = getPersonaFlavor(personaId);
    parts.push(pick(flavors));
    if (intensity >= 3) parts.push("");
  }

  // Texte transforme
  parts.push(result);

  // Connecteur de vide
  const connector = injectConnector(intensity);
  if (connector) {
    parts.push("");
    parts.push(connector);
  }

  // Cliche inspirant
  const cliche = injectCliche(intensity);
  if (cliche) {
    parts.push("");
    parts.push(cliche);
  }

  // Emojis disperses
  const emojis = getEmojisForPersona(personaId, intensity);

  // Conclusion universelle
  const conclusion = injectConclusion(intensity);
  if (conclusion) {
    parts.push("");
    parts.push(`${conclusion} ${emojis.pop() ?? "🚀"}`);
  }

  // CTA
  const cta = generateCTA(intensity);
  if (cta) {
    parts.push("");
    parts.push(cta);
  }

  // Assembler le texte final
  let finalText = parts.join("\n");

  // Injecter quelques emojis dans le texte
  if (emojis.length > 0 && intensity >= 2) {
    const lines = finalText.split("\n");
    const injectableLines = lines
      .map((l, i) => ({ line: l, index: i }))
      .filter((l) => l.line.trim().length > 10 && !l.line.startsWith("#"));

    // Injecter des emojis en debut ou fin de certaines lignes
    const toInject = pickN(injectableLines, Math.min(emojis.length, injectableLines.length));
    for (let i = 0; i < toInject.length && i < emojis.length; i++) {
      const idx = toInject[i].index;
      const emoji = emojis[i];
      // Alterner debut/fin de ligne
      if (i % 2 === 0) {
        lines[idx] = `${emoji} ${lines[idx]}`;
      } else {
        lines[idx] = `${lines[idx]} ${emoji}`;
      }
    }
    finalText = lines.join("\n");
  }

  // Hashtags
  const hashtags = generateHashtags(personaId, intensity);

  // Bullshit Score
  const bullshitScore = computeBullshitScore(text, finalText, intensity);

  return {
    translation: finalText.trim(),
    hashtags,
    bullshitScore,
  };
}
