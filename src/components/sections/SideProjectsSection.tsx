import { motion } from "motion/react";
import { sideProjects } from "@/lib/content";
import type { SideProjectItem } from "@/types/content";
import { useScrollReveal } from "@/lib/scroll-motion";

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

function PlaceholderProjectCard({ label }: { label: string }) {
  return (
    <div className="flex h-full min-h-[220px] flex-col items-center justify-center rounded-xl border border-dashed border-outline-variant bg-surface-container-low p-space-lg text-center">
      <div className="mb-space-md flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-outline-variant bg-surface-container-lowest text-on-surface-variant">
        <span className="material-symbols-outlined text-[28px]">add</span>
      </div>
      <p className="max-w-[240px] font-body-sm text-body-sm font-medium text-on-surface-variant">
        {label}
      </p>
    </div>
  );
}

function SideProjectCard({ item }: { item: SideProjectItem }) {
  const inner = (
    <>
      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
        {item.title}
      </h3>
      {item.description ? (
        <p className="mt-space-sm font-body-sm text-body-sm text-on-surface-variant">
          {item.description}
        </p>
      ) : null}
      {item.tags && item.tags.length > 0 ? (
        <div className="mt-space-md flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-surface-container-high px-2.5 py-1 font-label-sm text-label-sm text-on-surface"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </>
  );

  const cardClass =
    "flex h-full min-h-[220px] flex-col rounded-xl border border-outline-variant/60 bg-surface-container-lowest p-space-lg shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-on-background hover:shadow-[4px_4px_0px_#161c26]";

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClass}
      >
        {inner}
      </a>
    );
  }

  return <div className={cardClass}>{inner}</div>;
}

export function SideProjectsSection() {
  const { sectionProps } = useScrollReveal();
  const { sectionEyebrow, sectionTitle, sectionSubtitle, placeholderLabel, items } =
    sideProjects;

  return (
    <motion.section
      {...sectionProps}
      id="side-projects"
      className="w-full bg-surface-container-low py-space-xl"
    >
      <div className="mx-auto max-w-[1240px] px-gutter">
        <SectionEyebrow>{sectionEyebrow}</SectionEyebrow>
        <h2 className="font-headline-md text-headline-md font-bold text-on-surface">
          {sectionTitle}
        </h2>
        {sectionSubtitle ? (
          <p className="mb-space-lg mt-2 max-w-[720px] font-body-md text-body-md text-on-surface-variant">
            {sectionSubtitle}
          </p>
        ) : (
          <div className="mb-space-lg" />
        )}

        <div className="grid grid-cols-1 gap-space-md md:grid-cols-3">
          {items.map((item) =>
            item.placeholder || (!item.title && !item.description) ? (
              <PlaceholderProjectCard key={item.id} label={placeholderLabel} />
            ) : (
              <SideProjectCard key={item.id} item={item} />
            )
          )}
        </div>
      </div>
    </motion.section>
  );
}
