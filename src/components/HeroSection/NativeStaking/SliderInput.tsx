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
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-row justify-between font-onest text-[11px] dark:text-grayscale-100 text-grayscale-600 w-full mb-2">
        <p>Total</p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h3 className="flex flex-row items-center gap-2 text-[32px] dark:text-grayscale-100 text-grayscale-600">
          {coins.trim() === "" ? "0" : coins}
          <p className="text-[11px] font-normal mt-2">SOL</p>
        </h3>
        <h3 className="text-[32px] dark:text-grayscale-100 text-grayscale-600 flex flex-row items-center gap-2">
          ~{rewardPercentage.toFixed(1)}
          <p className="text-[11px] font-normal mt-2">SOL/year</p>
        </h3>
      </div>
      <Slider
        min={0}
        className="mt-2"
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
