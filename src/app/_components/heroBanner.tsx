import CTAButton from "./ctaButton";
import type { ReactNode } from "react";

type HeroBannerProps = {
  title: string | React.ReactNode;
  text?: string | React.ReactNode;
  button?: {
    text: string | ReactNode;
    href: string;
    iconLeft?: ReactNode;
  };
  className?: string;
};

export default function HeroBanner({ title, text, button, className = "" }: HeroBannerProps) {
  return (
    <div className={`mx-auto flex items-center justify-center gap-12 px-4 md:w-4/5 md:px-2 lg:w-2/3 ${className}`}>      <div className="flex flex-col items-start gap-12">
      <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
        {title}
      </h1>
      <p className="pb-8 text-center text-primary sm:text-2xl">{text}</p>
      {button && (
        <div className="group flex w-full justify-center">
          <CTAButton
            href={button.href}
            text={button.text}
            iconLeft={button.iconLeft}
            className="mb-10 text-lg transition-transform duration-300 ease-in-out group-hover:animate-float"
          />
        </div>
      )}
    </div>
    </div>
  );
}
