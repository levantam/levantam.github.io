import { navigation } from "@/lib/content";

/** Map DOM section id → nav link id (contact has no nav item). */
export function navActiveIdForSection(sectionId: string): string | null {
  if (sectionId === "home") {
    return "home";
  }
  if (sectionId === "contact") {
    return null;
  }
  const link = navigation.links.find(
    (item) => !item.external && item.href === `#${sectionId}`
  );
  return link?.id ?? null;
}

export function navActiveIdFromHash(hash: string): string {
  if (!hash || hash === "#") {
    return "home";
  }
  const sectionId = hash.replace(/^#/, "");
  const linkId = navActiveIdForSection(sectionId);
  if (linkId) {
    return linkId;
  }
  if (sectionId === "contact") {
    return "";
  }
  return "home";
}

export function scrollSpySectionIds(): string[] {
  return navigation.links
    .filter((link) => !link.external && link.href.startsWith("#") && link.href.length > 1)
    .map((link) => link.href.slice(1));
}
