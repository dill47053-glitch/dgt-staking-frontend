'use client';
import { useState } from 'react';
import WalletButton from './WalletButton';

export default function Home() {
  // States
  const [stakedBalance, setStakedBalance] = useState(100000000000);
  const [walletBalance, setWalletBalance] = useState(50000000000); // Sample initial wallet balance
  const [stakeAmount, setStakeAmount] = useState('');
  const [openSection, setOpenSection] = useState<string | null>('Storytelling');

  // Logic: Stake
  const handleStake = () => {
    const amount = parseInt(stakeAmount);
    if (amount > 0 && amount <= walletBalance) {
      setWalletBalance(walletBalance - amount);
      setStakedBalance(stakedBalance + amount);
      setStakeAmount('');
      alert("Successfully staked " + amount.toLocaleString() + " $DGT");
    } else {
      alert("Invalid amount or insufficient wallet balance.");
    }
  };

  // Logic: Unstake All
  const handleUnstake = () => {
    if (stakedBalance > 0) {
      const amountToWithdraw = stakedBalance;
      setWalletBalance(walletBalance + amountToWithdraw);
      setStakedBalance(0);
      alert("Successfully unstaked " + amountToWithdraw.toLocaleString() + " $DGT!");
    } else {
      alert("No tokens available to unstake.");
    }
  };

  // Professional Content
  const sections = [
    { 
      title: "Storytelling", 
      content: "Digital Gold Token ($DGT) represents a paradigm shift in decentralized wealth preservation. In an era of rampant inflation and market volatility, $DGT bridges the gap between traditional precious metal reliability and the borderless efficiency of blockchain technology. Our mission is to provide holders with a stable, transparent, and high-yield ecosystem, ensuring that your digital assets are not just stored, but actively working to secure your financial future." 
    },
    { 
      title: "Tokenomics", 
      content: "The $DGT economic model is built on transparency and incentivized growth. With a total supply of 500 Billion tokens, our distribution strategy is balanced as follows: 40% dedicated to high-yield staking rewards, 30% secured for deep liquidity pools, and 30% reserved for ecosystem development, strategic partnerships, and future-proofing our infrastructure." 
    },
    { 
      title: "Whitepaper", 
      content: "Our architecture leverages a proprietary high-performance C++ engine, enabling sub-millisecond transaction finality and unparalleled network throughput. By integrating a secure, scalable Next.js frontend with enterprise-grade smart contract protocols, we deliver a seamless, audited, and hardened gateway for decentralized asset management." 
    }
  ];

  return (
    <main style={{ backgroundColor: '#0a0a0a', color: '#ffffff', minHeight: '100vh', width: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        
        {/* Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#171717', padding: '20px', borderRadius: '15px', border: '1px solid #333', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img src="https://i.postimg.cc/FHcpQGs8/opengraph-image.png" alt="DGT Logo" width={50} height={50} style={{ borderRadius: '10px' }}/>
            <div>
              <p style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase' }}>Wallet Balance</p>
              <p style={{ fontSize: '18px', color: '#f59e0b', fontWeight: 'bold' }}>{walletBalance.toLocaleString()} $DGT</p>
            </div>
          </div>
          <WalletButton />
        </header>

        {/* Dashboard Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
          
          <section style={{ backgroundColor: '#171717', padding: '40px', borderRadius: '20px', border: '1px solid #333' }}>
            <h1 style={{ color: '#f59e0b', fontSize: '32px', marginBottom: '20px' }}>Staking Dashboard</h1>
            <p style={{ color: '#ccc', marginBottom: '30px' }}>Secure your tokens and earn competitive yield within the $DGT ecosystem.</p>
            
            <div style={{ backgroundColor: '#000', padding: '30px', borderRadius: '15px', border: '1px solid #333' }}>
              <p style={{ color: '#888', fontSize: '12px', textTransform: 'uppercase' }}>Total Staked Balance</p>
              <h2 style={{ fontSize: '32px', color: '#f59e0b', margin: '15px 0', fontFamily: 'monospace' }}>
                {stakedBalance.toLocaleString()} $DGT
              </h2>

              <input 
                type="number"
                placeholder="Enter amount to stake"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
                style={{ width: '100%', padding: '15px', marginBottom: '15px', backgroundColor: '#171717', border: '1px solid #333', borderRadius: '10px', color: '#fff', fontSize: '16px' }}
              />
              
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={handleStake} style={{ flex: 1, padding: '15px', backgroundColor: '#f59e0b', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>Stake</button>
                <button onClick={handleUnstake} style={{ flex: 1, padding: '15px', backgroundColor: 'transparent', border: '1px solid #f59e0b', color: '#f59e0b', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>Unstake All</button>
              </div>
            </div>
          </section>

          {/* Right Column: Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {sections.map((sec) => (
              <div key={sec.title} style={{ backgroundColor: '#171717', borderRadius: '15px', border: '1px solid #333', overflow: 'hidden' }}>
                <button 
                  onClick={() => setOpenSection(openSection === sec.title ? null : sec.title)}
                  style={{ width: '100%', padding: '25px', backgroundColor: 'transparent', border: 'none', color: '#f59e0b', fontSize: '18px', fontWeight: 'bold', textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}
                >
                  {sec.title} <span>{openSection === sec.title ? '−' : '+'}</span>
                </button>
                {openSection === sec.title && (
                  <div style={{ padding: '0 25px 25px', color: '#ccc', borderTop: '1px solid #333', paddingTop: '15px', lineHeight: '1.6' }}>
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