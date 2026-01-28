"use client";

import { experiencia } from "@/lib/data";
import { useI18n } from "@/lib/i18n";
import { ExternalLink } from "lucide-react";

export function ExperienceSection() {
  const { t } = useI18n();

  return (
    <section id="experience" className="py-24 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {t.experience.title}
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="space-y-8">
          {experiencia.map((exp, index) => {
            const translatedExp = t.experiencesData[index];
            
            return (
              <div
                key={exp.id}
                className="group relative pl-8 pb-8 border-l-2 border-border last:border-transparent hover:border-primary/50 transition-colors"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-2.25 rounded-full border-2 border-border bg-background group-hover:border-primary group-hover:bg-primary/20 transition-colors" />

                {/* Content */}
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="text-xs font-mono text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {translatedExp?.role || exp.role}
                    <span className="text-muted-foreground font-normal">
                      {" "}@{" "}
                    </span>
                    {exp.companyUrl && exp.companyUrl !== "#" ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1"
                      >
                        {translatedExp?.company || exp.company}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-primary">{translatedExp?.company || exp.company}</span>
                    )}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {translatedExp?.description || exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono text-primary/80 bg-primary/5 rounded border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
