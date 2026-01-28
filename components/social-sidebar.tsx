"use client";

import { infoPersonal } from "@/lib/data";
import { Github, Linkedin } from "lucide-react";

export function SocialSidebar() {
  return (
    <>
      {/* Left sidebar - Social links */}
      <div className="hidden lg:flex fixed left-8 bottom-0 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-border">
        <a
          href={infoPersonal.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href={infoPersonal.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>

      {/* Right sidebar - Email */}
      <div className="hidden lg:flex fixed right-8 bottom-0 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-border">
        <a
          href={`mailto:${infoPersonal.email}`}
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all font-mono text-xs tracking-widest"
          style={{ writingMode: "vertical-rl" }}
        >
          {infoPersonal.email}
        </a>
      </div>
    </>
  );
}
