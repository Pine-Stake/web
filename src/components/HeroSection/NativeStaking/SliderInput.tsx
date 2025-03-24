"use client";
import Slider from "rc-slider";

interface SliderInputProps {
  coins: string;
  setCoins: (value: string) => void;
  railBackgroundColor: string;
  rewardPercentage: number;
}

export function SliderInput({
  coins,
  setCoins,
  railBackgroundColor,
  rewardPercentage,
}: SliderInputProps) {
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    return num.toLocaleString("en-US", {
      maximumFractionDigits: 1,
      minimumFractionDigits: 0,
    });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-row justify-between font-onest text-[11px] dark:text-grayscale-100 text-grayscale-600 w-full mb-2">
        <p>Total</p>
      </div>
      <div className="flex flex-row justify-between items-center w-full gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2 truncate">
            <h3 className="text-[32px] dark:text-grayscale-100 text-grayscale-600 truncate">
              {coins.trim() === "" ? "0" : formatNumber(Number(coins))}
            </h3>
            <p className="text-[11px] font-normal dark:text-grayscale-100 text-grayscale-600">
              SOL
            </p>
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2 justify-end truncate">
            <h3 className="text-[32px] dark:text-grayscale-100 text-grayscale-600 truncate">
              ~{formatNumber(rewardPercentage)}
            </h3>
            <p className="text-[11px] font-normal dark:text-grayscale-100 text-grayscale-600">
              SOL/year
            </p>
          </div>
        </div>
      </div>

      <Slider
        min={0}
        className="mt-2 w-full"
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
  );
}
