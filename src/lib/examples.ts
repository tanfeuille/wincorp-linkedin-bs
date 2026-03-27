import type { Example, IntensityLevel } from "@/types";

export const EXAMPLES: Example[] = [
  {
    text: "J'ai pris un cafe ce matin et j'ai eu une idee.",
    persona: "ceo",
    intensity: 2 as IntensityLevel,
    label: "Le cafe visionnaire",
  },
  {
    text: "J'ai ete vire la semaine derniere.",
    persona: "coach",
    intensity: 3 as IntensityLevel,
    label: "Le rebond heroique",
  },
  {
    text: "J'ai change de travail.",
    persona: "freelance",
    intensity: 3 as IntensityLevel,
    label: "La liberation",
  },
  {
    text: "J'ai saisi des factures toute la journee.",
    persona: "assistant",
    intensity: 2 as IntensityLevel,
    label: "Le guerrier comptable",
  },
  {
    text: "La reunion de 14h n'a servi a rien.",
    persona: "manager",
    intensity: 2 as IntensityLevel,
    label: "L'alignement strategique",
  },
  {
    text: "J'ai oublie de declarer la TVA.",
    persona: "expert-comptable",
    intensity: 4 as IntensityLevel,
    label: "L'incident cosmique",
  },
  {
    text: "Je cherche du travail depuis 3 mois.",
    persona: "diplome",
    intensity: 3 as IntensityLevel,
    label: "L'aventure commence",
  },
  {
    text: "Mon code marchait pas, j'ai passe 4h a debugger.",
    persona: "dev",
    intensity: 2 as IntensityLevel,
    label: "Le debug epique",
  },
];
