"use client";
import Link from "next/link";
import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Image from "next/image";

export function HeroSection() {
  const [coins, setCoins] = useState(100);
  const rewardPercentage = (coins / 100) * 5;

  return (
    <div className="bg-custom-gradient w-full rounded-3xl flex flex-row items-center justify-between px-16 py-20 gap-12">
      <div className="w-[50%] flex flex-col items-start justify-between gap-32">
        <h1 className="text-white text-[94px] font-semibold leading-[88px] max-w-[500px]">
          Make difference on the ecosystem
        </h1>
        <div className="bg-dark-green flex flex-col w-full rounded-3xl p-12 gap-12">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-4">
              <div className="text-2xl text-white flex flex-row gap-24">
                <span>Staking</span>
                <span>Unstake</span>
              </div>
              <p className="text-lg text-white">Calculate my earnings</p>
            </div>
            <Link
              href="/"
              className="flex flex-row gap-4 items-center justify-between border border-white px-5 py-3 rounded-xl"
            >
              <Image
                src="/sol.svg"
                width={31}
                height={31}
                alt="performance"
                className="flex-end"
              />
              <span className="text-white text-[20px]">SOL</span>
              <Image
                src="/Vector.svg"
                width={8}
                height={6}
                alt="performance"
                className="flex-end"
              />
            </Link>
          </div>
          <div className="flex flex-row justify-between text-xl text-white">
            <p>How many coins do you hold?</p>
            <p>Estimate Annual Reward</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h3 className="flex flex-row justify-between items-center gap-2 text-[34.5px] text-white font-bold">
              {coins}
              <p className="text-[17.25px] mt-3 font-normal">SOL</p>
            </h3>
            <h3 className="text-[34.5px] text-lime-green font-bold">
              {rewardPercentage.toFixed(1)}%
            </h3>
          </div>

          <div className="w-full flex flex-col items-center">
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

          <Link
            href="/"
            className="w-full bg-lime-green text-white py-3 rounded-3xl text-[19.58px] flex flex-row items-center justify-center font-semibold"
          >
            Start Staking
          </Link>
        </div>
      </div>
      <div className="w-[50%] flex flex-col items-end justify-end mt-[248px]">
        <Image
          src="/performance.png"
          width={1021}
          height={500}
          alt="performance"
          className="flex-end"
        />
      </div>
    </div>
  );
}
