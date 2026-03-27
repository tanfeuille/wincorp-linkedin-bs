"use client";

import { useState, useCallback } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TranslatorCard from "@/components/TranslatorCard";
import ExamplesCarousel from "@/components/ExamplesCarousel";
import Footer from "@/components/Footer";
import { PERSONAS } from "@/lib/personas";
import { translate } from "@/lib/engine";
import type { IntensityLevel, TranslateResponse } from "@/types";

export default function Home() {
  const [text, setText] = useState("");
  const [persona, setPersona] = useState("ceo");
  const [intensity, setIntensity] = useState<IntensityLevel>(2);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TranslateResponse | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  const handleTranslate = useCallback(() => {
    if (!text.trim() || loading) return;

    setLoading(true);
    setResult(null);

    // Petit delai pour le feedback visuel (effet "disruption en cours")
    setTimeout(() => {
      const data = translate(text.trim(), persona, intensity);
      setResult(data);
      setLoading(false);

      // Notification fake apres la premiere traduction
      const notifCount = parseInt(
        localStorage.getItem("bs-notif-count") ?? "0",
        10
      );
      if (notifCount < 3) {
        setTimeout(() => {
          setShowNotification(true);
          setTimeout(() => setShowNotification(false), 4000);
        }, 800);
        localStorage.setItem("bs-notif-count", String(notifCount + 1));
      }

      // Incrementer le compteur de traductions
      const totalCount = parseInt(
        localStorage.getItem("bs-total-count") ?? "12847",
        10
      );
      localStorage.setItem("bs-total-count", String(totalCount + 1));
    }, 600);
  }, [text, persona, intensity, loading]);

  const handleExampleSelect = useCallback(
    (exText: string, exPersona: string, exIntensity: IntensityLevel) => {
      setText(exText);
      setPersona(exPersona);
      setIntensity(exIntensity);
      setResult(null);
    },
    []
  );

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20 pb-12 px-4">
        <HeroSection />

        <div className="mt-8">
          <TranslatorCard
            text={text}
            onTextChange={setText}
            persona={persona}
            onPersonaChange={setPersona}
            personas={PERSONAS}
            intensity={intensity}
            onIntensityChange={setIntensity}
            onTranslate={handleTranslate}
            loading={loading}
            result={result}
          />
        </div>

        <div className="mt-10 max-w-2xl mx-auto">
          <ExamplesCarousel onSelect={handleExampleSelect} />
        </div>
      </main>

      <Footer />

      {/* Notification fake */}
      {showNotification && (
        <div className="notification-toast fixed top-20 right-4 z-50 bg-white rounded-lg shadow-xl border border-gray-200 p-4 max-w-sm">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-linkedin-blue flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">in</span>
            </div>
            <div>
              <p className="text-sm font-medium text-linkedin-text">
                Votre post a genere 47 reactions en 3 secondes
              </p>
              <p className="text-xs text-linkedin-text-secondary mt-1">
                {"L'algorithme vous adore."}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
