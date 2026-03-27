"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const PLACEHOLDERS = [
  "J'ai pris un cafe ce matin...",
  "La reunion de 14h etait inutile...",
  "Je suis fatigue...",
  "J'ai saisi des factures toute la journee...",
];

const MAX_CHARS = 500;

interface TextInputProps {
  value: string;
  onChange: (v: string) => void;
  disabled?: boolean;
}

export default function TextInput({ value, onChange, disabled }: TextInputProps) {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % PLACEHOLDERS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const charCount = value.length;

  return (
    <div className="space-y-1.5">
      <label className="text-sm text-linkedin-text-secondary">
        Ecrivez comme un etre humain normal
      </label>
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => {
            if (e.target.value.length <= MAX_CHARS) {
              onChange(e.target.value);
            }
          }}
          disabled={disabled}
          placeholder={PLACEHOLDERS[placeholderIndex]}
          className={cn(
            "w-full min-h-[128px] resize-none rounded-lg border p-4",
            "text-linkedin-text text-sm leading-relaxed",
            "placeholder:text-linkedin-text-secondary/60",
            "focus:outline-none focus:ring-2 focus:ring-linkedin-blue focus:border-transparent",
            "transition-colors",
            disabled && "opacity-50 cursor-not-allowed bg-gray-50"
          )}
        />
        <span
          className={cn(
            "absolute bottom-3 right-3 text-xs font-medium",
            charCount >= MAX_CHARS
              ? "text-red-500"
              : charCount >= 400
                ? "text-orange-500"
                : "text-linkedin-text-secondary/50"
          )}
        >
          {charCount}/{MAX_CHARS}
        </span>
      </div>
    </div>
  );
}
