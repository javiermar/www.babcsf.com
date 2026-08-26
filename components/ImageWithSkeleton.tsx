"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

export function ImageWithSkeleton({ className = "", ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <span className={`image-loader ${loaded ? "is-loaded" : ""}`.trim()}>
      <span className="skeleton image-loader-skeleton" aria-hidden="true" />
      <Image
        {...props}
        className={`image-loader-image ${className}`.trim()}
        onLoad={() => setLoaded(true)}
      />
    </span>
  );
}
