import CTAButton from "./ctaButton";

type CtaPropos = {
  title: string | React.ReactNode;
  textBanner: string | React.ReactNode;
  href: string;
  text: string;
  className?: string;
};

export default function CTABanner({
  title,
  textBanner,
  href,
  text,
  className = "",
}: CtaPropos) {
  return (
    <div className="mx-auto flex max-w-[720px] flex-col">
      <h4 className="py-6 text-center text-3xl font-bold text-white sm:py-10 sm:text-5xl">
        {title}
      </h4>
      <p className="font-regular pl-8 text-left text-base leading-[1.5] text-white sm:text-xl">
        {textBanner}
      </p>
      <CTAButton
        className="my-6 self-center text-base sm:my-10"
        href={href}
        text={text}
      />
    </div>
  );
}
