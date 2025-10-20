"use client";

import Link from "next/link";

import { useState } from "react";
import { useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { Comfortaa } from "next/font/google";

import Logo from "./logo";
import SocialIconLink from "./socialIconLink";

import Image from "next/image";

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: "swap",
});

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    // Fonction appelée à chaque changement de hash
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    // On met le hash initial au chargement
    setActiveHash(window.location.hash);

    // On écoute les changements de hash
    window.addEventListener("hashchange", handleHashChange);

    // Nettoyage de l'écouteur
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <header className="mx-3 mt-3 rounded-t-3xl bg-gradient-to-r from-[#91EAE4] via-[#86A8E7] to-[#7F7FD5]">
      <nav
        aria-label="Global"
        className="max-[1440px] mx-auto flex items-center justify-between px-6 py-12 lg:px-[48px] xl:px-[100px]"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <div className="flex items-center gap-6">
            <a
              href="/"
            >
              <span className="sr-only">WebMagStudio</span>
              {/* <div className="relative w-[120px] h-[120px] rounded-xl bg-white p-2 ">
                <Image
                  src="/logo4.png"
                  alt="Logo Marine Magnin"
                  fill
                  sizes="max-width: 120px"
                  className="object-contain p-2"
                />
              </div> */}
              <div className="relative w-[124px] h-[120px] rounded-xl bg-white p-2 ">
                <Image
                  src="/logo3(2).png"
                  alt="Logo Marine Magnin"
                  fill
                  sizes="max-width: 124px"
                  className="object-contain p-2"
                />
              </div>
            </a>
            {/* <a href="/" className={`${comfortaa.className} font-bold text-primary`}>
              WebMagStudio
            </a> */}
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Ouvrir le menu</span>
            <Bars3Icon
              aria-hidden="true"
              className="size-6 text-white hover:text-primary"
            />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden px-12 py-6 lg:flex lg:gap-x-8 xl:gap-x-12">
          <Link
            className={`link ${activeHash === "services" ? "active link-underline-circle text-primary" : "text-white"} link-underline-circle text-base font-medium hover:text-primary`}
            href="#services"
            onClick={() => setActiveHash("services")}
          >
            Services
          </Link>

          <Link
            className={`link ${activeHash === "realisations" ? "active text-primary" : "text-white"} link-underline-circle text-base font-medium hover:text-primary`}
            href="#realisations"
            onClick={() => setActiveHash("realisations")}
          >
            Réalisations
          </Link>

          <Link
            className={`link ${activeHash === "apropos" ? "active text-primary" : "text-white"} link-underline-circle text-base font-medium hover:text-primary`}
            href="#apropos"
            onClick={() => setActiveHash("apropos")}
          >
            À propos
          </Link>

          <Link
            className={`link ${activeHash === "contact" ? "active text-primary" : "text-white"} link-underline-circle text-base font-medium hover:text-primary`}
            href="#contact"
            onClick={() => setActiveHash("contact")}
          >
            Contact
          </Link>
        </div>

        {/* Social links */}
        <div className="hidden items-center gap-2 lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://github.com/Magma73"
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
      </nav>

      {/* Mobile menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gradient-to-r from-accent-light via-accent to-accent-dark px-6 py-6 shadow-md sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="-m-1.5 rounded-xl bg-white p-1.5"
            >
              {/* <span className="sr-only">M&M</span>
              <Logo
                src="/logo4.png"
                width={73}
                height={66}
                alt="Logo Marine Magnin"
              /> */}
              <span className="sr-only">WebMagStudio</span>
              {/* <div className="relative w-[73px] h-[73px]">
                <Image
                  src="/logo4.png"
                  alt="Logo Marine Magnin"
                  fill
                  sizes="max-width: 73px"
                  className="object-contain"
                />
              </div> */}
              <div className="relative w-[75px] h-[75px]">
                <Image
                  src="/logo3(2).png"
                  alt="Logo Marine Magnin"
                  fill
                  sizes="max-width: 75px"
                  className="object-contain"
                />
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white hover:text-base"
            >
              <span className="sr-only">Fermer le menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  className={`link ${activeHash === "services" ? "active bg-primary text-white" : "text-primary"} -mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium hover:bg-primary hover:text-white`}
                  href="#services"
                  onClick={() => setActiveHash("services")}
                >
                  Services
                </Link>

                <Link
                  className={`link ${activeHash === "realisations" ? "active bg-primary text-white" : "text-primary"} -mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium hover:bg-primary hover:text-white`}
                  href="#realisations"
                  onClick={() => setActiveHash("realisations")}
                >
                  Réalisations
                </Link>

                <Link
                  className={`link ${activeHash === "apropos" ? "active bg-primary text-white" : "text-primary"} hover:bg-primary -mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium hover:text-white`}
                  href="#apropos"
                  onClick={() => setActiveHash("apropos")}
                >
                  À propos
                </Link>

                <Link
                  className={`link ${activeHash === "contact" ? "active bg-primary text-white" : "text-primary"} -mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium hover:bg-primary hover:text-white`}
                  href="#contact"
                  onClick={() => setActiveHash("contact")}
                >
                  Contact
                </Link>

                <div className="flex justify-start gap-2">
                  <a
                    href="https://github.com/Magma73"
                    className="flex size-12 items-center justify-center rounded-xl border border-white bg-gradient-to-r from-accent to-accent-dark p-1.5 hover:shadow-xl"
                  >
                    <span className="sr-only">Github</span>
                    <SocialIconLink
                      src="/icons/iconGithub.svg"
                      width={18}
                      height={18}
                      alt="Logo github"
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
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
