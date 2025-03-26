"use client";
import { Wallet } from "lucide-react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

export function StakeDisconnectButton() {
  const { connected, publicKey, disconnect } = useWallet();
  const { setVisible } = useWalletModal();

  if (!connected) {
    return (
      <button
        onClick={() => setVisible(true)}
        className="bg-secondary-300 px-4 py-2 text-base rounded-[3.13rem] text-dark-background-100"
      >
        Stake now
      </button>
    );
  }

  return (
    <button
      onClick={() => disconnect()}
      className="bg-secondary-300 px-4 py-2 text-base rounded-[3.13rem] text-dark-background-100 flex items-center gap-2"
    >
      <Wallet className="h-4 w-4" />
      Disconnect{" "}
      <span className="font-semibold">
        {publicKey?.toString().slice(0, 4)}...
        {publicKey?.toString().slice(-4)}
      </span>
    </button>
  );
}
