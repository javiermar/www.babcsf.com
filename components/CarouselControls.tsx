"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/Icons";

type CarouselControlsProps = {
  targetId: string;
  label: string;
};

export function CarouselControls({ targetId, label }: CarouselControlsProps) {
  const [progress, setProgress] = useState(0);
  const frame = useRef<number | null>(null);

  const getTarget = useCallback(() => document.getElementById(targetId), [targetId]);

  const updateProgress = useCallback(() => {
    const target = getTarget();
    if (!target) return;
    const max = target.scrollWidth - target.clientWidth;
    setProgress(max > 0 ? target.scrollLeft / max : 1);
  }, [getTarget]);

  useEffect(() => {
    const target = getTarget();
    if (!target) return;
    const onScroll = () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(updateProgress);
    };
    updateProgress();
    target.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      target.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateProgress);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [getTarget, updateProgress]);

  const move = (direction: -1 | 1) => {
    const target = getTarget();
    if (!target) return;
    target.scrollBy({ left: target.clientWidth * 0.72 * direction, behavior: "smooth" });
  };

  return (
    <div className="carousel-ui" aria-label={`${label} controls`}>
      <div className="carousel-progress" aria-hidden="true"><span style={{ transform: `scaleX(${Math.max(progress, 0.08)})` }} /></div>
      <div className="carousel-buttons">
        <button type="button" className="btn btn-circle btn-sm" onClick={() => move(-1)} aria-label={`Previous ${label}`}><ChevronLeftIcon /></button>
        <button type="button" className="btn btn-circle btn-sm" onClick={() => move(1)} aria-label={`Next ${label}`}><ChevronRightIcon /></button>
      </div>
    </div>
  );
}
