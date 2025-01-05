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
      <footer className="container relative mx-auto mb-12 flex w-full max-w-6xl flex-col items-center justify-start gap-3 px-4 py-16 text-white first:pt-10 md:px-6">
        <div className="relative">
          <div className="opacity-50">
            {token === 1 && (
              <Image src={dawg_a} width={1280} height={200} alt="image" />
            )}
            {token === 2 && (
              <Image src={dawg_b} width={1280} height={200} alt="image" />
            )}
            {token === 3 && (
              <Image src={dawg_c} width={1280} height={200} alt="image" />
            )}
          </div>
          <div className="absolute inset-0 m-auto top-1/2 text-center text-2xl text-white">
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
