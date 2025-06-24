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

// export default function CTABanner({
//   title,
//   textBanner,
//   href,
//   text,
//   className = "",
// }: CtaPropos) {
//   return (
//     <div className="relative mx-auto max-w-[720px] flex flex-col items-center justify-center py-20 px-4 bg-black overflow-hidden">
//             <div
//         className="absolute inset-0 -z-20"
//         style={{
//           backgroundImage: `
//             repeating-linear-gradient(to right, white 1px, transparent 1px 64px),
//             repeating-linear-gradient(to bottom, white 1px, transparent 1px 64px)
//           `,
//           backgroundSize: '64px 64px',
//           backgroundColor: 'black',
//           opacity: 0.3,
//         }}
//       />

//       {/* Tâches lumineuses */}
//       <div className="absolute top-[20%] left-[15%] w-12 h-20 bg-gradient-to-b from-white/70 to-transparent opacity-20 -z-10" />
//       <div className="absolute top-[10%] left-[50%] w-12 h-20 bg-gradient-to-b from-white/70 to-transparent opacity-20 -z-10" />
//       <div className="absolute top-[35%] left-[35%] w-12 h-20 bg-gradient-to-b from-white/70 to-transparent opacity-20 -z-10" />
//       <div className="absolute top-[50%] left-[65%] w-12 h-20 bg-gradient-to-b from-white/70 to-transparent opacity-20 -z-10" />
//       <div className="absolute top-[65%] left-[30%] w-12 h-20 bg-gradient-to-b from-white/70 to-transparent opacity-20 -z-10" />

//       {/* Tu peux ajouter des "taches" en plus ici avec d'autres div */}
//       <h4 className="py-10 text-center text-5xl font-bold text-white">
//         {title}
//       </h4>
//       <p className="font-regular text-left text-xl text-white">{textBanner}</p>
//       <CTAButton
//         className="self-center my-10 text-base"
//         href={href}
//         text={text}
//       />
//     </div>
//   );
// }
