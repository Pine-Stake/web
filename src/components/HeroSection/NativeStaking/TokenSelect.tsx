"use client";
import * as Select from "@radix-ui/react-select";
import Image from "next/image";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Dispatch, SetStateAction, useMemo } from "react";

interface TokenItem {
  value: string;
  label: string;
  icon: string;
  balance: string;
  balanceValue: string;
}

interface TokenSelectProps {
  selectedToken: string;
  setSelectedToken: Dispatch<SetStateAction<string>>;
  tokens?: TokenItem[];
}

const DEFAULT_TOKENS: TokenItem[] = [
  {
    value: "SOL",
    label: "SOL",
    icon: "/sol-novo.svg",
    balance: "0.03 SOL",
    balanceValue: "$4.51",
  },
  {
    value: "pineSOL",
    label: "pineSOL",
    icon: "/logo-pine.svg",
    balance: "0.36 pineSOL",
    balanceValue: "$53.20",
  },
];

export function TokenSelect({
  selectedToken,
  setSelectedToken,
  tokens = DEFAULT_TOKENS,
}: TokenSelectProps) {
  const selectedTokenData = useMemo(
    () => tokens.find((token) => token.value === selectedToken) || tokens[0],
    [selectedToken, tokens]
  );

  return (
    <Select.Root value={selectedToken} onValueChange={setSelectedToken}>
      <Select.Trigger className="inline-flex items-center justify-between gap-2 border dark:border-grayscale-100 border-grayscale-600 px-4 py-3 rounded-2xl text-sm md:text-base text-grayscale-600 dark:text-grayscale-100 bg-transparent">
        <Select.Value aria-label={selectedToken}>
          <div className="flex items-center gap-2">
            <Image
              src={selectedTokenData.icon}
              width={16}
              height={16}
              alt={selectedToken}
              className="shrink-0"
            />
            <span>{selectedToken}</span>
          </div>
        </Select.Value>
        <Select.Icon>
          <ChevronDownIcon className="w-4 h-4 ml-2 shrink-0" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          className="z-50 bg-background-100 dark:bg-[#003D35] rounded-xl shadow-md overflow-hidden w-[520px] max-w-[calc(100vw-32px)]"
          side="bottom"
          position="popper"
          sideOffset={4}
        >
          <Select.Viewport className="p-2">
            {tokens.map((token) => (
              <Select.Item
                key={token.value}
                value={token.value}
                className="flex items-center justify-between gap-2 p-2 rounded hover:bg-background-200 dark:hover:bg-secondary-500 cursor-pointer outline-none dark:text-secondary-100"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <Image
                    src={token.icon}
                    width={20}
                    height={20}
                    alt={token.label}
                    className="shrink-0"
                  />
                  <Select.ItemText className="truncate">
                    {token.label}
                  </Select.ItemText>
                </div>
                <div className="text-right min-w-0">
                  <div className="text-sm font-bold truncate">
                    {token.balance}
                  </div>
                  <div className="text-xs text-grayscale-400 truncate dark:text-secondary-300">
                    {token.balanceValue}
                  </div>
                </div>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
