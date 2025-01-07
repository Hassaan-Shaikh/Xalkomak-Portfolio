"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import dawg_a from "../../../public/imgs/dawg_img_b.png";
import dawg_b from "../../../public/imgs/doc_img_a.png";
import dawg_c from "../../../public/imgs/snx_img_a.png";

export default function Footer() {
  const [token, setToken] = useState<number>(0);
  const pathName = usePathname();

  useEffect(() => {
    setToken(Math.floor(Math.random() * 3) + 1);
  }, [pathName]);

  const selectedImage =
    token === 1 ? dawg_a : token === 2 ? dawg_b : dawg_c;

  return (
    <footer className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={dawg_c}
          alt="Footer graphic"
          layout="fill" // Makes the image fill the container
          objectFit="cover" // Ensures the image covers the entire width and height
          objectPosition="center" // Centers the image
          priority // Optimizes image loading
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-white py-16">
        <p>
          Contact Mail:{" "}
          <a href="mailto:hassaansk786@gmail.com" className="underline">
            hassaansk786@gmail.com
          </a>
        </p>
        <p>
          Coded By:{" "}
          <a
            href="https://abdurrahmanqureshi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Spectre
          </a>
        </p>
      </div>
    </footer>
  );
}
