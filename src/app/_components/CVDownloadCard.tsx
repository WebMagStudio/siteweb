import Image from "next/image";
import CTAButton from "./ctaButton";

export default function CVDownloadCard() {
  return (
    <div className="relative flex min-h-[253px] max-w-[1240px] flex-wrap items-center justify-center overflow-hidden rounded-3xl border bg-[url(/bg/bg-card.png)] bg-cover p-[24px] shadow-md sm:p-[50px] md:justify-between lg:p-[66px]">
      {/* <div className="pointer-events-none absolute -top-[94px] -right-[16px] h-48 w-48 rounded-full bg-gradient-to-r from-accent-light via-accent to-secondary opacity-50 blur-3xl z-0" /> */}
      <div className="pr-4">
        <p className="pb-6 text-xl font-semibold text-primary sm:text-2xl md:text-3xl">
          CV Marine Magnin Développeur Front-End
        </p>
        <p className="text-md pb-6 font-normal text-primary md:text-xl">
          Besoin d'en savoir plus sur mon parcours, téléchargez mon CV en ligne.
        </p>
      </div>

      <div className="">
        <CTAButton
          text="Télécharger mon CV"
          href="/doc/CV Marine Magnin.pdf"
          iconLeft={
            <Image src="/icons/download.svg" width={12} height={12} alt="" />
          }
          className="!rounded-lg !p-4 text-sm"
        />
      </div>
    </div>
  );
}
