import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

type BlogCardProps = {
  image: string;
  title: string;
  author: string;
  date: string;
  category: string;
  message: string | React.ReactNode;
  cta: string;
};

export default function BlogCard({
  image,
  title,
  author,
  date,
  category,
  message,
  cta,
}: BlogCardProps) {
  return (
    <article className="mx-6 my-6 flex min-h-[778px] max-w-[572px] flex-col justify-between rounded-3xl border border-stroke-article bg-gradient-to-br from-bg-gradient-dark-start to-bg-gradient-dark-end p-[24px] sm:p-[50px]">
      <div className="flex aspect-[370/218] h-[218px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-midnight bg-[url(/bg/bg-card.png)] bg-cover bg-center sm:aspect-[552/330] md:h-[330px] xl:max-w-[552px]">
        <Image
          src={image}
          width={450}
          height={320}
          alt=""
          className="relative top-12 max-h-[320px] rotate-3 rounded-lg object-cover sm:top-9"
        />
      </div>
      <h3 className="mb-4 mt-8 text-left text-xl font-bold sm:text-2xl">
        {title}
      </h3>
      <ul className="flex gap-2 text-[10px] font-medium">
        <li className="flex items-center">
          <Image
            className="mr-2"
            src="/icons/user.svg"
            alt={image}
            width={12}
            height={12}
          />
          {author}
        </li>
        <li className="flex items-center justify-center before:mr-2 before:content-['•']">
          <Image
            className="mr-2"
            src="/icons/calendar.svg"
            alt={image}
            width={12}
            height={12}
          />
          {date}
        </li>
        <li className="flex items-center justify-center before:mr-2 before:content-['•']">
          <Image
            className="mr-2"
            src="/icons/category.svg"
            alt={image}
            width={12}
            height={12}
          />
          {category}
        </li>
      </ul>
      <p className="py-6 text-base font-normal text-white sm:text-lg">
        {message}
      </p>

      <div className="mr-[10px] flex items-center gap-2 sm:mr-[25px]">
        <Link href="#">
          <Image
            className="mr-2"
            src="/icons/link.svg"
            alt={image}
            width={19}
            height={19}
          />
        </Link>
        <Link
          href="#"
          className="relative inline-block text-base font-medium text-purple-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-purple-300 before:transition-all before:duration-300 hover:before:w-full xl:text-xl"
        >
          {cta}
        </Link>
      </div>
    </article>
  );
}
