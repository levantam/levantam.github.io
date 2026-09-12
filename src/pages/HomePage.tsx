import { useState } from "react";
import { ExperienceModal } from "@/components/experience/ExperienceModal";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { SideProjectsSection } from "@/components/sections/SideProjectsSection";
import { StackSection } from "@/components/sections/StackSection";

export default function HomePage() {
  const [selectedExperienceSlug, setSelectedExperienceSlug] = useState<
    string | null
  >(null);

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background pt-20">
        <HeroSection />
        <ExperienceSection onSelect={setSelectedExperienceSlug} />
        <StackSection />
        <CertificationsSection />
        <SideProjectsSection />
        <ContactSection />
        <ExperienceModal
          slug={selectedExperienceSlug}
          onClose={() => setSelectedExperienceSlug(null)}
        />
      </main>
    </>
  );
}
