'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import WalletButton from './WalletButton';

export default function Home() {
  const [stakedBalance, setStakedBalance] = useState(100000000000);
  const [stakeInput, setStakeInput] = useState('');

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-8">
      {/* Header */}
      <header className="flex justify-between items-center w-full mb-12">
        <div className="flex items-center gap-4 bg-neutral-900/50 p-2 pr-4 rounded-2xl border border-neutral-800/50">
          <img src="https://i.postimg.cc/FHcpQGs8/opengraph-image.png" alt="DGT Logo" width={45} height={45} className="rounded-xl"/>
          <div>
            <p className="text-[10px] text-neutral-400 uppercase tracking-widest">Contract Address</p>
            <p className="text-xs font-mono text-amber-500">0x7353BA5DB88Cc9F2778aeDe8F17975f9c781edC6</p>
          </div>
        </div>
        <WalletButton />
      </header>

      {/* Main Layout - Grid na nakasentro */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Side: Staking */}
        <section className="bg-neutral-900/40 p-8 rounded-3xl border border-neutral-800 backdrop-blur-sm">
          <h1 className="text-5xl font-bold bg-gradient-to-b from-amber-200 to-amber-600 bg-clip-text text-transparent mb-6">
            Digital Gold Token
          </h1>
          <p className="text-neutral-400 mb-8">Stake your $DGT to earn rewards in our decentralized ecosystem.</p>
          
          <div className="bg-black/40 p-6 rounded-2xl border border-neutral-800">
            <p className="text-neutral-400 text-sm uppercase">Staked Balance</p>
            <p className="text-4xl font-mono text-amber-500 mt-2 mb-6">{stakedBalance.toLocaleString()}</p>
            <input 
              type="text" 
              placeholder="Enter amount" 
              value={stakeInput}
              onChange={(e) => setStakeInput(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-700 text-white p-4 rounded-xl mb-4"
            />
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-amber-500 text-black font-bold py-3 rounded-xl hover:bg-amber-400">Stake</button>
              <button className="border border-neutral-700 py-3 rounded-xl hover:bg-neutral-800">Unstake</button>
            </div>
          </div>
        </section>

        {/* Right Side: Info Sections */}
        <section className="space-y-6">
          <div className="bg-neutral-900/40 p-6 rounded-2xl border border-neutral-800">
            <h2 className="text-xl font-semibold text-amber-500 mb-2">Storytelling</h2>
            <p className="text-neutral-400 text-sm">Digital Gold Token ($DGT) is a decentralized staking ecosystem...</p>
          </div>
          <div className="bg-neutral-900/40 p-6 rounded-2xl border border-neutral-800">
            <h2 className="text-xl font-semibold text-amber-500 mb-2">Tokenomics</h2>
            <p className="text-neutral-400 text-sm">Total Supply: 500 Billion $DGT...</p>
          </div>
          <div className="bg-neutral-900/40 p-6 rounded-2xl border border-neutral-800">
            <h2 className="text-xl font-semibold text-amber-500 mb-2">Whitepaper</h2>
            <p className="text-neutral-400 text-sm">Frontend: Next.js + Tailwind. Backend: C++ Engine.</p>
          </div>
        </section>
      </div>
    </main>
  );
}