"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/Icons";

type CarouselControlsProps = Readonly<{
  targetId: string;
  label: string;
}>;

type CarouselState = Readonly<{
  progress: number;
  current: number;
  total: number;
  canGoBack: boolean;
  canGoForward: boolean;
}>;

const MIN_PROGRESS = 0.08;
const SCROLL_FACTOR = 0.72;
const EDGE_TOLERANCE = 4;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function formatPage(value: number) {
  return String(value).padStart(2, "0");
}

export function CarouselControls({ targetId, label }: CarouselControlsProps) {
  const [state, setState] = useState<CarouselState>({
    progress: 0,
    current: 1,
    total: 1,
    canGoBack: false,
    canGoForward: false,
  });
  const frameRef = useRef<number | null>(null);

  const getTarget = useCallback(
    () => document.getElementById(targetId) as HTMLElement | null,
    [targetId],
  );

  const updateState = useCallback(() => {
    const target = getTarget();
    if (!target) return;

    const maxScroll = Math.max(target.scrollWidth - target.clientWidth, 0);
    const nextProgress = maxScroll === 0 ? 1 : target.scrollLeft / maxScroll;
    const children = Array.from(target.children).filter(
      (child): child is HTMLElement => child instanceof HTMLElement,
    );

    const targetLeft = target.getBoundingClientRect().left;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    children.forEach((child, index) => {
      const distance = Math.abs(child.getBoundingClientRect().left - targetLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setState({
      progress: clamp(nextProgress, 0, 1),
      current: Math.min(closestIndex + 1, Math.max(children.length, 1)),
      total: Math.max(children.length, 1),
      canGoBack: target.scrollLeft > EDGE_TOLERANCE,
      canGoForward: target.scrollLeft < maxScroll - EDGE_TOLERANCE,
    });
  }, [getTarget]);

  useEffect(() => {
    const target = getTarget();
    if (!target) return;

    const onScroll = () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(updateState);
    };

    updateState();
    target.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateState);

    return () => {
      target.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateState);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [getTarget, updateState]);

  const move = (direction: -1 | 1) => {
    const target = getTarget();
    if (!target) return;

    target.scrollBy({
      left: target.clientWidth * SCROLL_FACTOR * direction,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex min-w-[220px] items-center gap-3" aria-label={`${label} pagination`}>
      <div className="h-px min-w-12 flex-1 overflow-hidden bg-[#eadfca]" aria-hidden="true">
        <span
          className="block h-full w-full origin-left bg-[#b57a18] transition-transform duration-200"
          style={{ transform: `scaleX(${Math.max(state.progress, MIN_PROGRESS)})` }}
        />
      </div>

      <span
        className="min-w-12 text-center text-[11px] font-semibold tracking-[0.08em] text-[#667085]"
        aria-label={`Item ${state.current} of ${state.total}`}
      >
        <strong className="text-[#0d2745]">{formatPage(state.current)}</strong>
        <span className="mx-1 text-[#b7a990]">/</span>
        {formatPage(state.total)}
      </span>

      <div className="flex gap-2">
        <button
          type="button"
          className="grid h-9 w-9 place-items-center rounded-full border border-[#0d2745] bg-[#0d2745] p-0 text-white transition duration-200 hover:-translate-y-0.5 hover:border-[#b57a18] hover:bg-[#b57a18] disabled:translate-y-0 disabled:border-[#d8d0c4] disabled:bg-white disabled:text-[#a8a29e] disabled:opacity-100"
          onClick={() => move(-1)}
          aria-label={`Previous ${label}`}
          disabled={!state.canGoBack}
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </button>
        <button
          type="button"
          className="grid h-9 w-9 place-items-center rounded-full border border-[#0d2745] bg-[#0d2745] p-0 text-white transition duration-200 hover:-translate-y-0.5 hover:border-[#b57a18] hover:bg-[#b57a18] disabled:translate-y-0 disabled:border-[#d8d0c4] disabled:bg-white disabled:text-[#a8a29e] disabled:opacity-100"
          onClick={() => move(1)}
          aria-label={`Next ${label}`}
          disabled={!state.canGoForward}
        >
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
