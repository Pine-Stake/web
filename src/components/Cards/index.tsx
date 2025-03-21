"use client";
import { useState } from "react";
import Image from "next/image";
import { cardList } from "@/constants/constants";

export function Cards() {
  const [flipState, setFlipState] = useState(Array(3).fill(0));

  const handleFlip = (index: number) => {
    setFlipState((prev) =>
      prev.map((state, i) => (i === index ? state + 180 : state))
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 gap-8 w-full font-onest">
      {cardList.map((item, index) => (
        <div key={index} className="flip-container relative w-full h-[400px]">
          <div
            className="flip-card w-full h-full transition-transform duration-700 transform-style-3d"
            style={{ transform: `rotateY(${flipState[index]}deg)` }}
          >
            <div
              className="flip-front bg-dark-background-200 absolute w-full h-full rounded-[32px] p-6 md:p-8 flex flex-col justify-between items-center backface-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${item.background})` }}
            >
              <div className="w-full flex flex-row justify-between items-center">
                <h2
                  className={`sm:text-[32px] text-[24px] font-medium ${
                    item.title === "Empowerment"
                      ? "text-white"
                      : "text-grayscale-600"
                  }`}
                >
                  {item.title}
                </h2>
                <button onClick={() => handleFlip(index)}>
                  <Image
                    src={
                      item.title === "Empowerment"
                        ? "/plus-light-rounded.svg"
                        : "/plus-dark-rounded.svg"
                    }
                    alt="Expand"
                    width={40}
                    height={40}
                    className="cursor-pointer"
                  />
                </button>
              </div>
            </div>
            <div className="flip-back bg-dark-300 absolute w-full h-full rounded-[32px] p-6 md:p-8 flex flex-col justify-between items-center transform rotate-y-180 backface-hidden">
              <div className="w-full flex flex-row justify-between items-center">
                <h2 className="text-transparent">_</h2>
                <button onClick={() => handleFlip(index)}>
                  <Image
                    src="/minus-light-rounded.svg"
                    alt="Close"
                    width={40}
                    height={40}
                    className="cursor-pointer rotate-180"
                  />
                </button>
              </div>
              <p className="text-grayscale-100 text-xl text-center flex-1 flex items-center justify-center">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
