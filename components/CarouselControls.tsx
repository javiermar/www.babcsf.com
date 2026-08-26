"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/Icons";

type CarouselControlsProps = Readonly<{
  targetId: string;
  label: string;
}>;

const MIN_PROGRESS = 0.08;
const SCROLL_FACTOR = 0.72;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function CarouselControls({ targetId, label }: CarouselControlsProps) {
  const [progress, setProgress] = useState(0);
  const frameRef = useRef<number | null>(null);

  const getTarget = useCallback(
    () => document.getElementById(targetId) as HTMLElement | null,
    [targetId],
  );

  const updateProgress = useCallback(() => {
    const target = getTarget();
    if (!target) return;

    const maxScroll = Math.max(target.scrollWidth - target.clientWidth, 0);
    const nextProgress = maxScroll === 0 ? 1 : target.scrollLeft / maxScroll;
    setProgress(clamp(nextProgress, 0, 1));
  }, [getTarget]);

  useEffect(() => {
    const target = getTarget();
    if (!target) return;

    const onScroll = () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    target.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      target.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateProgress);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [getTarget, updateProgress]);

  const move = (direction: -1 | 1) => {
    const target = getTarget();
    if (!target) return;

    target.scrollBy({
      left: target.clientWidth * SCROLL_FACTOR * direction,
      behavior: "smooth",
    });
  };

  return (
    <div className="carousel-ui" aria-label={`${label} controls`}>
      <div className="carousel-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${Math.max(progress, MIN_PROGRESS)})` }} />
      </div>
      <div className="carousel-buttons">
        <button type="button" className="btn btn-circle btn-sm" onClick={() => move(-1)} aria-label={`Previous ${label}`}>
          <ChevronLeftIcon />
        </button>
        <button type="button" className="btn btn-circle btn-sm" onClick={() => move(1)} aria-label={`Next ${label}`}>
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}
