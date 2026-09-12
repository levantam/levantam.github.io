import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { profile } from "@/lib/content";
import { scrollToSectionId } from "@/lib/scroll-to-section";
import { useScrollReveal } from "@/lib/scroll-motion";

function SelectionTag({ children }: { children: ReactNode }) {
  return (
    <div className="group relative mb-space-lg inline-flex items-center bg-surface-container-lowest px-space-md py-1.5 shadow-sm">
      <div className="pointer-events-none absolute inset-0 border border-primary-container" />
      <span className="absolute -left-[3px] -top-[3px] h-[6px] w-[6px] bg-primary-container shadow-[0_0_0_1px_#161c26]" />
      <span className="absolute -right-[3px] -top-[3px] h-[6px] w-[6px] bg-primary-container shadow-[0_0_0_1px_#161c26]" />
      <span className="absolute -bottom-[3px] -left-[3px] h-[6px] w-[6px] bg-primary-container shadow-[0_0_0_1px_#161c26]" />
      <span className="absolute -bottom-[3px] -right-[3px] h-[6px] w-[6px] bg-primary-container shadow-[0_0_0_1px_#161c26]" />
      <span className="relative font-label-md text-label-md font-semibold text-on-surface">
        {children}
      </span>
    </div>
  );
}

function SocialLink({
  href,
  label,
  icon,
  external = false,
}: {
  href: string;
  label: string;
  icon: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant bg-surface-container-lowest text-on-surface shadow-[1px_1px_0px_#161c26] transition-all hover:scale-105 hover:border-transparent hover:bg-primary-container hover:text-on-primary-fixed"
    >
      <span className="material-symbols-outlined text-[18px]">{icon}</span>
    </a>
  );
}

export function HeroSection() {
  const { sectionProps } = useScrollReveal();
  const reduceMotion = useReducedMotion();
  const { hero, description, avatar, social, resume } = profile;

  const socialLinks = [
    social.github
      ? { href: social.github, label: "GitHub Repository", icon: "terminal", external: true }
      : null,
    social.linkedin
      ? { href: social.linkedin, label: "LinkedIn Profile", icon: "share", external: true }
      : null,
    {
      href: social.email,
      label: "Email Tam at cvtamle@gmail.com",
      icon: "mail",
      external: /^https?:\/\//.test(social.email),
    },
  ].filter(Boolean) as {
    href: string;
    label: string;
    icon: string;
    external: boolean;
  }[];

  return (
    <motion.section
      {...sectionProps}
      className="relative w-full overflow-hidden bg-surface-container-lowest pb-space-xl pt-space-md md:pb-space-xl md:pt-space-lg"
    >
      <div className="pointer-events-none absolute right-[-5%] top-[18%] h-[420px] w-[540px] -rotate-12 rounded-[120px] bg-primary-container/25 blur-3xl lg:h-[520px] lg:w-[680px]" />

      <div className="relative mx-auto max-w-[1240px] px-gutter">
        <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12">
          <div className="flex flex-col items-start lg:col-span-7">
            <SelectionTag>{hero.greeting}</SelectionTag>

            <h1 className="mb-space-md font-display-lg-mobile text-display-lg-mobile font-extrabold tracking-tight text-on-surface md:font-display-lg md:text-display-lg">
              <span className="block">{hero.headlinePrimary}</span>
              <span className="mt-2 block font-headline-sm text-headline-sm font-bold tracking-tight text-outline md:mt-3 md:font-headline-md md:text-headline-md">
                {hero.headlineSecondary}
              </span>
            </h1>

            <p className="mb-space-lg max-w-[560px] font-body-md text-body-md text-on-surface-variant">
              {description}
            </p>

            <div className="mb-space-xl flex flex-wrap items-center gap-space-md">
              {resume?.url ? (
                <a
                  href={resume.url}
                  download="cv_tamle.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-space-xs rounded-lg border border-outline-variant bg-surface-container-lowest px-space-lg py-3.5 font-label-md text-label-md font-semibold text-on-surface shadow-sm transition-all hover:border-on-background hover:bg-surface-container-low"
                >
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  <span>{resume.label}</span>
                </a>
              ) : null}
              <a
                href="#experience"
                onClick={(e) => scrollToSectionId("experience", e)}
                className="group inline-flex items-center gap-space-sm rounded-lg bg-on-background px-space-lg py-3.5 font-label-md text-label-md font-bold text-surface-container-lowest shadow-[3px_3px_0px_#161c26] transition-all hover:bg-primary-container hover:text-on-primary-fixed hover:shadow-[4px_4px_0px_#161c26] active:translate-x-[2px] active:translate-y-[2px]"
              >
                <span>Explore Milestones</span>
                <span className="font-bold text-primary-container transition-colors group-hover:text-on-primary-fixed">
                  ↗
                </span>
              </a>
            </div>

            <div className="flex items-center gap-space-md pt-space-xs">
              <span className="font-label-md text-label-md text-secondary">Find me on:</span>
              <div className="flex items-center gap-2">
                {socialLinks.map((link) => (
                  <SocialLink key={link.label} {...link} />
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-[420px]">
              <div className="absolute -left-6 -top-10 z-20 hidden md:block">
                <svg
                  className="text-on-surface"
                  fill="none"
                  height="28"
                  viewBox="0 0 44 28"
                  width="44"
                  aria-hidden
                >
                  <path
                    d="M2 14L10 4L18 20L28 6L36 24L42 16"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                </svg>
              </div>

              <div className="pointer-events-none absolute -bottom-8 -right-6 -z-10 h-72 w-52 rotate-45 rounded-[60px] bg-primary-container opacity-90 transition-transform duration-500" />

              <motion.div
                className="relative overflow-hidden rounded-2xl bg-surface-container shadow-[8px_8px_0px_theme(colors.inverse-surface)]"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -5, 0],
                      }
                }
                transition={
                  reduceMotion
                    ? undefined
                    : {
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
                whileHover={reduceMotion ? undefined : { scale: 1.02 }}
              >
                <motion.img
                  src={avatar.url}
                  alt={avatar.alt}
                  className="h-auto w-full origin-center object-cover object-[center_20%]"
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          scale: [1, 1.06, 1],
                        }
                  }
                  transition={
                    reduceMotion
                      ? undefined
                      : {
                          duration: 12,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                  }
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
