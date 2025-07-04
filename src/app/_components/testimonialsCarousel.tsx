"use client";

import { useRef, useState } from "react";
import TestimonialCard from "./testimonialCard";
import { testimonialsList } from "~/data/testimonialsList";

type CarouselRefType = HTMLDivElement & {
  scrollTimeout?: NodeJS.Timeout; // ou ReturnType<typeof setTimeout>
};

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);

  const carouselRef = useRef<CarouselRefType | null>(null);

  // Gérer le scroll
  const handleScroll = () => {
    if (carouselRef.current) {
      // Utiliser setTimeout pour s'assurer que le scroll est terminé
      clearTimeout(carouselRef.current.scrollTimeout);
      carouselRef.current.scrollTimeout = setTimeout(() => {
        if (carouselRef.current) {
          const scrollLeft = carouselRef.current.scrollLeft;
          const containerWidth = carouselRef.current.offsetWidth;
          const newIndex = Math.round(scrollLeft / containerWidth);

          // S'assurer que l'index est dans les limites
          const clampedIndex = Math.max(
            0,
            Math.min(newIndex, testimonialsList.length - 1),
          );

          if (clampedIndex !== activeIndex) {
            setActiveIndex(clampedIndex);
          }
        }
      }, 10); // Attendre 10ms après la fin du scroll
    }
  };

  // Navigation par bullets
  const goToSlide = (index: number) => {
    setActiveIndex(index);
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: index * containerWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative mx-auto w-full overflow-hidden px-4 lg:max-w-[910px]">
      <div
        ref={carouselRef}
        className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto md:gap-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={handleScroll}
      >
        {testimonialsList.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="flex w-full shrink-0 snap-start justify-center"
          >
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="my-10 flex justify-center gap-4 md:gap-6">
        {testimonialsList.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`size-4 rounded-full transition-all duration-300 md:size-6 ${
              activeIndex === index
                ? "scale-110 bg-slate-200"
                : "border border-slate-200 bg-transparent hover:bg-slate-200"
            }`}
            aria-label={`Aller au témoignage ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
