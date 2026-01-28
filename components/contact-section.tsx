"use client";

import { infoPersonal } from "@/lib/data";
import { useI18n } from "@/lib/i18n";
import { Mail, MapPin } from "lucide-react";

export function ContactSection() {
  const { t } = useI18n();

  return (
    <section id="contact" className="py-24 px-6 lg:px-20">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-primary font-mono text-sm">04. {t.nav.contact}</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
          {t.contact.title}
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          {t.contact.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Mail className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm">{infoPersonal.email}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm">{infoPersonal.location}</span>
          </div>
        </div>

        <a
          href={`mailto:${infoPersonal.email}`}
          className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary text-primary font-mono rounded hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          <span>{">"}</span>
          {t.contact.sendMessage}
        </a>
      </div>
    </section>
  );
}
