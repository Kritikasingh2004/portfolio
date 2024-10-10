import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
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
      {/* find a skill table */}
      <AboutSection />
      {/* fix this */}
      <ProjectSection />
      {/* make this normal hover cards instead if clickble */}
      <ProjectItems />
      {/* make and add resume */}
      <ContactSection />
      <FooterSection />
    </>
  );
}
