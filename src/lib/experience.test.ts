import { describe, expect, it } from "vitest";
import { getExperienceBySlug } from "./experience";

describe("getExperienceBySlug", () => {
  it("returns experience when slug exists", () => {
    const exp = getExperienceBySlug("begroup");
    expect(exp?.company).toBe("BeGroup");
    expect(exp?.slug).toBe("begroup");
  });

  it("returns undefined for unknown slug", () => {
    expect(getExperienceBySlug("not-a-role")).toBeUndefined();
  });
});
