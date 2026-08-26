"use client";

import { motion, useReducedMotion } from "framer-motion";

type AnimatedHeadlineProps = {
  before: string;
  accent: string;
  after: string;
};

export function AnimatedHeadline({ before, accent, after }: AnimatedHeadlineProps) {
  const reduceMotion = useReducedMotion();
  const words = [
    ...before.split(" ").map((text) => ({ text, accent: false })),
    ...accent.split(" ").map((text) => ({ text, accent: true })),
    ...after.split(" ").map((text) => ({ text, accent: false })),
  ];
  const label = `${before} ${accent} ${after}`.replace(/\s+/g, " ").trim();

  return (
    <motion.h1
      className="animated-headline"
      aria-label={label}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.045 } },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word.text}-${index}`}
          aria-hidden="true"
          className={word.accent ? "headline-word headline-word-accent" : "headline-word"}
          variants={{
            hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18, filter: "blur(6px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          {word.text}
          {index < words.length - 1 ? "\u00a0" : ""}
        </motion.span>
      ))}
    </motion.h1>
  );
}
