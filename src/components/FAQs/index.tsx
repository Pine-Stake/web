"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "What is a validator?",
      answer:
        "A validator is a node that participates in the consensus process of a blockchain. In the Solana network, validators secure the network by confirming transactions and adding new blocks. By staking your tokens with a validator, you help maintain the integrity of the blockchain.",
    },
    { question: "How to stake tokens?", answer: "Explanation about staking." },
    { question: "What are the rewards?", answer: "Rewards explanation." },
    { question: "Is my stake safe?", answer: "Security details." },
    { question: "What is Pine Venture?", answer: "Info about Pine Venture." },
  ];

  return (
    <div className="w-full flex flex-col gap-8">
      <h1 className="text-secondary-300 text-[45px] font-semibold">FAQs</h1>
      <div className="flex flex-col gap-6">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-lg">
            <button
              className={`w-full flex justify-between items-center text-left p-4 transition-colors duration-300 rounded-2xl focus:ring-0 focus:outline-none focus-visible:outline-none active:outline-none ${
                openIndex === index
                  ? "bg-secondary-500 border-secondary-500"
                  : "bg-transparent border-2 border-secondary-500"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <span
                className={`text-base ${
                  openIndex === index
                    ? "text-grayscale-600"
                    : "text-grayscale-100"
                }`}
              >
                {faq.question}
              </span>
              {openIndex === index ? (
                <Minus className="w-6 h-6 text-grayscale-600 border-2 border-grayscale-600 rounded-full p-1" />
              ) : (
                <Plus className="w-6 h-6 text-grayscale-100 border-2 border-grayscale-100 rounded-full p-1" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-8 pb-4 pt-6 text-base text-grayscale-100 ">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
