"use client";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import BlogCard from "./blogCard";
import { blogList } from "~/data/blogList";

export default function BlogCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < blogList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="relative overflow-hidden w-full">
      {/* Flèche gauche */}
      {currentIndex > 0 && (
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/60 p-2"
        >
          <ChevronLeftIcon className="size-8 text-white" />
        </button>
      )}

      {/* Slides container */}
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {blogList.map((blogCard) => (
            <div
              key={blogCard.id}
              className="
                flex-shrink-0
                w-full
                md:w-1/2
              "
            >
              <BlogCard {...blogCard} />
            </div>
          ))}
        </div>
      </div>

      {/* Flèche droite */}
      {currentIndex < blogList.length - 1 && (
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/60 p-2"
        >
          <ChevronRightIcon className="size-8 text-white" />
        </button>
      )}
    </div>
  );
}
