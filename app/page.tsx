'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount, useDisconnect } from 'wagmi';

export default function Home() {
  // Gagamitin na natin ang totoong Web3 hooks!
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const [stakedBalance, setStakedBalance] = useState(100000000000); 
  const [stakeInput, setStakeInput] = useState('');
  const [currentTab, setCurrentTab] = useState('Dashboard');
  const [bgColor, setBgColor] = useState('bg-[#0a0a0a]');

  const handleStake = () => {
    if (!isConnected) {
      alert("Please connect your Web3 wallet first!");
      return;
    }
    const cleanInput = stakeInput.trim();
    if (!cleanInput || isNaN(Number(cleanInput)) || Number(cleanInput) <= 0) {
      alert("Please enter a valid amount to stake!");
      return;
    }
    
    const amount = Number(cleanInput);
    setStakedBalance(prev => prev + amount);
    alert(`Transaction sent! Staking ${amount.toLocaleString()} $DGT...`);
    setStakeInput('');
  };

  const handleUnstake = () => {
    if (!isConnected) {
      alert("Please connect your Web3 wallet first!");
      return;
    }
    const cleanInput = stakeInput.trim();
    if (!cleanInput || isNaN(Number(cleanInput)) || Number(cleanInput) <= 0) {
      alert("Please enter a valid amount to claim!");
      return;
    }

    const amount = Number(cleanInput);
    if (amount > stakedBalance) {
      alert(`Insolvent: Not enough staked balance!\nAvailable: ${stakedBalance.toLocaleString()}`);
      return;
    }

    setStakedBalance(prev => prev - amount);
    alert(`Transaction sent! Claiming ${amount.toLocaleString()} $DGT back to your wallet...`);
    setStakeInput('');
  };

  const sections = {
    Storytelling: {
      title: "The $DGT Story",
      bg: "bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/20",
      content: "Digital Gold Token ($DGT) was conceived with a clear vision: to return true financial control to the community through a fast, transparent, and fully decentralized staking ecosystem.\n\nMore than just a token, $DGT represents the convergence of cutting-edge Web3 blockchain architecture and ultra-low latency backend operations powered by a high-performance C++ Core Engine. With every block secured and staking cycle completed, $DGT builds a narrative of a resilient, modern digital asset designed for the future."
    },
    Tokenomics: {
      title: "$DGT Tokenomics",
      bg: "bg-gradient-to-br from-neutral-950 via-amber-950/40 to-neutral-950",
      content: "• Total Supply: 500,000,000,000 $DGT (500 Billion)\n\n• Supply Allocation:\n  - 50% Staking Rewards Pool: 250,000,000,000 $DGT (Dedicated to rewarding loyal holders and network validators)\n  - 20% Liquidity Provisioning: 100,000,000,000 $DGT (Ensuring smooth and seamless market trading)\n  - 15% Core Ecosystem Development & Upgrades: 75,000,000,000 $DGT\n  - 15% Community Incentives & Air-drops: 75,000,000,000 $DGT\n\n• Dynamic Emission: The reward release cycle and emission rate are calculated in real-time by our native backend algorithm based on total network load and staking volume."
    },
    Whitepaper: {
      title: "$DGT Technical Whitepaper",
      bg: "bg-gradient-to-br from-stone-950 via-stone-900 to-neutral-950",
      content: "1. FRONTEND ARCHITECTURE\nThe visual layer is engineered using Next.js and Tailwind CSS to facilitate fast, SEO-optimized, and highly responsive user interfaces.\n\n2. C++ ENGINE PERFORMANCE\nTo completely eliminate high latency caused by intense data processing routines (such as Moving Averages), the core analytical computations are handled natively in C++ (TradingEngine.cpp) and compiled as a shared dynamic library (.so). The Python API server interfaces with this module via a ctypes wrapper to achieve bare-metal execution speed.\n\n3. SMART CONTRACT LAYER\nThe foundational staking and token distribution logic are enforced by immutable ERC-20 smart contracts, rigorously tested and deployed using the Brownie framework onto a local high-speed Anvil blockchain node. The live deployment contract address is dynamically bound to the network client interface."
    }
  };

  return (
    <main className={`min-h-screen ${bgColor} text-white flex flex-col items-center justify-between p-6 transition-all duration-700 ease-in-out relative overflow-hidden`}>
      
      {/* Top Wallet Connect Bar */}
      <div className="w-full max-w-6xl flex justify-between items-center p-4 z-50 relative">
        <div className="flex items-center gap-4 bg-neutral-900/50 p-2 pr-4 rounded-2xl border border-neutral-800/50">
          <img 
            src="https://i.postimg.cc/FHcpQGs8/opengraph-image.png" 
            alt="DGT Logo" 
            width={45} 
            height={45} 
            className="rounded-xl shadow-lg"
          />
          <div className="hidden sm:block">
            <p className="text-[10px] text-neutral-400 uppercase tracking-widest mb-0.5">Contract Address</p>
            <p className="text-xs font-mono text-amber-500">0x7353BA5DB88Cc9F2778aeDe8F17975f9c781edC6</p>
          </div>
        </div> 

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
      </div>

      <div className="z-20 text-center max-w-3xl w-full my-auto px-4 relative">
        {currentTab === 'Dashboard' ? (
          <div className="flex flex-col items-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-bold bg-gradient-to-b from-amber-200 to-amber-600 bg-clip-text text-transparent mb-6"
            >
              Digital Gold Token
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-neutral-900/80 border border-neutral-800/60 p-8 rounded-3xl backdrop-blur-lg shadow-xl w-full max-w-md flex flex-col items-center z-30 relative"
            >
              {/* NAKALABAS NA WALLET ADDRESS DISPLAY */}
              {isConnected && address && (
                <div className="w-full bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3 mb-6 transition-all">
                  <p className="text-[10px] text-emerald-400/70 uppercase tracking-widest mb-1">Your Connected Wallet</p>
                  <p className="text-xs sm:text-sm font-mono text-emerald-400 break-all">{address}</p>
                </div>
              )}

              <p className="text-neutral-400 text-sm uppercase tracking-widest">Staked Balance</p>
              <p className="text-4xl font-mono text-amber-500 mt-2 mb-6">{stakedBalance.toLocaleString()}</p>
              
              <input 
                type="text" 
                placeholder="Enter $DGT amount" 
                value={stakeInput}
                onChange={(e) => setStakeInput(e.target.value)}
                className="w-full bg-black/50 border border-neutral-800 text-center font-mono text-amber-400 py-3 rounded-xl mb-4 focus:outline-none focus:border-amber-500/50 transition-colors z-30 relative"
              />

              <div className="grid grid-cols-2 gap-4 w-full z-30 relative">
                <button 
                  onClick={handleStake}
                  className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-semibold py-3 rounded-xl transition-all shadow-lg active:scale-95 cursor-pointer z-40 relative block"
                >
                  Stake $DGT
                </button>
                <button 
                  onClick={handleUnstake}
                  className="border border-neutral-700 hover:border-amber-500/30 hover:bg-amber-500/5 text-neutral-300 hover:text-amber-400 font-semibold py-3 rounded-xl transition-all active:scale-95 cursor-pointer z-40 relative block"
                >
                  Unstake / Claim
                </button>
              </div>
            </motion.div>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-black/40 border border-amber-500/10 p-8 rounded-3xl backdrop-blur-md shadow-2xl text-left z-30 relative"
          >
            <button 
              onClick={() => { setCurrentTab('Dashboard'); setBgColor('bg-[#0a0a0a]'); }}
              className="text-xs text-amber-500 hover:text-amber-400 transition-colors mb-4 inline-block font-medium cursor-pointer"
            >
              ← Back to Staking Dashboard
            </button>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent mb-6">
              {sections[currentTab as keyof typeof sections].title}
            </h2>
            <p className="text-neutral-300 leading-relaxed text-base whitespace-pre-line font-light">
              {sections[currentTab as keyof typeof sections].content}
            </p>
          </motion.div>
        )}
      </div>

      <div className="z-20 w-full max-w-4xl mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center border-t border-neutral-800/50 pt-8 pb-4 relative">
        {['Storytelling', 'Tokenomics', 'Whitepaper'].map((item) => (
          <button 
            key={item}
            onClick={() => {
              setCurrentTab(item);
              setBgColor(sections[item as keyof typeof sections].bg); 
            }}
            className={`transition-all duration-300 cursor-pointer text-sm font-medium tracking-wide py-2 rounded-xl border ${
              currentTab === item 
                ? 'text-amber-400 border-amber-500/30 bg-amber-500/5 shadow-md' 
                : 'text-neutral-500 border-transparent hover:text-neutral-300'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </main>
  );
}