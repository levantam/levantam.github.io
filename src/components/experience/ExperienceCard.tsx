import type { KeyboardEvent } from "react";
import { motion } from "motion/react";
import type { Experience } from "@/types/content";
import { formatExperienceDuration } from "@/lib/experience-duration";
import { useScrollReveal } from "@/lib/scroll-motion";
import { cn } from "@/lib/utils";
import { ExperienceCompanyBadge } from "./ExperienceCompanyBadge";

function formatPeriod(exp: Experience): string {
  return `${exp.startDate} – ${exp.endDate}`;
}

type ExperienceCardProps = {
  experience: Experience;
  index: number;
  onSelect: (slug: string) => void;
};

export function ExperienceCard({
  experience,
  index,
  onSelect,
}: ExperienceCardProps) {
  const { cardProps } = useScrollReveal();
  const { slug, active, position, companyDisplay, cardSummary, tags, startDate, endDate } =
    experience;
  const durationLabel = formatExperienceDuration(startDate, endDate);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect(slug);
    }
  };

  return (
    <motion.div
      {...cardProps(index)}
      role="button"
      tabIndex={0}
      data-experience-id={slug}
      aria-label={`View details for ${position} at ${companyDisplay}`}
      onClick={() => onSelect(slug)}
      onKeyDown={handleKeyDown}
      className={cn(
        "group relative flex cursor-pointer flex-col rounded-xl p-space-lg transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary-container",
        active
          ? "border-2 border-primary-container bg-primary-container/10 shadow-[4px_4px_0px_#161c26] hover:border-on-background"
          : "border border-outline-variant/60 bg-surface-container-lowest shadow-sm hover:border-on-background hover:shadow-[4px_4px_0px_#161c26]",
      )}
    >
      <div className="flex flex-col gap-space-sm md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-space-md">
          <ExperienceCompanyBadge experience={experience} size="card" />
          <div>
            <h3
              className={cn(
                "font-headline-sm text-headline-sm font-bold transition-colors",
                active
                  ? "text-[#00683b] group-hover:text-primary"
                  : "text-on-surface group-hover:text-primary",
              )}
            >
              {position}
            </h3>
            <p
              className={`font-body-md text-body-md font-semibold ${
                active ? "text-primary" : "text-on-surface"
              }`}
            >
              {companyDisplay}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1.5 md:text-right">
          <div className="font-body-sm text-body-sm font-medium text-[#161c26]">
            {formatPeriod(experience)}
          </div>
          {durationLabel ? (
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-label-sm text-label-sm font-semibold ${
                active
                  ? "bg-primary-container/35 text-[#00683b]"
                  : "bg-secondary-container text-[#161c26]"
              }`}
            >
              <span aria-hidden="true" className="mr-1">
                •
              </span>
              {durationLabel}
            </span>
          ) : null}
        </div>
      </div>
      <p className="mt-space-md font-body-md text-body-md text-on-surface-variant">
        {cardSummary}
      </p>
      <div className="mt-space-md flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        {tags.length > 0 ? (
          <div className="flex min-w-0 flex-1 flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-surface-container-high px-2.5 py-1 font-label-sm text-label-sm text-on-surface"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : (
          <span className="min-w-0 flex-1" />
        )}
        <span className="inline-flex shrink-0 items-center gap-1 font-label-sm text-label-sm font-bold text-primary transition-transform group-hover:translate-x-0.5">
          <span>View Details</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </span>
      </div>
    </motion.div>
  );
}
