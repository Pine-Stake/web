"use client";
import { useEffect, useState } from "react";
import { ToggleButton } from "./NativeStaking/ToggleButton";
import { StakingOptions } from "./NativeStaking/StakingOptions";
import { SliderInput } from "./NativeStaking/SliderInput";
import BalanceInput from "./NativeStaking/BalanceInput";
import { SolanaProvider } from "../connect/solana-provider";
import { CustomConnectWalletButton } from "../connect";
import { stakingType } from "../../constants/constants";

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
  const [coins, setCoins] = useState("0");
  const [isStaking, setIsStaking] = useState(true);
  const conversionRate = 131.45;
  const usdValue = coins ? Number(coins) * conversionRate : 0;
  const walletBalance = 0.08;
  const rewardPercentage = (Number(coins) / 100) * 5;
  const [selectedToken, setSelectedToken] = useState("SOL");
  const [selectedButton, setSelectedButton] = useState<"half" | "max" | null>(
    null
  );

  return (
    <div className="dark:bg-dark-background-200 font-onest bg-background-200 flex flex-col rounded-3xl md:p-10 w-full px-4 py-8 gap-[1.75rem]">
      <ToggleButton isStaking={isStaking} setIsStaking={setIsStaking} />

      <BalanceInput
        walletBalance={walletBalance}
        coins={coins}
        setCoins={setCoins}
        usdValue={usdValue}
        isStaking={isStaking}
        selectedToken={selectedToken}
        setSelectedToken={setSelectedToken}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />

      <StakingOptions
        stakingType={stakingType}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />

      {isStaking && (
        <SliderInput
          coins={coins}
          setCoins={setCoins}
          railBackgroundColor={railBackgroundColor}
          rewardPercentage={rewardPercentage}
        />
      )}

      <SolanaProvider>
        <CustomConnectWalletButton />
      </SolanaProvider>
    </div>
  );
}
