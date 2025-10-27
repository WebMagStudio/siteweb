import type { ReactNode } from "react";

type TestimonialCardProps = {
  firstName: string;
  lastName: string;
  role: string | ReactNode;
  society: string;
  message: string | ReactNode;
};

export default function TestimonialCard({
  firstName,
  lastName,
  role,
  society,
  message,
}: TestimonialCardProps) {
  return (
    <article className="mx-auto max-w-[910px] rounded-3xl border-2 border-white bg-white/10 backdrop-blur-xl">
      <div className="w-full rounded-3xl p-[24px] sm:p-[50px]">
        <blockquote className="font-regular mb-[24px] text-base text-white sm:mb-[50px] sm:text-xl">
          &quot;{message}&quot;
        </blockquote>
        <p className="text-base font-semibold text-white sm:text-lg">
          {firstName} {lastName}
        </p>
        <p className="font-regular text-sm text-slate-200">
          {role}
          {society}
        </p>
      </div>
    </article>
  );
}
