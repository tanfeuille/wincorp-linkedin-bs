import type { IntensityConfig } from "@/types";

export const INTENSITIES: Record<number, IntensityConfig> = {
  1: {
    level: 1,
    label: "Subtil",
    emoji: "😏",
    description: "Un soupcon de bullshit. Presque credible.",
    promptAddition:
      "Reste relativement naturel. Ajoute quelques anglicismes et un emoji ou deux. Le texte doit rester lisible par un humain normal.",
  },
  2: {
    level: 2,
    label: "Corporate",
    emoji: "💼",
    description: "Le standard LinkedIn. Buzzwords et storytelling.",
    promptAddition:
      "Utilise le vocabulaire LinkedIn classique : impact, mission, journey, game-changer. Ajoute des sauts de ligne dramatiques et 3-4 emojis. Structure en mini-paragraphes.",
  },
  3: {
    level: 3,
    label: "Influenceur",
    emoji: "🔥",
    description: "Full bullshit. Hook, storytelling, CTA.",
    promptAddition:
      "Commence par un hook accrocheur (une phrase choc). Raconte une histoire dramatique. Ajoute une fausse humilite, des chiffres impressionnants inventes, 5-7 emojis, et termine par un call-to-action. Sauts de ligne apres chaque phrase.",
  },
  4: {
    level: 4,
    label: "Transcendant",
    emoji: "🌌",
    description: "Au-dela du bullshit. Poesie cosmique LinkedIn.",
    promptAddition:
      "Transcende le bullshit ordinaire. Commence par une ouverture lyrique quasi-philosophique. Chaque phrase est une revelation cosmique. Melange spiritualite, business et developpement personnel dans un torrent de grandiloquence. Cite des penseurs (reels ou inventes). Le texte doit donner l'impression que poster sur LinkedIn est un acte sacre. 7+ emojis, hashtags mystiques.",
  },
};
