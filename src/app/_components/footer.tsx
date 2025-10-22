import Link from "next/link";
import SocialIconLink from "./socialIconLink";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-accent-light via-accent to-accent-dark">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between px-4 py-12 text-sm text-white md:flex-row md:px-12 lg:px-4 xl:px-[0px]">
        <div className="flex flex-col items-center justify-between gap-4 md:items-start lg:flex-row lg:gap-12">
          <p className="text-center md:text-left">
            Copyright ©2025 Marine Magnin. Tous droits réservés.
          </p>
          <Link href="/mentions-legales" className="underline">Mentions légales</Link>
          <Link href="/politique-confidentialite" className="underline">Politique de confidentialité</Link>
          <div className="flex items-center mt-1 gap-1">
            <EnvelopeIcon className="h-4 w-4" />
            <p>contact@webmagstudio.fr</p>
          </div>
        </div>
        <div className="flex items-start justify-center py-6 md:items-center md:py-0">
          <a
            href="https://github.com/WebMagStudio"
            className="ml-6 mr-4 flex size-12 items-center justify-center rounded-xl border border-white bg-gradient-to-r from-accent to-accent-dark p-1.5 hover:shadow-xl"
          >
            <span className="sr-only">Github</span>
            <SocialIconLink
              src="/icons/iconGithub.svg"
              width={18}
              height={18}
              alt="Logo github"
              className="fill-blue-500"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/marine-magnin/"
            className="flex size-12 items-center justify-center rounded-xl border border-white bg-gradient-to-r from-accent to-accent-dark p-1.5 hover:shadow-xl"
          >
            <span className="sr-only">Linkedin</span>
            <SocialIconLink
              src="/icons/iconLinkedin.svg"
              width={18}
              height={18}
              alt="Logo linkedin"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
