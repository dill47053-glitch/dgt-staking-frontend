'use client';
import { useState } from 'react';
import WalletButton from './WalletButton';

export default function Home() {
  const [stakedBalance] = useState(100000000000);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    { title: "Storytelling", content: "Digital Gold Token ($DGT) is a decentralized staking ecosystem built to provide stability and long-term value to holders." },
    { title: "Tokenomics", content: "Total Supply: 500 Billion $DGT. 40% allocated for staking rewards, 30% for liquidity, and 30% for ecosystem development." },
    { title: "Whitepaper", content: "Our architecture utilizes a high-performance C++ engine for fast transactions, integrated with a secure Next.js frontend." }
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-8">
      <header className="flex justify-between items-center max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-4 bg-neutral-900/50 p-2 pr-4 rounded-2xl border border-neutral-800/50">
          <img src="https://i.postimg.cc/FHcpQGs8/opengraph-image.png" alt="DGT Logo" width={45} height={45} className="rounded-xl"/>
          <div>
            <p className="text-[10px] text-neutral-400 uppercase tracking-widest">Contract Address</p>
            <p className="text-xs font-mono text-amber-500">0x7353BA5DB88Cc9F2778aeDe8F17975f9c781edC6</p>
          </div>
        </div>
        <WalletButton />
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Staking */}
        <section className="lg:col-span-7 bg-neutral-900/40 p-10 rounded-3xl border border-neutral-800 shadow-2xl">
          <h1 className="text-5xl font-bold bg-gradient-to-b from-amber-200 to-amber-600 bg-clip-text text-transparent mb-6">Digital Gold Token</h1>
          <p className="text-neutral-400 mb-8">Stake your $DGT to earn rewards in our decentralized ecosystem.</p>
          
          <div className="bg-black/40 p-8 rounded-2xl border border-neutral-800">
            <p className="text-neutral-400 text-sm uppercase">Staked Balance</p>
            <p className="text-4xl font-mono text-amber-500 mt-2 mb-6">{stakedBalance.toLocaleString()}</p>
            <button className="w-full bg-amber-500 text-black font-bold py-4 rounded-xl hover:bg-amber-400 transition-colors">Stake Tokens</button>
          </div>
        </section>

        {/* Right Side: Interactive Sections */}
        <section className="lg:col-span-5 space-y-4">
          {sections.map((sec) => (
            <div key={sec.title} className="bg-neutral-900/50 rounded-2xl border border-neutral-800 overflow-hidden">
              <button 
                onClick={() => toggleSection(sec.title)}
                className="w-full p-6 flex justify-between items-center text-amber-500 font-semibold hover:bg-neutral-800/50 transition-all"
              >
                {sec.title}
                <span>{openSection === sec.title ? '−' : '+'}</span>
              </button>
              {openSection === sec.title && (
                <div className="p-6 pt-0 text-neutral-400 text-sm border-t border-neutral-800 bg-neutral-950/50">
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