export type PersonaCategory = "generic" | "accounting";

export interface Persona {
  id: string;
  label: string;
  emoji: string;
  description: string;
  category: PersonaCategory;
  promptAddition: string;
}

export type IntensityLevel = 1 | 2 | 3 | 4;

export interface IntensityConfig {
  level: IntensityLevel;
  label: string;
  emoji: string;
  description: string;
  promptAddition: string;
}

export interface TranslateRequest {
  text: string;
  persona: string;
  intensity: IntensityLevel;
}

export interface TranslateResponse {
  translation: string;
  hashtags: string[];
  bullshitScore: number;
}

export interface Example {
  text: string;
  persona: string;
  intensity: IntensityLevel;
  label: string;
}
