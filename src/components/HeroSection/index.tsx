"use client";
import "rc-slider/assets/index.css";
import { NativeStaking } from "./NativeStaking";
import { PastPerformance } from "./PastPerformance";
import { Informatives } from "../Informatives";

export function HeroSection() {
  return (
    <div className="flex flex-col p-0 m-0 w-full">
      <div className="bg-custom-gradient w-full rounded-3xl flex flex-row items-center justify-between lg:px-16 lg:py-12 md:p-8 px-4 py-8  gap-12 xl:mt-[10px]">
        <div className="flex flex-col w-full gap-4">
          <h1 className="text-white flex  flex-col md:text-[70px] text-[45px] md:font-semibold leading-[100%] md:leading-[120%] md:max-w-[500px] ">
            <span>Make</span>
            <span className="inline-block">difference on</span>
            <span>the ecosystem</span>
          </h1>

          <div className="flex xl:flex-row flex-col items-end justify-between xl:gap-24 gap-12 w-full  mt-[20px] xl:mt-0">
            <NativeStaking />
            <PastPerformance />
          </div>
        </div>
      </div>
      <Informatives />
    </div>
  );
}
