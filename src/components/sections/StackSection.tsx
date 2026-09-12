import { motion } from "motion/react";
import { skills } from "@/lib/content";
import { useScrollReveal } from "@/lib/scroll-motion";
import { SkillPill } from "./SkillPill";

function SectionEyebrow({ children }: { children: string }) {
  return (
    <div className="relative mb-space-xs inline-flex items-center bg-surface-container-lowest px-3 py-1 shadow-sm">
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

export function StackSection() {
  const { sectionProps } = useScrollReveal();

  return (
    <motion.section
      {...sectionProps}
      id="stack"
      className="w-full bg-surface-container-low py-space-xl"
    >
      <div className="mx-auto max-w-[1240px] px-gutter">
        <div className="mb-space-lg text-center">
          <SectionEyebrow>{skills.sectionEyebrow}</SectionEyebrow>
          <h2 className="font-headline-md text-headline-md font-bold text-on-surface">
            {skills.sectionTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-space-lg md:grid-cols-3">
          {skills.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-outline-variant/60 bg-surface-container-lowest p-space-lg shadow-sm"
            >
              <div className="mb-space-md flex h-10 w-10 items-center justify-center rounded-lg bg-primary-container text-on-primary-fixed shadow-[2px_2px_0px_#161c26]">
                <span className="material-symbols-outlined text-[20px]">
                  {pillar.icon}
                </span>
              </div>
              <div className="min-h-[5.75rem]">
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  {pillar.title}
                </h3>
                <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
                  {pillar.subtitle}
                </p>
              </div>
              <div className="mt-space-md flex flex-wrap items-center gap-2">
                {pillar.items.map((item) => (
                  <SkillPill key={item} name={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
