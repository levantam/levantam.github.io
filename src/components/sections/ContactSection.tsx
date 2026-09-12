import { motion } from "motion/react";
import { site } from "@/lib/content";
import { useScrollReveal } from "@/lib/scroll-motion";

const { contact } = site;

function ContactEyebrow() {
  return (
    <div className="relative mb-space-md inline-flex items-center bg-surface-container-lowest/10 px-3 py-1 backdrop-blur-md">
      <div className="pointer-events-none absolute inset-0 border border-primary-container" />
      <span className="absolute -left-[3px] -top-[3px] h-[6px] w-[6px] bg-primary-container" />
      <span className="absolute -right-[3px] -top-[3px] h-[6px] w-[6px] bg-primary-container" />
      <span className="absolute -bottom-[3px] -left-[3px] h-[6px] w-[6px] bg-primary-container" />
      <span className="absolute -bottom-[3px] -right-[3px] h-[6px] w-[6px] bg-primary-container" />
      <span className="font-label-sm text-label-sm font-bold uppercase tracking-widest text-primary-container">
        Let&apos;s Connect
      </span>
    </div>
  );
}

export function ContactSection() {
  const { sectionProps } = useScrollReveal();

  return (
    <motion.section
      {...sectionProps}
      id="contact"
      className="relative w-full scroll-mt-20 overflow-hidden bg-on-background py-space-xl text-surface-container-lowest"
    >
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-primary-container/20 blur-3xl" />

      <div className="relative mx-auto max-w-[1240px] px-gutter text-center">
        <ContactEyebrow />
        <h2 className="font-display-lg text-display-lg font-bold tracking-tight text-surface-container-lowest">
          {contact.headline}
        </h2>
        <p className="mx-auto mt-space-md max-w-[560px] font-body-lg text-body-lg text-surface-container-high">
          {contact.subheadline}
        </p>

        <div className="mt-space-xl flex flex-wrap items-center justify-center gap-space-md">
          <a
            href={contact.email}
            className="group inline-flex items-center gap-space-sm rounded-lg bg-primary-container px-space-xl py-4 font-label-md text-label-md font-bold text-on-primary-fixed shadow-[4px_4px_0px_#ffffff] transition-all hover:scale-105 hover:bg-primary-fixed"
          >
            <span className="material-symbols-outlined text-[20px]">send</span>
            <span>Send Direct Message</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-space-xs rounded-lg border border-surface-container-high px-space-lg py-4 font-label-md text-label-md font-semibold text-surface-container-lowest transition-colors hover:bg-surface-container-lowest/10"
          >
            <span className="material-symbols-outlined text-[18px]">share</span>
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
