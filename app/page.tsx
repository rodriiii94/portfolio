import {
  Header,
  TerminalHero,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  ContactSection,
  Footer,
  SocialSidebar,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <SocialSidebar />
      <main>
        <TerminalHero />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
