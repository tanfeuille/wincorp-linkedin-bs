"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const TAGLINES = [
  "Parce que dire les choses simplement, c'est tellement 2019",
  "Powered by l'ego et les anglicismes",
  "Votre prochain post viral commence ici",
  "Le bullshit, c'est tout un art",
];

export default function HeroSection() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fondu sortant
      setVisible(false);
      setTimeout(() => {
        setTaglineIndex((prev) => (prev + 1) % TAGLINES.length);
        // Fondu entrant
        setVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative text-center py-12 md:py-16 px-4 overflow-hidden">
      {/* Points decoratifs LinkedIn (CSS only) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-8 left-[10%] w-2 h-2 rounded-full bg-linkedin-blue-light/30" />
        <div className="absolute top-16 left-[25%] w-1.5 h-1.5 rounded-full bg-linkedin-blue/20" />
        <div className="absolute top-12 right-[15%] w-2.5 h-2.5 rounded-full bg-linkedin-blue-light/25" />
        <div className="absolute top-20 right-[30%] w-1.5 h-1.5 rounded-full bg-linkedin-blue/15" />
        <div className="absolute bottom-8 left-[20%] w-2 h-2 rounded-full bg-linkedin-blue-light/20" />
        <div className="absolute bottom-12 right-[20%] w-1.5 h-1.5 rounded-full bg-linkedin-blue/25" />
        {/* Lignes de connexion */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="12%" x2="25%" y2="20%" stroke="#70B5F9" strokeWidth="0.5" opacity="0.15" />
          <line x1="85%" y1="15%" x2="70%" y2="25%" stroke="#70B5F9" strokeWidth="0.5" opacity="0.15" />
          <line x1="20%" y1="85%" x2="80%" y2="80%" stroke="#70B5F9" strokeWidth="0.5" opacity="0.1" />
        </svg>
      </div>

      {/* Contenu */}
      <h1 className="text-3xl md:text-5xl font-bold text-linkedin-text mb-4 relative">
        LinkedIn Bullshit Translator
      </h1>
      <p className="text-linkedin-text-secondary text-base md:text-lg mb-6 relative">
        Transformez vos pensees normales en posts LinkedIn viraux
      </p>
      <div className="h-8 relative">
        <p
          className={cn(
            "text-sm md:text-base text-linkedin-blue italic transition-opacity duration-300",
            visible ? "opacity-100" : "opacity-0"
          )}
        >
          {TAGLINES[taglineIndex]}
        </p>
      </div>
    </section>
  );
}
