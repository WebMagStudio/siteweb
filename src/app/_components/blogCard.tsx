import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogMeta } from "~/lib/blog";

import {
  UserIcon,
  CalendarIcon,
  TagIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";

// type BlogCardProps = {
//    slug: string;
//   image: string;
//   title: string;
//   author: string;
//   date: string;
//   category: string;
//   message: string | React.ReactNode;
//   cta: string;
// };

type Props = {
  post: BlogMeta[];
};

export default function BlogCard({ post }: Props) {
  return (
    <article className="mx-6 my-6 flex min-h-[778px] max-w-[572px] flex-col justify-between rounded-3xl border bg-[url(/bg/bg-card.png)] bg-cover bg-top p-[24px] shadow-md sm:p-[50px]">
      <Image
        src={post.image}
        width={450}
        height={320}
        alt=""
        className="rounded-lg object-cover"
      />
      <h3 className="mb-4 mt-8 text-left text-xl font-bold sm:text-2xl">
        {post.title}
      </h3>
      <ul className="flex gap-2 text-[10px] font-medium">
        <li className="flex items-center">
          <UserIcon className="mr-2 h-4 w-4 text-primary" />
          {post.author}
        </li>
        <li className="flex items-center justify-center before:mr-2 before:content-['•']">
          <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
          {post.date}
        </li>
        <li className="flex items-center justify-center before:mr-2 before:content-['•']">
          <TagIcon className="mr-2 h-4 w-4 text-primary" />
          {post.category}
        </li>
      </ul>
      <p className="py-6 text-base font-normal text-primary sm:text-lg">
        {post.message}
      </p>

      <div className="mr-[10px] flex items-center gap-2 sm:mr-[25px]">
        <Link href="#">
          <LinkIcon className="h-5 w-5 text-primary" />
        </Link>
        <Link
          href={`/blog/${post.slug}`}
          className="relative inline-block text-base font-medium text-accent before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-accent before:transition-all before:duration-300 hover:before:w-full xl:text-xl"
        >
          {post.cta}
        </Link>
      </div>
    </article>
  );
}
