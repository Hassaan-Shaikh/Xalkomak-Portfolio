"use client";

import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const previousPathname = useRef<string>("");

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const timeline = gsap.timeline();

    if (previousPathname.current && previousPathname.current !== pathname) {
      timeline.to(overlay, {
        x: "0%",
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          timeline.reverse();
        },
      });
    }

    previousPathname.current = pathname;
  }, [pathname]);

  return (
    <div style={{ position: "relative" }}>
      {/* <div
        ref={overlayRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#181818",
          zIndex: 1000,
          transform: "translateX(-100%)",
        }}
      ></div> */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
