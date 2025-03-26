"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Wallet } from "lucide-react";
import { useState, useEffect } from "react";

export function ConnectWalletButton() {
  const { wallet, publicKey, connecting, connected, disconnecting } =
    useWallet();
  const { setVisible } = useWalletModal();
  const [mounted, setMounted] = useState(false);

  // Resolve hydration issues by only rendering after component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // Use the built-in WalletMultiButton which handles all wallet interactions
  if (mounted) {
    return <WalletMultiButton className="!bg-primary hover:!bg-primary/90" />;
  }

  return null;
}

// Alternative custom button implementation if you want more control
export function CustomConnectWalletButton({
  isStaking,
}: {
  isStaking: boolean;
}) {
  const {
    wallet,
    publicKey,
    connecting,
    connected,
    disconnecting,
    disconnect,
  } = useWallet();
  const { setVisible } = useWalletModal();
  const [mounted, setMounted] = useState(false);

  // Resolve hydration issues by only rendering after component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleClick = () => {
    if (!connected) {
      setVisible(true);
    } else {
      disconnect(); 
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={connecting || disconnecting}
      className="w-full bg-primary-300 text-grayscale-600 py-3 rounded-lg text-base flex flex-row gap-2 items-center justify-center font-semibold"
    >
      <Wallet className="h-4 w-4" />
      {connected
        ? isStaking ? 'Stake' : 'Unstake'
        : "Connect Wallet"}
    </button>
  );
}
