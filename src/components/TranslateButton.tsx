"use client";

import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface TranslateButtonProps {
  onClick: () => void;
  loading: boolean;
  disabled: boolean;
}

export default function TranslateButton({
  onClick,
  loading,
  disabled,
}: TranslateButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        "w-full h-12 rounded-lg font-semibold text-white text-sm",
        "transition-all duration-150",
        "bg-linkedin-blue hover:bg-linkedin-blue-dark",
        "active:scale-95",
        (disabled || loading) && "opacity-50 cursor-not-allowed"
      )}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <Loader2 className="w-5 h-5 animate-spin" />
          Disruption en cours...
        </span>
      ) : (
        "Traduire en LinkedIn \u{1F680}"
      )}
    </button>
  );
}
