import siteJson from "../../content/site.json";
import navigationJson from "../../content/navigation.json";
import profileJson from "../../content/profile.json";
import aboutJson from "../../content/about.json";
import skillsJson from "../../content/skills.json";
import experiencesJson from "../../content/experiences.json";
import certificationsJson from "../../content/certifications.json";
import sideProjectsJson from "../../content/side-projects.json";
import type {
  AboutContent,
  CertificationsContent,
  Experience,
  NavigationContent,
  ProfileContent,
  SideProjectsContent,
  SiteContent,
  SkillsContent,
} from "@/types/content";

export const site = siteJson as SiteContent;
export const navigation = navigationJson as NavigationContent;
export const profile = profileJson as ProfileContent;
export const about = aboutJson as AboutContent;
export const skills = skillsJson as SkillsContent;
export const experiences = experiencesJson.experiences as Experience[];
export const certifications = certificationsJson as CertificationsContent;
export const sideProjects = sideProjectsJson as SideProjectsContent;
