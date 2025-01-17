"use client";

import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";
import React, { useEffect, useRef } from "react";
import { PiFlaskFill } from "react-icons/pi";
import gsap from "gsap";
import { PrismicRichText } from "@prismicio/react";

export default function Animated({ slice }: { slice: Content.BentoSlice }) {
  const container = useRef(null);

  // useEffect(() => {
  //   const tl = gsap.timeline();

  //   tl.fromTo(
  //     ".bento__heading",
  //     { y: 50, opacity: 0 },
  //     { y: 0, opacity: 1, duration: 1, delay: 0.5 },
  //   );

  //   tl.fromTo(
  //     ".bento__card",
  //     { scale: 0.8, opacity: 0, visibility: "hidden" },
  //     {
  //       scale: 1,
  //       opacity: 1,
  //       visibility: "visible",
  //       duration: 0.8,
  //       stagger: 0.2,
  //       ease: "power2.out",
  //     },
  //     "<0.5",
  //   );
  // }, []);

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     repeat: -1,
  //     repeatDelay: 1,
  //     defaults: { ease: "power2.out" },
  //   });
  //   tl.to(".bento__svg", { rotate: 20, duration: 0.3 })
  //     .to(".bento__svg", { rotate: -20, duration: 0.3 })
  //     .to(".bento__svg", { rotate: 15, duration: 0.3 })
  //     .to(".bento__svg", { rotate: -15, duration: 0.3 })
  //     .to(".bento__svg", { rotate: 0, duration: 0.3 });
  // }, []);

  return (
    <div ref={container}>
      <div className="flex flex-col items-center justify-center text-balance text-center text-6xl font-medium md:flex-row md:text-7xl">
        <div className="bento__heading flex flex-col items-center justify-center text-balance text-center text-6xl font-medium md:flex-row md:text-7xl">
          {/* <div className="bento__svg">
            <PiFlaskFill className="mb-4 md:mb-0 md:mr-4" />
          </div> */}
          <PrismicRichText
            field={slice.primary.heading}
            components={{
              heading2: ({ children }) => (
                <h2 className="text-balance text-center text-5xl font-medium md:text-7xl">
                  {children}
                </h2>
              ),
              em: ({ children }) => (
                <em className="bg-gradient-to-b from-[#000] to-[#fff] bg-clip-text not-italic text-transparent">
                  {children}
                </em>
              ),
            }}
          />
        </div>
      </div>

      <div className="mb-8 mt-4 flex flex-col items-center text-balance text-center text-xl font-medium md:text-xl">
        <PrismicRichText field={slice.primary.body} />
      </div>

      {slice.variation === "default" && (
        <>
          <div className="m-6 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-8">
            {slice.primary.card.map((item, index) =>
              item.rendertile && ( // Check the boolean condition here
                <PrismicNextLink
                  field={item.project_link}
                  className={clsx(
                    "bento__card glass-container border-2 border-[#521b7c] row-span-3 grid grid-rows-subgrid gap-4 rounded-lg p-4 not-italic text-white",
                    item.wide ? "md:col-span-2" : "md:col-span-1",
                  )}
                  key={index}
                >
                  <div className="text-2xl text-white hover:underline font-semibold">
                    <PrismicRichText field={item.title} />
                  </div>
                  <div className="max-w-md text-white">
                    <PrismicRichText field={item.body} />
                  </div>
                  <div className="flex items-center gap-4">
                    <PrismicNextImage
                      field={item.image_a}
                      className="mx-auto max-h-36 rounded-md w-auto my-1"
                      alt=""
                      fallback=""
                    />
                    {item.wide && (
                      <PrismicNextImage
                        field={item.image_b}
                        className="hidden mx-auto max-h-36 w-auto rounded-md md:block"
                        alt=""
                        fallback=""
                      />
                    )}
                  </div>
                </PrismicNextLink>
              )
            )}
          </div>
        </>

      )

      }
      {slice.variation === "iconOnTop" && (
        <div className="m-6 grid max-w-5xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
          {slice.primary.card.map((item, index) =>
            item.rendertile && (

              <PrismicNextLink
                field={item.pagelink}
                className={clsx(
                  "bento__card glass-container row-span-3 border-2 border-[#521b7c] grid grid-rows-subgrid md:col-span-1 gap-4 rounded-lg p-4 not-italic text-white ",
                )}
                key={index}
              >
                <div className="flex items-center gap-4">
                  <PrismicNextImage
                    field={item.image}
                    className="mx-auto max-h-16 w-auto my-4"
                    alt=""
                    fallback=""
                    //sizes="(max-width: 128px) 50vw, 30vw"
                  />
                </div>
                <div className="text-2xl text-white text-center underline font-semibold">
                  <PrismicRichText field={item.title} />
                </div>
                <div className="max-w-md text-white text-center">
                  <PrismicRichText field={item.body} />
                </div>

              </PrismicNextLink>
            )
          )}
        </div>
      )}
      {/* <div className="m-6 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
        {slice.primary.card.map((item, index) =>
          item.isnothidden && ( // Check the boolean condition here
            <PrismicNextLink
              field={item.project_link}
              className={clsx(
                "bento__card glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg p-4 not-italic text-white",
                item.wide ? "md:col-span-2" : "md:col-span-1",
              )}
              key={index}
            >
              <div className="text-2xl text-white">
                <PrismicRichText field={item.title} />
              </div>
              <div className="max-w-md text-white">
                <PrismicRichText field={item.body} />
              </div>
              <div className="flex items-center gap-4">
                <PrismicNextImage
                  field={item.image_a}
                  className="mx-auto max-h-16 w-auto my-4"
                  alt=""
                  fallback=""
                  sizes="(max-width: 64px) 50vw, 30vw"
                />
                {item.wide && (
                  <PrismicNextImage
                    field={item.image_b}
                    className="hidden max-h-36 w-auto md:block"
                    alt=""
                    fallback=""
                  />
                )}
              </div>
            </PrismicNextLink>
          )
        )}
      </div> */}

    </div>
  );
}
