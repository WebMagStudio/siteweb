import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";
import { PlusIcon } from "@heroicons/react/24/outline";

type ServiceCardProps = {
  title: string;
  description: string | React.ReactNode;
  cta: string;
  link: string;
  icon: string;
};

export default function ServiceCard({
  title,
  description,
  cta,
  link,
  icon,
}: ServiceCardProps) {
  return (
    <article className="relative mx-auto flex w-full flex-col justify-between gap-12 rounded-3xl border border-stroke-article bg-gradient-to-br from-bg-gradient-dark-start to-bg-gradient-dark-end p-6 sm:max-w-3xl lg:min-h-[675px] lg:max-w-[387px]">
      <PlusIcon className="absolute -left-4 -top-4 h-12 w-12 text-white opacity-20" />
      <PlusIcon className="absolute -right-4 -top-4 h-12 w-12 text-white opacity-20" />
      <PlusIcon className="absolute -bottom-4 -left-4 h-12 w-12 text-white opacity-20" />
      <PlusIcon className="absolute -bottom-4 -right-4 h-12 w-12 text-white opacity-20" />

      <div className="flex flex-col gap-4 lg:translate-y-[100px]">
        <header className="flex flex-col gap-4">
          <Image src={icon} width={27} height={27} alt="" />
          <h3 className="text-left text-2xl font-bold sm:text-3xl xl:max-w-64">
            {title}
          </h3>
        </header>
        <p className="text-base font-normal">{description}</p>
      </div>

      <div className="flex items-center gap-2">
        <Link href={link}>
          <Image src="/icons/link.svg" width={19} height={19} alt="" />
        </Link>
        <Link
          href={link}
          className="relative inline-block text-base font-medium text-purple-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-purple-300 before:transition-all before:duration-300 hover:before:w-full"
        >
          {cta}
        </Link>
      </div>
    </article>
  );
}
