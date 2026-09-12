import { motion } from "motion/react";
import { formatExperienceDuration } from "@/lib/experience-duration";
import { getExperienceBySlug } from "@/lib/experience";
import { useScrollReveal } from "@/lib/scroll-motion";
import { cn } from "@/lib/utils";
import { ExperienceCompanyBadge } from "./ExperienceCompanyBadge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

type ExperienceModalProps = {
  slug: string | null;
  onClose: () => void;
};

export function ExperienceModal({ slug, onClose }: ExperienceModalProps) {
  const { modalPanelProps } = useScrollReveal();
  const experience = slug ? getExperienceBySlug(slug) : undefined;
  const open = slug !== null && experience !== undefined;
  const durationLabel =
    experience != null
      ? formatExperienceDuration(experience.startDate, experience.endDate)
      : null;

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) onClose();
      }}
    >
      {experience ? (
        <DialogContent
          showCloseButton={false}
          className={cn(
            "flex max-h-[90vh] w-full max-w-3xl flex-col gap-0 overflow-hidden rounded-2xl bg-surface-container-lowest p-0 shadow-[8px_8px_0px_#161c26] sm:max-w-3xl",
            experience.active
              ? "border-2 border-primary-container"
              : "border border-on-background",
          )}
        >
          <div
            className={cn(
              "sticky top-0 z-10 border-b p-6 pb-5 sm:p-8",
              experience.active
                ? "border-primary-container/60 bg-primary-container/10"
                : "border-outline-variant/50 bg-surface-container-lowest",
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <ExperienceCompanyBadge experience={experience} size="modal" />
                <div>
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <span className="font-body-sm text-body-sm font-medium text-on-surface-variant">
                      {experience.startDate} – {experience.endDate}
                    </span>
                    {durationLabel ? (
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-label-sm text-label-sm font-semibold ${
                          experience.active
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
                  <DialogTitle
                    className={cn(
                      "font-headline-sm text-headline-sm font-extrabold leading-snug tracking-tight sm:font-headline-md sm:text-headline-md",
                      experience.active ? "text-[#00683b]" : "text-on-surface",
                    )}
                  >
                    {experience.position}
                  </DialogTitle>
                  <div className="mt-1 flex flex-wrap items-center gap-2 font-semibold text-body-sm">
                    <span className="text-primary">{experience.companyDisplay}</span>
                    <span className="text-outline-variant">•</span>
                    <span className="flex items-center gap-1 text-xs font-medium text-on-surface-variant">
                      <span className="material-symbols-outlined text-[14px]">
                        location_on
                      </span>
                      {experience.location}
                    </span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                aria-label="Close dialog"
                onClick={onClose}
                className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-outline-variant bg-surface-container-lowest text-on-surface shadow-sm transition-all hover:rotate-90 hover:bg-on-background hover:text-surface-container-lowest"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
          </div>

          <motion.div
            {...modalPanelProps}
            className="space-y-6 overflow-y-auto p-6 sm:p-8"
          >
            <div>
              <h4 className="mb-2 flex items-center gap-2 font-label-sm text-label-sm font-bold uppercase tracking-wider text-on-surface">
                <span className="material-symbols-outlined text-[16px] text-primary">
                  feed
                </span>
                Role Overview &amp; Scope
              </h4>
              <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
                {experience.details || experience.summary}
              </p>
            </div>

            {experience.highlights.length > 0 ? (
              <div className="rounded-xl border border-outline-variant/60 bg-surface-container-low p-5 sm:p-6">
                <h4 className="mb-3.5 flex items-center gap-2 font-label-sm text-label-sm font-bold uppercase tracking-wider text-on-surface">
                  <span className="material-symbols-outlined text-[18px] text-primary">
                    verified
                  </span>
                  Key Architectural Milestones &amp; Engineering Impact
                </h4>
                <ul className="space-y-3 font-body-sm text-body-sm text-on-surface">
                  {experience.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-primary-container shadow-[0_0_0_1px_#161c26]" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {experience.technologies.length > 0 ? (
              <div>
                <h4 className="mb-3 flex items-center gap-2 font-label-sm text-label-sm font-bold uppercase tracking-wider text-on-surface">
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    terminal
                  </span>
                  Technologies &amp; Tools Applied
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md border border-outline-variant/40 bg-surface-container-high px-2.5 py-1 font-label-sm text-label-sm font-semibold text-on-surface"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </motion.div>

          <div className="flex justify-end border-t border-outline-variant/50 bg-surface-container-low p-4 sm:px-8">
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-2 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container-high"
            >
              Close
            </button>
          </div>
        </DialogContent>
      ) : null}
    </Dialog>
  );
}
