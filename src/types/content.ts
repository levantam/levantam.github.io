export interface SiteContact {
  headline: string;
  subheadline: string;
  email: string;
  emailAddress?: string;
  linkedin: string;
}

export interface SiteContent {
  title: string;
  location: string;
  statusPill: string;
  totalExperience: {
    eyebrow: string;
    duration: string;
    range: string;
  };
  contact: SiteContact;
}

export interface NavigationBrand {
  initials: string;
  name: string;
  title: string;
}

export interface NavigationLink {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}

export interface NavigationContent {
  brand: NavigationBrand;
  links: NavigationLink[];
  cta: { label: string; href: string };
}

export interface ProfileHero {
  greeting: string;
  headlinePrimary: string;
  headlineSecondary: string;
}

export interface ProfileContent {
  name: string;
  title: string;
  description: string;
  hero: ProfileHero;
  avatar: { url: string; alt: string };
  social: { linkedin: string; github: string; email: string };
  mainSkills: string[];
  resume?: { label: string; url: string };
  heroFloatingTech?: string[];
  heroPrimaryTech?: string;
}

export interface AboutContent {
  title: string;
  paragraphs: string[];
  ctaButton: { label: string; url: string };
}

export interface SkillPillar {
  icon: string;
  title: string;
  subtitle: string;
  items: string[];
}

export interface SkillsContent {
  sectionTitle: string;
  sectionEyebrow: string;
  pillars: SkillPillar[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuedDate: string;
  expiryDate?: string;
  credentialId?: string;
  image: string;
  summary?: string;
  verifyUrl?: string;
}

export interface CertificationsContent {
  sectionTitle: string;
  sectionEyebrow: string;
  sectionSubtitle?: string;
  items: Certification[];
}

export interface SideProjectItem {
  id: string;
  title?: string;
  description?: string;
  href?: string;
  tags?: string[];
  /** When true, shows the empty-state card with a plus icon. */
  placeholder?: boolean;
}

export interface SideProjectsContent {
  sectionEyebrow: string;
  sectionTitle: string;
  sectionSubtitle?: string;
  placeholderLabel: string;
  items: SideProjectItem[];
}

export interface Experience {
  slug: string;
  initials: string;
  active: boolean;
  position: string;
  company: string;
  companyDisplay: string;
  location: string;
  startDate: string;
  endDate: string;
  cardSummary: string;
  summary: string;
  details: string;
  highlights: string[];
  technologies: string[];
  tags: string[];
  /** Path under `public/`, e.g. `/companies/be.jpeg`. */
  logoUrl: string;
  /** Optional company site domain (reference only; logos are served locally). */
  logoDomain?: string;
}

export interface ExperiencesFile {
  experiences: Experience[];
}
