import { useState } from "react";
import type { Experience } from "@/types/content";
import { localCompanyLogoSrc } from "@/lib/company-logo";

type ExperienceCompanyBadgeProps = {
  experience: Experience;
  size?: "card" | "modal";
};

export function ExperienceCompanyBadge({
  experience,
  size = "card",
}: ExperienceCompanyBadgeProps) {
  const localSrc = localCompanyLogoSrc(experience);
  const [failed, setFailed] = useState(false);

  const boxClass =
    size === "modal"
      ? "h-14 w-14 rounded-2xl text-lg"
      : "h-12 w-12 rounded-xl text-base";

  const activeClass = experience.active
    ? "bg-on-background text-primary-container"
    : "bg-surface-container-high text-on-surface";

  if (localSrc && !failed) {
    return (
      <div
        className={`flex shrink-0 overflow-hidden rounded-xl shadow-sm transition-transform group-hover:scale-105 ${boxClass}`}
      >
        <img
          src={localSrc}
          alt=""
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex shrink-0 items-center justify-center font-bold shadow-sm transition-transform group-hover:scale-105 ${boxClass} ${activeClass}`}
    >
      {experience.initials}
    </div>
  );
}
