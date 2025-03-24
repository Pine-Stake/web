"use client";
import { Dispatch, SetStateAction, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { TokenSelect } from "./TokenSelect";

interface BalanceInputProps {
  walletBalance: number;
  coins: string;
  setCoins: Dispatch<SetStateAction<string>>;
  usdValue: number;
  isStaking: boolean;
  selectedToken: string;
  setSelectedToken: Dispatch<SetStateAction<string>>;
}

export default function BalanceInput({
  walletBalance,
  coins,
  setCoins,
  usdValue,
  isStaking,
  selectedToken,
  setSelectedToken,
}: BalanceInputProps) {
  const [displayValue, setDisplayValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const formatWithCommas = (value: string) => {
    const parts = value.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.length > 1 ? `${parts[0]}.${parts[1]}` : parts[0];
  };

  useEffect(() => {
    if (coins === "0") {
      setDisplayValue("");
    } else if (coins) {
      setDisplayValue(formatWithCommas(coins));
    } else {
      setDisplayValue("");
    }
  }, [coins]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9.]/g, "");
    value = value.replace(/(\..*)\./g, "$1");

    if (value.length > 1 && value[0] === "0" && value[1] !== ".") {
      value = value.substring(1);
    }

    setCoins(value || "0");
    setDisplayValue(value ? formatWithCommas(value) : "");
  };

  return (
    <div className="flex flex-col items-center justify-between">
      <div className="flex flex-row w-full justify-between items-center pb-3">
        <span className="dark:text-grayscale-100 text-grayscale-600">
          {isStaking ? "Stake" : "Unstake"}
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
            {selectedToken}
          </span>
        </div>
      </div>

      <div className="flex flex-row md:gap-4 gap-2 items-center justify-between border dark:border-grayscale-100 border-grayscale-600 px-4 py-3 w-full rounded-2xl">
        <TokenSelect
          selectedToken={selectedToken}
          setSelectedToken={setSelectedToken}
        />

        <div className="flex flex-col items-end gap-1 w-2/3 min-w-0">
          <input
            ref={inputRef}
            type="text"
            inputMode="decimal"
            className="dark:bg-dark-background-200 bg-background-200 text-right outline-none w-full text-3xl dark:text-grayscale-100 text-grayscale-600 placeholder:text-grayscale-300"
            value={displayValue}
            onChange={handleChange}
            placeholder="0.00"
            onFocus={() => {
              if (inputRef.current) {
                const length = inputRef.current.value.length;
                inputRef.current.setSelectionRange(length, length);
              }
            }}
          />
          <span className="text-xs text-grayscale-300 truncate w-full text-right">
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
  );
}
