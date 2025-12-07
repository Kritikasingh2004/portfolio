import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import NavbarSection from "@/components/ui/NavbarSection";
import ProjectItems from "@/components/ui/ProjectItems";

export default function Home() {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ProjectItems />
      <ExperienceSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
