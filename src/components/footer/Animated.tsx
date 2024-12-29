"use client";
import clsx from "clsx";
import React from "react";
import { PiPuzzlePieceFill } from "react-icons/pi";
import { ContactDocument } from "../../../prismicio-types";
import { GoogleIcon } from "../../../public/svgs/GoogleIcon";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaReddit,
  FaTwitter,
} from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const iconObject = {
  Github: {
    icon: <FaGithub />,
    color: "#2B3137",
    link: "https://github.com/qarq90",
  },
  LinkedIn: {
    icon: <FaLinkedin />,
    color: "#0077B5",
    link: "https://www.linkedin.com/in/abdurrahman-qureshi-0b16932b3/",
  },
  Reddit: {
    icon: <FaReddit />,
    color: "#FF5700",
    link: "https://reddit.com/user/your-profile",
  },
  Instagram: {
    icon: <FaInstagram />,
    color: "#C13584",
    link: "https://www.instagram.com/qabdurrahman",
  },
  Gmail: {
    icon: <GoogleIcon />,
    color: "#c71610",
    link: "mailto:scythethroughtheheart05@example.com",
  },
  Twitter: {
    icon: <FaTwitter />,
    color: "#1DA1F2",
    link: "https://twitter.com/Abdurra05461066",
  },
};

export default function Animated({ contact }: { contact: ContactDocument }) {
  const icons = iconObject;

  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "power2.inOut" },
      });

      tl.to(".pulsing-logo", {
        keyframes: [
          {
            filter: "brightness(2)",
            opacity: 0.7,
            duration: 0.4,
            ease: "power2.in",
          },
          {
            filter: "brightness(1)",
            opacity: 1,
            duration: 0.9,
          },
        ],
      });

      tl.to(
        ".signal-line",
        {
          keyframes: [
            { backgroundPosition: "0% 0%" },
            {
              backgroundPosition: "100% 100%",
              stagger: { from: "center", each: 0.3 },
              duration: 1,
            },
          ],
        },
        "-=1.4",
      );

      tl.to(
        ".pulsing-icon",
        {
          keyframes: [
            {
              opacity: 1,
              stagger: {
                from: "center",
                each: 0.3,
              },
              duration: 1,
            },
            {
              opacity: 0.4,
              duration: 1,
              stagger: {
                from: "center",
                each: 0.3,
              },
            },
          ],
        },
        "-=2",
      );
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="mt-5 flex flex-col items-center justify-center md:flex-row"
    >
      {contact.data.icongroup.map((item, index) => (
        <React.Fragment key={index}>
          {index === Math.floor(contact.data.icongroup.length / 2) && (
            <>
              <PiPuzzlePieceFill
                size={64}
                className="pulsing-logo h-fit w-fit rounded-full border-blue-50/30 bg-[#333]/75 p-6"
              />
              <div className="signal-line rotate-180 bg-gradient-to-t"></div>
            </>
          )}

          <a
            href={icons[item.icon]?.link}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border-gray-50/30 bg-blue-50/25 p-4 text-3xl opacity-40 grayscale filter duration-200 hover:cursor-pointer hover:bg-zinc-200 hover:opacity-100 hover:filter-none md:text-4xl lg:text-5xl",
              {
                "hover:text-[#2B3137]": item.icon === "Github",
                "hover:text-[#0077B5]": item.icon === "LinkedIn",
                "hover:text-[#FF5700]": item.icon === "Reddit",
                "hover:text-[#C13584]": item.icon === "Instagram",
                "hover:text-[#c71610]": item.icon === "Gmail",
                "hover:text-[#1DA1F2]": item.icon === "Twitter",
              },
            )}
          >
            {item.icon && icons[item.icon]?.icon}
          </a>

          {index !== contact.data.icongroup.length - 1 && (
            <div
              className={clsx(
                "signal-line",
                index >= Math.floor(contact.data.icongroup.length / 2)
                  ? "rotate-180"
                  : "rotate-0",
              )}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
