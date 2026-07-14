'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import WalletButton from './WalletButton'; 

export default function Home() {
  const [stakedBalance, setStakedBalance] = useState(100000000000); 
  const [stakeInput, setStakeInput] = useState('');
  const [currentTab, setCurrentTab] = useState('Dashboard');
  const [bgColor, setBgColor] = useState('bg-[#0a0a0a]');

  // Ang functions na ito ay pang-UI lang muna, ang Web3 transactions
  // ay ikakabit natin kapag stable na ang connection.
  const handleStake = () => {
    alert("Please ensure your wallet is connected via the top right button!");
  };

  const handleUnstake = () => {
    alert("Please ensure your wallet is connected via the top right button!");
  };

  const sections = {
    Storytelling: {
      title: "The $DGT Story",
      bg: "bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/20",
      content: "Digital Gold Token ($DGT) is a decentralized staking ecosystem..."
    },
    Tokenomics: {
      title: "$DGT Tokenomics",
      bg: "bg-gradient-to-br from-neutral-950 via-amber-950/40 to-neutral-950",
      content: "Total Supply: 500 Billion $DGT..."
    },
    Whitepaper: {
      title: "$DGT Technical Whitepaper",
      bg: "bg-gradient-to-br from-stone-950 via-stone-900 to-neutral-950",
      content: "Frontend: Next.js + Tailwind. Backend: C++ Engine."
    }
  };

  return (
    <main className={`min-h-screen ${bgColor} text-white flex flex-col items-center justify-between p-6 transition-all duration-700 ease-in-out relative`}>
      
      {/* Top Wallet Connect Bar */}
      <div className="w-full max-w-6xl flex justify-between items-center p-4 z-50 relative">
        <div className="flex items-center gap-4 bg-neutral-900/50 p-2 pr-4 rounded-2xl border border-neutral-800/50">
          <img src="https://i.postimg.cc/FHcpQGs8/opengraph-image.png" alt="DGT Logo" width={45} height={45} className="rounded-xl shadow-lg"/>
          <div className="hidden sm:block">
            <p className="text-[10px] text-neutral-400 uppercase tracking-widest mb-0.5">Contract Address</p>
            <p className="text-xs font-mono text-amber-500">0x7353BA5DB88Cc9F2778aeDe8F17975f9c781edC6</p>
          </div>
        </div> 

        {/* DITO NA NAKALAGAY YUNG WALLET BUTTON */}
        <WalletButton />
      </div>

      <div className="z-20 text-center max-w-3xl w-full my-auto px-4 relative">
        <div className="flex flex-col items-center">
          <motion.h1 className="text-6xl font-bold bg-gradient-to-b from-amber-200 to-amber-600 bg-clip-text text-transparent mb-6">
            Digital Gold Token
          </motion.h1>

          <div className="bg-neutral-900/80 border border-neutral-800/60 p-8 rounded-3xl backdrop-blur-lg shadow-xl w-full max-w-md">
            <p className="text-neutral-400 text-sm uppercase tracking-widest">Staked Balance</p>
            <p className="text-4xl font-mono text-amber-500 mt-2 mb-6">{stakedBalance.toLocaleString()}</p>
            
            <input 
              type="text" 
              placeholder="Enter $DGT amount" 
              value={stakeInput}
              onChange={(e) => setStakeInput(e.target.value)}
              className="w-full bg-black/50 border border-neutral-800 text-center font-mono text-amber-400 py-3 rounded-xl mb-4 focus:outline-none"
            />

            <div className="grid grid-cols-2 gap-4 w-full">
              <button onClick={handleStake} className="bg-gradient-to-r from-amber-600 to-amber-500 text-black font-semibold py-3 rounded-xl">Stake</button>
              <button onClick={handleUnstake} className="border border-neutral-700 text-neutral-300 py-3 rounded-xl">Unstake</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}