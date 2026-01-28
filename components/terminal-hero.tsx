"use client";

import { useState, useEffect, useMemo } from "react";
import { infoPersonal } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

export function TerminalHero() {
  const { t } = useI18n();
  const terminalCommands = t.terminal.commands;

  // Use a unique key that changes when language changes to reset state
  const languageKey = useMemo(() => JSON.stringify(t), [t]);

  const [displayedLines, setDisplayedLines] = useState<
    { type: "command" | "output"; text: string; complete: boolean }[]
  >([]);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [phase, setPhase] = useState<"command" | "output">("command");
  const [showCursor, setShowCursor] = useState(true);

  // Reset animation when language changes
  useEffect(() => {
    // Schedule state updates for next render instead of doing them synchronously
    const resetTimer = setTimeout(() => {
      setDisplayedLines([]);
      setCurrentCommandIndex(0);
      setCurrentCharIndex(0);
      setPhase("command");
    }, 0);

    return () => clearTimeout(resetTimer);
  }, [languageKey]);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Typing effect
  useEffect(() => {
    if (currentCommandIndex >= terminalCommands.length) return;

    const currentCmd = terminalCommands[currentCommandIndex];

    if (phase === "command") {
      if (currentCharIndex < currentCmd.command.length) {
        const timeout = setTimeout(() => {
          setDisplayedLines((prev) => {
            const newLines = [...prev];
            const lastLine = newLines[newLines.length - 1];
            if (lastLine && lastLine.type === "command" && !lastLine.complete) {
              lastLine.text = currentCmd.command.slice(0, currentCharIndex + 1);
            } else {
              newLines.push({
                type: "command",
                text: currentCmd.command.slice(0, currentCharIndex + 1),
                complete: false,
              });
            }
            return newLines;
          });
          setCurrentCharIndex((prev) => prev + 1);
        }, 50 + Math.random() * 50);
        return () => clearTimeout(timeout);
      }
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          const lastLine = newLines[newLines.length - 1];
          if (lastLine) lastLine.complete = true;
          return newLines;
        });
        setPhase("output");
        setCurrentCharIndex(0);
      }, 300);
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(() => {
      setDisplayedLines((prev) => [
        ...prev,
        { type: "output", text: currentCmd.output, complete: true },
      ]);
      setPhase("command");
      setCurrentCommandIndex((prev) => prev + 1);
    }, 100);
    return () => clearTimeout(timeout);
  }, [currentCommandIndex, currentCharIndex, phase, terminalCommands]);

  return (
    <section
      id="terminal"
      className="min-h-screen flex flex-col justify-center px-6 lg:px-20 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Glitch effect name */}
        <div className="mb-8">
          <p className="text-primary font-mono text-sm mb-4 tracking-widest">
            {">"} {t.hero.initializing}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
            {infoPersonal.nombre}
          </h1>
          <h3 className="text-l mb-4 font-bold font-mono text-foreground">
            RoyY
          </h3>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-mono">
            {t.personal.role}
          </h2>
        </div>

        {/* Terminal window */}
        <div className="bg-card border border-border rounded-lg overflow-hidden shadow-2xl shadow-primary/5">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-destructive/80" />
            <div className="w-3 h-3 rounded-full bg-chart-4/80" />
            <div className="w-3 h-3 rounded-full bg-primary/80" />
            <span className="ml-4 text-xs text-muted-foreground font-mono">
              roy@portfolio:~
            </span>
          </div>

          {/* Terminal content */}
          <div className="p-6 font-mono text-sm md:text-base min-h-70">
            {displayedLines.map((line, index) => (
              <div key={`${index}-${line.text}`} className="mb-2">
                {line.type === "command" ? (
                  <div className="flex items-center gap-2">
                    <span className="text-primary">$</span>
                    <span className="text-foreground">{line.text}</span>
                    {!line.complete && showCursor && (
                      <span className="w-2 h-5 bg-primary animate-pulse" />
                    )}
                  </div>
                ) : (
                  <div className="text-muted-foreground pl-4">{line.text}</div>
                )}
              </div>
            ))}
            {currentCommandIndex >= terminalCommands.length && (
              <div className="flex items-center gap-2 mt-4">
                <span className="text-primary">$</span>
                {showCursor && (
                  <span className="w-2 h-5 bg-primary animate-pulse" />
                )}
              </div>
            )}
          </div>
        </div>

        {/* Tagline */}
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl">
          {t.personal.tagline}
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded hover:bg-primary/90 transition-colors"
          >
            {">"} {t.hero.viewProjects}
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-primary text-primary font-mono text-sm rounded hover:bg-primary/10 transition-colors"
          >
            {">"} {t.hero.contactMe}
          </a>
        </div>
      </div>
    </section>
  );
}
