"use client";

import { cn } from "@/lib/utils";
import { EXAMPLES } from "@/lib/examples";
import { PERSONAS } from "@/lib/personas";
import type { IntensityLevel } from "@/types";

interface ExamplesCarouselProps {
  onSelect: (text: string, persona: string, intensity: IntensityLevel) => void;
}

export default function ExamplesCarousel({ onSelect }: ExamplesCarouselProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-linkedin-text">
        Essayez un exemple
      </h3>
      <div
        className={cn(
          "flex gap-3 overflow-x-auto pb-2",
          "scrollbar-hide",
          "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        )}
      >
        {EXAMPLES.map((example, i) => {
          const persona = PERSONAS[example.persona];
          return (
            <button
              key={i}
              onClick={() =>
                onSelect(example.text, example.persona, example.intensity)
              }
              className={cn(
                "flex-shrink-0 min-w-[200px] max-w-[220px] rounded-lg border border-gray-200",
                "bg-white p-3 text-left transition-all",
                "hover:border-linkedin-blue hover:shadow-sm"
              )}
            >
              <p className="text-sm italic text-linkedin-text line-clamp-2 mb-2">
                &ldquo;{example.text}&rdquo;
              </p>
              <div className="flex items-center gap-1.5">
                <span className="text-sm">{persona?.emoji}</span>
                <span className="text-xs text-linkedin-text-secondary truncate">
                  {persona?.label ?? example.persona}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
