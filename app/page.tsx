'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import WalletButton from './WalletButton';

export default function Home() {
  const [stakedBalance, setStakedBalance] = useState(100000000000); 
  const [stakeInput, setStakeInput] = useState('');
  const [bgColor, setBgColor] = useState('bg-[#0a0a0a]');

  const handleStake = () => alert("Please ensure your wallet is connected!");
  const handleUnstake = () => alert("Please ensure your wallet is connected!");

  const sections = [
    { title: "Storytelling", content: "Digital Gold Token ($DGT) is a decentralized staking ecosystem..." },
    { title: "Tokenomics", content: "Total Supply: 500 Billion $DGT..." },
    { title: "Whitepaper", content: "Frontend: Next.js + Tailwind. Backend: C++ Engine." }
  ];

  return (
    <main className={`min-h-screen ${bgColor} text-white p-6 relative`}>
      {/* Header */}
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-12">
        <div className="flex items-center gap-4 bg-neutral-900/50 p-2 pr-4 rounded-2xl border border-neutral-800/50">
          <img src="https://i.postimg.cc/FHcpQGs8/opengraph-image.png" alt="DGT Logo" width={45} height={45} className="rounded-xl"/>
          <div>
            <p className="text-[10px] text-neutral-400 uppercase tracking-widest">Contract Address</p>
            <p className="text-xs font-mono text-amber-500">0x7353BA5DB88Cc9F2778aeDe8F17975f9c781edC6</p>
          </div>
        </div>
        <WalletButton />
      </div>

      {/* Hero / Staking */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold bg-gradient-to-b from-amber-200 to-amber-600 bg-clip-text text-transparent mb-6">Digital Gold Token</h1>
        <div className="bg-neutral-900/80 border border-neutral-800/60 p-8 rounded-3xl backdrop-blur-lg shadow-xl w-full max-w-md mx-auto">
          <p className="text-neutral-400 text-sm uppercase tracking-widest">Staked Balance</p>
          <p className="text-4xl font-mono text-amber-500 mt-2 mb-6">{stakedBalance.toLocaleString()}</p>
          <input 
            type="text" 
            placeholder="Enter $DGT amount" 
            value={stakeInput}
            onChange={(e) => setStakeInput(e.target.value)}
            className="w-full bg-black/50 border border-neutral-800 text-center py-3 rounded-xl mb-4 focus:outline-none"
          />
          <div className="grid grid-cols-2 gap-4">
            <button onClick={handleStake} className="bg-gradient-to-r from-amber-600 to-amber-500 text-black font-semibold py-3 rounded-xl">Stake</button>
            <button onClick={handleUnstake} className="border border-neutral-700 text-neutral-300 py-3 rounded-xl">Unstake</button>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {sections.map((sec, i) => (
          <div key={i} className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800">
            <h2 className="text-xl font-semibold text-amber-500 mb-4">{sec.title}</h2>
            <p className="text-neutral-400 text-sm">{sec.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
}