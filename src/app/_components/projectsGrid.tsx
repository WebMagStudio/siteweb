"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import ProjectCard from "./projectCard";
import { projectsList } from "~/data/projectsList";
import FilterButton from "./filterButton";

import type { ReactNode } from "react";


type Project = {
  id: number;
  title: string | ReactNode;
  description: string | ReactNode;
  category: string | string[];
  image: string;
  liveDemo?: string | null;
  sourceCode?: string | null;
  sourceType?: "code" | "design" | "refonte";
  technologies: { name: string; logo: string }[];
};


export default function ProjectsGrid() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const isAllVisible = selectedCategory
    ? visibleCount >=
    projectsList.filter((project: Project) =>
      Array.isArray(project.category)
        ? project.category.includes(selectedCategory)
        : project.category === selectedCategory,
    ).length
    : visibleCount >= projectsList.length;

  // Filtrage des projets
  const filteredProjects = selectedCategory
    ? projectsList.filter((project: Project) =>
      Array.isArray(project.category)
        ? project.category.includes(selectedCategory)
        : project.category === selectedCategory,
    )
    : projectsList;

  // Remet le compteur à 4 quand on change de filtre
  useEffect(() => {
    setVisibleCount(4);
  }, [selectedCategory]);

  // Extraire les catégories uniques
  const categories: string[] = Array.from(
    new Set(
      projectsList.flatMap((project: Project) =>
        Array.isArray(project.category) ? project.category : [project.category],
      ),
    ),
  );

  const handleClick = () => {
    setVisibleCount((prev) => prev + 4);
    setTimeout(() => {
      buttonRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

  return (
    <div>
      <div className="mx-auto my-8 flex w-full flex-wrap gap-4 sm:max-w-3xl md:gap-6 lg:mx-0 lg:max-w-none">
        <FilterButton
          text="Tous"
          isActive={selectedCategory === null}
          onClick={() => setSelectedCategory(null)}
        />

        <div className="flex flex-wrap gap-4 md:gap-6">
          {categories.map((category) => (
            <FilterButton
              key={`cat-${category}`}
              text={category}
              isActive={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 xl:gap-10">
        {[...filteredProjects]
          .sort((a, b) => b.id - a.id) // tri par ordre décroissant
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
            className="flex gap-2 rounded-lg border bg-gradient-to-r from-accent-light via-accent to-accent-dark p-4 text-sm font-medium text-white transition duration-200 hover:shadow-md"
          >
            <div className="relative w-[19px] h-[19px]">
              <Image
                src="/icons/addmore.svg"
                fill
                sizes="max-width: 19px"
                className="object-contain"
                alt=""
              />
            </div>
            Afficher plus
          </button>
        )}
      </div>
    </div>
  );
}
