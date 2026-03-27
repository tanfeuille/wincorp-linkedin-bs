"use client";

import { cn } from "@/lib/utils";
import { INTENSITIES } from "@/lib/intensity";
import type { IntensityLevel } from "@/types";

interface IntensitySliderProps {
  value: IntensityLevel;
  onChange: (v: IntensityLevel) => void;
}

const LEVELS: IntensityLevel[] = [1, 2, 3, 4];

export default function IntensitySlider({ value, onChange }: IntensitySliderProps) {
  const current = INTENSITIES[value];

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {LEVELS.map((level) => {
          const config = INTENSITIES[level];
          const isActive = value === level;
          const isTranscendent = level === 4 && isActive;

          return (
            <button
              key={level}
              onClick={() => onChange(level)}
              className={cn(
                "flex flex-col items-center gap-1 py-3 px-2 rounded-lg transition-all",
                "border font-medium",
                isActive && !isTranscendent &&
                  "bg-linkedin-blue text-white border-linkedin-blue",
                isTranscendent &&
                  "bg-gradient-to-br from-orange-500 to-red-600 text-white border-orange-500 animate-pulse-slow",
                !isActive &&
                  "bg-white border-gray-200 text-linkedin-text-secondary hover:border-gray-300"
              )}
            >
              <span className="text-xl">{config.emoji}</span>
              <span className="text-xs">{config.label}</span>
            </button>
          );
        })}
      </div>
      <p className="text-xs text-linkedin-text-secondary text-center">
        {current.description}
      </p>
    </div>
  );
}
