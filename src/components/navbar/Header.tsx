"use client";

import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";
import Link from "next/link";
import { useRef, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Props = {
  settings: Content.NavbarDocument;
};

export default function Header({ settings }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const container = useRef(null);
  // gsap.registerPlugin(useGSAP);
  // useGSAP(
  //   () => {
  //     const tl = gsap.timeline();
  //     tl.fromTo(".nav__left", { x: -200 }, { x: 0, duration: 1, opacity: 1 })
  //       .fromTo(
  //         ".nav__right__mobile",
  //         { scale: 0 },
  //         { scale: 1, duration: 1, opacity: 1 },
  //         0,
  //       )
  //       .fromTo(
  //         ".nav__right__desk",
  //         { x: 200 },
  //         { x: 0, duration: 1, opacity: 1 },
  //         0,
  //       );
  //   },
  //   { scope: container },
  // );
  return (
    <nav
      ref={container}
      className="px-4 py-4 md:px-6 md:py-6"
      aria-label="main"
    >
      <div className="mx-auto flex max-w-6xl justify-between py-2 font-medium text-white md:flex-row md:items-center">
        <div className="flex w-full items-center justify-between">
          <div className="md:hidden" />
          <div className="md:hidden" />

          <Link href="/" className="nav__left group relative ">
            <h1 className="text-2xl md:text-xl">Xalkomak</h1>
            <span className="absolute bottom-[-6px] left-1/2 h-0.5 w-0 bg-white transition-all duration-300 ease-out group-hover:left-0 group-hover:w-full"></span>
          </Link>
          <button
            type="button"
            className="nav__right__mobile block p-2 text-3xl text-white  md:hidden"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
          >
            <MdMenu />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
        {/* Mobile Nav */}
        <div
          className={clsx(
            "fixed bottom-0 left-0 right-0 top-0 z-40 flex h-full w-full flex-col items-end gap-4 bg-[#111111] pr-4 pt-14 opacity-80 transition-transform duration-300 ease-in-out md:hidden",
            isOpen ? "translate-x-0" : "translate-x-[100%]",
          )}
        >
          <button
            type="button"
            className="fixed right-4 top-4 mt-2 block p-2 text-3xl text-white md:hidden"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(false)}
          >
            <MdClose />
            <span className="sr-only">Close menu</span>

            <div className="fixed right-4 top-20 grid justify-items-end gap-8 p-2 text-3xl">
              {settings.data.navbar.map((item, index) => (
                <div key={index}>
                  <li key={index} className="group relative list-none">
                    <PrismicNextLink
                      className="text-2xl font-medium transition-colors group-hover:text-white"
                      field={item.link}
                    >
                      {item.label}
                    </PrismicNextLink>
                    <span className="absolute bottom-[-6px] left-1/2 h-0.5 w-0 bg-white transition-all duration-300 ease-out group-hover:left-0 group-hover:w-full"></span>
                  </li>
                </div>
              ))}
              {/* <li className="group relative list-none">
                <a
                  href="#contact"
                  className="text-2xl font-medium transition-colors group-hover:text-white"
                >
                  Contact
                </a>
                <span className="absolute bottom-[-6px] left-1/2 h-0.5 w-0 bg-white transition-all duration-300 ease-out group-hover:left-0 group-hover:w-full"></span>
              </li> */}
            </div>
          </button>
        </div>
        {/* Desktop Nav */}
        <ul className="nav__right__desk flex gap-4  md:flex">
          {settings.data.navbar
            .filter((item) => item.label !== "Home")
            .map((item, index) => (
              <li key={index} className="group relative">
                <PrismicNextLink
                  className="text-lg font-medium transition-colors group-hover:text-white"
                  field={item.link}
                >
                  {item.label}
                </PrismicNextLink>
                <span className="absolute bottom-[-6px] left-1/2 h-0.5 w-0 bg-white transition-all duration-300 ease-out group-hover:left-0 group-hover:w-full"></span>
              </li>
            ))}
          {/* <li className="group relative">
            <a
              href="#contact"
              className="text-lg font-medium transition-colors group-hover:text-white"
            >
              Contact
            </a>
            <span className="absolute bottom-[-6px] left-1/2 h-0.5 w-0 bg-white transition-all duration-300 ease-out group-hover:left-0 group-hover:w-full"></span>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
