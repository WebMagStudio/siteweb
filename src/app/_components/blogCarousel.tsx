"use client";
import Image from "next/image";
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
    <div className="relative w-full overflow-hidden">
      {/* Flèche gauche */}
      {currentIndex > 0 && (
        <button
          onClick={prevSlide}
          className="absolute -left-[1px] top-1/2 z-10 -translate-y-1/2"
        >
          <Image
            className="mr-2"
            src="/icons/chevronleft.svg"
            alt=""
            width={19}
            height={19}
          />
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
            <div key={blogCard.id} className="w-full flex-shrink-0 md:w-1/2">
              <BlogCard {...blogCard} />
            </div>
          ))}
        </div>
      </div>

      {/* Flèche droite */}
      {currentIndex < blogList.length - 1 && (
        <button
          onClick={nextSlide}
          className="absolute -right-2 top-1/2 z-10 -translate-y-1/2"
        >
          <Image
            className="mr-2"
            src="/icons/chevronright.svg"
            alt=""
            width={19}
            height={19}
          />
        </button>
      )}
    </div>
  );
}
