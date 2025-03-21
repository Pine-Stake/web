"use client";
import { motion, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { logoSupporters } from "@/constants/constants";

export function Supporters() {
  const xTranslation = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.scrollWidth / 2;
    const finalPosition = -containerWidth;

    const controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 20,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return () => controls.stop();
  }, [xTranslation]);

  return (
    <div className="w-full dark:bg-dark-background-200 bg-background-200 flex flex-row justify-between items-center p-[56px] rounded-[40px] gap-[40px] font-onest overflow-hidden">
      <h1 className="dark:text-secondary-300 text-secondary-500 text-[32px] font-medium">
        Supporters
      </h1>

      <div className="relative w-1/2 flex overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex gap-8 min-w-max"
          style={{ x: xTranslation }}
        >
          {[...logoSupporters, ...logoSupporters].map((item, index) => (
            <div key={index} className="flex-shrink-0 w-[154px]">
              <Image
                src={item.logo}
                alt="Supporter Logo"
                width={154}
                height={154}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
