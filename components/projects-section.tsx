"use client";

import React from "react";
import Image from "next/image";

import { proyectos } from "@/lib/data";
import { useI18n } from "@/lib/i18n";
import {
  Github,
  ExternalLink,
  Shield,
  Lock,
  Network,
  Key,
  Flag,
  Folder,
  ShoppingCart,
} from "lucide-react";
import { maxHeaderSize } from "node:http";

const iconMap: Record<string, React.ElementType> = {
  shield: Shield,
  lock: Lock,
  network: Network,
  key: Key,
  flag: Flag,
};

export function ProjectsSection() {
  const { t } = useI18n();
  const featuredProjects = proyectos.filter((p) => p.featured);
  const otherProjects = proyectos.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 lg:px-20 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {t.projects.title}
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project, index) => {
            const Icon = project.icon
              ? iconMap[project.icon] || Folder
              : Folder;
            const translatedProject = t.projectsData[index];

            return (
              <div
                key={project.id}
                className={`group relative grid md:grid-cols-12 gap-4 items-center ${
                  index % 2 === 1 ? "md:text-right" : ""
                }`}
              >
                {/* Project visual */}
                {/* Project visual */}
                <div
                  className={`md:col-span-7 ${
                    index % 2 === 1 ? "md:col-start-6 md:order-2" : ""
                  }`}
                >
                  {/* El contenedor principal debe tener 'relative' y un tamaño definido (aspect-video) */}
                  <div className="relative aspect-video bg-secondary/30 rounded-lg border border-border overflow-hidden group-hover:border-primary/30 transition-colors">
                    
                    {/* 1. LA IMAGEN: Va primero (o con z-index bajo). 
                        Usamos 'fill' para que llene el contenedor padre automáticamente. 
                        'object-cover' asegura que no se deforme. 
                    */}
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* 2. EL ICONO (Opcional): Si quieres que se vea DETRÁS si la imagen falla, o ENCIMA como marca de agua. 
                        Si la imagen carga bien, tapará esto a menos que uses z-index.
                        Lo dejo aquí por si la imagen es semitransparente o tarda en cargar.
                    */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                      {/* Opcional: añade 'opacity-0' si no quieres ver el icono cuando hay foto */}
                      <Icon className="w-16 h-16 text-primary/20 group-hover:text-primary/40 transition-colors hidden sm:block opacity-50"/>
                    </div>

                    {/* 3. EFECTO SCAN LINE / OVERLAY: 
                        Debe ir AL FINAL o con z-index mayor para que se "pinte" encima de la foto.
                    */}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none mix-blend-overlay" />
                    
                  </div>
                </div>

                {/* Project info */}
                <div
                  className={`md:col-span-6 md:row-start-1 ${
                    index % 2 === 1 ? "md:col-start-1" : "md:col-start-6"
                  } relative z-10`}
                >
                  <p className="text-primary font-mono text-xs mb-2">
                    {t.projects.featured}
                  </p>
                  <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {translatedProject?.title || project.title}
                  </h3>
                  <div className="p-5 bg-card rounded-lg border border-border shadow-lg mb-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {translatedProject?.description || project.description}
                    </p>
                  </div>
                  <div
                    className={`flex flex-wrap gap-2 mb-4 ${
                      index % 2 === 1 ? "md:justify-end" : ""
                    }`}
                  >
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div
                    className={`flex gap-4 ${
                      index % 2 === 1 ? "md:justify-end" : ""
                    }`}
                  >
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={t.projects.viewCode}
                      >
                        <Github className="w-7 h-7" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={t.projects.viewLive}
                      >
                        <ExternalLink className="w-8 h-8" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <h3 className="text-center text-lg font-semibold text-foreground mb-8">
              {t.projects.other}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherProjects.map((project, idx) => {
                const Icon = project.icon
                  ? iconMap[project.icon] || File
                  : ShoppingCart;
                // Other projects start after featured ones
                const translatedProject = t.projectsData[featuredProjects.length + idx];

                return (
                  <div
                    key={project.id}
                    className="group p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <Icon className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors" />
                      <div className="flex gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label={t.projects.viewCode}
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label={t.projects.viewLive}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {translatedProject?.title || project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {translatedProject?.description || project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
