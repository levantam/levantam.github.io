import { useReducedMotion } from "motion/react";

const VIEWPORT = { once: true, margin: "-80px" } as const;

export function useScrollReveal() {
  const reduceMotion = useReducedMotion() ?? false;

  const sectionProps = {
    initial: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    whileInView: reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
    viewport: VIEWPORT,
  };

  const cardProps = (index: number) => ({
    initial: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    whileInView: reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
    viewport: VIEWPORT,
    transition: reduceMotion ? { duration: 0 } : { delay: index * 0.08 },
  });

  const modalPanelProps = {
    initial: reduceMotion ? false : { opacity: 0, y: 16 },
    animate: reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: reduceMotion ? { duration: 0 } : { duration: 0.25 },
  };

  return { sectionProps, cardProps, modalPanelProps };
}
