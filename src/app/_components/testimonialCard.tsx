import { ReactNode } from "react";

type TestimonialCardProps = {
  firstName: string;
  lastName: string;
  role: string;
  society: string;
  message: string | React.ReactNode;
};

export default function TestimonialCard({
  firstName,
  lastName,
  role,
  society,
  message,
}: TestimonialCardProps) {
  return (
    <article
      // className="mx-auto max-w-[910px] rounded-3xl border border-stroke-article bg-gradient-to-br from-bg-gradient-dark-start to-bg-gradient-dark-end p-[24px] sm:p-[50px]"
      className="mx-auto max-w-[910px] rounded-3xl border border-stroke-article bg-gradient-to-br from-bg-gradient-dark-start to-bg-gradient-dark-end p-[24px] sm:p-[50px]"

      //     className="
      //   min-w-[80%] sm:min-w-[400px] max-w-[500px]
      //   flex-shrink-0
      //   p-6 rounded-2xl text-white
      //   bg-gradient-to-br from-bg-gradient-dark-start to-bg-gradient-dark-end
      // "
    >
      <blockquote className="font-regular mb-[24px] text-base text-white sm:mb-[50px] sm:text-xl">
        "{message}"
      </blockquote>
      <p className="text-base font-semibold text-white sm:text-lg">
        {firstName} {lastName}
      </p>
      <p className="font-regular text-sm text-slate-200">
        {role}
        {society}
      </p>
    </article>
  );
}
