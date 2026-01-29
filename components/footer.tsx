"use client";

import { infoPersonal } from "@/lib/data";
import { useI18n } from "@/lib/i18n";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Social links - visible on mobile, hidden on desktop (shown in sidebar) */}
        <div className="flex justify-center gap-6 mb-8 lg:hidden">
          <a
            href={infoPersonal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={infoPersonal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-muted-foreground text-sm font-mono">
            <span className="text-primary">{">"}</span> {t.footer.designedBy}{" "}
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              {infoPersonal.nombre}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
