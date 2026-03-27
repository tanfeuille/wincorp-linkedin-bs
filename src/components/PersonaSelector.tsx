"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { GENERIC_PERSONAS, ACCOUNTING_PERSONAS } from "@/lib/personas";
import type { Persona } from "@/types";

interface PersonaSelectorProps {
  selected: string;
  onSelect: (id: string) => void;
  personas: Record<string, Persona>;
}

type Tab = "generic" | "accounting";

export default function PersonaSelector({
  selected,
  onSelect,
}: PersonaSelectorProps) {
  const [tab, setTab] = useState<Tab>("generic");

  const currentPersonas =
    tab === "generic" ? GENERIC_PERSONAS : ACCOUNTING_PERSONAS;

  return (
    <div className="space-y-3">
      {/* Onglets */}
      <div className="flex gap-2">
        <button
          onClick={() => setTab("generic")}
          className={cn(
            "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
            tab === "generic"
              ? "bg-linkedin-blue text-white"
              : "bg-white border border-gray-200 text-linkedin-text-secondary hover:border-gray-300"
          )}
        >
          Generique
        </button>
        <button
          onClick={() => setTab("accounting")}
          className={cn(
            "px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2",
            tab === "accounting"
              ? "bg-linkedin-blue text-white"
              : "bg-white border border-gray-200 text-linkedin-text-secondary hover:border-gray-300"
          )}
        >
          Comptable
          <span className="text-[10px] font-bold bg-amber-400 text-amber-900 px-1.5 py-0.5 rounded-full spinex-glow">
            SPINEX Edition
          </span>
        </button>
      </div>

      {/* Grille de personas */}
      <div
        className={cn(
          "grid gap-2",
          tab === "generic"
            ? "grid-cols-2 md:grid-cols-5"
            : "grid-cols-2 md:grid-cols-4"
        )}
      >
        {currentPersonas.map((persona) => (
          <button
            key={persona.id}
            onClick={() => onSelect(persona.id)}
            className={cn(
              "rounded-lg border p-3 text-left transition-all",
              selected === persona.id
                ? "border-linkedin-blue bg-blue-50 shadow-sm"
                : "border-gray-200 bg-white hover:border-gray-300 hover:scale-105"
            )}
          >
            <span className="text-2xl block mb-1">{persona.emoji}</span>
            <span className="text-xs font-medium text-linkedin-text block">
              {persona.label}
            </span>
            <span className="text-xs text-gray-500 block truncate">
              {persona.description}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
