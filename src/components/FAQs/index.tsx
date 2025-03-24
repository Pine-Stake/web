"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/constants/constants";

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      id="faq"
      className="w-full flex flex-col gap-8 font-onest scroll-mt-36"
    >
      <h1 className="dark:text-secondary-300 text-secondary-500 text-[45px] font-semibold">
        FAQs
      </h1>
      <div className="flex flex-col gap-6">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-lg">
            <button
              className={`w-full flex justify-between items-center text-left p-4 transition-colors duration-300 rounded-2xl focus:ring-0 focus:outline-none focus-visible:outline-none active:outline-none ${
                openIndex === index
                  ? "bg-secondary-500 border-2 border-secondary-500"
                  : "bg-transparent border-2 border-secondary-500"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <span
                className={`text-[23px] ${
                  openIndex === index
                    ? "text-grayscale-600"
                    : "dark:text-grayscale-100 text-grayscale-600"
                }`}
              >
                {faq.question}
              </span>
              {openIndex === index ? (
                <Minus className="w-6 h-6  text-grayscale-600 border-2 border-grayscale-600 rounded-full p-1" />
              ) : (
                <Plus className="w-6 h-6 dark:text-grayscale-100  text-grayscale-600 border-grayscale-600  border-2 dark:border-grayscale-100 rounded-full p-1" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-2 00 ease-in-out px-8 ${
                openIndex === index ? "max-h-[500px] pb-4 pt-6" : "max-h-0"
              } text-base dark:text-grayscale-100 text-grayscale-600`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
