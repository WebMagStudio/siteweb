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
      className={`flex gap-2 rounded-xl bg-gradient-to-r from-purple-300 to-purple-600 px-10 py-6 text-lg font-medium text-white transition-all duration-300 hover:from-fushia hover:to-amber`}
    >
      {iconLeft && <span className="flex items-center">{iconLeft}</span>}
      {text}
      {iconRight && <span className="flex items-center">{iconRight}</span>}
    </Link>
  );
}
