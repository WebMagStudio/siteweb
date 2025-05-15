"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { useState } from "react";
import { useEffect } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import Logo from "./logo";
import SocialIconLink from "./socialIconLink";

const services = [
  {
    name: "Sites web et app",
    description: "Get a better understanding of your traffic",
    href: "/services/sites-web-et-app",
    icon: ChartPieIcon,
  },
  {
    name: "Stratégie digitale",
    description: "Speak directly to your customers",
    href: "/services/strategie-digitale",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Maintenance",
    description: "Your customers’ data will be safe and secure",
    href: "/services/maintenance",
    icon: FingerPrintIcon,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();
  const isServicesRoute = pathname.startsWith("/services/");

  // useEffect(() => {
  //   const theme = localStorage.getItem("theme");
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   }
  // }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const theme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      if (theme === "dark" || (!theme && prefersDark)) {
        document.documentElement.classList.add("dark");
        setIsDark(true);
      } else {
        document.documentElement.classList.remove("dark");
        setIsDark(false);
      }
    }
  }, []);

  // const toggleTheme = () => {
  //   if (document.documentElement.classList.contains("dark")) {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //   } else {
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //   }
  // };

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <header className="bg-bg-light dark:bg-slate-950">
      <nav
        aria-label="Global"
        className="max-[1440px] mx-auto flex items-center justify-between p-12 lg:px-[48px] xl:px-[100px]"
      >
        <div className="flex lg:flex-1">
          <a
            href="/"
            className="-m-1.5 p-1.5 rounded-xl bg-bg-light-menu from-bg-gradient-dark-start to-bg-gradient-dark-end dark:border dark:border-indigo-400-16 dark:bg-gradient-to-br"
          >
            <span className="sr-only">M&M</span>
            <Logo
              src="/logo.png"
              width={73}
              height={66}
              alt="Logo Marine Magnin"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="text-light -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 dark:text-slate-200"
          >
            <span className="sr-only">Ouvrir le menu</span>
            <Bars3Icon aria-hidden="true" className="size-6 hover:text-white" />
          </button>
        </div>
        <PopoverGroup className="hidden rounded-2xl border border-indigo-400-16 bg-bg-light-menu from-bg-gradient-dark-start to-bg-gradient-dark-end px-12 py-6 lg:flex lg:gap-x-8 xl:gap-x-12 dark:bg-gradient-to-br">
          <Popover className="relative">
            {({ open }) => (
              <>
                <PopoverButton className="text-light flex items-center gap-x-1 text-base/6 font-medium hover:text-white dark:text-slate-200">
                  <Link
                    className={`link ${pathname === "/services" ? "active text-white" : ""} link-underline-circle text-light text-base font-medium text-bg-light dark:text-slate-200 hover:text-white`}
                    href="/services"
                  >
                    Services
                  </Link>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className={`mb-[7px] size-5 flex-none text-bg-light dark:text-slate-200 transition-transform duration-200 hover:text-white ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-bg-gradient-dark-start to-bg-gradient-dark-end shadow-lg ring-1 ring-gray-900/5 transition"
                >
                  <div className="p-4">
                    {services.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white hover:text-navy-950"
                      >
                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-purple-600">
                          <item.icon
                            aria-hidden="true"
                            className="size-6 text-slate-200 group-hover:text-white"
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-medium text-slate-200 hover:text-navy-950"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-slate-200 group-hover:text-navy-950">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>

          <Link
            className={`link ${pathname === "/realisations" ? "active text-white" : ""} link-underline-circle text-base font-medium text-bg-light dark:text-slate-200 hover:text-white`}
            href="/realisations"
          >
            Réalisations
          </Link>

          <Link
            className={`link ${pathname === "/apropos" ? "active text-white" : ""} link-underline-circle text-base font-medium text-bg-light dark:text-slate-200 hover:text-white`}
            href="/apropos"
          >
            À propos
          </Link>

          <Link
            className={`link ${pathname === "/blog" ? "active text-white" : ""} link-underline-circle text-base font-medium text-bg-light dark:text-slate-200 hover:text-white`}
            href="/blog"
          >
            Blog
          </Link>

          <Link
            className={`link ${pathname === "/contact" ? "active text-white" : ""} link-underline-circle text-base font-medium text-bg-light dark:text-slate-200 hover:text-white`}
            href="/contact"
          >
            Contact
          </Link>
        </PopoverGroup>
        <div className="hidden items-center gap-2 lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://github.com/Magma73"
            className="from-bg-white to-bg-white ml-6 mr-4  p-1.5 flex size-12 items-center justify-center rounded-xl border border-indigo-400-16 bg-bg-light-menu from-bg-gradient-dark-start to-bg-gradient-dark-end hover:shadow-xl hover:dark:shadow-none dark:bg-gradient-to-br dark:hover:bg-gradient-to-br hover:dark:border-none"
          >
            <span className="sr-only">Github</span>
            <SocialIconLink
              src="/iconGithub.svg"
              width={18}
              height={18}
              alt="Logo github"
              className="fill-blue-500"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/marine-magnin/"
            className="flex size-12 p-1.5 items-center justify-center rounded-xl border border-indigo-400-16 bg-bg-light-menu from-bg-gradient-dark-start to-bg-gradient-dark-end hover:shadow-xl hover:dark:shadow-none dark:bg-gradient-to-br hover:dark:border-none"
          >
            <span className="sr-only">Linkedin</span>
            <SocialIconLink
              src="/iconLinkedin.svg"
              width={18}
              height={18}
              alt="Logo linkedin"
            />
          </a>

          <button
            onClick={toggleTheme}
            className="ml-4 flex size-12 items-center justify-center transition-transform duration-300 hover:rotate-180"
          >
            <SocialIconLink
              src={isDark ? "/sun.svg" : "/moon.svg"}
              width={24}
              height={24}
              alt={isDark ? "Thème clair" : "Thème sombre"}
            />
          </button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-bg-light px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-navy-950">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">M&M</span>
              <Logo
                src="/logo.png"
                width={73}
                height={66}
                alt="Logo Marine Magnin"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-slate-200"
            >
              <span className="sr-only">Fermer le menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure
                  as="div"
                  className="-mx-3"
                  defaultOpen={isServicesRoute}
                >
                  {({ open }) => (
                    <div>
                      <DisclosureButton
                        className="group block flex items-center gap-2 rounded-lg px-3 py-2 text-base text-base/7 font-medium text-slate-200 hover:bg-white hover:text-navy-950"
                        // onClick={(e) => {
                        //   // Empêche la navigation si le menu est fermé (on veut juste l'ouvrir)
                        //   if (!open) {
                        //     e.preventDefault();
                        //   }
                        //   // Sinon, laisser la navigation se faire (si tu veux ça)
                        // }}
                        as={Link}
                        href="/services"
                      >
                        Services
                        <ChevronDownIcon
                          className={`size-5 flex-none text-slate-200 transition-transform duration-200 hover:text-navy-950 ${
                            open ? "rotate-180" : ""
                          }`}
                        />
                      </DisclosureButton>

                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...services].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={`block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-medium ${pathname === item.href ? "bg-white text-navy-950" : "text-slate-200 hover:bg-white hover:text-navy-950"}`}
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </div>
                  )}
                </Disclosure>

                <Link
                  className={`link ${pathname === "/realisations" ? "active bg-white text-navy-950" : "text-slate-200"} -mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium hover:bg-white hover:text-navy-950`}
                  href="/realisations"
                >
                  Réalisations
                </Link>

                <Link
                  className={`link ${pathname === "/apropos" ? "active bg-white text-navy-950" : "text-slate-200"} -mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium hover:bg-white hover:text-navy-950`}
                  href="/apropos"
                >
                  À propos
                </Link>

                <Link
                  className={`link ${pathname === "/blog" ? "active bg-white text-navy-950" : "text-slate-200"} -mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium hover:bg-white hover:text-navy-950`}
                  href="/blog"
                >
                  Blog
                </Link>

                <Link
                  className={`link ${pathname === "/contact" ? "active bg-white text-navy-950" : "text-slate-200"} -mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium hover:bg-white hover:text-navy-950`}
                  href="/contact"
                >
                  Contact
                </Link>

                <div className="flex flex-col items-start gap-2">
                  <div className="flex justify-around">
                    <a
                      href="https://github.com/Magma73"
                      className="mr-2 flex size-12 items-center justify-center rounded-xl border border-indigo-400-16 bg-gradient-to-br from-bg-gradient-dark-start to-bg-gradient-dark-end p-1.5"
                    >
                      <span className="sr-only">Github</span>
                      <SocialIconLink
                        src="/iconGithub.svg"
                        width={18}
                        height={18}
                        alt="Logo github"
                      />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/marine-magnin/"
                      className="flex size-12 items-center justify-center rounded-xl border border-indigo-400-16 bg-gradient-to-br from-bg-gradient-dark-start to-bg-gradient-dark-end p-1.5"
                    >
                      <span className="sr-only">Linkedin</span>
                      <SocialIconLink
                        src="/iconLinkedin.svg"
                        width={18}
                        height={18}
                        alt="Logo linkedin"
                      />
                    </a>
                  </div>

                  <div>
                    <button
                      onClick={toggleTheme}
                      className="flex size-12 items-center justify-center"
                    >
                      <SocialIconLink
                        src={isDark ? "/sun.svg" : "/moon.svg"}
                        width={24}
                        height={24}
                        alt={isDark ? "Thème clair" : "Thème sombre"}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
