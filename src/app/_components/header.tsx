"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { useState } from "react";
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
  const pathname = usePathname();
  const isServicesRoute = pathname.startsWith("/services/");

  return (
    <header className="bg-navy-950">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-12 lg:px-[100px]"
      >
        <div className="flex lg:flex-1">
          <a
            href="/"
            className="-m-1.5 rounded-xl border border-indigo-400-16 bg-gradient-to-br from-blue-950 to-blue-900 p-1.5"
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
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-200"
          >
            <span className="sr-only">Ouvrir le menu</span>
            <Bars3Icon aria-hidden="true" className="size-6 hover:text-white" />
          </button>
        </div>
        <PopoverGroup className="hidden rounded-2xl border border-indigo-400-16 bg-gradient-to-br from-blue-950 to-blue-900 px-12 py-6 lg:flex lg:gap-x-12">
          <Popover className="relative">
            {({ open }) => (
              <>
                <PopoverButton className="flex items-center gap-x-1 text-base/6 font-medium text-slate-200 hover:text-white">
                  <Link
                    className={`link ${pathname === "/services" ? "active text-white" : ""} link-underline-circle text-base font-medium text-slate-200 hover:text-white`}
                    href="/services"
                  >
                    Services
                  </Link>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className={`mb-[7px] size-5 flex-none text-gray-400 transition-transform duration-200 hover:text-white ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-blue-950 to-blue-900 shadow-lg ring-1 ring-gray-900/5 transition"
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
            className={`link ${pathname === "/realisations" ? "active text-white" : ""} link-underline-circle text-base font-medium text-slate-200 hover:text-white`}
            href="/realisations"
          >
            Réalisations
          </Link>

          <Link
            className={`link ${pathname === "/apropos" ? "active text-white" : ""} link-underline-circle text-base font-medium text-slate-200 hover:text-white`}
            href="/apropos"
          >
            À propos
          </Link>

          <Link
            className={`link ${pathname === "/blog" ? "active text-white" : ""} link-underline-circle text-base font-medium text-slate-200 hover:text-white`}
            href="/blog"
          >
            Blog
          </Link>

          <Link
            className={`link ${pathname === "/contact" ? "active text-white" : ""} link-underline-circle text-base font-medium text-slate-200 hover:text-white`}
            href="/contact"
          >
            Contact
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://github.com/Magma73"
            className="flex items-center -m-1.5 size-12 rounded-xl border border-indigo-400-16 bg-gradient-to-br from-blue-950 to-blue-900 p-1.5"
          >
            <span className="sr-only">Github</span>
            <SocialIconLink
              src="/iconGithub.svg"
              width={18}
              height={18}
              alt="Logo github"
            />
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-navy-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
