"use client";

import { skills } from "@/lib/data";
import { useI18n } from "@/lib/i18n";
import { Shield, Code, Server, Wrench, FileBracesCorner } from "lucide-react";

const categoryConfig = {
  frontend: {
    icon: Code,
    color: "text-chart-4",
    border: "border-chart-4/30",
    bg: "bg-chart-4/5",
  },
  backend: {
    icon: Server,
    color: "text-accent",
    border: "border-accent/30",
    bg: "bg-accent/5",
  },
  security: {
    icon: Shield,
    color: "text-primary",
    border: "border-primary/30",
    bg: "bg-primary/5",
  },
  tools: {
    icon: Wrench,
    color: "text-chart-5",
    border: "border-chart-5/30",
    bg: "bg-chart-5/5",
  },
  frameworks: {
    icon: FileBracesCorner,
    color: "text-destructive",
    border: "border-destructive/30",
    bg: "bg-destructive/5",
  },
};

export function SkillsSection() {
  const { t } = useI18n();

  return (
    <section id="skills" className="py-24 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {t.skills.title}
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(Object.keys(skills) as Array<keyof typeof skills>).map(
            (category) => {
              const config = categoryConfig[category];
              const Icon = config.icon;
              const label = t.skills.categories[category];

              return (
                <div
                  key={category}
                  className={`p-6 rounded-lg border ${config.border} ${config.bg} hover:border-opacity-60 transition-all duration-300 group`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-2 rounded ${config.bg} ${config.color} group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className={`font-mono font-semibold ${config.color}`}>
                      {label}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills[category].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm font-mono text-muted-foreground bg-secondary/50 rounded border border-border hover:text-foreground hover:border-primary/30 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
