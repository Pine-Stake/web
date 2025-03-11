"use client";
import Link from "next/link";
import Slider from "rc-slider";
import Image from "next/image";
import "rc-slider/assets/index.css";
import { useState } from "react";
import { motion } from "framer-motion";

export function NativeStaking() {
  const stakingType = [
    {
      iconGreen: "/tabler_clock_green.svg",
      iconGray: "/tabler_clock_gray.svg",
      title: "Native Staking",
      description: "APY 8.19%",
    },
    {
      iconGreen: "/lightning_bolt_green.svg",
      iconGray: "/lightning_bolt_gray.svg",
      title: "Liquid Staking",
      description: "APY 8.61%",
    },
  ];
  const [coins, setCoins] = useState(100);
  const [isStaking, setIsStaking] = useState(true);
  const rewardPercentage = (coins / 100) * 5;
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <div className="bg-dark-200 flex flex-col rounded-3xl md:p-10 w-full px-4 py-8 gap-14">
      <div className="relative flex flex-row w-full bg-grayscale-300 rounded-lg p-2 overflow-hidden">
        <motion.div
          initial={{ x: isStaking ? "0%" : "100%" }}
          animate={{ x: isStaking ? "2%" : "98%" }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="absolute top-[6px] bottom-0 left-0 w-1/2 h-[80%]  bg-lime-green rounded-lg border border-primary-200 "
        />
        <button
          className="flex-1 py-2 text-center relative z-10 text-grayscale-600"
          onClick={() => setIsStaking(true)}
        >
          Stake
        </button>
        <button
          className="flex-1 py-2 text-center relative z-10 text-grayscale-600"
          onClick={() => setIsStaking(false)}
        >
          Unstake
        </button>
      </div>

      <div className="flex flex-row items-center justify-between">
        <p className="md:text-2xl text-base text-white">
          Calculate my earnings
        </p>
        <Link
          href="/"
          className="flex flex-row md:gap-4 gap-2 items-center justify-between border border-white px-4 py-3 rounded-2xl"
        >
          <Image src="/sol-novo.svg" width={18} height={14} alt="sol" />
          <span className="text-white md:text-base text-[11px]">SOL</span>
          <Image src="/Vector.svg" width={8} height={6} alt="arrow" />
        </Link>
      </div>

      <div className="w-full flex sm:flex-row flex-col justify-between sm:gap-[6%] gap-4 items-center">
        {stakingType.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`sm:w-1/2 w-full flex items-center justify-center gap-4 px-6 py-4 border rounded-2xl cursor-pointer transition-all
        ${
          selectedIndex === index
            ? "border-lime-green text-lime-green"
            : "border-grayscale-200 text-grayscale-200"
        }`}
          >
            <Image
              src={selectedIndex === index ? item.iconGreen : item.iconGray}
              alt={item.title}
              width={32}
              height={32}
              className={`transition-all ${
                selectedIndex === index
                  ? "grayscale-0"
                  : "grayscale contrast-75"
              }`}
            />
            <div className="flex flex-col">
              <span className="text-base">{item.title}</span>
              <p className="text-[11px]">{item.description}</p>
            </div>
          </div>
        ))}
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
          <h3 className="text-[32px] text-lime-green flex flex-row justify-between items-center gap-2">
            {rewardPercentage.toFixed(1)}
            <p className="text-base mt-2 font-normal">SOL</p>
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
              backgroundColor: "#888888",
              borderColor: "#2CD122",
              height: 24,
              width: 24,
              marginTop: -7,
              borderWidth: 7,
              boxShadow: "0 0 5px #2CD122",
            }}
            railStyle={{
              backgroundColor: "#888888",
              height: 10,
              borderRadius: 10,
            }}
          />
        </div>
      </div>

      <Link
        href="/"
        className="w-full bg-lime-green text-grayscale-600 py-3 rounded-lg text-base flex flex-row items-center justify-center font-semibold"
      >
        {isStaking ? "Connect" : "Unstake"}
      </Link>
    </div>
  );
}
