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
  sourceType?: "code" | "design" | "refonte";
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
  sourceType = "code",
  technologies,
  className = "",
}: ProjectCardProps) {
  // Configuration pour le bouton source (code ou design)
  const sourceConfig = {
    code: {
      icon: "/icons/github-mark.svg",
      label: "Voir le code",
      alt: "Voir le code source sur GitHub",
    },
    design: {
      icon: "/icons/brush.svg",
      label: "Voir le design",
      alt: "Voir le design",
    },
    refonte: {
      icon: "/icons/eye-fill.svg",
      label: "Voir le site",
      alt: "Voir le site en ligne",
    },
  };

  const config = sourceConfig[sourceType];

  return (
    <article
      className={`mx-auto flex w-full flex-col justify-between gap-6 rounded-3xl border bg-[url(/bg/bg-card.png)] bg-cover bg-left px-4 py-6 sm:max-w-3xl md:px-6 md:py-10 xl:aspect-[600/618] xl:min-h-[618px] xl:max-w-[600px]${className}`}
    >
      <div className="flex aspect-[370/218] h-[218px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-midnight bg-[url(/bg/bg-card.png)] bg-cover bg-center sm:aspect-[552/330] md:h-[330px] xl:max-w-[552px]">
        <img
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
          {/* <div className="mr-2 flex flex-wrap sm:space-x-1">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="relative flex w-[34px] h-[34px] items-center justify-center rounded-full border bg-bg-light shadow-xl xl:w-[50px] xl:h-[50px]"
              >
                {" "}
                <Image
                  src={tech.logo}
                  // width={15}
                  // height={15}
                  title={tech.name}
                  alt={tech.name}
                  fill
                  className="absolute object-contain max-w-[24px]"
                // className="xl:w-[24px] xl:h-auto"
                // sizes="xl:h-[24px] xl:w-[24px]"
                // className="object-contain xl:h-[24px] xl:w-[24px]"
                // className="object-contain"
                // style={{ height: "auto" }}
                />
              </div>
            ))}
          </div> */}
          {/* <div className="mr-2 flex flex-wrap sm:space-x-1">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-full border bg-bg-light shadow-xl
                 h-[34px] w-[34px] xl:h-[50px] xl:w-[50px]"
              >
                <div className="relative h-[60%] w-[60%] xl:h-[60%] xl:w-[60%]">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    title={tech.name}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1280px) 30px, 20px"
                  />
                </div>
              </div>
            ))}
          </div> */}
          <div className="mr-2 flex flex-wrap sm:space-x-1">
            {technologies.map((tech, i) => (
              <div
                key={i}
                className="flex items-center justify-center rounded-full border bg-bg-light shadow-xl
                 h-[34px] w-[34px] xl:h-[50px] xl:w-[50px]"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  title={tech.name}
                  className="object-contain h-[20px] w-[20px] xl:h-[30px] xl:w-[30px]"
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

        {/* Code source / Design */}
        {sourceCode && (
          <div className="flex items-center gap-2">
            <Link
              href={sourceCode}
              className="group flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={config.alt}
            >
              <Image
                src={config.icon}
                width={22}
                height={22}
                alt=""
                className="transition-opacity group-hover:opacity-80"
              />
              <span className="relative inline-block text-sm font-medium text-accent-dark before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-accent-dark before:transition-all before:duration-300 group-hover:before:w-full xl:text-xl">
                {config.label}
              </span>
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
