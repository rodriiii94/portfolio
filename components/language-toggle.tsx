"use client";

import { useI18n } from "@/lib/i18n";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { locale, toggleLocale } = useI18n();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className="group flex items-center gap-2 px-3 py-1.5 rounded border border-border hover:border-primary/50 bg-secondary/30 hover:bg-secondary/50 transition-all duration-300"
      aria-label={`Switch to ${locale === "es" ? "English" : "Spanish"}`}
    >
      <Globe className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      <span className="font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors uppercase tracking-wider">
        {locale === "en" ? "EN" : "ES"}
      </span>
    </button>
  );
}
