"use client";
import "rc-slider/assets/index.css";
import { NativeStaking } from "./NativeStaking";
import { PastPerformance } from "./PastPerformance";
import { Informatives } from "../Informatives";

export function HeroSection() {
  return (
    <div className="flex flex-col p-0 m-0 w-full">
      <div className="bg-custom-gradient w-full rounded-3xl flex flex-row items-center justify-between lg:px-16 lg:py-12 md:p-8 px-4 py-8  gap-12 xl:mt-[10px]">
        <div className="flex xl:flex-row flex-col w-full gap-8 justify-between">
          <div className="flex flex-col justify-between xl:w-1/2 gap-8">
            <div>
              <p className="text-[14px] font-bold text-grayscale-100 mb-2">
                Institutional-grade staking
              </p>
              <h1 className="text-grayscale-100 flex  flex-col text-[45px] md:font-semibold leading-[100%] md:leading-[120%] md:max-w-[500px] mb-4">
                Make the difference in the ecosystem
              </h1>
              <p className="text-grayscale-100 xl:w-2/3">
                Pine Stake strengthens decentralization by expanding Solana’s
                presence in Brazil.
              </p>
            </div>
            <PastPerformance />
          </div>

          <div className="flex xl:flex-row flex-col items-end justify-between xl:gap-24 gap-12 xl:w-1/2 mt-[20px] xl:mt-0">
            <NativeStaking />
          </div>
        </div>
      </div>
      <Informatives />
    </div>
  );
}
