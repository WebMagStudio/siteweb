"use client";

import { useRef, useState } from "react";
import TestimonialCard from "./testimonialCard";
import { testimonialsList } from "~/data/testimonialsList";

export default function TestimonialsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1);

//   const scrollToIndex = (index: number) => {
//     const container = containerRef.current;
//     if (container) {
//       const card = container.children[index] as HTMLElement;
//       if (card) {
//         card.scrollIntoView({
//           behavior: "smooth",
//           inline: "center",
//           block: "nearest",
//         });
//         setActiveIndex(index);
//       }
//     }
//   };

const scrollToIndex = (index: number) => {
  const container = containerRef.current;
  if (container) {
    const slides = container.querySelectorAll(".slide");
    const target = slides[index] as HTMLElement;
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
      setActiveIndex(index);
    }
  }
};


  return (
    <div 
    // className="w-full max-w-5xl mx-auto"
    >
      <div ref={containerRef} 
    //   className="flex w-max gap-6 px-4"
      className="flex justify-center overflow-x-auto scroll-smooth gap-6 snap-x snap-mandatory px-4 scrollbar-hidden"
      >
        {testimonialsList.map((testimonial, index) => (
        //   <TestimonialCard
        //     key={testimonial.id}
        //     firstName={testimonial.firstName}
        //     lastName={testimonial.lastName}
        //     role={testimonial.role}
        //     society={testimonial.society}
        //     message={testimonial.message}
        //   />
            //     <div
            // key={testimonial.id}
            // className="snap-center shrink-0 w-full max-w-md flex justify-center"
            // className="snap-center shrink-0 w-full max-w-md flex justify-center"
        //   >

        <div
    key={testimonial.id}
    className="slide snap-center shrink-0 w-full max-w-[910px] flex justify-center"
  >
            <TestimonialCard
              firstName={testimonial.firstName}
              lastName={testimonial.lastName}
              role={testimonial.role}
              society={testimonial.society}
              message={testimonial.message}
            />
           </div>
        ))}
      </div>
      {/* Pagination (bullets) */}
      <div className="mt-4 flex justify-center gap-2">
        {testimonialsList.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            // onClick={() => console.log(index)}
            className={`size-6 rounded-full ${ 
              activeIndex === index ? "bg-purple-400" : "bg-gray-400"
            }`}
            // className="size-6 rounded-full bg-white"
          />
        ))}
      </div>
    </div>
  );
}
