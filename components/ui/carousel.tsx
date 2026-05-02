"use client";

import clsx from "clsx";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

type CarouselProps = React.ComponentProps<"div"> & {};

export function Carousel({ className, children, ...props }: CarouselProps) {
  const scrollRef = React.useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full h-full group">
      {/* no workaround except absolute */}
      <button
        type="button"
        onClick={scrollLeft}
        className="z-50 absolute left-0 top-1/2 -translate-y-1/2 rounded-full shadow-lg shadow-gray-400 bg-white p-4"
      >
        <ArrowLeft />
      </button>
      <button
        type="button"
        onClick={scrollRight}
        className="z-50 absolute right-0 top-1/2 -translate-y-1/2 rounded-full shadow-lg shadow-gray-400 bg-white p-4"
      >
        <ArrowRight />
      </button>
      {/* masked the svg from figma but can't put buttons within since the mask will hide them*/}
      <div
        className={clsx("relative w-full h-full", className)}
        data-carousel
        style={{
          ...props.style,
          maskImage: 'url("/Subtract.svg")',
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
          maskPosition: "center",
        }}
      >
        <div
          className="flex gap-20 overflow-y-clip overflow-x-auto no-scrollbar scroll-smooth h-full items-center px-20 snap-mandatory snap-x"
          ref={scrollRef}
        >
          {React.Children.map(children, (child) => (
            <div className="shrink-0 snap-start">{child}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
