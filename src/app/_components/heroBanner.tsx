import CTAButton from "./ctaButton";
import { ReactNode } from "react";

type HeroBannerProps = {
  title: string | React.ReactNode;
  text: string | React.ReactNode;
  button?: {
    text: string | ReactNode;
    href: string;
    iconLeft?: ReactNode;
  };
};

export default function HeroBanner({ title, text, button }: HeroBannerProps) {
  return (
    <section className="flex items-center justify-center gap-12 px-4 md:w-4/5 md:px-2 lg:w-2/3">
      <div className="flex flex-col items-start gap-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
          {title}
        </h1>
        <p className="text-left sm:text-2xl">{text}</p>
        {button && (
          <div className="flex w-full justify-center">
            <CTAButton
              href={button.href}
              text={button.text}
              iconLeft={button.iconLeft}
              className="text-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
}
