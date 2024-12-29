"use client";

import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import clsx from "clsx";
import { PiLinkSimpleBreakLight, PiRocketLaunchFill } from "react-icons/pi";
import { IconDisplay } from "@/components/Icon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdOutlineQuestionMark } from "react-icons/md";

type IconName = "snx" | "snapshots" | "dawg" | "misc";

export type ShowcaseClientProps = {
  projectStudies: (Content.ProjectStudiesDocument | undefined)[];
  slice: Content.ShowcaseSlice;
};

const ShowcaseClient = ({ projectStudies, slice }: ShowcaseClientProps) => {
  const titleRef = useRef(null);
  // gsap.registerPlugin(useGSAP);
  // gsap.registerPlugin(ScrollTrigger);

  // gsap.fromTo(
  //   ".showcase__heading",
  //   {
  //     scrollTrigger: ".showcase__heading",
  //     x: 0,
  //     opacity: 1,
  //     duration: 1,
  //     ease: "ease-out",
  //   },
  //   {
  //     scrollTrigger: ".showcase__heading",
  //     x: -500,
  //     opacity: 1,
  //     duration: 1,
  //     ease: "ease-out",
  //   },
  // );

  return (
    <section
      className="container mx-auto flex w-full max-w-6xl flex-col items-center justify-start gap-3 px-4 py-16 text-white first:pt-10 md:px-6 md:py-20 lg:py-24"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        ref={titleRef}
        className="showcase__heading mb-8 flex flex-col items-center justify-center text-balance text-center text-6xl font-medium md:flex-row md:text-7xl"
      >
                <IconDisplay iconName={slice.primary.labelicon as IconName} iconSize={32} />

        {
          slice.primary.labelicon === "rocket" && (
            <>
            <PiRocketLaunchFill className="mb-4 md:mb-0 md:mr-4" />
            </>
          )
        }
        {
          slice.primary.labelicon === "qna" && (
            <>
            <MdOutlineQuestionMark className="mb-4 md:mb-0 md:mr-4" />
            </>
          )
        }
        <PrismicRichText field={slice.primary.heading} />
      </div>
      <div className="flex flex-col">
        {slice.primary.cards.map((item, index) => (
          <div
            key={index}
            className={clsx(
              "grid items-center gap-8 rounded-xl border border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:gap-0 lg:py-12",
              { "mb-4 md:mb-8": index !== slice.primary.cards.length - 1 },
            )}
          >
            <div className="flex flex-col">
              <div className="mt-6 flex items-center text-balance text-4xl font-normal text-white">
                <IconDisplay iconName={item.icon as IconName} iconSize={32} />
                <PrismicRichText field={item.buttontext} />
              </div>
              <div className="mt-4 text-2xl">
                <PrismicRichText field={item.subheading} />
              </div>
              <div className="mt-4 max-w-xl tracking-wide">
                <PrismicRichText field={item.body} />
              </div>
              {item.islinked && (
                <>
                  {item.usesecondarylink && (
                    <>
                      <PrismicNextLink
                        document={projectStudies[index]}
                        className="mt-4 flex text-white hover:underline"
                      >
                        Read more about&nbsp;
                        <PrismicRichText field={item.buttontext} />
                        &nbsp; &gt;
                      </PrismicNextLink>
                    </>)}
                  {item.useprimarylink && (
                    <PrismicNextLink
                      className="mt-6 flex max-w-fit items-center rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-md transition hover:border-white/30 hover:bg-white/20"
                      field={item.buttonlink}
                    >
                      <PiLinkSimpleBreakLight className="mr-3" size={20} /> Visit Site
                    </PrismicNextLink>
                  )}
                </>
              )}
            </div>
            <PrismicNextImage
              quality={100}
              field={item.image}
              alt=""
              fallback=""
              className={clsx(
                "rounded-xl opacity-90 shadow-2xl lg:col-span-2 lg:pt-0",
                item.isright
                  ? "lg:order-1 lg:translate-x-[10%]"
                  : "lg:-order-1 lg:translate-x-[-10%]",
              )}
              sizes="(max-width: 512px) 50vw, 30vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseClient;
