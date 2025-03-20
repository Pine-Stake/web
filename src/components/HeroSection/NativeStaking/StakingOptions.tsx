"use client";
import Image from "next/image";

interface StakingOptionsProps {
  stakingType: {
    iconGreen: string;
    iconGray: string;
    title: string;
    description: string;
    amount: string;
  }[];
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}

export function StakingOptions({
  stakingType,
  selectedIndex,
  setSelectedIndex,
}: StakingOptionsProps) {
  return (
    <div className="w-full flex xl:flex-row flex-col justify-between xl:gap-[6%] gap-4 items-center">
      {stakingType.map((item, index) => (
        <div
          key={index}
          onClick={() => setSelectedIndex(index)}
          className={`xl:w-1/2 w-full flex flex-col items-start justify-center gap-4 px-6 py-4 border-2 rounded-2xl cursor-pointer transition-all
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
              className="transition-all"
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
  );
}
