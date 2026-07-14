'use client';
import { useState } from 'react';
import WalletButton from './WalletButton';

export default function Home() {
  const [stakedBalance] = useState(100000000000);
  const [openSection, setOpenSection] = useState<string | null>('Storytelling');

  const sections = [
    { 
      title: "Storytelling", 
      content: "Digital Gold Token ($DGT) is a decentralized staking ecosystem built to provide stability and long-term value to holders." 
    },
    { 
      title: "Tokenomics", 
      content: "Total Supply: 500 Billion $DGT. 40% allocated for staking rewards, 30% for liquidity, and 30% for ecosystem development." 
    },
    { 
      title: "Whitepaper", 
      content: "Our architecture utilizes a high-performance C++ engine for fast transactions, integrated with a secure Next.js frontend." 
    }
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-12">
      <header className="flex justify-between items-center max-w-[1400px] mx-auto mb-16">
        <div className="flex items-center gap-4 bg-neutral-900/50 p-3 px-6 rounded-2xl border border-neutral-800">
          <img src="https://i.postimg.cc/FHcpQGs8/opengraph-image.png" alt="DGT Logo" width={50} height={50} className="rounded-xl"/>
          <div>
            <p className="text-[10px] text-neutral-400 uppercase tracking-widest">Contract Address</p>
            <p className="text-sm font-mono text-amber-500">0x7353BA5DB88Cc9F2778aeDe8F17975f9c781edC6</p>
          </div>
        </div>
        <WalletButton />
      </header>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Staking */}
        <section className="lg:col-span-7 bg-neutral-900/40 p-12 rounded-3xl border border-neutral-800 shadow-2xl">
          <h1 className="text-6xl font-bold bg-gradient-to-b from-amber-200 to-amber-600 bg-clip-text text-transparent mb-6">
            Digital Gold Token
          </h1>
          <p className="text-neutral-400 text-lg mb-10">Stake your $DGT to earn rewards in our decentralized ecosystem.</p>
          
          <div className="bg-black/40 p-8 rounded-2xl border border-neutral-800">
            <p className="text-neutral-400 uppercase tracking-widest text-sm">Staked Balance</p>
            <p className="text-5xl font-mono text-amber-500 mt-2 mb-8">{stakedBalance.toLocaleString()}</p>
            <button className="w-full bg-amber-500 text-black font-bold py-4 rounded-xl hover:bg-amber-400 transition-all">Stake Tokens</button>
          </div>
        </section>

        {/* Right Side: Info Sections */}
        <section className="lg:col-span-5 space-y-6">
          {sections.map((sec) => (
            <div key={sec.title} className="bg-neutral-900/40 rounded-2xl border border-neutral-800 overflow-hidden transition-all">
              <button 
                onClick={() => setOpenSection(openSection === sec.title ? null : sec.title)}
                className="w-full p-8 flex justify-between items-center text-xl text-amber-500 font-bold hover:bg-neutral-800/50"
              >
                {sec.title}
                <span className="text-2xl">{openSection === sec.title ? '−' : '+'}</span>
              </button>
              {openSection === sec.title && (
                <div className="px-8 pb-8 text-neutral-400 leading-relaxed border-t border-neutral-800 pt-6">
                  {sec.content}
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}