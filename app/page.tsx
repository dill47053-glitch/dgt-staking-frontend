"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [matrixText, setMatrixText] = useState("");

  useEffect(() => {
    const characters = "0 1 3 6 9 ETH BTC DGT 0x A B C D E F ∞ ∆ ∇ ∿ 777 888 999 ⌘ ₿ Ξ";
    
    const generateQuantumHash = () => {
      let result = "";
      for (let i = 0; i < 500; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    };

    setMatrixText(generateQuantumHash());

    const interval = setInterval(() => {
      setMatrixText(generateQuantumHash());
    }, 250); 

    return () => clearInterval(interval);
  }, []);

  return (
    // Tinanggal natin ang overflow-hidden dito para makapag-scroll pababa
    <main className="relative flex flex-col min-h-screen bg-gradient-to-br from-zinc-900 via-neutral-950 to-yellow-950 text-white font-sans">
      
      <style>{`
        @keyframes glitch-anim {
          0%, 90%, 100% { transform: translate(0) skew(0deg); filter: hue-rotate(0deg); }
          92% { transform: translate(-5px, 4px) skew(-5deg); filter: hue-rotate(90deg) brightness(1.5); }
          94% { transform: translate(5px, -4px) skew(5deg); filter: hue-rotate(-90deg) brightness(0.8); }
          96% { transform: translate(-5px, -4px) skew(-5deg); filter: hue-rotate(45deg); }
          98% { transform: translate(5px, 4px) skew(5deg); }
        }
        .glitch-logo { animation: glitch-anim 4s infinite; }

        @keyframes matrix-scroll {
          0% { transform: translateY(-10%); }
          100% { transform: translateY(10%); }
        }
        .matrix-bg { animation: matrix-scroll 10s ease-in-out infinite alternate; }
      `}</style>

      {/* 🌌 FIXED BACKGROUND (Hindi sasama sa pag-scroll) */}
      <div className="fixed inset-0 z-0 overflow-hidden flex flex-col justify-center items-center pointer-events-none opacity-40">
         <div 
           className="matrix-bg text-yellow-500/90 font-mono text-xl md:text-3xl break-all p-4 text-center leading-loose tracking-widest w-[120%]"
           style={{ textShadow: '0px 0px 15px rgba(234, 179, 8, 1)' }}
         >
            {matrixText}
         </div>
      </div>

      {/* 📜 SCROLLABLE FOREGROUND CONTENT */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-12 flex flex-col gap-32">
        
        {/* 1. HERO SECTION (Yung ginawa natin kanina) */}
        <section className="min-h-[85vh] flex flex-col items-center justify-center bg-black/30 p-12 rounded-3xl backdrop-blur-xl border border-yellow-600/40 shadow-[0_0_80px_rgba(0,0,0,0.6)] mt-10">
          <div className="mb-8 glitch-logo relative">
            <Image 
              src="/dgt-logo.png" 
              alt="DGT Logo" 
              width={240} 
              height={240} 
              className="rounded-full shadow-[0_0_60px_rgba(234,179,8,0.7)] border-4 border-yellow-500"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-yellow-400 to-yellow-700 mb-6 text-center drop-shadow-lg">
            Digital Gold Token $DGT
          </h1>
          <p className="text-lg md:text-2xl text-yellow-100/90 max-w-3xl text-center mt-4 font-light tracking-wide drop-shadow-md">
            The future of decentralized assets. Building a solid foundation for our community.
          </p>
        </section>

        {/* 2. TOKENOMICS SECTION */}
        <section className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-10 drop-shadow-md">Tokenomics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {[
              { title: "Total Supply", value: "500,000,000,000 $DGT" },
              { title: "Liquidity Pool", value: "Locked for 1 Year" },
              { title: "Transaction Tax", value: "3% Buy / 5% Sell" }
            ].map((item, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-yellow-700/50 text-center hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] transition-all">
                <h3 className="text-xl text-yellow-200 mb-4">{item.title}</h3>
                <p className="text-2xl font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. HOW TO BUY SECTION */}
        <section className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-10 drop-shadow-md">How to Buy</h2>
          <div className="flex flex-col gap-6 w-full max-w-4xl">
            {[
              { step: "1", title: "Create a Wallet", desc: "Download MetaMask or Trust Wallet and set it up on your device." },
              { step: "2", title: "Get BNB/ETH", desc: "Purchase BNB or ETH from an exchange and send it to your wallet." },
              { step: "3", title: "Swap for $DGT", desc: "Go to our supported DEX, connect your wallet, and swap for Digital Gold Token." }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-6 bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-yellow-700/30">
                <div className="text-5xl font-extrabold text-yellow-600/50">{item.step}</div>
                <div>
                  <h3 className="text-2xl font-bold text-yellow-300">{item.title}</h3>
                  <p className="text-gray-300 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. DGT BRIDGE UI MOCKUP */}
        <section className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-10 drop-shadow-md">Cross-Chain Bridge</h2>
          <div className="w-full max-w-3xl bg-black/50 backdrop-blur-xl p-10 rounded-3xl border border-yellow-500/50 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 bg-zinc-900 p-6 rounded-xl border border-yellow-900/50 text-center w-full">
              <p className="text-gray-400 mb-2">From Network</p>
              <h3 className="text-2xl font-bold text-white">Ethereum (ETH)</h3>
            </div>
            <div className="text-4xl text-yellow-500 animate-pulse">⇄</div>
            <div className="flex-1 bg-zinc-900 p-6 rounded-xl border border-yellow-900/50 text-center w-full">
              <p className="text-gray-400 mb-2">To Network</p>
              <h3 className="text-2xl font-bold text-white">Binance (BNB)</h3>
            </div>
          </div>
          <p className="text-gray-400 mt-6 italic">* Bridge functionality coming in Phase 3</p>
        </section>

        {/* 5. ROADMAP SECTION */}
        <section className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-10 drop-shadow-md">Roadmap</h2>
          <div className="w-full max-w-3xl space-y-8 border-l-2 border-yellow-600 pl-8 ml-4">
            <div>
              <h3 className="text-3xl font-bold text-yellow-300 mb-2">Phase 1: Genesis</h3>
              <ul className="list-disc text-gray-300 ml-5 space-y-1">
                <li>Smart Contract Development</li>
                <li>Dashboard Launch (Vercel)</li>
                <li>Community Building</li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-yellow-300 mb-2">Phase 2: Expansion</h3>
              <ul className="list-disc text-gray-300 ml-5 space-y-1">
                <li>DEX Listing & Marketing</li>
                <li>CoinMarketCap & CoinGecko Application</li>
                <li>First CEX Listing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-500 mb-2">Phase 3: Ecosystem (Upcoming)</h3>
              <ul className="list-disc text-gray-500 ml-5 space-y-1">
                <li>Cross-chain Bridge Activation</li>
                <li>Staking & Yield Farming Protocol</li>
                <li>DGT Utility Rollout</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. WHITEPAPER CTA SECTION */}
        <section className="flex flex-col items-center mb-24">
          <div className="bg-gradient-to-b from-yellow-900/40 to-black/60 p-12 rounded-3xl border border-yellow-500/50 text-center max-w-4xl w-full backdrop-blur-md">
            <h2 className="text-4xl font-bold text-white mb-6">Read Our Whitepaper</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Dive deep into the technical specifications, quantum randomness integration, and the visionary numerology behind Digital Gold Token.
            </p>
            <button className="bg-yellow-600 hover:bg-yellow-500 text-black font-bold text-xl py-4 px-10 rounded-full transition-all shadow-[0_0_20px_rgba(234,179,8,0.5)] hover:shadow-[0_0_40px_rgba(234,179,8,0.8)]">
              Download Whitepaper (PDF)
              {/* 6. WHITEPAPER CTA SECTION */}
        <section className="flex flex-col items-center mb-24">
          <div className="bg-gradient-to-b from-yellow-900/40 to-black/60 p-12 rounded-3xl border border-yellow-500/50 text-center max-w-4xl w-full backdrop-blur-md">
            <h2 className="text-4xl font-bold text-white mb-6">Read Our Whitepaper</h2>
            
            <div className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto space-y-4 font-light">
              <p>
                Ang <strong className="text-yellow-400 font-semibold">Digital Gold Token ($DGT) Whitepaper</strong> ay ang pangunahing blueprint ng ating ecosystem. Detalyado rito kung paano natin pinagsama ang Decentralized Finance (DeFi) at Quantum Numerology para makabuo ng isang matibay na digital asset.
              </p>
              <p>
                Alamin ang malalim na mekanismo ng ating deflationary tokenomics, liquidity lock protocols, at ang arkitektura ng ating parating na Cross-Chain Bridge. Basahin kung paano gumagana ang "Ritual Logic" at "Quantum Randomness" sa loob ng ating smart contracts.
              </p>
            </div>

            {/* Ginawa nating <a> tag na may download attribute para gumana ang pag-download */}
            <a 
              href="/dgt-whitepaper.pdf" 
              download="DGT_Whitepaper_Official.pdf"
              className="inline-block bg-yellow-600 hover:bg-yellow-500 text-black font-bold text-xl py-4 px-10 rounded-full transition-all shadow-[0_0_20px_rgba(234,179,8,0.5)] hover:shadow-[0_0_40px_rgba(234,179,8,0.8)]"
            >
              Download Whitepaper (PDF)
            </a>
          </div>
        </section>
            </button>
          </div>
        </section>

      </div>
    </main>
  );
}