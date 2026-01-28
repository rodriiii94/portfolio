"use client";

import { infoPersonal, experiencia, intereses } from "@/lib/data";
import { useI18n } from "@/lib/i18n";
import { Terminal, GraduationCap, Target } from "lucide-react";

export function AboutSection() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-24 px-6 lg:px-20 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">00.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {t.about.title}
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Main content */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-start gap-4">
              <Terminal className="w-6 h-6 text-primary mt-1 shrink-0" />
              <p className="text-muted-foreground leading-relaxed">
                {t.about.description}
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Target className="w-6 h-6 text-primary mt-1 shrink-0" />
              <p className="text-muted-foreground leading-relaxed">
                {t.about.descriptionExtended}
              </p>
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-3 pt-4">
              <div className="relative">
                <div className="w-3 h-3 bg-primary rounded-full" />
                <div className="absolute inset-0 w-3 h-3 bg-primary rounded-full animate-ping opacity-75" />
              </div>
              <span className="text-sm text-muted-foreground font-mono">
                {infoPersonal.available ? t.about.available : t.about.notAvailable}
              </span>
            </div>
          </div>

          {/* Side cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Certifications */}
            <div className="p-5 rounded-lg border border-border bg-secondary/20">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h3 className="font-mono font-semibold text-foreground text-sm">
                  {t.about.education}
                </h3>
              </div>
              <ul className="space-y-2">
                {experiencia.map((cert, index) => (
                  <li
                    key={index}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">{">"}</span>
                    {cert.role} at {cert.company}
                  </li>
                ))}
              </ul>
            </div>

            {/* Interests */}
            <div className="p-5 rounded-lg border border-border bg-secondary/20">
              <h3 className="font-mono font-semibold text-foreground text-sm mb-4">
                {t.about.interests}
              </h3>
              <div className="flex flex-wrap gap-2">
                {intereses.map((interest, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs font-mono text-primary bg-primary/10 rounded border border-primary/20"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
