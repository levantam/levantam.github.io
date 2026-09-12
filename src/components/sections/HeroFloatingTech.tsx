import { motion, useReducedMotion } from "motion/react";
import { getSkillBadgeStyle } from "@/lib/skill-badges";

type OrbitItem = {
  skill: string;
  className: string;
  delay: number;
};

const DEFAULT_ORBITS: OrbitItem[] = [
  { skill: "C#", className: "right-0 top-2 sm:-right-6 sm:top-4", delay: 0 },
  { skill: "Golang", className: "-left-3 top-[48%] sm:-left-8", delay: 0.35 },
  { skill: "TypeScript", className: "bottom-6 right-0 sm:bottom-8 sm:-right-2", delay: 0.7 },
];

type HeroFloatingTechProps = {
  skills: string[];
  primaryTech?: string;
};

export function HeroFloatingTech({ skills, primaryTech }: HeroFloatingTechProps) {
  const reduceMotion = useReducedMotion();
  const items = DEFAULT_ORBITS.filter((o) => skills.includes(o.skill));

  if (items.length === 0) {
    return null;
  }

  return (
    <>
      {items.map(({ skill, className, delay }) => {
        const style = getSkillBadgeStyle(skill);
        const isPrimary = skill === primaryTech;
        return (
          <motion.div
            key={skill}
            className={`absolute z-30 ${className}`}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={
              reduceMotion
                ? { opacity: 1, scale: isPrimary ? 1.08 : 1 }
                : {
                    opacity: 1,
                    scale: isPrimary ? [1.08, 1.12, 1.08] : 1,
                    y: isPrimary ? [0, -14, 0] : [0, -10, 0],
                    rotate: [0, 4, 0, -4, 0],
                  }
            }
            transition={
              reduceMotion
                ? { duration: 0.3 }
                : {
                    opacity: { duration: 0.5, delay },
                    scale: isPrimary
                      ? {
                          duration: 3.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: delay + 0.5,
                        }
                      : { duration: 0.5, delay },
                    y: {
                      duration: isPrimary ? 3.5 : 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: delay + 0.5,
                    },
                    rotate: {
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay,
                    },
                  }
            }
            aria-hidden
            title={skill}
          >
            <div
              className={`flex cursor-default items-center justify-center rounded-full border bg-surface-container-lowest shadow-[3px_3px_0px_#161c26] transition-all duration-200 hover:scale-110 hover:border-primary-container hover:shadow-[5px_5px_0px_#161c26] ${
                isPrimary
                  ? "h-[4.5rem] w-[4.5rem] border-2 border-primary-container ring-4 ring-primary-container/25 hover:ring-primary-container/40 sm:h-20 sm:w-20"
                  : "h-14 w-14 border-outline-variant/80 sm:h-16 sm:w-16"
              }`}
            >
              {style.iconUrl ? (
                <img
                  src={style.iconUrl}
                  alt=""
                  className={`object-contain ${isPrimary ? "h-9 w-9 sm:h-10 sm:w-10" : "h-7 w-7 sm:h-8 sm:w-8"}`}
                />
              ) : (
                <span className="font-label-sm text-label-sm font-bold text-on-surface">
                  {skill.charAt(0)}
                </span>
              )}
            </div>
          </motion.div>
        );
      })}
    </>
  );
}
