"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { useRef } from "react";
import { PiHandWavingFill } from "react-icons/pi";
export default function Animated({ slice }: { slice: Content.HeroSlice }) {
  const container = useRef(null);
  // gsap.registerPlugin(useGSAP);

  // useGSAP(
  //   () => {
  //     const tl = gsap.timeline();
  //     tl.fromTo(
  //       ".hero__heading",
  //       { y: 50 },
  //       { y: 0, duration: 1, opacity: 1, delay: 1 },
  //     );
  //     tl.fromTo(".hero__body", { y: 25 }, { y: 0, duration: 1, opacity: 1 });
  //     tl.fromTo(
  //       ".hero__image",
  //       { scale: 0.2 },
  //       { scale: 1, duration: 1, opacity: 1 },
  //     );
  //   },
  //   { scope: container },
  // );

  // useGSAP(
  //   () => {
  //     const tl = gsap.timeline({
  //       repeat: -1,
  //       repeatDelay: 1,
  //       defaults: { ease: "power2.out" },
  //     });
  //     tl.to(".hero__svg", { rotate: 20, duration: 0.3 })
  //       .to(".hero__svg", { rotate: -20, duration: 0.3 })
  //       .to(".hero__svg", { rotate: 15, duration: 0.3 })
  //       .to(".hero__svg", { rotate: -15, duration: 0.3 })
  //       .to(".hero__svg", { rotate: 0, duration: 0.3 });
  //   },
  //   { scope: container },
  // );

  return (
    <div
      ref={container}
      className="container mx-auto flex max-w-5xl flex-col items-center justify-start gap-3 py-16"
    >
      <div className="hero__heading flex flex-col items-center justify-center text-balance text-center text-6xl font-medium md:flex-row md:text-7xl">
        <div className="hero__svg">
          <PiHandWavingFill className="mb-4 mx-4 md:mb-0" />
        </div>
        <PrismicRichText field={slice.primary.heading} />
        <div className="hero__svg">
          <PiHandWavingFill className="mb-4 mx-4 md:mb-0 hidden md:inline" />
        </div>
      </div>
      <div className="hero__body mx-auto mt-4 text-balance text-center text-2xl text-white">
        <PrismicRichText field={slice.primary.body} />
      </div>
      <div className="hero__image glass-container-pfp mt-8 w-fit">
        <div className="hero__border absolute inset-0 -z-10 rounded-full bg-[#fff]/75 blur-2xl filter" />
        <PrismicNextImage
          className="max-w-64 rounded-full"
          field={slice.primary.image}
          alt=""
          fallback=""
        />
      </div>
    </div>
  );
}
