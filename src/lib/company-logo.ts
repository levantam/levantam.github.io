import type { Experience } from "@/types/content";

/** Files under `public/companies/` (slug → path). Add entries when new logos are added. */
const SLUG_LOCAL_LOGO: Record<string, string> = {
  begroup: "/companies/be.jpeg",
  "redex-eco": "/companies/redex.jpeg",
  "galaxyone-sovico": "/companies/galaxyone.jpeg",
  "kms-technology": "/companies/kms.jpeg",
  "kootoro-vietnam": "/companies/kootoro.jpeg",
};

/** Public URL for a company logo, or null when no local asset exists. */
export function localCompanyLogoSrc(experience: Experience): string | null {
  const url = experience.logoUrl?.trim();
  if (url?.startsWith("/")) {
    return url;
  }
  return SLUG_LOCAL_LOGO[experience.slug] ?? null;
}
