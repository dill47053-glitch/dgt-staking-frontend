'use client'
import { useReadContract, useWriteContract, useAccount } from 'wagmi';
import { useState } from 'react';
import DGTStakingABI from './DGT.json';

const STAKING_CONTRACT_ADDRESS = '0xE87d902f8Db9eb3b359a516F093Bf6Bcf7248a6A';
const DGT_TOKEN = '0x7353BA5DB88Cc9F2778aeDe8F17975f9c781edC6';

export default function Home() {
  const { address } = useAccount();
  const { writeContract } = useWriteContract();
  const [stakeAmount, setStakeAmount] = useState('');
  
  // Dito natin ilalagay yung logic ng features mo (Storytelling, etc.)
  const sections = [
    { title: "Storytelling", content: "..." },
    { title: "Tokenomics", content: "..." },
    { title: "Whitepaper", content: "..." }
  ];

  const { data: stakedData } = useReadContract({
    address: STAKING_CONTRACT_ADDRESS as `0x${string}`,
    abi: DGTStakingABI as const,
    functionName: 'stakingBalance',
    args: [address],
  });

  const stakedBalance = stakedData ? Number(stakedData) : 0;

  const handleStake = () => {
    writeContract({
      address: STAKING_CONTRACT_ADDRESS as `0x${string}`,
      abi: DGTStakingABI,
      functionName: 'stake', 
      args: [BigInt(stakeAmount || 0)],
    });
  };

  return (
    <main style={{ backgroundColor: '#0a0a0a', color: '#ffffff', minHeight: '100vh', padding: '2rem' }}>
       <h1>Digital Gold Token Staking</h1>
       <p>Total Staked: {stakedBalance.toLocaleString()} $DGT</p>
       
       <input 
         style={{ color: 'black' }} 
         value={stakeAmount} 
         onChange={(e) => setStakeAmount(e.target.value)} 
         placeholder="Amount"
       />
       <button onClick={handleStake}>Stake Now</button>

       {/* Dito ibabalik natin yung features */}
       <div style={{ marginTop: '2rem' }}>
         {sections.map((sec) => (
           <div key={sec.title}>
             <h3>{sec.title}</h3>
             <p>{sec.content}</p>
           </div>
         ))}
       </div>
    </main>
  );
}