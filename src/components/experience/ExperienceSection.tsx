import { useState } from "react";
import { motion } from "motion/react";
import { experiences, site } from "@/lib/content";
import { useScrollReveal } from "@/lib/scroll-motion";
import { ExperienceCard } from "./ExperienceCard";

type ExperienceSectionProps = {
  onSelect: (slug: string) => void;
};

function SectionEyebrow({ children }: { children: string }) {
  return (
    <div className="relative mb-space-sm inline-flex items-center bg-surface-container-lowest px-3 py-1 shadow-sm">
      <div className="pointer-events-none absolute inset-0 border border-primary-container" />
      <span className="absolute -left-[3px] -top-[3px] h-[6px] w-[6px] bg-primary-container shadow-[0_0_0_1px_#161c26]" />
      <span className="absolute -right-[3px] -top-[3px] h-[6px] w-[6px] bg-primary-container shadow-[0_0_0_1px_#161c26]" />
      <span className="absolute -bottom-[3px] -left-[3px] h-[6px] w-[6px] bg-primary-container shadow-[0_0_0_1px_#161c26]" />
      <span className="absolute -bottom-[3px] -right-[3px] h-[6px] w-[6px] bg-primary-container shadow-[0_0_0_1px_#161c26]" />
      <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-on-surface">
        {children}
      </span>
    </div>
  );
}

function TotalProductionExpBadge() {
  const { eyebrow, duration, range } = site.totalExperience;

  return (
    <div className="inline-flex max-w-full items-center gap-3 rounded-xl border border-outline-variant/60 bg-surface-container-lowest px-3 py-2.5 shadow-sm sm:gap-3 sm:px-4 sm:py-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-container text-on-primary-fixed shadow-[2px_2px_0px_theme(colors.inverse-surface)] sm:h-10 sm:w-10">
        <span className="material-symbols-outlined text-[18px] sm:text-[20px]">work_history</span>
      </div>
      <div className="min-w-0 text-right">
        <p className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-[#3b4a3f]">
          {eyebrow}
        </p>
        <p className="mt-0.5 font-label-sm text-label-sm leading-snug">
          <span className="font-bold text-[#006d3e]">{duration}</span>
          <span className="font-semibold text-[#161c26]">
            <span aria-hidden="true"> • </span>
            {range}
          </span>
        </p>
      </div>
    </div>
  );
}

const INITIAL_EXPERIENCE_COUNT = 4;

export function ExperienceSection({ onSelect }: ExperienceSectionProps) {
  const { sectionProps } = useScrollReveal();
  const [expanded, setExpanded] = useState(false);
  const hasMoreExperiences = experiences.length > INITIAL_EXPERIENCE_COUNT;
  const primaryExperiences = experiences.slice(0, INITIAL_EXPERIENCE_COUNT);
  const additionalExperiences = experiences.slice(INITIAL_EXPERIENCE_COUNT);

  return (
    <motion.section
      {...sectionProps}
      id="experience"
      className="w-full bg-surface-container-lowest py-space-xl"
    >
      <div className="mx-auto max-w-[1240px] px-gutter">
        <div className="mb-space-xl flex flex-col justify-between gap-space-md md:flex-row md:items-end">
          <div>
            <SectionEyebrow>Experience</SectionEyebrow>
            <h2 className="font-headline-md text-headline-md font-bold tracking-tight text-on-surface">
              Career Milestones &amp; Track Record
            </h2>
          </div>
          <TotalProductionExpBadge />
        </div>

        <div className="flex flex-col gap-space-md">
          {primaryExperiences.map((experience, index) => (
            <ExperienceCard
              key={experience.slug}
              experience={experience}
              index={index}
              onSelect={onSelect}
            />
          ))}

          {hasMoreExperiences && !expanded ? (
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-outline-variant/80 bg-surface-container-low/80 px-space-md py-space-md backdrop-blur-sm transition-colors hover:border-on-background hover:bg-surface-container-low"
              aria-expanded={false}
              aria-label={`Show ${additionalExperiences.length} more experience entries`}
            >
              <span className="font-label-md text-label-md font-bold text-on-surface">View more</span>
              <motion.span
                className="material-symbols-outlined text-[22px] text-on-surface-variant"
                aria-hidden
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                expand_more
              </motion.span>
            </button>
          ) : null}

          {hasMoreExperiences && expanded
            ? additionalExperiences.map((experience, index) => (
                <ExperienceCard
                  key={experience.slug}
                  experience={experience}
                  index={INITIAL_EXPERIENCE_COUNT + index}
                  onSelect={onSelect}
                />
              ))
            : null}
        </div>
      </div>
    </motion.section>
  );
}
