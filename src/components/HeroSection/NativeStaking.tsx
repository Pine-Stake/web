"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ToggleButton } from "./NativeStaking/ToggleButton";
import { StakingOptions } from "./NativeStaking/StakingOptions";
import { SliderInput } from "./NativeStaking/SliderInput";
import BalanceInput from "./NativeStaking/BalanceInput";

export function NativeStaking() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [darkMode, setDarkMode] = useState(
    typeof window !== "undefined" &&
      document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const railBackgroundColor = darkMode ? "#D0F2E01A" : "#0026211A";
  const [coins, setCoins] = useState(" ");
  const [isStaking, setIsStaking] = useState(true);
  const conversionRate = 131.45;
  const usdValue = coins ? Number(coins) * conversionRate : 0;
  const walletBalance = 0.08;
  const rewardPercentage = (Number(coins) / 100) * 5;

  const stakingType = [
    {
      iconGreen: "/tabler_clock_green.svg",
      iconGray: "/tabler_clock_gray.svg",
      title: "Native • APY 8.19%",
      description: "Receive",
      amount: "0.0000 pineSOL",
    },
    {
      iconGreen: "/lightning_bolt_green.svg",
      iconGray: "/lightning_bolt_gray.svg",
      title: "Liquid • APY 8.61%",
      description: "Receive",
      amount: "0.0000 SOL",
    },
  ];

  return (
    <div className="dark:bg-dark-background-200 font-onest bg-background-200 flex flex-col rounded-3xl md:p-10 w-full px-4 py-8 gap-[1.75rem]">
      <ToggleButton isStaking={isStaking} setIsStaking={setIsStaking} />

      <BalanceInput
        walletBalance={walletBalance}
        coins={coins}
        setCoins={setCoins}
        usdValue={usdValue}
      />
      <StakingOptions
        stakingType={stakingType}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />

      <SliderInput
        coins={coins}
        setCoins={setCoins}
        railBackgroundColor={railBackgroundColor}
        rewardPercentage={rewardPercentage}
      />

      <Link
        href="/"
        className="w-full bg-primary-300 text-grayscale-600 py-3 rounded-lg text-base flex flex-row items-center justify-center font-semibold"
      >
        {isStaking ? "Connect" : "Unstake"}
      </Link>
    </div>
  );
}
