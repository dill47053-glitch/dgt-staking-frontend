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
    }, // <--- DITO ANG KULANG NA COMMA
    { 
      title: "Whitepaper", 
      content: "Our architecture utilizes a high-performance C++ engine for fast transactions, integrated with a secure Next.js frontend." 
    }
  ];

  const sections = [
    { title: "Storytelling", content: "Digital Gold Token ($DGT) is a decentralized staking ecosystem built to provide stability and long-term value to holders." },
    { title: "Tokenomics", content: "Total Supply: 500 Billion $DGT. 40% allocated for staking rewards, 30% for liquidity, and 30% for ecosystem development." },
    { title: "Whitepaper", content: "Our architecture utilizes a high-performance C++ engine for fast transactions, integrated with a secure Next.js frontend." }
  ];

  return (
    <main className="min-h-screen w-full" style={{ backgroundColor: '#0a0a0a', color: '#ffffff', padding: '2rem' }}>
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-16 p-4 rounded-2xl" style={{ backgroundColor: '#171717', border: '1px solid #333' }}>
          <div className="flex items-center gap-4">
            <img src="https://i.postimg.cc/FHcpQGs8/opengraph-image.png" alt="DGT Logo" width={40} height={40} className="rounded-lg"/>
            <div>
              <p className="text-[10px] uppercase text-gray-400">Contract Address</p>
              <p className="text-xs font-mono" style={{ color: '#d97706' }}>0x7353BA5DB88Cc9F2778aeDe8F17975f9c781edC6</p>
            </div>
          </div>
          <WalletButton />
        </header>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Staking Section */}
          <section className="p-8 rounded-3xl" style={{ backgroundColor: '#171717', border: '1px solid #333' }}>
            <h1 className="text-4xl font-bold mb-4" style={{ color: '#f59e0b' }}>Digital Gold Token</h1>
            <p className="text-gray-400 mb-8">Stake your $DGT to earn rewards in our decentralized ecosystem.</p>
            
            <div className="p-6 rounded-2xl" style={{ backgroundColor: '#000' }}>
              <p className="text-gray-400 text-xs uppercase">Staked Balance</p>
              <p className="text-3xl font-mono my-4" style={{ color: '#f59e0b' }}>{stakedBalance.toLocaleString()}</p>
              <button className="w-full font-bold py-3 rounded-xl" style={{ backgroundColor: '#d97706', color: '#000' }}>Stake Tokens</button>
            </div>
          </section>

          {/* Right Sections */}
          <div className="space-y-4">
            {sections.map((sec) => (
              <div key={sec.title} className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#171717', border: '1px solid #333' }}>
                <button 
                  onClick={() => setOpenSection(openSection === sec.title ? null : sec.title)}
                  className="w-full p-6 flex justify-between items-center text-lg font-bold"
                  style={{ color: '#f59e0b' }}
                >
                  {sec.title}
                  <span>{openSection === sec.title ? '−' : '+'}</span>
                </button>
                {openSection === sec.title && (
                  <div className="px-6 pb-6 text-gray-400 border-t border-gray-800 pt-4">
                    {sec.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}