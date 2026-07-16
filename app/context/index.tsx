'use client';
import { createAppKit } from '@reown/appkit/react';
import { EthersAdapter } from '@reown/appkit-adapter-ethers';
import { mainnet, sepolia } from '@reown/appkit/networks';

const projectId = 'd9bb333cc9083a9af46604f48edb5571'; // Ang ID mo

const metadata = {
  name: 'Digital Gold Token',
  description: 'DGT Staking Dashboard',
  // Habang nasa 'npm run dev' ka, gamitin mo ito:
  url: 'http://localhost:3000', 
  icons: ['https://avatars.githubusercontent.com/u/179229932']
};

export const modal = createAppKit({
  adapters: [new EthersAdapter()],
  networks: [mainnet, sepolia],
  metadata,
  projectId,
  features: { analytics: true }
});

export function AppKitProvider({ children }: { children: React.ReactNode }) {
  // Dito, ang modal ay na-initialize na sa taas (sa labas ng function)
  // Pero siguraduhin na ang app ay naka-wrap sa provider na ito.
  return <>{children}</>;
}