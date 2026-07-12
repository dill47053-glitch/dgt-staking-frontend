'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [stakedBalance, setStakedBalance] = useState(100000000000);
  const [currentTab, setCurrentTab] = useState('Dashboard');
  const [bgColor, setBgColor] = useState('bg-[#0a0a0a]'); // Default dark color

  useEffect(() => {
    const fetchRewards = async () => {
      try {
        const res = await fetch('http://127.0.0.1:5001/api/rewards');
        const data = await res.json();
        setStakedBalance(data.rewards);
      } catch (err) {
        console.log("Using cached/default balance");
      }
    };
    fetchRewards();
  }, []);

  const sections = {
    Storytelling: {
      title: "Ang Kwento ng $DGT",
      bg: "bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/20",
      content: "Ang Digital Gold Token ($DGT) ay ipinanganak mula sa pananaw na ibalik ang tunay na halaga at kapangyarihan ng pinansyal sa komunidad sa pamamagitan ng isang mabilis, transparent, at ganap na desentralisadong staking ecosystem.\n\nHindi ito simpleng token lamang. Ito ay pagsasanib ng makabagong Web3 blockchain solutions at ultra-low latency backend operations na pinatatakbo ng isang high-performance C++ Core Engine. Sa bawat block at staking cycle, ang $DGT ay patuloy na lumilikha ng kuwento ng matatag at modernong digital asset."
    },
    Tokenomics: {
      title: "$DGT Tokenomics",
      bg: "bg-gradient-to-br from-neutral-950 via-amber-950/40 to-neutral-950",
      content: "• Kabuuang Supply: 1,000,000 $DGT\n\n• Alokasyon ng Supply:\n  - 50% Staking Rewards Pool (Para sa mga tapat na holders at network validators)\n  - 20% Liquidity Provisioning (Para sa malinis at walang aberyang kalakalan)\n  - 15% Core Ecosystem Development & Upgrades\n  - 15% Community Incentives & Air-drops\n\n• Dynamic Mechanism: Ang reward release cycle at emission rate ay direktang kinakalkula ng native backend algorithm base sa kabuuang network load at volume."
    },
    Whitepaper: {
      title: "$DGT Technical Whitepaper",
      bg: "bg-gradient-to-br from-stone-950 via-stone-900 to-neutral-950",
      content: "1. KAGAMITAN SA FRONTEND\nAng visual interface ay binuo gamit ang Next.js at Tailwind CSS para sa mabilis, SEO-optimized, at responsive na rendering.\n\n2. C++ ENGINE PERFORMANCE\nPara maiwasan ang malaking latency na dulot ng mabibigat na analytical algorithms (tulad ng Moving Averages), ang core computational engine ay isinulat sa C++ (TradingEngine.cpp) at na-compile bilang isang dynamic shared library (.so). Ang Python API server ay nakikipag-ugnayan dito sa pamamagitan ng ctypes wrapper para sa bare-metal speed.\n\n3. SMART CONTRACT LAYER\nAng staking at token mechanism ay pinapatakbo ng ERC-20 smart contracts na fully-tested at naka-deploy gamit ang Brownie suite sa isang local high-speed Anvil blockchain node. Ang contract deployment address ay secure na naka-bind sa network interface."
    }
  };

  return (
    <main className={`min-h-screen ${bgColor} text-white flex flex-col items-center justify-between p-6 transition-all duration-700 ease-in-out relative overflow-hidden`}>
      
      {/* 3D Floating Gold Effect (Gagana kahit magpalit ng tab) */}
      <motion.div 
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="w-40 h-40 bg-gradient-to-tr from-amber-600 to-amber-300 rounded-full blur-2xl opacity-20 absolute top-1/4"
      />

      {/* Main Container Area */}
      <div className="z-10 text-center max-w-3xl w-full my-auto px-4">
        {currentTab === 'Dashboard' ? (
          /* ORIGINAL DASHBOARD VIEW */
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
              className="bg-neutral-900/80 border border-neutral-800/60 p-8 rounded-3xl backdrop-blur-lg shadow-xl w-full max-w-md"
            >
              <p className="text-neutral-400 text-sm uppercase tracking-widest">Staked Balance</p>
              <p className="text-4xl font-mono text-amber-500 mt-2">{stakedBalance.toLocaleString()}</p>
            </motion.div>
          </div>
        ) : (
          /* DYNAMIC TABS VIEW (Story, Tokenomics, Whitepaper) */
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-black/40 border border-white/5 p-8 rounded-3xl backdrop-blur-md shadow-2xl text-left border border-amber-500/10"
          >
            <button 
              onClick={() => { setCurrentTab('Dashboard'); setBgColor('bg-[#0a0a0a]'); }}
              className="text-xs text-amber-500 hover:text-amber-400 transition-colors mb-4 inline-block font-medium"
            >
              ← Balik sa Staking Dashboard
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

      {/* Footer Navigation Tabs */}
      <div className="z-10 w-full max-w-4xl mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center border-t border-neutral-800/50 pt-8 pb-4">
        {['Storytelling', 'Tokenomics', 'Whitepaper'].map((item) => (
          <button 
            key={item}
            onClick={() => {
              setCurrentTab(item);
              setBgColor(sections[item as keyof typeof sections].bg); // Dito natin binabago ang background dynamically!
            }}
            className={`transition-all duration-300 cursor-pointer text-sm font-medium tracking-wide py-2 rounded-xl border ${
              currentTab === item 
                ? 'text-amber-400 border-amber-500/30 bg-amber-500/5 shadow-md shadow-amber-500/5' 
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