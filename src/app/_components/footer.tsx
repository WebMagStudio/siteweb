import Link from "next/link";
import SocialIconLink from "./socialIconLink";

export default function Footer() {
  return (
    <footer className="mx-auto flex flex-col md:flex-row max-w-[1240px] items-center justify-between px-4 md:px-12 lg:px-4 py-12 text-sm text-white xl:px-[0px]">
      <div className="flex flex-col lg:flex-row items-center md:items-start justify-between gap-4 lg:gap-12">
        <p className="text-center md:text-left">Copyright ©2025 Marine Magnin. Tous droits réservés.</p>
        <Link href="#">Mentions légales</Link>
        <Link href="#">Politique de confidentialité</Link>
      </div>
      <div className="flex items-start md:items-center justify-center py-6 md:py-0">
        <a
          href="https://github.com/Magma73"
          className="from-bg-white to-bg-white ml-6 mr-4 flex size-12 items-center justify-center rounded-xl border border-indigo-400-16 bg-bg-light-menu from-bg-gradient-dark-start to-bg-gradient-dark-end p-1.5 hover:shadow-xl dark:bg-gradient-to-br hover:dark:border-none dark:hover:bg-gradient-to-br hover:dark:shadow-none"
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
          className="flex size-12 items-center justify-center rounded-xl border border-indigo-400-16 bg-bg-light-menu from-bg-gradient-dark-start to-bg-gradient-dark-end p-1.5 hover:shadow-xl dark:bg-gradient-to-br hover:dark:border-none hover:dark:shadow-none"
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
    </footer>
  );
}
