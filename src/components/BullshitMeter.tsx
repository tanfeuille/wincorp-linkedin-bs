"use client";

import { cn } from "@/lib/utils";

interface BullshitMeterProps {
  score: number;
}

function getLabel(score: number): { text: string; color: string } {
  if (score <= 30) return { text: "Amateur", color: "text-green-600" };
  if (score <= 60) return { text: "Prometteur", color: "text-yellow-500" };
  if (score <= 80) return { text: "Influenceur", color: "text-orange-500" };
  if (score <= 95) return { text: "Thought Leader", color: "text-red-500" };
  return { text: "GOUROU COSMIQUE", color: "text-red-600" };
}

function getArcColor(score: number): string {
  if (score <= 30) return "#16a34a";
  if (score <= 60) return "#eab308";
  if (score <= 80) return "#f97316";
  return "#ef4444";
}

export default function BullshitMeter({ score }: BullshitMeterProps) {
  const { text, color } = getLabel(score);
  const isGourou = score > 95;

  // Arc semi-circulaire SVG
  // Rayon = 40, centre (50, 50), arc de 180 degres
  const radius = 40;
  const circumference = Math.PI * radius; // ~125.66
  const fillLength = (score / 100) * circumference;
  const dashOffset = circumference - fillLength;

  return (
    <div className={cn("flex flex-col items-center w-40 h-24", isGourou && "flame-effect")}>
      <svg viewBox="0 0 100 55" className="w-full h-auto">
        {/* Arc de fond */}
        <path
          d="M 10 50 A 40 40 0 0 1 90 50"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* Arc rempli */}
        <path
          d="M 10 50 A 40 40 0 0 1 90 50"
          fill="none"
          stroke={getArcColor(score)}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          className="transition-all duration-1000 ease-out animate-gauge-fill"
          style={{ "--gauge-offset": dashOffset } as React.CSSProperties}
        />
        {/* Score au centre */}
        <text
          x="50"
          y="48"
          textAnchor="middle"
          className="fill-linkedin-text font-bold"
          fontSize="18"
        >
          {score}
        </text>
      </svg>
      <span className={cn("text-xs font-bold -mt-1", color)}>
        {text}
      </span>
    </div>
  );
}
