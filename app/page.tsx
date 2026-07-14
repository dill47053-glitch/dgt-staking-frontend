'use client';
import { useState } from 'react';
import WalletButton from './WalletButton';

export default function Home() {
  // Ginawa nating state ang stakedBalance para mababawasan pag nag-unstake
  const [stakedBalance, setStakedBalance] = useState(100000000000);
  const [openSection, setOpenSection] = useState<string | null>('Storytelling');

  // Logic para sa staking at unstaking
  const handleStake = () => {
    alert("Staking functionality connected!");
  };

  const handleUnstake = () => {
    if (stakedBalance > 0) {
      setStakedBalance(0); // I-reset ang balance
      alert("Tokens unstaked successfully!");
    } else {
      alert("No tokens to unstake.");
    }
  };

  const sections = [
    { title: "Storytelling", content: "Digital Gold Token ($DGT) is a decentralized staking ecosystem built to provide stability and long-term value to holders." },
    { title: "Tokenomics", content: "Total Supply: 500 Billion $DGT. 40% allocated for staking rewards, 30% for liquidity, and 30% for ecosystem development." },
    { title: "Whitepaper", content: "Our architecture utilizes a high-performance C++ engine for fast transactions, integrated with a secure Next.js frontend." }
  ];

  return (
    <main style={{ backgroundColor: '#0a0a0a', color: '#ffffff', minHeight: '100vh', width: '100%', padding: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        
        {/* Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#171717', padding: '20px', borderRadius: '15px', border: '1px solid #333', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <img src="https://i.postimg.cc/FHcpQGs8/opengraph-image.png" alt="DGT Logo" width={50} height={50} style={{ borderRadius: '10px' }}/>
            <div>
              <p style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase' }}>Contract Address</p>
              <p style={{ fontSize: '14px', color: '#f59e0b', fontFamily: 'monospace' }}>0x7353BA5DB88Cc9F2778aeDe8F17975f9c781edC6</p>
            </div>
          </div>
          <WalletButton />
        </header>

        {/* Content Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          
          {/* Staking Section */}
          <section style={{ backgroundColor: '#171717', padding: '40px', borderRadius: '20px', border: '1px solid #333' }}>
            <h1 style={{ color: '#f59e0b', fontSize: '40px', marginBottom: '20px' }}>Digital Gold Token</h1>
            <p style={{ color: '#ccc', marginBottom: '40px' }}>Stake your $DGT to earn rewards in our decentralized ecosystem.</p>
            
            <div style={{ backgroundColor: '#000', padding: '30px', borderRadius: '15px', border: '1px solid #333' }}>
              <p style={{ color: '#888', fontSize: '12px', textTransform: 'uppercase' }}>Staked Balance</p>
              <h2 style={{ fontSize: '32px', color: '#f59e0b', margin: '10px 0 30px' }}>{stakedBalance.toLocaleString()}</h2>
              
              <div style={{ display: 'flex', gap: '10px' }}>
                <button 
                  onClick={handleStake}
                  style={{ flex: 1, padding: '15px', backgroundColor: '#f59e0b', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}
                >
                  Stake Tokens
                </button>
                <button 
                  onClick={handleUnstake}
                  style={{ flex: 1, padding: '15px', backgroundColor: 'transparent', border: '1px solid #f59e0b', color: '#f59e0b', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}
                >
                  Unstake
                </button>
              </div>
            </div>
          </section>

          {/* Right Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {sections.map((sec) => (
              <div key={sec.title} style={{ backgroundColor: '#171717', borderRadius: '15px', border: '1px solid #333', overflow: 'hidden' }}>
                <button 
                  onClick={() => setOpenSection(openSection === sec.title ? null : sec.title)}
                  style={{ width: '100%', padding: '25px', backgroundColor: 'transparent', border: 'none', color: '#f59e0b', fontSize: '18px', fontWeight: 'bold', textAlign: 'left', cursor: 'pointer' }}
                >
                  {sec.title} {openSection === sec.title ? '−' : '+'}
                </button>
                {openSection === sec.title && (
                  <div style={{ padding: '0 25px 25px', color: '#ccc', borderTop: '1px solid #333', paddingTop: '15px' }}>
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