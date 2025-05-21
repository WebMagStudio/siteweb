import { ReactNode } from "react";

type HeadingBlockProps = {
  title: string | React.ReactNode;
  preTitle: string;
};

export default function HeadingBlock({ title, preTitle }: HeadingBlockProps) {
  return (
    <header className="flex flex-col items-center gap-2 my-12 text-center px-6">
      <p className="text-base font-normal uppercase text-bg-light tracking-[.25em]">
        {preTitle}
      </p>
      <h2 className="text-3xl font-bold sm:text-5xl">{title}</h2>
    </header>
  );
}
