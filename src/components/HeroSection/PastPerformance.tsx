"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "20 Nov", value: 11.4 },
  { date: "15 Dez", value: 10.2 },
  { date: "04 Jan", value: 12.1 },
  { date: "25 Jan", value: 11.8 },
  { date: "14 Fev", value: 12.5 },
];

export function PastPerformance() {
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

  const colors = {
    text: darkMode ? "#DAEDE7" : "#5D5D5D",
    grid: darkMode ? "#DAEDE7" : "#5D5D5D",
    stroke: darkMode ? "#002621" : "#D0F2E0 ",
    line: darkMode ? "#2CD122" : "#198114",
  };

  return (
    <div className="dark:bg-dark-background-200 font-onest bg-background-200 flex flex-col rounded-3xl md:p-10 px-4 py-8 gap-14 w-full mt-4">
      <div className="flex flex-col gap-14 justify-between w-full">
        <h1 className="text-[32px] dark:text-grayscale-100 text-grayscale-600">
          Past Performance
        </h1>

        <div className="flex items-center justify-between md:gap-8 gap-4">
          <Link
            className="md:py-4 px-2 justify-start md:px-6 border dark:border-grayscale-100 border-grayscale-600 rounded-2xl dark:text-grayscale-100 text-grayscale-600 text-base flex md:gap-4 gap-2 items-center  md:h-[72px] h-[56px] w-full"
            href="/"
            rel="noopener noreferrer"
          >
            <Image
              src="/logo-pine.svg"
              width={20}
              height={20}
              alt="performance"
              className="flex-end"
            />
            <div className="flex flex-col leading-3">
              <span className="md:text-base text-base">Pine Stake</span>
              <p className="md:text-[13px] text-[8px]">9.56% APY</p>
            </div>
          </Link>

          <Link
            className="md:py-4 px-2 justify-start md:px-6 border dark:border-grayscale-100 border-grayscale-600 rounded-2xl dark:text-grayscale-100 text-grayscale-600 text-base flex md:gap-4 gap-2 items-center  md:h-[72px] h-[56px] w-full"
            href="/"
            rel="noopener noreferrer"
          >
            <Image
              src="/sol-novo.svg"
              width={20}
              height={20}
              alt="performance"
              className="flex-end"
            />
            <div className="flex flex-col leading-3">
              <span className="md:text-base text-[11px]">Avg. Validator</span>
              <p className="md:text-[13px] text-[8px]">7.56% APY</p>
            </div>
          </Link>
        </div>

        <div className="w-full h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke={colors.stroke} />
              <XAxis
                dataKey="date"
                stroke={colors.text}
                tickMargin={16}
                tick={{ fontSize: 11 }}
              />
              <YAxis
                stroke={colors.text}
                tickMargin={5}
                domain={[9, 13.8]}
                ticks={[9.0, 10.2, 11.4, 12.6, 13.8]}
                tickFormatter={(value) => `${value.toFixed(2)}%`}
                tick={{ fontSize: 11 }}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke={colors.line}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
