"use client";

import { useState, useEffect } from "react";
import { infoPersonal } from "@/lib/data";
import { useI18n } from "@/lib/i18n";
import { LanguageToggle } from "./language-toggle";
import { Menu, X, Github, Linkedin } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, locale } = useI18n();

  const navItems = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/50 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-20 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-primary font-mono font-bold text-lg group"
          >
            <span className="text-muted-foreground group-hover:text-primary transition-colors">
              {"<"}
            </span>
            <span className="text-foreground">/</span>
            <span className="text-muted-foreground group-hover:text-primary transition-colors">
              {">"}
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
                <a
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                >
                <span className="text-primary text-xs">0{index}.</span>{" "}
                {item.name}
                </a>
            ))}
            <LanguageToggle />
            <a
              href={locale === "es" ? "cv/EspañolJoseRodrigo.pdf" : "cv/EnglishJoseRodrigo.pdf"}
              download={locale === "es" ? "cv/EspañolJoseRodrigo.pdf" : "cv/EnglishJoseRodrigo.pdf"}
              className="px-4 py-2 border border-primary text-primary text-sm font-mono rounded hover:bg-primary/10 transition-colors"
            >
              CV
            </a>

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageToggle />
            <button
              type="button"
              className="p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-b border-border">
          <div className="px-6 py-8 space-y-6">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-foreground hover:text-primary transition-colors font-mono"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-primary text-sm">0{index}.</span>{" "}
                {item.name}
              </a>
            ))}
            <a
              href={locale === "es" ? "cv/EspañolJoseRodrigo.pdf" : "cv/EnglishJoseRodrigo.pdf"}
              download={locale === "es" ? "cv/EspañolJoseRodrigo.pdf" : "cv/EnglishJoseRodrigo.pdf"}
              className="px-4 py-2 border border-primary text-primary text-sm font-mono rounded hover:bg-primary/10 transition-colors"
            >
              CV
            </a>

            {/* Social links */}
            <div className="flex gap-4 pt-4 border-t border-border">
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
          </div>
        </div>
      )}
    </header>
  );
}
