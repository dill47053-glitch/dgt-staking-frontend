'use client';
import { useState, useEffect } from 'react';

const STAKING_CONTRACT_ADDRESS = '0xE87d902f8Db9eb3b359a516F093Bf6Bcf7248a6A';

export default function Home() {
  const [stakedBalance, setStakedBalance] = useState(100000000000);
  const [walletBalance, setWalletBalance] = useState(400000000000);
  const [stakeAmount, setStakeAmount] = useState('');
  const [openSection, setOpenSection] = useState<string | null>('Storytelling');

  // Ito ang tamang paraan para mag-load mula sa localStorage
  useEffect(() => {
    const savedStaked = localStorage.getItem('stakedBalance');
    const savedWallet = localStorage.getItem('walletBalance');
    if (savedStaked) setStakedBalance(parseInt(savedStaked));
    if (savedWallet) setWalletBalance(parseInt(savedWallet));
  }, []);

  const handleStake = () => {
    const amount = parseInt(stakeAmount);
    if (amount > 0 && amount <= walletBalance) {
      const newWallet = walletBalance - amount;
      const newStaked = stakedBalance + amount;
      
      setWalletBalance(newWallet);
      setStakedBalance(newStaked);
      
      localStorage.setItem('walletBalance', newWallet.toString());
      localStorage.setItem('stakedBalance', newStaked.toString());
      
      setStakeAmount('');
      alert("Successfully staked " + amount.toLocaleString() + " $DGT");
    } else {
      alert("Invalid amount or insufficient wallet balance.");
    }
  };

  const handleUnstake = () => {
    if (stakedBalance > 0) {
      const amountToWithdraw = stakedBalance;
      const newWallet = walletBalance + amountToWithdraw;
      
      setWalletBalance(newWallet);
      setStakedBalance(0);

      localStorage.setItem('walletBalance', newWallet.toString());
      localStorage.setItem('stakedBalance', '0');

      alert("Successfully unstaked " + amountToWithdraw.toLocaleString() + " $DGT!");
    } else {
      alert("No tokens to unstake.");
    }
  };

  const sections = [
    { 
      title: "Storytelling", 
      content: "Digital Gold Token ($DGT) was created to bridge the timeless wealth-preservation power of physical gold with the speed, transparency, and liquidity of decentralized finance (DeFi) on the Solana blockchain, solving the systemic issues of volatility and high fees." 
    },
    { 
      title: "Tokenomics", 
      content: "Total supply is strictly capped at 500,000,000,000 $DGT (non-inflationary). Allocation: 50% Liquidity Pool, 25% Staking Rewards Reserve, 15% Marketing/Dev, and 10% Core Team." 
    },
    { 
      title: "Whitepaper", 
      content: (
        <div style={{ textAlign: 'left', fontSize: '14px', lineHeight: '1.6' }}>
          <h3 style={{ color: '#f59e0b' }}>DIGITAL GOLD TOKEN - Official Whitepaper v1.0</h3>
          <p><strong>Ticker:</strong> $DGT | <strong>Total Supply:</strong> 500,000,000,000 | <strong>Network:</strong> Solana (SPL) | <strong>Date:</strong> July 2026</p>
          <h4>1. EXECUTIVE SUMMARY</h4>
          <p>Digital Gold Token ($DGT) bridges the timeless wealth-preservation power of physical gold with the speed, transparency, and liquidity of DeFi.</p>
          <h4>1.1 The Problem</h4>
          <p>Modern crypto markets suffer from speculative price swings and network congestion. $DGT provides a stable, high-yield ecosystem.</p>
          <h4>2. KEY FEATURES & UTILITY</h4>
          <p><strong>Gold-Backed Concept:</strong> Institutional-grade digital alternative for the modern web3 portfolio.</p>
          <p><strong>High-Yield Staking:</strong> Committed holders earn 33% p/a yield with a 7-day minimum lock duration.</p>
          <h4>3. TOKENOMICS</h4>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Liquidity Pool: 50% (250B $DGT)</li>
            <li>Staking Rewards: 25% (125B $DGT)</li>
            <li>Marketing/Dev: 15% (75B $DGT)</li>
            <li>Core Team: 10% (50B $DGT)</li>
          </ul>
          <h4>4. SECURITY & LEGAL</h4>
          <p>Transactions are verified on-chain. <em>Disclaimer: DGT is a utility asset. Participation involves risk; perform your own research.</em></p>
        </div>
      ) 
    }
  ];

  return (
    <main style={{ backgroundColor: '#0a0a0a', color: '#ffffff', minHeight: '100vh', width: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#171717', padding: '20px', borderRadius: '15px', border: '1px solid #333', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img src="https://i.postimg.cc/FHcpQGs8/opengraph-image.png" alt="DGT Logo" width={50} height={50} style={{ borderRadius: '10px' }}/>
            <h2 style={{ color: '#ffffff', margin: 0, fontSize: '20px' }}>Digital Gold Token ($DGT)</h2>
          </div>
          <appkit-button />
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
          <section style={{ backgroundColor: '#171717', padding: '40px', borderRadius: '20px', border: '1px solid #333' }}>
            <h1 style={{ color: '#f59e0b', fontSize: '32px', marginBottom: '20px' }}>Staking Dashboard</h1>
            <div style={{ backgroundColor: '#000', padding: '30px', borderRadius: '15px', border: '1px solid #333' }}>
              <p style={{ color: '#888', fontSize: '12px', textTransform: 'uppercase' }}>Total Staked Balance</p>
              <h2 style={{ fontSize: '32px', color: '#f59e0b', margin: '15px 0', fontFamily: 'monospace' }}>{stakedBalance.toLocaleString()} $DGT</h2>

              <div style={{ marginBottom: '20px', fontSize: '12px', color: '#666' }}>
                Contract: <span style={{ color: '#f59e0b', fontFamily: 'monospace', cursor: 'pointer' }} onClick={() => navigator.clipboard.writeText(STAKING_CONTRACT_ADDRESS)}>
                  {STAKING_CONTRACT_ADDRESS}
                </span>
              </div>

              <input type="number" placeholder="Enter amount to stake" value={stakeAmount} onChange={(e) => setStakeAmount(e.target.value)} style={{ width: '100%', padding: '15px', marginBottom: '15px', backgroundColor: '#171717', border: '1px solid #333', borderRadius: '10px', color: '#fff' }}/>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={handleStake} style={{ flex: 1, padding: '15px', backgroundColor: '#f59e0b', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>Stake</button>
                <button onClick={handleUnstake} style={{ flex: 1, padding: '15px', backgroundColor: 'transparent', border: '1px solid #f59e0b', color: '#f59e0b', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>Unstake All</button>
              </div>
            </div>
          </section>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {sections.map((sec) => (
              <div key={sec.title} style={{ backgroundColor: '#171717', borderRadius: '15px', border: '1px solid #333', overflow: 'hidden' }}>
                <button onClick={() => setOpenSection(openSection === sec.title ? null : sec.title)} style={{ width: '100%', padding: '25px', backgroundColor: 'transparent', border: 'none', color: '#f59e0b', fontSize: '18px', fontWeight: 'bold', textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>
                  {sec.title} <span>{openSection === sec.title ? '−' : '+'}</span>
                </button>
                {openSection === sec.title && (
                  <div style={{ padding: '0 25px 25px', color: '#ccc', borderTop: '1px solid #333', paddingTop: '15px', lineHeight: '1.6' }}>
                    {typeof sec.content === 'string' ? <p>{sec.content}</p> : sec.content}
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