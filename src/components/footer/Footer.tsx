"use client";

import { createClient } from "@/prismicio";
import { PiPencilLineBold } from "react-icons/pi";
import Animated from "./Animated";
import dawg_a from "../../../public/imgs/dawg_img_b.png";
import dawg_b from "../../../public/imgs/doc_img_a.png";
import dawg_c from "../../../public/imgs/snx_img_a.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const [token, setToken] = useState<number>(0);
  const pathName = usePathname();

  useEffect(() => {
    setToken(Math.floor(Math.random() * 3) + 1);
  }, [pathName]);

  return (
    <>
      <footer className="container relative  flex w-full flex-col items-center justify-start  text-white first:pt-10 ">
        <div className="relative">
          <div className="opacity-50">
            <Image src={dawg_c} alt="image" />
            {/* {token === 1 && (
              <Image src={dawg_a} width={1920} alt="image" />
            )}
            {token === 2 && (
              <Image src={dawg_b} width={1920} alt="image" />
            )}
            {token === 3 && (
              <Image src={dawg_c} width={1920} alt="image" />
            )} */}
          </div>
          <div className="absolute inset-0 top-1/2 m-auto text-center text-2xl text-white">
            <p className="">
              Contact Mail:{" "}
              <a href="mailto:hassaansk786@gmail.com">hassaansk786@gmail.com</a>
            </p>
            <p className="">
              Coded By:{" "}
              <a href="https://abdurrahmanqureshi.vercel.app/">Spectre</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
