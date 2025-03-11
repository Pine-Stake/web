"use client";
import Link from "next/link";
import Slider from "rc-slider";
import Image from "next/image";
import "rc-slider/assets/index.css";
import { useState } from "react";

export function NativeStaking() {
  const [coins, setCoins] = useState(100);
  const rewardPercentage = (coins / 100) * 5;

  return (
    <div className="bg-dark-200 flex flex-col rounded-3xl md:p-10 px-4 py-8 gap-14 w-full">
      <div className="md:text-base text-sm text-white flex flex-row justify-between w-full">
        <span>Native Staking</span>
        <span>Liquid Staking</span>
        <span>Unstake</span>
      </div>

      <div className="flex flex-row items-center justify-between">
        <p className="md:text-2xl text-base text-white">
          Calculate my earnings
        </p>
        <Link
          href="/"
          className="flex flex-row md:gap-4 gap-2 items-center justify-between border border-white px-4 py-3 rounded-2xl"
        >
          <Image
            src="/sol-novo.svg"
            width={18}
            height={14}
            alt="performance"
            className="flex-end"
          />
          <span className="text-white md:text-base text-[11px]">SOL</span>
          <Image
            src="/Vector.svg"
            width={8}
            height={6}
            alt="performance"
            className="flex-end"
          />
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between md:text-base text-[11px] text-white">
          <p>How many coins do you hold?</p>
          <p>Estimate Annual Reward</p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <h3 className="flex flex-row justify-between items-center gap-2 text-[32px] text-white">
            {coins}
            <p className="text-base mt-2 font-normal">SOL</p>
          </h3>
          <h3 className="text-[32px] text-lime-green">
            {rewardPercentage.toFixed(1)}%
          </h3>
        </div>
        <div className="w-full flex flex-col items-center mt-4">
          <Slider
            min={0}
            max={200}
            value={coins}
            onChange={(value) => setCoins(value as number)}
            trackStyle={{
              backgroundColor: "#2CD122",
              height: 10,
              borderRadius: 10,
            }}
            handleStyle={{
              backgroundColor: "#ffffff",
              borderColor: "#2CD122",
              height: 24,
              width: 24,
              marginTop: -7,
              borderWidth: 7,
              opacity: 1,
              outline: "none",
              boxShadow: "0 0 5px #2CD122",
            }}
            railStyle={{
              backgroundColor: "#ffffff",
              height: 10,
              borderRadius: 10,
            }}
          />
        </div>
      </div>

      <Link
        href="/"
        className="w-full bg-lime-green text-grayscale-600 py-3 rounded-[56px] text-base flex flex-row items-center justify-center font-semibold"
      >
        Start Staking
      </Link>
    </div>
  );
}
