import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";
import { LinkIcon } from "@heroicons/react/24/outline";

type ProjectCardProps = {
  title: string;
  description: ReactNode;
  category: string;
  image: string;
  liveDemo?: string | null;
  sourceCode?: string | null;
  technologies: { name: string; logo: string }[];
  className?: string;
};

export default function ProjectCard({
  title,
  description,
  category,
  image,
  liveDemo,
  sourceCode,
  technologies,
  className = "",
}: ProjectCardProps) {
  return (
    <article
      className={`mx-auto flex w-full flex-col justify-between gap-6 rounded-3xl border bg-[url(/bg/bg-card.png)] bg-cover bg-left px-4 py-6 sm:max-w-3xl md:px-6 md:py-10 xl:aspect-[600/618] xl:min-h-[618px] xl:max-w-[600px]${className}`}
    >
      <div className="flex aspect-[370/218] h-[218px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-midnight bg-[url(/bg/bg-card.png)] bg-cover bg-center sm:aspect-[552/330] md:h-[330px] xl:max-w-[552px]">
        <Image
          src={image}
          width={450}
          height={320}
          alt=""
          className="relative top-12 max-h-[320px] rotate-3 rounded-lg object-cover sm:top-9"
        />
      </div>

      <div className="flex flex-col gap-4 pt-[12px]">
        <span className="text-sm font-semibold uppercase tracking-wide text-base/70">
          {category}
        </span>
        <h3 className="text-xl font-bold text-primary xl:text-3xl">{title}</h3>
        <p className="font-regular text-sm text-primary xl:text-xl">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="mr-2 flex flex-wrap sm:-space-x-1">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex h-[34px] w-[34px] items-center justify-center rounded-full border bg-base xl:h-[50px] xl:w-[50px]"
              >
                {" "}
                <Image
                  src={tech.logo}
                  width={17}
                  height={17}
                  title={tech.name}
                  alt={tech.name}
                  className="object-contain xl:h-[24px] xl:w-[24px]"
                />
              </div>
            ))}
          </div>
        </div>

        {liveDemo && (
          <div className="mr-[10px] flex items-center gap-2 sm:mr-[25px]">
            <Link href={liveDemo}>
              <LinkIcon className="h-5 w-5 text-base" />
            </Link>
            <Link
              href={liveDemo}
              className="relative inline-block text-sm font-medium text-accent-dark before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-accent-dark before:transition-all before:duration-300 hover:before:w-full xl:text-xl"
            >
              Démo live
            </Link>
          </div>
        )}

        {sourceCode && (
          <div className="flex items-center gap-2">
            <Link href={sourceCode}>
              <Image
                src="/icons/github-mark.svg"
                width={22}
                height={22}
                alt="Voir le code"
              />
            </Link>
            <Link
              href={sourceCode}
              className="relative inline-block text-sm font-medium text-accent-dark before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-accent-dark before:transition-all before:duration-300 hover:before:w-full xl:text-xl"
            >
              Voir le code
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
