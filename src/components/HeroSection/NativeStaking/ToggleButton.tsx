"use client";
import { motion } from "framer-motion";

interface ToggleButtonProps {
  isStaking: boolean;
  setIsStaking: (value: boolean) => void;
}

export function ToggleButton({ isStaking, setIsStaking }: ToggleButtonProps) {
  return (
    <div className="relative flex flex-row w-full bg-toggle-light dark:bg-toggle-dark rounded-lg p-2 overflow-hidden">
      <motion.div
        initial={{ x: isStaking ? "0%" : "100%" }}
        animate={{ x: isStaking ? "2%" : "98%" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="absolute top-[6px] bottom-0 left-0 w-1/2 h-[80%] bg-primary-300 rounded-lg border border-primary-200 "
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
  );
}
