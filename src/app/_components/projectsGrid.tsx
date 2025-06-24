"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import ProjectCard from "./projectCard";
import { projectsList } from "~/data/projectsList";

export default function ProjectsGrid() {
  const [visibleCount, setVisibleCount] = useState(4);
  const isAllVisible = visibleCount >= projectsList.length;

  const buttonRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setVisibleCount((prev) => prev + 4);

    // Scroll vers le bouton après un court délai
    setTimeout(() => {
      buttonRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 xl:gap-10">
        {[...projectsList]
          .sort((a, b) => b.id - a.id) // tri décroissant par id
          .slice(0, visibleCount)
          .map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
      </div>

      <div
        ref={buttonRef}
        className="mx-auto my-10 w-full sm:max-w-3xl lg:mx-0"
      >
        {!isAllVisible && (
          <button
            onClick={handleClick}
            className="flex gap-2 rounded-lg border border-stroke-article bg-gradient-to-r from-nocture to-eclipse p-4 text-sm font-medium transition duration-200 hover:shadow-md hover:shadow-stroke-article"
          >
            <Image src="/icons/addmore.svg" width={19} height={19} alt="" />
            Afficher plus
          </button>
        )}
      </div>
    </div>
  );
}
