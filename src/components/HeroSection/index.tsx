// "use client";
import "rc-slider/assets/index.css";
import { NativeStaking } from "./NativeStaking";
import { PastPerformance } from "./PastPerformance";
import { Informatives } from "../Informatives";
import { Wrapper } from "./Wrapper";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";

export function HeroSection() {
  return (
    <div className="flex flex-col p-0 m-0 w-full">
      <div className="dark:bg-dark-custom-gradient bg-custom-gradient w-full rounded-3xl flex flex-row items-center justify-between lg:px-16 lg:py-12 md:p-8 px-4 py-8  gap-12 xl:mt-[10px]">
        <div className="flex xl:flex-row flex-col w-full gap-8 justify-between">
          <div className="flex flex-col justify-between xl:w-1/2 gap-8">
            <div>
              <p className="text-[14px] font-bold dark:text-grayscale-100 text-grayscale-600 mb-2">
                Institutional-grade staking
              </p>
              <h1 className="dark:text-grayscale-100 text-grayscale-600 flex  flex-col text-[45px] md:font-semibold leading-[100%] md:leading-[120%] md:max-w-[500px] mb-4">
                Make the difference in the ecosystem
              </h1>
              <p className="dark:text-grayscale-100 text-grayscale-600 xl:w-2/3">
                Pine Stake strengthens decentralization by expanding Solana’s
                presence in Brazil.
              </p>
            </div>
            <PastPerformance />
          </div>

          <div className="flex xl:flex-row flex-col items-end justify-between xl:gap-24 gap-12 xl:w-1/2 mt-[20px] xl:mt-0">
          <Suspense fallback={<StakingSkeleton />}>
            <Wrapper />
          </Suspense>
          </div>
        </div>
      </div>
      
      <Informatives />
    </div>
  );
}

function StakingSkeleton() {
  return (
    <div className="dark:bg-dark-background-200 font-onest bg-background-200 flex flex-col rounded-3xl w-full md:p-10 px-4 py-8 gap-[1.75rem]">
      {/* Tab Navigation */}
      <div className="flex rounded-lg overflow-hidden mb-6">
        <Skeleton className="h-12 w-1/2 bg-green-500/20 rounded-none" />
        <Skeleton className="h-12 w-1/2 bg-gray-700/20 rounded-none" />
      </div>
      <Skeleton className="h-12 w-full bg-green-500/20 rounded-lg" />
      <div className="flex gap-2  overflow-hidden mb-6">
        <Skeleton className="h-28 w-1/2 bg-green-500/20 rounded-none" />
        <Skeleton className="h-28 w-1/2 bg-gray-700/20 rounded-none" />
      </div>
      <Skeleton className="h-12 w-full bg-green-500/20 rounded-lg" />
      <Skeleton className="h-12 w-full bg-green-500/20 rounded-lg" />
    </div>
  )
}

