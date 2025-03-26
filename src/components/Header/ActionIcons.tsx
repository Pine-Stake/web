"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import { ThemeToggle } from "./ThemeToggle";
import { useState, useEffect } from "react";
import { StakeDisconnectButton } from "./StakeDisconnectButton";

export function ActionIcons({
  onToggle,
}: {
  iconLinks: { src: string; alt: string; href: string }[];
  onToggle: (darkMode: boolean) => void;
}) {
  const { connected, publicKey, disconnect } = useWallet();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="hidden xl:flex flex-row items-center xl:text-xl md:text-base text-sm gap-4">
      <ThemeToggle onToggle={onToggle} />
      <a
        href="mailto:contato@pinestake.com?subject=Institutional Stake"
        className="bg-primary-300 px-4 py-2 text-base rounded-[3.13rem] text-dark-background-100"
      >
        Institutional
      </a>
        <StakeDisconnectButton />
    </div>
  );
}
