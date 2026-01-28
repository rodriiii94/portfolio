import React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { I18nProvider } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "José Rodrigo Santamaría - Full-Stack Developer",
  description: "Portfolio of José Rodrigo Santamaría, Full-Stack Developer",
  keywords: [
    "Desarrollador",
    "Full-Stack",
    "Ciberseguridad",
    "Portfolio",
    "José Rodrigo Santamaría",
    "Web Developer",
    "Software Engineer",
    "Cybersecurity",
  ],
  authors: [{ name: "José Rodrigo Santamaría" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}