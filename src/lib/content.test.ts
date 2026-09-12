import { describe, expect, it } from "vitest";
import { experiences } from "./content";

describe("experiences", () => {
  it("has six unique slugs", () => {
    const slugs = experiences.map((e) => e.slug);
    expect(slugs).toHaveLength(6);
    expect(new Set(slugs).size).toBe(6);
  });
});
