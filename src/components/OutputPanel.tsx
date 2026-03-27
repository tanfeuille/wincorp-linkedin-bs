"use client";

import { User } from "lucide-react";
import { cn } from "@/lib/utils";
import CopyButton from "@/components/CopyButton";
import BullshitMeter from "@/components/BullshitMeter";
import type { TranslateResponse } from "@/types";

interface OutputPanelProps {
  result: TranslateResponse | null;
  loading: boolean;
  streamText?: string;
}

const REACTIONS = [
  { emoji: "\u{1F44D}", count: 42 },
  { emoji: "\u{2764}\uFE0F", count: 18 },
  { emoji: "\u{1F4A1}", count: 7 },
  { emoji: "\u{1F604}", count: 3 },
];

export default function OutputPanel({ result, loading, streamText }: OutputPanelProps) {
  if (!result && !loading) return null;

  const displayText = loading && streamText ? streamText : result?.translation ?? "";

  return (
    <div className={cn("animate-slide-up rounded-xl bg-white shadow-md border border-gray-200 overflow-hidden")}>
      {/* En-tete type post LinkedIn */}
      <div className="flex items-center gap-3 p-4 pb-3">
        <div className="w-10 h-10 rounded-full bg-linkedin-gray flex items-center justify-center">
          <User className="w-5 h-5 text-linkedin-text-secondary" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-linkedin-text">Vous</span>
            <span className="w-1.5 h-1.5 rounded-full bg-linkedin-blue" />
          </div>
          <span className="text-xs text-linkedin-text-secondary">il y a 1 seconde</span>
        </div>
      </div>

      {/* Corps du post */}
      <div className="px-4 pb-3">
        <div className={cn("linkedin-post", loading && streamText && "typewriter-cursor")}>
          {displayText}
        </div>

        {/* Hashtags */}
        {result?.hashtags && result.hashtags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {result.hashtags.map((tag) => (
              <span
                key={tag}
                className="text-sm text-linkedin-blue font-medium cursor-pointer hover:underline"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Reactions */}
      <div className="border-t border-gray-100 px-4 py-2">
        <div className="flex items-center gap-3">
          {REACTIONS.map((r) => (
            <span key={r.emoji} className="flex items-center gap-1 text-xs text-linkedin-text-secondary">
              <span className="text-base">{r.emoji}</span>
              {r.count}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      {result && (
        <div className="border-t border-gray-100 px-4 py-3 flex items-center justify-between gap-3">
          <CopyButton text={result.translation} />
          <BullshitMeter score={result.bullshitScore} />
        </div>
      )}
    </div>
  );
}
