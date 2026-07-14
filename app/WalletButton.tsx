'use client';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount, useDisconnect } from 'wagmi';

export default function WalletButton() {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <button
      onClick={() => isConnected ? disconnect() : open()}
      className={`px-6 py-2.5 rounded-xl font-medium tracking-wide text-sm transition-all duration-300 shadow-md ${
        isConnected 
          ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-400' 
          : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold cursor-pointer active:scale-95'
      }`}
    >
      {isConnected ? 'Disconnect' : 'Connect Wallet'}
    </button>
  );
}