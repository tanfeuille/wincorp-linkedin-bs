"use client";

import { User } from "lucide-react";
import { cn } from "@/lib/utils";
import TextInput from "@/components/TextInput";
import PersonaSelector from "@/components/PersonaSelector";
import IntensitySlider from "@/components/IntensitySlider";
import TranslateButton from "@/components/TranslateButton";
import OutputPanel from "@/components/OutputPanel";
import type { Persona, IntensityLevel, TranslateResponse } from "@/types";

interface TranslatorCardProps {
  text: string;
  onTextChange: (v: string) => void;
  persona: string;
  onPersonaChange: (id: string) => void;
  personas: Record<string, Persona>;
  intensity: IntensityLevel;
  onIntensityChange: (v: IntensityLevel) => void;
  onTranslate: () => void;
  loading: boolean;
  result: TranslateResponse | null;
  streamText?: string;
}

export default function TranslatorCard({
  text,
  onTextChange,
  persona,
  onPersonaChange,
  personas,
  intensity,
  onIntensityChange,
  onTranslate,
  loading,
  result,
  streamText,
}: TranslatorCardProps) {
  const isDisabled = text.trim().length === 0;

  return (
    <div
      className={cn(
        "bg-white rounded-2xl shadow-lg border border-gray-200",
        "max-w-2xl mx-auto overflow-hidden"
      )}
    >
      {/* En-tete facon LinkedIn "Commencer un post" */}
      <div className="flex items-center gap-3 px-6 py-4">
        <div className="w-10 h-10 rounded-full bg-linkedin-gray flex items-center justify-center">
          <User className="w-5 h-5 text-linkedin-text-secondary" />
        </div>
        <span className="text-sm text-linkedin-text-secondary font-medium">
          Commencer un post bullshit
        </span>
      </div>

      <hr className="border-gray-100" />

      {/* Contenu */}
      <div className="p-6 space-y-6">
        <TextInput value={text} onChange={onTextChange} disabled={loading} />
        <PersonaSelector
          selected={persona}
          onSelect={onPersonaChange}
          personas={personas}
        />
        <IntensitySlider value={intensity} onChange={onIntensityChange} />
        <TranslateButton
          onClick={onTranslate}
          loading={loading}
          disabled={isDisabled}
        />
        <OutputPanel result={result} loading={loading} streamText={streamText} />
      </div>
    </div>
  );
}
