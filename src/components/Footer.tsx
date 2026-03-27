"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";

export default function Footer() {
  const [toastVisible, setToastVisible] = useState(false);

  const handleTripleClick = useCallback(() => {
    try {
      localStorage.setItem("cosmique-mode", "true");
    } catch {
      // Silencieux si localStorage indisponible
    }
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 4000);
  }, []);

  return (
    <footer className="text-center py-8 px-4 relative">
      {/* Toast easter egg */}
      {toastVisible && (
        <div
          className={cn(
            "fixed top-20 right-4 z-50",
            "bg-linkedin-blue text-white text-sm font-medium",
            "px-4 py-3 rounded-lg shadow-lg",
            "notification-toast"
          )}
        >
          Mode Comptable Cosmique active!
        </div>
      )}

      <p
        className="text-sm text-linkedin-text-secondary mb-2 select-none"
        onDoubleClick={(e) => e.preventDefault()}
        onClick={(e) => {
          if (e.detail === 3) {
            handleTripleClick();
          }
        }}
      >
        Fait avec ironie par SPINEX Conseil &amp; Gestion
      </p>
      <p className="text-xs text-linkedin-text-secondary italic mb-1">
        Aucun influenceur LinkedIn n&apos;a ete blesse lors de la creation de cet outil.
      </p>
      <p className="text-xs text-linkedin-text-secondary">
        &laquo; Le contenu est roi. Le bullshit est empereur. &raquo;
      </p>
    </footer>
  );
}
