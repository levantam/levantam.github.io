import { experiences } from "./content";
import type { Experience } from "@/types/content";

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}
