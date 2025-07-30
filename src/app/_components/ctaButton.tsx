import Link from "next/link";

type CtaPropos = {
  href: string;
  text: string | React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
};

export default function CTAButton({
  text,
  href,
  iconLeft,
  iconRight,
  className = "",
}: CtaPropos) {
  return (
    <Link
      href={href}
      className={`text-md inline-flex w-fit gap-2 rounded-xl bg-gradient-to-r from-[#003249] via-[#6A497A] to-[#832161] px-8 py-4 text-center font-medium text-white transition-all duration-700 ease-in-out hover:from-[#D81159] hover:to-[#FFBC42] hover:shadow-lg sm:px-10 sm:py-6 sm:text-lg ${className}`}
    >
      {iconLeft && <span className="flex items-center">{iconLeft}</span>}
      {text}
      {iconRight && <span className="flex items-center">{iconRight}</span>}
    </Link>
  );
}
