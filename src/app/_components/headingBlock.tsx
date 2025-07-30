import { ReactNode } from "react";

type HeadingBlockProps = {
  title: string | React.ReactNode;
  preTitle: string;
  className?: string;
};

export default function HeadingBlock({
  title,
  preTitle,
  className = "",
}: HeadingBlockProps) {
  return (
    <header
      className={`my-12 flex flex-col items-center gap-2 px-6 text-center ${className}`}
    >
      <p className="text-base font-normal uppercase tracking-[.25em] text-accent">
        {preTitle}
      </p>
      <h2 className="text-3xl font-bold sm:text-5xl">{title}</h2>
    </header>
  );
}
