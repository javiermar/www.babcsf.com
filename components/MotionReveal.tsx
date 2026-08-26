"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealDirection = "up" | "left" | "right";

type MotionRevealProps = Readonly<{
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  id?: string;
  "aria-label"?: string;
}>;

const OFFSETS = {
  up: { x: 0, y: 24 },
  left: { x: -28, y: 0 },
  right: { x: 28, y: 0 },
} as const satisfies Record<RevealDirection, Readonly<{ x: number; y: number }>>;

export function MotionReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  id,
  "aria-label": ariaLabel,
}: MotionRevealProps) {
  const reduceMotion = useReducedMotion();
  const offset = OFFSETS[direction];

  return (
    <motion.div
      id={id}
      aria-label={ariaLabel}
      className={className}
      initial={reduceMotion ? false : { opacity: 0, ...offset }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
