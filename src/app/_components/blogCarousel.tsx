"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

// import { BlogMeta } from '~/lib/blog';
import BlogCard from "./blogCard";
// import { blogList } from "~/data/blogList";
import { getPosts } from "~/lib/posts";

// type Props = {
//   posts: BlogMeta[];
// };

export default async function BlogCarousel() {
  const fileNames = await getPosts();

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < fileNames.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Flèche gauche */}
      {currentIndex > 0 && (
        <button
          onClick={prevSlide}
          className="absolute -left-[6px] top-1/2 z-10 -translate-y-1/2"
        >
          <ChevronLeftIcon className="text-bold z-10 h-10 w-10 text-base" />
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
          {/* {blogList.map((blogCard) => (
            <div key={blogCard.id} className="w-full flex-shrink-0 md:w-1/2">
              <BlogCard {...blogCard} />
            </div>
          ))} */}

          {fileNames.map((filename) => (
            <div key={filename}>{filename}</div>
            // <div key={post.slug} className="w-full flex-shrink-0 md:w-1/2">
            //   <BlogCard post={post} />
            // </div>
          ))}
        </div>
      </div>

      {/* Flèche droite */}
      {currentIndex < fileNames.length - 1 && (
        <button
          onClick={nextSlide}
          className="absolute -right-2 top-1/2 z-10 -translate-y-1/2"
        >
          <ChevronRightIcon className="text-bold z-10 h-10 w-10 text-base hover:text-black" />
        </button>
      )}
    </div>
  );
}
