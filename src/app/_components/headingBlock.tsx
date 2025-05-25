import { ReactNode } from "react";

type HeadingBlockProps = {
  title: string | React.ReactNode;
  preTitle: string;
};

export default function HeadingBlock({ title, preTitle }: HeadingBlockProps) {
  return (
    <header className="my-12 flex flex-col items-center gap-2 px-6 text-center">
      <p className="text-base font-normal uppercase tracking-[.25em] text-bg-light">
        {preTitle}
      </p>
      <h2 className="text-3xl font-bold sm:text-5xl">{title}</h2>
    </header>
  );
}
