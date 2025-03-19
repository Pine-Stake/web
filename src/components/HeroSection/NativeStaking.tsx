"use client";
import Link from "next/link";
import Slider from "rc-slider";
import Image from "next/image";
import "rc-slider/assets/index.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function NativeStaking() {
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

  const stakingType = [
    {
      iconGreen: "/tabler_clock_green.svg",
      iconGray: "/tabler_clock_gray.svg",
      title: "Native • APY 8.19%",
      description: "Receive",
      amount: " 0.0000 pineSOL ",
    },
    {
      iconGreen: "/lightning_bolt_green.svg",
      iconGray: "/lightning_bolt_gray.svg",
      title: "Liquid • APY 8.61%",
      description: "Receive",
      amount: " 0.0000 SOL ",
    },
  ];
  const [coins, setCoins] = useState(" ");
  const [isStaking, setIsStaking] = useState(true);
  const rewardPercentage = (Number(coins) / 100) * 5;
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const conversionRate = 131.45;
  const usdValue = coins ? Number(coins) * conversionRate : 0;

  const walletBalance = 0.08;

  const handleSetValue = (percentage: number) => {
    const newValue = (walletBalance * percentage).toFixed(2);
    setCoins(newValue);
  };

  return (
    <div className="dark:bg-dark-background-200 font-onest bg-background-200 flex flex-col rounded-3xl md:p-10 w-full px-4 py-8 gap-[1.75rem]">
      <div className="relative flex flex-row w-full bg-toggle-light dark:bg-toggle-dark rounded-lg p-2 overflow-hidden">
        <motion.div
          initial={{ x: isStaking ? "0%" : "100%" }}
          animate={{ x: isStaking ? "2%" : "98%" }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="absolute top-[6px] bottom-0 left-0 w-1/2 h-[80%]  bg-primary-300 rounded-lg border border-primary-200 "
        />
        <button
          className={`flex-1 py-2 text-center relative z-10 
      ${
        isStaking
          ? "text-grayscale-600 dark:text-grayscale-600"
          : "text-grayscale-600 dark:text-grayscale-100"
      }`}
          onClick={() => setIsStaking(true)}
        >
          Stake
        </button>
        <button
          className={`flex-1 py-2 text-center relative z-10 
      ${
        !isStaking
          ? "text-grayscale-600 dark:text-grayscale-600"
          : "text-grayscale-600 dark:text-grayscale-100"
      }`}
          onClick={() => setIsStaking(false)}
        >
          Unstake
        </button>
      </div>

      <div className="flex flex-col items-center justify-between">
        <div className="flex flex-row w-full justify-between items-center pb-3">
          <span className="dark:text-grayscale-100 text-grayscale-600">
            Stake
          </span>
          <div className="flex items-center gap-2">
            <div className="relative w-4 h-4">
              <Image
                src="/wallet-black.svg"
                width={16}
                height={16}
                alt="wallet"
                className="block dark:hidden"
              />
              <Image
                src="/wallet-white.svg"
                width={16}
                height={16}
                alt="wallet"
                className="hidden dark:block"
              />
            </div>
            <span className="text-sm text-grayscale-600 dark:text-grayscale-100">
              {walletBalance.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{" "}
              SOL
            </span>
            <button
              className="border dark:border-grayscale-100 border-grayscale-600 dark:text-grayscale-100 text-grayscale-600 px-2 py-1 rounded-md text-xs"
              onClick={() => handleSetValue(0.5)}
            >
              HALF
            </button>
            <button
              className="border dark:border-grayscale-100 border-grayscale-600 dark:text-grayscale-100 text-grayscale-600 px-2 py-1 rounded-md text-xs"
              onClick={() => handleSetValue(1)}
            >
              MAX
            </button>
          </div>
        </div>
        <div className="flex flex-row md:gap-4 gap-2 items-center justify-between border dark:border-grayscale-100 border-grayscale-600 px-4 py-3 w-full rounded-2xl">
          <Link
            href="/"
            className="flex flex-row md:gap-4 gap-2 items-center justify-between border dark:border-grayscale-100 border-grayscale-600 px-4 py-3 rounded-2xl"
          >
            <Image src="/sol-novo.svg" width={18} height={14} alt="sol" />
            <span className="dark:text-grayscale-100 text-grayscale-600 md:text-base text-[11px]">
              SOL
            </span>
            <div className="relative">
              <Image
                src="/light-vector.svg"
                width={8}
                height={6}
                alt="arrow"
                className="block dark:hidden"
              />

              <Image
                src="/dark-vector.svg"
                width={8}
                height={6}
                alt="arrow"
                className="hidden dark:block"
              />
            </div>
          </Link>
          <div className="flex flex-col items-end gap-1 w-2/3">
            <input
              type="text"
              inputMode="numeric"
              dir="rtl"
              className="dark:bg-dark-background-200 bg-background-200 text-right outline-none w-full text-3xl dark:text-grayscale-100 text-grayscale-600 placeholder:text-grayscale-300"
              value={
                coins
                  ? Number(coins).toLocaleString("en-US", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    })
                  : ""
              }
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setCoins(value);
              }}
              placeholder="0"
            />
            <span className="text-xs text-grayscale-300">
              {usdValue > 0
                ? usdValue.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })
                : "$0.00"}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full flex xl:flex-row flex-col justify-between xl:gap-[6%] gap-4 items-center">
        {stakingType.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`xl:w-1/2 w-full flex  flex-col items-start justify-center gap-4 px-6 py-4 border-2 rounded-2xl cursor-pointer transition-all
        ${
          selectedIndex === index
            ? "border-primary-300 text-primary-300"
            : "border-toggle-light dark:border-toggle-dark text-grayscale-200"
        }`}
          >
            <div className="flex flex-row text-xs border border-primary-300 px-2 py-1 rounded-full gap-2">
              <Image
                src={item.iconGreen}
                alt={item.title}
                width={15}
                height={11}
                className={`transition-all`}
              />
              <span className="text-xs text-primary-300">{item.title}</span>
            </div>
            <div className="flex flex-col">
              <p className="text-[13px] text-grayscale-300 font-bold">
                {item.description}
              </p>
              <p className="text-base dark:text-grayscale-100 text-grayscale-600">
                {item.amount}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between font-onest text-[11px] dark:text-grayscale-100 text-grayscale-600">
          <p>Total</p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <h3 className="flex flex-row justify-between items-center gap-2 text-[32px] dark:text-grayscale-100 text-grayscale-600">
            {coins.trim() === "" ? "0" : coins}
            <p className="text-[11px] font-normal mt-2">SOL</p>
          </h3>
          <h3 className="text-[32px] dark:text-grayscale-100 text-grayscale-600 flex flex-row justify-between items-center gap-2">
            ~{rewardPercentage.toFixed(1)}
            <p className="text-[11px] font-normal mt-2">SOL/year</p>
          </h3>
        </div>
        <div className="w-full flex flex-col items-center mt-4">
          <Slider
            min={0}
            max={200}
            value={Number(coins) || 0}
            onChange={(value) => setCoins(String(value))}
            trackStyle={{
              backgroundColor: "#2CD122",
              height: 10,
              borderRadius: 10,
            }}
            handleStyle={{
              backgroundColor: "#D1D1D1",
              borderColor: "#2CD122",
              height: 24,
              width: 24,
              marginTop: -7,
              borderWidth: 7,
              boxShadow: "0 0 5px #2CD122",
              opacity: 100,
            }}
            railStyle={{
              backgroundColor: railBackgroundColor,
              height: 10,
              borderRadius: 10,
            }}
          />
        </div>
      </div>

      <Link
        href="/"
        className="w-full bg-primary-300 text-grayscale-600 py-3 rounded-lg text-base flex flex-row items-center justify-center font-semibold"
      >
        {isStaking ? "Connect" : "Unstake"}
      </Link>
    </div>
  );
}
