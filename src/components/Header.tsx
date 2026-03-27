"use client";

import { Bell, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-14",
        "bg-white border-b border-linkedin-gray-dark",
        "flex items-center justify-between px-4 md:px-8"
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 bg-linkedin-blue rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg leading-none">BS</span>
        </div>
        <span className="text-sm font-semibold text-linkedin-text md:hidden">
          BS Translator
        </span>
      </div>

      {/* Barre de recherche (desktop uniquement) */}
      <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
        <div
          className={cn(
            "flex items-center gap-2 w-full",
            "bg-linkedin-gray rounded-md px-3 py-2"
          )}
        >
          <Search className="w-4 h-4 text-linkedin-text-secondary" />
          <span className="text-sm text-linkedin-text-secondary">
            Rechercher du bullshit...
          </span>
        </div>
      </div>

      {/* Notification */}
      <button className="relative p-2" aria-label="Notifications">
        <Bell className="w-5 h-5 text-linkedin-text-secondary" />
        <span
          className={cn(
            "absolute -top-0.5 -right-0.5",
            "bg-red-500 text-white text-[10px] font-bold",
            "rounded-full min-w-[20px] h-5 flex items-center justify-center px-1"
          )}
        >
          99+
        </span>
      </button>
    </header>
  );
}
