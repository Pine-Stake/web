"use client";
import Image from "next/image";
import Link from "next/link";
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
  return (
    <div className="bg-dark-200 flex flex-col rounded-3xl md:p-10 px-4 py-8 gap-14 w-full mt-4">
      <div className="flex flex-col gap-14 justify-between w-full">
        <h1 className="text-center text-[32px] text-white">Past Performance</h1>

        <div className="flex items-center justify-between md:gap-8 gap-4">
          <Link
            className="md:py-4 px-2 justify-center md:px-6 border border-grayscale-100 rounded-2xl text-grayscale-100 text-base flex md:gap-4 gap-2 items-center  md:h-[84px] h-[56px] w-full"
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
              <span className="md:text-[23px] text-base">SOL</span>
              <p className="md:text-[13px] text-[8px]">9.56% APY</p>
            </div>
          </Link>

          <Link
            className="md:py-4 px-2 justify-center md:px-6 border border-grayscale-100 rounded-2xl text-grayscale-100 text-base flex md:gap-4 gap-2 items-center  md:h-[84px] h-[56px] w-full"
            href="/"
            rel="noopener noreferrer"
          >
            <Image
              src="/plus.svg"
              width={20}
              height={20}
              alt="performance"
              className="flex-end"
            />
            <span className="md:text-base text-[11px]">Compare To</span>
          </Link>
        </div>

        <div className="w-full h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
              <XAxis
                dataKey="date"
                stroke="#DAEDE7"
                tickMargin={16}
                tick={{ fontSize: 11 }}
              />
              <YAxis
                stroke="#DAEDE7"
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
                stroke="#2CD122"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
