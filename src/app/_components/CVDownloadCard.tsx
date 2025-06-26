import Image from "next/image";
import CTAButton from "./ctaButton";

export default function CVDownloadCard() {
  return (
    <div className="flex min-h-[253px] max-w-[1240px] flex-wrap items-center justify-center md:justify-between rounded-3xl border border-stroke-article bg-gradient-to-r from-bg-gradient-dark-start to-bg-gradient-dark-end p-[24px] sm:p-[50px] lg:p-[66px]">
      <div className="pr-4">
        <p className="pb-6 text-xl sm:text-2xl md:text-3xl font-semibold text-white">
          CV Marine Magnin Développeur Front-End
        </p>
        <p className="pb-6 text-md md:text-xl font-normal text-white">
          Besoin d'en savoir plus sur mon parcours, télécharge mon CV en ligne.
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
