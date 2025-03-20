import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";

interface BalanceInputProps {
  walletBalance: number;
  coins: string;
  setCoins: Dispatch<SetStateAction<string>>;
  usdValue: number;
}

export default function BalanceInput({
  walletBalance,
  coins,
  setCoins,
  usdValue,
}: BalanceInputProps) {
  return (
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
  );
}
